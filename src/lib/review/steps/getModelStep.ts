import type { LanguageModelV2 } from "@ai-sdk/provider";
import type { ModelService } from "@/lib/model/service";
import type { ProcessReviewerInput } from "@/lib/review/operation";

type GetModelStepInput = ProcessReviewerInput;
export type GetModelStepOutput = { model: LanguageModelV2 };

export class GetModelStep {
  private readonly modelService: ModelService;

  constructor(opts: { modelService: ModelService }) {
    this.modelService = opts.modelService;
  }

  getModel = async ({
    reviewer,
  }: GetModelStepInput): Promise<GetModelStepOutput> => ({
    model: this.modelService.toModel(reviewer.aiProvider),
  });
}
