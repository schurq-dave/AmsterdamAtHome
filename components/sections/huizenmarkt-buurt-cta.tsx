interface HuizenmarktBuurtCtaProps {
  heading: string;
  subheading: string;
}

export function HuizenmarktBuurtCta({ heading, subheading }: HuizenmarktBuurtCtaProps) {
  return (
    <section className="py-20 md:py-28 bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-6">{heading}</h2>
        <p className="text-lg text-gray-600 font-light leading-relaxed">{subheading}</p>
      </div>
    </section>
  );
}
