import { type } from "arktype";

const internalRedirect = type("string").pipe((value) =>
  value.startsWith("/") && !value.startsWith("//") ? value : undefined,
);

export const authSearchSchema = type({ "redirect?": internalRedirect });
