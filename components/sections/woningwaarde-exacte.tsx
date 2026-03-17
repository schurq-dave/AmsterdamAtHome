import { Check } from "lucide-react";

interface WoningwaardeExacteProps {
  heading: string;
  paragraphs: string[];
  bullets: string[];
  trailingParagraph: string;
}

export function WoningwaardeExacte({
  heading,
  paragraphs,
  bullets,
  trailingParagraph,
}: WoningwaardeExacteProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent overflow-hidden"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-16 text-center reveal">
          {heading}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="slide-in-subtle">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-gray-700 font-light text-lg leading-relaxed mb-6"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="bg-white p-10 md:p-14 shadow-xl border-t-4 border-boutique-orange reveal">
            <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-boutique-orange mb-8">
              Meegenomen in taxatierapport:
            </h3>
            <div className="space-y-6 mb-10">
              {bullets.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-boutique-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-boutique-orange" />
                  </div>
                  <p className="text-gray-700 font-light leading-relaxed text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-boutique-dark/10">
              <p className="text-gray-600 font-light text-sm leading-relaxed italic">
                {trailingParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
