export const ProviderType = [
  "anthropic",
  "openai",
  "openai_like",
  "ollama",
  "mistral",
] as const;
export type ProviderType = (typeof ProviderType)[number];
