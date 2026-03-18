import { siteConfig } from "@/lib/data/site-config";

interface KlantenHeroProps {
  label: string;
  title: string;
  backgroundImage?: string;
}

export function KlantenHero({ label, title, backgroundImage }: KlantenHeroProps) {
  return (
    <section
      className="relative pb-6 pt-32 px-4 h-[40vh] md:h-[50vh] flex flex-col justify-end overflow-hidden"
      data-bg="bg-boutique-stone"
    >
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt={title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden bg-boutique-stone">
          <div className="absolute top-[-50%] right-[-10%] w-[80vw] h-[80vw] bg-boutique-beige/10 rounded-full blur-[100px] pointer-events-none z-0" />
        </div>
      )}
      <div className={`container mx-auto px-6 relative z-10 pb-12 reveal ${backgroundImage ? "text-white" : "text-boutique-dark"}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block font-sans text-white">
              {label}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif">{title}</h1>
          </div>
          <div className="flex items-center gap-6 opacity-90 drop-shadow-md">
            {siteConfig.trustLogos.map((logo) => {
              let className = "w-auto object-contain";
              if (logo.alt === "NVM") className = `h-6 md:h-8 grayscale brightness-200 ${className}`;
              else if (logo.alt === "MVA") className = `h-6 md:h-8 ml-4 -mr-4 ${className}`;
              else if (logo.alt === "Rightmove") className = `h-12 md:h-14 brightness-0 invert ml-2 translate-y-1 ${className}`;
              
              return <img key={logo.alt} src={logo.src} alt={logo.alt} className={className} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
