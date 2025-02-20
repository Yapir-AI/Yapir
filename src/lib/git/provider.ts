export const GitProviderType = ["Github", "Gitlab"] as const;
export type GitProviderType = (typeof GitProviderType)[number];
