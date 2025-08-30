import type { GetModelStepOutput } from "@/lib/review/steps/getModelStep";
import type { CreateSchemaStepOutput } from "@/lib/review/steps/createSchemaStep";
import type { CreatePromptStepOutput } from "@/lib/review/steps/createPromptStep";
import { AISDKError, generateObject } from "ai";
import type { ProcessReviewerInput } from "@/lib/review/operation";

type GenerateObjectStepInput = GetModelStepOutput &
  CreateSchemaStepOutput &
  CreatePromptStepOutput &
  ProcessReviewerInput;

export type GenerateObjectStepOutput = Awaited<
  ReturnType<typeof GenerateObjectStep.prototype.generateObject>
>;

export class GenerateObjectStep {
  async generateObject(context: GenerateObjectStepInput) {
    try {
      const { object } = await generateObject({
        model: context.model,
        schema: context.schema,
        messages: context.promptMessages,
        experimental_telemetry: { isEnabled: true },
      });

      return { output: { success: true, ...object } } as const;
    } catch (error) {
      console.warn(
        `Error processing reviewer ${context.reviewer.name}:`,
        error,
      );

      const errorMessage = AISDKError.isInstance(error)
        ? `${error.name}: ${error.message}`
        : String(error);

      return { output: { success: false, errorMessage } } as const;
    }
  }
}
