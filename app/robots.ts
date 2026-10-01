import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  // Vercel preview deployments stay out of search results; production is open to everyone, AI crawlers included.
  if (process.env.VERCEL_ENV === "preview") return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL };
}
