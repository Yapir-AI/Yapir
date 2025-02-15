import { z } from "zod";
import { DbDriver } from "@/lib/db/dbDriver";

export const env = z
  .object({
    DATABASE_URL: z.string(),
    DATABASE_DRIVER: z.enum(DbDriver).default("postgres"),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string(),
  })
  .transform((e) => ({
    database: {
      url: e.DATABASE_URL,
      driver: e.DATABASE_DRIVER,
    },
    betterAuth: {
      url: e.BETTER_AUTH_URL,
    },
  }))
  .parse(process.env);

export type Env = typeof env;
