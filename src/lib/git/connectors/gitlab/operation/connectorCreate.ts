import { z } from "zod";
import { PrismaClient } from "@/generated/prisma/client";
import { gitlabConnectorConfigSchema } from "@/lib/git/connectors/gitlab/connectorService";

export namespace GitlabConnectorCreate {
  export class Operation {
    private readonly prisma: PrismaClient;

    constructor(opts: { prisma: PrismaClient }) {
      this.prisma = opts.prisma;
    }

    async execute(request: Schema) {
      await this.prisma.gitConnector.create({
        data: {
          type: "GITLAB",
          config: JSON.stringify(request),
        },
      });
    }
  }

  export const schema = gitlabConnectorConfigSchema
    .pick({
      applicationId: true,
      applicationSecret: true,
      displayName: true,
      redirectUri: true,
      groupName: true,
    })
    .merge(
      z.object({
        url: z.string().describe("GitLab URL").default("https://gitlab.com"),
      }),
    );

  export type Schema = z.infer<typeof schema>;
}
