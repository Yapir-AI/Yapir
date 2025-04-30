import { asClass, asValue } from "awilix";
import { createTypedContainer } from "@/lib/di/typedcontainer";
import { ReviewService } from "@/lib/review/service";
import prismaClient from "@/lib/db";
import { ProviderCreate } from "@/lib/provider/operation/create";
import { ProviderUpdate } from "@/lib/provider/operation/update";
import { ProviderDelete } from "@/lib/provider/operation/delete";
import { ProviderService } from "@/lib/provider/service";
import { ModelService } from "@/lib/model/service";
import { GitlabConnectorService } from "@/lib/git/connectors/gitlab/connectorService";
import { GitlabClientFactory } from "@/lib/git/connectors/gitlab/clientFactory";
import { GitlabRepositoryConnect } from "@/lib/git/connectors/gitlab/operation/repositoryConnect";
import { GitlabConnectorCreate } from "@/lib/git/connectors/gitlab/operation/connectorCreate";
import { GitlabConnectorRepositoryList } from "@/lib/git/connectors/gitlab/operation/connectorRepositoryList";
import { PromptService } from "@/lib/prompt/service";
import { PullRequestHandle } from "@/lib/git/operation/pullRequest";
import { ReviewerCreate } from "@/lib/reviewer/operation/create";
import { ReviewerUpdate } from "@/lib/reviewer/operation/update";
import { ReviewerService } from "@/lib/reviewer/service";
import { ProjectService } from "@/lib/project/service";
import { MergeRequestService } from "@/lib/mergeRequest/service";
import type { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import { CommentService } from "@/lib/comment/service";
import { MergeRequestIgnoreService } from "@/lib/mergeRequest/ignoreService";

export const container = createTypedContainer({
  prisma: asValue(prismaClient),
  modelService: asClass(ModelService),
  commentService: asClass(CommentService),
  gitlabConnectorService: asClass(GitlabConnectorService),
  gitlabClientFactory: asClass(GitlabClientFactory),
  gitlabRepositoryConnectOperation: asClass(GitlabRepositoryConnect.Operation),
  gitlabConnectorCreateOperation: asClass(GitlabConnectorCreate.Operation),
  gitlabConnectorRepositoryListOperation: asClass(
    GitlabConnectorRepositoryList.Operation,
  ),
  ignoreService: asClass(MergeRequestIgnoreService),
  promptService: asClass(PromptService),
  projectService: asClass(ProjectService),
  providerService: asClass(ProviderService),
  providerCreateOperation: asClass(ProviderCreate.Operation),
  providerUpdateOperation: asClass(ProviderUpdate.Operation),
  providerDeleteOperation: asClass(ProviderDelete.Operation),
  mergeRequestService: asClass(MergeRequestService),
  reviewService: asClass(ReviewService),
  reviewerService: asClass(ReviewerService),
  reviewerCreateOperation: asClass(ReviewerCreate.Operation),
  reviewerUpdateOperation: asClass(ReviewerUpdate.Operation),
});

export function reviewContainer({
  mergeRequestId,
  gitMergeRequestAdapter,
  project,
}: {
  mergeRequestId: string;
  gitMergeRequestAdapter: GitMergeRequestAdapter;
  project: PullRequestHandle.ProjectForReview;
}) {
  return container
    .createScope()
    .register(
      "pullRequestHandleOperation",
      asClass(PullRequestHandle.Operation),
    )
    .register("mergeRequestId", asValue(mergeRequestId))
    .register("gitMergeRequestAdapter", asValue(gitMergeRequestAdapter))
    .register("project", asValue(project)).cradle;
}
