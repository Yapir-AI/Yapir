import React from "react";
import {
  CardList,
  CardListItem,
  CardListTitle,
} from "@/components/ui/card-list";
import { routes } from "@/lib/route";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { NoteListElement } from "@/lib/note/service";

export function NoteList<Note extends NoteListElement>({
  notes,
  Action,
}: {
  notes: Note[];
  Action?: ({ note }: { note: Note }) => React.ReactElement;
}) {
  return (
    <CardList>
      <CardListTitle>Notes</CardListTitle>
      {notes.map((note) => (
        <NoteListItem
          key={note.id}
          note={note}
          Action={Action ? () => <Action note={note} /> : undefined}
        />
      ))}
    </CardList>
  );
}

export function NoteListItem({
  note,
  hideBadge = false,
  ...props
}: Omit<React.ComponentProps<typeof CardListItem>, "href"> & {
  note: NoteListElement;
  hideBadge?: boolean;
}) {
  return (
    <CardListItem href={routes.note(note.id)} key={note.id} {...props}>
      <div className="flex justify-between">
        <CardTitle>{note.title}</CardTitle>
        {!hideBadge && <Badge variant="secondary">{note.tag}</Badge>}
      </div>
      {!!note.systemPrompt && (
        <CardDescription className="line-clamp-1">
          {note.systemPrompt}
        </CardDescription>
      )}
    </CardListItem>
  );
}
