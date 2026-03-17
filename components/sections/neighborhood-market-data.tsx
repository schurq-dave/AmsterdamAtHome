import { Check, ArrowRight } from "lucide-react";

interface NeighborhoodMarketDataProps {
  heading: string;
  bullets: string[];
  ctaLabel: string;
}

export function NeighborhoodMarketData({
  heading,
  bullets,
  ctaLabel,
}: NeighborhoodMarketDataProps) {
  return (
    <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-boutique-beige text-white p-10 md:p-20 shadow-2xl reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
                {heading}
              </h2>
              <div className="space-y-6 mb-12">
                {bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <p className="text-white/90 font-light text-lg">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 text-boutique-dark shadow-xl">
              <h3 className="font-serif text-2xl mb-6">Ontvang het rapport</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Uw naam"
                    className="w-full border-b border-boutique-dark/20 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-boutique-orange transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mailadres"
                    className="w-full border-b border-boutique-dark/20 bg-transparent px-0 py-3 text-base focus:outline-none focus:border-boutique-orange transition-colors"
                  />
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-3 bg-boutique-orange text-white px-8 py-4 font-sans font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-boutique-dark transition-colors mt-4"
                >
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
