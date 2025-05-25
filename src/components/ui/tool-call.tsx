"use client";

import { Ban } from "lucide-react";
import { tools } from "@/app/api/chat/tools";

interface ToolInvocation {
  state: "partial-call" | "call" | "result";
  toolName: string;
  args?: any;
  result?: {
    __cancelled?: boolean;
    [key: string]: any;
  } & any;
}

export function ToolCall({
  toolInvocations,
}: {
  toolInvocations: ToolInvocation[];
}) {
  if (!toolInvocations?.length) return null;

  return (
    <div className="flex flex-col items-start gap-2">
      {toolInvocations.map((invocation, index) => (
        <ToolInvocationItem key={index} invocation={invocation} />
      ))}
    </div>
  );
}

function ToolInvocationItem({ invocation }: { invocation: ToolInvocation }) {
  const toolDef = tools[invocation.toolName as keyof typeof tools] ?? null;

  const isCancelled =
    invocation.state === "result" && invocation.result?.__cancelled === true;

  if (isCancelled) {
    return (
      <div className="bg-muted/50 text-muted-foreground flex items-center gap-3 rounded-lg border px-3 py-2 text-sm">
        <Ban className="text-destructive h-4 w-4" />
        <span>Cancelled {invocation.toolName}</span>
      </div>
    );
  }

  if (!toolDef) {
    return (
      <div className="bg-muted/50 text-muted-foreground flex items-center gap-3 rounded-lg border px-3 py-2 text-sm">
        <span>
          {invocation.state}: {invocation.toolName}
        </span>
      </div>
    );
  }

  switch (invocation.state) {
    case "partial-call":
    case "call":
      return toolDef.components.calling({ params: invocation.args || {} });

    case "result":
      return toolDef.components.result({
        result: invocation.result,
        params: invocation.args || {},
      });

    default:
      return null;
  }
}
