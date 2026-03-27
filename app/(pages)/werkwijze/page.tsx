import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  datagedrevenSeo,
  datagedrevenHeroData,
  datagedrevenIntroData,
  datagedrevenPointsData,
} from "@/lib/data/pages/datagedreven";

import { PageHero } from "@/components/sections/page-hero";
import { WoningwaardeTextBlock } from "@/components/sections/woningwaarde-text-block";
import { DatagedrevenPoints } from "@/components/sections/datagedreven-points";

export const metadata: Metadata = generatePageMetadata(datagedrevenSeo);

export default function WerkwijzePage() {
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
      
      <DatagedrevenPoints {...datagedrevenPointsData} />
    </>
  );
}
