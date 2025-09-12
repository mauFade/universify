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
    const prices = await fetchBitcoinHistory("bitcoin", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "btc",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await db.insert(cryptoPrices).values(rows);
  }
};

export const seedCryptoPricesETH = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const existingPrices = await db
    .select()
    .from(cryptoPrices)
    .where(eq(cryptoPrices.symbol, "eth"));

  if (existingPrices.length === 0) {
    const prices = await fetchBitcoinHistory("ethereum", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "eth",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await db.insert(cryptoPrices).values(rows);
  }
};

export const seedCryptoPricesSOL = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const existingPrices = await db
    .select()
    .from(cryptoPrices)
    .where(eq(cryptoPrices.symbol, "sol"));

  if (existingPrices.length === 0) {
    const prices = await fetchBitcoinHistory("solana", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "sol",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await db.insert(cryptoPrices).values(rows);
  }
};

export const seedCryptoPricesBNB = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const existingPrices = await db
    .select()
    .from(cryptoPrices)
    .where(eq(cryptoPrices.symbol, "bnb"));

  if (existingPrices.length === 0) {
    const prices = await fetchBitcoinHistory("binancecoin", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "bnb",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await db.insert(cryptoPrices).values(rows);
  }
};

export const seedCryptoPricesXRP = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const existingPrices = await db
    .select()
    .from(cryptoPrices)
    .where(eq(cryptoPrices.symbol, "xrp"));

  if (existingPrices.length === 0) {
    const prices = await fetchBitcoinHistory("ripple", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "xrp",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await db.insert(cryptoPrices).values(rows);
  }
};
