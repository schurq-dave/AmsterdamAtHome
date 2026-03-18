"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";

interface VacatureContentProps {
  subtitle: string;
  location: string;
  intro: string[];
  cta: { label: string; href: string };
  responsibilities: {
    heading: string;
    description: string;
    items: { title: string; description: string }[];
  };
  offer: {
    heading: string;
    items: { title: string; description: string }[];
  };
  requirements: {
    heading: string;
    items: string[];
  };
  closing: {
    paragraph: string;
    applyHeading: string;
    applyDescription: string;
  };
}

export function VacatureContent({
  subtitle,
  location,
  intro,
  cta,
  responsibilities,
  offer,
  requirements,
  closing,
}: VacatureContentProps) {
  const [activeResponsibility, setActiveResponsibility] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
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
      setActiveResponsibility((current) => {
        return current === responsibilities.items.length - 1 ? 0 : current + 1;
      });
    }, 5000); // Verspringt elke 5 seconden

    return () => clearInterval(timer);
  }, [isPaused, hasStarted, responsibilities.items.length]);

  const handleStepClick = (index: number) => {
    setActiveResponsibility(index);
    setIsPaused(true); // Stop auto-play once user interacts
  };

  return (
    <>
      {/* Intro */}
      <section className="py-24 md:py-32 bg-transparent" data-bg="bg-[#F1EFEE]">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <div className="flex items-center gap-2 mb-8">
            <MapPin className="w-4 h-4 text-boutique-orange" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] font-sans text-boutique-orange">
              {location}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-8 leading-relaxed">
            {subtitle}
          </h2>
          {intro.map((p, i) => (
            <p key={i} className="text-gray-700 font-light text-lg leading-relaxed mb-6 last:mb-0">
              {p}
            </p>
          ))}
          <div className="mt-10">
            <a
              href={cta.href}
              className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section ref={sectionRef} className="py-24 md:py-32 bg-transparent" data-bg="bg-[#F1EFEE]">
        <div className="container mx-auto px-6 max-w-7xl reveal">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Side - Image and Active Content */}
            <div 
              className="lg:w-1/2 relative"
              onMouseEnter={() => setIsPaused(true)} 
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative h-[500px] md:h-[700px] overflow-hidden shadow-xl">
                <img 
                  src="/images/vacature/office-manager-team.png" 
                  alt="Wat ga je doen"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlapping Content Box */}
              <div className="absolute -bottom-10 right-0 md:-right-12 bg-boutique-stone p-8 md:p-12 shadow-2xl w-[90%] md:w-[85%] z-10 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-6">
                  {responsibilities.items[activeResponsibility].title}
                </h3>
                <div className="w-3 h-3 bg-transparent border border-boutique-orange rotate-45 mb-6" />
                <p className="text-gray-700 font-light leading-relaxed text-base md:text-lg">
                  {responsibilities.items[activeResponsibility].description}
                </p>
                
                {/* Progress bar indication */}
                {!isPaused && hasStarted && (
                  <div 
                    className="absolute bottom-0 left-0 h-1 bg-boutique-orange" 
                    key={`progress-${activeResponsibility}`}
                    style={{ animation: 'shrink 5s linear forwards' }} 
                  />
                )}
              </div>
            </div>

            {/* Right Side - List */}
            <div className="lg:w-1/2 lg:pl-8 mt-24 lg:mt-0 flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block font-sans text-boutique-orange">
                Verantwoordelijkheden
                {!isPaused && hasStarted && <span className="ml-4 opacity-50 font-normal normal-case tracking-normal">Automatisch afspelen...</span>}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-boutique-dark mb-8">
                {responsibilities.heading}
              </h2>
              <p className="text-gray-600 font-light text-lg mb-12 max-w-lg">
                {responsibilities.description}
              </p>

              <div className="flex flex-col border-t border-boutique-dark/10">
                {responsibilities.items.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleStepClick(i)}
                    className={`flex items-center justify-between p-6 md:p-8 border-b border-boutique-dark/10 transition-all duration-500 text-left group ${
                      activeResponsibility === i 
                        ? "bg-[#DFDACE] text-boutique-dark" 
                        : "bg-transparent text-boutique-dark hover:bg-boutique-stone"
                    }`}
                  >
                    <span className={`font-sans text-lg md:text-xl transition-colors ${
                      activeResponsibility === i ? "font-medium" : "font-light group-hover:text-boutique-orange"
                    }`}>
                      {item.title}
                    </span>
                    <span className={`font-serif italic text-2xl md:text-3xl transition-colors ${
                      activeResponsibility === i ? "text-boutique-dark" : "text-boutique-dark/30 group-hover:text-boutique-dark/60"
                    }`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes shrink {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}} />
      </section>

      {/* Interstitial Image (Removed since we use it in the section above now, or we can keep a different one) */}

      {/* What we offer */}
      <section className="py-24 md:py-32 bg-transparent" data-bg="bg-[#E6E4DC]">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-16 text-center">
            {offer.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offer.items.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 border-t-4 border-boutique-stone hover:border-boutique-orange transition-colors shadow-sm group"
              >
                <h3 className="font-serif font-bold text-lg text-boutique-dark mb-3 group-hover:text-boutique-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 md:py-32 bg-transparent" data-bg="bg-[#E6E4DC]">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-12">
            {requirements.heading}
          </h2>
          <div className="space-y-5">
            {requirements.items.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-boutique-orange mt-2.5 shrink-0" />
                <p className="text-gray-700 font-light leading-relaxed text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32 bg-transparent" data-bg="bg-[#F1EFEE]">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <div className="bg-boutique-stone p-10 md:p-16 border-l-4 border-boutique-orange mb-16">
            <p className="text-boutique-dark font-serif text-xl md:text-2xl leading-relaxed italic">
              {closing.paragraph}
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-6">
              {closing.applyHeading}
            </h2>
            <p className="text-gray-700 font-light text-lg leading-relaxed max-w-2xl mx-auto">
              {closing.applyDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
