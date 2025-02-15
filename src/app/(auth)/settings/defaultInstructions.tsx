"use client";

import type { Instructions } from "@/lib/db/schema";
import { updateInstruction as updateInstructionAction } from "@/lib/instructions/actions";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDebouncedMutation } from "@/lib/reactQuery/useDebouncedMutation";

export function DefaultInstructions({
  id,
  content: defaultContent,
}: Instructions) {
  const [content, setContent] = useState(defaultContent);

  const {
    debouncedMutate,
    isPending,
    isSuccess,
    variables: lastSavedContent,
  } = useDebouncedMutation({
    mutationFn: (content: string) =>
      updateInstructionAction.bind(null, id)({ content }),
  });

  return (
    <>
      <Label>
        Default instructions
        <br />
        <span className="mt-2 text-[0.8rem] text-muted-foreground">
          This instructions will be applied to all Yapir's reviews.
        </span>
        <Textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            debouncedMutate(e.target.value);
          }}
          className="field-sizing-content mt-2"
          placeholder="Your default instructions..."
        />
      </Label>
      <p className="mt-2 h-10 text-[0.8rem] text-muted-foreground">
        {isPending && <span className="animate-in fade-in">Updating...</span>}
        {isSuccess && !isPending && lastSavedContent === content && (
          <span className="animate-in fade-in">Updated!</span>
        )}
      </p>
    </>
  );
}
