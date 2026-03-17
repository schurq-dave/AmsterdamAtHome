import { siteConfig } from "@/lib/data/site-config";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  heightClass?: string;
  bgPositionClass?: string;
  overlayClass?: string;
}

export function PageHero({
  label,
  title,
  subtitle,
  backgroundImage,
  heightClass = "h-[40vh] md:h-[50vh]",
  bgPositionClass = "bg-center",
  overlayClass = "bg-black/50",
}: PageHeroProps) {
  return (
    <section
      className={`relative bg-boutique-stone pb-6 pt-32 px-4 ${heightClass} flex flex-col justify-end`}
      data-bg="bg-boutique-stone"
    >
      <div
        className={`absolute inset-0 bg-cover ${bgPositionClass}`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-white pb-12 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block font-sans text-boutique-stone">
              {label}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif">{title}</h1>
            {subtitle && (
              <p className="text-xl md:text-2xl font-serif font-light mt-4 text-white/90">{subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-6 opacity-90 drop-shadow-md">
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
