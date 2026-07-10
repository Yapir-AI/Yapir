export const ErrorCodes = {
  FORBIDDEN: "Forbidden",
  UNAUTHORIZED: "Unauthorized",
  NOTE_TEMPLATE_NOT_FOUND: "Note template could not be found",
} as const satisfies Record<string, string>;

export type ErrorCode = keyof typeof ErrorCodes;
