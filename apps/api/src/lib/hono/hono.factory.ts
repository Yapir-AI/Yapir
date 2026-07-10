import { Hono } from "hono";
import type { Sandbox as SandboxObject } from "@cloudflare/sandbox";
import type { ApiContainer } from "@/lib/container/typed-container";

export const hono = () =>
  new Hono<{
    Bindings: { Sandbox: DurableObjectNamespace<SandboxObject> };
    Variables: { container: ApiContainer };
  }>();
