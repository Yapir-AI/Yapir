import { assertAuthenticated } from "@/lib/auth/check";
import { NextRequest } from "next/server";
import { z } from "zod";
import { validateUrlParams } from "@/lib/validation/parseSearchParams";
import { redirect } from "next/navigation";
import ky from "ky";
import { container } from "@/lib/di/container";
import { gitlabAuthResponseSchema } from "@/lib/git/connectors/gitlab/model/authResponseSchema";
import { routes } from "@/lib/route";

const schema = z.object({
  code: z.string(),
  id: z.string().uuid(),
});

export async function GET(req: NextRequest) {
  await assertAuthenticated();
  const { id, code } = validateUrlParams(req.nextUrl.searchParams, schema);
  const gitlabConnectorService = container.resolve("gitlabConnectorService");

  const connector = await gitlabConnectorService.findById(id);

  console.log({ connector });

  const json = await ky
    .post("oauth/token", {
      prefixUrl: connector.url,
      body: new URLSearchParams({
        client_id: connector.applicationId,
        client_secret: connector.applicationSecret,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: connector.redirectUri + `?id=${id}`,
      }),
    })
    .json();

  const authResponse = gitlabAuthResponseSchema.parse(json);

  await gitlabConnectorService.updateToken(id, authResponse);

  return redirect(routes.git);
}
