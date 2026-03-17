import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  klantenPageSeo,
  klantenHeroData,
  klantenRatingData,
  testimonials,
} from "@/lib/data/pages/klanten";

import { KlantenHero } from "@/components/sections/klanten-hero";
import { KlantenReviews } from "@/components/sections/klanten-reviews";

export function generateMetadata(): Metadata {
  return generatePageMetadata(klantenPageSeo);
}

export default function KlantenVertellenPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          klantenPageSeo.metaTitle,
          klantenPageSeo.metaDescription,
          `${siteConfig.url}/klanten-vertellen`,
        )}
      />

      <KlantenHero {...klantenHeroData} />
      <KlantenReviews {...klantenRatingData} testimonials={testimonials} />
    </>
  );
}
