import type { ReactNode } from "react";
import { AnthropicIcon } from "@/components/icons/anthropic";
import { OpenAiIcon } from "@/components/icons/openai";
import { OllamaIcon } from "@/components/icons/ollama";
import {
  anthropicModels,
  mistralModels,
  ollamaModels,
  openAiModels,
} from "@/lib/provider/model/suggestions";
import { MistralIcon } from "@/components/icons/mistral";
import { AiProviderType } from "@prisma/client";
import { cn } from "@/lib/utils";

export type ProviderConfig = {
  Icon: ({ className }: { className: string }) => ReactNode;
  name: string;
  defaultUrl: string;
  apiKeyPrefix: string | undefined;
  modelSuggestions: string[];
};

export const providerConfigs = {
  ANTHROPIC: {
    Icon: ({ className }) => <AnthropicIcon className={cn(className)} />,
    name: "Anthropic",
    defaultUrl: "https://api.anthropic.com/v1",
    apiKeyPrefix: "sk-ant-",
    modelSuggestions: anthropicModels,
  },
  OPENAI: {
    Icon: ({ className }) => <OpenAiIcon className={cn(className)} />,
    name: "OpenAI",
    defaultUrl: "https://api.openai.com/v1",
    apiKeyPrefix: "sk-proj",
    modelSuggestions: openAiModels,
  },
  OPENAI_LIKE: {
    Icon: ({ className }) => <OpenAiIcon className={cn(className)} />,
    name: "OpenAI - Compatible",
    defaultUrl: "https://api.openai.com/v1",
    modelSuggestions: [],
    apiKeyPrefix: undefined,
  },
  OLLAMA: {
    Icon: ({ className }) => <OllamaIcon className={cn(className)} />,
    name: "Ollama",
    defaultUrl: "http://localhost:11434",
    modelSuggestions: ollamaModels,
    apiKeyPrefix: undefined,
  },
  MISTRAL: {
    Icon: ({ className }) => <MistralIcon className={cn(className)} />,
    name: "Mistral",
    defaultUrl: "https://api.mistral.ai/v1",
    modelSuggestions: mistralModels,
    apiKeyPrefix: undefined,
  },
} as const satisfies Record<AiProviderType, ProviderConfig>;

const a = AiProviderType;
