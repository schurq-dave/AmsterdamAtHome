import { ArrowRight } from "lucide-react";
import { AankoopRapportForm } from "@/components/forms/aankoop-rapport-form";

interface BuurtOption {
  value: string;
  label: string;
}

interface AankoopWoningSectionProps {
  heading: string;
  paragraph: string;
  ctaLabel: string;
  ctaHref: string;
  buurtOptions: BuurtOption[];
}

export function AankoopWoningSection({
  heading,
  paragraph,
  ctaLabel,
  ctaHref,
  buurtOptions,
}: AankoopWoningSectionProps) {
  // Split paragraph by double newlines to render multiple paragraphs
  const paragraphs = paragraph.split('\n\n');

  return (
    <section
      id="aankoop-form"
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">
              {heading}
            </h2>
            <div className="mb-10">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-gray-700 font-light text-lg leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
            <a
              href={ctaHref}
              className="inline-flex items-center gap-3 text-boutique-dark group font-sans"
            >
              <span className="border-b-2 border-boutique-dark pb-1 text-[11px] font-bold uppercase tracking-[0.2em] group-hover:text-boutique-orange group-hover:border-boutique-orange transition-all duration-300">
                {ctaLabel}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:text-boutique-orange" />
            </a>
          </div>
          <div className="reveal">
            <AankoopRapportForm buurtOptions={buurtOptions} />
          </div>
        </div>
      </div>
    </section>
  );
}
