import type { GitlabClient } from "@/lib/git/connectors/gitlab/clientFactory";
import { container } from "@/lib/di/container";
import type { Octokit } from "@octokit/core";
import type { Api } from "@octokit/plugin-rest-endpoint-methods";
import { githubConfigSchema } from "@/lib/git/connectors/github/model/githubConfigSchema";
import { createGithubApp } from "@/app/api/github/webhooks/[connectorId]/route";
import type { Prisma } from "@/generated/prisma/client";

export abstract class GitChatProvider {
  abstract getFile(path: string): Promise<string>;

  abstract searchContent(search: string): Promise<any>;

  abstract getTree(): Promise<string[]>;

  static async forProject(project: ProjectForChat): Promise<GitChatProvider> {
    const gitProviderType = project.connector.type;
    switch (gitProviderType) {
      case "GITHUB":
        return GithubChatProvider.forProject(project);
      case "GITLAB":
        return GitlabChatProvider.forProject(project);
    }
  }
}

class GitlabChatProvider extends GitChatProvider {
  constructor(
    private readonly gitlab: GitlabClient,
    private readonly project: ProjectForChat,
  ) {
    super();
  }

  override async getFile(path: string): Promise<string> {
    const file = await this.gitlab.RepositoryFiles.show(
      this.project.originId,
      path,
      "HEAD",
    );
    return Buffer.from(file.content, "base64").toString("utf8");
  }

  override async searchContent(search: string) {
    return this.gitlab.Search.all("blobs", search, {
      projectId: this.project.originId,
    });
  }

  override async getTree(): Promise<string[]> {
    const tree = await this.gitlab.Repositories.allRepositoryTrees(
      Number(this.project.originId),
      { recursive: true },
    );

    return tree.filter(({ type }) => type === "blob").map(({ path }) => path);
  }

  static override async forProject(project: ProjectForChat) {
    const { gitlabClientFactory } = container.cradle;
    const gitlab = await gitlabClientFactory.forConnectorId(
      project.connectorId,
    );
    return new GitlabChatProvider(gitlab, project);
  }
}

class GithubChatProvider extends GitChatProvider {
  constructor(
    private readonly octokit: Octokit & Api,
    private readonly project: ProjectForChat,
  ) {
    super();
    this.owner = project.fullName.split("/")[0];
    this.repo = project.name;
  }

  private readonly owner: string;
  private readonly repo: string;

  override async getFile(path: string): Promise<string> {
    const {
      data: { content },
    } = (await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repo,
      path,
    })) as {
      data: { content: string };
    };

    return Buffer.from(content, "base64").toString("utf8");
  }

  override async searchContent(search: string): Promise<any> {
    const result = await this.octokit.rest.search.code({
      q: `${search}+in:file+repo:${this.project.fullName}`,
    });
    return result.data.items;
  }

  override async getTree(): Promise<string[]> {
    const mainBranch = await this.octokit.rest.repos.get({
      owner: this.owner,
      repo: this.repo,
    });

    const tree = await this.octokit.rest.git.getTree({
      owner: this.owner,
      repo: this.repo,
      tree_sha: mainBranch.data.default_branch,
      recursive: "ofc bae",
    });

    return tree.data.tree
      .filter(({ type }) => type === "blob")
      .map(({ path }) => path ?? "");
  }

  static override async forProject(project: ProjectForChat) {
    const config = githubConfigSchema.parse(
      JSON.parse(project.connector.config),
    );
    const octokit = await createGithubApp({
      installation_id: config.installation_id,
      id: config.id,
      slug: config.slug,
      pem: config.pem,
      webhook_secret: config.webhook_secret,
    }).getInstallationOctokit(config.installation_id!);

    return new GithubChatProvider(
      //@ts-expect-error
      octokit,
      project,
    );
  }
}

export const projectForChatSelect = {
  connector: true,
} satisfies Prisma.GitProjectSelect;

export type ProjectForChat = Prisma.GitProjectGetPayload<{
  include: typeof projectForChatSelect;
}>;
