import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./src/lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    //@ts-expect-error no node types
    url: process.env.DATABASE_URL!,
  },
});
