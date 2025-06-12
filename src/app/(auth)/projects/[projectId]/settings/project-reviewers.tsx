"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert, PlusIcon, TrashIcon } from "lucide-react";
import type { ReviewerListElement } from "@/lib/reviewer/service";
import { toggleProjectReviewer } from "@/lib/project/action";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { H3, H3Sub } from "@/components/ui/typography";
import {
  SearchCommand,
  useSearchCommand,
} from "@/components/rich/search-command";
import { ReviewerListItem } from "@/lib/reviewer/ReviewerList";
import { Button } from "@/components/ui/button";
import { searchReviewers } from "@/lib/reviewer/action";
import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import { useMutation } from "@tanstack/react-query";

export function ProjectReviewers({
  reviewers: initialReviewers,
  projectId,
}: {
  projectId: string;
  reviewers: ReviewerListElement[];
}) {
  const [ref] = useAutoAnimate({ duration: 200 });
  const [gridRef] = useAutoAnimate();

  const { mutateAsync: toggleReviewer } = useMutation({
    mutationFn: ({
      reviewerId,
      enable,
    }: {
      reviewerId: string;
      enable: boolean;
    }) => toggleProjectReviewer({ projectId, reviewerId, enable }),
  });

  const reviewers = useSearchCommand({
    queryKey: ["reviewers"],
    initialItems: initialReviewers,
    queryFn: async ({ query, excludeIds }) => {
      const search = await searchReviewers({
        search: query,
        excludedIds: excludeIds,
      });
      if (search?.serverError) throw new Error();
      return search!.data!;
    },
    onItemAdded: async (item) =>
      toggleReviewer({ reviewerId: item.id, enable: true }),
    onItemRemoved: async (item) =>
      toggleReviewer({ reviewerId: item.id, enable: false }),
  });

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <div>
        <H3>Reviewers</H3>
        <H3Sub>Add Reviewers to your project</H3Sub>
      </div>
      {reviewers.items.length > 1 && (
        <Alert variant="warning">
          <CircleAlert className="size-4" />
          <AlertTitle>Be advised!</AlertTitle>
          <AlertDescription>
            Using multiple reviewers will initiate multiple reviews and may
            increase usage unnecessarily.
          </AlertDescription>
        </Alert>
      )}
      <div className="grid gap-2 xl:grid-cols-4" ref={gridRef}>
        {reviewers.items.map((reviewer) => (
          <ReviewerListItem
            outerClassName="border rounded-xl group"
            className="p-3"
            key={reviewer.id}
            reviewer={reviewer}
            Action={() => (
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-destructive/10"
                onClick={() => reviewers.remove(reviewer.id)}
              >
                <TrashIcon className="text-destructive hidden group-hover:block" />
              </Button>
            )}
          />
        ))}
        <SearchCommand {...reviewers} ItemComponent={ReviewerSearchItem}>
          <Button
            variant="outline"
            className="border-border h-full w-full rounded-xl border shadow-none"
          >
            <PlusIcon />
            Add Reviewer
          </Button>
        </SearchCommand>
      </div>
    </div>
  );
}

function ReviewerSearchItem({ item: reviewer }: { item: ReviewerListElement }) {
  return (
    <div className="flex items-center gap-3">
      <ReviewerAvatar reviewerName={reviewer.name} options={{ size: 30 }} />
      <p>{reviewer.name}</p>
    </div>
  );
}
