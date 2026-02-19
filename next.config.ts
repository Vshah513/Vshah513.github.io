import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "outfittr-platform.vercel.app",
      },
    ],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
