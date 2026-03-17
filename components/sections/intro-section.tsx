/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from "lucide-react";

interface IntroSectionProps {
  label: string;
  heading: string;
  headingAccent: string;
  paragraph: string;
  uspCard: { title: string; descriptionHtml: string };
  ctaLabel: string;
  ctaHref: string;
  image: { src: string; alt: string };
  stats: { value: string; label: string }[];
}

export function IntroSection({
  label,
  heading,
  headingAccent,
  paragraph,
  uspCard,
  ctaLabel,
  ctaHref,
  image,
  stats,
}: IntroSectionProps) {
  return (
    <section className="pt-32 md:pt-40 pb-32 md:pb-64 overflow-hidden bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="relative order-2 lg:order-1 reveal">
            <div className="w-full h-[600px] bg-gray-200 overflow-hidden relative z-10">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover-zoom-img" />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border border-boutique-stone z-0 hidden md:block" />
            <div className="absolute -bottom-10 -right-10 bg-boutique-paper p-8 shadow-xl z-20 max-w-xs hidden md:block border border-boutique-offwhite font-sans">
              {stats.map((stat, i) => (
                <div key={stat.label} className={i > 0 ? "mt-4 pt-4 border-t border-gray-100" : ""}>
                  <p className={`text-boutique-dark font-bold mb-1 ${i === 0 ? "text-3xl" : "text-2xl"}`}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 slide-in-subtle sticky top-32">
            <span className="text-boutique-orange text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block font-sans">
              {label}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-boutique-dark mb-10 leading-snug">
              {heading}{" "}
              <span className="block italic font-light text-boutique-beige mt-1">{headingAccent}</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-px bg-boutique-dark/10 flex-shrink-0 mt-2 h-auto self-stretch" />
                <p className="text-gray-700 font-normal leading-relaxed text-lg">{paragraph}</p>
              </div>
              <div className="bg-boutique-paper p-8 border border-boutique-stone shadow-sm relative group">
                <div className="absolute top-0 left-0 w-1 h-full bg-boutique-orange transition-all duration-300 group-hover:h-full h-0" />
                <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-boutique-dark mb-3">
                  {uspCard.title}
                </h4>
                <p
                  className="text-gray-600 font-normal leading-relaxed text-sm"
                  dangerouslySetInnerHTML={{ __html: uspCard.descriptionHtml }}
                />
              </div>
              <div className="pt-4">
                <a href={ctaHref} className="inline-flex items-center gap-3 text-boutique-dark group font-sans">
                  <span className="border-b-2 border-boutique-dark pb-1 text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-boutique-orange group-hover:border-boutique-orange transition-all duration-300">
                    {ctaLabel}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:text-boutique-orange" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
