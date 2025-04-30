"use server";

import { actionClient } from "@/lib/safeAction/client";
import {
  updateIgnoreSchema,
  toggleProjectReviewerSchema,
} from "@/lib/project/service";
import { revalidatePath } from "next/cache";
import { routes } from "@/lib/route";

export const toggleProjectReviewer = actionClient
  .schema(toggleProjectReviewerSchema)
  .action(async ({ parsedInput, ctx: { projectService } }) => {
    await projectService.toggleProjectReviewer(parsedInput);
    revalidatePath(routes.project(parsedInput.projectId));
  });

export const updateIgnoreSettings = actionClient
  .schema(updateIgnoreSchema)
  .action(async ({ parsedInput, ctx: { projectService } }) => {
    await projectService.updateIgnoreSettings(parsedInput);
    revalidatePath(routes.project(parsedInput.projectId));
  });
