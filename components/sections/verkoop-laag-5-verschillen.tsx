import { ArrowRight } from "lucide-react";

interface VerschilItem {
  number: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
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
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-24 text-center reveal">
          {heading}
        </h2>
        
        <div className="space-y-12 reveal">
          {items.map((item, index) => (
            <div
              key={item.number}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Number and Content */}
              <div className="flex-1">
                <div className="flex items-start gap-6 md:gap-8 mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-full bg-boutique-orange text-white flex items-center justify-center">
                    <span className="font-serif italic text-2xl md:text-3xl font-bold">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-boutique-dark leading-tight pt-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed mb-8 md:pl-24">
                  {item.description}
                </p>
                
                {item.cta && (
                  <a
                    href={item.cta.href}
                    className="inline-flex items-center gap-3 text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-[11px] hover:text-boutique-orange transition-colors md:ml-24"
                  >
                    {item.cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Visual Divider */}
              <div className="flex-1 hidden md:block">
                <div className="relative h-32">
                  <div className="absolute inset-0 bg-gradient-to-b from-boutique-orange/10 to-boutique-stone/10 rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-boutique-orange/20 font-serif text-6xl italic font-bold">
                      {item.number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
