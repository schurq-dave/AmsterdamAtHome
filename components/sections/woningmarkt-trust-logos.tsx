interface TrustLogo {
  name: string;
}

interface WoningmarktTrustLogosProps {
  logos: TrustLogo[];
}

export function WoningmarktTrustLogos({ logos }: WoningmarktTrustLogosProps) {
  return (
    <section
      className="py-12 md:py-16 bg-transparent border-b border-boutique-dark/10"
      data-bg="bg-boutique-stone"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-8 md:gap-14">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="px-8 py-4 border border-boutique-dark/15 bg-boutique-paper/50 flex items-center justify-center min-w-[120px]"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] font-sans text-boutique-dark/60">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
