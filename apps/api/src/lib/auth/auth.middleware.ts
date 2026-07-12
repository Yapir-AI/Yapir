import { createMiddleware } from "hono/factory";
import { unauthorized } from "#api/lib/errors/error.factory";
import { createRequestContainer } from "#api/lib/container";
import { currentUser } from "#api/lib/current-user";

export const authMiddleware = createMiddleware(async (c, next) => {
  const { auth } = await import("#api/lib/auth");
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) throw unauthorized("UNAUTHORIZED");

  const requestContainer = createRequestContainer({
    currentUser: currentUser(session.user),
  });
  c.set("container", requestContainer.cradle);

  try {
    await next();
  } finally {
    await requestContainer.dispose();
  }
});
