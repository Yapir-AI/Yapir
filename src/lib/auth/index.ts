import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { createAuthMiddleware } from "better-auth/api";
import { forbidden } from "next/navigation";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prismaClient from "@/lib/db";

const beforeMiddleWare = createAuthMiddleware(async (ctx) => {
  if (ctx.path !== "/sign-up/email") {
    return;
  }
  const user = await prismaClient.user.findFirst();
  if (user) forbidden();
});

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [process.env.BETTER_AUTH_URL!],
  plugins: [nextCookies()],
  database: prismaAdapter(prismaClient, { provider: "postgresql" }),
  hooks: {
    before: beforeMiddleWare,
  },
});
