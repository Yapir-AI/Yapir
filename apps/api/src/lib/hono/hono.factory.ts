import { Hono } from "hono";
import type { ApiContainer } from "#api/lib/container";

export const hono = () =>
  new Hono<{
    Bindings: Env;
    Variables: { container: ApiContainer };
  }>();
