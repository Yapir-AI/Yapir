"use server";

import { actionClient } from "@/lib/safeAction/client";
import { revalidatePath } from "next/cache";
import { GitlabConnectorCreate } from "@/lib/git/connectors/gitlab/operation/connectorCreate";
import { GitlabRepositoryConnect } from "@/lib/git/connectors/gitlab/operation/repositoryConnect";
import { assertAuthenticated } from "@/lib/auth/check";
import { container, reviewContainer } from "@/lib/di/container";
import { routes } from "@/lib/route";
import { z } from "zod";
import { PullRequestHandle } from "@/lib/git/operation/pullRequest";
import { GitlabMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import projectForReview = PullRequestHandle.projectForReview;

export const createGitlabConnector = actionClient
  .schema(GitlabConnectorCreate.schema)
  .action(async ({ parsedInput, ctx: { gitlabConnectorCreateOperation } }) => {
    await gitlabConnectorCreateOperation.execute(parsedInput);
    revalidatePath(routes.git);
  });

export const connectToRepository = actionClient
  .schema(GitlabRepositoryConnect.schema)
  .action(
    async ({ parsedInput, ctx: { gitlabRepositoryConnectOperation } }) =>
      await gitlabRepositoryConnectOperation.execute(parsedInput),
  );

export const listUserRepositories = async (connectorId: string) => {
  await assertAuthenticated();
  return await container
    .resolve("gitlabConnectorRepositoryListOperation")
    .execute(connectorId);
};

export const runGitlabReviewAction = actionClient
  .schema(z.object({ mergeRequestId: z.string() }))
  .action(
    async ({
      parsedInput,
      ctx: { mergeRequestService, gitlabClientFactory },
    }) => {
      const mergeRequest = await mergeRequestService.findById(
        parsedInput.mergeRequestId,
        { project: { include: { ...projectForReview, connector: true } } },
      );

      const gitlab = await gitlabClientFactory.forConnectorId(
        mergeRequest.project.connector.id,
      );
      const gitlabAdapter = new GitlabMergeRequestAdapter(
        Number(mergeRequest.project.originId),
        Number(mergeRequest.originId),
        gitlab,
      );
      const { pullRequestHandleOperation } = reviewContainer({
        mergeRequestId: mergeRequest.id,
        gitMergeRequestAdapter: gitlabAdapter,
        project: mergeRequest.project,
      });

      await pullRequestHandleOperation.execute(mergeRequest.id);
      revalidatePath(
        routes.mergeRequest(mergeRequest.project.id, mergeRequest.id),
      );
    },
  );
