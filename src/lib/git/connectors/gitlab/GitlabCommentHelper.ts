import type { GitlabClient } from "@/lib/git/connectors/gitlab/clientFactory";
import type { MergeRequestDiffSchema } from "@gitbeaker/core";

export class GitlabCommentHelper {
  validCommentLocations: Record<
    string,
    {
      added: number[];
      removed: number[];
      unchanged: Array<{ oldLine: number; newLine: number }>;
    }
  > = {};

  constructor(
    private readonly gitlab: GitlabClient,
    private readonly changes: MergeRequestDiffSchema[],
  ) {
    this.registerValidCommentLocations();
  }

  private registerValidCommentLocations(): void {
    for (const change of this.changes) {
      const oldPath = change.old_path;
      const newPath = change.new_path;

      // Determine if this is a renamed file
      const isRenamed = oldPath && newPath && oldPath !== newPath;

      // Initialize locations for both paths
      if (oldPath) {
        this.validCommentLocations[oldPath] = {
          added: [],
          removed: [],
          unchanged: [],
        };
      }

      if (newPath) {
        this.validCommentLocations[newPath] = {
          added: [],
          removed: [],
          unchanged: [],
        };
      }

      // Parse the diff
      if (change.diff) {
        if (isRenamed) {
          // For renamed files, parse with special handling
          this.parseRenamedFileDiff(change.diff, oldPath!, newPath!);
        } else {
          // For regular files, parse normally
          const filePath = newPath || oldPath;
          if (filePath) {
            this.parseUnifiedDiff(change.diff, filePath);
          }
        }
      }
    }
  }

  findClosestValidCommentLocation(
    filePath: string,
    line: number,
  ):
    | { newPath: string; newLine: string }
    | {
        oldPath: string;
        oldLine: string;
      } {
    // Check if the path exists in validCommentLocations
    if (this.validCommentLocations[filePath]) {
      const locations = this.validCommentLocations[filePath];
      let closestDistance = Infinity;
      let closestLocation: { type: "added" | "removed"; line: number } | null =
        null;

      // Check for closest line in added lines
      if (locations.added.length > 0) {
        const closestAdded = this.findClosestNumber(locations.added, line);
        if (closestAdded !== null) {
          closestDistance = Math.abs(closestAdded - line);
          closestLocation = { type: "added", line: closestAdded };
        }
      }

      // Check for closest line in removed lines
      if (locations.removed.length > 0) {
        const closestRemoved = this.findClosestNumber(locations.removed, line);
        if (closestRemoved !== null) {
          const distance = Math.abs(closestRemoved - line);
          // Only update if this is closer than what we found in added lines
          if (distance < closestDistance) {
            closestLocation = { type: "removed", line: closestRemoved };
          }
        }
      }

      // Return the closest location found
      if (closestLocation) {
        if (closestLocation.type === "added") {
          return { newPath: filePath, newLine: "" + closestLocation.line };
        } else {
          // removed
          return { oldPath: filePath, oldLine: "" + closestLocation.line };
        }
      }
    }

    // If no valid location found, return the input
    return { newPath: filePath, newLine: "" + line } as const;
  }

  /**
   * Find the closest number in an array to a target value
   */
  private findClosestNumber(numbers: number[], target: number): number | null {
    if (numbers.length === 0) return null;

    return numbers.reduce((closest, current) => {
      return Math.abs(current - target) < Math.abs(closest - target)
        ? current
        : closest;
    });
  }

  private parseRenamedFileDiff(
    diffText: string,
    oldPath: string,
    newPath: string,
  ): void {
    const lines = diffText.split("\n");
    let oldLineNum = 0;
    let newLineNum = 0;

    for (const line of lines) {
      // Parse hunk headers like @@ -16,7 +16,6 @@
      if (line.startsWith("@@")) {
        const match = line.match(/@@ -(\d+),\d+ \+(\d+),\d+ @@/);
        if (match) {
          oldLineNum = parseInt(match[1], 10);
          newLineNum = parseInt(match[2], 10);
        }
        continue;
      }

      // Handle diff content lines
      if (line.startsWith("-")) {
        // Removed line belongs to old path
        this.validCommentLocations[oldPath].removed.push(oldLineNum);
        oldLineNum++;
      } else if (line.startsWith("+")) {
        // Added line belongs to new path
        this.validCommentLocations[newPath].added.push(newLineNum);
        newLineNum++;
      } else if (!line.startsWith("@@")) {
        // Unchanged line - store in both for context
        this.validCommentLocations[oldPath].unchanged.push({
          oldLine: oldLineNum,
          newLine: newLineNum,
        });
        this.validCommentLocations[newPath].unchanged.push({
          oldLine: oldLineNum,
          newLine: newLineNum,
        });
        oldLineNum++;
        newLineNum++;
      }
    }
  }

  private parseUnifiedDiff(diffText: string, filePath: string): void {
    const lines = diffText.split("\n");
    let oldLineNum = 0;
    let newLineNum = 0;

    for (const line of lines) {
      // Parse hunk headers like @@ -16,7 +16,6 @@
      if (line.startsWith("@@")) {
        const match = line.match(/@@ -(\d+),\d+ \+(\d+),\d+ @@/);
        if (match) {
          oldLineNum = parseInt(match[1], 10);
          newLineNum = parseInt(match[2], 10);
        }
        continue;
      }

      // Handle diff content lines
      if (line.startsWith("-")) {
        // Removed line
        this.validCommentLocations[filePath].removed.push(oldLineNum);
        oldLineNum++;
      } else if (line.startsWith("+")) {
        // Added line
        this.validCommentLocations[filePath].added.push(newLineNum);
        newLineNum++;
      } else if (!line.startsWith("@@")) {
        // Unchanged line
        this.validCommentLocations[filePath].unchanged.push({
          oldLine: oldLineNum,
          newLine: newLineNum,
        });
        oldLineNum++;
        newLineNum++;
      }
    }
  }
}
