"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

interface Point {
  number: string;
  title: string;
  paragraphs: string[];
}

interface DatagedrevenPointsProps {
  heading: string;
  subheading?: string;
  points: Point[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function DatagedrevenPoints({
  heading,
  subheading,
  points,
  ctaLabel,
  ctaHref,
}: DatagedrevenPointsProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (isPaused || !hasStarted) return;

    const timer = setInterval(() => {
      setActiveStep((current) => {
        const next = current === points.length - 1 ? 0 : current + 1;
        
        // Scroll the active step into view on mobile
        if (scrollRef.current && window.innerWidth < 1024) {
          const container = scrollRef.current;
          const activeElement = container.children[next] as HTMLElement;
          if (activeElement) {
            const scrollLeft = activeElement.offsetLeft - (container.offsetWidth / 2) + (activeElement.offsetWidth / 2);
            container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
          }
        }
        
        return next;
      });
    }, 10000); // 10 seconds because there is a lot of text

    return () => clearInterval(timer);
  }, [isPaused, hasStarted, points.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsPaused(true); // Stop auto-play once user interacts
    
    // Scroll element into view on mobile
    if (scrollRef.current && window.innerWidth < 1024) {
      const container = scrollRef.current;
      const activeElement = container.children[index] as HTMLElement;
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - (container.offsetWidth / 2) + (activeElement.offsetWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">
            {heading}
          </h2>
          {subheading && (
            <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto">
              {subheading}
            </p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 reveal">
          {/* Left Side - Timeline Tabs */}
          <div className="lg:w-1/3 relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-boutique-dark/10 hidden lg:block" />
            <div ref={scrollRef} className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-4 lg:gap-0 snap-x custom-scrollbar">
              {points.map((point, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={point.number}
                    onClick={() => handleStepClick(index)}
                    className="group relative flex items-center gap-6 lg:py-6 text-left shrink-0 snap-center focus:outline-none"
                  >
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 font-serif italic text-lg transition-all duration-500 relative z-10 ${
                        isActive
                          ? "border-boutique-orange bg-boutique-orange text-white"
                          : "border-boutique-dark/20 bg-boutique-paper text-boutique-dark group-hover:border-boutique-orange group-hover:text-boutique-orange"
                      }`}
                    >
                      {point.number}
                    </div>
                    <h3
                      className={`font-sans font-bold uppercase tracking-wider text-xs md:text-sm transition-colors duration-300 whitespace-nowrap lg:whitespace-normal ${
                        isActive ? "text-boutique-orange" : "text-boutique-dark/50 group-hover:text-boutique-dark"
                      }`}
                    >
                      {point.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side - Content Area */}
          <div className="lg:w-2/3">
            <div 
              className="bg-white p-10 md:p-16 border-t-4 border-boutique-orange shadow-xl relative overflow-hidden min-h-[500px] flex flex-col justify-center"
              onMouseEnter={() => setIsPaused(true)} 
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="absolute -top-10 -right-10 text-[200px] font-serif italic text-boutique-stone/30 select-none pointer-events-none leading-none">
                {points[activeStep].number}
              </div>
              
              <div className="relative z-10 animate-fade-in" key={activeStep}>
                <h4 className="text-boutique-orange font-bold uppercase tracking-[0.2em] text-[10px] mb-4 font-sans">
                  Punt {points[activeStep].number}
                  {!isPaused && <span className="ml-4 opacity-50 font-normal normal-case tracking-normal">Automatisch afspelen...</span>}
                </h4>
                <h3 className="text-2xl md:text-4xl font-serif text-boutique-dark mb-6 leading-tight">
                  {points[activeStep].title}
                </h3>
                <div className="w-12 h-1 bg-boutique-stone mb-8" />
                
                <div className="space-y-4">
                  {points[activeStep].paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-600 font-light text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Progress bar indication */}
              {!isPaused && hasStarted && (
                <div 
                  className="absolute bottom-0 left-0 h-1 bg-boutique-orange" 
                  key={`progress-${activeStep}`}
                  style={{ animation: 'shrink 10s linear forwards' }} 
                />
              )}
            </div>
          </div>
        </div>

        {ctaLabel && ctaHref && (
          <div className="text-center reveal">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-3 bg-boutique-dark text-white px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shrink {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}} />
    </section>
  );
}
