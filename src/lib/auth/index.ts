import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db";
import { nextCookies } from "better-auth/next-js";
import { createAuthMiddleware } from "better-auth/api";
import { forbidden } from "next/navigation";
import { env } from "@/lib/env";

const beforeMiddleWare = createAuthMiddleware(async (ctx) => {
  if (ctx.path !== "/sign-up/email") {
    return;
  }
  const user = await db.query.user.findFirst();
  if (user) forbidden();
});

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [env.betterAuth.url],
  plugins: [nextCookies()],
  database: drizzleAdapter(db, { provider: "pg" }),
  hooks: {
    before: beforeMiddleWare,
  },
});
