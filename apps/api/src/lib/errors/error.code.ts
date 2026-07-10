export const ErrorCodes = {
  FORBIDDEN: "Forbidden",
  GITHUB_INSTALLATION_NOT_ACCESSIBLE:
    "GitHub installation is not accessible to this user",
  INVALID_GITHUB_INSTALLATION_STATE: "GitHub installation state is invalid",
  INVALID_STATE: "State is invalid",
  UNAUTHORIZED: "Unauthorized",
  NOTE_TEMPLATE_NOT_FOUND: "Note template could not be found",
} as const satisfies Record<string, string>;

export type ErrorCode = keyof typeof ErrorCodes;
