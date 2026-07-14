/// <reference path="../worker-configuration.d.ts" />

import { getSandbox } from "@cloudflare/sandbox";
import { env } from "cloudflare:workers";
import { noteTemplateRoutes } from "#api/lib/note-templates/note-template.routes";
import { authMiddleware } from "#api/lib/auth/auth.middleware";
import { gitConnectorRoutes } from "#api/lib/git-connectors/git-connector.routes";
import { hono } from "#api/lib/hono/hono.factory";

export { Sandbox } from "@cloudflare/sandbox";

const app = hono()
  .on(["POST", "GET"], "/api/auth/*", async (c) => {
    const { auth } = await import("#api/lib/auth");
    return auth.handler(c.req.raw);
  })
  .use(authMiddleware)
  .route("/api/note-templates", noteTemplateRoutes)
  .route("/api/git-connectors", gitConnectorRoutes);

export type AppType = typeof app;

export default app;
