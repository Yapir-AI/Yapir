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

  /**
   * Formats the file changes in a more readable text format for LLM processing.
   * The format includes:
   * - File names (before/after)
   * - File status (new, deleted, renamed)
   * - Line numbers with +/- indicators for added/removed lines
   */
  async formatChangesForLLM(): Promise<string> {
    const changes = await this.getReviewChanges();
    let result = "";

    for (const change of changes) {
      // Add file header
      if (change.status.new_file) {
        result += `diff --git a/${change.filename} b/${change.filename}\n`;
        result += `new file\n`;
        result += `--- /dev/null\n`;
        result += `+++ b/${change.filename}\n`;
      } else if (change.status.deleted_file) {
        result += `diff --git a/${change.previous_filename || change.filename} b/${change.filename}\n`;
        result += `deleted file\n`;
        result += `--- a/${change.previous_filename || change.filename}\n`;
        result += `+++ /dev/null\n`;
      } else if (change.status.renamed_file) {
        result += `diff --git a/${change.previous_filename} b/${change.filename}\n`;
        result += `renamed from ${change.previous_filename} to ${change.filename}\n`;
        result += `--- a/${change.previous_filename}\n`;
        result += `+++ b/${change.filename}\n`;
      } else {
        result += `diff --git a/${change.filename} b/${change.filename}\n`;
        result += `--- a/${change.filename}\n`;
        result += `+++ b/${change.filename}\n`;
      }

      // Format the diff with line numbers
      if (change.patch) {
        result += this.formatPatchWithLineNumbers(change.patch);
      }

      // Add a separator between files
      result += "\n";
    }

    return result;
  }

  /**
   * Formats a patch string by adding line numbers to each line.
   * Preserves +/- indicators for added/removed lines.
   */
  private formatPatchWithLineNumbers(patch: string): string {
    const lines = patch.split("\n");
    let oldLineNum = 0;
    let newLineNum = 0;
    let result = "";

    for (const line of lines) {
      // Parse hunk headers like @@ -16,7 +16,6 @@
      if (line.startsWith("@@")) {
        const match = line.match(/@@ -(\d+),\d+ \+(\d+),\d+ @@/);
        if (match) {
          oldLineNum = parseInt(match[1], 10);
          newLineNum = parseInt(match[2], 10);
          result += line + "\n";
        }
        continue;
      }

      // Format lines with line numbers
      if (line.startsWith("-")) {
        // Removed line - show old line number
        result += `${oldLineNum} - ${line.substring(1)}\n`;
        oldLineNum++;
      } else if (line.startsWith("+")) {
        // Added line - show new line number
        result += `${newLineNum} + ${line.substring(1)}\n`;
        newLineNum++;
      } else if (line.length > 0) {
        // Unchanged line - show both line numbers
        result += `${oldLineNum}:${newLineNum}   ${line}\n`;
        oldLineNum++;
        newLineNum++;
      } else {
        // Empty line
        result += "\n";
      }
    }

    return result;
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
