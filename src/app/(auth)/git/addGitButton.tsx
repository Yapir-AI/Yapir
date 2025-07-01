import { GitlabConnectorButton } from "@/app/(auth)/git/addGitlabButton";
import { AddGithubButton } from "@/app/(auth)/git/addGithubButton";

export function AddGitButton() {
  return (
    <div className="space-x-2">
      <AddGithubButton />
      <GitlabConnectorButton />
    </div>
  );
}
