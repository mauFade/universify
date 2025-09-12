import { createTRPCRouter, authenticatedProcedure } from "../setup/context";

export const cryptoPricesRouter = createTRPCRouter({
  getPrices: authenticatedProcedure.query(async ({ ctx }) => {
    const prices = [1, 2, 3];
    return prices;
  }),
});
