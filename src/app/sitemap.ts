import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { projects } from "@/content/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/profil", "/projets", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
      });
    }
    for (const project of projects) {
      entries.push({
        url: `${BASE_URL}/${locale}/projets/${project.slug}`,
        lastModified: new Date(),
      });
    }
  }

  return entries;
}
