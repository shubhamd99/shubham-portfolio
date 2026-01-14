import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shubham-portfolio",
  assetPrefix: "/shubham-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
