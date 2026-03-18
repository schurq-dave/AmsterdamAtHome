interface AankoopIntroProps {
  paragraph: string;
}

export function AankoopIntro({ paragraph }: AankoopIntroProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-gray-700 font-light text-lg md:text-xl leading-relaxed text-center reveal">
          {paragraph}
        </p>
      </div>
    </section>
  );
}
