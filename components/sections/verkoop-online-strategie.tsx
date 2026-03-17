interface VerkoopOnlineStrategieProps {
  heading: string;
  paragraph: string;
  linkText: string;
  linkHref: string;
}

export function VerkoopOnlineStrategie({
  heading,
  paragraph,
  linkText,
  linkHref,
}: VerkoopOnlineStrategieProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-4xl reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-8 text-center">
          {heading}
        </h2>
        <p className="text-gray-700 font-light text-lg leading-relaxed text-center mb-8">
          {paragraph}
        </p>
        <p className="text-center">
          <a
            href={linkHref}
            className="text-boutique-orange font-sans font-bold uppercase tracking-[0.2em] text-sm border-b-2 border-boutique-orange pb-1 hover:text-boutique-dark hover:border-boutique-dark transition-colors"
          >
            {linkText}
          </a>
        </p>
      </div>
    </section>
  );
}
