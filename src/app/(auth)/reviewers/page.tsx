import { container } from "@/lib/di/container";
import type { Metadata } from "next";
import { ReviewerCard } from "@/app/(auth)/reviewers/reviewerCard";

export const metadata: Metadata = {
  title: "Reviewers | Yapir",
};

export default async function ReviewersPage() {
  const reviewers = await container.cradle.reviewerService.listReviewers();

  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {reviewers.map((reviewer) => (
        <ReviewerCard {...reviewer} key={reviewer.id} />
      ))}
    </div>
  );
}
