import type {
  ExpandedMergeRequestSchema,
  MergeRequestDiscussionNoteSchema,
  WebhookMergeRequestEventSchema,
} from "@gitbeaker/core";
import type { GitlabClient } from "@/lib/git/connectors/gitlab/clientFactory";
import {
  type GitComment,
  type GitFileChange,
  GitPullRequestAdapter,
  type GitThread,
} from "@/lib/git/model/pullRequestAdapter";
import { GitlabCommentHelper } from "@/lib/git/connectors/gitlab/GitlabCommentHelper";
import type { ReviewWithProject } from "@/lib/review/types";
import { GitDiffFormatter } from "@/lib/git/utils/gitDiffFormatter";

export class GitlabPullRequestAdapter extends GitPullRequestAdapter {
  constructor(
    private readonly projectId: number,
    private readonly mergeRequestIId: number,
    private readonly repoName: string,
    private readonly repoUrl: string,
    private readonly pullUrl: string,
    private readonly pullName: string,
    private readonly gitlab: GitlabClient,
  ) {
    super();
    this.mr = gitlab.MergeRequests.show(this.projectId, this.mergeRequestIId);
  }

  private readonly mr: Promise<ExpandedMergeRequestSchema>;

  static fromMergeRequestEvent(
    gitlab: GitlabClient,
    event: WebhookMergeRequestEventSchema,
  ) {
    return new GitlabPullRequestAdapter(
      event.project.id,
      event.object_attributes.iid,
      event.project.name,
      event.project.web_url,
      event.object_attributes.url,
      event.object_attributes.title,
      gitlab,
    );
  }

  static fromReview(gitlab: GitlabClient, review: ReviewWithProject) {
    return new GitlabPullRequestAdapter(
      Number(review.project.originId),
      Number(review.pullNumber),
      review.project.name,
      review.project.url,
      review.pullUrl,
      review.pullName,
      gitlab,
    );
  }

  private commentHelper?: GitlabCommentHelper;

  override async getFileChanges(): Promise<GitFileChange[]> {
    const changes = await this.gitlab.MergeRequests.allDiffs(
      this.projectId,
      this.mergeRequestIId,
    );

    this.commentHelper = new GitlabCommentHelper(this.gitlab, changes);

    return changes.map((change) => {
      return {
        filename: change.new_path,
        previous_filename: change.old_path,
        patch: change.diff,
        status: {
          new_file: change.new_file,
          renamed_file: change.renamed_file,
          deleted_file: change.deleted_file,
          generated_file: change.deleted_file,
        },
      };
    });
  }

  override async getFileContent(path: string): Promise<string> {
    const file = await this.gitlab.RepositoryFiles.show(
      this.projectId,
      path,
      (await this.mr).diff_refs.head_sha,
    );

    return atob(file.content);
  }

  override async listReviewComments(): Promise<GitThread[]> {
    const discussions = await this.gitlab.MergeRequestDiscussions.all(
      this.projectId,
      this.mergeRequestIId,
    );

    return discussions
      .map((discussion) => {
        const notes = (discussion.notes ??
          []) as MergeRequestDiscussionNoteSchema[];

        return {
          id: discussion.id,
          isResolved: (notes[0]?.resolved as boolean) ?? false,
          comments: notes
            ?.filter((note) => !note.system)
            ?.map((note) => ({
              body: note.body,
              line: Number(note.position?.new_line) ?? 0,
              path: note.position?.new_path ?? "",
              author: {
                login: note.author.username,
              },
            })),
        };
      })
      .filter((thread) => thread.comments && thread.comments.length > 0);
  }

  override async createReview(
    _: string,
    comments: Omit<GitComment, "author">[],
  ): Promise<void> {
    const review = await this.mr;

    await Promise.all(
      comments.map((comment) =>
        this.gitlab.MergeRequestDiscussions.create(
          this.projectId,
          this.mergeRequestIId,
          comment.body,
          {
            position: {
              ...this.commentHelper!.findClosestValidCommentLocation(
                comment.path,
                comment.line,
              ),
              baseSha: review.diff_refs.base_sha,
              startSha: review.diff_refs.start_sha,
              headSha: review.diff_refs.head_sha,
              positionType: "text",
            },
          },
        ).catch((e: Error) => console.error(JSON.stringify(e.cause))),
      ),
    );
  }

  /**
   * Enhanced version of formatChangesForLLM that:
   * 1. Keeps the same diff format with line +/- and file headers
   * 2. Removes the hunk headers (like "@@ -16,7 +16,6 @@") while preserving line numbers
   * 3. Fetches and includes the full file content for each file
   */
  async formatEnhancedChangesForLLM(): Promise<string> {
    const changes = await this.getReviewChanges();

    // Fetch all file contents in parallel
    const changesWithContents = await Promise.all(
      changes.map(async (change) => {
        let content = "";
        // Only try to get content for files that exist in the current state
        if (!change.status.deleted_file) {
          try {
            content = await this.getFileContent(change.filename);
          } catch (error) {
            console.warn(`Failed to get content for ${change.filename}:`, error);
          }
        }
        return { ...change, content };
      })
    );

    // Use the enhanced formatter in GitDiffFormatter
    return GitDiffFormatter.formatEnhancedChangesForLLM(changesWithContents);
  }

  override getReviewInformation() {
    return {
      repoName: this.repoName,
      repoUrl: this.repoUrl,
      pullNumber: this.mergeRequestIId,
      pullUrl: this.pullUrl,
      pullName: this.pullName,
    };
  }
}
