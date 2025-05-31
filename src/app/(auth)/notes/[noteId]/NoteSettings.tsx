"use client";

import type { NoteDefinition } from "@prisma/client";
import { H3 } from "@/components/ui/typography";
import { Textarea } from "@/components/ui/textarea";
import { useDebouncedMutation } from "@/lib/reactQuery/useDebouncedMutation";
import { updateNoteAction } from "@/lib/note/action";
import { useRef, useState } from "react";
import { useAutosizeTextArea } from "@/hooks/use-autosize-textarea";

export function NoteSettings({ note }: { note: NoteDefinition }) {
  const [content, setContent] = useState(note.systemPrompt);

  const ref = useRef(null);
  const { debouncedMutate: updateContent } = useDebouncedMutation({
    mutationFn: (content: string) =>
      updateNoteAction({ id: note.id, systemPrompt: content }),
  });

  useAutosizeTextArea({
    ref: ref,
    maxHeight: 240,
    borderWidth: 1,
    dependencies: [content],
  });

  return (
    <div className="col-span-2">
      {/*<div></div>*/}
      <div className="space-y-2">
        <H3>System Prompt</H3>
        <Textarea
          ref={ref}
          className="field-sizing-content"
          value={content}
          autoFocus
          onChange={({ target: { value } }) => {
            setContent(value);
            updateContent(value);
          }}
        />
      </div>
    </div>
  );
}
