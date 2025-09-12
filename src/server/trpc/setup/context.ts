import { auth } from "@clerk/nextjs/server";
import { db } from "@/server/db";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";

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
            error.cause instanceof Error && error.cause.name === "ZodError"
              ? error.cause.message
              : null,
        },
      };
    },
  });

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({
    ctx: {
      ...ctx,
      user: ctx.user,
    },
  });
});

export const authenticatedProcedure = t.procedure.use(enforceUserIsAuthed);

/**
 * Create a server-side caller.
 *
 * @see https://trpc.io/docs/server/server-side-calls
 */
export const createCallerFactory = t.createCallerFactory;
