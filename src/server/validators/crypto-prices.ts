import { z } from "zod";

export type CryptoSymbols = "btc" | "eth" | "sol" | "bnb" | "xrp";

export const SelectCryptoPricesParams = z.object({
  symbol: z.enum(["btc", "eth", "sol", "bnb", "xrp"]),
  earliestDate: z.date().optional(),
  latestDate: z.date().optional(),
});
