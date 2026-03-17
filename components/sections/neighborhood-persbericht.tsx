import { ArrowRight, FileText } from "lucide-react";

interface NeighborhoodPersberichtProps {
  date: string;
  author: string;
  title: string;
  link: string;
}

export function NeighborhoodPersbericht({
  date,
  author,
  title,
  link,
}: NeighborhoodPersberichtProps) {
  return (
    <section className="py-24 bg-transparent" data-bg="bg-boutique-stone">
      <div className="container mx-auto px-6 max-w-4xl reveal">
        <div className="border-l-4 border-boutique-orange pl-8 md:pl-12 py-4">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-boutique-orange" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-sans text-gray-500">
              Persbericht Kwartaalrapport
            </span>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-serif text-boutique-dark mb-6 leading-tight">
            {title}
          </h3>
          
          <div className="flex items-center gap-6 mb-8 text-sm text-gray-600 font-sans">
            <span>Datum: {date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{author}</span>
          </div>
          
          <a
            href={link}
            className="inline-flex items-center gap-4 text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-xs hover:text-boutique-orange transition-colors group"
          >
            <span className="border-b border-boutique-dark group-hover:border-boutique-orange pb-1 transition-colors">
              Lees persbericht
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
