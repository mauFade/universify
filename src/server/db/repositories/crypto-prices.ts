import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type * as schema from "../schema";
import { fetchBitcoinHistory } from "@/server/services/coingecko";
import { cryptoPrices } from "../schema";
import { getLastSyncDate, sync } from "./sync-logs";

import { differenceInDays, isToday } from "date-fns";
import { and, eq, gte, lte } from "drizzle-orm";
import type { CryptoSymbols } from "@/server/validators/crypto-prices";

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
    // If the last sync is today, do not sync again
    if (lastSync && isToday(lastSync.syncDate)) {
      return;
    }
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
    // If the last sync is today, do not sync again
    if (lastSync && isToday(lastSync.syncDate)) {
      return;
    }
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
    // If the last sync is today, do not sync again
    if (lastSync && isToday(lastSync.syncDate)) {
      return;
    }
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
    // If the last sync is today, do not sync again
    if (lastSync && isToday(lastSync.syncDate)) {
      return;
    }
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
    // If the last sync is today, do not sync again
    if (lastSync && isToday(lastSync.syncDate)) {
      return;
    }
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

/**
 * Select crypto prices based on the symbol with optional dates range
 * @param db - The database connection
 * @param symbol - The symbol of the crypto price to select
 * @param startDate - The start date of the date range
 * @param endDate - The end date of the date range
 * @returns The crypto prices
 */
export const selectCryptoPrices = async (
  db: NodePgDatabase<typeof schema>,
  params: { symbol: CryptoSymbols; startDate?: Date; endDate?: Date },
) => {
  console.log(params);
  const { symbol, startDate, endDate } = params;
  const conditions = [eq(cryptoPrices.symbol, symbol)];

  if (startDate) {
    conditions.push(gte(cryptoPrices.timestamp, startDate));
  }

  if (endDate) {
    conditions.push(lte(cryptoPrices.timestamp, endDate));
  }

  const prices = await db.query.cryptoPrices.findMany({
    where: and(...conditions),
  });
  return prices;
};
