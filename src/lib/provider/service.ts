import { type Db, type Transaction } from "@/lib/db";
import { providerConfigs } from "@/lib/provider/model/configs";
import { provider } from "@/lib/db/schema";

export class ProviderService {
  private readonly db: Db;

  constructor(opts: { db: Db }) {
    this.db = opts.db;
  }

  async listProviders() {
    const providers = await this.db.query.provider.findMany();

    return providers
      .reverse()
      .map(({ id, baseUrl, type, model, enabled }) => ({
        id,
        baseUrl,
        type,
        model,
        enabled,
      }))
      .map((provider) => ({
        ...provider,
        ...providerConfigs[provider.type],
      }));
  }

  async disableAllProviders(db: Transaction) {
    return db.update(provider).set({ enabled: false });
  }
}

export type ProviderListElement = Awaited<
  ReturnType<typeof ProviderService.prototype.listProviders>
>[number];
