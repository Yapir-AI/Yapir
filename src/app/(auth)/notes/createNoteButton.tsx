"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AutoForm from "@/components/ui/auto-form";
import { useState } from "react";
import { createNoteAction } from "@/lib/note/action";
import { type CreateNoteSchema, createNoteSchema } from "@/lib/note/schema";

export function CreateNoteButton() {
  const [open, setOpen] = useState(false);

  async function createNote(values: CreateNoteSchema) {
    await createNoteAction(values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          Add Note
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create Note Definition</DialogTitle>
          <DialogDescription>
            Configure your review through reviewers: providers, models,
            system-prompts...
          </DialogDescription>
        </DialogHeader>
        <AutoForm
          onSubmit={createNote}
          formSchema={createNoteSchema}
          fieldConfig={{
            title: {
              inputProps: {
                placeholder: "✨ Summary",
              },
              description: "The display name",
            },
            tag: {
              inputProps: {
                placeholder: "summary",
              },
              description: "Unique identifier for this note",
            },
          }}
        >
          <DialogFooter>
            <Button type="submit">Create Note</Button>
          </DialogFooter>
        </AutoForm>
      </DialogContent>
    </Dialog>
  );
}
