import type { GitMergeRequestAdapter } from "@/lib/git/model/GitPullRequestAdapter";
import type { GitMergeRequestDiffs } from "@/lib/git/parsing/model/GitMergeRequestDiffs";

type FetchDiffStepInput = {};
export type FetchDiffStepOutput = { diffs: GitMergeRequestDiffs };

export class FetchDiffStep {
  private gitMergeRequestAdapter: GitMergeRequestAdapter;

  constructor(opts: { gitMergeRequestAdapter: GitMergeRequestAdapter }) {
    this.gitMergeRequestAdapter = opts.gitMergeRequestAdapter;
  }

  getDiffs = async (): Promise<FetchDiffStepOutput> => ({
    diffs: await this.gitMergeRequestAdapter.getDiffs(),
  });
}
