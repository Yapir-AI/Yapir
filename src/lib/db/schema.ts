import { uuid } from "drizzle-orm/pg-core/columns/uuid";
import { varchar } from "drizzle-orm/pg-core/columns/varchar";
import { bigint } from "drizzle-orm/pg-core/columns/bigint";
import { timestamp } from "drizzle-orm/pg-core/columns/timestamp";
import { text } from "drizzle-orm/pg-core/columns/text";
import { jsonb } from "drizzle-orm/pg-core/columns/jsonb";

import { type CoreMessage } from "ai";
import { ReviewStatus } from "@/lib/review/status";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { boolean } from "drizzle-orm/pg-core/columns/boolean";
import { pgTable } from "drizzle-orm/pg-core/table";
import { pgEnum } from "drizzle-orm/pg-core/columns/enum";
import { z } from "zod";
import { ProviderType } from "@/lib/provider/model/type";
import { relations } from "drizzle-orm/relations";

export const providerTypeEnum = pgEnum("provider_type", ProviderType);

export const provider = pgTable("providers", {
  id: uuid().primaryKey().defaultRandom(),
  type: providerTypeEnum().notNull(),
  enabled: boolean().notNull().default(false),
  baseUrl: varchar(),
  apiKey: varchar(),
  model: varchar().notNull(),
});

export type ProviderEntity = typeof provider.$inferSelect;

export const githubConnector = pgTable("github_connector", {
  id: bigint({
    mode: "number",
  }).primaryKey(),
  slug: varchar().notNull(),
  pem: varchar().notNull(),
  webhook_secret: varchar().notNull(),
  creation_date: timestamp().notNull().defaultNow(),
});

export type GitHubConnectorEntity = typeof githubConnector.$inferSelect;

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export const reviewStatusEnum = pgEnum("review_status", ReviewStatus);

export const review = pgTable("review", {
  id: uuid().primaryKey().defaultRandom(),
  at: timestamp().notNull().defaultNow(),
  messages: jsonb().$type<CoreMessage[]>().notNull(),
  status: reviewStatusEnum().notNull().default("PENDING"),
  repo_name: text().notNull(),
  repo_url: text().notNull(),
  pull_number: bigint({ mode: "number" }).notNull(),
  pull_url: text().notNull(),
  pull_name: text().notNull(),
  providerId: uuid()
    .references(() => provider.id)
    .notNull(),
});

export type ReviewEntity = typeof review.$inferSelect;

export const gitlabConnector = pgTable("gitlab_connector", {
  id: uuid().primaryKey().defaultRandom(),
  url: text().notNull(),
  applicationId: text().notNull(),
  applicationSecret: text().notNull(),
  groupName: text(),
  displayName: text().notNull(),
  creation_date: timestamp().notNull().defaultNow(),
  accessToken: text(),
  refreshToken: text(),
  expiresAt: timestamp(),
  redirectUri: text().notNull(),
});

export type GitlabConnectorEntity = typeof gitlabConnector.$inferSelect;
export const gitlabConnectorCreateSchema = createInsertSchema(gitlabConnector, {
  url: z.string().describe("GitLab URL").default("https://gitlab.com"),
});

export const instructions = pgTable("instructions", {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  content: text().notNull().default(""),
});

export type Instructions = typeof instructions.$inferSelect;
export const instructionUpdateSchema = createUpdateSchema(instructions);

export const reviewer = pgTable("reviewer", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  systemPrompt: text(),
  providerId: uuid()
    .notNull()
    .references(() => provider.id)
    .notNull(),
});

export const reviewerRelations = relations(reviewer, ({ one }) => ({
  provider: one(provider, {
    fields: [reviewer.providerId],
    references: [provider.id],
  }),
}));
