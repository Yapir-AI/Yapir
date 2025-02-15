import type { Db } from "@/lib/db";
import { desc } from "drizzle-orm";
import { type ProviderEntity, review } from "@/lib/db/schema";
import type { CoreMessage } from "ai";
import type { GitReviewInfo } from "@/lib/git/model/pullRequestAdapter";
import { eq } from "drizzle-orm/sql/expressions/conditions";

export class ReviewService {
  private readonly db: Db;

  constructor(opts: { db: Db }) {
    this.db = opts.db;
  }

  listReviews() {
    return this.db.query.review.findMany({
      limit: 10,
      orderBy: [desc(review.at)],
    });
  }

  async initReview(
    provider: ProviderEntity,
    messages: CoreMessage[],
    reviewInfo: GitReviewInfo,
  ) {
    const [{ id }] = await this.db
      .insert(review)
      .values({
        providerId: provider.id,
        messages,
        ...reviewInfo,
      })
      .returning();

    return id;
  }

  async completeReview(reviewId: string, object: any, messages: CoreMessage[]) {
    return this.db
      .update(review)
      .set({
        status: "REVIEWED",
        messages: [
          ...messages,
          { role: "assistant", content: JSON.stringify(object) },
        ],
      })
      .where(eq(review.id, reviewId));
  }

  async failReview(reviewId: string) {
    return this.db
      .update(review)
      .set({
        status: "ERROR",
      })
      .where(eq(review.id, reviewId));
  }
}
