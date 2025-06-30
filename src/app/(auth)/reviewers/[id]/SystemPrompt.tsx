"use client";

import type { Reviewer } from "@/generated/prisma/client";
import { H3 } from "@/components/ui/typography";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { PromptService } from "@/lib/prompt/service";
import { updateReviewer } from "@/lib/reviewer/action";
import { useState } from "react";
import { useDebouncedMutation } from "@/lib/reactQuery/useDebouncedMutation";

export function SystemPrompt(reviewer: Reviewer) {
  const [content, setContent] = useState(
    reviewer.systemPrompt ?? PromptService.DEFAULT_CONTENT,
  );

  const value = reviewer.systemPromptEnabled
    ? content
    : PromptService.DEFAULT_CONTENT;

  const { debouncedMutate: updateContent } = useDebouncedMutation({
    mutationFn: (content: string) =>
      updateReviewer({ reviewerId: reviewer.id, systemPrompt: content }),
  });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <H3>Custom System Prompt</H3>
        <Switch
          checked={reviewer.systemPromptEnabled}
          onCheckedChange={(checked) =>
            updateReviewer({
              reviewerId: reviewer.id,
              systemPromptEnabled: checked,
            })
          }
        />
      </div>
      <Textarea
        disabled={!reviewer.systemPromptEnabled}
        className="field-sizing-content"
        placeholder={PromptService.DEFAULT_CONTENT}
        value={value}
        onChange={({ target: { value } }) => {
          setContent(value);
          updateContent(value);
        }}
      />
      {reviewer.systemPromptEnabled && (
        <p className="text-muted-foreground text-xs">
          Use carefully, changing the System Prompt can produce inaccurate
          results.
        </p>
      )}
    </div>
  );
}
