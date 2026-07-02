import { getSandbox, type Sandbox as SandboxObject } from "@cloudflare/sandbox";
import { Hono } from "hono";
import { env } from "cloudflare:workers";
import { noteTemplateRoutes } from "@/lib/note-templates/note-template.routes";

export { Sandbox } from "@cloudflare/sandbox";

const app = new Hono<{
  Bindings: { Sandbox: DurableObjectNamespace<SandboxObject> };
  Variables: { foo: string };
}>();

app.on(["POST", "GET"], "/api/auth/*", async (c) => {
  const { auth } = await import("@/lib/auth");
  return auth.handler(c.req.raw);
});

app.route("/api/note-templates", noteTemplateRoutes);

app.get("/sandbox/hello", async (c) => {
  const sandbox = getSandbox(env.Sandbox, "hello-world");
  const result = await sandbox.exec(
    'printf "Hello from Cloudflare Sandbox\\n"',
  );

  return c.json(result);
});

app.get(
  "/",
  (c, next) => {
    c.set("foo", "bar");
    return next();
  },
  (c) => {
    c.var.foo;
    return c.text("Hello World!");
  },
);

export default app;
