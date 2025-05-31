import { Workflow } from "@/lib/workflow/workflow";
import type {
  FetchDiffStep,
  FetchDiffStepOutput,
} from "@/lib/review/steps/fetchDiffStep";
import type { ReviewLifecycleSteps } from "@/lib/review/steps/reviewLifecycleSteps";
import type { GetModelStep } from "@/lib/review/steps/getModelStep";
import type { CreatePromptStep } from "@/lib/review/steps/createPromptStep";
import type { CreateSchemaStep } from "@/lib/review/steps/createSchemaStep";
import type { CustomNoteSteps } from "@/lib/review/steps/customNoteSteps";
import type {
  GenerateObjectStep,
  GenerateObjectStepOutput,
} from "@/lib/review/steps/generateObjectStep";
import type { PostReviewSummaryStep } from "@/lib/review/steps/postReviewSummaryStep";
import type { ProjectForReview, ReviewerForReview } from "@/lib/review/types";
import { observers } from "@/lib/workflow/observer";

export type ReviewOperationInput = {
  mergeRequestId: string;
};

export class ReviewOperation {
  private readonly fetchDiffStep: FetchDiffStep;
  private readonly reviewLifecycleSteps: ReviewLifecycleSteps;
  private readonly project: ProjectForReview;
  private readonly getModelStep: GetModelStep;
  private readonly createPromptStep: CreatePromptStep;
  private readonly createSchemaStep: CreateSchemaStep;
  private readonly customNoteSteps: CustomNoteSteps;
  private readonly generateObjectStep: GenerateObjectStep;
  private readonly postReviewSummaryStep: PostReviewSummaryStep;

  constructor(opts: {
    fetchDiffStep: FetchDiffStep;
    reviewLifecycleSteps: ReviewLifecycleSteps;
    project: ProjectForReview;
    getModelStep: GetModelStep;
    createPromptStep: CreatePromptStep;
    createSchemaStep: CreateSchemaStep;
    customNoteSteps: CustomNoteSteps;
    generateObjectStep: GenerateObjectStep;
    postReviewSummaryStep: PostReviewSummaryStep;
  }) {
    this.fetchDiffStep = opts.fetchDiffStep;
    this.reviewLifecycleSteps = opts.reviewLifecycleSteps;
    this.project = opts.project;
    this.getModelStep = opts.getModelStep;
    this.createPromptStep = opts.createPromptStep;
    this.createSchemaStep = opts.createSchemaStep;
    this.customNoteSteps = opts.customNoteSteps;
    this.generateObjectStep = opts.generateObjectStep;
    this.postReviewSummaryStep = opts.postReviewSummaryStep;
  }

  async execute(params: ReviewOperationInput) {
    await Workflow.new<ReviewOperationInput>(`review-${params.mergeRequestId}`)
      .addObserver(observers.logger)
      .addStep("getDiffs", this.fetchDiffStep.getDiffs)
      .addStep("initReview", this.reviewLifecycleSteps.init)
      .parallel("forEachReviewer", this.forEachReviewer)
      .addStep("getModel", this.getModelStep.getModel)
      .addStep("createPrompt", this.createPromptStep.createPrompt)
      .addStep("createSchema", this.createSchemaStep.createSchema)
      .addStep("addNoteSchema", this.customNoteSteps.addNoteSchema)
      .addStep("generateObject", this.generateObjectStep.generateObject)
      .join(this.collectReviews)
      .addStep("updateReview", this.reviewLifecycleSteps.update)
      .addStep("createNotes", this.customNoteSteps.saveOutputNotes)
      .addStep("postSummary", this.postReviewSummaryStep.postReviewSummary)
      .addStep("publishNotes", this.customNoteSteps.publishNotes)
      .execute(params);
  }

  private forEachReviewer = (
    context: FetchDiffStepOutput,
  ): ProcessReviewerInput[] =>
    this.project.reviewers.map((reviewer) => ({ reviewer, ...context }));

  collectReviews = (
    reviews: (ProcessReviewerInput & GenerateObjectStepOutput)[],
  ) => ({
    reviews: reviews.map(({ reviewer, output }) => ({ reviewer, output })),
  });
}

export type ProcessReviewerInput = {
  reviewer: ReviewerForReview;
} & FetchDiffStepOutput;

export type ProcessReviewersOutput = ReturnType<
  typeof ReviewOperation.prototype.collectReviews
>;
