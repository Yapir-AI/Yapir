import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeWindow() {
  return typeof window !== "undefined" ? window : null;
}

export async function tryStrategies<T>(
  ...strategies: (() => Promise<T | undefined> | T | undefined)[]
): Promise<T> {
  for (const strategy of strategies) {
    try {
      const result = await strategy();
      if (result !== undefined && result !== null) {
        return result;
      }
    } catch (error) {
      console.warn(JSON.stringify(error));
    }
  }
  throw new Error("All strategies failed");
}
