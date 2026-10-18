import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
