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
import { ReviewerCreate } from "@/lib/reviewer/operation/create";
import { ReviewerUpdate } from "@/lib/reviewer/operation/update";
import { ReviewerService } from "@/lib/reviewer/service";
import { ProjectService } from "@/lib/project/service";
import { MergeRequestService } from "@/lib/mergeRequest/service";
import type { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import { CommentService } from "@/lib/comment/service";
import { MergeRequestIgnoreService } from "@/lib/mergeRequest/ignoreService";
import { StatsService } from "@/lib/stats/service";
import { ConnectorService } from "@/lib/git/connectors/service";
import type { ProjectForReview } from "@/lib/review/types";
import { ReviewOperation } from "@/lib/review/operation";
import { FetchDiffStep } from "@/lib/review/steps/fetchDiffStep";
import { ReviewLifecycleSteps } from "@/lib/review/steps/reviewLifecycleSteps";
import { GetModelStep } from "@/lib/review/steps/getModelStep";
import { CreatePromptStep } from "@/lib/review/steps/createPromptStep";
import { CreateSchemaStep } from "@/lib/review/steps/createSchemaStep";
import { CustomNoteSteps } from "@/lib/review/steps/customNoteSteps";
import { GenerateObjectStep } from "@/lib/review/steps/generateObjectStep";
import { PostReviewSummaryStep } from "@/lib/review/steps/postReviewSummaryStep";

export const container = createTypedContainer({
  prisma: asValue(prismaClient),
  modelService: asClass(ModelService),
  commentService: asClass(CommentService),
  connectorService: asClass(ConnectorService),
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
  statsService: asClass(StatsService),
});

export function reviewContainer({
  gitMergeRequestAdapter,
  project,
}: {
  gitMergeRequestAdapter: GitMergeRequestAdapter;
  project: ProjectForReview;
}) {
  return container
    .createScope()
    .register("reviewOperation", asClass(ReviewOperation))
    .register("fetchDiffStep", asClass(FetchDiffStep))
    .register("reviewLifecycleSteps", asClass(ReviewLifecycleSteps))
    .register("getModelStep", asClass(GetModelStep))
    .register("createPromptStep", asClass(CreatePromptStep))
    .register("createSchemaStep", asClass(CreateSchemaStep))
    .register("customNoteSteps", asClass(CustomNoteSteps))
    .register("generateObjectStep", asClass(GenerateObjectStep))
    .register("postReviewSummaryStep", asClass(PostReviewSummaryStep))
    .register("gitMergeRequestAdapter", asValue(gitMergeRequestAdapter))
    .register("project", asValue(project)).cradle;
}
