import type { Prisma } from "@/generated/prisma/client";

export const projectForReview = {
  reviewers: {
    include: {
      noteDefinitions: true,
      aiProvider: {
        select: {
          apiKey: true,
          model: true,
          baseUrl: true,
          type: true,
          id: true,
        },
      },
    },
  },
} as const satisfies Prisma.GitProjectSelect;

export type ProjectForReview = Prisma.GitProjectGetPayload<{
  include: typeof projectForReview;
}>;
export type ReviewerForReview = ProjectForReview["reviewers"][number];
