import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["/", "/mobile-dog-gym/", "/dog-training/", "/pricing/", "/our-pack/", "/about/", "/faq/", "/privacy/"].map((p) => ({
    url: `${site.url}${p}`, lastModified: now, changeFrequency: p === "/" ? "weekly" : "monthly", priority: p === "/" ? 1 : 0.8,
  }));
}
