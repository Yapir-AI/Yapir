import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/node-postgres";
import { authRelations } from "@/lib/db/auth-schema";
import { relations } from "@/lib/db/schema";

export const db = drizzle(env.DB.connectionString, {
  relations: { ...relations, ...authRelations },
});

export type Db = typeof db;
