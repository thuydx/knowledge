import type { NextConfig } from "next";
import type { Configuration, Compilation } from 'webpack';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    quietDeps: true, // Suppress Sass warnings from node_modules
  },
  // Hide the deprecated warning of 3rd-party
  webpack(config: Configuration) {
    config.ignoreWarnings = [
      (warning: Error, _compilation: Compilation) =>
        typeof warning.message === 'string' &&
        warning.message.includes('has been deprecated as of'),
    ];
    return config;
  },
};

export default nextConfig;
