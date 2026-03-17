interface StilleVerkoopTextBlockProps {
  heading?: string;
  paragraphs: string[];
  bgVariant?: "paper" | "stone";
  borderTop?: boolean;
  isCallout?: boolean;
  image?: string;
  imagePosition?: "left" | "right";
}

export function StilleVerkoopTextBlock({
  heading,
  paragraphs,
  bgVariant = "paper",
  borderTop = false,
  isCallout = false,
  image,
  imagePosition = "right",
}: StilleVerkoopTextBlockProps) {
  const bgData = bgVariant === "stone" ? "bg-boutique-stone" : "bg-boutique-paper";

  if (isCallout) {
    return (
      <section
        className={`py-16 md:py-20 bg-transparent ${borderTop ? "border-t border-boutique-dark/10" : ""}`}
        data-bg={bgData}
      >
        <div className="container mx-auto px-6 max-w-4xl reveal">
          <div className="bg-boutique-stone p-10 md:p-14 border-l-4 border-boutique-orange">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-boutique-dark font-serif text-xl md:text-2xl leading-relaxed italic"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const content = (
    <div className="reveal flex-1">
      {heading && (
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-8">
          {heading}
        </h2>
      )}
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`text-gray-700 font-light text-lg leading-relaxed ${
            i < paragraphs.length - 1 ? "mb-6" : ""
          }`}
        >
          {p}
        </p>
      ))}
    </div>
  );

  return (
    <section
      className={`py-24 md:py-32 bg-transparent ${borderTop ? "border-t border-boutique-dark/10" : ""}`}
      data-bg={bgData}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {image ? (
          <div className={`flex flex-col ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"} gap-12 lg:gap-20 items-center`}>
            {content}
            <div className="w-full md:w-1/2 reveal">
              <div className="aspect-[4/3] overflow-hidden shadow-2xl relative">
                <img src={image} alt={heading || "Stille verkoop"} className="w-full h-full object-cover hover-zoom-img" />
                <div className={`absolute inset-0 border-4 border-boutique-orange/20 pointer-events-none m-4`} />
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            {content}
          </div>
        )}
      </div>
    </section>
  );
}
