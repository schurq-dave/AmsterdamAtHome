import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  beleggingPageSeo,
  beleggingHeroData,
  beleggingIntroData,
  beleggingRecentSoldData,
  beleggingDifferencesData,
  beleggingCtaData,
  beleggingTeamData,
  beleggingReviewsData,
  beleggingCtaBlocksData,
  beleggingFormData,
} from "@/lib/data/pages/belegging";

import { PageHero } from "@/components/sections/page-hero";
import { AboutIntro } from "@/components/sections/about-intro";
import { VerkoopRecentSold } from "@/components/sections/verkoop-recent-sold";
import { AboutDifferences } from "@/components/sections/about-differences";
import { BeleggingCtaSimple } from "@/components/sections/belegging-cta-simple";
import { AboutTeam } from "@/components/sections/about-team";
import { BeleggingReviewsCarousel } from "@/components/sections/belegging-reviews-carousel";
import { BeleggingCtaBlocks } from "@/components/sections/belegging-cta-blocks";
import { BeleggingContactForm } from "@/components/sections/belegging-contact-form";

export function generateMetadata(): Metadata {
  return generatePageMetadata(beleggingPageSeo);
}

export default function BeleggingPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          beleggingPageSeo.metaTitle,
          beleggingPageSeo.metaDescription,
          `${siteConfig.url}/belegging`,
        )}
      />

      <PageHero {...beleggingHeroData} />
      <AboutIntro {...beleggingIntroData} />
      <VerkoopRecentSold {...beleggingRecentSoldData} />
      <AboutDifferences {...beleggingDifferencesData} />
      <BeleggingCtaSimple
        heading={beleggingCtaData.heading}
        ctaLabel={beleggingCtaData.ctaLabel}
        ctaHref={beleggingCtaData.ctaHref}
      />
      <AboutTeam {...beleggingTeamData} />
      <BeleggingReviewsCarousel
        score={beleggingReviewsData.score}
        reviewCount={beleggingReviewsData.reviewCount}
        testimonials={beleggingReviewsData.testimonials}
      />
      <BeleggingCtaBlocks blocks={beleggingCtaBlocksData.blocks} />
      <BeleggingContactForm formData={beleggingFormData} />
    </>
  );
}
