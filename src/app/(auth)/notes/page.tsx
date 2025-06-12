import { Main } from "@/components/ui/main";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { container } from "@/lib/di/container";
import {
  CardList,
  CardListItem,
  CardListTitle,
} from "@/components/ui/card-list";
import { routes } from "@/lib/route";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreateNoteButton } from "@/app/(auth)/notes/createNoteButton";
import React from "react";

async function listNotes() {
  const { noteService } = container.cradle;

  return noteService.list({ orderBy: { createdAt: "desc" } });
}

export type NoteListElement = Awaited<ReturnType<typeof listNotes>>[number];

export default async function NotesPage() {
  const notes = await listNotes();

  return (
    <>
      <BreadCrumbHelper items={["Notes"]} />
      <Main className="max-w-5xl">
        <TitleSection>
          <div>
            <H1>Review Notes</H1>
            <HSub>
              Notes allow you create notes during reviews, such as summaries.
            </HSub>
          </div>
          <CreateNoteButton />
        </TitleSection>
        <NoteList notes={notes} />
      </Main>
    </>
  );
}

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
