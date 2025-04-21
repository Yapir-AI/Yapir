import {
  gitMergeRequestDiffs,
  type GitMergeRequestDiffs,
} from "@/lib/git/parsing/model/GitMergeRequestDiffs";
import {
  gitFileDiff,
  type GitFileDiff,
} from "@/lib/git/parsing/model/GitFileDiff";
import { computeDiff } from "@/lib/git/parsing/diffUtils";
import type { GitlabClient } from "@/lib/git/connectors/gitlab/clientFactory";
import type { ExpandedMergeRequestSchema } from "@gitbeaker/core";
import ignore from "ignore";
import { atob } from "node:buffer";

export abstract class GitMergeRequestAdapter {
  protected abstract getChangedFiles(): Promise<
    Pick<GitFileDiff, "newPath" | "oldPath">[]
  >;

  abstract postNote({ content }: { content: string }): Promise<void>;

  protected abstract getFileContent(
    path: string,
    type: "base" | "head",
  ): Promise<string>;

  async getDiffs(): Promise<GitMergeRequestDiffs> {
    const changes = await this.getChangedFiles();

    const changesPromise = changes
      .filter((e) => this.isNotIgnored(e))
      .map(({ oldPath, newPath }) => {
        return {
          oldPath,
          newPath,
          oldContent: oldPath ? this.getFileContent(oldPath, "base") : "",
          newContent: newPath ? this.getFileContent(newPath, "head") : "",
        };
      })
      .map(async ({ newContent, oldContent, oldPath, newPath }) =>
        gitFileDiff({
          oldPath,
          newPath,
          lineChanges: computeDiff(await oldContent, await newContent),
        }),
      );

    return gitMergeRequestDiffs({
      fileDiffs: await Promise.all(changesPromise),
    });
  }

  async getRepositoryInstructions() {
    try {
      return await this.getFileContent(".yapir/instructions.md", "head");
    } catch (e) {
      console.warn(e);
      return "";
    }
  }

  private async isNotIgnored({ newPath }: { newPath?: string }) {
    return !newPath || !(await this.ignore).ignores(newPath);
  }

  private ignore = this.getFileContent(".yapir/.ignore", "head")
    .catch(() => "")
    .then((content) => ignore().add(content));
}

export class GitlabMergeRequestAdapter extends GitMergeRequestAdapter {
  constructor(
    private readonly projectId: number,
    private readonly mergeRequestIId: number,
    private readonly gitlab: GitlabClient,
  ) {
    super();
    this.mr = gitlab.MergeRequests.show(this.projectId, this.mergeRequestIId);
  }

  private readonly mr: Promise<ExpandedMergeRequestSchema>;

  protected override async getChangedFiles(): Promise<
    Pick<GitFileDiff, "newPath" | "oldPath">[]
  > {
    const diffs = await this.gitlab.MergeRequests.allDiffs(
      this.projectId,
      this.mergeRequestIId,
    );
    return diffs.map(({ new_path, old_path, deleted_file, new_file }) => ({
      newPath: deleted_file ? undefined : new_path,
      oldPath: new_file ? undefined : old_path,
    }));
  }

  protected override async getFileContent(
    path: string,
    type: "base" | "head",
  ): Promise<string> {
    const {
      diff_refs: { base_sha, head_sha },
    } = await this.mr;

    const ref = type === "base" ? base_sha : head_sha;
    const file = await this.gitlab.RepositoryFiles.show(
      this.projectId,
      path,
      ref,
    );
    return atob(file.content);
  }

  async postNote({ content }: { content: string }) {
    await this.gitlab.MergeRequestNotes.create(
      this.projectId,
      this.mergeRequestIId,
      content,
    );
  }
}
