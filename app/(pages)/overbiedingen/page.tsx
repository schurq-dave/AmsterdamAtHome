import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  overbiedingenSeo,
  overbiedingenHeroData,
  overbiedingenIntroData,
  overbiedingenContentData,
} from "@/lib/data/pages/overbiedingen";

import { PageHero } from "@/components/sections/page-hero";
import { WoningwaardeTextBlock } from "@/components/sections/woningwaarde-text-block";

export const metadata: Metadata = generatePageMetadata(overbiedingenSeo);

export default function OverbiedingenPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          overbiedingenSeo.metaTitle,
          overbiedingenSeo.metaDescription,
          `${siteConfig.url}/${overbiedingenSeo.slug}`,
        )}
      />

      <PageHero {...overbiedingenHeroData} />

      <WoningwaardeTextBlock {...overbiedingenIntroData} bgVariant="paper" />
      
      <WoningwaardeTextBlock {...overbiedingenContentData} bgVariant="stone" />
      
      {/* Je kunt hier later meer secties toevoegen */}
    </>
  );
}
