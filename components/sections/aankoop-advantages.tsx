interface AdvantageItem {
  title: string;
  description: string;
}

interface AankoopAdvantagesProps {
  heading: string;
  items: AdvantageItem[];
}

export function AankoopAdvantages({ heading, items }: AankoopAdvantagesProps) {
  return (
    <section
      className="py-24 md:py-32 bg-transparent border-t border-boutique-dark/10"
      data-bg="bg-boutique-paper"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-serif text-boutique-dark mb-20 text-center reveal">
          {heading}
        </h2>

        <div className="space-y-16 reveal">
          {items.map((item, index) => (
            <div key={item.title}>
              <div className="flex items-center gap-6 mb-6">
                <span className="text-boutique-orange font-serif text-4xl md:text-5xl italic font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-boutique-dark">
                  {item.title}
                </h3>
              </div>
              <div className="pl-0 md:pl-24">
                <p className="text-gray-700 font-light text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
