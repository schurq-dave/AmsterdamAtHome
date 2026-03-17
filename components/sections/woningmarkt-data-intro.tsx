import { BarChart2 } from "lucide-react";

interface WoningmarktDataIntroProps {
  heading: string;
  paragraph: string;
}

export function WoningmarktDataIntro({
  heading,
  paragraph,
}: WoningmarktDataIntroProps) {
  return (
    <section
      className="py-20 md:py-28 bg-transparent border-b border-boutique-dark/10"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-4xl reveal">
        <div className="flex items-center gap-3 mb-6">
          <BarChart2 className="w-5 h-5 text-boutique-orange" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-orange">
            Data &amp; Inzicht
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-8 leading-tight">
          {heading}
        </h2>
        <p className="text-gray-700 font-light leading-relaxed text-base md:text-lg">
          {paragraph}
        </p>
      </div>
    </section>
  );
}
