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
import { ReviewerCreate } from "@/lib/reviewer/operation/create";
import type { ProviderListElement } from "@/lib/provider/service";
import { createReviewer } from "@/lib/reviewer/action";
import { useState } from "react";

export function CreateReviewerButton({
  providers,
}: {
  providers: ProviderListElement[];
}) {
  const [open, setOpen] = useState(false);

  async function create(values: ReviewerCreate.Schema) {
    await createReviewer(values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon />
          Add Reviewer
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create Reviewer</DialogTitle>
          <DialogDescription>
            Configure your review through reviewers: providers, models,
            system-prompts...
          </DialogDescription>
        </DialogHeader>
        <AutoForm
          onSubmit={create}
          formSchema={ReviewerCreate.schema}
          fieldConfig={{
            name: {
              inputProps: {
                placeholder: randomFunnyName,
              },
              description: "Just a friendly name to identify this review bot.",
            },
            aiProviderId: {
              fieldType: "autocomplete",
              inputProps: {
                //@ts-expect-error todo proper typing
                options: providers.map(({ name, id, type }) => ({
                  value: id,
                  label: type,
                })),
                allowCustomValues: false,
                heading: "AI Provider",
              },
            },
            overrides: {
              systemPrompt: {
                fieldType: "textarea",
                description:
                  "Use wisely, if you want to override the default system prompt used by Yapir.",
              },
            },
          }}
        >
          <DialogFooter>
            <Button type="submit">Create Reviewer</Button>
          </DialogFooter>
        </AutoForm>
      </DialogContent>
    </Dialog>
  );
}

const randomFunnyName = (() => {
  const names = [
    "Emma - The Security Expert",
    "Matt - The Typescript Wizard",
    "Bob - The Project Cop",
    "Johnny - The Typo Guy",
  ];

  return names[Math.floor(Math.random() * names.length)];
})();
