import { GithubConnectorButton } from "@/app/(auth)/git/addGithubButton";
import { GitlabConnectorButton } from "@/app/(auth)/git/addGitlabButton";

export function AddGitButton() {
  return (
    <div className="space-x-2">
      <GithubConnectorButton />
      <GitlabConnectorButton />
    </div>
  );
}
