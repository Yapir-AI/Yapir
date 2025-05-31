import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { Main } from "@/components/ui/main";
import { container } from "@/lib/di/container";
import { breadCrumbFactory } from "@/components/rich/BreadCrumbFactory";
import { TitleSection } from "@/components/rich/titleSection";
import { H1, HSub } from "@/components/ui/typography";
import { NoteSettings } from "@/app/(auth)/notes/[noteId]/NoteSettings";
import { formatDistanceToNow } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { ReviewerList } from "@/lib/reviewer/ReviewerList";

export default async function NotePage({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const { noteService } = container.cradle;
  const { noteId } = await params;
  const note = await noteService.findById({
    where: { id: noteId },
    include: { reviewers: { include: { aiProvider: true } } },
  });

  return (
    <>
      <BreadCrumbHelper items={["Notes", breadCrumbFactory.note(note)]} />
      <Main>
        <TitleSection>
          <div>
            <H1>{note.title}</H1>
            <HSub>
              Created {formatDistanceToNow(note.createdAt, { addSuffix: true })}{" "}
              - Updated{" "}
              {formatDistanceToNow(note.updatedAt, { addSuffix: true })}
            </HSub>
          </div>
          <Badge variant="secondary">{note.tag}</Badge>
        </TitleSection>
        <div className="grid gap-10 lg:grid-cols-3">
          <NoteSettings note={note} />
          <ReviewerList title="Attached Reviewers" reviewers={note.reviewers} />
        </div>
      </Main>
    </>
  );
}
