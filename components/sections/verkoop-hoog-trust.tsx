interface TrustLogo {
  name: string;
  placeholder: string;
}

interface VerkoopHoogTrustProps {
  heading: string;
  logos: TrustLogo[];
}

export function VerkoopHoogTrust({ heading, logos }: VerkoopHoogTrustProps) {
  return (
    <section
      className="py-16 md:py-20 bg-transparent border-b border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-beige mb-10 block">
          {heading}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center w-32 h-16 border border-boutique-dark/10 bg-white px-6 py-3 shadow-sm hover:shadow-md hover:border-boutique-orange/30 transition-all"
            >
              <span className="text-sm font-sans font-bold uppercase tracking-widest text-boutique-dark/60">
                {logo.placeholder}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
