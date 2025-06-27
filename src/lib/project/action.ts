"use server";

import { actionClient } from "@/lib/safeAction/client";
import {
  updateProjectSchema,
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

export const updateProject = actionClient
  .schema(updateProjectSchema)
  .action(async ({ parsedInput, ctx: { projectService } }) => {
    await projectService.updateProject(parsedInput);
    revalidatePath(routes.project(parsedInput.projectId));
  });
