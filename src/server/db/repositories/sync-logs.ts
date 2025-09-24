import type * as schema from "../schema";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { syncLogs } from "../schema";
import { desc } from "drizzle-orm";
import { isToday } from "date-fns";

/**
 * Gets the last sync date
 * @param db - The database connection
 * @returns The last sync date (or undefined if no sync has been done)
 */
export const getLastSyncDate = async (db: NodePgDatabase<typeof schema>) => {
  const lastSync = await db.query.syncLogs.findFirst({
    orderBy: desc(syncLogs.syncDate),
  });
  return lastSync;
};

/**
 * Syncs the data
 * @param db - The database connection
 */
export const sync = async (db: NodePgDatabase<typeof schema>) => {
  const lastSync = await getLastSyncDate(db);
  // If the last sync is today, do not sync again
  if (lastSync && isToday(lastSync.syncDate)) {
    return;
  }

  await db.insert(syncLogs).values({ syncDate: new Date() });
};
