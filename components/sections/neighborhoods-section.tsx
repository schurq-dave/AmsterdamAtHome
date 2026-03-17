"use client";

import { useState } from "react";
import type { NeighborhoodTab, NeighborhoodContent } from "@/lib/types";

interface NeighborhoodsSectionProps {
  title: string;
  description: string;
  tabs: NeighborhoodTab[];
  content: Record<string, NeighborhoodContent>;
}

export function NeighborhoodsSection({ title, description, tabs, content }: NeighborhoodsSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");

  return (
    <section className="py-32 md:py-40 bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6 reveal">{title}</h2>
        <p className="text-gray-600 font-light mb-16 max-w-4xl leading-relaxed text-lg reveal">{description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal">
          <div className="lg:col-span-4 xl:col-span-3 space-y-2 font-sans">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-6 py-5 border-l-2 uppercase tracking-wider text-xs transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-boutique-paper border-boutique-orange font-bold text-boutique-dark shadow-sm"
                    : "text-gray-500 hover:bg-boutique-paper hover:text-boutique-dark border-transparent font-semibold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 xl:col-span-9 bg-boutique-paper p-10 md:p-14 border border-gray-100 shadow-sm relative min-h-[400px]">
            {Object.entries(content).map(([key, c]) => (
              <div key={key} className={activeTab === key ? "block animate-fade-in" : "hidden"}>
                <div className="prose prose-lg max-w-none font-light text-gray-600">
                  <h3 className="font-serif font-bold uppercase tracking-widest text-xl text-boutique-dark mb-6">
                    {c.title}
                  </h3>
                  {c.paragraphs.map((p, i) => (
                    <p key={i} className={i < c.paragraphs.length - 1 ? "mb-4" : "mb-6"}>
                      {p}
                    </p>
                  ))}
                  <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href="#"
                      className="text-boutique-orange text-[10px] font-bold uppercase tracking-[0.2em] hover:text-boutique-dark transition-colors font-sans"
                    >
                      {c.linkText}
                    </a>
                    <span className="text-gray-400 font-serif italic text-sm">Specialist: {c.specialist}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
