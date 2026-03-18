import { Phone, Mail, ArrowRight } from "lucide-react";

interface NeighborhoodMakelaarProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

export function NeighborhoodMakelaar({
  name,
  role,
  phone,
  email,
  image,
}: NeighborhoodMakelaarProps) {
  return (
    <section className="py-32 md:py-40 bg-transparent" data-bg="bg-boutique-paper">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center relative reveal">
          <div className="w-full md:w-[45%] relative z-10">
            <div className="aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover hover-zoom-img"
              />
            </div>
          </div>
          <div className="w-full md:w-[45%] md:-ml-20 relative z-20 mt-8 md:mt-0">
            <div className="bg-boutique-stone p-10 md:p-14 shadow-xl border-l-4 border-boutique-beige">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-boutique-orange mb-4 block font-sans">
                {role}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold uppercase tracking-widest text-boutique-dark mb-6">
                {name}
              </h3>
              <p className="text-gray-700 font-light leading-relaxed text-lg mb-8">
                Als specialist in de Jordaan ken ik elke straat en gracht. Ik help u graag met persoonlijk advies en een proactieve aanpak bij de aan- of verkoop van uw woning.
              </p>
              
              <div className="space-y-4 mb-10">
                <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="flex items-center gap-4 text-gray-700 hover:text-boutique-orange transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-boutique-orange group-hover:text-white transition-colors shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-sm tracking-wide">{phone}</span>
                </a>
                <a href={`mailto:${email}`} className="flex items-center gap-4 text-gray-700 hover:text-boutique-orange transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-boutique-orange group-hover:text-white transition-colors shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-sm tracking-wide">{email}</span>
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#afspraak" className="inline-flex items-center justify-center gap-3 bg-boutique-dark text-white px-8 py-4 font-sans font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-boutique-orange transition-colors">
                  Maak een afspraak
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
