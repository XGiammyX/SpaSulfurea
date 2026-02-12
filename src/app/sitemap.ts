import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    { url: base, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/sulfurea`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/wellness`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/hotel`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/territorio`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/prenota`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/contatti`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/offerte`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const treatmentPages = siteConfig.experiences
    .filter((e) => e.enabled)
    .map((e) => ({
      url: `${base}/wellness/trattamenti/${e.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...treatmentPages];
}
