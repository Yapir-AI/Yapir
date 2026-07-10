import type { auth as authType } from "@/lib/auth";
import { forbidden } from "@/lib/errors/error.factory";

export function currentUser(auth: typeof authType.$Infer.Session.user) {
  function assertRole(role: "user" | "admin") {
    if (auth.role !== "admin") {
      throw forbidden("FORBIDDEN");
    }
  }

  return {
    ...auth,
    assertRole,
  };
}

export type CurrentUser = ReturnType<typeof currentUser>;
