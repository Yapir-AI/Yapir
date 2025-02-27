import { z } from "zod";
import type { GitlabClientFactory } from "@/lib/git/connectors/gitlab/clientFactory";

export namespace GitlabRepositoryConnect {
  export class Operation {
    private readonly gitlabClientFactory: GitlabClientFactory;

    constructor(opts: { gitlabClientFactory: GitlabClientFactory }) {
      this.gitlabClientFactory = opts.gitlabClientFactory;
    }

    async execute({ connectorId, origin, repoId }: Schema) {
      const gitlab = await this.gitlabClientFactory.forConnectorId(connectorId);

      await gitlab.ProjectHooks.add(
        repoId,
        origin + `/api/gitlab/webhooks/${connectorId}`,
        {
          //@ts-expect-error not correctly typed
          name: "Yapir",
          pushEvents: false,
          mergeRequestsEvents: true,
        },
      );
    }
  }

  export const schema = z.object({
    connectorId: z.string().uuid(),
    repoId: z.number(),
    origin: z.string().url(),
  });

  export type Schema = z.infer<typeof schema>;
}
