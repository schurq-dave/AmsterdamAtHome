import { siteConfig } from "@/lib/data/site-config";

interface BlogHeroProps {
  label: string;
  title: string;
}

export function BlogHero({ label, title }: BlogHeroProps) {
  return (
    <section
      className="relative bg-boutique-stone pb-6 pt-32 px-4 h-[40vh] md:h-[50vh] flex flex-col justify-end"
      data-bg="bg-boutique-stone"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-boutique-beige/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[50vw] h-[50vw] bg-boutique-orange/5 rounded-full blur-[100px] pointer-events-none z-0" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-boutique-dark pb-12 reveal">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block font-sans text-boutique-orange">
              {label}
            </span>
            <h1 className="text-5xl md:text-7xl font-serif">{title}</h1>
          </div>
          <div className="flex items-center gap-6 opacity-70">
            {siteConfig.trustLogos.map((logo) => {
              let className = "w-auto object-contain grayscale mix-blend-multiply";
              if (logo.alt === "NVM") className = `h-8 md:h-10 ${className}`;
              else if (logo.alt === "MVA") className = `h-6 md:h-8 ${className}`;
              else if (logo.alt === "Rightmove") className = `h-10 md:h-12 ${className}`;
              
              return <img key={logo.alt} src={logo.src} alt={logo.alt} className={className} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
