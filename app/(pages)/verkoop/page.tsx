import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  verkoopPageSeo,
  verkoopHeroData,
  verkoopIntroData,
  verkoopProactiefData,
  verkoopOnlineStrategieData,
  verkoopRecentSoldData,
  verkoop5StappenData,
  verkoopTeamData,
  verkoopReferentiesData,
  verkoopApplyData,
  verkoopContactData,
} from "@/lib/data/pages/verkoop";

import { PageHero } from "@/components/sections/page-hero";
import { VerkoopIntro } from "@/components/sections/verkoop-intro";
import { VerkoopProactief } from "@/components/sections/verkoop-proactief";
import { VerkoopOnlineStrategie } from "@/components/sections/verkoop-online-strategie";
import { VerkoopRecentSold } from "@/components/sections/verkoop-recent-sold";
import { Verkoop5Stappen } from "@/components/sections/verkoop-5-stappen";
import { AboutTeam } from "@/components/sections/about-team";
import { KlantenReviews } from "@/components/sections/klanten-reviews";
import { VerkoopApply } from "@/components/sections/verkoop-apply";

export function generateMetadata(): Metadata {
  return generatePageMetadata(verkoopPageSeo);
}

export default function VerkoopPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          verkoopPageSeo.metaTitle,
          verkoopPageSeo.metaDescription,
          `${siteConfig.url}/verkoop`,
        )}
      />

      <PageHero {...verkoopHeroData} />
      <VerkoopIntro {...verkoopIntroData} />
      <VerkoopProactief {...verkoopProactiefData} />
      <VerkoopOnlineStrategie {...verkoopOnlineStrategieData} />
      <VerkoopRecentSold {...verkoopRecentSoldData} />
      <Verkoop5Stappen {...verkoop5StappenData} />
      <AboutTeam {...verkoopTeamData} />
      <KlantenReviews
        heading={verkoopReferentiesData.heading}
        score={verkoopReferentiesData.score}
        reviewCount={verkoopReferentiesData.reviewCount}
        intro={verkoopReferentiesData.intro}
        testimonials={verkoopReferentiesData.testimonials}
      />
      <VerkoopApply
        heading={verkoopApplyData.heading}
        contact={verkoopContactData}
      />
    </>
  );
}
