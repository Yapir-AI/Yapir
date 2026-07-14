import { noteTemplateRoutes } from "#api/lib/note-templates/note-template.routes";
import { authMiddleware } from "#api/lib/auth/auth.middleware";
import { gitConnectorRoutes } from "#api/lib/git-connectors/git-connector.routes";
import { hono } from "#api/lib/hono/hono.factory";
import { authInitMiddleware } from "#api/lib/auth/auth-init.middleware";
import { dbInitMiddleware } from "#api/lib/db/db.middleware";

const app = hono()
  .use(dbInitMiddleware)
  .use(authInitMiddleware)
  .on(["POST", "GET"], "/api/auth/*", async (c) =>
    c.get("auth").handler(c.req.raw),
  )
  .use(authMiddleware)
  .route("/api/note-templates", noteTemplateRoutes)
  .route("/api/git-connectors", gitConnectorRoutes);

export type AppType = typeof app;

export default app;
