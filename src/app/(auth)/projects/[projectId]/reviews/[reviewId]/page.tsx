import { container } from "@/lib/di/container";
import { Main } from "@/components/ui/main";
import { TitleSection } from "@/components/rich/titleSection";
import { BreadCrumbHelper } from "@/components/rich/BreadCrumbHelper";
import { breadCrumbFactory } from "@/components/rich/BreadCrumbFactory";
import { H1, HSub } from "@/components/ui/typography";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLinkIcon, FileIcon } from "lucide-react";
import { Fragment, type ReactNode, Suspense } from "react";
import type { GitFileDiff } from "@/lib/git/parsing/model/GitFileDiff";
import type { GitLineChange } from "@/lib/git/parsing/model/GitLineChange";
import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";
import type { Comment, Reviewer } from "@prisma/client";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReviewerAvatar } from "@/lib/avatar/reviewer";
import MarkdownRenderer from "@/components/ui/markdown-renderer";
import { CommentFeedback } from "@/app/(auth)/projects/[projectId]/reviews/[reviewId]/commentFeedback";

type FilePath = string;
type LineNumber = number;
type LineComments = Record<LineNumber, Comment[]>;
type FileComments = {
  oldPathComments: LineComments;
  newPathComments: LineComments;
};

type CommentsByFile = Record<FilePath, FileComments>;

function parseComments(comments: Comment[]): CommentsByFile {
  const result: CommentsByFile = {};

  comments.forEach((c) => {
    if (!result[c.path]) {
      result[c.path] = {
        oldPathComments: {},
        newPathComments: {},
      };
    }
    const target =
      c.location === "OLD"
        ? result[c.path].oldPathComments
        : result[c.path].newPathComments;

    if (!target[c.line]) {
      target[c.line] = [];
    }
    target[c.line].push(c);
  });

  return result;
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ projectId: string; reviewId: string }>;
}) {
  const { reviewService } = container.cradle;
  const { reviewId } = await params;

  const {
    reviewer,
    mergeRequest: { project, ...mergeRequest },
    ...review
  } = await reviewService.findById(reviewId, {
    reviewer: true,
    mergeRequest: { include: { project: true } },
    comments: true,
  });

  const comments = parseComments(review.comments);

  return (
    <>
      <BreadCrumbHelper
        items={[
          "Projects",
          breadCrumbFactory.project(project),
          breadCrumbFactory.mergeRequests(mergeRequest),
          breadCrumbFactory.mergeRequest(mergeRequest),
          breadCrumbFactory.review(reviewer),
        ]}
      />
      <Main>
        <TitleSection>
          <div>
            <H1>{mergeRequest.name}</H1>
            <HSub>
              Reviewed by {reviewer.name} -{" "}
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
        <div className="flex flex-col gap-5 font-mono text-xs">
          {review.diffs.fileDiffs.map((diff) => (
            <File
              {...diff}
              reviewer={reviewer}
              comments={comments}
              key={"" + diff.oldPath + diff.newPath}
            />
          ))}
        </div>
      </Main>
    </>
  );
}

function LineComments({
  comments,
  reviewer,
  line,
}: {
  comments: { newPathComments: LineComments; oldPathComments: LineComments };
  reviewer: Reviewer;
  line: GitLineChange;
}) {
  const lineComments = line.isRemoved()
    ? comments.oldPathComments[line.oldLineNumber!]
    : comments.newPathComments[line.newLineNumber!];

  return lineComments?.map((c) => (
    <tr key={c.id}>
      <td
        colSpan={4}
        className="bg-card text-card-foreground border-y font-sans text-sm"
      >
        <CardHeader className="flex flex-row items-center gap-3 space-y-0">
          <ReviewerAvatar
            reviewerName={reviewer.name}
            options={{ size: 35, radius: 100 }}
          />
          <CardTitle>{reviewer.name}</CardTitle>
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
  reviewer,
  ...file
}: GitFileDiff & { comments: CommentsByFile; reviewer: Reviewer }) {
  const fileType = (file.newPath ?? file.oldPath ?? "").split(".").pop() ?? "";

  const newPathComments = file.newPath
    ? (file.comments[file.newPath]?.newPathComments ?? {})
    : {};
  const oldPathComments = file.oldPath
    ? (file.comments[file.oldPath]?.oldPathComments ?? {})
    : {};

  return (
    <div
      key={file.newPath ?? "" + file.oldPath ?? ""}
      className="overflow-hidden rounded-lg border"
    >
      <FileTitle {...file} />
      <table className="bg-back w-full dark:bg-white dark:text-black">
        <tbody className="w-full">
          {file.lineChanges.map((l) => (
            <Fragment key={`${l.oldLineNumber}-${l.newLineNumber}`}>
              <Suspense>
                <FileLine
                  comments={{ newPathComments, oldPathComments }}
                  lang={fileType}
                  {...l}
                />
              </Suspense>
              <LineComments
                comments={{ newPathComments, oldPathComments }}
                line={l}
                reviewer={reviewer}
              />
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

async function FileLine({
  comments,
  ...line
}: GitLineChange & { lang: string; comments: FileComments }) {
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
          "*:px-2 *:pb-1",
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
        <td
          className="text-shiki-light bg-shiki-light-bg dark:text-shiki-dark dark:bg-shiki-dark-bg pl-0!"
          dangerouslySetInnerHTML={{ __html: out }}
        />
      </tr>
    </>
  );
}

function FileTitle(file: GitFileDiff) {
  let content: ReactNode;

  if (file.isNew()) {
    content = (
      <>
        <span className="text-success font-bold">created:</span>
        {file.newPath}
      </>
    );
  } else if (file.isDeleted()) {
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
    <div className="bg-muted flex flex-row items-center gap-2 p-4">
      <FileIcon className="size-4" />
      {content}
    </div>
  );
}
