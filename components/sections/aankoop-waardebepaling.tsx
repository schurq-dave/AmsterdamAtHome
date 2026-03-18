import { ArrowRight } from "lucide-react";

interface AankoopWaardebepalingProps {
  heading: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function AankoopWaardebepaling({
  heading,
  description,
}: AankoopWaardebepalingProps) {
  return (
    <section
      id="waardebepaling"
      className="pt-24 md:pt-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-6xl reveal">
        <div className="lg:w-1/3">
          <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-6">
            {heading}
          </h2>
          <p className="text-gray-700 font-light text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
