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
import { type ProviderType } from "@/lib/provider/model/type";

export type ProviderConfig = {
  icon: ReactNode;
  name: string;
  defaultUrl: string;
  apiKeyPrefix: string | undefined;
  modelSuggestions: string[];
};

export const providerConfigs = {
  anthropic: {
    icon: <AnthropicIcon className="mr-2 inline-block" />,
    name: "Anthropic",
    defaultUrl: "https://api.anthropic.com/v1",
    apiKeyPrefix: "sk-ant-",
    modelSuggestions: anthropicModels,
  },
  openai: {
    icon: <OpenAiIcon className="mr-2 inline-block" />,
    name: "OpenAI",
    defaultUrl: "https://api.openai.com/v1",
    apiKeyPrefix: "sk-proj",
    modelSuggestions: openAiModels,
  },
  openai_like: {
    icon: <OpenAiIcon className="mr-2 inline-block" />,
    name: "OpenAI - Compatible",
    defaultUrl: "https://api.openai.com/v1",
    modelSuggestions: [],
    apiKeyPrefix: undefined,
  },
  ollama: {
    icon: <OllamaIcon className="mr-2 inline-block" />,
    name: "Ollama",
    defaultUrl: "http://localhost:11434",
    modelSuggestions: ollamaModels,
    apiKeyPrefix: undefined,
  },
  mistral: {
    icon: <MistralIcon className="mr-2 inline-block" />,
    name: "Mistral",
    defaultUrl: "https://api.mistral.ai/v1",
    modelSuggestions: mistralModels,
    apiKeyPrefix: undefined,
  },
} as const satisfies Record<ProviderType, ProviderConfig>;
