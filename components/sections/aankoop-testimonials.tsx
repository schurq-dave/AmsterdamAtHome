import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

interface AankoopTestimonialsProps {
  heading: string;
  testimonials: Testimonial[];
}

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5 text-boutique-orange">
      {Array.from({ length: stars }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5" fill="currentColor" />
      ))}
    </div>
  );
}

export function AankoopTestimonials({
  heading,
  testimonials,
}: AankoopTestimonialsProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-20 text-center reveal">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`bg-white p-10 md:p-14 shadow-xl border-t-4 ${
                testimonial.borderVariant === "orange"
                  ? "border-boutique-orange"
                  : "border-boutique-stone"
              } reveal relative group hover:-translate-y-2 transition-transform duration-500`}
            >
              <Quote className="w-12 h-12 text-boutique-stone absolute top-8 right-8 opacity-50 group-hover:text-boutique-beige transition-colors" />
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-boutique-dark mb-2">
                  {testimonial.name}
                </h3>
                <div className="flex items-center gap-2">
                  <StarRating stars={testimonial.stars} />
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400 ml-2 border-l border-gray-200 pl-3">
                    Score: {testimonial.score}
                  </span>
                </div>
              </div>
              <div className="text-gray-600 font-light leading-relaxed text-[15px] space-y-4 italic font-serif">
                {testimonial.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
