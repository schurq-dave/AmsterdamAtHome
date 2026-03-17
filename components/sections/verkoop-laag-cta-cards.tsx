import { ArrowRight } from "lucide-react";

interface CtaCard {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

interface VerkoopLaagCtaCardsProps {
  cards: CtaCard[];
}

export function VerkoopLaagCtaCards({ cards }: VerkoopLaagCtaCardsProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.heading}
              className="bg-white p-10 md:p-12 shadow-sm border-t-4 border-boutique-orange hover:shadow-lg transition-shadow group reveal"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-4 leading-snug">
                {card.heading}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                {card.description}
              </p>
              <a
                href={card.ctaHref}
                className="inline-flex items-center gap-3 bg-boutique-dark text-white px-8 py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
              >
                {card.ctaLabel}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
