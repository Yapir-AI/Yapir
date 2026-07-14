import { createMiddleware } from "hono/factory";
import { createDb } from "#api/lib/db/index";
import { HonoEnv } from "#api/lib/hono/hono.factory";

export const dbInitMiddleware = createMiddleware<HonoEnv>(async (c, next) => {
  c.set("db", createDb());
  await next();
});
