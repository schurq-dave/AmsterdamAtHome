import { ArrowRight } from "lucide-react";

interface AankoopWaardebepalingProps {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function AankoopWaardebepaling({
  heading,
  description,
  ctaLabel,
  ctaHref,
}: AankoopWaardebepalingProps) {
  return (
    <section
      id="waardebepaling"
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">
          {heading}
        </h2>
        <p className="text-gray-700 font-light text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-3 bg-boutique-orange text-white px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-dark transition-colors"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
