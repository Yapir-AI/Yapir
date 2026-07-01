import { Hono } from "hono";
import { auth } from "@/lib/auth";

const app = new Hono<{ Variables: { foo: string } }>();

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));
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
