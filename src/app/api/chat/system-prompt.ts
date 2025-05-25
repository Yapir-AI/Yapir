import { container } from "@/lib/di/container";
import type { GitProject } from "@prisma/client";

export async function buildSystemPrompt(project: GitProject): Promise<string> {
  const { gitlabClientFactory } = container.cradle;
  const gitlab = await gitlabClientFactory.forConnectorId(project.connectorId);

  let systemPrompt = `You are an helpful assistant to help the developer discover their project ${project.name}. You got access to the project guidelines and git repository.`;

  try {
    // Get repository tree
    const tree = await gitlab.Repositories.allRepositoryTrees(
      Number(project.originId),
      { recursive: true },
    );

    const filePaths = tree.map((elem) => elem.path);
    systemPrompt += `\n\n# You can access the following files: \n${filePaths.join("\n")}`;

    // Get project guidelines if they exist
    try {
      const guidelines = await gitlab.RepositoryFiles.show(
        Number(project.originId),
        ".yapir/instructions.md",
        "HEAD",
      );
      systemPrompt += `\n\n# Project Guidelines\n${guidelines.content}`;
    } catch (error) {
      // Guidelines file doesn't exist, which is fine
      console.log("No guidelines file found for project:", project.name);
    }
  } catch (error) {
    console.error(
      "Error building system prompt for project:",
      project.name,
      error,
    );
    // Continue with basic prompt if there are issues
  }

  return systemPrompt;
}
