"use client";

import * as React from "react";
import { useState } from "react";
import { runGitlabReviewAction } from "@/lib/git/connectors/gitlab/actions";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function RunReviewButton({
  mergeRequestId,
}: {
  mergeRequestId: string;
}) {
  const [open, setOpen] = useState(false);

  const runReview = () => {
    toast.promise(mutateAsync(), {
      loading: "Reviewing...",
      success: "Review Complete",
      error: "Review Failed",
    });
  };

  const { mutateAsync } = useMutation({
    mutationFn: () => runGitlabReviewAction({ mergeRequestId }),
    onMutate: () => setOpen(false),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Review</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Run a new review?</DialogTitle>
          <DialogDescription>
            This will run a new review with all the reviewers attached to the
            project.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button type="button" onClick={runReview}>
            Review
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
