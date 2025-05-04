"use server";

import { actionClient } from "@/lib/safeAction/client";
import { ReviewerCreate } from "@/lib/reviewer/operation/create";
import { revalidatePath } from "next/cache";
import { routes } from "@/lib/route";
import { ReviewerUpdate } from "@/lib/reviewer/operation/update";
import { redirect } from "next/navigation";

const revalidateReviewers = () => revalidatePath(routes.reviewers);
const revalidateReviewer = (id: string) => revalidatePath(routes.reviewer(id));

export const createReviewer = actionClient
  .schema(ReviewerCreate.schema)
  .action(async ({ parsedInput, ctx: { reviewerCreateOperation } }) => {
    const id = await reviewerCreateOperation.execute(parsedInput);
    revalidateReviewers();
    redirect(routes.reviewer(id));
  });

export const updateReviewer = actionClient
  .schema(ReviewerUpdate.schema)
  .action(async ({ parsedInput, ctx: { reviewerUpdateOperation } }) => {
    const result = await reviewerUpdateOperation.execute(parsedInput);
    const { reviewerId } = parsedInput;

    revalidateReviewer(reviewerId);
    revalidateReviewers();

    return result;
  });
