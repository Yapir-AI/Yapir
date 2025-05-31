import type { PrismaClient } from "@prisma/client";
import type {
  CreateNoteSchema,
  ToggleReviewerNoteSchema,
  UpdateNoteSchema,
} from "@/lib/note/schema";

export class NoteService {
  private readonly prisma: PrismaClient;

  constructor({ prisma }: { prisma: PrismaClient }) {
    this.prisma = prisma;
  }

  get list() {
    return this.prisma.noteDefinition.findMany;
  }

  get findById() {
    return this.prisma.noteDefinition.findUniqueOrThrow;
  }

  update(schema: UpdateNoteSchema) {
    return this.prisma.noteDefinition.update({
      where: { id: schema.id },
      data: { systemPrompt: schema.systemPrompt },
    });
  }

  async create(note: CreateNoteSchema) {
    return this.prisma.noteDefinition.create({
      data: {
        title: note.title,
        tag: note.tag,
        systemPrompt: "",
      },
    });
  }

  async toggleReviewerNote(request: ToggleReviewerNoteSchema) {
    return this.prisma.noteDefinition.update({
      where: { id: request.noteId },
      data: {
        reviewers: request.enabled
          ? { connect: [{ id: request.reviewerId }] }
          : { disconnect: [{ id: request.reviewerId }] },
      },
    });
  }
}
