import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  woningwaardePageSeo,
  woningwaardeHeroData,
  woningwaardeIntroData,
  woningwaardeCalculatorTextData,
  woningwaardeGegevensData,
  woningwaardeCalculatorFormData,
  woningwaardeDataSectionData,
  woningwaardeExacteData,
  woningwaardeHulpData,
  woningwaardeCtaCardsData,
} from "@/lib/data/pages/woningwaarde";

import { PageHero } from "@/components/sections/page-hero";
import { WoningwaardeIntro } from "@/components/sections/woningwaarde-intro";
import { WoningwaardeTextBlock } from "@/components/sections/woningwaarde-text-block";
import { WoningwaardeExacte } from "@/components/sections/woningwaarde-exacte";
import { WoningwaardeCalculator } from "@/components/sections/woningwaarde-calculator";
import { WoningwaardeCtaCards } from "@/components/sections/woningwaarde-cta-cards";

export function generateMetadata(): Metadata {
  return generatePageMetadata(woningwaardePageSeo);
}

export default function WoningwaardePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          woningwaardePageSeo.metaTitle,
          woningwaardePageSeo.metaDescription,
          `${siteConfig.url}/woningwaarde`,
        )}
      />

      <PageHero {...woningwaardeHeroData} />
      <WoningwaardeIntro {...woningwaardeIntroData} />
      <WoningwaardeTextBlock
        {...woningwaardeCalculatorTextData}
        bgVariant="stone"
      />
      <WoningwaardeTextBlock
        {...woningwaardeGegevensData}
        bgVariant="paper"
      />
      <WoningwaardeTextBlock
        {...woningwaardeDataSectionData}
        bgVariant="paper"
      />
      <WoningwaardeExacte
        heading={woningwaardeExacteData.heading}
        paragraphs={woningwaardeExacteData.paragraphs}
        bullets={woningwaardeExacteData.bullets || []}
        trailingParagraph={woningwaardeExacteData.trailingParagraph || ""}
      />
      <WoningwaardeTextBlock
        heading={woningwaardeHulpData.heading}
        paragraphs={woningwaardeHulpData.paragraphs}
        subHeading={woningwaardeHulpData.subHeading}
        bullets={woningwaardeHulpData.bullets}
        bgVariant="paper"
      />
      <WoningwaardeCtaCards {...woningwaardeCtaCardsData} />
    </>
  );
}
