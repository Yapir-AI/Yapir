import type { auth } from "@/lib/auth";

export type CurrentUser = typeof auth.$Infer.Session.user;
