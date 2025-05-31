import type { FetchDiffStepOutput } from "@/lib/review/steps/fetchDiffStep";
import type { CoreMessage } from "ai";
import type { PromptService } from "@/lib/prompt/service";
import type { ProcessReviewerInput } from "@/lib/review/operation";

type CreatePromptStepInput = ProcessReviewerInput & FetchDiffStepOutput;
export type CreatePromptStepOutput = {
  promptMessages: CoreMessage[];
};

export class CreatePromptStep {
  private readonly promptService: PromptService;

  constructor(opts: { promptService: PromptService }) {
    this.promptService = opts.promptService;
  }

  createPrompt = async ({
    reviewer,
    diffs,
  }: CreatePromptStepInput): Promise<CreatePromptStepOutput> => {
    const promptMessages = await this.promptService.createPrompt(
      reviewer,
      diffs,
    );

    return {
      promptMessages,
    };
  };
}
