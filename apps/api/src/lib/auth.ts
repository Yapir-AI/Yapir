import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "@better-auth/drizzle-adapter/relations-v2";
import { admin } from "better-auth/plugins/admin";
import {
  adminAc,
  defaultStatements,
  userAc,
} from "better-auth/plugins/admin/access";
import { createAccessControl } from "better-auth/plugins/access";
import { db } from "@/lib/db";

const accessControl = createAccessControl(defaultStatements);
const platformAdmin = accessControl.newRole(adminAc.statements);
const platformMember = accessControl.newRole(userAc.statements);

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "pg" }),
  experimental: { joins: true },
  plugins: [
    admin({
      ac: accessControl,
      defaultRole: "member",
      roles: { admin: platformAdmin, member: platformMember },
    }),
  ],
});
