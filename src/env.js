import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
  },
  client: {},
  experimental__runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
});
