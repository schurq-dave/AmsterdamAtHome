import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  verkoopLaagPageSeo,
  verkoopLaagHeroData,
  verkoopLaagKrapteData,
  verkoopLaagVerschillenData,
  verkoopLaagStatsData,
  verkoopLaagCtaCardsData,
  verkoopLaagSoldData,
  verkoopLaagFormData,
  verkoopLaagContactData,
} from "@/lib/data/pages/verkoop-laag";

import { PageHero } from "@/components/sections/page-hero";
import { VerkoopLaagKrapte } from "@/components/sections/verkoop-laag-krapte";
import { VerkoopLaag5Verschillen } from "@/components/sections/verkoop-laag-5-verschillen";
import { AankoopStats } from "@/components/sections/aankoop-stats";
import { VerkoopLaagCtaCards } from "@/components/sections/verkoop-laag-cta-cards";
import { VerkoopRecentSold } from "@/components/sections/verkoop-recent-sold";
import { VerkoopLaagForm } from "@/components/sections/verkoop-laag-form";

export function generateMetadata(): Metadata {
  return generatePageMetadata(verkoopLaagPageSeo);
}

export default function VerkoopLaagPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          verkoopLaagPageSeo.metaTitle,
          verkoopLaagPageSeo.metaDescription,
          `${siteConfig.url}/verkoop-laag`,
        )}
      />

      <PageHero {...verkoopLaagHeroData} />
      <VerkoopLaagKrapte {...verkoopLaagKrapteData} />
      <VerkoopLaag5Verschillen {...verkoopLaagVerschillenData} />
      <AankoopStats {...verkoopLaagStatsData} />
      <VerkoopLaagCtaCards {...verkoopLaagCtaCardsData} />
      <VerkoopRecentSold {...verkoopLaagSoldData} />
      <VerkoopLaagForm
        heading={verkoopLaagFormData.heading}
        contact={verkoopLaagContactData}
      />
    </>
  );
}
