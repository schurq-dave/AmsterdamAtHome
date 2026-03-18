import { siteConfig } from "@/lib/data/site-config";

interface BlogHeroProps {
  label: string;
  title: string;
  backgroundImage?: string;
  bgPositionClass?: string;
}

export function BlogHero({ label, title, backgroundImage, bgPositionClass = "bg-center" }: BlogHeroProps) {
  return (
    <section
      className="relative bg-boutique-stone pb-6 pt-32 px-4 h-[40vh] md:h-[50vh] flex flex-col justify-end overflow-hidden"
      data-bg="bg-boutique-stone"
    >
      {backgroundImage ? (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt={title} className={`w-full h-full object-cover ${bgPositionClass}`} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-boutique-beige/10 rounded-full blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[50vw] h-[50vw] bg-boutique-orange/5 rounded-full blur-[100px] pointer-events-none z-0" />
        </div>
      )}
      <div className={`container mx-auto px-6 relative z-10 pb-12 reveal ${backgroundImage ? "text-white" : "text-boutique-dark"}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block font-sans ${backgroundImage ? "text-white" : "text-boutique-orange"}`}>
              {label}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif">{title}</h1>
          </div>
          <div className={`flex items-center gap-6 ${backgroundImage ? "opacity-90 drop-shadow-md" : "opacity-70"}`}>
            {siteConfig.trustLogos.map((logo) => {
              let className = backgroundImage 
                ? "w-auto object-contain" 
                : "w-auto object-contain grayscale mix-blend-multiply";
                
              if (logo.alt === "NVM") className = `h-6 md:h-8 ${backgroundImage ? "grayscale brightness-200" : ""} ${className}`;
              else if (logo.alt === "MVA") className = `h-6 md:h-8 ml-4 -mr-4 ${backgroundImage ? "" : ""} ${className}`;
              else if (logo.alt === "Rightmove") className = `h-12 md:h-14 ml-2 translate-y-1 ${backgroundImage ? "brightness-0 invert" : ""} ${className}`;
              
              return <img key={logo.alt} src={logo.src} alt={logo.alt} className={className} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
