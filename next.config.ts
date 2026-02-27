import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed static export mode to enable API routes and SSR
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
