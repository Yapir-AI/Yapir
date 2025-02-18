"use server";

import { actionClient } from "@/lib/safeAction/client";
import { revalidatePath } from "next/cache";
import { GitlabConnectorCreate } from "@/lib/git/connectors/gitlab/operation/connectorCreate";
import { GitlabRepositoryConnect } from "@/lib/git/connectors/gitlab/operation/repositoryConnect";
import { assertAuthenticated } from "@/lib/auth/check";
import { container } from "@/lib/di/container";
import { routes } from "@/lib/route";

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
