export const ErrorCodes = {
  FORBIDDEN: "Forbidden",
  NOTE_TEMPLATE_NOT_FOUND: "Note template not found",
} as const satisfies Record<string, string>;

export type ErrorCode = keyof typeof ErrorCodes;
