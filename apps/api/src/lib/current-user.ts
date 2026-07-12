import type { auth as authType } from "#api/lib/auth";
import { forbidden } from "#api/lib/errors/error.factory";

export function currentUser(auth: typeof authType.$Infer.Session.user) {
  function assertRole(role: "user" | "admin") {
    if (auth.role !== "admin" && auth.role !== role) {
      throw forbidden("FORBIDDEN");
    }
  }

  return {
    ...auth,
    assertRole,
  };
}

export type CurrentUser = ReturnType<typeof currentUser>;
