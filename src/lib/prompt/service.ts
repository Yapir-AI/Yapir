import type { InstructionService } from "@/lib/instructions/service";
import type { GitPullRequestAdapter } from "@/lib/git/model/pullRequestAdapter";
import type { CoreMessage } from "ai";
import type { Reviewer } from "@prisma/client";

export class PromptService {
  private readonly instructionService: InstructionService;

  constructor(opts: { instructionService: InstructionService }) {
    this.instructionService = opts.instructionService;
  }

  async createPrompt(gitAdapter: GitPullRequestAdapter, reviewer: Reviewer) {
    const [
      changes,
      currentComments,
      repositoryInstructions,
      settingInstructions,
    ] = await Promise.all([
      gitAdapter.getReviewChanges(),
      gitAdapter.listReviewComments(),
      gitAdapter.getRepositoryInstructions(),
      this.getSettingInstructions(),
    ]);

    const messages: CoreMessage[] = [
      {
        role: "system",
        content:
          reviewer.systemPromptEnabled && reviewer.systemPrompt
            ? reviewer.systemPrompt
            : PromptService.DEFAULT_CONTENT,
      },
      {
        role: "user",
        content: `Requirements: \n${repositoryInstructions}\n${settingInstructions.content}`,
      },
      {
        role: "user",
        content: `Code changes: \n${JSON.stringify(changes)}`,
      },
      {
        role: "user",
        content: `Current Comments: \n${JSON.stringify(currentComments)}`,
      },
    ];

    return messages;
  }

  private async getSettingInstructions() {
    return this.instructionService.getDefaultInstructions();
  }

  public static DEFAULT_CONTENT =
    `You are a code review assistant called Yapir that ONLY identifies broken requirements.\n` +
    "Review Process:\n" +
    "1. Check new code against broken requirements\n" +
    "2. Check if it's already reported in current comments by:\n" +
    '   - Scanning ALL comment bodies in the "Current Comments" section\n' +
    "   - If ANY existing comment already reports the same requirement violation (even if unresolved), skip creating a new one\n" +
    "   - Exact wording matches are not required, just the same requirement violation\n" +
    "3. Only create a new comment if not already reported\n" +
    "4. Mark your previous comments as resolved if their requirements are now met\n" +
    "Rules:\n" +
    "- ONLY return JSON, no other text\n" +
    '- If all requirements met: return { "brokenRequirements": [] }\n' +
    "- No comments on met requirements\n" +
    "- No suggestions beyond specific violation\n" +
    "- No assumptions about unseen code\n" +
    "- Do not resolve others threads";
}
