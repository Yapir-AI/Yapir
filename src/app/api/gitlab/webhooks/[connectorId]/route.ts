import { NextRequest, NextResponse } from "next/server";
import type { WebhookMergeRequestEventSchema } from "@gitbeaker/core";
import { GitlabPullRequestAdapter } from "@/lib/git/connectors/gitlab/pullRequestAdapter";
import { container } from "@/lib/di/container";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ connectorId: string }> },
) {
  const json: WebhookMergeRequestEventSchema = await request.json();
  if (
    json.object_kind !== "merge_request" ||
    json.object_attributes?.action !== "open" ||
    json.object_attributes.state !== "opened"
  )
    return NextResponse.json({});

  const connectorId = (await params).connectorId;

  const {
    gitlabClientFactory,
    pullRequestHandleOperation,
    gitlabProjectService,
  } = container.createScope().cradle;

  const project = await gitlabProjectService.getOrInitProject(json);

  const gitlab = await gitlabClientFactory.forConnectorId(connectorId);
  const gitlabAdapter = new GitlabPullRequestAdapter(gitlab, json);

  await pullRequestHandleOperation.execute(gitlabAdapter, project);

  return NextResponse.json({});
}
