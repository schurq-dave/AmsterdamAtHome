import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  vacaturePageSeo,
  vacatureHeroData,
  vacatureContentData,
  vacatureContactData,
} from "@/lib/data/pages/vacature";

import { PageHero } from "@/components/sections/page-hero";
import { VacatureContent } from "@/components/sections/vacature-content";
import { VacatureApply } from "@/components/sections/vacature-apply";

export function generateMetadata(): Metadata {
  return generatePageMetadata(vacaturePageSeo);
}

export default function VacaturePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          vacaturePageSeo.metaTitle,
          vacaturePageSeo.metaDescription,
          `${siteConfig.url}/vacature-office-manager`,
        )}
      />

      <PageHero {...vacatureHeroData} />
      <VacatureContent {...vacatureContentData} />
      <VacatureApply contact={vacatureContactData} />
    </>
  );
}
