import type { GitFileChange } from "../model/pullRequestAdapter";

/**
 * Utility class for formatting git diff information for LLM processing
 */
export class GitDiffFormatter {
  /**
   * Enhanced version with full file content and integrated diff information
   */
  public static formatEnhancedChangesForLLM(
    changes: (GitFileChange & { content?: string })[],
  ): string {
    return changes
      .map((change) => {
        let result = this.formatFileHeader(change);

        if (change.status.deleted_file && change.patch) {
          result += this.formatPatchWithLineNumbers(change.patch, false);
        } else if (change.content && change.patch) {
          result += this.formatFullContentWithChanges(
            change.patch,
            change.content,
          );
        } else if (change.patch) {
          result += this.formatPatchWithLineNumbers(change.patch, false);
        } else if (change.content) {
          result += this.formatFullContentAsNew(change.content);
        }

        return result;
      })
      .join("\n\n");
  }

  /**
   * Creates a formatted file header based on file status
   */
  private static formatFileHeader(change: GitFileChange): string {
    const { filename, previous_filename, status } = change;
    let result = "";

    if (status.new_file) {
      result += `diff --git a/${filename} b/${filename}\n`;
      result += `new file\n`;
      result += `--- /dev/null\n`;
      result += `+++ b/${filename}\n`;
    } else if (status.deleted_file) {
      const oldPath = previous_filename || filename;
      result += `diff --git a/${oldPath} b/${filename}\n`;
      result += `deleted file\n`;
      result += `--- a/${oldPath}\n`;
      result += `+++ /dev/null\n`;
    } else if (status.renamed_file) {
      result += `diff --git a/${previous_filename} b/${filename}\n`;
      result += `renamed from ${previous_filename} to ${filename}\n`;
      result += `--- a/${previous_filename}\n`;
      result += `+++ b/${filename}\n`;
    } else {
      result += `diff --git a/${filename} b/${filename}\n`;
      result += `--- a/${filename}\n`;
      result += `+++ b/${filename}\n`;
    }

    return result;
  }

  /**
   * Formats a patch string by adding line numbers to each line,
   * with option to include or exclude hunk headers
   */
  private static formatPatchWithLineNumbers(
    patch: string,
    includeHunks: boolean = true,
  ): string {
    const lines = patch.split("\n");
    let oldLineNum = 0;
    let newLineNum = 0;
    let result = "";

    for (const line of lines) {
      // Parse hunk headers
      if (line.startsWith("@@")) {
        const match = line.match(/@@ -(\d+),\d+ \+(\d+),\d+ @@/);
        if (match) {
          oldLineNum = parseInt(match[1], 10);
          newLineNum = parseInt(match[2], 10);
          if (includeHunks) result += line + "\n";
        }
        continue;
      }

      // Format each line type
      if (line.startsWith("-")) {
        result += `${oldLineNum} - ${line.substring(1)}\n`;
        oldLineNum++;
      } else if (line.startsWith("+")) {
        result += `${newLineNum} + ${line.substring(1)}\n`;
        newLineNum++;
      } else if (line.length > 0) {
        result += `${oldLineNum}:${newLineNum} ${line}\n`;
        oldLineNum++;
        newLineNum++;
      } else {
        result += "\n";
      }
    }

    return result;
  }

  /**
   * Extracts structured changes from a patch
   */
  private static extractChangesFromPatch(patch: string): DiffChange[] {
    const lines = patch.split("\n");
    const changes: DiffChange[] = [];
    let oldLineNum = 0;
    let newLineNum = 0;

    for (const line of lines) {
      if (line.startsWith("@@")) {
        const match = line.match(/@@ -(\d+),\d+ \+(\d+),\d+ @@/);
        if (match) {
          oldLineNum = parseInt(match[1], 10);
          newLineNum = parseInt(match[2], 10);
        }
        continue;
      }

      if (line.startsWith("-")) {
        changes.push({
          type: "removed",
          oldLineNum: oldLineNum,
          content: line.substring(1),
        });
        oldLineNum++;
      } else if (line.startsWith("+")) {
        changes.push({
          type: "added",
          newLineNum: newLineNum,
          content: line.substring(1),
        });
        newLineNum++;
      } else if (line.length > 0) {
        changes.push({
          type: "context",
          oldLineNum: oldLineNum,
          newLineNum: newLineNum,
          content: line,
        });
        oldLineNum++;
        newLineNum++;
      }
    }

    return changes;
  }

  /**
   * Formats a file that is completely new
   */
  private static formatFullContentAsNew(content: string): string {
    return (
      content
        .split("\n")
        .map((line, i) => `${i + 1} + ${line}`)
        .join("\n") + "\n"
    );
  }

  /**
   * Formats the full file content with changes highlighted
   */
  private static formatFullContentWithChanges(
    patch: string,
    content: string,
  ): string {
    const diffChanges = this.extractChangesFromPatch(patch);
    const contentLines = content.split("\n");
    let result = "";

    let contentLineIndex = 0;
    let oldLineNum = 1;
    let newLineNum = 1;

    const processedAdditions = new Set<number>();
    const processedDeletions = new Set<number>();

    // Process content lines
    while (contentLineIndex < contentLines.length) {
      const currentLine = contentLines[contentLineIndex];

      // Check for additions
      const addedLine = diffChanges.find(
        (c) =>
          c.type === "added" &&
          c.newLineNum === newLineNum &&
          !processedAdditions.has(c.newLineNum!),
      );

      if (addedLine) {
        result += `${newLineNum} + ${currentLine}\n`;
        processedAdditions.add(newLineNum);
        newLineNum++;
        contentLineIndex++;
        continue;
      }

      // Check for deletions
      const deletedLine = diffChanges.find(
        (c) =>
          c.type === "removed" &&
          c.oldLineNum === oldLineNum &&
          !processedDeletions.has(c.oldLineNum!),
      );

      if (deletedLine) {
        result += `${oldLineNum} - ${deletedLine.content}\n`;
        processedDeletions.add(oldLineNum);
        oldLineNum++;
        continue;
      }

      // Regular unchanged line
      result += `${oldLineNum}:${newLineNum} ${currentLine}\n`;
      oldLineNum++;
      newLineNum++;
      contentLineIndex++;
    }

    // Process any remaining deletions after end of file
    diffChanges
      .filter(
        (c) =>
          c.type === "removed" &&
          c.oldLineNum &&
          !processedDeletions.has(c.oldLineNum),
      )
      .forEach((c) => {
        result += `${c.oldLineNum} - ${c.content}\n`;
      });

    return result;
  }
}
/**
 * Type definition for parsed diff changes
 */
type DiffChange = {
  type: "added" | "removed" | "context";
  oldLineNum?: number;
  newLineNum?: number;
  content: string;
};
