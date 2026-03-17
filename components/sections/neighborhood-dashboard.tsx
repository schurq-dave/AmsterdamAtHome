import { Check, ArrowRight, MapPin } from "lucide-react";

interface Stat {
  label: string;
  value: string;
}

interface NeighborhoodDashboardProps {
  neighborhood: string;
  stats: Stat[];
  marketData: {
    heading: string;
    bullets: string[];
    ctaLabel: string;
  };
  mapEmbedUrl: string;
}

export function NeighborhoodDashboard({
  neighborhood,
  stats,
  marketData,
  mapEmbedUrl,
}: NeighborhoodDashboardProps) {
  return (
    <section className="relative z-20 py-24 md:py-32 bg-transparent" data-bg="bg-boutique-paper">
      <div className="mx-auto max-w-[1200px] shadow-2xl reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white">
        {/* Left Column: Stats & Market Data */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Stats Section */}
          <div className="p-10 md:p-14 bg-white flex-1">
            <h2 className="text-2xl md:text-3xl font-serif text-boutique-dark mb-10 leading-tight">
              Onze verkoopstatistieken in {neighborhood}
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10">
              {stats.map((stat, i) => (
                <div key={i} className="border-l-2 border-boutique-orange pl-4">
                  <div className="text-3xl md:text-4xl font-serif text-boutique-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-sans leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Data Section */}
          <div className="p-10 md:p-14 bg-boutique-stone text-boutique-dark flex-1">
            <h3 className="text-2xl md:text-3xl font-serif mb-8 leading-tight">
              {marketData.heading}
            </h3>
            <ul className="space-y-5 mb-10">
              {marketData.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-boutique-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-boutique-orange" />
                  </div>
                  <span className="text-sm font-light text-gray-700 leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-3 bg-boutique-dark text-white px-8 py-4 font-sans font-bold uppercase tracking-[0.15em] text-[10px] hover:bg-boutique-orange transition-colors w-full justify-center md:w-auto">
              {marketData.ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Google Map */}
        <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full bg-boutique-stone">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full object-cover"
          ></iframe>
          
          {/* Map Overlay Badge */}
          <div className="absolute top-6 right-6 bg-white px-5 py-3 shadow-lg flex items-center gap-3 border-l-2 border-boutique-orange">
            <MapPin className="w-4 h-4 text-boutique-orange" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-boutique-dark font-sans">
              {neighborhood}, Amsterdam
            </span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
