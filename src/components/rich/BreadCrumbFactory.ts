import { routes } from "@/lib/route";
import type { BreadCrumbItem } from "@/components/rich/BreadCrumbHelper";

export const breadCrumbFactory = {
  project: ({ id, name }: { id: string; name: string }) => ({
    href: routes.project(id),
    label: name,
  }),

  mergeRequests: ({ projectId }: { projectId: string }) => ({
    href: routes.mergeRequests(projectId),
    label: "Merge Requests",
  }),

  mergeRequest: ({
    projectId,
    id,
    name,
  }: {
    projectId: string;
    id: string;
    name: string;
  }) => ({
    href: routes.mergeRequest(projectId, id),
    label: name,
  }),

  review: ({ name }: { name: string }) => ({ label: name + "'s Review" }),
  note: ({ title }: { title: string }) => ({ label: title }),
} as const satisfies Record<string, (props: any) => BreadCrumbItem>;
