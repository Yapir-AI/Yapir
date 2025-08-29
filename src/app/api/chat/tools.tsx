import { tool } from "ai";
import { z } from "zod";

// Shared tool definitions (no execute functions here).
// Import these types client-side for fully typed tool UI parts.
export const tools = {
  getFile: tool({
    inputSchema: z.object({ path: z.string().describe("The file path") }),
    description:
      "Retrieve the complete content of a specific file from the repository described in the <available_files> section. Provide the full file path (e.g., 'src/components/Header.tsx'). Use this to examine implementations, configurations, and documentation. Don't fetch .yapir/instructions as you already get those in the <developer_guideline> block",
  }),
  searchContent: tool({
    inputSchema: z.object({ search: z.string().describe("The search query") }),
    description:
      "Search for text, code patterns, or keywords across all repository files. Returns matching files with line numbers and context. Supports gitlab simple_query_string patterns.",
  }),
} as const;

export type ChatTools = typeof tools;
