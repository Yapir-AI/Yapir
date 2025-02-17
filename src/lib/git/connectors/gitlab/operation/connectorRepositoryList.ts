import type { GitlabClientFactory } from "@/lib/git/connectors/gitlab/clientFactory";

export namespace GitlabConnectorRepositoryList {
  export class Operation {
    private readonly gitlabClientFactory: GitlabClientFactory;

    constructor(opts: { gitlabClientFactory: GitlabClientFactory }) {
      this.gitlabClientFactory = opts.gitlabClientFactory;
    }

    async execute(connectorId: string) {
      const gitlab = this.gitlabClientFactory.forConnectorId(connectorId);
      const projects = await gitlab.Projects.all({
        owned: true,
      });

      return projects.map(({ id, name, web_url }) => ({ id, name, web_url }));
    }
  }
}
