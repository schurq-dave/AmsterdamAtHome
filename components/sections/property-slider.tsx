"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { Property } from "@/lib/types";

interface PropertySliderProps {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  mobileCta: string;
  properties: Property[];
}

export function PropertySlider({
  label,
  title,
  description,
  ctaLabel,
  ctaHref,
  mobileCta,
  properties,
}: PropertySliderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = () => {
      const sec = sectionRef.current;
      const line = lineRef.current;
      if (!sec || !line) return;
      const wh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      const total = sec.offsetHeight + wh;
      let pct = ((wh - r.top) / total) * 100 * 1.2;
      pct = Math.max(0, Math.min(100, pct));
      line.style.height = `${pct}%`;
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollSlider = useCallback((dir: number) => {
    sliderRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="aanbod"
      className="py-32 md:py-40 text-boutique-dark relative overflow-hidden bg-transparent"
      data-bg="bg-boutique-sand"
    >
      <div ref={lineRef} className="absolute top-0 right-12 md:right-32 w-px bg-white/50 z-0" />

      <div className="container mx-auto px-6 mb-16 md:mb-20 flex justify-between items-end relative z-10 reveal">
        <div>
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block font-sans">
            {label}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark">{title}</h2>
          <p className="text-boutique-dark/70 font-light mt-6 max-w-xl text-lg">{description}</p>
        </div>
        <div className="flex flex-col items-end gap-6">
          <a
            href={ctaHref}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-boutique-dark hover:text-white transition-colors flex items-center gap-2 font-sans border-b border-transparent hover:border-white pb-1"
          >
            {ctaLabel} <ArrowRight className="w-3 h-3" />
          </a>
          <div className="flex gap-4">
            <button
              onClick={() => scrollSlider(-1)}
              className="w-12 h-12 rounded-full border border-boutique-dark/20 hover:bg-boutique-paper hover:border-white flex items-center justify-center transition-all"
              aria-label="Vorige"
            >
              <ChevronLeft className="w-6 h-6 text-boutique-dark" />
            </button>
            <button
              onClick={() => scrollSlider(1)}
              className="w-12 h-12 rounded-full border border-boutique-dark/20 hover:bg-boutique-paper hover:border-white flex items-center justify-center transition-all"
              aria-label="Volgende"
            >
              <ChevronRight className="w-6 h-6 text-boutique-dark" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="pl-6 md:pl-12 w-full overflow-x-auto overflow-y-hidden hide-scrollbar flex gap-12 pb-10 relative z-10 reveal scroll-smooth select-none"
      >
        {properties.map((pr, i) => (
          <div
            key={i}
            className="min-w-[85vw] md:min-w-[400px] lg:min-w-[500px] group cursor-pointer hover:-translate-y-2 transition-transform duration-500"
          >
            <div className="relative overflow-hidden aspect-[4/5] mb-6">
              <img
                src={pr.image}
                alt={pr.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                draggable={false}
              />
              {pr.label && (
                <div className={`absolute top-4 left-4 px-4 py-2 text-[10px] font-bold uppercase tracking-widest font-sans ${pr.labelStyle}`}>
                  {pr.label}
                </div>
              )}
            </div>
            <h3 className="text-xl font-serif font-bold uppercase tracking-widest mb-2 group-hover:text-boutique-beige transition-colors">
              {pr.title}
            </h3>
            <p className="text-boutique-dark/60 text-xs font-bold uppercase tracking-[0.15em] mb-3 font-sans">
              {pr.location}
            </p>
            <p className="text-3xl font-serif">{pr.price}</p>
          </div>
        ))}
        <div className="min-w-[50px]" />
      </div>

      <div className="container mx-auto px-6 md:hidden">
        <a
          href="#"
          className="block text-center w-full py-4 border-2 border-boutique-dark/20 hover:bg-boutique-paper hover:text-boutique-dark transition-all font-bold uppercase text-[10px] tracking-[0.2em] font-sans"
        >
          {mobileCta}
        </a>
      </div>
    </section>
  );
}
