import { NextRequest, NextResponse } from "next/server";
import type { WebhookMergeRequestEventSchema } from "@gitbeaker/core";
import { container, reviewContainer } from "@/lib/di/container";
import { GitlabMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import { PullRequestHandle } from "@/lib/git/operation/pullRequest";
import projectForReview = PullRequestHandle.projectForReview;

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
    mergeRequestService,
    projectService,
    ignoreService,
  } = container.cradle;

  const project = await projectService.findOrCreate({
    create: {
      connector: { connect: { id: connectorId } },
      originId: json.project.id.toString(),
      url: json.project.web_url,
      name: json.project.name,
      fullName: json.project.path_with_namespace,
      providerType: "GITLAB",
    },
    include: projectForReview,
  });

  const mergeRequest = await mergeRequestService.create({
    authorName: json.user.name,
    authorAvatarUrl: json.user.avatar_url,
    createdAt: new Date(json.object_attributes.created_at),
    updatedAt: new Date(json.object_attributes.updated_at),
    project: { connect: { id: project.id } },
    originId: "" + json.object_attributes.iid,
    name: json.object_attributes.title,
    sourceBranch: json.object_attributes.source_branch,
    targetBranch: json.object_attributes.target_branch,
    url: json.object_attributes.url,
  });

  if (
    ignoreService.isIgnored(project, {
      isDraft: json.object_attributes.draft,
      title: json.object_attributes.title,
      username: json.user.username,
      email: (json.user.email as string) ?? "",
    })
  ) {
    return NextResponse.json({});
  }

  const gitlab = await gitlabClientFactory.forConnectorId(connectorId);
  const gitlabAdapter = new GitlabMergeRequestAdapter(
    json.project.id,
    json.object_attributes.iid,
    gitlab,
  );

  const { pullRequestHandleOperation } = reviewContainer({
    mergeRequestId: mergeRequest.id,
    gitMergeRequestAdapter: gitlabAdapter,
    project,
  });

  await pullRequestHandleOperation.execute(mergeRequest.id);

  return NextResponse.json({});
}
