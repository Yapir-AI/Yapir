import { getSandbox } from "@cloudflare/sandbox";
import { env } from "cloudflare:workers";
import { noteTemplateRoutes } from "@/lib/note-templates/note-template.routes";
import { authMiddleware } from "@/lib/auth/auth.middleware";
import { hono } from "@/lib/hono/hono.factory";

export { Sandbox } from "@cloudflare/sandbox";

const app = hono();

app.on(["POST", "GET"], "/api/auth/*", async (c) => {
  const { auth } = await import("@/lib/auth");
  return auth.handler(c.req.raw);
});

app.use(authMiddleware);

app.route("/api/note-templates", noteTemplateRoutes);

app.get("/sandbox/hello", async (c) => {
  const sandbox = getSandbox(env.Sandbox, "hello-world");
  const result = await sandbox.exec(
    'printf "Hello from Cloudflare Sandbox\\n"',
  );

  return c.json(result);
});

export default app;
