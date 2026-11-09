import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH="/portfolio" when deploying to GitHub Pages
// (https://<user>.github.io/portfolio). Leave empty for Vercel / custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
