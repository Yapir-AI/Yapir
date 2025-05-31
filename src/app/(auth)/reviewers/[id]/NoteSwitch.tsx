"use client";

import { toggleReviewerNoteAction } from "@/lib/note/action";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { useState } from "react";

export function NoteSwitch({
  reviewerId,
  noteId,
  enabled,
}: {
  noteId: string;
  reviewerId: string;
  enabled: boolean;
}) {
  const [checked, setChecked] = useState(enabled);

  async function toggleNote(checked: boolean) {
    setChecked(checked);
    await toggleReviewerNoteAction({
      reviewerId,
      noteId,
      enabled: checked,
    }).catch(() => {
      setChecked(!checked);
      return toast.error("Oops, something wrong happened");
    });
  }

  return <Switch checked={checked} onCheckedChange={toggleNote} />;
}
