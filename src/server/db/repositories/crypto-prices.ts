import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import type * as schema from "../schema";
import { fetchBitcoinHistory } from "@/server/services/coingecko";
import { cryptoPrices } from "../schema";
import { getLastSyncDate, sync } from "./sync-logs";

import { differenceInDays, isToday, subDays } from "date-fns";
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
 * @param earliestDate - The earliest date of the date range
 * @param latestDate - The latest date of the date range
 * @returns The crypto prices
 */
export const selectCryptoPrices = async (
  db: NodePgDatabase<typeof schema>,
  params: { symbol: CryptoSymbols; earliestDate?: Date; latestDate?: Date },
) => {
  const { symbol, earliestDate, latestDate } = params;

  const whereClauses = [eq(cryptoPrices.symbol, symbol)];

  if (earliestDate) {
    whereClauses.push(gte(cryptoPrices.timestamp, earliestDate));
  }
  if (latestDate) {
    whereClauses.push(lte(cryptoPrices.timestamp, latestDate));
  }

  const allPrices = await db.query.cryptoPrices.findMany({
    where: and(...whereClauses),
    orderBy: (cryptoPrices, { asc }) => [asc(cryptoPrices.timestamp)],
  });

  // Group by day and limit to 4 entries per day
  const groupedByDay = allPrices.reduce(
    (acc, crypto) => {
      const dayKey = crypto.timestamp.toDateString();

      if (!acc[dayKey]) {
        acc[dayKey] = [];
      }

      // Limit to 4 entries per day
      if (acc[dayKey].length < 4) {
        acc[dayKey].push(crypto);
      }

      return acc;
    },
    {} as Record<string, typeof allPrices>,
  );

  // Flatten and return
  return Object.values(groupedByDay).flat();
};

export const selectGeneralCryptoPrices = async (
  db: NodePgDatabase<typeof schema>,
) => {
  const prices = await db.query.cryptoPrices.findMany({
    where: gte(cryptoPrices.timestamp, subDays(new Date(), 90)),
    orderBy: (cryptoPrices, { asc }) => [asc(cryptoPrices.timestamp)],
  });

  const groupedBySymbol = prices.reduce(
    (acc, crypto) => {
      if (!acc[crypto.symbol]) {
        acc[crypto.symbol] = [];
      }
      acc[crypto.symbol].push(crypto);
      return acc;
    },
    {} as Record<string, typeof prices>,
  );

  const cryptoData: {
    [date: string]: { [crypto: string]: { price: number; timestamp: string } };
  } = {};

  Object.entries(groupedBySymbol).forEach(([crypto, data]) => {
    if (Array.isArray(data)) {
      data.forEach((item) => {
        const timestamp =
          item.timestamp instanceof Date
            ? item.timestamp
            : new Date(item.timestamp);
        const date = timestamp.toISOString().split("T")[0]; // YYYY-MM-DD

        if (!cryptoData[date]) {
          cryptoData[date] = {};
        }

        const price = parseFloat(item.priceUsd);
        const timestampString = timestamp.toISOString();

        if (
          !cryptoData[date][crypto] ||
          new Date(timestampString) >
            new Date(cryptoData[date][crypto].timestamp)
        ) {
          cryptoData[date][crypto] = { price, timestamp: timestampString };
        }
      });
    }
  });

  const processedData = Object.entries(cryptoData)
    .map(([date, cryptoPrices]) => ({
      date,
      btc: cryptoPrices.btc?.price || 0,
      eth: cryptoPrices.eth?.price || 0,
      sol: cryptoPrices.sol?.price || 0,
      xrp: cryptoPrices.xrp?.price || 0,
      bnb: cryptoPrices.bnb?.price || 0,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return processedData;
};
