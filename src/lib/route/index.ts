export const routes = {
  home: "/",
  reviewers: "/reviewers",
  reviewer: (id: string) => `${routes.reviewers}/${id}` as const,
  providers: "/providers",
  settings: "/settings",
  git: "/git",
  register: "/register",
  projects: "/projects",
  project: (id: string) => `${routes.projects}/${id}` as const,
  projectSettings: (projectId: string) =>
    `${routes.project(projectId)}/settings` as const,
  projectChat: (projectId: string) =>
    `${routes.project(projectId)}/chat` as const,
  mergeRequests: (projectId: string) =>
    `${routes.project(projectId)}/mergeRequests` as const,
  mergeRequest: (projectId: string, mergeRequestId: string) =>
    `${routes.mergeRequests(projectId)}/${mergeRequestId}` as const,
  review: (projectId: string, reviewId: string) =>
    `${routes.project(projectId)}/reviews/${reviewId}` as const,
  notes: "/notes",
  note: (id: string) => `${routes.notes}/${id}` as const,
} as const;

export type YapirRoute = {
  [K in keyof typeof routes]: (typeof routes)[K] extends (...args: any[]) => any
    ? ReturnType<(typeof routes)[K]>
    : (typeof routes)[K];
}[keyof typeof routes];
