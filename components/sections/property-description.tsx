"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PropertyDescriptionProps {
  description: string;
  fullDescription?: string[];
}

export function PropertyDescription({ description, fullDescription }: PropertyDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // If there's no full description, or it's very short, we might not need to hide it
  // But let's assume we show the first paragraph and hide the rest.
  const paragraphs = fullDescription || [
    "Wonen in Amsterdam is een droom voor velen. Dit schitterende object biedt alles wat u zoekt en meer. Met prachtige authentieke details en hoogwaardige afwerking is dit een unieke kans op de woningmarkt.",
    "De ruime opzet en de optimale lichtinval zorgen voor een ongekend wooncomfort. De woning is met veel liefde en zorg onderhouden, waardoor u hier direct kunt intrekken en genieten van alles wat Amsterdam te bieden heeft.",
    "Neem contact met ons op voor meer informatie of plan direct een bezichtiging in om de sfeer zelf te komen proeven. Onze makelaars staan voor u klaar."
  ];

  // If there's only 1 paragraph, no need for read more
  const needsExpansion = paragraphs.length > 1;
  
  const visibleParagraphs = isExpanded ? paragraphs : [paragraphs[0]];

  return (
    <div className="mb-20 reveal">
      <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-8">De Woning</h2>
      <div className="prose max-w-none">
        <p className="text-xl text-gray-600 font-light leading-relaxed mb-8 italic">
          {description}
        </p>
        
        <div className="space-y-6 text-base text-gray-700 font-light leading-loose relative">
          {visibleParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          
          {!isExpanded && needsExpansion && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-boutique-paper to-transparent pointer-events-none" />
          )}
        </div>
        
        {needsExpansion && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex items-center gap-2 font-sans font-bold uppercase tracking-[0.2em] text-xs text-boutique-orange hover:text-boutique-dark transition-colors"
          >
            {isExpanded ? (
              <>Lees minder <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Lees volledige omschrijving <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}