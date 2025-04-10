"use server";

import { actionClient } from "@/lib/safeAction/client";
import { reviewCommentSchema } from "@/lib/comment/schema";

export const reviewCommentAction = actionClient
  .schema(reviewCommentSchema)
  .action(async ({ parsedInput, ctx: { commentService } }) => {
    await commentService.reviewComment(parsedInput);
  });
