import { container } from "@/lib/di/container";
import type { Metadata } from "next";
import { ReviewerCard } from "@/app/(auth)/reviewers/(root)/reviewerCard";
import { EmptyCard } from "@/components/rich/emptyCard";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Arrow2 from "@/components/rich/arrow";

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
        <Arrow2 className="absolute right-[8%] top-[15%] size-32" />
      </EmptyCard>
    );

  return (
    <div className="grid gap-2 xl:grid-cols-2 2xl:grid-cols-3">
      {reviewers.map((reviewer) => (
        <ReviewerCard {...reviewer} key={reviewer.id} />
      ))}
    </div>
  );
}
