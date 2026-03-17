import { ArrowRight } from "lucide-react";

interface CtaCard {
  label: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

interface WoningwaardeCtaCardsProps {
  cards: CtaCard[];
}

export function WoningwaardeCtaCards({ cards }: WoningwaardeCtaCardsProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent overflow-hidden"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-boutique-dark/10 border border-boutique-dark/10">
          {cards.map((card, index) => (
            <div
              key={card.label}
              className="bg-white p-12 md:p-16 group hover:bg-boutique-stone/10 transition-colors reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-orange mb-6 block">
                    {card.label}
                  </span>
                  <p className="text-xl md:text-2xl font-serif text-boutique-dark leading-relaxed mb-12">
                    {card.description}
                  </p>
                </div>
                <div>
                  <a
                    href={card.ctaHref}
                    className="inline-flex items-center gap-4 text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-xs hover:text-boutique-orange transition-colors border-b border-boutique-dark/20 pb-2 group-hover:border-boutique-orange"
                  >
                    {card.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
