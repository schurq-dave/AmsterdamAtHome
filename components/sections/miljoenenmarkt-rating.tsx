import { Star, ArrowRight } from "lucide-react";

interface MiljoenenmarktRatingProps {
  heading: string;
  score: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function MiljoenenmarktRating({
  heading,
  score,
  description,
  ctaLabel,
  ctaHref,
}: MiljoenenmarktRatingProps) {
  return (
    <section
      className="py-20 md:py-28 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center reveal">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-orange mb-4 block">
          {heading}
        </span>

        <div className="flex items-center justify-center gap-2 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 text-boutique-orange"
              fill="currentColor"
            />
          ))}
        </div>

        <p className="text-6xl md:text-8xl font-serif text-boutique-dark mb-6 leading-none">
          {score}
        </p>

        <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-10 max-w-xl mx-auto">
          {description}
        </p>

        <a
          href={ctaHref}
          className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
