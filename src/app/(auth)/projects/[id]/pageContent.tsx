"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlert } from "lucide-react";
import type { ReviewerListElement } from "@/lib/reviewer/service";
import { ReviewerCard } from "@/app/(auth)/reviewers/(root)/reviewerCard";
import { Switch } from "@/components/ui/switch";
import { toggleProjectReviewer } from "@/lib/project/action";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { H3 } from "@/components/ui/typography";

type ProjectReviewer = ReviewerListElement & {
  enabled: boolean;
};

export function ProjectReviewers({
  reviewers,
  activeReviewers,
  projectId,
}: {
  projectId: string;
  activeReviewers: number;
  reviewers: ProjectReviewer[];
}) {
  const [ref] = useAutoAnimate({ duration: 200 });

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <H3>Project Reviewers</H3>
      {activeReviewers > 1 && (
        <Alert variant="warning">
          <CircleAlert className="size-4" />
          <AlertTitle>Be advised!</AlertTitle>
          <AlertDescription>
            Using multiple reviewers will initiate multiple reviews and may
            increase usage unnecessarily.
          </AlertDescription>
        </Alert>
      )}
      <div className="grid gap-2 xl:grid-cols-2 2xl:grid-cols-3">
        {reviewers.map((r) => (
          <ProjectReviewerCard {...r} key={r.id} projectId={projectId} />
        ))}
      </div>
    </div>
  );
}

export function ProjectReviewerCard(
  reviewer: ReviewerListElement & { enabled: boolean; projectId: string },
) {
  return (
    <ReviewerCard {...reviewer}>
      <Switch
        checked={reviewer.enabled}
        onCheckedChange={(checked) =>
          toggleProjectReviewer({
            projectId: reviewer.projectId,
            reviewerId: reviewer.id,
            enable: checked,
          })
        }
      />
    </ReviewerCard>
  );
}
