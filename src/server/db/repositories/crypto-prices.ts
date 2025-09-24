import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type * as schema from "../schema";
import { fetchBitcoinHistory } from "@/services/coingecko";
import { cryptoPrices } from "../schema";
import { getLastSyncDate, sync } from "./sync-logs";

import { differenceInDays } from "date-fns";

export const seedCryptoPricesBTC = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const lastSync = await getLastSyncDate(db);

  // Never sync use case
  if (!lastSync) {
    const prices = await fetchBitcoinHistory("bitcoin", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "btc",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  } else {
    const { syncDate } = lastSync;

    const diff = differenceInDays(new Date(), syncDate);

    const prices = await fetchBitcoinHistory("bitcoin", diff);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "btc",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  }
};

export const seedCryptoPricesETH = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const lastSync = await getLastSyncDate(db);

  // Never sync use case
  if (!lastSync) {
    const prices = await fetchBitcoinHistory("ethereum", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "eth",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  } else {
    const { syncDate } = lastSync;

    const diff = differenceInDays(new Date(), syncDate);

    const prices = await fetchBitcoinHistory("ethereum", diff);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "eth",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  }
};

export const seedCryptoPricesSOL = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const lastSync = await getLastSyncDate(db);

  // Never sync use case
  if (!lastSync) {
    const prices = await fetchBitcoinHistory("solana", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "sol",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  } else {
    const { syncDate } = lastSync;

    const diff = differenceInDays(new Date(), syncDate);

    const prices = await fetchBitcoinHistory("solana", diff);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "sol",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  }
};

export const seedCryptoPricesBNB = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const lastSync = await getLastSyncDate(db);

  // Never sync use case
  if (!lastSync) {
    const prices = await fetchBitcoinHistory("binancecoin", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "bnb",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  } else {
    const { syncDate } = lastSync;

    const diff = differenceInDays(new Date(), syncDate);

    const prices = await fetchBitcoinHistory("binancecoin", diff);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "bnb",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  }
};

export const seedCryptoPricesXRP = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const lastSync = await getLastSyncDate(db);

  // Never sync use case
  if (!lastSync) {
    const prices = await fetchBitcoinHistory("ripple", 365);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "xrp",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  } else {
    const { syncDate } = lastSync;

    const diff = differenceInDays(new Date(), syncDate);

    const prices = await fetchBitcoinHistory("ripple", diff);

    const rows = prices.map(([timestampMs, price]) => ({
      symbol: "xrp",
      priceUsd: price.toString(),
      timestamp: new Date(timestampMs),
    }));

    await Promise.all([db.insert(cryptoPrices).values(rows), sync(db)]);
  }
};
