import type { GitProject } from "@prisma/client";
import { H3, H3Sub } from "@/components/ui/typography";
import { Label, LabelDescription } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toggleDraft } from "@/lib/project/action";

export function ProjectSettings(project: GitProject) {
  async function toggleIgnoreDraft() {
    "use server";
    return toggleDraft({ projectId: project.id, ignore: !project.ignoreDraft });
  }

  return (
    <div className="flex max-w-md flex-col gap-4">
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
    </div>
  );
}
