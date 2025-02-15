import ignore from "ignore";

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
  repo_name: string;
  repo_url: string;
  pull_number: number;
  pull_url: string;
  pull_name: string;
}
