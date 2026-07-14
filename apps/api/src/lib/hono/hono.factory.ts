import { Hono } from "hono";
import type { ApiContainer } from "#api/lib/container";
import { Auth } from "#api/lib/auth/auth.factory";
import { Db } from "#api/lib/db";

export type HonoEnv = {
  Bindings: Env;
  Variables: { container: ApiContainer; auth: Auth; db: Db };
};

export const hono = () => new Hono<HonoEnv>();
