import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to `out/` for Cloudflare Pages (no Node server needed)
  output: "export",
};

export default nextConfig;
