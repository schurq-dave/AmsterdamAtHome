"use client";

import { useRef } from "react";
import { Star, StarHalf, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/types";

interface BeleggingReviewsCarouselProps {
  score: string;
  reviewCount: string;
  testimonials: Testimonial[];
}

function StarRating({ stars }: { stars: number }) {
  const fullStars = Math.floor(stars);
  const hasHalf = stars % 1 !== 0;

  return (
    <div className="flex gap-0.5 text-boutique-orange">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5" fill="currentColor" />
      ))}
      {hasHalf && <StarHalf className="w-3.5 h-3.5" fill="currentColor" />}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className={`min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] flex-shrink-0 bg-white p-10 md:p-14 shadow-xl border-t-4 ${
        testimonial.borderVariant === "orange"
          ? "border-boutique-orange"
          : "border-boutique-stone"
      } relative group`}
    >
      <Quote className="w-12 h-12 text-boutique-stone absolute top-8 right-8 opacity-50" />
      <div className="mb-6">
        <h3 className="font-serif text-xl font-bold text-boutique-dark mb-2">
          {testimonial.name}
        </h3>
        <div className="flex items-center gap-2">
          <StarRating stars={testimonial.stars} />
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400 ml-2 border-l border-gray-200 pl-3">
            Score: {testimonial.score}
          </span>
        </div>
      </div>
      <div className="text-gray-600 font-light leading-relaxed text-[15px] space-y-2 italic font-serif">
        {testimonial.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function BeleggingReviewsCarousel({
  score,
  reviewCount,
  testimonials,
}: BeleggingReviewsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-center mb-12 reveal">
          <div className="bg-boutique-stone text-boutique-dark px-6 py-3 rounded-full flex items-center gap-3 shadow-sm border border-white/50">
            <span className="font-bold font-sans text-xl">{score}</span>
            <div className="flex gap-1 text-boutique-orange">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4" fill="currentColor" />
              ))}
            </div>
            <span className="text-xs font-sans uppercase tracking-widest text-gray-500 ml-2">
              Uit {reviewCount} reviews
            </span>
          </div>
        </div>

        <div className="relative reveal">
          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4">
            <button
              onClick={() => scroll(-1)}
              className="w-12 h-12 rounded-full border border-boutique-dark/20 bg-white hover:bg-boutique-paper flex items-center justify-center transition-all shadow-lg"
              aria-label="Vorige review"
            >
              <ChevronLeft className="w-6 h-6 text-boutique-dark" />
            </button>
          </div>
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4">
            <button
              onClick={() => scroll(1)}
              className="w-12 h-12 rounded-full border border-boutique-dark/20 bg-white hover:bg-boutique-paper flex items-center justify-center transition-all shadow-lg"
              aria-label="Volgende review"
            >
              <ChevronRight className="w-6 h-6 text-boutique-dark" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden flex gap-6 md:gap-8 pb-4 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="snap-center flex-shrink-0"
                style={{ scrollSnapAlign: "center" }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
