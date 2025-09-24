import { z } from "zod";

export type CryptoSymbols = "btc" | "eth" | "sol" | "bnb" | "xrp";

export const SelectCryptoPricesParams = z.object({
  symbol: z.enum(["btc", "eth", "sol", "bnb", "xrp"]),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});
