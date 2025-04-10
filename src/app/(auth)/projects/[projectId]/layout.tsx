import type { PropsWithChildren } from "react";
import { container } from "@/lib/di/container";
import { ProjectSidebar } from "@/app/(auth)/projects/[projectId]/sidebar";

export default async function ProjectLayout({
  params,
  children,
}: PropsWithChildren<{
  params: Promise<{ projectId: string }>;
}>) {
  const { projectId } = await params;
  const project = await container.resolve("projectService").findById(projectId);
  return (
    <>
      <ProjectSidebar project={project} />
      <div className="w-full">{children}</div>
    </>
  );
}
