import { createTable, generateId } from "../utils";
import { sql } from "drizzle-orm";

export const syncLogs = createTable("sync_logs", (d) => ({
  id: d
    .varchar("id", { length: 32 })
    .primaryKey()
    .$defaultFn(() => generateId()),
  syncDate: d.timestamp("last_sync").default(sql`NOW()`).notNull(),
}));

export type SyncLog = typeof syncLogs.$inferSelect;
