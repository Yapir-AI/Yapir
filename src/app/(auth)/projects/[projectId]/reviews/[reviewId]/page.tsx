import { container } from "@/lib/di/container";
import { Main } from "@/components/ui/main";
import { TitleSection } from "@/components/rich/titleSection";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { breadCrumbFactory } from "@/components/rich/BreadCrumbFactory";
import { H1, HSub } from "@/components/ui/typography";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  CircleX,
  ExternalLinkIcon,
  FileDiffIcon,
  FileMinusIcon,
  FilePlusIcon,
  FileQuestionIcon,
} from "lucide-react";
import {
  Fragment,
  type PropsWithChildren,
  type ReactNode,
  Suspense,
} from "react";
import type { GitFileDiff } from "@/lib/git/parsing/model/GitFileDiff";
import type { GitLineChange } from "@/lib/git/parsing/model/GitLineChange";
import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";
import type { Comment, Reviewer } from "@prisma/client";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import MarkdownRenderer from "@/components/ui/markdown-renderer";
import { CommentFeedback } from "@/app/(auth)/projects/[projectId]/reviews/[reviewId]/commentFeedback";
import { ReviewNotes } from "@/app/(auth)/projects/[projectId]/reviews/[reviewId]/reviewNotes";
import type { GitMergeRequestDiffs } from "@/lib/git/parsing/model/GitMergeRequestDiffs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { EmptyCard } from "@/components/rich/emptyCard";

type FileComments = Partial<Record<string, Comment[]>>;

