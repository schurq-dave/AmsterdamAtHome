import { ArrowRight } from "lucide-react";

interface VerkoopHoogStatsProps {
  heading: string;
  description: string;
  stat: string;
  ctaLabel: string;
  ctaHref: string;
}

export function VerkoopHoogStats({
  heading,
  description,
  stat,
  ctaLabel,
  ctaHref,
}: VerkoopHoogStatsProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-dark"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-8 reveal">
          <span className="inline-block bg-boutique-orange text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] font-sans">
            {stat}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 reveal">
          {heading}
        </h2>
        <p className="text-white/70 font-light text-lg leading-relaxed mb-10 max-w-2xl mx-auto reveal">
          {description}
        </p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-3 bg-white text-boutique-dark px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange hover:text-white transition-colors reveal"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
