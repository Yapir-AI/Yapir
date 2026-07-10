import { Hono } from "hono";
import type { ApiContainer } from "@/lib/container/typed-container";

export const hono = () =>
  new Hono<{
    Bindings: Env;
    Variables: { container: ApiContainer };
  }>();
