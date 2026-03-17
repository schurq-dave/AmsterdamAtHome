import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  aboutPageSeo,
  aboutHeroData,
  aboutIntroData,
  aboutDifferencesData,
  aboutTeamData,
} from "@/lib/data/pages/about";

import { PageHero } from "@/components/sections/page-hero";
import { AboutIntro } from "@/components/sections/about-intro";
import { AboutDifferences } from "@/components/sections/about-differences";
import { AboutTeam } from "@/components/sections/about-team";

export function generateMetadata(): Metadata {
  return generatePageMetadata(aboutPageSeo);
}

export default function OverOnsPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          aboutPageSeo.metaTitle,
          aboutPageSeo.metaDescription,
          `${siteConfig.url}/over-ons`,
        )}
      />

      <PageHero {...aboutHeroData} />
      <AboutIntro {...aboutIntroData} />
      <AboutDifferences {...aboutDifferencesData} />
      <AboutTeam {...aboutTeamData} />
    </>
  );
}
