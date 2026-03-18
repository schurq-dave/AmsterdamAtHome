import type { AboutDifference } from "@/lib/types";

interface AboutDifferencesProps {
  heading: string;
  items: AboutDifference[];
}

export function AboutDifferences({ heading, items }: AboutDifferencesProps) {
  return (
    <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-6xl reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-16 md:mb-24 text-center">{heading}</h2>
        
        <div className="flex flex-col border-t border-boutique-dark/10">
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
