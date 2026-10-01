import type { MetadataRoute } from "next";
import { profile } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.fullName} | ${profile.role}`,
    short_name: profile.name,
    description: profile.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#050a14",
    theme_color: "#050a14",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