function SideComments({
  diffs,
  comments,
}: {
  diffs: GitMergeRequestDiffs;
  comments: FileComments;
}) {
  return (
    <div className="max-h-full max-w-xs min-w-xs divide-y overflow-y-auto rounded border text-sm">
      {Object.entries(comments).map(([fileId, comments]) => {
        const file = diffs.getFile(fileId);
        const fileName = file?.newPath ?? file?.oldPath ?? "Unmatched file";

        return (
          <Fragment key={fileId}>
            <SideElement>
              <div className="direction-rtl text-muted-foreground truncate">
                {fileName}
              </div>
            </SideElement>
            {comments?.map((comment) => (
              <a href={`#${comment.id}`} key={comment.id} className="group">
                <SideElement className="group-hover:bg-accent">
                  <span className="line-clamp-2">
                    <MarkdownRenderer>{comment.text}</MarkdownRenderer>
                  </span>
                </SideElement>
              </a>
            ))}
          </Fragment>
        );
      })}
    </div>
  );
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ projectId: string; reviewId: string }>;
}) {
  const { reviewService } = container.cradle;
  const { reviewId } = await params;

  const review = await reviewService.findById(reviewId, {
    reviewers: true,
    mergeRequest: { include: { project: true } },
    comments: { include: { reviewer: true } },
    reviewNotes: { include: { reviewer: true, noteDefinition: true } },
  });

  const { reviewers, mergeRequest, comments } = review;
  const { project } = mergeRequest;

  const fileComments = Object.groupBy(review.comments, (c) => c.fileId);

  return (
    <>
      <BreadCrumbHelper
        items={[
          "Projects",
          breadCrumbFactory.project(project),
          breadCrumbFactory.mergeRequests(mergeRequest),
          breadCrumbFactory.mergeRequest(mergeRequest),
          breadCrumbFactory.review({
            name: reviewers.map((r) => r.name).join(", "),
          }),
        ]}
      />
      <Main className="space-y-10">
        <TitleSection>
          <div>
            <H1>{mergeRequest.name}</H1>
            <HSub>
              Reviewed by {reviewers.map((r) => r.name).join(", ")} -{" "}
              {formatDistanceToNow(review.at, { addSuffix: true })}
            </HSub>
          </div>
          <div>
            <Button variant="link" asChild size="icon">
              <Link href={mergeRequest.url}>
                <ExternalLinkIcon />
              </Link>
            </Button>
          </div>
        </TitleSection>
        {review.status === "ERROR" && (
          <Alert className="mb-2" variant="destructive">
            <CircleX />
            <AlertTitle>Review Failed!</AlertTitle>
            <AlertDescription>
              {review.errorMessage ?? "An unknow error happened"}
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-2 gap-4">
          <ReviewNotes reviewNotes={review.reviewNotes} />
        </div>
        {comments.length ? (
          <div className="flex max-h-full gap-4 pb-6">
            <SideComments diffs={review.diffs} comments={fileComments} />
            <div className="flex grow flex-col gap-5 overflow-y-auto font-mono text-xs">
              {Object.entries(fileComments).map(([fileId, comments]) => {
                const file = review.diffs.getFile(fileId);
                return (
                  <File comments={comments ?? []} diff={file} key={fileId} />
                );
              })}
            </div>
          </div>
        ) : (
          <EmptyCard>
            <CardTitle>No Comments.</CardTitle>
            <CardDescription>This review had no comments...</CardDescription>
          </EmptyCard>
        )}
      </Main>
    </>
  );
}

function SideElement({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "flex min-h-10 items-end px-4 py-4 pb-1 text-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

function LineComments({
  comments,
}: {
  comments: (Comment & { reviewer: Reviewer })[];
}) {
  return comments?.map((c) => (
    <tr key={c.id} id={c.id}>
      <td
        colSpan={4}
        className="bg-card text-card-foreground border-y font-sans text-sm"
      >
        <CardHeader className="flex flex-row items-center gap-3 space-y-0">
          <ReviewerAvatar
            reviewerName={c.reviewer.name}
            options={{ size: 35, radius: 100 }}
          />
          <CardTitle>{c.reviewer.name}</CardTitle>
          <div className="grow" />
          <CommentFeedback {...c} />
        </CardHeader>
        <CardContent>
          <MarkdownRenderer>{c.text}</MarkdownRenderer>
        </CardContent>
      </td>
    </tr>
  ));
}

async function File({
  comments,
  diff: file,
}: {
  comments: (Comment & { reviewer: Reviewer })[];
  diff?: GitFileDiff;
}) {
  if (!file) {
    return (
      <div className="rounded-xl border pb-4">
        <div className="bg-muted flex flex-row items-center gap-2 p-4">
          <FileQuestionIcon className="size-4" />
          Unmatched file
        </div>
        <table>
          <tbody>
            <LineComments comments={comments} />
          </tbody>
        </table>
      </div>
    );
  }

  const fileType = (file.newPath ?? file.oldPath ?? "").split(".").pop() ?? "";

  const commentsByLine = Object.groupBy(comments, (c) => c.line);

  return (
    <Accordion
      type="multiple"
      defaultValue={["file"]}
      key={file.newPath ?? "" + file.oldPath ?? ""}
      className="max-h-fit rounded border"
    >
      <AccordionItem value="file">
        <FileTitle {...file} />
        <AccordionContent>
          <table className="bg-back w-full text-xs dark:bg-white dark:text-black">
            <tbody className="w-full">
              {file.lineChanges.map((l) => {
                const newLineComments =
                  (l.newLineNumber
                    ? commentsByLine[l.newLineNumber]?.filter(
                        (c) => c.location === "NEW",
                      )
                    : []) ?? [];
                const oldLineComments =
                  (l.oldLineNumber
                    ? commentsByLine[l.oldLineNumber]?.filter(
                        (c) => c.location === "OLD",
                      )
                    : []) ?? [];

                return (
                  <Fragment key={`${l.oldLineNumber}-${l.newLineNumber}`}>
                    <Suspense>
                      <FileLine lang={fileType} {...l} />
                    </Suspense>
                    <LineComments
                      comments={[...newLineComments, ...oldLineComments]}
                    />
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

async function FileLine({ ...line }: GitLineChange & { lang: string }) {
  const typeToPrefix: Record<GitLineChange["type"], string> = {
    added: "+",
    removed: "-",
    unchanged: "",
  };

  const out = await codeToHtml(line.content, {
    lang: line.lang,
    // defaultColor: false,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    colorReplacements: {
      "#fff": "transparent",
    },
  });

  return (
    <>
      <tr
        className={cn(
          "*:px-2 *:pb-1 *:align-top",
          line.isRemoved() && "bg-red-100!",
          line.isAdded() && "bg-green-100!",
        )}
      >
        <td className="w-12 text-right select-none">{line.oldLineNumber}</td>
        <td className="w-12 border-r text-right select-none">
          {line.newLineNumber}
        </td>
        <td className="w-1 p-0">
          <span className="select-none">{typeToPrefix[line.type]} </span>
        </td>
        <td className="text-shiki-light bg-shiki-light-bg dark:text-shiki-dark dark:bg-shiki-dark-bg pl-0! [&_pre]:break-words [&_pre]:whitespace-pre-wrap">
          <p dangerouslySetInnerHTML={{ __html: out }}></p>
        </td>
      </tr>
    </>
  );
}

function FileTitle(file: GitFileDiff) {
  let content: ReactNode;
  let Icon = FileDiffIcon;

  if (file.isNew()) {
    Icon = FilePlusIcon;
    content = (
      <>
        <span className="text-success font-bold">created:</span>
        {file.newPath}
      </>
    );
  } else if (file.isDeleted()) {
    Icon = FileMinusIcon;
    content = (
      <>
        <span className="text-destructive font-bold">deleted:</span>
        {file.oldPath}
      </>
    );
  } else if (file.isRenamed()) {
    content = (
      <>
        <span className="text-destructive">{file.oldPath}</span>
        {" -> "}
        <span className="text-success">{file.newPath}</span>
      </>
    );
  } else content = <span>{file.newPath}</span>;

  return (
    <AccordionTrigger className="bg-muted flex flex-row items-center gap-2 rounded-t p-4 text-xs">
      <div>
        <Icon className="size-4 rotate-0" />
      </div>
      {content}
    </AccordionTrigger>
  );
}
