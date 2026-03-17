import { ArrowRight } from "lucide-react";

interface VerkoopIntroProps {
  paragraphs: string[];
  cta: { label: string; href: string };
}

export function VerkoopIntro({ paragraphs, cta }: VerkoopIntroProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-gray-700 font-light text-lg leading-relaxed ${
              i < paragraphs.length - 1 ? "mb-6" : "mb-10"
            }`}
          >
            {p}
          </p>
        ))}
        <a
          href={cta.href}
          className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
        >
          {cta.label}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
