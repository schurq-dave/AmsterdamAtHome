import { siteConfig } from "@/lib/data/site-config";
import type { FaqItem } from "@/lib/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo.src,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Weteringschans 143",
      addressLocality: "Amsterdam",
      postalCode: "1017 SE",
      addressCountry: "NL",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "9.8",
      bestRating: "10",
      ratingCount: "200",
    },
  };
}

export function webPageJsonLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
