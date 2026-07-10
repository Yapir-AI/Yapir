import { sValidator } from "@hono/standard-validator";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { badRequest } from "@/lib/errors/error.factory";
import { hono } from "@/lib/hono/hono.factory";
import { githubConnectorInstallationCallbackRequestSchema } from "./github-connector-installation-callback.dto";

const githubInstallationCallbackPath =
  "/api/git-connectors/github/installations/callback";
const githubInstallationStateCookie = "yapir_github_installation_state";

async function statesMatch(provided: string, expected?: string) {
  if (!expected) return false;

  const encoder = new TextEncoder();
  const [providedHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(provided)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);

  return crypto.subtle.timingSafeEqual(providedHash, expectedHash);
}

export const githubConnectorRoutes = hono()
  .post("/installations", async (c) => {
    const state = crypto.randomUUID();
    const location =
      await c.var.container.githubConnectorInstallationStartOperation.execute(
        state,
      );

    setCookie(c, githubInstallationStateCookie, state, {
      httpOnly: true,
      maxAge: 600,
      path: githubInstallationCallbackPath,
      sameSite: "Lax",
      secure: new URL(c.req.url).protocol === "https:",
    });

    return c.redirect(location, 303);
  })
  .get(
    "/installations/callback",
    sValidator("query", githubConnectorInstallationCallbackRequestSchema),
    async (c) => {
      const requestDto = c.req.valid("query");
      const expectedState = getCookie(c, githubInstallationStateCookie);

      deleteCookie(c, githubInstallationStateCookie, {
        path: githubInstallationCallbackPath,
      });

      if (!(await statesMatch(requestDto.state, expectedState))) {
        throw badRequest("INVALID_GITHUB_INSTALLATION_STATE");
      }

      const connector =
        await c.var.container.githubConnectorInstallationCallbackOperation.execute(
          requestDto,
        );

      return c.json({ connector });
    },
  );
