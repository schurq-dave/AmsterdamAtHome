import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

// In a real app, this would be a dynamic fetch based on the slug
import {
  jordaanSeo,
  jordaanHeroData,
  jordaanDashboardData,
  jordaanIntroData,
  jordaanApproachData,
  jordaanMakelaarData,
  jordaanChannelsData,
  jordaanAboutData,
} from "@/lib/data/pages/buurten/jordaan";

import { PageHero } from "@/components/sections/page-hero";
import { NeighborhoodDashboard } from "@/components/sections/neighborhood-dashboard";
import { WoningwaardeTextBlock } from "@/components/sections/woningwaarde-text-block";
import { NeighborhoodMakelaar } from "@/components/sections/neighborhood-makelaar";
import { AankoopRecentProperties } from "@/components/sections/aankoop-recent-properties";
import { properties } from "@/lib/data/content/properties";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== "jordaan") {
    return {};
  }
  return generatePageMetadata(jordaanSeo);
}

export default async function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  if (slug !== "jordaan") {
    notFound();
  }

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          jordaanSeo.metaTitle,
          jordaanSeo.metaDescription,
          `${siteConfig.url}/${jordaanSeo.slug}`,
        )}
      />

      <PageHero {...jordaanHeroData} />
      
      <WoningwaardeTextBlock
        {...jordaanIntroData}
        bgVariant="paper"
      />

      <NeighborhoodDashboard {...jordaanDashboardData} />
      
      <WoningwaardeTextBlock
        {...jordaanApproachData}
        bgVariant="stone"
      />
      
      <NeighborhoodMakelaar {...jordaanMakelaarData} />
      
      <WoningwaardeTextBlock
        {...jordaanChannelsData}
        bgVariant="paper"
      />
      
      <WoningwaardeTextBlock
        {...jordaanAboutData}
        bgVariant="stone"
      />
      
      <AankoopRecentProperties
        heading="Recente transacties in Jordaan"
        description="Bekijk hieronder de woningen die wij recent in de Jordaan hebben aan- of verkocht."
        ctaLabel="Bekijk alle transacties"
        ctaHref="/aanbod"
        properties={properties.slice(0, 3)}
      />
    </>
  );
}
