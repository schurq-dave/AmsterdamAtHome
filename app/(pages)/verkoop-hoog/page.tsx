import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  verkoopHoogPageSeo,
  verkoopHoogHeroData,
  verkoopHoogTrustData,
  verkoopHoogIntroData,
  verkoopHoogDifferencesData,
  verkoopHoogStatsData,
  verkoopHoogContactData,
  verkoopHoogDownloadData,
  verkoopHoogRecentSoldData,
  verkoopHoogFormData,
  verkoopHoogFormContactData,
} from "@/lib/data/pages/verkoop-hoog";

import { PageHero } from "@/components/sections/page-hero";
import { VerkoopHoogTrust } from "@/components/sections/verkoop-hoog-trust";
import { VerkoopHoogIntro } from "@/components/sections/verkoop-hoog-intro";
import { VerkoopHoogDifferences } from "@/components/sections/verkoop-hoog-differences";
import { VerkoopHoogStats } from "@/components/sections/verkoop-hoog-stats";
import { VerkoopHoogContact } from "@/components/sections/verkoop-hoog-contact";
import { VerkoopHoogDownload } from "@/components/sections/verkoop-hoog-download";
import { VerkoopRecentSold } from "@/components/sections/verkoop-recent-sold";
import { VerkoopHoogForm } from "@/components/sections/verkoop-hoog-form";

export function generateMetadata(): Metadata {
  return generatePageMetadata(verkoopHoogPageSeo);
}

export default function VerkoopHoogPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          verkoopHoogPageSeo.metaTitle,
          verkoopHoogPageSeo.metaDescription,
          `${siteConfig.url}/verkoop-hoog`,
        )}
      />

      <PageHero {...verkoopHoogHeroData} />
      <VerkoopHoogTrust {...verkoopHoogTrustData} />
      <VerkoopHoogIntro {...verkoopHoogIntroData} />
      <VerkoopHoogDifferences {...verkoopHoogDifferencesData} />
      <VerkoopHoogStats {...verkoopHoogStatsData} />
      <VerkoopHoogContact {...verkoopHoogContactData} />
      <VerkoopHoogDownload {...verkoopHoogDownloadData} />
      <VerkoopRecentSold {...verkoopHoogRecentSoldData} />
      <VerkoopHoogForm
        heading={verkoopHoogFormData.heading}
        description={verkoopHoogFormData.description}
        contact={verkoopHoogFormContactData}
      />
    </>
  );
}
