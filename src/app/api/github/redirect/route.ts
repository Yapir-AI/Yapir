import { Octokit } from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import prismaClient from "@/lib/db";
import { forbidden, redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { assertAuthenticated } from "@/lib/auth/check";
import { routes } from "@/lib/route";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  if (!code) return forbidden();
  await assertAuthenticated();

  const Octo = Octokit.plugin(restEndpointMethods);
  const octokit = new Octo();

  const response = await octokit.rest.apps.createFromManifest({
    code,
  });

  const { id, pem, webhook_secret, slug } = response.data;

  await prismaClient.githubConnector.create({
    data: {
      id,
      pem,
      slug: slug!,
      webhookSecret: webhook_secret!,
    },
  });

  redirect(routes.git);
}
