import { sValidator } from "@hono/standard-validator";
import { hono } from "#api/lib/hono/hono.factory";
import { createStateCookie } from "#api/lib/hono/state-cookie.middleware";
import { githubConnectorInstallationCallbackRequestSchema } from "./github-connector-installation-callback.dto";

const { createStateMiddleware, verifyStateMiddleware, getState } =
  createStateCookie(
    "yapir_github_installation_state",
    "/api/git-connectors/github/installations/callback",
  );

export const githubConnectorRoutes = hono()
  .post("/installations", createStateMiddleware, async (c) => {
    const state = getState(c);
    const location =
      await c.var.container.githubConnectorInstallationStartOperation.execute(
        state,
      );

    return c.redirect(location, 303);
  })
  .get(
    "/installations/callback",
    sValidator("query", githubConnectorInstallationCallbackRequestSchema),
    (c) => verifyStateMiddleware(c.req.valid("query").state),
    async (c) => {
      const requestDto = c.req.valid("query");
      const connector =
        await c.var.container.githubConnectorInstallationCallbackOperation.execute(
          requestDto,
        );

      return c.json({ connector });
    },
  );
