import { ArrowRight } from "lucide-react";

interface WoningwaardeIntroProps {
  heading: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export function WoningwaardeIntro({
  heading,
  subtitle,
  ctaLabel,
  ctaHref,
}: WoningwaardeIntroProps) {
  return (
    <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Left side - Text content */}
          <div className="md:col-span-6 slide-in-subtle">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-orange mb-6 block">
              {subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-boutique-dark mb-8 leading-[1.1]">
              {heading}
            </h2>
            
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-10 italic">
              Ontdek binnen enkele minuten de actuele waarde van uw Amsterdamse woning, gebaseerd op onze realtime data.
            </p>

            <a
              href={ctaHref}
              className="group/btn inline-flex items-center gap-4 border-b border-boutique-dark pb-2 text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-xs hover:text-boutique-orange hover:border-boutique-orange transition-colors"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>

          {/* Right side - Editorial Image */}
          <div className="md:col-span-6 reveal">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto group">
              {/* Offset decorative border */}
              <div className="absolute -inset-4 border border-boutique-stone/50 z-0 transition-transform duration-700 group-hover:scale-105" />
              
              <div className="w-full h-full relative z-10 overflow-hidden">
                <img
                  src="/images/woningwaarde-meeting.png"
                  alt="Woningwaarde calculator"
                  className="w-full h-full object-cover grayscale-[20%] contrast-110 hover-zoom-img"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-8 shadow-xl z-20 border-t-2 border-boutique-orange">
                <span className="block font-serif text-4xl text-boutique-dark mb-1">5 min</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-sans">
                  Gratis Resultaat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
