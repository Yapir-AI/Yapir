import { z } from "zod";
import type { GitlabClientFactory } from "@/lib/git/connectors/gitlab/clientFactory";
import { ProjectService } from "@/lib/project/service";

export namespace GitlabRepositoryConnect {
  export class Operation {
    private readonly gitlabClientFactory: GitlabClientFactory;
    private readonly projectService: ProjectService;

    constructor(opts: {
      gitlabClientFactory: GitlabClientFactory;
      projectService: ProjectService;
    }) {
      this.gitlabClientFactory = opts.gitlabClientFactory;
      this.projectService = opts.projectService;
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

      const project = await gitlab.Projects.show(repoId);

      await this.projectService.findOrCreate({
        include: {},
        create: {
          connector: { connect: { id: connectorId } },
          originId: project.id.toString(),
          url: project.web_url,
          name: project.name,
          fullName: project.path_with_namespace,
          providerType: "GITLAB",
        },
      });
    }
  }

  export const schema = z.object({
    connectorId: z.string().uuid(),
    repoId: z.number(),
    origin: z.string().url(),
  });

  export type Schema = z.infer<typeof schema>;
}
