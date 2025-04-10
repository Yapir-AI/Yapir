import { streamText } from "ai";
import { assertAuthenticated } from "@/lib/auth/check";
import { container } from "@/lib/di/container";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  await assertAuthenticated();
  const { messages, reviewerId } = await req.json();
  const { modelService, reviewerService } = container.cradle;

  const reviewer = await reviewerService.findById(reviewerId, {
    aiProvider: { omit: { apiKey: false } },
  });
  reviewer.aiProvider.apiKey;
  const model = modelService.toModel(reviewer.aiProvider);

  const result = streamText({
    model: model,
    messages,
  });

  return result.toDataStreamResponse();
}
