/* eslint-disable @next/next/no-img-element */

import { Check, Monitor } from "lucide-react";
import type { UspItem } from "@/lib/types";

interface ConversionSectionProps {
  heading: string;
  usps: UspItem[];
  image: string;
  strategyCard: { title: string; paragraphs: string[]; quote: string };
}

export function ConversionSection({ heading, usps, image, strategyCard }: ConversionSectionProps) {
  return (
    <section className="pt-32 md:pt-48 pb-20 relative bg-transparent transition-colors duration-1000 ease-in-out" data-bg="bg-boutique-sand">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row relative">
          <div className="lg:w-1/2 relative z-20 lg:pr-10">
            <div className="reveal">
              <h2 className="text-4xl md:text-6xl font-serif text-boutique-dark mb-16 leading-[1.1] lg:w-[130%] relative z-30">
                {heading}
              </h2>
              <ul className="space-y-10 lg:pl-4 mb-16 lg:mb-0">
                {usps.map((item) => (
                  <li key={item.title} className="flex items-start gap-5 group">
                    <div className="w-8 h-8 mt-1 flex-shrink-0 border-2 border-boutique-beige rounded-full flex items-center justify-center text-boutique-orange">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold uppercase tracking-wider text-sm text-boutique-dark mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-700 font-light leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:-mt-10 relative z-10 reveal">
            <div className="aspect-[3/4] w-full lg:w-4/5 ml-auto overflow-hidden shadow-2xl relative">
              <img src={image} alt="" className="w-full h-full object-cover hover-zoom-img" />
              <div className="absolute inset-0 bg-boutique-dark/10" />
            </div>
            <div className="bg-boutique-paper p-10 md:p-14 shadow-2xl border-t-4 border-boutique-dark absolute -bottom-20 lg:-bottom-12 -left-4 lg:-left-24 w-[95%] lg:w-[110%] max-w-lg z-30">
              <span className="absolute top-8 right-8 text-boutique-beige opacity-20">
                <Monitor className="w-16 h-16" />
              </span>
              <h3 className="text-xl font-serif font-bold uppercase tracking-widest text-boutique-dark mb-6">
                {strategyCard.title}
              </h3>
              <div className="space-y-4 text-gray-600 font-light text-[15px] leading-relaxed">
                {strategyCard.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="font-normal text-boutique-dark italic border-l-2 border-boutique-orange pl-4 mt-6">
                  &quot;{strategyCard.quote}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
