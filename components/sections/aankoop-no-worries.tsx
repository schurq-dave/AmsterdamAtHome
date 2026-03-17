import { Check } from "lucide-react";
import type { UspItem } from "@/lib/types";

interface AankoopNoWorriesProps {
  heading: string;
  subheading: string;
  description?: string;
  items: UspItem[];
}

export function AankoopNoWorries({
  heading,
  subheading,
  description,
  items,
}: AankoopNoWorriesProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6 text-center reveal">
          {heading}
        </h2>
        {description && (
          <p className="text-gray-700 font-light text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-center reveal">
            {description}
          </p>
        )}
        <h3 className="text-xl md:text-2xl font-sans font-bold uppercase tracking-wider text-boutique-orange mb-16 text-center reveal">
          {subheading}
        </h3>
        <div className="space-y-10 reveal">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-6 p-8 bg-boutique-paper border border-boutique-dark/5 hover:border-boutique-orange/30 transition-colors"
            >
              <div className="w-10 h-10 flex-shrink-0 border-2 border-boutique-orange rounded-full flex items-center justify-center text-boutique-orange">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-bold uppercase tracking-wider text-boutique-dark mb-2 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-700 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
