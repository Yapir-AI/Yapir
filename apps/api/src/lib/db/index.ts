import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/node-postgres";
import { authRelations } from "@/lib/db/auth-schema";

export const db = drizzle(env.DB.connectionString, {
  relations: { ...authRelations },
});
