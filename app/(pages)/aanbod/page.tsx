import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  aanbodPageSeo,
  aanbodHeroData,
  aanbodProperties,
  buurtFilters,
  prijsFilters,
} from "@/lib/data/pages/aanbod";

import { PageHero } from "@/components/sections/page-hero";
import { AanbodPropertyList } from "@/components/sections/aanbod-property-list";

export function generateMetadata(): Metadata {
  return generatePageMetadata(aanbodPageSeo);
}

export default function AanbodPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          aanbodPageSeo.metaTitle,
          aanbodPageSeo.metaDescription,
          `${siteConfig.url}/aanbod`,
        )}
      />

      <PageHero {...aanbodHeroData} />

      <AanbodPropertyList
        properties={aanbodProperties}
        buurtFilters={buurtFilters}
        prijsFilters={prijsFilters}
      />
    </>
  );
}
