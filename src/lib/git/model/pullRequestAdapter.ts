import ignore from "ignore";
import { GitDiffFormatter } from "../utils/gitDiffFormatter";

export abstract class GitPullRequestAdapter {
  abstract getFileChanges(): Promise<GitFileChange[]>;

  abstract getFileContent(path: string): Promise<string>;

  abstract listReviewComments(): Promise<GitThread[]>;

  abstract createReview(
    body: string,
    comments: Omit<GitComment, "author">[],
  ): Promise<void>;

  abstract getReviewInformation(): Promise<GitReviewInfo> | GitReviewInfo;

  async getReviewChanges() {
    const ignoreFile = await this.getFileContent(".yapir/.ignore").catch(
      () => "",
    );

    const ig = ignore().add(ignoreFile);
    const changes = await this.getFileChanges();

    return changes.filter((change) => !ig.ignores(change.filename));
  }

  /**
   * Formats the file changes in a more readable text format for LLM processing.
   * The format includes:
   * - File names (before/after)
   * - File status (new, deleted, renamed)
   * - Line numbers with +/- indicators for added/removed lines
   */
  async formatChangesForLLM(): Promise<string> {
    const changes = await this.getReviewChanges();
    return GitDiffFormatter.formatChangesForLLM(changes);
  }

  async getRepositoryInstructions() {
    try {
      return await this.getFileContent(".yapir/instructions.md");
    } catch (e) {
      console.warn(e);
      return "";
    }
  }
}

export interface GitComment {
  body: string;
  line: number;
  path: string;
  author: { login: string };
}

export interface GitThread {
  id: string | number;
  isResolved: boolean;
  comments: GitComment[];
}

export interface GitFileChange {
  filename: string;
  status: any;
  previous_filename: string | undefined;
  patch: string | undefined;
}

export interface GitReviewInfo {
  repoName: string;
  repoUrl: string;
  pullNumber: number;
  pullUrl: string;
  pullName: string;
}
