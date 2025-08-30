import { convertToModelMessages, stepCountIs, streamText } from "ai";
import { assertAuthenticated } from "@/lib/auth/check";
import { container } from "@/lib/di/container";
import { z } from "zod/v3";
import { buildSystemPrompt } from "./system-prompt";
import { tools as sharedTools } from "@/app/api/chat/tools";
import {
  GitChatProvider,
  projectForChatSelect,
} from "@/app/api/chat/gitChatProvider";

// Allow streaming responses up to 30 seconds
export const maxDuration = 60;

const chatRequestSchema = z.object({
  messages: z.array(z.any()),
  reviewerId: z.string().uuid(),
  projectId: z.string().uuid(),
});

export async function POST(req: Request) {
  await assertAuthenticated();

  const body = await req.json();
  const { messages, reviewerId, projectId } = chatRequestSchema.parse(body);

  const { modelService, reviewerService, projectService } = container.cradle;

  const [reviewer, project] = await Promise.all([
    reviewerService.findById(reviewerId, {
      aiProvider: { omit: { apiKey: false } },
    }),
    projectService.findByIdIncluding(projectId, projectForChatSelect),
  ]);

  const gitProvider = await GitChatProvider.forProject(project);

  const model = modelService.toModel(reviewer.aiProvider);

  const result = streamText({
    model: model,
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(10),
    system: await buildSystemPrompt(project, gitProvider),
    providerOptions: {
      openai: {
        reasoningSummary: "auto",
      },
    },
    tools: {
      getFile: {
        ...sharedTools.getFile,
        execute: ({ path }) => gitProvider.getFile(path),
      },
      searchContent: {
        ...sharedTools.searchContent,
        execute: ({ search }) => gitProvider.searchContent(search),
      },
    },
    experimental_telemetry: { isEnabled: true },
  });

  return result.toUIMessageStreamResponse();
}
