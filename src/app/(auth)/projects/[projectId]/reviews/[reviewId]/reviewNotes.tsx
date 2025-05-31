import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import MarkdownRenderer from "@/components/ui/markdown-renderer";
import {
  type ReviewNote,
  type Reviewer,
  $Enums,
  type NoteDefinition,
} from "@prisma/client";
import ReviewNoteType = $Enums.ReviewNoteType;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { H3 } from "@/components/ui/typography";

type ReviewNoteWithReviewerAndDefinition = ReviewNote & {
  reviewer: Reviewer;
  noteDefinition: NoteDefinition;
};

interface ReviewNotesProps {
  reviewNotes: ReviewNoteWithReviewerAndDefinition[];
}

export function ReviewNotes({ reviewNotes }: ReviewNotesProps) {
  if (!reviewNotes?.length) return null;

  return (
    <div className="flex gap-3">
      {reviewNotes.map((note) => (
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
      ))}
    </div>
  );
}
