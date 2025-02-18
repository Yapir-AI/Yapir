"use server";

import { actionClient } from "@/lib/safeAction/client";
import { ReviewerCreate } from "@/lib/reviewer/operation/create";
import { revalidatePath } from "next/cache";
import { routes } from "@/lib/route";

const revalidateReviewers = () => revalidatePath(routes.reviewers);

export const createReviewer = actionClient
  .schema(ReviewerCreate.schema)
  .action(async ({ parsedInput, ctx: { reviewerCreateOperation } }) => {
    const id = await reviewerCreateOperation.execute(parsedInput);
    revalidateReviewers();
    return id;
  });
