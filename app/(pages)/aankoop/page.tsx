import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  aankoopPageSeo,
  aankoopHeroData,
  aankoopIntroData,
  aankoopWoningSectionData,
  aankoopRecentPropertiesData,
  aankoopWaardebepalingData,
  aankoopProcessData,
  aankoopNoWorriesData,
  aankoopAdvantagesData,
  aankoopWhyUsData,
  aankoopStatsData,
  aankoopTestimonialsData,
  aankoopTeamData,
  aankoopFinalFormData,
} from "@/lib/data/pages/aankoop";

import { PageHero } from "@/components/sections/page-hero";
import { AankoopIntro } from "@/components/sections/aankoop-intro";
import { AankoopWoningSection } from "@/components/sections/aankoop-woning-section";
import { AankoopRecentProperties } from "@/components/sections/aankoop-recent-properties";
import { AankoopWaardebepaling } from "@/components/sections/aankoop-waardebepaling";
import { AankoopProcess } from "@/components/sections/aankoop-process";
import { AankoopNoWorries } from "@/components/sections/aankoop-no-worries";
import { AankoopAdvantages } from "@/components/sections/aankoop-advantages";
import { AankoopWhyUs } from "@/components/sections/aankoop-why-us";
import { AankoopStats } from "@/components/sections/aankoop-stats";
import { AankoopTestimonials } from "@/components/sections/aankoop-testimonials";
import { AboutTeam } from "@/components/sections/about-team";
import { AankoopFinalForm } from "@/components/sections/aankoop-final-form";

export function generateMetadata(): Metadata {
  return generatePageMetadata(aankoopPageSeo);
}

export default function AankoopPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          aankoopPageSeo.metaTitle,
          aankoopPageSeo.metaDescription,
          `${siteConfig.url}/aankoop`,
        )}
      />

      <PageHero {...aankoopHeroData} />
      <AankoopIntro {...aankoopIntroData} />
      <AankoopWoningSection {...aankoopWoningSectionData} />
      <AankoopRecentProperties {...aankoopRecentPropertiesData} />
      <AankoopWaardebepaling {...aankoopWaardebepalingData} />
      <AankoopProcess {...aankoopProcessData} />
      <AankoopNoWorries {...aankoopNoWorriesData} />
      <AankoopAdvantages {...aankoopAdvantagesData} />
      <AankoopWhyUs {...aankoopWhyUsData} />
      <AankoopStats {...aankoopStatsData} />
      <AankoopTestimonials {...aankoopTestimonialsData} />
      <AboutTeam {...aankoopTeamData} />
      <AankoopFinalForm {...aankoopFinalFormData} />
    </>
  );
}
