import type { GitProject } from "@prisma/client";

export class MergeRequestIgnoreService {
  isIgnored(
    project: GitProject,
    {
      username,
      email,
      title,
      isDraft,
    }: { username: string; email: string; title: string; isDraft: boolean },
  ) {
    if (project.ignoreDraft && isDraft) return true;
    const userIsIgnored =
      project.ignoreList
        ?.split(",")
        ?.map((i) => i.trim())
        ?.some(
          (ignoredName) =>
            ignoredName.toLowerCase() === username.toLowerCase() ||
            ignoredName.toLowerCase() === email.toLowerCase(),
        ) ?? false;
    if (userIsIgnored) return true;

    return !!project.ignorePattern && RegExp(project.ignorePattern).test(title);
  }
}
