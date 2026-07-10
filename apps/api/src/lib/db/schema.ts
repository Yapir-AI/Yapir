import { sql, defineRelationsPart } from "drizzle-orm";
import {
  jsonb,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";
import { user } from "@/lib/db/auth-schema";
import type { GithubConnectorConfiguration } from "@/lib/git-connectors/github/github-connector.configuration";

export const gitConnectorTable = pgTable(
  "git_connector",
  {
    id: uuid("id")
      .default(sql`uuidv7()`)
      .primaryKey(),
    configuration: jsonb("configuration")
      .$type<GithubConnectorConfiguration>()
      .notNull(),
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
  },
  (table) => [
    uniqueIndex("git_connector_github_installation_id_unique")
      .on(sql`((${table.configuration} ->> 'installationId'))`)
      .where(sql`${table.configuration} ->> 'type' = 'GITHUB'`),
  ],
);

export type GitConnectorSelect = typeof gitConnectorTable.$inferSelect;

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

export const relations = defineRelationsPart({
  gitConnectorTable,
  noteTemplateTable,
});
