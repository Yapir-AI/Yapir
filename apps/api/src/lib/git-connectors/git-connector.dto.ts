import type { GitConnectorSelect } from "#api/lib/db/schema";

export function toGitConnectorResponseDto(gitConnector: GitConnectorSelect) {
  return {
    id: gitConnector.id,
    type: gitConnector.configuration.type,
    displayName: gitConnector.configuration.accountLogin,
    createdAt: gitConnector.createdAt.toISOString(),
    updatedAt: gitConnector.updatedAt.toISOString(),
  };
}

export type GitConnectorResponseDto = ReturnType<
  typeof toGitConnectorResponseDto
>;
