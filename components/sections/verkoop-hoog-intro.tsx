interface VerkoopHoogIntroProps {
  heading: string;
  paragraph: string;
}

export function VerkoopHoogIntro({ heading, paragraph }: VerkoopHoogIntroProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-boutique-beige mb-6 block">
          Ons verhaal
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-10">
          {heading}
        </h2>
        <p className="text-gray-700 font-light text-lg leading-relaxed">
          {paragraph}
        </p>
      </div>
    </section>
  );
}
