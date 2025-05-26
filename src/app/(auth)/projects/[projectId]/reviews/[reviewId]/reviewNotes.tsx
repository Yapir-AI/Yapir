import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import MarkdownRenderer from "@/components/ui/markdown-renderer";
import { type ReviewNote, type Reviewer, $Enums } from "@prisma/client";
import ReviewNoteType = $Enums.ReviewNoteType;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ReviewNoteWithReviewer = ReviewNote & { reviewer: Reviewer };

interface ReviewNotesProps {
  reviewNotes: ReviewNoteWithReviewer[];
}

interface ReviewNoteSectionProps {
  title: string;
  icon: string;
  notes: ReviewNoteWithReviewer[];
}

function ReviewNoteSection({ title, icon, notes }: ReviewNoteSectionProps) {
  if (notes.length === 0) return null;

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">
        {icon} {title}
      </h2>
      {notes.map((note) => (
        <Card key={note.id}>
          <CardHeader className="flex-row items-center gap-2 space-y-0">
            <ReviewerAvatar
              reviewerName={note.reviewer.name}
              options={{ size: 30, radius: 50 }}
            />
            <CardTitle>{note.reviewer.name}</CardTitle>
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

export function ReviewNotes({ reviewNotes }: ReviewNotesProps) {
  if (!reviewNotes?.length) return null;

  const notesByType = reviewNotes.reduce(
    (acc, note) => {
      acc[note.type] = acc[note.type] || [];
      acc[note.type].push(note);
      return acc;
    },
    {} as Record<ReviewNoteType, ReviewNoteWithReviewer[]>,
  );

  return (
    <div className="mb-6 space-y-4">
      <ReviewNoteSection
        title="Technical Summaries"
        icon="📋"
        notes={notesByType[ReviewNoteType.TECHNICAL_SUMMARY] || []}
      />
      <ReviewNoteSection
        title="General Assessments"
        icon="💭"
        notes={notesByType[ReviewNoteType.GENERAL_ASSESSMENT] || []}
      />
    </div>
  );
}
