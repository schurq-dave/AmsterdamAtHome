"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react";

export interface WhyItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
}

interface AankoopWhyUsProps {
  heading: string;
  items: WhyItem[];
}

export function AankoopWhyUs({ heading, items }: AankoopWhyUsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side - Dynamic Image Display with Overlapping Content */}
          <div className="lg:w-1/2 w-full relative reveal">
            <div className="relative h-[500px] md:h-[700px] overflow-hidden shadow-xl bg-white">
              {items.map((item, index) => (
                <img
                  key={`img-${item.title}`}
                  src={item.image}
                  alt={item.imageAlt}
                  className={`absolute inset-0 w-full h-full ${item.imageClassName || "object-cover"} transition-all duration-1000 ease-out ${
                    activeIndex === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                  }`}
                />
              ))}
            </div>
            
            {/* Overlapping Content Box */}
            <div className="absolute -bottom-10 right-0 md:-right-12 bg-boutique-stone p-8 md:p-12 shadow-2xl w-[90%] md:w-[85%] z-20 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-6">
                {items[activeIndex].title}
              </h3>
              <div className="w-3 h-3 bg-transparent border border-boutique-orange rotate-45 mb-6" />
              <p className="text-gray-700 font-light leading-relaxed text-base md:text-lg">
                {items[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Right Side - Interactive Accordion List */}
          <div className="lg:w-1/2 w-full lg:pl-8 mt-24 lg:mt-0 flex flex-col justify-center reveal">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block font-sans text-boutique-orange">
              Onze voordelen
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-boutique-dark mb-12">
              {heading}
            </h2>

            <div className="flex flex-col border-t border-boutique-dark/10">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.title}
                    onClick={() => handleItemClick(index)}
                    className={`flex items-center justify-between p-6 md:p-8 border-b border-boutique-dark/10 transition-all duration-500 text-left group ${
                      isActive 
                        ? "bg-[#DFDACE] text-boutique-dark" 
                        : "bg-transparent text-boutique-dark hover:bg-boutique-stone"
                    }`}
                  >
                    <span className={`font-sans text-lg md:text-xl transition-colors ${
                      isActive ? "font-medium" : "font-light group-hover:text-boutique-orange"
                    }`}>
                      {item.title}
                    </span>
                    <span className={`font-serif italic text-2xl md:text-3xl transition-colors ${
                      isActive ? "text-boutique-dark" : "text-boutique-dark/30 group-hover:text-boutique-dark/60"
                    }`}>
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
