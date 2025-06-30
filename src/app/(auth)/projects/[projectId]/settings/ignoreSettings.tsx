"use client";

import type { GitProject } from "@/generated/prisma/client";
import { H3, H3Sub } from "@/components/ui/typography";
import { Label, LabelDescription } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { updateProject } from "@/lib/project/action";
import { Textarea } from "@/components/ui/textarea";
import { useDebouncedMutation } from "@/lib/reactQuery/useDebouncedMutation";

export function IgnoreSettings(project: GitProject) {
  async function toggleIgnoreDraft() {
    return updateProject({
      projectId: project.id,
      ignore: !project.ignoreDraft,
    });
  }

  const { debouncedMutate: updateIgnoreList } = useDebouncedMutation({
    mutationFn: async (ignoreList: string) =>
      updateProject({
        projectId: project.id,
        ignoreList,
      }),
  });

  const { debouncedMutate: updateIgnorePattern } = useDebouncedMutation({
    mutationFn: async (ignorePattern: string) =>
      updateProject({
        projectId: project.id,
        ignorePattern,
      }),
  });

  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <div>
        <H3>Ignore</H3>
        <H3Sub>
          Configure <span className="italic">{project.name}</span> ignore
          settings
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
        <Textarea
          defaultValue={project.ignorePattern ?? ""}
          onChange={(event) => updateIgnorePattern(event.target.value)}
          className="field-sizing-content"
          placeholder="/\b(?:chore|wip|no[\s_-]?ci)\b/i"
        />
        <LabelDescription>Regex patterns to ignore MRs.</LabelDescription>
      </Label>
      <Label className="flex w-full cursor-pointer flex-col justify-between gap-2">
        <p>User Ignore list:</p>
        <Textarea
          defaultValue={project.ignoreList ?? ""}
          onChange={(event) => updateIgnoreList(event.target.value)}
          className="field-sizing-content"
          placeholder="bob@yapir.io,dependabot,renovate"
        />
        <LabelDescription>
          Comma separated list of usernames or email to ignore reviews from.
        </LabelDescription>
      </Label>
    </div>
  );
}
