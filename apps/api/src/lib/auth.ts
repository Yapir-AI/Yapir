import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { admin } from "better-auth/plugins/admin";
import { db } from "#api/lib/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg" }),
  experimental: { joins: true },
  plugins: [admin()],
});
