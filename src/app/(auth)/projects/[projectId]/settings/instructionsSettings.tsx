"use client";

import type { GitProject } from "@/generated/prisma/client";
import { H3, H3Sub } from "@/components/ui/typography";
import { AutoComplete } from "@/components/ui/autocomplete";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { updateProject } from "@/lib/project/action";

export function InstructionsSettings(project: GitProject) {
  async function toggleCustomInstructions() {
    return updateProject({
      projectId: project.id,
      customInstructionFile: !project.customInstructionFile,
    });
  }

  async function updateCustomPath({ value }: { value: string }) {
    return updateProject({
      projectId: project.id,
      instructionFile: value,
    });
  }

  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div>
        <H3>Instructions</H3>
        <H3Sub>Reuse your agents guidelines across your tools.</H3Sub>
      </div>

      <Label className="-mb-6 flex cursor-pointer items-center justify-between">
        <div>
          <p className="mb-2">Enable custom Path:</p>
        </div>
        <Switch
          id="ignore-draft"
          checked={project.customInstructionFile}
          onClick={toggleCustomInstructions}
        />
      </Label>
      <AutoComplete
        options={paths}
        disabled={!project.customInstructionFile}
        emptyMessage=""
        allowCustomValues={true}
        addValueHeading="Custom path"
        addValueHint="Use file:"
        placeholder=".yapir/instructions.md"
        onValueChange={updateCustomPath}
      />
    </div>
  );
}

export const paths = [
  ".cursor/rules",
  ".windsurfrules",
  "CLAUDE.md",
  "AGENT.md",
  "AGENTS.md",
  ".junie/guidelines.md",
].map((p) => ({ value: p, label: p }));
