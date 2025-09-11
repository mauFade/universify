import { pgTableCreator } from "drizzle-orm/pg-core";
import KSUID from "ksuid";

export function generateId() {
  return KSUID.randomSync().string;
}

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `unvsfy_${name}`);
