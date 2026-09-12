import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://prostavive360.com",
      lastModified: "2026-09-13",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
