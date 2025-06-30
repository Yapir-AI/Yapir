import type {
  ProcessReviewerInput,
  ProcessReviewersOutput,
} from "@/lib/review/operation";
import type { CreateSchemaStepOutput } from "@/lib/review/steps/createSchemaStep";
import { z } from "zod";
import type { Prisma, PrismaClient } from "@/generated/prisma/client";
import type { InitReviewStepOutput } from "@/lib/review/steps/reviewLifecycleSteps";
import type { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";

type AddNoteSchemaStepInput = ProcessReviewerInput & CreateSchemaStepOutput;
type AddNoteSchemaStepOutput = CreateSchemaStepOutput;

type SaveOutputNotesStepInput = ProcessReviewersOutput & InitReviewStepOutput;

export class CustomNoteSteps {
  private readonly prisma: PrismaClient;
  private gitMergeRequestAdapter: GitMergeRequestAdapter;

  constructor(opts: {
    prisma: PrismaClient;
    gitMergeRequestAdapter: GitMergeRequestAdapter;
  }) {
    this.prisma = opts.prisma;
    this.gitMergeRequestAdapter = opts.gitMergeRequestAdapter;
  }

  async addNoteSchema({
    reviewer,
    schema,
  }: AddNoteSchemaStepInput): Promise<AddNoteSchemaStepOutput> {
    const noteDefs = reviewer.noteDefinitions;
    if (noteDefs.length === 0) return { schema };

    let notesSchema = z.object({});

    noteDefs.forEach((def) => {
      notesSchema = notesSchema.extend({
        [def.tag]: z.string().describe(def.systemPrompt),
      });
    });

    return {
      schema: schema.extend({
        notes: notesSchema.describe(
          "Overall global notes. Do not relate directly to comments.",
        ),
      }),
    };
  }

  saveOutputNotes = async ({ reviews, reviewId }: SaveOutputNotesStepInput) => {
    const reviewNotes: Prisma.ReviewNoteCreateManyInput[] = [];

    for (const { reviewer, output } of reviews) {
      if (!output.success || reviewer.noteDefinitions.length === 0) continue;

      const notes = this.rawNoteSchema.safeParse(output);
      if (!notes.success) {
        console.warn(
          `Unable to parse notes for reviewer ${reviewer.name}`,
          notes.error,
        );
        continue;
      }

      reviewer.noteDefinitions.forEach((def) => {
        const note = notes.data.notes[def.tag];
        reviewNotes.push({
          content: note,
          reviewerId: reviewer.id,
          noteDefinitionId: def.id,
          reviewId,
        });
      });
    }
    await this.prisma.reviewNote.createMany({
      data: reviewNotes,
    });
  };

  publishNotes = async ({ reviews, reviewId }: SaveOutputNotesStepInput) => {
    for (const { reviewer, output } of reviews) {
      if (!output.success || reviewer.noteDefinitions.length === 0) continue;

      const notes = this.rawNoteSchema.safeParse(output);
      if (!notes.success) {
        console.warn(
          `Unable to parse notes for reviewer ${reviewer.name}`,
          notes.error,
        );
        continue;
      }

      reviewer.noteDefinitions
        .filter((def) => def.publishToOrigin)
        .forEach((def) => {
          const note = notes.data.notes[def.tag];
          this.gitMergeRequestAdapter.postNote({
            content: `## ${def.title} - ${reviewer.name}\n\n` + note,
          });
        });
    }
  };

  rawNoteSchema = z.object({ notes: z.record(z.string()) });
}
