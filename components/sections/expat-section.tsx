"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useEffect } from "react";
import { Languages, Star } from "lucide-react";

interface ExpatSectionProps {
  label: string;
  headline: { prefix: string; accent: string; suffix: string };
  paragraphsHtml: string[];
  badges: string[];
  image: string;
  partnerCard: { title: string; subtitle: string; quote: string; languages: string[] };
}

export function ExpatSection({
  label,
  headline,
  paragraphsHtml,
  badges,
  image,
  partnerCard,
}: ExpatSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="pt-40 md:pt-56 pb-32 md:pb-48 relative overflow-hidden bg-transparent transition-colors duration-1000 ease-in-out"
      data-bg="bg-boutique-khaki"
    >
      <div className="absolute top-1/4 left-[-5%] w-[120%] overflow-hidden pointer-events-none select-none z-0 opacity-[0.03]">
        <h2 className="text-[18vw] font-sans font-bold uppercase tracking-tighter text-boutique-dark whitespace-nowrap">
          INTERNATIONAL
        </h2>
      </div>
      <div ref={lineRef} className="absolute top-0 left-6 md:left-24 w-px bg-white/60 z-0" style={{ height: 0 }} />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start relative">
          <div className="lg:w-5/12 relative z-20 lg:mt-32 lg:pl-16 reveal">
            <span className="text-boutique-orange text-[10px] font-bold uppercase tracking-[0.2em] mb-6 block relative before:content-[''] before:absolute before:w-8 before:h-px before:bg-boutique-orange before:-left-12 before:top-1/2 ml-12 font-sans">
              {label}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-boutique-dark mb-10 leading-[1.2]">
              {headline.prefix} <br />
              <span className="text-boutique-beige italic">{headline.accent}</span> {headline.suffix}
            </h2>
            <div className="prose prose-lg text-gray-700 font-light leading-relaxed">
              {paragraphsHtml.map((p, i) => (
                <p key={i} className={i === 0 ? "mb-6" : ""} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <span className="px-5 py-3 border border-boutique-dark/10 bg-white/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] text-boutique-dark flex items-center gap-2 font-sans">
                <Languages className="w-4 h-4" /> {badges[0]}
              </span>
              <span className="px-5 py-3 border border-boutique-dark/10 bg-white/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.2em] text-boutique-dark flex items-center gap-2 font-sans">
                <Star className="w-4 h-4 text-boutique-orange" /> {badges[1]}
              </span>
            </div>
          </div>

          <div className="lg:w-7/12 w-full mt-24 lg:mt-0 relative z-10 reveal">
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/3] w-[90%] lg:w-4/5 overflow-hidden shadow-2xl relative z-10">
                <img src={image} alt="Londen Piccadilly Circus" className="w-full h-full object-cover hover-zoom-img" />
              </div>
              <div className="absolute -bottom-16 lg:bottom-12 -right-4 w-[95%] lg:w-auto lg:min-w-[400px] bg-boutique-paper shadow-2xl p-8 md:p-12 border border-boutique-stone/50 z-30 flex flex-col justify-center items-center text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-boutique-stone/20 rounded-bl-full" />
                <h3 className="font-serif font-bold uppercase tracking-widest text-lg text-boutique-dark mb-2">
                  {partnerCard.title}
                </h3>
                <p className="text-boutique-orange text-xs font-bold uppercase tracking-[0.25em] mb-6 font-sans">
                  {partnerCard.subtitle}
                </p>
                <div className="w-12 h-px bg-boutique-beige mb-6" />
                <p className="text-gray-500 font-light italic mb-8 max-w-[250px]">
                  &quot;{partnerCard.quote}&quot;
                </p>
                <div className="flex gap-4 justify-center">
                  {partnerCard.languages.map((lang) => (
                    <div
                      key={lang}
                      className="w-10 h-10 rounded-full bg-boutique-offwhite flex items-center justify-center text-boutique-dark border border-gray-100 shadow-sm"
                    >
                      <span className="text-[10px] font-bold font-sans">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
