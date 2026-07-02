import { sValidator } from "@hono/standard-validator";
import { Hono } from "hono";
import { container } from "@/lib/container/typed-container";
import { noteTemplateCreateRequestSchema } from "./note-template-create.dto";
import { noteTemplateUpdateRequestSchema } from "./note-template-update.dto";

// TODO: apply the standard API error contract once it exists.
export const noteTemplateRoutes = new Hono()
  .get("/", async (c) => {
    const result = await container
      .resolve("noteTemplateListOperation")
      .execute();

    return c.json(result);
  })
  .post("/", sValidator("json", noteTemplateCreateRequestSchema), async (c) => {
    const result = await container
      .resolve("noteTemplateCreateOperation")
      .execute(c.req.valid("json"));

    return c.json(result, 201);
  })
  .get("/:id", async (c) => {
    const result = await container
      .resolve("noteTemplateGetOperation")
      .execute(c.req.param("id"));

    return c.json(result);
  })
  .patch(
    "/:id",
    sValidator("json", noteTemplateUpdateRequestSchema),
    async (c) => {
      const result = await container
        .resolve("noteTemplateUpdateOperation")
        .execute(c.req.param("id"), c.req.valid("json"));

      return c.json(result);
    },
  )
  .delete("/:id", async (c) => {
    await container
      .resolve("noteTemplateDeleteOperation")
      .execute(c.req.param("id"));

    return c.body(null, 204);
  });
