import { hono } from "@/lib/hono/hono.factory";
import { githubConnectorRoutes } from "./github/github-connector.routes";

export const gitConnectorRoutes = hono()
  .get("/", async (c) => {
    const result = await c.var.container.gitConnectorListOperation.execute();
    return c.json(result);
  })
  .route("/github", githubConnectorRoutes);
