import { tool } from "ai";
import { z } from "zod";
import type { ReactNode } from "react";
import { FileText, Loader2, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type ChatTool<
  TParams extends z.ZodSchema,
  TResult extends z.ZodSchema,
> = {
  name?: string;
  parameters: TParams;
  result: TResult;
  description: string;
  components: {
    calling: (props: { params: z.infer<TParams> }) => ReactNode;
    result: (props: {
      result: z.infer<TResult>;
      params: z.infer<TParams>;
    }) => ReactNode;
  };
};

export function createTool<
  TParams extends z.ZodSchema,
  TResult extends z.ZodSchema,
>(
  chatTool: ChatTool<TParams, TResult>,
  fn: (params: z.infer<TParams>) => Promise<z.infer<TResult>>,
) {
  return tool({
    parameters: chatTool.parameters,
    description: chatTool.description,
    execute: fn,
  });
}

const getFileParams = z.object({
  path: z.string().describe("The file path"),
});
const getFileResult = z.string();
const getFileTool: ChatTool<typeof getFileParams, typeof getFileResult> = {
  parameters: getFileParams,
  result: getFileResult,
  description: "Get the content of a file from the project.",
  components: {
    calling: ({ params }) => (
      <div className="bg-muted/50 text-muted-foreground flex items-center gap-3 rounded-lg border px-3 py-2 text-sm">
        <FileText className="text-primary-300 h-4 w-4" />
        <div className="flex items-center gap-2">
          <span>Reading file</span>
          <Badge variant="outline" className="font-mono text-xs">
            {params.path.split("/").pop()}
          </Badge>
          <Loader2 className="h-3 w-3 animate-spin" />
        </div>
      </div>
    ),
    result: ({ result, params }) => (
      <div className="bg-muted/50 w-full max-w-2xl rounded-lg border">
        <div className="flex items-center gap-3 border-b px-3 py-2">
          <FileText className="text-primary-300 h-4 w-4" />
          <span className="text-muted-foreground text-sm">Read</span>
          <Badge variant="outline" className="font-mono text-xs">
            {params.path.split("/").pop()}
          </Badge>
          <span className="text-muted-foreground text-xs">
            {result.length} characters
          </span>
        </div>
      </div>
    ),
  },
};

const searchContentParams = z.object({
  search: z.string().describe("The search query"),
});
const searchContentResult = z.array(z.any());
export const searchContentTool: ChatTool<
  typeof searchContentParams,
  typeof searchContentResult
> = {
  parameters: searchContentParams,
  result: searchContentResult,
  description: "Search some content in the project files.",
  components: {
    calling: ({ params }) => (
      <div className="bg-muted/50 text-muted-foreground flex items-center gap-3 rounded-lg border px-3 py-2 text-sm">
        <Search className="text-success h-4 w-4" />
        <div className="flex items-center gap-2">
          <span>Searching for</span>
          <Badge variant="outline" className="font-mono text-xs">
            {params.search}
          </Badge>
          <Loader2 className="h-3 w-3 animate-spin" />
        </div>
      </div>
    ),
    result: ({ result, params }) => {
      console.log(result[0]?.data);
      return (
        <div className="bg-muted/50 w-full max-w-2xl rounded-lg border">
          <div className="flex items-center gap-3 border-b px-3 py-2">
            <Search className="text-success h-4 w-4" />
            <span className="text-muted-foreground text-sm">Searched</span>
            <Badge variant="outline" className="font-mono text-xs">
              {params.search}
            </Badge>
            <span className="text-muted-foreground text-xs">
              {result.length} results
            </span>
          </div>
          {result.length > 0 && (
            <div className="p-3">
              <div className="max-h-64 space-y-2 overflow-y-auto">
                {result.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background rounded border p-2 text-xs"
                  >
                    <div className="text-foreground mb-1 font-medium">
                      {item.filename || item.path || `Result ${index + 1}`} -{" "}
                      {item.startline}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    },
  },
};

export const tools = {
  getFile: getFileTool,
  searchContent: searchContentTool,
} as const;
