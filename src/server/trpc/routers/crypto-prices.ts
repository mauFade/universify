import { SelectCryptoPricesParams } from "@/server/validators/crypto-prices";
import { createTRPCRouter, authenticatedProcedure } from "../setup/context";
import {
  selectCryptoPrices,
  selectGeneralCryptoPrices,
} from "@/server/db/repositories/crypto-prices";

export const cryptoPricesRouter = createTRPCRouter({
  selectCryptoPrices: authenticatedProcedure
    .input(SelectCryptoPricesParams)
    .query(async ({ ctx, input }) => {
      const prices = await selectCryptoPrices(ctx.db, input);
      return prices;
    }),

  selectGeneralCryptoPrices: authenticatedProcedure.query(async ({ ctx }) => {
    const prices = await selectGeneralCryptoPrices(ctx.db);
    return prices;
  }),
});
