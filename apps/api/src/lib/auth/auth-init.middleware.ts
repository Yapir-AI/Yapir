import { createMiddleware } from "hono/factory";
import { HonoEnv } from "#api/lib/hono/hono.factory";
import { createAuth } from "#api/lib/auth/auth.factory";

export const authInitMiddleware = createMiddleware<HonoEnv>(async (c, next) => {
  const auth = createAuth(c.get("db"));
  c.set("auth", auth);

  return next();
});
