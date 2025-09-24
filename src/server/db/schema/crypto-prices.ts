import { sql } from "drizzle-orm";
import { unique, index } from "drizzle-orm/pg-core";
import { createTable, generateId } from "../utils";

export const cryptoPrices = createTable(
  "crypto_prices",
  (d) => ({
    id: d
      .varchar("id", { length: 32 })
      .primaryKey()
      .$defaultFn(() => generateId()),

    symbol: d.varchar("symbol", { length: 10 }).notNull(),

    priceUsd: d.numeric("price_usd", { precision: 18, scale: 8 }).notNull(),

    createdAt: d.timestamp("created_at").notNull().default(sql`NOW()`),

    timestamp: d.timestamp("timestamp", { withTimezone: false }).notNull(),
  }),
  (table) => [
    unique("symbol_timestamp_unique").on(table.symbol, table.timestamp),
    index("symbol_idx").on(table.symbol),
  ],
);
