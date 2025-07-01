import { Octokit } from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import { forbidden, redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { assertAuthenticated } from "@/lib/auth/check";
import { githubConfig } from "@/lib/git/connectors/github/model/githubConfigSchema";
import prisma from "@/lib/db";
import { routes } from "@/lib/route";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ connectorId: string }> },
) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) return forbidden();
  await assertAuthenticated();

  const Octo = Octokit.plugin(restEndpointMethods);
  const octokit = new Octo();

  const response = await octokit.rest.apps.createFromManifest({ code });

  const config = githubConfig(response.data);
  await prisma.gitConnector.create({
    data: {
      id: (await params).connectorId,
      type: "GITHUB",
      config: JSON.stringify(config),
    },
  });

  redirect(routes.git);
}
