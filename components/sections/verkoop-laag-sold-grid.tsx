/* eslint-disable @next/next/no-img-element */

import { Home } from "lucide-react";

interface SoldProperty {
  image: string;
  title: string;
  location: string;
  price: string;
}

interface VerkoopLaagSoldGridProps {
  heading: string;
  properties: SoldProperty[];
}

export function VerkoopLaagSoldGrid({
  heading,
  properties,
}: VerkoopLaagSoldGridProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-6xl reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-20 text-center">
          {heading}
        </h2>

        {properties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.title}
                className="bg-white shadow-sm hover:shadow-lg transition-shadow group overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover-zoom-img"
                  />
                  <span className="absolute top-4 left-4 bg-boutique-dark text-white text-[10px] font-bold uppercase tracking-[0.2em] font-sans px-4 py-1.5">
                    Verkocht
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-boutique-dark mb-1">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light mb-3">
                    {property.location}
                  </p>
                  <p className="text-boutique-orange font-sans font-bold text-sm tracking-wide">
                    {property.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 reveal">
            <Home className="w-16 h-16 text-boutique-stone mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-4">
              Binnenkort tonen wij hier onze recente verkopen
            </h3>
            <p className="text-gray-500 font-light max-w-md mx-auto">
              Heeft u uw woning via Amsterdam at Home verkocht? Wij zijn trots op
              elk succesvol verkocht pand.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
