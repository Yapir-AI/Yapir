export const routes = {
  home: "/",
  reviewers: "/reviewers",
  reviewer: (id: string) => `${routes.reviewers}/${id}` as const,
  providers: "/providers",
  settings: "/settings",
  git: "/git",
  register: "/register",
  projects: "/",
  project: (id: string) => `/projects/${id}` as const,
  projectSettings: (projectId: string) =>
    `${routes.project(projectId)}/settings` as const,
  mergeRequests: (projectId: string) =>
    `${routes.project(projectId)}/mergeRequests` as const,
  mergeRequest: (projectId: string, mergeRequestId: string) =>
    `${routes.mergeRequests(projectId)}/${mergeRequestId}` as const,
  review: (projectId: string, reviewId: string) =>
    `${routes.project(projectId)}/reviews/${reviewId}` as const,
} as const;

export type YapirRoute = {
  [K in keyof typeof routes]: (typeof routes)[K] extends (...args: any[]) => any
    ? ReturnType<(typeof routes)[K]>
    : (typeof routes)[K];
}[keyof typeof routes];

const r = {};
type RouteElement<T extends Object> = {
  path: (args: T) => string | string;
  breadCrumb: <BT>(args: T & BT) => string;
};
