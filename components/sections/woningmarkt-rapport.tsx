import { Check } from "lucide-react";

interface WoningmarktRapportProps {
  heading: string;
  description: string;
  bulletPoints: string[];
}

export function WoningmarktRapport({
  heading,
  description,
  bulletPoints,
}: WoningmarktRapportProps) {
  return (
    <section
      className="py-20 md:py-28 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6 leading-tight">
            {heading}
          </h2>
          <p className="text-gray-700 font-light leading-relaxed text-base md:text-lg mb-10 max-w-3xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {bulletPoints.map((point) => (
            <div
              key={point}
              className="bg-white p-6 shadow-md border-l-4 border-boutique-orange flex items-start gap-4"
            >
              <div className="w-7 h-7 flex-shrink-0 border border-boutique-beige rounded-full flex items-center justify-center text-boutique-orange">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm text-gray-700 font-light leading-relaxed">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
