import { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import type { GitFileDiff } from "@/lib/git/parsing/model/GitFileDiff";
import type { Octokit } from "@octokit/core";
import type { Api } from "@octokit/plugin-rest-endpoint-methods";
import type { EmitterWebhookEvent } from "@octokit/webhooks";

export class GithubMergeRequestAdapter extends GitMergeRequestAdapter {
  constructor(
    private readonly octokit: Octokit & Api,
    private readonly event: EmitterWebhookEvent<"pull_request">,
  ) {
    super();
  }
  private readonly payload = this.event.payload;
  private readonly owner = this.payload.repository.owner.login;
  private readonly repo = this.payload.repository.name;
  private readonly pullNumber = this.payload.pull_request.number;
  private readonly sha = this.payload.pull_request.head.sha;

  protected async getChangedFiles(): Promise<
    Pick<GitFileDiff, "newPath" | "oldPath">[]
  > {
    const response = await this.octokit.rest.pulls.listFiles({
      owner: this.owner,
      repo: this.repo,
      pull_number: this.pullNumber,
      sha: this.sha,
    });

    return response.data.map(({ status, filename, previous_filename }) => ({
      newPath: status === "removed" ? undefined : filename,
      oldPath: status === "added" ? undefined : previous_filename,
    }));
  }

  async getFileContent(path: string, type: "base" | "head"): Promise<string> {
    const {
      data: { content },
    } = (await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repo,
      path,
      ref: type === "head" ? this.sha : this.payload.pull_request.base.sha,
    })) as {
      data: { content: string };
    };
    return Buffer.from(content, "base64").toString("utf8");
  }

  async postNote({ content }: { content: string }): Promise<void> {
    await this.octokit.rest.issues.createComment({
      owner: this.owner,
      repo: this.repo,
      issue_number: this.pullNumber,
      body: content,
    });
    return Promise.resolve(undefined);
  }
}
