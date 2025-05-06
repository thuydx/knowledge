import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    quietDeps: true, // 👈 Suppress Sass warnings from node_modules
  },
};

export default nextConfig;
