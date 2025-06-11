import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import MarkdownRenderer from "@/components/ui/markdown-renderer";
import {
  type NoteDefinition,
  type Reviewer,
  type ReviewNote,
} from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ReviewNoteWithReviewerAndDefinition = ReviewNote & {
  reviewer: Reviewer;
  noteDefinition: NoteDefinition;
};

interface ReviewNotesProps {
  reviewNotes: ReviewNoteWithReviewerAndDefinition[];
}

export function ReviewNotes({ reviewNotes }: ReviewNotesProps) {
  if (!reviewNotes?.length) return null;

  return reviewNotes.map((note) => (
    <Card key={note.id}>
      <CardHeader className="flex-row items-center justify-between gap-2 space-y-0">
        <ReviewerAvatar
          reviewerName={note.reviewer.name}
          options={{ size: 30, radius: 50 }}
        />
        <CardTitle>{note.reviewer.name}</CardTitle>
        <div className="grow" />
        <CardTitle>{note.noteDefinition.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <MarkdownRenderer>
          {note.content.replace(/\\n/g, "\n")}
        </MarkdownRenderer>
      </CardContent>
    </Card>
  ));
}
