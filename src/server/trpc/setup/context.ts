/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { users } from "@/server/db/schema";

// Constants for development timing simulation
const DEV_DELAY_MIN_MS = 100;
const DEV_DELAY_MAX_MS = 400;

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  const { userId } = await auth();

  if (!userId) {
    return {
      db,
      user: null,
      ...opts,
    };
  }

  const user = await db.query.users.findFirst({
    where: eq(users.clerkUserId, userId),
  });

  if (!user) {
    return {
      db,
      user: null,
      ...opts,
    };
  }

  return {
    db,
    user: {
      id: user.id,
      email: user.email,
    },
    ...opts,
  };
};

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */
const t = initTRPC
  .context<Awaited<ReturnType<typeof createTRPCContext>>>()
  .create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.cause instanceof ZodError ? error.cause.flatten() : null,
        },
      };
    },
  });

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router;

/**
 * Middleware for timing procedure execution and adding an artificial delay in development.
 *
 * You can remove this if you don't like it, but it can help catch unwanted waterfalls by simulating
 * network latency that would occur in production but not in local development.
 */
const timingMiddleware = t.middleware(async ({ next }) => {
  const _start = Date.now();

  if (t._config.isDev) {
    // artificial delay in dev
    const waitMs =
      Math.floor(Math.random() * DEV_DELAY_MAX_MS) + DEV_DELAY_MIN_MS;
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  }

  const result = await next();

  return result;
});

const authenticateMiddleware = t.middleware(({ next, ctx }) => {
  return next({ ctx });
});

const errorHandlingMiddleware = t.middleware(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error instanceof TRPCError) {
      throw error;
    }

    console.error(error);
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "An unexpected error occurred",
      cause: error,
    });
  }
});

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure
  .use(timingMiddleware)
  .use(errorHandlingMiddleware);

/**
 * Authenticated procedure
 *
 * If you want a query or mutation to ONLY be accessible to authenticated users, use this. It verifies
 * the user is logged in and guarantees `ctx.userId` is not null, but does not perform authorization
 * checks (no ACE validation). Use this for endpoints that need authentication but not full authorization.
 *
 * @see https://trpc.io/docs/procedures
 */
export const authenticatedProcedure = t.procedure
  .use(timingMiddleware)
  .use(errorHandlingMiddleware)
  .use(authenticateMiddleware);
