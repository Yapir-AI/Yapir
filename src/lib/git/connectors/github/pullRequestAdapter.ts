import {
  type GitComment,
  type GitFileChange,
  GitPullRequestAdapter,
  type GitReviewInfo,
  type GitThread,
} from "@/lib/git/model/pullRequestAdapter";
import type { EmitterWebhookEvent } from "@octokit/webhooks";
import type { Octokit } from "@octokit/core";
import type { Api } from "@octokit/plugin-rest-endpoint-methods";
import { atob } from "node:buffer";

export class GithubPullRequestAdapter extends GitPullRequestAdapter {
  constructor(
    private readonly event: EmitterWebhookEvent<"pull_request">,
    private readonly octokit: Octokit & Api,
  ) {
    super();
  }

  private readonly payload = this.event.payload;
  private readonly owner = this.payload.repository.owner.login;
  private readonly repo = this.payload.repository.name;
  private readonly pullNumber = this.payload.pull_request.number;
  private readonly sha = this.payload.pull_request.head.sha;

  override async getFileChanges(): Promise<GitFileChange[]> {
    const { data } = await this.octokit.rest.pulls.listFiles({
      owner: this.owner,
      repo: this.repo,
      pull_number: this.pullNumber,
      sha: this.sha,
    });
    return data.map(({ filename, status, previous_filename, patch }) => ({
      filename,
      status,
      previous_filename,
      patch,
    }));
  }

  override async getFileContent(path: string): Promise<string> {
    const {
      data: { content },
    } = (await this.octokit.rest.repos.getContent({
      owner: this.owner,
      repo: this.repo,
      path,
      sha: this.sha,
    })) as {
      data: { content: string };
    };

    return atob(content);
  }

  override async listReviewComments(): Promise<GitThread[]> {
    const response = await this.octokit.graphql<PullRequestQuery>(`{
        repository(owner: "${this.owner}", name: "${this.repo}"){
            pullRequest(number: ${this.pullNumber}) {
                reviewThreads(first: 100) {
                    nodes {
                        id
                        comments(first: 100) {
                            nodes {
                                body, line, path
                            }
                        }
                        isResolved
                    }
                }
            }
        }
    }`);

    return response.repository.pullRequest.reviewThreads.nodes.map(
      ({ id, isResolved, comments }) => ({
        id,
        isResolved,
        comments: comments.nodes,
      }),
    );
  }

  override async createReview(
    body: string,
    comments: Omit<GitComment, "author">[],
  ): Promise<void> {
    await this.octokit.rest.pulls.createReview({
      owner: this.owner,
      repo: this.repo,
      pull_number: this.pullNumber,
      event: "REQUEST_CHANGES",
      body,
      comments: comments ?? [],
    });
  }

  override async getReviewInformation(): Promise<GitReviewInfo> {
    return {
      repoName: this.payload.repository.full_name,
      repoUrl: this.payload.repository.html_url,
      pullNumber: this.payload.pull_request.number,
      pullUrl: this.payload.pull_request.html_url,
      pullName: this.payload.pull_request.title,
    };
  }
}

type PullRequestQuery = {
  repository: {
    pullRequest: {
      reviewThreads: {
        nodes: Array<{
          id: string;
          comments: {
            nodes: Array<{
              body: string;
              line: number;
              path: string;
              author: {
                login: string;
              };
            }>;
          };
          isResolved: boolean;
        }>;
      };
    };
  };
};
