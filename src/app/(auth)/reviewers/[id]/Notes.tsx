import { container } from "@/lib/di/container";
import { NoteList } from "@/app/(auth)/notes/page";
import { NoteSwitch } from "@/app/(auth)/reviewers/[id]/NoteSwitch";

export async function Notes({ reviewerId }: { reviewerId: string }) {
  const { noteService } = container.cradle;

  const notes = await noteService.list({ include: { reviewers: true } });

  return (
    <NoteList
      notes={notes}
      Action={({ note }) => (
        <NoteSwitch
          noteId={note.id}
          enabled={note.reviewers.some((r) => r.id === reviewerId)}
          reviewerId={reviewerId}
        />
      )}
    />
  );
}
