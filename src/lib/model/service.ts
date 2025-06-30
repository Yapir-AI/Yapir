import { createOpenAI } from "@ai-sdk/openai";
import { createOllama } from "ollama-ai-provider";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createMistral } from "@ai-sdk/mistral";
import { type AiProvider } from "@/generated/prisma/client";
import type { LanguageModelV1 } from "ai";
import { createDeepSeek } from "@ai-sdk/deepseek";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export class ModelService {
  toModel(provider: AiProvider): LanguageModelV1 {
    const model = provider.model;

    switch (provider.type) {
      case "OPENAI":
        return createOpenAI({
          compatibility: "strict",
          apiKey: provider.apiKey ?? undefined,
          baseURL: provider.baseUrl ?? undefined,
        })(model);
      case "OLLAMA":
        return createOllama({
          baseURL: provider.baseUrl ?? undefined,
        })(model);
      case "ANTHROPIC":
        return createAnthropic({
          apiKey: provider.apiKey ?? undefined,
          baseURL: provider.baseUrl ?? undefined,
        })(model);
      case "OPENAI_LIKE":
        return createOpenAI({
          compatibility: "compatible",
          baseURL: provider.baseUrl ?? undefined,
          apiKey: provider.apiKey ?? undefined,
        })(model);
      case "MISTRAL":
        return createMistral({
          baseURL: provider.baseUrl ?? undefined,
          apiKey: provider.apiKey ?? undefined,
        })(model);
      case "DEEPSEEK":
        return createDeepSeek({
          baseURL: provider.baseUrl ?? undefined,
          apiKey: provider.apiKey ?? undefined,
        })(model);
      case "GOOGLE_GENERATIVE":
        return createGoogleGenerativeAI({
          apiKey: provider.apiKey ?? undefined,
          baseURL: provider.baseUrl ?? undefined,
        })(model);
    }
  }
}
