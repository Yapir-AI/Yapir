import { Prisma } from "@prisma/client";
import { reviewerWithProvider } from "@/lib/reviewer/types";

export const gitProjectWithReviewersAndProviders = {
  reviewers: {
    include: reviewerWithProvider,
  },
} as const satisfies Prisma.GitProjectSelect;

export type GitProjectWithReviewersAndProviders = Prisma.GitProjectGetPayload<{
  include: typeof gitProjectWithReviewersAndProviders;
}>;
