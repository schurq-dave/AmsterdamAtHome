/* eslint-disable @next/next/no-img-element */

import { ArrowUpRight } from "lucide-react";
import type { Pillar } from "@/lib/types";

interface PillarsSectionProps {
  label: string;
  title: string;
  pillars: Pillar[];
}

export function PillarsSection({ label, title, pillars }: PillarsSectionProps) {
  return (
    <section className="py-32 md:py-40 bg-transparent relative mt-16 md:mt-0" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="max-w-4xl mx-auto mb-20 text-center reveal">
          <span className="text-boutique-orange text-[10px] uppercase tracking-[0.2em] font-bold mb-3 block font-sans">
            {label}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-boutique-dark mb-6">{title}</h2>
          <div className="w-16 h-1 bg-boutique-stone mx-auto" />
        </div>

        <div className="border-t border-boutique-dark/10 reveal">
          {pillars.map((p) => (
            <div
              key={p.number}
              className="group relative border-b border-boutique-dark/10 overflow-hidden cursor-pointer transition-all duration-500 hover:py-12"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className={`w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 ${p.imagePosition ?? ""}`}
                />
                <div className="absolute inset-0 bg-boutique-dark/60" />
              </div>
              <div className="relative z-10 px-4 py-8 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-500">
                <div className="flex items-baseline gap-8 md:gap-16">
                  <span className="text-boutique-beige font-serif text-4xl italic group-hover:text-white transition-colors">
                    {p.number}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-3xl font-serif font-bold text-boutique-dark group-hover:text-white transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-black font-light max-w-xl group-hover:text-white/90 transition-colors">
                      {p.description}
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-boutique-dark/20 group-hover:border-white group-hover:bg-white flex items-center justify-center text-boutique-dark transition-all duration-500 transform group-hover:rotate-45 ml-auto md:ml-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
