import type {
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

export class GitlabPullRequestAdapter extends GitPullRequestAdapter {
  constructor(
    private readonly gitlab: GitlabClient,
    private readonly event: WebhookMergeRequestEventSchema,
  ) {
    super();
  }

  private readonly projectId = this.event.project.id;
  private readonly mergeRequestIId = this.event.object_attributes.iid;

  private readonly mr = this.gitlab.MergeRequests.show(
    this.projectId,
    this.mergeRequestIId,
  );

  override async getFileChanges(): Promise<GitFileChange[]> {
    const changes = await this.gitlab.MergeRequests.allDiffs(
      this.projectId,
      this.mergeRequestIId,
    );

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
      this.event.object_attributes.last_commit.id,
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
              baseSha: review.diff_refs.base_sha,
              startSha: review.diff_refs.start_sha,
              headSha: review.diff_refs.head_sha,
              positionType: "text",
              newLine: "" + comment.line,
              newPath: comment.path,
            },
          },
        ),
      ),
    );
  }

  override getReviewInformation() {
    return {
      repoName: this.event.project.name,
      repoUrl: this.event.project.web_url,
      pullNumber: this.mergeRequestIId,
      pullUrl: this.event.object_attributes.url,
      pullName: this.event.object_attributes.title,
    };
  }
}
