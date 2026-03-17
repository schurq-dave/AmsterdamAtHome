"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";

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
      // The section is e.g. 400vh high. It becomes sticky when top reaches 0.
      const scrollableDistance = rect.height - viewportHeight;
      
      if (scrollableDistance <= 0) return;
      
      // Progress from 0 to 1
      let scrollProgress = -rect.top / scrollableDistance;
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        // Map progress to index but add a little "stickiness" by rounding smarter
        // Multiplying by items.length gives a value between 0 and 4
        // Subtracting a small offset makes it require slightly more scrolling to jump
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
    
    // Calculate target scroll position
    // We add a small offset (0.1) so we land safely inside the active zone
    const targetProgress = (index + 0.1) / items.length;
    const targetScroll = window.scrollY + rect.top + (scrollableDistance * targetProgress);
    
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-transparent border-t border-boutique-dark/10 ${
        isDesktop ? "h-[400vh] relative" : "py-24 md:py-32"
      }`}
      data-bg="bg-boutique-paper"
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
                    key={item.title}
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
                        0{index + 1}
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
            </div>

          {/* Dynamic Image Display */}
          <div className="lg:w-1/2 w-full aspect-[4/3] lg:aspect-square relative overflow-hidden reveal">
            {items.map((item, index) => (
              <div 
                key={item.title}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out ${
                  activeIndex === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
                }`}
              >
                <div className={`w-full h-full ${
                  item.imageClassName?.includes("object-contain") 
                    ? "bg-transparent flex items-center justify-center" 
                    : "shadow-2xl border-t-4 border-boutique-stone bg-transparent"
                }`}>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={`w-full h-full ${item.imageClassName || "object-cover"}`}
                  />
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
