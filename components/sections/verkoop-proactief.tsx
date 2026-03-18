"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import type { AboutDifference } from "@/lib/types";

interface VerkoopProactiefProps {
  heading: string;
  items: AboutDifference[];
  cta: { label: string; href: string };
}

export function VerkoopProactief({
  heading,
  items,
  cta,
}: VerkoopProactiefProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress
      // The section is e.g. 500vh high (since there are 5 items, let's make it 500vh). It becomes sticky when top reaches 0.
      const scrollableDistance = rect.height - viewportHeight;
      
      if (scrollableDistance <= 0) return;
      
      // Progress from 0 to 1
      let scrollProgress = -rect.top / scrollableDistance;
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const rawIndex = scrollProgress * items.length;
        const newIndex = Math.min(
          items.length - 1,
          Math.max(0, Math.floor(rawIndex))
        );
        
        setActiveIndex(newIndex);
      }
    };

    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [items.length, isDesktop]);

  const handleItemClick = (index: number) => {
    if (!isDesktop) {
      setActiveIndex(index);
      return;
    }
    
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const scrollableDistance = rect.height - viewportHeight;
    
    const targetProgress = (index + 0.1) / items.length;
    const targetScroll = window.scrollY + rect.top + (scrollableDistance * targetProgress);
    
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-transparent ${
        isDesktop ? "h-[500vh] relative" : "py-24 md:py-32"
      }`}
      data-bg="bg-boutique-stone"
    >
      <div className={isDesktop ? "sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-16" : ""}>
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className={`text-3xl md:text-5xl font-serif text-boutique-dark text-center reveal ${isDesktop ? "mb-10 lg:mb-16" : "mb-16 lg:mb-24"}`}>
            {heading}
          </h2>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Interactive Accordion List */}
            <div className="lg:w-1/2 space-y-4 md:space-y-6 w-full reveal">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={item.number}
                    className={`cursor-pointer transition-all duration-500 border-l-[3px] pl-6 md:pl-10 py-2 ${
                      isActive
                        ? "border-boutique-orange"
                        : "border-boutique-dark/10 hover:border-boutique-orange/50"
                    }`}
                    onMouseEnter={() => !isDesktop && setActiveIndex(index)}
                    onClick={() => handleItemClick(index)}
                  >
                    <div className="flex items-start gap-4 md:gap-6 mb-1 md:mb-2">
                      <span
                        className={`font-serif text-2xl md:text-3xl italic transition-colors mt-1 ${
                          isActive ? "text-boutique-orange" : "text-boutique-stone"
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3
                        className={`text-xl md:text-2xl font-serif font-bold transition-colors leading-tight ${
                          isActive ? "text-boutique-dark" : "text-gray-400"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div
                      className={`grid transition-all duration-500 ease-in-out pl-10 md:pl-14 ${
                        isActive ? "grid-rows-[1fr] opacity-100 mt-2 md:mt-4" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 font-light leading-relaxed overflow-hidden text-[15px] md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              
              <div className="pl-6 md:pl-10 mt-12 reveal">
                <a
                  href={cta.href}
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
                >
                  {cta.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Dynamic Image Display */}
            <div className="lg:w-1/2 w-full aspect-[4/3] lg:aspect-square relative overflow-hidden reveal">
              {items.map((item, index) => (
                <div 
                  key={item.number}
                  className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                    activeIndex === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                  }`}
                >
                  <div className={`w-full h-full ${
                    item.imageClassName?.includes("object-contain") 
                      ? "bg-transparent flex items-center justify-center" 
                      : "shadow-2xl border-t-4 border-boutique-paper bg-transparent"
                  }`}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        className={`w-full h-full ${item.imageClassName || "object-cover"}`}
                      />
                    ) : (
                      <div className="w-full h-full bg-boutique-paper flex items-center justify-center">
                        <span className="text-boutique-stone font-serif italic text-6xl opacity-30">{item.number}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
