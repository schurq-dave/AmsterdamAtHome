import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  datagedrevenSeo,
  datagedrevenHeroData,
  datagedrevenIntroData,
  datagedrevenDashboardData,
  datagedrevenBuurtData,
  datagedrevenSegmentData,
  datagedrevenVraagprijsData,
  datagedrevenIndexData,
  datagedrevenCalculatorData,
  datagedrevenPositioneringData,
  datagedrevenConclusieData,
} from "@/lib/data/pages/datagedreven";

import { PageHero } from "@/components/sections/page-hero";
import { WoningwaardeTextBlock } from "@/components/sections/woningwaarde-text-block";

export const metadata: Metadata = generatePageMetadata(datagedrevenSeo);

export default function DatagedrevenMakelaardijPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          datagedrevenSeo.metaTitle,
          datagedrevenSeo.metaDescription,
          `${siteConfig.url}/${datagedrevenSeo.slug}`,
        )}
      />

      <PageHero {...datagedrevenHeroData} />

      <WoningwaardeTextBlock {...datagedrevenIntroData} bgVariant="paper" />
      
      <WoningwaardeTextBlock {...datagedrevenDashboardData} bgVariant="stone" />
      
      <WoningwaardeTextBlock {...datagedrevenBuurtData} bgVariant="paper" />
      
      <WoningwaardeTextBlock {...datagedrevenSegmentData} bgVariant="stone" />
      
      <WoningwaardeTextBlock {...datagedrevenVraagprijsData} bgVariant="paper" />
      
      <WoningwaardeTextBlock {...datagedrevenIndexData} bgVariant="stone" />
      
      <WoningwaardeTextBlock {...datagedrevenCalculatorData} bgVariant="paper" />
      
      <WoningwaardeTextBlock {...datagedrevenPositioneringData} bgVariant="stone" />
      
      <WoningwaardeTextBlock {...datagedrevenConclusieData} bgVariant="paper" />
    </>
  );
}
