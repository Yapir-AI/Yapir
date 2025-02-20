import { Prisma } from "@prisma/client";

export const reviewerWithProvider = {
  aiProvider: true,
} as const satisfies Prisma.ReviewerSelect;

export type ReviewerWithProvider = Prisma.ReviewerGetPayload<{
  include: typeof reviewerWithProvider;
}>;
