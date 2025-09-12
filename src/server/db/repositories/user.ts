import { eq } from "drizzle-orm";
import { db } from "..";
import { users } from "../schema/users";

/**
 * Select a user by their ID
 * @param id - The ID of the user to select
 * @returns The user
 */
export const selectUserById = async (id: string) => {
  const user = await db.query.users.findFirst({
    where: eq(users.id, id),
  });
  return user;
};

/**
 * Selects a user by email
 * @param email - The email of the user to select
 * @returns The user
 */
export const selectUserByEmail = async (email: string) => {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  return user;
};

/**
 * Finds a user by email or inserts in case of not being found
 * @param data - The data of the user to find or insert
 * @returns The user
 */
export const findByEmailOrInsert = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  clerkUserId: string;
  avatar: string;
  hasAvatar: boolean;
}) => {
  const user = await selectUserByEmail(data.email);
  if (user) {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      avatar: user.avatar,
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
  };
};
