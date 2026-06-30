import { env } from "cloudflare:workers";
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(env.DB.connectionString);
