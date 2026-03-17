import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  stilleVerkoopPageSeo,
  stilleVerkoopHeroData,
  stilleVerkoopWatIsData,
  stilleVerkoopWaaromData,
  stilleVerkoopExclusiefData,
  stilleVerkoopVoordelenData,
  stilleVerkoopNadelenData,
  stilleVerkoopAanpakData,
  stilleVerkoopFallbackData,
  stilleVerkoopFormData,
  stilleVerkoopContactData,
} from "@/lib/data/pages/stille-verkoop";

import { PageHero } from "@/components/sections/page-hero";
import { StilleVerkoopTextBlock } from "@/components/sections/stille-verkoop-text-block";
import { StilleVerkoopListSection } from "@/components/sections/stille-verkoop-list-section";
import { StilleVerkoopAanpak } from "@/components/sections/stille-verkoop-aanpak";
import { StilleVerkoopForm } from "@/components/sections/stille-verkoop-form";

export function generateMetadata(): Metadata {
  return generatePageMetadata(stilleVerkoopPageSeo);
}

export default function StilleVerkoopPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          stilleVerkoopPageSeo.metaTitle,
          stilleVerkoopPageSeo.metaDescription,
          `${siteConfig.url}/stille-verkoop`,
        )}
      />

      <PageHero {...stilleVerkoopHeroData} />

      <StilleVerkoopTextBlock
        heading={stilleVerkoopWatIsData.heading}
        paragraphs={stilleVerkoopWatIsData.paragraphs}
        image={stilleVerkoopWatIsData.image}
        imagePosition={stilleVerkoopWatIsData.imagePosition}
        bgVariant="paper"
      />

      <StilleVerkoopTextBlock
        heading={stilleVerkoopWaaromData.heading}
        paragraphs={stilleVerkoopWaaromData.paragraphs}
        image={stilleVerkoopWaaromData.image}
        imagePosition={stilleVerkoopWaaromData.imagePosition}
        bgVariant="stone"
        borderTop
      />

      <StilleVerkoopTextBlock
        heading={stilleVerkoopExclusiefData.heading}
        paragraphs={stilleVerkoopExclusiefData.paragraphs}
        image={stilleVerkoopExclusiefData.image}
        imagePosition={stilleVerkoopExclusiefData.imagePosition}
        bgVariant="paper"
        borderTop
      />

      <StilleVerkoopListSection
        heading={stilleVerkoopVoordelenData.heading}
        items={stilleVerkoopVoordelenData.items}
        variant="voordeel"
      />

      <StilleVerkoopListSection
        heading={stilleVerkoopNadelenData.heading}
        items={stilleVerkoopNadelenData.items}
        variant="nadeel"
      />

      <StilleVerkoopAanpak
        heading={stilleVerkoopAanpakData.heading}
        intro={stilleVerkoopAanpakData.intro}
        steps={stilleVerkoopAanpakData.steps}
      />

      <StilleVerkoopTextBlock
        paragraphs={[stilleVerkoopFallbackData.text]}
        bgVariant="stone"
        borderTop
        isCallout
      />

      <StilleVerkoopForm
        heading={stilleVerkoopFormData.heading}
        subtitle={stilleVerkoopFormData.subtitle}
        contact={stilleVerkoopContactData}
      />
    </>
  );
}
