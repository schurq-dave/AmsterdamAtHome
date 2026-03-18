import { ArrowRight, FileText } from "lucide-react";

interface VerkoopHoogDownloadProps {
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function VerkoopHoogDownload({
  heading,
  description,
  ctaLabel,
  ctaHref,
}: VerkoopHoogDownloadProps) {
  return (
    <section
      id="download"
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center reveal">
        <span className="inline-block mb-8 text-boutique-beige">
          <FileText className="w-12 h-12 mx-auto" />
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">
          {heading}
        </h2>
        <p className="text-gray-700 font-light text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {description}
        </p>
        <a
          href={ctaHref}
          className="inline-flex items-center gap-3 bg-boutique-dark text-white px-10 py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-boutique-orange transition-colors"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
