"use client";

import type { GitProject } from "@prisma/client";
import { H3, H3Sub } from "@/components/ui/typography";
import { Label, LabelDescription } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { updateIgnoreSettings } from "@/lib/project/action";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDebouncedMutation } from "@/lib/reactQuery/useDebouncedMutation";
import { z } from "zod";

export function ProjectSettings(project: GitProject) {
  async function toggleIgnoreDraft() {
    return updateIgnoreSettings({
      projectId: project.id,
      ignore: !project.ignoreDraft,
    });
  }

  const { debouncedMutate: updateIgnoreList } = useDebouncedMutation({
    mutationFn: async (ignoreList: string) =>
      updateIgnoreSettings({
        projectId: project.id,
        ignoreList,
      }),
  });

  const { debouncedMutate: updateIgnorePattern } = useDebouncedMutation({
    mutationFn: async (ignorePattern: string) =>
      updateIgnoreSettings({
        projectId: project.id,
        ignorePattern,
      }),
  });

  return (
    <div className="flex max-w-2xl flex-col gap-4">
      <div>
        <H3>Settings</H3>
        <H3Sub>
          Manage <span className="italic">{project.name}</span> configuration
        </H3Sub>
      </div>

      <Label className="flex cursor-pointer items-center justify-between">
        <div>
          <p className="mb-2">Ignore Drafts:</p>
          <LabelDescription>
            {project.ignoreDraft
              ? "Draft MRs will be ignored."
              : "Draft MRs will be reviewed."}
          </LabelDescription>
        </div>
        <Switch
          id="ignore-draft"
          checked={project.ignoreDraft}
          onClick={toggleIgnoreDraft}
        />
      </Label>
      <Label className="flex w-full cursor-pointer flex-col justify-between gap-2">
        <p>Ignore Patterns:</p>
        <LabelDescription>Regex patterns to ignore MRs.</LabelDescription>
        <Textarea
          defaultValue={project.ignorePattern ?? ""}
          onChange={(event) => updateIgnorePattern(event.target.value)}
          className="field-sizing-content"
          placeholder="/\b(?:chore|wip|no[\s_-]?ci)\b/i"
        />
      </Label>
      <Label className="flex w-full cursor-pointer flex-col justify-between gap-2">
        <p>User Ignore list:</p>
        <LabelDescription>
          Comma separated list of usernames or email to ignore reviews from.
        </LabelDescription>
        <Textarea
          defaultValue={project.ignoreList ?? ""}
          onChange={(event) => updateIgnoreList(event.target.value)}
          className="field-sizing-content"
          placeholder="bob@yapir.io,dependabot,renovate"
        />
      </Label>
    </div>
  );
}
