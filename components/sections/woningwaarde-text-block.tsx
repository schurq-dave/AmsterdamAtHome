interface WoningwaardeTextBlockProps {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  trailingParagraph?: string;
  subHeading?: string;
  bgVariant?: "paper" | "stone";
  image?: string;
  imageAlt?: string;
  layoutVariant?: "stacked" | "side-by-side" | "image-fullwidth";
  smallText?: boolean;
  imageType?: "photo" | "illustration";
  centerHeading?: boolean;
}

export function WoningwaardeTextBlock({
  heading,
  paragraphs,
  bullets,
  trailingParagraph,
  subHeading,
  bgVariant = "paper",
  image,
  imageAlt = "Afbeelding",
  layoutVariant = "side-by-side",
  smallText = false,
  imageType = "photo",
  centerHeading = false,
}: WoningwaardeTextBlockProps) {
  const bgClass =
    bgVariant === "stone" ? "bg-boutique-stone" : "bg-boutique-paper";

  const renderParagraphs = () => {
    // If there is no image and multiple paragraphs, split them into two columns
    if (!image && paragraphs.length > 1 && layoutVariant !== "stacked") {
      const mid = Math.ceil(paragraphs.length / 2);
      const col1 = paragraphs.slice(0, mid);
      const col2 = paragraphs.slice(mid);
      
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-left">
          <div>
            {col1.map((p, i) => (
              <p key={`c1-${i}`} className={`text-gray-700 font-light leading-relaxed mb-6 last:mb-0 ${smallText ? "text-base" : "text-lg"}`}>
                {p}
              </p>
            ))}
          </div>
          <div>
            {col2.map((p, i) => (
              <p key={`c2-${i}`} className={`text-gray-700 font-light leading-relaxed mb-6 last:mb-0 ${smallText ? "text-base" : "text-lg"}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
      );
    }

    // Default rendering (single column)
    return (
      <div className={`space-y-6 ${layoutVariant === "stacked" ? "text-center max-w-4xl mx-auto" : ""}`}>
        {paragraphs.map((p, i) => (
          <p key={i} className={`text-gray-700 font-light leading-relaxed ${smallText ? "text-base" : "text-lg"}`}>
            {p}
          </p>
        ))}
      </div>
    );
  };

  const content = (
    <div className={!image && layoutVariant !== "stacked" ? "text-center" : ""}>
      <h2 className={`font-serif text-boutique-dark mb-12 leading-[1.1] ${smallText ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"} ${centerHeading ? "text-center" : ""}`}>
        {heading}
      </h2>
      
      {renderParagraphs()}

      {subHeading && (
        <h3 className="text-xl md:text-2xl font-serif text-boutique-dark mt-20 mb-10">
          {subHeading}
        </h3>
      )}
      
      {bullets && bullets.length > 0 && (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-8 ${!image ? "text-left" : ""}`}>
          {bullets.map((item, i) => {
            // Center the last item if it's on an odd row in a 2-column grid
            const isLastOdd = i === bullets.length - 1 && bullets.length % 2 !== 0;
            return (
              <div key={i} className={`flex gap-6 items-start border-t border-boutique-dark/10 pt-6 ${isLastOdd ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}`}>
                <span className="font-serif italic text-boutique-orange text-2xl">
                  0{i + 1}
                </span>
                <p className="text-gray-700 font-light leading-relaxed text-base pt-1">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      )}
      
      {trailingParagraph && (
        <div className="mt-16 bg-white p-8 md:p-12 shadow-lg border-l-4 border-boutique-orange text-left">
          <p className="text-gray-700 font-light text-lg leading-relaxed italic">
            {trailingParagraph}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section
      className="py-24 md:py-32 bg-transparent overflow-hidden"
      data-bg={bgClass}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {layoutVariant === "image-fullwidth" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5 slide-in-subtle">
              {content}
            </div>
            {image && (
              <div className="lg:col-span-7 h-full min-h-[500px] relative overflow-hidden shadow-2xl reveal group">
                <img
                  src={image}
                  alt={imageAlt}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[10%] hover-zoom-img"
                />
              </div>
            )}
          </div>
        ) : layoutVariant === "stacked" ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-10 md:col-start-2">
              {image && (
                <div className="w-full aspect-[21/9] mb-16 overflow-hidden shadow-xl reveal group">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="w-full h-full object-cover grayscale-[10%] hover-zoom-img"
                  />
                </div>
              )}
              <div className="slide-in-subtle">
                {content}
              </div>
            </div>
          </div>
        ) : (
          <div className={image ? "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center" : "max-w-4xl mx-auto slide-in-subtle"}>
            <div className={image ? "lg:col-span-6 slide-in-subtle" : ""}>{content}</div>
            {image && (
              <div className="lg:col-span-6 reveal">
                {imageType === "illustration" ? (
                  <div className="relative w-full max-w-lg ml-auto flex justify-center items-center group">
                    <img
                      src={image}
                      alt={imageAlt}
                      className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[4/5] w-full max-w-lg ml-auto group">
                    <div className="absolute inset-0 bg-boutique-orange/5 translate-x-4 -translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:-translate-y-6" />
                    <div className="w-full h-full relative z-10 overflow-hidden shadow-2xl">
                      <img
                        src={image}
                        alt={imageAlt}
                        className="w-full h-full object-cover grayscale-[10%] hover-zoom-img"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
