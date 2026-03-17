"use client";

import { useState } from "react";
import type { AboutDifference } from "@/lib/types";

interface AboutDifferencesProps {
  heading: string;
  items: AboutDifference[];
}

export function AboutDifferences({ heading, items }: AboutDifferencesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-4xl reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-16 text-center">{heading}</h2>
        <div className="flex flex-col border-t border-boutique-dark/10">
          {items.map((item, index) => (
            <div
              key={item.number}
              className="group border-b border-boutique-dark/10 relative cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Background hover effect */}
              <div 
                className={`absolute inset-0 bg-white transition-opacity duration-500 ease-out ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
              
              <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className={`text-boutique-beige font-serif text-3xl md:text-4xl italic font-bold transition-colors duration-300 ${
                  activeIndex === index ? "text-boutique-orange" : ""
                }`}>
                  {item.number}
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-serif font-bold text-boutique-dark transition-transform duration-500 ${
                    activeIndex === index ? "md:-translate-y-2" : ""
                  }`}>
                    {item.title}
                  </h3>
                  
                  {/* Expanding content */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      activeIndex === index 
                        ? "grid-rows-[1fr] opacity-100 mt-2" 
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-600 font-light leading-relaxed text-[15px] md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
