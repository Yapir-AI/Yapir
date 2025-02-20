import { z } from "zod";
import { PrismaClient } from "@prisma/client";

export namespace GitlabConnectorCreate {
  export class Operation {
    private readonly prisma: PrismaClient;

    constructor(opts: { prisma: PrismaClient }) {
      this.prisma = opts.prisma;
    }

    async execute(request: Schema) {
      await this.prisma.gitlabConnector.create({ data: request });
    }
  }

  export const schema = z.object({
    url: z.string().describe("GitLab URL").default("https://gitlab.com"),
    applicationId: z.string(),
    applicationSecret: z.string(),
    displayName: z.string(),
    groupName: z.string().optional(),
    redirectUri: z.string(),
  });

  export type Schema = z.infer<typeof schema>;
}
