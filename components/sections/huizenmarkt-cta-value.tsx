import { ArrowRight } from "lucide-react";

interface HuizenmarktCtaValueProps {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}

export function HuizenmarktCtaValue({ heading, ctaLabel, ctaHref }: HuizenmarktCtaValueProps) {
  return (
    <section className="py-20 md:py-28 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-10">{heading}</h2>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-3 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs px-10 py-4 hover:bg-boutique-orange transition-colors"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
