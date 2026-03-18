/* eslint-disable @next/next/no-img-element */

import { ArrowRight } from "lucide-react";
import type { Property } from "@/lib/types";

interface VerkoopRecentSoldProps {
  heading: string;
  description?: string;
  properties: Property[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function VerkoopRecentSold({
  heading,
  description,
  properties,
  ctaHref = "/aanbod",
  ctaLabel = "Bekijk volledig aanbod",
}: VerkoopRecentSoldProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">
            {heading}
          </h2>
          {description && (
            <p className="text-gray-700 font-light text-lg max-w-2xl mb-8">
              {description}
            </p>
          )}
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 text-boutique-dark group font-sans border-b-2 border-boutique-dark pb-1 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-boutique-orange hover:border-boutique-orange transition-all"
          >
            {ctaLabel} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {properties.map((property, i) => (
            <div
              key={i}
              className="group cursor-pointer hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
                {property.label && (
                  <div
                    className={`absolute top-4 left-4 px-4 py-2 text-[10px] font-bold uppercase tracking-widest font-sans ${property.labelStyle ?? ""}`}
                  >
                    {property.label}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-serif font-bold uppercase tracking-widest mb-2 group-hover:text-boutique-beige transition-colors">
                {property.title}
              </h3>
              <p className="text-boutique-dark/60 text-xs font-bold uppercase tracking-[0.15em] mb-3 font-sans">
                {property.location}
              </p>
              <p className="text-3xl font-serif">{property.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
