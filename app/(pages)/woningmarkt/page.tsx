import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  woningmarktPageSeo,
  woningmarktHeroData,
  woningmarktDataIntroData,
  woningmarktTrustLogosData,
  woningmarktRapportData,
  woningmarktFormData,
} from "@/lib/data/pages/woningmarkt";

import { PageHero } from "@/components/sections/page-hero";
import { WoningmarktDataIntro } from "@/components/sections/woningmarkt-data-intro";
import { WoningmarktTrustLogos } from "@/components/sections/woningmarkt-trust-logos";
import { WoningmarktRapport } from "@/components/sections/woningmarkt-rapport";
import { WoningmarktForm } from "@/components/sections/woningmarkt-form";

export function generateMetadata(): Metadata {
  return generatePageMetadata(woningmarktPageSeo);
}

export default function WoningmarktPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          woningmarktPageSeo.metaTitle,
          woningmarktPageSeo.metaDescription,
          `${siteConfig.url}/woningmarkt`,
        )}
      />

      <PageHero {...woningmarktHeroData} />
      <WoningmarktDataIntro {...woningmarktDataIntroData} />
      <WoningmarktTrustLogos {...woningmarktTrustLogosData} />
      <WoningmarktRapport {...woningmarktRapportData} />
      <WoningmarktForm {...woningmarktFormData} />
    </>
  );
}
