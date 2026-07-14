import { createMiddleware } from "hono/factory";
import { unauthorized } from "#api/lib/errors/error.factory";
import { createRequestContainer } from "#api/lib/container";
import { currentUser } from "#api/lib/current-user";
import { HonoEnv } from "#api/lib/hono/hono.factory";

export const authMiddleware = createMiddleware<HonoEnv>(async (c, next) => {
  const session = await c
    .get("auth")
    .api.getSession({ headers: c.req.raw.headers });

  if (!session) throw unauthorized("UNAUTHORIZED");

  const requestContainer = createRequestContainer({
    currentUser: currentUser(session.user),
    db: c.get("db"),
  });
  c.set("container", requestContainer.cradle);

  try {
    await next();
  } finally {
    await requestContainer.dispose();
  }
});
