import { eq } from "drizzle-orm";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import { users } from "../schema/users";
import type * as schema from "../schema";

/**
 * Select a user by their ID
 * @param db - The database connection
 * @param id - The ID of the user to select
 * @returns The user
 */
export const selectUserById = async (
  db: NodePgDatabase<typeof schema>,
  id: string,
) => {
  const user = await db.query.users.findFirst({
    where: eq(users.id, id),
  });
  return user;
};

/**
 * Selects a user by email
 * @param db - The database connection
 * @param email - The email of the user to select
 * @returns The user
 */
export const selectUserByEmail = async (
  db: NodePgDatabase<typeof schema>,
  email: string,
) => {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  return user;
};

/**
 * Finds a user by email or inserts in case of not being found
 * @param db - The database connection
 * @param data - The data of the user to find or insert
 * @returns The user
 */
export const findByEmailOrInsert = async (
  db: NodePgDatabase<typeof schema>,
  data: {
    firstName: string;
    lastName: string;
    email: string;
    clerkUserId: string;
    avatar: string;
    hasAvatar: boolean;
  },
) => {
  const user = await selectUserByEmail(db, data.email);
  if (user) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
    };
  }
  const [u] = await db
    .insert(users)
    .values({
      ...data,
      avatar: data.hasAvatar ? data.avatar : undefined,
    })
    .returning();

  return {
    id: u.id,
    firstName: u.firstName,
    lastName: u.lastName,
    email: u.email,
    avatar: u.avatar,
    isAdmin: u.isAdmin,
  };
};
