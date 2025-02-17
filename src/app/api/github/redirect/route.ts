import { Octokit } from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import { db } from "@/lib/db";
import { githubConnector } from "@/lib/db/schema";
import { forbidden, redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { assertAuthenticated } from "@/lib/auth/check";

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

  await db.insert(githubConnector).values({
    id,
    pem,
    slug: slug!,
    webhook_secret: webhook_secret!,
  });
  redirect("/git");
}
