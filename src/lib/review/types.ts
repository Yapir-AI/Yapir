import { Prisma } from "@prisma/client";

export const reviewWithProject = {
  project: true,
} as const satisfies Prisma.ReviewSelect;

export type ReviewWithProject = Prisma.ReviewGetPayload<{
  include: typeof reviewWithProject;
}>;
