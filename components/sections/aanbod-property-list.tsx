"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Home } from "lucide-react";
import type { AanbodProperty, FilterOption } from "@/lib/types";
import { AanbodPropertyCard } from "./aanbod-property-card";

interface AanbodPropertyListProps {
  properties: AanbodProperty[];
  buurtFilters: FilterOption[];
  prijsFilters: FilterOption[];
}

export function AanbodPropertyList({ properties, buurtFilters, prijsFilters }: AanbodPropertyListProps) {
  const [selectedBuurt, setSelectedBuurt] = useState("alle");
  const [selectedPrijs, setSelectedPrijs] = useState("alle");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show when close to top
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProperties = useMemo(
    () =>
      properties.filter((p) => {
        const buurtMatch = selectedBuurt === "alle" || p.filterBuurt === selectedBuurt;
        const prijsMatch = selectedPrijs === "alle" || p.filterPrijs === selectedPrijs;
        return buurtMatch && prijsMatch;
      }),
    [properties, selectedBuurt, selectedPrijs],
  );

  return (
    <>
      {/* Sticky Filter Bar */}
      <section 
        className={`py-8 bg-boutique-paper border-b border-boutique-dark/10 sticky z-40 transition-all duration-300 ease-in-out ${
          isVisible ? "top-[73px] md:top-[81px]" : "top-[-150px]"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="text-boutique-dark font-sans font-bold text-xs uppercase tracking-widest w-full md:w-auto mb-2 md:mb-0">
              Filter woningen
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <select
                value={selectedBuurt}
                onChange={(e) => setSelectedBuurt(e.target.value)}
                className="bg-white border border-boutique-dark/10 text-boutique-dark px-6 py-3 font-sans text-sm focus:outline-none focus:border-boutique-orange transition-colors rounded-none shadow-sm min-w-[200px]"
                aria-label="Filter op buurt"
              >
                {buurtFilters.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
              <select
                value={selectedPrijs}
                onChange={(e) => setSelectedPrijs(e.target.value)}
                className="bg-white border border-boutique-dark/10 text-boutique-dark px-6 py-3 font-sans text-sm focus:outline-none focus:border-boutique-orange transition-colors rounded-none shadow-sm min-w-[200px]"
                aria-label="Filter op prijs"
              >
                {prijsFilters.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-16 md:py-24 bg-transparent" data-bg="bg-boutique-stone">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {filteredProperties.map((property) => (
              <AanbodPropertyCard key={property.title} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-32 reveal">
              <Home className="w-16 h-16 text-boutique-stone mx-auto mb-6" />
              <h3 className="text-3xl font-serif text-boutique-dark mb-4">Geen woningen gevonden</h3>
              <p className="text-gray-500 font-light max-w-md mx-auto">
                Pas uw filters aan of schrijf u in voor onze nieuwsbrief om direct op de hoogte te zijn van nieuw aanbod
                in uw favoriete buurt.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
