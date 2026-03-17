import { ArrowRight } from "lucide-react";

interface BeleggingCtaSimpleProps {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}

export function BeleggingCtaSimple({ heading, ctaLabel, ctaHref }: BeleggingCtaSimpleProps) {
  return (
    <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-sand">
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-10">{heading}</h2>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-3 bg-boutique-dark text-white px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors group"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
