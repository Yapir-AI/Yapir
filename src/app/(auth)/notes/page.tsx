import { Main } from "@/components/ui/main";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { container } from "@/lib/di/container";
import { CreateNoteButton } from "@/app/(auth)/notes/createNoteButton";
import React from "react";
import { NoteList } from "@/lib/note/note-list";

export default async function NotesPage() {
  const { noteService } = container.cradle;

  const notes = await noteService.list({ orderBy: { createdAt: "desc" } });

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
