import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  miljoenenmarktPageSeo,
  miljoenenmarktHeroData,
  miljoenenmarktDataIntroData,
  miljoenenmarktRapportData,
  miljoenenmarktRatingData,
  miljoenenmarktPersberichtData,
  miljoenenmarktFormData,
} from "@/lib/data/pages/miljoenenmarkt";

import { MiljoenenmarktHero } from "@/components/sections/miljoenenmarkt-hero";
import { MiljoenenmarktDataIntro } from "@/components/sections/miljoenenmarkt-data-intro";
import { MiljoenenmarktRapport } from "@/components/sections/miljoenenmarkt-rapport";
import { MiljoenenmarktRating } from "@/components/sections/miljoenenmarkt-rating";
import { MiljoenenmarktPersbericht } from "@/components/sections/miljoenenmarkt-persbericht";
import { MiljoenenmarktForm } from "@/components/sections/miljoenenmarkt-form";

export function generateMetadata(): Metadata {
  return generatePageMetadata(miljoenenmarktPageSeo);
}

export default function MiljoenenmarktPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          miljoenenmarktPageSeo.metaTitle,
          miljoenenmarktPageSeo.metaDescription,
          `${siteConfig.url}/miljoenenmarkt`,
        )}
      />

      <MiljoenenmarktHero {...miljoenenmarktHeroData} />
      <MiljoenenmarktDataIntro {...miljoenenmarktDataIntroData} />
      <MiljoenenmarktRapport {...miljoenenmarktRapportData} />
      <MiljoenenmarktRating {...miljoenenmarktRatingData} />
      <MiljoenenmarktPersbericht {...miljoenenmarktPersberichtData} />
      <MiljoenenmarktForm {...miljoenenmarktFormData} />
    </>
  );
}
