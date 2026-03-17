import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd, webPageJsonLd } from "@/lib/seo/jsonld";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site-config";

import {
  blogPageSeo,
  blogHeroData,
  blogIntroData,
  blogCategories,
  blogArticles,
} from "@/lib/data/pages/blog";

import { BlogHero } from "@/components/sections/blog-hero";
import { BlogGrid } from "@/components/sections/blog-grid";

export function generateMetadata(): Metadata {
  return generatePageMetadata(blogPageSeo);
}

export default function BlogPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd
        data={webPageJsonLd(
          blogPageSeo.metaTitle,
          blogPageSeo.metaDescription,
          `${siteConfig.url}/blog`,
        )}
      />

      <BlogHero {...blogHeroData} />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-transparent" data-bg="bg-boutique-paper">
        <div className="container mx-auto px-6 max-w-4xl text-center reveal">
          <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-8">
            {blogIntroData.heading}
          </h2>
          {blogIntroData.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-gray-700 font-light text-lg leading-relaxed ${i < blogIntroData.paragraphs.length - 1 ? "mb-6" : ""}`}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <BlogGrid articles={blogArticles} categories={blogCategories} />
    </>
  );
}
