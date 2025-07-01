import { type NextRequest, NextResponse } from "next/server";
import { container, reviewContainer } from "@/lib/di/container";
import { App } from "octokit";
import { Octokit } from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import type { GithubConfig } from "@/lib/git/connectors/github/model/githubConfigSchema";
import type { WebhookEventName } from "@octokit/webhooks-types";
import { projectForReview } from "@/lib/review/types";
import { GithubMergeRequestAdapter } from "@/lib/git/model/GithubMergeRequestAdapter";

export async function POST(
  { text, headers }: NextRequest,
  { params }: { params: Promise<{ connectorId: string }> },
) {
  const { connectorId } = await params;

  const payload = await text();
  const json = JSON.parse(payload);

  const { githubConnectorService, projectService, mergeRequestService } =
    container.cradle;

  const connector = await githubConnectorService.findById(connectorId);
  const github = createGithubApp(connector);
  const octokit = () => github.getInstallationOctokit(json.installation.id);

  github.webhooks.on(
    [
      "pull_request.opened",
      "pull_request.reopened",
      "pull_request.synchronize",
    ],
    async (event) => {
      const octo = await octokit();

      const project = await projectService.findOrCreate({
        create: {
          connector: { connect: { id: connectorId } },
          originId: event.payload.repository.id.toString(),
          url: event.payload.repository.html_url,
          name: event.payload.repository.name,
          fullName: event.payload.repository.full_name,
          providerType: "GITHUB",
        },
        include: projectForReview,
      });

      const mergeRequest = await mergeRequestService.create({
        authorName: event.payload.pull_request.user!.login!,
        authorAvatarUrl: event.payload.pull_request.user!.avatar_url!,
        createdAt: new Date(event.payload.pull_request.created_at),
        updatedAt: new Date(event.payload.pull_request.updated_at),
        project: { connect: { id: project.id } },
        originId: "" + event.payload.pull_request.id,
        name: event.payload.pull_request.title,
        sourceBranch: event.payload.pull_request.head.ref,
        targetBranch: event.payload.pull_request.base.ref,
        url: event.payload.pull_request.html_url,
      });

      //@ts-expect-error
      const adapter = new GithubMergeRequestAdapter(octo, event);
      const { reviewOperation } = reviewContainer({
        gitMergeRequestAdapter: adapter,
        project,
      });

      await reviewOperation.execute({ mergeRequestId: mergeRequest.id });
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

function createGithubApp(app: GithubConfig) {
  return new App({
    appId: app.id,
    Octokit: Octokit.plugin(restEndpointMethods),
    webhooks: {
      secret: app.webhook_secret!,
    },
    privateKey: app.pem,
  });
}
