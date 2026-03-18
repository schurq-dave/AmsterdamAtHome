import { ArrowRight } from "lucide-react";

interface VerschilItem {
  number: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  image?: string;
}

interface VerkoopLaag5VerschillenProps {
  heading: string;
  items: VerschilItem[];
}

export function VerkoopLaag5Verschillen({
  heading,
  items,
}: VerkoopLaag5VerschillenProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-16 md:mb-24 text-center reveal">
          {heading}
        </h2>
        
        <div className="flex flex-col border-t border-boutique-dark/10 reveal">
          {items.map((item, index) => (
            <div
              key={item.number}
              className="border-b border-boutique-dark/10 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center group"
            >
              {/* Number */}
              <div className="w-12 md:w-20 flex-shrink-0">
                <span className="text-lg md:text-xl font-sans text-boutique-dark/60 font-medium group-hover:text-boutique-dark transition-colors">
                  {item.number}
                </span>
              </div>
              
              {/* Title */}
              <div className="w-full md:w-[25%] flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-serif text-boutique-dark">
                  {item.title}
                </h3>
              </div>
              
              {/* Description */}
              <div className="flex-1">
                <p className="text-gray-700 font-light text-[15px] md:text-base leading-relaxed max-w-lg">
                  {item.description}
                </p>
                
                {item.cta && (
                  <a
                    href={item.cta.href}
                    className="inline-flex items-center gap-3 text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-[11px] hover:text-boutique-orange transition-colors mt-6"
                  >
                    {item.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              {/* Image */}
              {item.image && (
                <div className="w-full md:w-[25%] flex-shrink-0 mt-6 md:mt-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 md:h-40 object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
