import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { type Db } from "#api/lib/db";
import * as schema from "#api/lib/db/auth-schema";
import { admin } from "better-auth/plugins/admin";

export const createAuth = (db: Db) =>
  betterAuth({
    database: drizzleAdapter(db, {
      provider: "pg",
      schema,
    }),
    experimental: { joins: true },
    emailAndPassword: { enabled: true, minPasswordLength: 8 },
    plugins: [admin()],
  });

export type Auth = ReturnType<typeof createAuth>;
