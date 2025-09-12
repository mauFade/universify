import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type * as schema from "../schema";
import { fetchBitcoinHistory } from "@/services/coingecko";
import { cryptoPrices } from "../schema";
import { eq } from "drizzle-orm";

export const seedCryptoPricesBTC = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const existingPrices = await db
    .select()
    .from(cryptoPrices)
    .where(eq(cryptoPrices.symbol, "btc"));

  if (existingPrices.length === 0) {
    const prices = await fetchBitcoinHistory(365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "btc",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await db.insert(cryptoPrices).values(rows);
  }
};
