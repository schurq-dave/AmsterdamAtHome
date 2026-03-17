import { ArrowRight } from "lucide-react";

interface CtaBlock {
  heading: string;
  ctaLabel: string;
  ctaHref: string;
}

interface BeleggingCtaBlocksProps {
  blocks: CtaBlock[];
}

export function BeleggingCtaBlocks({ blocks }: BeleggingCtaBlocksProps) {
  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {blocks.map((block) => (
            <div
              key={block.heading}
              className="bg-boutique-paper p-10 md:p-14 border-t-4 border-boutique-beige shadow-lg hover:border-boutique-orange transition-colors group reveal"
            >
              <h3 className="text-xl md:text-2xl font-serif font-bold text-boutique-dark mb-6 uppercase tracking-wide">
                {block.heading}
              </h3>
              <a
                href={block.ctaHref}
                className="inline-flex items-center gap-2 font-sans font-bold uppercase tracking-[0.2em] text-xs text-boutique-dark hover:text-boutique-orange transition-colors border-b-2 border-boutique-dark group-hover:border-boutique-orange pb-1"
              >
                {block.ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
