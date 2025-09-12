import { createCallerFactory, createTRPCRouter } from "./setup/context";
import { userRouter } from "./routers/user";
import { cryptoPricesRouter } from "./routers/crypto-prices";

export const appRouter = createTRPCRouter({
  user: userRouter,
  cryptoPrices: cryptoPricesRouter,
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
