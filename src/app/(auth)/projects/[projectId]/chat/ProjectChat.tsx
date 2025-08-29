"use client";

import { Chat } from "@/components/ui/chat";
import type { Reviewer } from "@/generated/prisma/client";

export function ProjectChat({
  reviewers,
  projectName,
}: {
  reviewers: Reviewer[];
  projectName: string;
}) {
  return <Chat reviewers={reviewers} projectName={projectName} />;
}
