interface HuizenmarktIntroProps {
  paragraphs: string[];
}

export function HuizenmarktIntro({ paragraphs }: HuizenmarktIntroProps) {
  return (
    <section className="py-16 md:py-24 bg-transparent border-b border-boutique-dark/10" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-4xl reveal">
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-700 font-light leading-relaxed mb-6 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
