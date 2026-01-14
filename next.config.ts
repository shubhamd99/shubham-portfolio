import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/shubham-portfolio",
  assetPrefix: "/shubham-portfolio/",
};

export default nextConfig;
