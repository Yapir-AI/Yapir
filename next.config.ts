import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["awilix"],
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
