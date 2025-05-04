import { container } from "@/lib/di/container";
import type { Metadata } from "next";
import { EmptyCard } from "@/components/rich/emptyCard";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Arrow2 from "@/components/rich/arrow";
import { ReviewerList } from "@/lib/reviewer/ReviewerList";

export const metadata: Metadata = {
  title: "Reviewers | Yapir",
};

export default async function ReviewersPage() {
  const reviewers = await container.cradle.reviewerService.listReviewers();

  if (reviewers.length === 0)
    return (
      <EmptyCard>
        <CardTitle>No Reviewers.</CardTitle>
        <CardDescription>
          Create your first reviewer and add it to your projects to start your
          AI reviews.
        </CardDescription>
        <Arrow2 className="absolute top-[15%] right-[8%] size-32" />
      </EmptyCard>
    );

  return <ReviewerList reviewers={reviewers} />;
}
