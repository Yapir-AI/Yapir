export const DbDriver = ["postgres", "neon", "vercel"] as const;
export type DbDriver = (typeof DbDriver)[number];
