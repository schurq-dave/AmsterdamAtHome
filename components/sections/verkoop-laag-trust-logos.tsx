interface TrustLogo {
  name: string;
  placeholder: string;
}

interface VerkoopLaagTrustLogosProps {
  heading: string;
  logos: TrustLogo[];
}

export function VerkoopLaagTrustLogos({
  heading,
  logos,
}: VerkoopLaagTrustLogosProps) {
  return (
    <section
      className="py-12 md:py-16 bg-transparent border-b border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-4xl reveal">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-beige text-center mb-8">
          {heading}
        </p>
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center w-28 h-14 md:w-36 md:h-16 border border-boutique-dark/10 bg-white px-4 py-2 text-boutique-beige font-sans font-bold uppercase tracking-widest text-xs hover:border-boutique-orange/40 transition-colors"
            >
              {logo.placeholder}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
