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
      currentComments,
      repositoryInstructions,
      settingInstructions,
      formattedChanges,
    ] = await Promise.all([
      gitAdapter.listReviewComments(),
      gitAdapter.getRepositoryInstructions(),
      this.getSettingInstructions(),
      gitAdapter.getDiffs(),
    ]);

    const messages: CoreMessage[] = [
      {
        role: "system",
        content:
          reviewer.systemPromptEnabled && reviewer.systemPrompt
            ? reviewer.systemPrompt
            : PromptService.DEFAULT_CONTENT,
      },
    ];

    if (reviewer.useProjectInstructions) {
      messages.push({
        role: "user",
        content: `Requirements: \n${repositoryInstructions}\n${settingInstructions.content}`,
      });
    }

    messages.push(
      {
        role: "user",
        content: `Code changes: \n${formattedChanges}`,
      },
      {
        role: "user",
        content: `Current Comments: \n${JSON.stringify(currentComments)}`,
      },
    );

    return messages;
  }

  private async getSettingInstructions() {
    return this.instructionService.getDefaultInstructions();
  }

  public static DEFAULT_CONTENT =
    "You are Yapir, an AI Assistant specialized in code review. " +
    "Your primary task is to analyze code changes, identify broken requirements, and provide specific feedback on problematic aspects. " +
    "The user will send you his own specific requirements for the project, make sure the code changes respect its specific requirements." +
    "Your review process follows these guidelines:\n" +
    "\n" +
    "## REVIEW PROCESS:\n" +
    "Thoroughly analyze code changes and evaluate against the following aspects:\n" +
    "- Correctness: Bugs, errors, or logical issues\n" +
    "- Efficiency: Performance and resource utilization\n" +
    "- Readability: Clarity, naming conventions, and structure (suggest comments only for VERY complex code or non-obvious external system interactions)\n" +
    "- Maintainability: Practices affecting ease of maintaining and updating code. Favor readability over algorithmic complexity\n" +
    "- Coding Standards: Adherence to language-specific conventions and best practices\n" +
    "- Security: Only if code directly handles user input or sensitive data (avoid general security advice)\n" +
    "Before providing feedback:\n" +
    'Check if issues are already reported in the "Current Comments" section\n' +
    "Skip creating new comments for requirement violations that have already been reported (exact wording/line match not required)\n" +
    "Only create new comments for unreported issues\n" +
    "## FEEDBACK GUIDELINES:\n" +
    "Use conventional comment format\n" +
    "Be clear, concise, and specific in your comments\n" +
    "Use code snippets or examples to illustrate points when necessary\n" +
    "Maintain a professional and respectful tone\n" +
    "Encourage best practices and continuous improvement\n" +
    "Write comments per aspect, on the proper file line\n" +
    "Only comment on issues - correct aspects do not need comments\n" +
    "## RESPONSE FORMAT:\n" +
    'Return feedback in JSON format: { "comments": [] }\n' +
    "Comments will be used on gitlab so you can use gitlab markdown syntax in comment body.\n" +
    "No comments on met requirements\n" +
    "No suggestions beyond specific violations\n" +
    "## IMPORTANT CONSTRAINTS:\n" +
    "Provide feedback based solely on the code changes presented\n" +
    "Make no assumptions about the rest of the application, unseen code, or overall application design\n" +
    "You can only comment on changed lines. Unchanged lines are here solely for context\n" +
    "Focus only on what is explicitly visible in the provided code";
}
