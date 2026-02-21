import { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";

const BASE_URL = "https://attorneyauthority.com";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFreq: "weekly" as const },
  { path: "/services/law-firm-link-building", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/services/legal-content-writing", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/services/law-firm-digital-pr", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/services/law-firm-seo-tools", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/services/legal-design-video", priority: 0.8, changeFreq: "weekly" as const },
  { path: "/pricing", priority: 0.9, changeFreq: "weekly" as const },
  { path: "/products", priority: 0.8, changeFreq: "weekly" as const },
  { path: "/practice-areas/personal-injury", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/practice-areas/criminal-defense", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/practice-areas/family-law", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/practice-areas/estate-planning", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/practice-areas/business-law", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/practice-areas/immigration-law", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/practice-areas/workers-compensation", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/practice-areas/dui-defense", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/guides/law-firm-link-building-guide", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/guides/legal-content-strategy", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/guides/law-firm-seo-checklist", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/guides/domain-rating-guide-lawyers", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/comparisons/blogger-outreach-vs-niche-edits", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/comparisons/law-firm-seo-vs-ppc", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/blog", priority: 0.6, changeFreq: "weekly" as const },
  { path: "/faq", priority: 0.6, changeFreq: "monthly" as const },
  { path: "/about", priority: 0.5, changeFreq: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFreq: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productSlugs = getAllProductSlugs();

  const productRoutes = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const staticEntries = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));

  return [...staticEntries, ...productRoutes];
}
