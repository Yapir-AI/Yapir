import { streamText } from "ai";
import { assertAuthenticated } from "@/lib/auth/check";
import { container } from "@/lib/di/container";
import { z } from "zod";
import { createTool, tools } from "./tools";
import { buildSystemPrompt } from "./system-prompt";
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
  const tools = await createChatTools(gitProvider);

  const result = streamText({
    model: model,
    messages,
    maxSteps: 10,
    system: await buildSystemPrompt(project, gitProvider),
    tools,
  });

  return result.toDataStreamResponse();
}

export async function createChatTools(gitProvider: GitChatProvider) {
  return {
    getFile: createTool(tools.getFile, async ({ path }) =>
      gitProvider.getFile(path),
    ),

    searchContent: createTool(tools.searchContent, async ({ search }) =>
      gitProvider.searchContent(search),
    ),
  };
}
