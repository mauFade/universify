import { createTable, generateId } from "../utils";
import { sql } from "drizzle-orm";

export const users = createTable("users", (d) => ({
  id: d
    .varchar("id", { length: 32 })
    .primaryKey()
    .$defaultFn(() => generateId()),

  firstName: d.varchar("first_name", { length: 255 }).notNull(),

  lastName: d.varchar("last_name", { length: 255 }).notNull(),

  clerkUserId: d.varchar("clerk_user_id", { length: 255 }).notNull(),

  email: d.varchar("email", { length: 255 }).notNull().unique(),

  avatar: d.varchar("avatar", { length: 255 }),

  createdAt: d.timestamp("created_at").default(sql`NOW()`),

  updatedAt: d.timestamp("updated_at").$onUpdateFn(() => sql`NOW()`),
}));

export type User = typeof users.$inferSelect;
