import { Prisma } from "@prisma/client";

export const reviewerWithProvider = {
  aiProvider: { omit: { apiKey: true } },
} as const satisfies Prisma.ReviewerSelect;

export type ReviewerWithProvider = Prisma.ReviewerGetPayload<{
  include: typeof reviewerWithProvider;
}>;

export const reviewerWithProviderAndDangerousApiKey = {
  aiProvider: true,
} as const satisfies Prisma.ReviewerSelect;

export type ReviewerWithProviderAndDangerousApiKey = Prisma.ReviewerGetPayload<{
  include: typeof reviewerWithProviderAndDangerousApiKey;
}>;

export const reviewerWithProviderAndProjects = {
  aiProvider: { omit: { apiKey: false } },
  projects: true,
} as const satisfies Prisma.ReviewerSelect;

export type ReviewerWithProviderAndProjects = Prisma.ReviewerGetPayload<{
  include: typeof reviewerWithProviderAndProjects;
}>;
