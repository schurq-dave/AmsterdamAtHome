"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface FormOption {
  value: string;
  label: string;
}

interface MiljoenenmarktRapportProps {
  heading: string;
  description: string;
  bulletPoints: string[];
  ctaLabel: string;
  ctaHref: string;
  buurtOptions: FormOption[];
}

export function MiljoenenmarktRapport({
  heading,
  description,
  bulletPoints,
  ctaLabel,
  ctaHref,
  buurtOptions,
}: MiljoenenmarktRapportProps) {
  const [selectedBuurt, setSelectedBuurt] = useState("");

  return (
    <section
      className="py-20 md:py-28 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-8 leading-tight">
              {heading}
            </h2>

            <div className="mb-8">
              <label
                htmlFor="buurt-select"
                className="block text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500 mb-2"
              >
                Selecteer uw buurt
              </label>
              <select
                id="buurt-select"
                value={selectedBuurt}
                onChange={(e) => setSelectedBuurt(e.target.value)}
                className="w-full border border-gray-200 px-4 py-3 text-sm font-sans focus:outline-none focus:border-boutique-orange transition-colors text-boutique-dark bg-boutique-paper"
              >
                {buurtOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <a
              href={ctaHref}
              className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>

          <div className="reveal" style={{ animationDelay: "200ms" }}>
            <div className="bg-white p-8 md:p-10 shadow-xl border-t-4 border-boutique-orange">
              <p className="text-gray-700 font-light leading-relaxed mb-8">
                {description}
              </p>
              <ul className="space-y-4">
                {bulletPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 flex-shrink-0 border border-boutique-beige rounded-full flex items-center justify-center text-boutique-orange">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-gray-700 font-light leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
