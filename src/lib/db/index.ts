import { drizzle as postgresDrizzle } from "drizzle-orm/postgres-js";
import { drizzle as neonDrizzle } from "drizzle-orm/neon-http";
import { drizzle as vercelDrizzle } from "drizzle-orm/vercel-postgres";

import { env } from "@/lib/env";
import * as schema from "./schema";

function createDb() {
  switch (env.database.driver) {
    case "postgres":
      return postgresDrizzle(env.database.url, { schema });
    case "neon":
      return neonDrizzle(env.database.url, { schema });
    case "vercel":
      return vercelDrizzle({ schema });
  }
  env.database.driver satisfies never;
}

export const db = createDb();

export type Db = typeof db;

export type Transaction = Parameters<Parameters<Db["transaction"]>[0]>[0] | Db;
