import { sValidator } from "@hono/standard-validator";
import { noteTemplateCreateRequestSchema } from "./note-template-create.dto";
import { noteTemplateUpdateRequestSchema } from "./note-template-update.dto";
import { hono } from "@/lib/hono/hono.factory";

export const noteTemplateRoutes = hono()
  .get("/", async (c) => {
    const result = await c.var.container.noteTemplateListOperation.execute();

    return c.json(result);
  })
  .post("/", sValidator("json", noteTemplateCreateRequestSchema), async (c) => {
    const result = await c.var.container.noteTemplateCreateOperation.execute(
      c.req.valid("json"),
    );

    return c.json(result, 201);
  })
  .get("/:id", async (c) => {
    const result = await c.var.container.noteTemplateGetOperation.execute(
      c.req.param("id"),
    );

    return c.json(result);
  })
  .patch(
    "/:id",
    sValidator("json", noteTemplateUpdateRequestSchema),
    async (c) => {
      const result = await c.var.container.noteTemplateUpdateOperation.execute(
        c.req.param("id"),
        c.req.valid("json"),
      );

      return c.json(result);
    },
  )
  .delete("/:id", async (c) => {
    await c.var.container.noteTemplateDeleteOperation.execute(
      c.req.param("id"),
    );

    return c.body(null, 204);
  });
