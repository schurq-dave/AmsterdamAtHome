interface AboutIntroProps {
  heading: string;
  paragraphs: string[];
}

export function AboutIntro({ heading, paragraphs }: AboutIntroProps) {
  return (
    <section className="py-24 md:py-32 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-4xl text-center reveal">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-8">{heading}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className={`text-gray-700 font-light text-lg leading-relaxed ${i < paragraphs.length - 1 ? "mb-6" : ""}`}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
