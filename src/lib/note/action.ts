"use server";

import { actionClient } from "@/lib/safeAction/client";
import {
  createNoteSchema,
  searchNotesSchema,
  toggleReviewerNoteSchema,
  updateNoteSchema,
} from "@/lib/note/schema";
import { revalidatePath } from "next/cache";
import { routes } from "@/lib/route";
import { redirect } from "next/navigation";

export const updateNoteAction = actionClient
  .schema(updateNoteSchema)
  .action(async ({ parsedInput, ctx: { noteService } }) => {
    await noteService.update(parsedInput);
    revalidatePath(routes.notes);
  });

export const createNoteAction = actionClient
  .schema(createNoteSchema)
  .action(async ({ parsedInput, ctx: { noteService } }) => {
    const { id } = await noteService.create(parsedInput);
    revalidatePath(routes.notes);
    redirect(routes.note(id));
  });

export const toggleReviewerNoteAction = actionClient
  .schema(toggleReviewerNoteSchema)
  .action(async ({ parsedInput, ctx: { noteService } }) =>
    noteService.toggleReviewerNote(parsedInput),
  );

export const searchNotes = actionClient
  .schema(searchNotesSchema)
  .action(async ({ parsedInput, ctx: { noteService } }) =>
    noteService.search({
      search: parsedInput.search,
      excludedIds: parsedInput.excludedIds,
    }),
  );
