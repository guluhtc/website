import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Allow all image formats from local public folder
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
  },
};

export default nextConfig;
