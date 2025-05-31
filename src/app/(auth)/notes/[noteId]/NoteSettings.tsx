"use client";

import type { NoteDefinition } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { useDebouncedMutation } from "@/lib/reactQuery/useDebouncedMutation";
import { updateNoteAction } from "@/lib/note/action";
import { useRef, useState } from "react";
import { useAutosizeTextArea } from "@/hooks/use-autosize-textarea";
import { Label, LabelDescription } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function NoteSettings({ note }: { note: NoteDefinition }) {
  const [content, setContent] = useState(note.systemPrompt);

  const ref = useRef(null);
  const { debouncedMutate: updateContent } = useDebouncedMutation({
    mutationFn: (content: string) =>
      updateNoteAction({ id: note.id, systemPrompt: content }),
  });

  const togglePublishToOrigin = () =>
    updateNoteAction({ id: note.id, publishToOrigin: !note.publishToOrigin });

  useAutosizeTextArea({
    ref: ref,
    maxHeight: 240,
    borderWidth: 1,
    dependencies: [content],
  });

  return (
    <div className="col-span-2 space-y-10">
      <Label className="flex cursor-pointer items-center justify-between">
        <div>
          <p className="mb-2">Publish to origin:</p>
          <LabelDescription>
            {note.publishToOrigin
              ? `${note.title} will be published to origin.`
              : `${note.title} will stay on Yapir.`}
          </LabelDescription>
        </div>
        <Switch
          checked={note.publishToOrigin}
          onClick={togglePublishToOrigin}
        />
      </Label>
      <Label className="space-y-2">
        <p>System Prompt</p>
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
        <LabelDescription>
          The system prompt that will be added to the review for that specific
          note.
        </LabelDescription>
      </Label>
    </div>
  );
}
