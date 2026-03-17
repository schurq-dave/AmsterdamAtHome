import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data/site-config";

interface MiljoenenmarktHeroProps {
  label: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaLabel: string;
  ctaHref: string;
}

export function MiljoenenmarktHero({
  label,
  title,
  subtitle,
  backgroundImage,
  ctaLabel,
  ctaHref,
}: MiljoenenmarktHeroProps) {
  return (
    <section
      className="relative bg-boutique-stone pb-6 pt-32 px-4 h-[55vh] md:h-[70vh] flex flex-col justify-end"
      data-bg="bg-boutique-stone"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white pb-12 reveal">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8">
          <div className="lg:w-7/12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block font-sans text-boutique-stone">
              {label}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif">{title}</h1>
            <p className="text-xl md:text-2xl font-serif font-light mt-4 text-white/90 max-w-2xl">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={ctaHref}
                className="group/btn relative px-8 py-4 bg-boutique-paper text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-xs overflow-hidden transition-all hover:bg-boutique-stone shadow-lg flex items-center gap-3"
              >
                {ctaLabel}
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="lg:w-5/12 flex lg:justify-end items-center gap-6 opacity-90 drop-shadow-md">
            {siteConfig.trustLogos.map((logo) => {
              let className = "w-auto object-contain brightness-0 invert";
              if (logo.alt === "NVM") className = `h-8 md:h-10 ${className}`;
              else if (logo.alt === "MVA") className = "h-6 md:h-8 w-auto object-contain invert grayscale mix-blend-screen";
              else if (logo.alt === "Rightmove") className = `h-10 md:h-12 ${className}`;
              
              return <img key={logo.alt} src={logo.src} alt={logo.alt} className={className} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
