interface HuizenmarktContentSectionProps {
  heading: string;
  content?: string;
  paragraphs?: string[];
}

export function HuizenmarktContentSection({
  heading,
  content,
  paragraphs,
}: HuizenmarktContentSectionProps) {
  const hasContent = content || (paragraphs && paragraphs.length > 0);
  if (!hasContent) return null;

  return (
    <section className="py-16 md:py-20 bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-4xl reveal">
        <h2 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-6 uppercase">{heading}</h2>
        {content && <p className="text-gray-700 font-light leading-relaxed">{content}</p>}
        {paragraphs && (
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 font-light leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
