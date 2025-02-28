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
import { GithubConnectorService } from "@/lib/git/connectors/github/connectorService";
import { GitlabClientFactory } from "@/lib/git/connectors/gitlab/clientFactory";
import { GitlabRepositoryConnect } from "@/lib/git/connectors/gitlab/operation/repositoryConnect";
import { GitlabConnectorCreate } from "@/lib/git/connectors/gitlab/operation/connectorCreate";
import { GitlabConnectorRepositoryList } from "@/lib/git/connectors/gitlab/operation/connectorRepositoryList";
import { InstructionService } from "@/lib/instructions/service";
import { PromptService } from "@/lib/prompt/service";
import { PullRequestHandle } from "@/lib/git/operation/pullRequest";
import { ReviewerCreate } from "@/lib/reviewer/operation/create";
import { ReviewerUpdate } from "@/lib/reviewer/operation/update";
import { ReviewerService } from "@/lib/reviewer/service";
import { GitlabProjectService } from "@/lib/git/connectors/gitlab/projectService";
import { ProjectService } from "@/lib/project/service";

export const container = createTypedContainer({
  prisma: asValue(prismaClient),
  modelService: asClass(ModelService),
  githubConnectorService: asClass(GithubConnectorService),
  gitlabConnectorService: asClass(GitlabConnectorService),
  gitlabClientFactory: asClass(GitlabClientFactory),
  gitlabRepositoryConnectOperation: asClass(GitlabRepositoryConnect.Operation),
  gitlabConnectorCreateOperation: asClass(GitlabConnectorCreate.Operation),
  gitlabConnectorRepositoryListOperation: asClass(
    GitlabConnectorRepositoryList.Operation,
  ),
  instructionService: asClass(InstructionService),
  promptService: asClass(PromptService),
  projectService: asClass(ProjectService),
  providerService: asClass(ProviderService),
  providerCreateOperation: asClass(ProviderCreate.Operation),
  providerUpdateOperation: asClass(ProviderUpdate.Operation),
  providerDeleteOperation: asClass(ProviderDelete.Operation),
  pullRequestHandleOperation: asClass(PullRequestHandle.Operation),
  gitlabProjectService: asClass(GitlabProjectService),
  reviewService: asClass(ReviewService),
  reviewerService: asClass(ReviewerService),
  reviewerCreateOperation: asClass(ReviewerCreate.Operation),
  reviewerUpdateOperation: asClass(ReviewerUpdate.Operation),
});
