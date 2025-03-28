import { type NextRequest, NextResponse } from "next/server";
import { container } from "@/lib/di/container";
import { App, Octokit } from "octokit";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import type { WebhookEventName } from "@octokit/webhooks-types";
import { GithubPullRequestAdapter } from "@/lib/git/connectors/github/pullRequestAdapter";
import type { GithubConnector } from "@prisma/client";

export async function POST({ text, headers }: NextRequest) {
  const appId = Number(headers.get("x-github-hook-installation-target-id"));

  const payload = await text();
  const json = JSON.parse(payload);

  const { githubConnectorService, pullRequestHandleOperation } =
    container.cradle;

  const connector = await githubConnectorService.findById(appId);
  const github = createGithubApp(connector);
  const octokit = () => github.getInstallationOctokit(json.installation.id);

  github.webhooks.on(
    [
      "pull_request.opened",
      "pull_request.edited",
      "pull_request.reopened",
      "pull_request.synchronize",
    ],
    async (event) => {
      const githubAdapter = new GithubPullRequestAdapter(
        event,
        // @ts-ignore fixme when implementing github
        await octokit(),
      );
      //@ts-ignore TODO
      return await pullRequestHandleOperation.execute(githubAdapter, undefined);
    },
  );

  await github.webhooks.verifyAndReceive({
    name: headers.get("x-github-event") as WebhookEventName,
    id: headers.get("x-github-hook-id")!,
    payload,
    signature: headers.get("x-hub-signature-256")!,
  });
  return NextResponse.json({});
}

function createGithubApp(app: GithubConnector) {
  return new App({
    appId: app.id,
    Octokit: Octokit.plugin(restEndpointMethods),
    webhooks: {
      secret: app.webhookSecret,
    },
    //@ts-expect-error unused
    oauth: {},
    privateKey: app.pem,
  });
}
