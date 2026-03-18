import { notFound } from "next/navigation";
import { aanbodProperties } from "@/lib/data/pages/aanbod";
import { ArrowLeft, MapPin, Ruler, Bed, Home, Calendar, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { PropertyDescription } from "@/components/sections/property-description";
import { PropertyGallery } from "@/components/sections/property-gallery";

export async function generateStaticParams() {
  return aanbodProperties.map((prop) => ({
    slug: prop.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = aanbodProperties.find((p) => p.slug === slug);
  if (!property) return { title: "Woning niet gevonden" };
  
  return {
    title: `${property.title} - Amsterdam at Home`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = aanbodProperties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-boutique-paper pb-32">
      {/* Navigation Bar */}
      <div className="container mx-auto px-6 py-4 pt-24 md:pt-32 flex justify-between items-center">
        <Link 
          href="/aanbod" 
          className="group flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-widest text-boutique-dark hover:text-boutique-orange transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-boutique-dark/20 group-hover:border-boutique-orange flex items-center justify-center transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Terug naar aanbod
        </Link>
      </div>

      {/* Header Info */}
      <div className="container mx-auto px-6 mb-8">
        <div className="max-w-5xl reveal">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {property.badge && (
              <span className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] font-sans ${
                property.badge.variant === "orange" ? "bg-boutique-orange text-white" : "bg-boutique-dark text-white"
              }`}>
                {property.badge.label}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-widest text-gray-500">
              <MapPin className="w-4 h-4 text-boutique-orange" />
              {property.neighborhood}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-boutique-dark leading-[1.1] mb-6">
            {property.title}
          </h1>
          <div className="text-2xl md:text-4xl font-serif text-boutique-orange italic">
            {property.priceLabel === "k.k." ? "Vraagprijs " : ""}{property.price} {property.priceLabel}
          </div>
        </div>
      </div>

      {/* Premium Gallery Grid with Lightbox */}
      <PropertyGallery 
        images={property.images} 
        badge={property.badge} 
        badgePosition={property.badgePosition} 
      />

      {/* Main Content Layout */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Details */}
          <div className="w-full lg:w-2/3">
            
            {/* Elegant Specs Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-y border-boutique-dark/10 py-10 mb-16 reveal">
              <div className="flex flex-col items-center md:border-r border-boutique-dark/10 mb-8 md:mb-0">
                <Ruler className="w-6 h-6 text-boutique-orange mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-sans mb-1">Wonen</span>
                <span className="text-xl font-serif text-boutique-dark">{property.area}</span>
              </div>
              <div className="flex flex-col items-center md:border-r border-boutique-dark/10 mb-8 md:mb-0">
                <Bed className="w-6 h-6 text-boutique-orange mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-sans mb-1">Kamers</span>
                <span className="text-xl font-serif text-boutique-dark">{property.rooms}</span>
              </div>
              <div className="flex flex-col items-center border-r-0 md:border-r border-boutique-dark/10">
                <Home className="w-6 h-6 text-boutique-orange mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-sans mb-1">Label</span>
                <span className="text-xl font-serif text-boutique-dark">{property.energyLabel || "N.v.t."}</span>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-6 h-6 text-boutique-orange mb-3" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 font-sans mb-1">Bouwjaar</span>
                <span className="text-xl font-serif text-boutique-dark">{property.constructionYear || "Onbekend"}</span>
              </div>
            </div>

            {/* Description Section */}
            <PropertyDescription 
              description={property.description} 
              fullDescription={property.fullDescription} 
            />

            {/* Features List */}
            {property.features && (
              <div className="mb-20 reveal">
                <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-10">Kenmerken</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-boutique-dark/5">
                      <div className="w-5 h-5 rounded-full bg-boutique-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-boutique-orange" />
                      </div>
                      <span className="text-gray-700 font-light text-base">{feature}</span>
                    </div>
                  ))}
                  {property.outdoorSpace && (
                    <div className="flex items-start gap-4 pb-4 border-b border-boutique-dark/5">
                      <div className="w-5 h-5 rounded-full bg-boutique-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-boutique-orange" />
                      </div>
                      <span className="text-gray-700 font-light text-base">Buitenruimte: {property.outdoorSpace}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Premium Location Map */}
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-serif text-boutique-dark mb-8">Locatie</h2>
              <div className="relative w-full h-[450px] shadow-2xl overflow-hidden group bg-boutique-stone/20">
                {/* Live Google Map */}
                <iframe
                  title="Woning Locatie"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(property.title + ", Amsterdam, Nederland")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full grayscale-[20%] contrast-125 opacity-90 transition-opacity duration-1000 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 pointer-events-none border border-boutique-dark/10" />
                
                {/* Floating Map Card */}
                <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 bg-white p-8 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-boutique-orange" />
                    <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-boutique-dark">Omgeving</h3>
                  </div>
                  <p className="font-serif text-xl text-boutique-dark mb-4">{property.neighborhood}</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(property.title + ", Amsterdam, Nederland")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-boutique-orange hover:text-boutique-dark transition-colors pointer-events-auto"
                  >
                    Open in Google Maps <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              
              {/* Premium Contact Card */}
              <div className="bg-boutique-sand text-boutique-dark p-10 shadow-2xl reveal relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/40 rounded-full blur-3xl -mr-20 -mt-20" />
                
                <h3 className="font-sans font-bold uppercase tracking-widest text-xs text-boutique-dark/60 mb-2 relative z-10">
                  Vraagprijs
                </h3>
                <div className="font-serif text-4xl mb-8 relative z-10">
                  {property.price}
                  <span className="text-lg font-sans text-boutique-dark/60 ml-2">{property.priceLabel}</span>
                </div>

                <div className="space-y-4 relative z-10">
                  <button className="w-full py-4 bg-boutique-dark text-white font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-boutique-dark transition-colors flex items-center justify-center gap-3 group">
                    Plan een bezichtiging
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="w-full py-4 border border-boutique-dark/20 text-boutique-dark font-sans font-bold uppercase tracking-[0.2em] text-xs hover:border-boutique-dark transition-colors flex items-center justify-center gap-3">
                    Download Brochure
                  </button>
                </div>

                <div className="mt-10 pt-10 relative z-10">
                  <p className="font-sans font-bold uppercase tracking-widest text-[10px] text-boutique-dark/60 mb-6">
                    Uw makelaar voor deze woning
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src="/images/makelaars/kaylee.png" 
                      alt="Kaylee" 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/40 shadow-sm" 
                    />
                    <div>
                      <p className="font-serif text-xl mb-1">Kaylee</p>
                      <a href="tel:0203080650" className="font-sans text-sm text-boutique-dark/80 hover:text-boutique-dark transition-colors">
                        020-3080650
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}