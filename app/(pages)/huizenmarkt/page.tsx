import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  huizenmarktPageSeo,
  huizenmarktHeroData,
  huizenmarktIntroData,
  huizenmarktCtaValueData,
  huizenmarktPillarsData,
  huizenmarktM2PriceData,
  huizenmarktAvgPriceData,
  huizenmarktTransactiesData,
  huizenmarktOverbiedData,
  huizenmarktDoorlooptijdData,
  huizenmarktOpkoopbeschermingData,
  huizenmarktVerschillenData,
  huizenmarktContactData,
  huizenmarktHypotheekData,
  huizenmarktNieuwbouwData,
  huizenmarktRenteData,
  huizenmarktNvmData,
  huizenmarktBuurtCtaData,
  huizenmarktFormData,
} from "@/lib/data/pages/huizenmarkt";

import { PageHero } from "@/components/sections/page-hero";
import { HuizenmarktIntro } from "@/components/sections/huizenmarkt-intro";
import { HuizenmarktCtaValue } from "@/components/sections/huizenmarkt-cta-value";
import { AboutDifferences } from "@/components/sections/about-differences";
import { HuizenmarktChartSection } from "@/components/sections/huizenmarkt-chart-section";
import { HuizenmarktStatSingle, HuizenmarktStatCompare } from "@/components/sections/huizenmarkt-stat-display";
import { HuizenmarktContentSection } from "@/components/sections/huizenmarkt-content-section";
import { HuizenmarktContactInzicht } from "@/components/sections/huizenmarkt-contact-inzicht";
import { HuizenmarktBuurtCta } from "@/components/sections/huizenmarkt-buurt-cta";
import { HuizenmarktForm } from "@/components/sections/huizenmarkt-form";

export function generateMetadata(): Metadata {
  return generatePageMetadata(huizenmarktPageSeo);
}

export default function HuizenmarktPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          huizenmarktPageSeo.metaTitle,
          huizenmarktPageSeo.metaDescription,
          `${siteConfig.url}/huizenmarkt`,
        )}
      />

      <PageHero {...huizenmarktHeroData} />
      <HuizenmarktIntro paragraphs={huizenmarktIntroData.paragraphs} />
      <HuizenmarktCtaValue {...huizenmarktCtaValueData} />
      <AboutDifferences heading={huizenmarktPillarsData.heading} items={huizenmarktPillarsData.items} />

      <HuizenmarktChartSection heading={huizenmarktM2PriceData.heading} chartLabel={huizenmarktM2PriceData.chartLabel}>
        <HuizenmarktStatSingle
          value={huizenmarktM2PriceData.value}
          comparison={huizenmarktM2PriceData.comparison}
          comparisonLabel={huizenmarktM2PriceData.comparisonLabel}
        />
      </HuizenmarktChartSection>

      <HuizenmarktChartSection heading={huizenmarktAvgPriceData.heading} chartLabel={huizenmarktAvgPriceData.chartLabel}>
        <HuizenmarktStatSingle
          value={huizenmarktAvgPriceData.value}
          comparison={huizenmarktAvgPriceData.comparison}
          comparisonLabel={huizenmarktAvgPriceData.comparisonLabel}
        />
      </HuizenmarktChartSection>

      <HuizenmarktChartSection heading={huizenmarktTransactiesData.heading} chartLabel={huizenmarktTransactiesData.chartLabel}>
        <HuizenmarktStatCompare
          valueThisYear={huizenmarktTransactiesData.valueThisYear}
          valueLastYear={huizenmarktTransactiesData.valueLastYear}
          labelThis={huizenmarktTransactiesData.yearThis}
          labelLast={huizenmarktTransactiesData.yearLast}
        />
      </HuizenmarktChartSection>

      <HuizenmarktChartSection heading={huizenmarktOverbiedData.heading} chartLabel={huizenmarktOverbiedData.chartLabel}>
        <HuizenmarktStatCompare
          valueThisYear={huizenmarktOverbiedData.valueThisYear}
          valueLastYear={huizenmarktOverbiedData.valueLastYear}
          labelThis={huizenmarktOverbiedData.periodThis}
          labelLast={huizenmarktOverbiedData.periodLast}
        />
      </HuizenmarktChartSection>

      <HuizenmarktChartSection heading={huizenmarktDoorlooptijdData.heading} chartLabel={huizenmarktDoorlooptijdData.chartLabel}>
        <HuizenmarktStatCompare
          valueThisYear={huizenmarktDoorlooptijdData.valueThisYear}
          valueLastYear={huizenmarktDoorlooptijdData.valueLastYear}
          labelThis={huizenmarktDoorlooptijdData.yearThis}
          labelLast={huizenmarktDoorlooptijdData.yearLast}
          unit={huizenmarktDoorlooptijdData.unit}
        />
      </HuizenmarktChartSection>

      <HuizenmarktContentSection heading={huizenmarktOpkoopbeschermingData.heading} paragraphs={huizenmarktOpkoopbeschermingData.paragraphs} />
      <HuizenmarktContentSection heading={huizenmarktVerschillenData.heading} paragraphs={huizenmarktVerschillenData.paragraphs} />
      <HuizenmarktContactInzicht {...huizenmarktContactData} />

      <HuizenmarktContentSection heading={huizenmarktHypotheekData.heading} content={huizenmarktHypotheekData.content} />
      <HuizenmarktContentSection heading={huizenmarktNieuwbouwData.heading} paragraphs={huizenmarktNieuwbouwData.paragraphs} />
      <HuizenmarktContentSection heading={huizenmarktRenteData.heading} content={huizenmarktRenteData.content} />
      <HuizenmarktContentSection heading={huizenmarktNvmData.heading} content={huizenmarktNvmData.content} />

      <HuizenmarktBuurtCta {...huizenmarktBuurtCtaData} />
      <HuizenmarktForm {...huizenmarktFormData} />
    </>
  );
}
