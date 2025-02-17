import { provider } from "@/lib/db/schema";
import { db, type Db } from "@/lib/db";
import { eq } from "drizzle-orm/sql/expressions/conditions";
import { createOpenAI } from "@ai-sdk/openai";
import { createOllama } from "ollama-ai-provider";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createMistral } from "@ai-sdk/mistral";

export class ModelService {
  private readonly db: Db;

  constructor(opts: { db: Db }) {
    this.db = opts.db;
  }

  async getActiveProviderModel() {
    const activeProvider = await this.db.query.provider.findFirst({
      where: eq(provider.enabled, true),
    });

    if (!activeProvider) throw Error("No Provider found");

    return {
      model: this.toModel(activeProvider),
      provider: activeProvider,
    };
  }

  async getModelByProviderId(providerId: string) {
    const providerEntity = await db.query.provider.findFirst({
      where: eq(provider.id, providerId),
    });

    if (!providerEntity) throw Error("No Provider found");

    return this.toModel(providerEntity);
  }

  private toModel(providerEntity: typeof provider.$inferSelect) {
    const model = providerEntity.model;

    switch (providerEntity.type) {
      case "openai":
        return createOpenAI({
          compatibility: "strict",
          apiKey: providerEntity.apiKey ?? undefined,
          baseURL: providerEntity.baseUrl ?? undefined,
        })(model);
      case "ollama":
        return createOllama({
          baseURL: providerEntity.baseUrl ?? undefined,
        })(model);
      case "anthropic":
        return createAnthropic({
          apiKey: providerEntity.apiKey ?? undefined,
          baseURL: providerEntity.baseUrl ?? undefined,
        })(model);
      case "openai_like":
        return createOpenAI({
          compatibility: "compatible",
          baseURL: providerEntity.baseUrl ?? undefined,
          apiKey: providerEntity.apiKey ?? undefined,
        })(model);
      case "mistral":
        return createMistral({
          baseURL: providerEntity.baseUrl ?? undefined,
          apiKey: providerEntity.apiKey ?? undefined,
        })(model);
    }
  }
}
