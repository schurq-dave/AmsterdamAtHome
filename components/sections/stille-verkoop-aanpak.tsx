import { ArrowRight } from "lucide-react";

interface AanpakStep {
  number: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
  image?: string;
}

interface StilleVerkoopAanpakProps {
  heading: string;
  intro: string;
  steps: AanpakStep[];
}

export function StilleVerkoopAanpak({
  heading,
  intro,
  steps,
}: StilleVerkoopAanpakProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-5xl reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-8 text-center">
          {heading}
        </h2>
        <p className="text-gray-700 font-light text-lg leading-relaxed text-center max-w-3xl mx-auto mb-20">
          {intro}
        </p>
        <div className="space-y-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white border-l-4 border-boutique-orange shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              {step.image && (
                <div className="w-full md:w-2/5 h-64 md:h-full min-h-[250px] overflow-hidden relative">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                </div>
              )}
              <div className={`p-8 md:py-12 ${step.image ? "md:w-3/5 md:pl-0" : "w-full"} flex gap-6`}>
                <span className="text-boutique-beige font-serif text-4xl md:text-5xl italic font-bold shrink-0">
                  {step.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-boutique-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 font-light leading-relaxed text-lg mb-4">
                    {step.description}
                  </p>
                  {step.cta && (
                    <a
                      href={step.cta.href}
                      className="inline-flex items-center gap-2 text-boutique-orange font-sans font-bold uppercase tracking-[0.2em] text-xs hover:text-boutique-dark transition-colors"
                    >
                      {step.cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
