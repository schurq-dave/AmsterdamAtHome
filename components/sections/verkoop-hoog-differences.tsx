import { ArrowRight } from "lucide-react";
import type { VerkoopHoogDifference } from "@/lib/data/pages/verkoop-hoog";

interface VerkoopHoogDifferencesProps {
  heading: string;
  items: VerkoopHoogDifference[];
}

export function VerkoopHoogDifferences({
  heading,
  items,
}: VerkoopHoogDifferencesProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-5xl reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-20 text-center">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.number}
              className="group relative p-8 md:p-10 bg-white border border-transparent hover:border-boutique-orange/20 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-6 right-8 text-boutique-stone font-serif text-6xl italic opacity-40 group-hover:opacity-70 group-hover:text-boutique-beige transition-all duration-500">
                {item.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-boutique-dark mb-4 pr-12">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
                {item.cta && (
                  <a
                    href={item.cta.href}
                    className="inline-flex items-center gap-2 mt-6 text-boutique-orange font-sans font-bold uppercase tracking-[0.15em] text-xs hover:text-boutique-dark transition-colors"
                  >
                    {item.cta.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-boutique-orange group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
