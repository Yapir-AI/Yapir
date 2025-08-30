import type { NextConfig } from "next";

export default {
  output: "standalone",
  serverExternalPackages: ["awilix"],
  experimental: {
    authInterrupts: true,
  },
} satisfies NextConfig;
