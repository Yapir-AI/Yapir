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
    (json.object_attributes?.action !== "open" &&
      json.object_attributes?.action !== "update") ||
    json.object_attributes.state !== "opened"
  )
    return NextResponse.json({});

  const { gitlabClientFactory, pullRequestHandleOperation } = container.cradle;

  const gitlab = gitlabClientFactory.forConnectorId((await params).connectorId);
  const gitlabAdapter = new GitlabPullRequestAdapter(gitlab, json);

  await pullRequestHandleOperation.execute(gitlabAdapter);

  return NextResponse.json({});
}
