/* eslint-disable @next/next/no-img-element */

import type { NewsArticle } from "@/lib/types";

interface NewsSectionProps {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
  articles: NewsArticle[];
}

export function NewsSection({ heading, ctaLabel, ctaHref, articles }: NewsSectionProps) {
  return (
    <section className="py-32 md:py-40 bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark">{heading}</h2>
          <a
            href={ctaHref}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-boutique-dark border-b-2 border-transparent hover:border-boutique-dark pb-1 transition-all font-sans"
          >
            {ctaLabel}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((a) => (
            <article key={a.title} className="group cursor-pointer">
              <div className="aspect-video bg-gray-100 mb-6 overflow-hidden relative shadow-sm">
                <img
                  src={a.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-boutique-paper px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] font-sans">
                  {a.date}
                </div>
              </div>
              <h3 className="font-serif font-bold uppercase tracking-wide text-[13px] leading-relaxed text-boutique-dark group-hover:text-boutique-beige transition-colors mb-3">
                {a.title}
              </h3>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest font-sans">
                {a.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
