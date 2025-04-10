/**
 * Utility functions for calculating differences between strings
 */
import {
  gitLineChange,
  type GitLineChange,
} from "@/lib/git/parsing/model/GitLineChange";

/**
 * Computes the diff between two strings
 * Returns an array of diff lines with metadata
 */
export function computeDiff(oldText: string, newText: string): GitLineChange[] {
  const oldLines = splitIntoLines(oldText);
  const newLines = splitIntoLines(newText);

  // Handle edge cases
  if (oldText === newText) {
    return oldLines.map((line, index) =>
      gitLineChange({
        type: "unchanged",
        content: line,
        oldLineNumber: index + 1,
        newLineNumber: index + 1,
      }),
    );
  }

  if (!oldText) {
    return newLines.map((line, index) =>
      gitLineChange({
        type: "added",
        content: line,
        newLineNumber: index + 1,
      }),
    );
  }

  if (!newText) {
    return oldLines.map((line, index) =>
      gitLineChange({
        type: "removed",
        content: line,
        oldLineNumber: index + 1,
      }),
    );
  }

  // Compute the LCS matrix
  const lcsMatrix = computeLCS(oldLines, newLines);

  // Backtrack to find the diff
  const diffLines: GitLineChange[] = [];
  let i = oldLines.length;
  let j = newLines.length;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
      // Equal lines
      diffLines.unshift(
        gitLineChange({
          type: "unchanged",
          content: oldLines[i - 1],
          oldLineNumber: i,
          newLineNumber: j,
        }),
      );
      i--;
      j--;
    } else if (
      j > 0 &&
      (i === 0 || lcsMatrix[i][j - 1] >= lcsMatrix[i - 1][j])
    ) {
      // Insertion
      diffLines.unshift(
        gitLineChange({
          type: "added",
          content: newLines[j - 1],
          newLineNumber: j,
        }),
      );
      j--;
    } else if (
      i > 0 &&
      (j === 0 || lcsMatrix[i][j - 1] < lcsMatrix[i - 1][j])
    ) {
      // Deletion
      diffLines.unshift(
        gitLineChange({
          type: "removed",
          content: oldLines[i - 1],
          oldLineNumber: i,
        }),
      );
      i--;
    }
  }

  return diffLines;
}

/**
 * Splits a string into lines
 */
function splitIntoLines(text: string): string[] {
  // Handle empty or undefined strings
  if (!text) return [];
  return text.split("\n");
}

/**
 * Computes the longest common subsequence between two arrays
 * This is a helper function for the diff algorithm
 */
function computeLCS<T>(a: T[], b: T[]): number[][] {
  const matrix: number[][] = Array(a.length + 1)
    .fill(null)
    .map(() => Array(b.length + 1).fill(0));

  // Fill the matrix
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  return matrix;
}
