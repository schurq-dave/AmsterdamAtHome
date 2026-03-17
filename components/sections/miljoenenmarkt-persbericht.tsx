import { ArrowRight, Newspaper, Calendar, User } from "lucide-react";

interface MiljoenenmarktPersberichtProps {
  heading: string;
  datum: string;
  author: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
}

export function MiljoenenmarktPersbericht({
  heading,
  datum,
  author,
  title,
  ctaLabel,
  ctaHref,
}: MiljoenenmarktPersberichtProps) {
  return (
    <section
      className="py-20 md:py-28 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-3xl reveal">
        <div className="flex items-center gap-3 mb-10">
          <Newspaper className="w-5 h-5 text-boutique-orange" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-orange">
            {heading}
          </span>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-boutique-orange group hover:shadow-2xl transition-shadow">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-sans text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-boutique-beige" />
              {datum}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-boutique-beige" />
              {author}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-8 leading-snug">
            {title}
          </h3>

          <a
            href={ctaHref}
            className="group/btn inline-flex items-center gap-3 px-6 py-3 border border-boutique-dark text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-dark hover:text-white transition-colors"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
