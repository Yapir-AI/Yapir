import { sql, defineRelationsPart } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "@/lib/db/auth-schema";

export const noteTemplateTable = pgTable("note_template", {
  id: uuid("id")
    .default(sql`uuidv7()`)
    .primaryKey(),
  title: text("title").notNull(),
  prompt: text("prompt").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  createdBy: text("created_by")
    .notNull()
    .references(() => user.id),
  updatedBy: text("updated_by")
    .notNull()
    .references(() => user.id),
});

export type NoteTemplateSelect = typeof noteTemplateTable.$inferSelect;

export const relations = defineRelationsPart({ noteTemplateTable });
