import { Star, StarHalf, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";

interface KlantenReviewsProps {
  heading?: string;
  score: string;
  reviewCount: string;
  intro: string;
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
      className={`bg-white p-10 md:p-14 shadow-xl border-t-4 ${
        testimonial.borderVariant === "orange" ? "border-boutique-orange" : "border-boutique-stone"
      } reveal relative group hover:-translate-y-2 transition-transform duration-500`}
    >
      <Quote className="w-12 h-12 text-boutique-stone absolute top-8 right-8 opacity-50 group-hover:text-boutique-beige transition-colors" />
      <div className="mb-8">
        <h3 className="font-serif text-2xl font-bold text-boutique-dark mb-2">{testimonial.name}</h3>
        <div className="flex items-center gap-2 flex-wrap">
          <StarRating stars={testimonial.stars} />
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-gray-400 ml-2 border-l border-gray-200 pl-3 flex items-center gap-2">
            Score: {testimonial.score}
            {testimonial.platform === "google" && (
              <span className="inline-flex items-center gap-1.5 bg-white border border-gray-100 px-2 py-1 rounded-sm ml-2 shadow-sm text-gray-600 capitalize">
                <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google Review
              </span>
            )}
            {testimonial.platform === "funda" && (
              <span className="inline-flex items-center gap-1.5 bg-[#f7a100]/10 border border-[#f7a100]/20 px-2 py-1 rounded-sm ml-2 text-[#f7a100] capitalize">
                Funda Review
              </span>
            )}
          </span>
        </div>
      </div>
      <div className="text-gray-600 font-light leading-relaxed text-[15px] space-y-4 italic font-serif">
        {testimonial.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function KlantenReviews({
  heading,
  score,
  reviewCount,
  intro,
  testimonials,
}: KlantenReviewsProps) {
  const midpoint = Math.ceil(testimonials.length / 2);
  const leftColumn = testimonials.slice(0, midpoint);
  const rightColumn = testimonials.slice(midpoint);

  return (
    <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-7xl">
        {heading && (
          <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-16 text-center reveal">
            {heading}
          </h2>
        )}
        <div className="max-w-4xl mx-auto text-center mb-24 reveal">
          <div className="flex justify-center mb-8">
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
          <p className="text-gray-700 font-light text-lg md:text-xl leading-relaxed">{intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8 lg:space-y-12">
            {leftColumn.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
          <div className="space-y-8 lg:space-y-12 md:mt-16">
            {rightColumn.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>

        <div className="mt-20 text-center reveal">
          <a
            href="https://www.funda.nl/makelaars/amsterdam/24755-amsterdam-at-home-makelaars/beoordelingen/verkoop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-boutique-orange text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-dark transition-colors shadow-lg group"
          >
            Lees meer reviews op Funda
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
