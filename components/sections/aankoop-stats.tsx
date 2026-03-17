import { ArrowRight } from "lucide-react";

interface AankoopStatsProps {
  stat: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function AankoopStats({
  stat,
  heading,
  description,
  ctaLabel,
  ctaHref,
}: AankoopStatsProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-10 reveal">
          <span className="inline-block bg-boutique-orange text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] font-sans mb-6">
            {stat}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6 reveal">
          {heading}
        </h2>
        <p className="text-gray-700 font-light text-lg leading-relaxed mb-10 max-w-2xl mx-auto reveal">
          {description}
        </p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-3 bg-boutique-dark text-white px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors reveal"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
