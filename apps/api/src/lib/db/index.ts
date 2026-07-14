import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/node-postgres";
import { authRelations } from "#api/lib/db/auth-schema";
import { relations } from "#api/lib/db/schema";

export const createDb = () =>
  drizzle(process.env.DATABASE_URL ?? env.DB.connectionString, {
    relations: { ...relations, ...authRelations },
  });

export type Db = ReturnType<typeof createDb>;
