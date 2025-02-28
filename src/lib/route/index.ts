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
} as const;

export type YapirRoute = {
  [K in keyof typeof routes]: (typeof routes)[K] extends (...args: any[]) => any
    ? ReturnType<(typeof routes)[K]>
    : (typeof routes)[K];
}[keyof typeof routes];
