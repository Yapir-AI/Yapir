import type { Db } from "@/lib/db";

export class ReviewerService {
  private readonly db: Db;

  constructor({ db }: { db: Db }) {
    this.db = db;
  }

  listReviewers() {
    return this.db.query.reviewer.findMany({
      with: {
        provider: true,
      },
    });
  }
}

export type ReviewerListElement = Awaited<
  ReturnType<typeof ReviewerService.prototype.listReviewers>
>[number];
