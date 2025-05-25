import { streamText } from "ai";
import { assertAuthenticated } from "@/lib/auth/check";
import { container } from "@/lib/di/container";
import { z } from "zod";
import { createTool, tools } from "./tools";
import { buildSystemPrompt } from "./system-prompt";
import type { GitProject } from "@prisma/client";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

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

  // Get project and reviewer data
  const [reviewer, project] = await Promise.all([
    reviewerService.findById(reviewerId, {
      aiProvider: { omit: { apiKey: false } },
    }),
    projectService.findById(projectId),
  ]);

  const model = modelService.toModel(reviewer.aiProvider);
  const tools = await createChatTools(project);

  const result = streamText({
    model: model,
    messages,
    maxSteps: 10,
    system: await buildSystemPrompt(project),
    tools,
  });

  return result.toDataStreamResponse();
}

export async function createChatTools(project: GitProject) {
  const { gitlabClientFactory } = container.cradle;
  const gitlab = await gitlabClientFactory.forConnectorId(project.connectorId);
  const originId = Number(project.originId);

  return {
    getFile: createTool(tools.getFile, async ({ path }) => {
      try {
        const file = await gitlab.RepositoryFiles.show(originId, path, "HEAD");
        return atob(file.content);
      } catch (error) {
        throw new Error(
          `Failed to read file ${path}: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    }),

    searchContent: createTool(tools.searchContent, async ({ search }) => {
      try {
        return await gitlab.Search.all("blobs", search, {
          projectId: originId,
        });
      } catch (error) {
        throw new Error(
          `Failed to search content: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    }),
  };
}
