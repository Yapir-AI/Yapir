import { type } from "arktype";

const installationIdSchema = type("string")
  .pipe(Number)
  .to("number.integer > 0");

export const githubConnectorInstallationCallbackRequestSchema = type({
  code: "string > 0",
  state: "string > 0",
  installation_id: installationIdSchema,
  "setup_action?": "string",
});

export type GithubConnectorInstallationCallbackRequestDto =
  typeof githubConnectorInstallationCallbackRequestSchema.infer;
