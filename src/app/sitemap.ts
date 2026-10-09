import type { MetadataRoute } from "next";

import { canonicalUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: canonicalUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
