import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma",
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
