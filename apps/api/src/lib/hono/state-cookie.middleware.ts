import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { createMiddleware } from "hono/factory";
import type { Context } from "hono";
import { badRequest } from "#api/lib/errors/error.factory";

async function timingSafeEqualStrings(provided: string, expected?: string) {
  if (!expected) return false;

  const encoder = new TextEncoder();
  const [providedHash, expectedHash] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(provided)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected)),
  ]);

  return (
    crypto.subtle as SubtleCrypto & {
      timingSafeEqual(a: ArrayBuffer, b: ArrayBuffer): boolean;
    }
  ).timingSafeEqual(providedHash, expectedHash);
}

export function createStateCookie(name: string, path: string) {
  const createStateMiddleware = createMiddleware(async (c, next) => {
    const state = crypto.randomUUID();

    setCookie(c, name, state, {
      httpOnly: true,
      maxAge: 600,
      path,
      sameSite: "Lax",
      secure: new URL(c.req.url).protocol === "https:",
    });

    c.set(name as never, state);

    await next();
  });

  const verifyStateMiddleware = (state: string) =>
    createMiddleware(async (c, next) => {
      const expectedState = getCookie(c, name);

      deleteCookie(c, name, { path });

      if (!(await timingSafeEqualStrings(state, expectedState))) {
        throw badRequest("INVALID_STATE");
      }

      await next();
    });

  const getState = (c: Context) => c.get(name as never) as string;

  return { createStateMiddleware, verifyStateMiddleware, getState };
}
