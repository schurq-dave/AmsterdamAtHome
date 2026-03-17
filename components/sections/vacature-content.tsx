import { MapPin, ArrowRight } from "lucide-react";

interface VacatureContentProps {
  subtitle: string;
  location: string;
  intro: string[];
  cta: { label: string; href: string };
  responsibilities: {
    heading: string;
    description: string;
    items: string[];
  };
  offer: {
    heading: string;
    items: { title: string; description: string }[];
  };
  requirements: {
    heading: string;
    items: string[];
  };
  closing: {
    paragraph: string;
    applyHeading: string;
    applyDescription: string;
  };
}

export function VacatureContent({
  subtitle,
  location,
  intro,
  cta,
  responsibilities,
  offer,
  requirements,
  closing,
}: VacatureContentProps) {
  return (
    <>
      {/* Intro */}
      <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-paper">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <div className="flex items-center gap-2 mb-8">
            <MapPin className="w-4 h-4 text-boutique-orange" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] font-sans text-boutique-orange">
              {location}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-8 leading-relaxed">
            {subtitle}
          </h2>
          {intro.map((p, i) => (
            <p key={i} className="text-gray-700 font-light text-lg leading-relaxed mb-6 last:mb-0">
              {p}
            </p>
          ))}
          <div className="mt-10">
            <a
              href={cta.href}
              className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10" data-bg="bg-boutique-stone">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-4">
            {responsibilities.heading}
          </h2>
          <p className="text-gray-600 font-light text-lg mb-12">{responsibilities.description}</p>
          <div className="space-y-6">
            {responsibilities.items.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start group p-6 border-l-4 border-boutique-stone hover:border-boutique-orange transition-colors bg-white shadow-sm"
              >
                <span className="text-boutique-beige font-serif text-2xl italic font-bold min-w-[2rem] group-hover:text-boutique-orange transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-700 font-light leading-relaxed text-[15px] pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interstitial Image */}
      <section className="bg-transparent" data-bg="bg-boutique-stone">
        <div className="container mx-auto px-6 max-w-6xl reveal">
          <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden shadow-2xl">
            <img 
              src="/images/vacature/office-manager-team.png" 
              alt="Team Amsterdam at Home aan het werk" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10" data-bg="bg-boutique-paper">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-16 text-center">
            {offer.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offer.items.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 border-t-4 border-boutique-stone hover:border-boutique-orange transition-colors shadow-sm group"
              >
                <h3 className="font-serif font-bold text-lg text-boutique-dark mb-3 group-hover:text-boutique-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10" data-bg="bg-boutique-stone">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-12">
            {requirements.heading}
          </h2>
          <div className="space-y-5">
            {requirements.items.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-boutique-orange mt-2.5 shrink-0" />
                <p className="text-gray-700 font-light leading-relaxed text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10" data-bg="bg-boutique-paper">
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <div className="bg-boutique-stone p-10 md:p-16 border-l-4 border-boutique-orange mb-16">
            <p className="text-boutique-dark font-serif text-xl md:text-2xl leading-relaxed italic">
              {closing.paragraph}
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-6">
              {closing.applyHeading}
            </h2>
            <p className="text-gray-700 font-light text-lg leading-relaxed max-w-2xl mx-auto">
              {closing.applyDescription}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
