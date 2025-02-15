import { z } from "zod";

export function validateUrlParams<T>(
  params: URLSearchParams,
  schema: z.ZodSchema<T>,
) {
  // Convert URLSearchParams to a plain object
  const paramsObject: Record<string, string | string[]> = {};

  for (const [key, value] of params.entries()) {
    // Handle multiple values for the same key
    if (key in paramsObject) {
      if (Array.isArray(paramsObject[key])) {
        (paramsObject[key] as string[]).push(value);
      } else {
        paramsObject[key] = [paramsObject[key] as string, value];
      }
    } else {
      paramsObject[key] = value;
    }
  }

  // Parse and validate the object using the provided schema
  return schema.parse(paramsObject);
}
