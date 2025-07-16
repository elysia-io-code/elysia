import type { NextConfig } from "next";

const repo = 'elysia'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig: NextConfig = {
  assetPrefix,
  basePath,
  output: 'export',
};

export default nextConfig;
