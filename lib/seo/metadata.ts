import type { Metadata } from "next";
import type { SeoData } from "@/lib/types";
import { siteConfig } from "@/lib/data/site-config";

export function generatePageMetadata(seo: SeoData): Metadata {
  const url = seo.slug
    ? `${siteConfig.url}/${seo.slug}`
    : siteConfig.url;

  const isHome = !seo.slug;

  return {
    title: isHome ? { absolute: seo.metaTitle } : seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: "nl_NL",
      type: "website",
      ...(seo.ogImageUrl && {
        images: [{ url: seo.ogImageUrl, width: 1200, height: 630 }],
      }),
    },
  };
}
