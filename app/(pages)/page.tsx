import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd, faqPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";

import {
  homePageSeo,
  heroData,
  introData,
  immersiveData,
  pillarsHeading,
  aanbodHeading,
  conversionData,
  expatData,
  neighborhoodsHeading,
  chatMarketData,
} from "@/lib/data/pages/home";
import { siteConfig } from "@/lib/data/site-config";
import { properties } from "@/lib/data/content/properties";
import { pillars } from "@/lib/data/content/pillars";
import { teamMembers } from "@/lib/data/content/team";
import { faqs } from "@/lib/data/content/faqs";
import { neighborhoodTabs, neighborhoodContent } from "@/lib/data/content/neighborhoods";
import { newsArticles } from "@/lib/data/content/news";

import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { ImmersiveSection } from "@/components/sections/immersive-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { PropertySlider } from "@/components/sections/property-slider";
import { ConversionSection } from "@/components/sections/conversion-section";
import { ExpatSection } from "@/components/sections/expat-section";
import { TeamSection } from "@/components/sections/team-section";
import { NeighborhoodsSection } from "@/components/sections/neighborhoods-section";
import { NewsSection } from "@/components/sections/news-section";
import { FaqSection } from "@/components/sections/faq-section";

export function generateMetadata(): Metadata {
  return generatePageMetadata(homePageSeo);
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={webPageJsonLd(homePageSeo.metaTitle, homePageSeo.metaDescription, siteConfig.url)} />
      <JsonLd data={faqPageJsonLd(faqs)} />

      <HeroSection
        backgroundImage={heroData.backgroundImage}
        headline={heroData.headline}
        description={heroData.description}
        primaryCta={heroData.primaryCta}
        secondaryCta={heroData.secondaryCta}
        trustLogos={heroData.trustLogos}
        chatPreview={heroData.chatPreview}
        chatWelcomeHtml={heroData.chatWelcomeHtml}
        chatQuickReplies={heroData.chatQuickReplies}
        chatMarketData={chatMarketData}
      />

      <IntroSection {...introData} />

      <ImmersiveSection {...immersiveData} />

      <PillarsSection label={pillarsHeading.label} title={pillarsHeading.title} pillars={pillars} />

      <PropertySlider
        label={aanbodHeading.label}
        title={aanbodHeading.title}
        description={aanbodHeading.description}
        ctaLabel={aanbodHeading.ctaLabel}
        ctaHref={aanbodHeading.ctaHref}
        mobileCta={aanbodHeading.mobileCta}
        properties={properties}
      />

      <ConversionSection {...conversionData} />

      <ExpatSection
        label={expatData.label}
        headline={expatData.headline}
        paragraphsHtml={expatData.paragraphs}
        badges={expatData.badges}
        image={expatData.image}
        partnerCard={expatData.partnerCard}
      />

      <TeamSection
        headingPrefix="Onze makelaars"
        headingAccent="van"
        headingSuffix="Amsterdam"
        members={teamMembers}
      />

      <NeighborhoodsSection
        title={neighborhoodsHeading.title}
        description={neighborhoodsHeading.description}
        tabs={neighborhoodTabs}
        content={neighborhoodContent}
      />

      <NewsSection heading="Woningmarkt Insights" ctaLabel="Alle updates" ctaHref="#" articles={newsArticles} />

      <FaqSection heading="Veelgestelde vragen" faqs={faqs} />
    </>
  );
}
