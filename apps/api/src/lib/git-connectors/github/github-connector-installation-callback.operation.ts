import { App } from "@octokit/app";
import { and, eq, sql } from "drizzle-orm";
import type { CurrentUser } from "@/lib/current-user";
import { gitConnectorTable } from "@/lib/db/schema";
import type { Db } from "@/lib/db";
import type { AppEnv } from "@/lib/env";
import { forbidden } from "@/lib/errors/error.factory";
import { toGitConnectorResponseDto } from "../git-connector.dto";
import type { GithubConnectorConfiguration } from "./github-connector.configuration";
import type { GithubConnectorInstallationCallbackRequestDto } from "./github-connector-installation-callback.dto";

export function githubConnectorInstallationCallbackOperation({
  db,
  currentUser,
  env,
}: {
  db: Db;
  currentUser: CurrentUser;
  env: AppEnv;
}) {
  const githubApp = new App({
    appId: env.githubApp.appId,
    privateKey: env.githubApp.privateKey,
    oauth: {
      clientId: env.githubApp.oauthClientId,
      clientSecret: env.githubApp.oauthClientSecret,
    },
  });

  async function checkUserInstallation(
    requestDto: GithubConnectorInstallationCallbackRequestDto,
  ) {
    const userOctokit = await githubApp.oauth.getUserOctokit({
      code: requestDto.code,
      state: requestDto.state,
    });

    let installation;
    for (let page = 1; ; page++) {
      const { data } = await userOctokit.request("GET /user/installations", {
        page,
        per_page: 100,
      });
      installation = data.installations.find(
        (candidate) => candidate.id === requestDto.installation_id,
      );

      if (installation || data.installations.length < 100) break;
    }

    const account = installation?.account;
    if (!installation || !account) {
      throw forbidden("GITHUB_INSTALLATION_NOT_ACCESSIBLE");
    }
    return { installation, account };
  }

  async function execute(
    requestDto: GithubConnectorInstallationCallbackRequestDto,
  ) {
    currentUser.assertRole("admin");

    let { installation, account } = await checkUserInstallation(requestDto);

    const configuration: GithubConnectorConfiguration = {
      type: "GITHUB",
      installationId: installation.id,
      accountId: account.id,
      accountLogin: "login" in account ? account.login : account.slug,
      accountType: installation.target_type,
    };

    const [createdGitConnector] = await db
      .insert(gitConnectorTable)
      .values({
        configuration,
        createdBy: currentUser.id,
        updatedBy: currentUser.id,
      })
      .onConflictDoNothing()
      .returning();

    if (createdGitConnector) {
      return toGitConnectorResponseDto(createdGitConnector);
    }

    const installationMatches = and(
      eq(sql<string>`${gitConnectorTable.configuration} ->> 'type'`, "GITHUB"),
      eq(
        sql<string>`${gitConnectorTable.configuration} ->> 'installationId'`,
        String(requestDto.installation_id),
      ),
    );
    const [existingGitConnector] = await db
      .select()
      .from(gitConnectorTable)
      .where(installationMatches);

    if (!existingGitConnector) {
      throw new Error("GitConnector conflict could not be resolved");
    }

    const [updatedGitConnector] = await db
      .update(gitConnectorTable)
      .set({ configuration, updatedBy: currentUser.id })
      .where(eq(gitConnectorTable.id, existingGitConnector.id))
      .returning();

    return toGitConnectorResponseDto(updatedGitConnector);
  }

  return { execute };
}
