import { createCallerFactory, createTRPCRouter } from "./setup/context";
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
  user: userRouter,
});

export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
