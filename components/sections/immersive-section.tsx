"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef, useEffect } from "react";

interface ImmersiveSectionProps {
  image: { src: string; alt: string };
  label: string;
  heading: string;
}

export function ImmersiveSection({ image, label, heading }: ImmersiveSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = () => {
      const sec = sectionRef.current;
      const ctr = containerRef.current;
      if (!sec || !ctr) return;
      const wh = window.innerHeight;
      const r = sec.getBoundingClientRect();
      if (r.top < wh && r.bottom > 0) {
        const f = Math.min(1, Math.max(0, (wh - r.top) / (wh * 0.6)));
        ctr.style.width = `${85 + 15 * f}%`;
        ctr.style.borderRadius = `${12 - 12 * f}px`;
      }
    };
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <section ref={sectionRef} className="pb-0 pt-0 overflow-hidden bg-transparent" data-bg="bg-boutique-stone">
      <div
        ref={containerRef}
        className="mx-auto transition-all duration-700 ease-out"
        style={{ width: "85%", borderRadius: "12px" }}
      >
        <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-[center_25%]" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-12 left-6 md:left-12 text-white max-w-lg reveal">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 opacity-90 font-sans">{label}</p>
            <h3 className="text-4xl md:text-6xl font-serif italic">{heading}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
