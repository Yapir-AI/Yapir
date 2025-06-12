"use client";

import {
  SearchCommand,
  useSearchCommand,
} from "@/components/rich/search-command";
import { searchNotes, toggleReviewerNoteAction } from "@/lib/note/action";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { H3, H3Sub } from "@/components/ui/typography";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { NoteListItem } from "@/lib/note/note-list";
import type { NoteListElement } from "@/lib/note/service";

function NoteSearchItem({ item: note }: { item: NoteListElement }) {
  return <div>{note.title}</div>;
}

export function Notes({
  reviewerId,
  reviewerName,
  initialNotes,
}: {
  reviewerId: string;
  reviewerName: string;
  initialNotes: NoteListElement[];
}) {
  const { mutateAsync: toggleNote } = useMutation({
    mutationFn: ({ noteId, enabled }: { noteId: string; enabled: boolean }) =>
      toggleReviewerNoteAction({ reviewerId, noteId, enabled }),
  });
  const [gridRef] = useAutoAnimate();

  const notes = useSearchCommand({
    queryKey: ["notes", "reviewer", reviewerId],
    initialItems: initialNotes,
    queryFn: async ({ query, excludeIds }) => {
      const search = await searchNotes({
        search: query,
        excludedIds: excludeIds,
      });
      if (search?.serverError) throw new Error();
      return search!.data!;
    },
    onItemAdded: async (item) => toggleNote({ noteId: item.id, enabled: true }),
    onItemRemoved: async (item) =>
      toggleNote({ noteId: item.id, enabled: false }),
  });

  return (
    <div className="space-y-4">
      <div>
        <H3>Notes</H3>
        <H3Sub>
          Add Notes to <span className="italic">{reviewerName}</span>
        </H3Sub>
      </div>

      <div className="grid gap-2 xl:grid-cols-3" ref={gridRef}>
        {notes.items.map((note) => (
          <NoteListItem
            hideBadge
            outerClassName="border rounded-xl group min-h-16 *:last:pr-3"
            className="p-3"
            key={note.id}
            note={note}
            Action={() => (
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-destructive/10 hover:*:text-destructive"
                onClick={() => notes.remove(note.id)}
              >
                <TrashIcon className="hidden group-hover:block" />
              </Button>
            )}
          />
        ))}
        <SearchCommand {...notes} ItemComponent={NoteSearchItem}>
          <Button
            variant="outline"
            className="border-border h-full min-h-16 w-full rounded-xl border shadow-none"
          >
            <PlusIcon />
            Add Note
          </Button>
        </SearchCommand>
      </div>
    </div>
  );
}
