"use client";

import { useState, useEffect } from "react";
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyImage {
  src: string;
  alt: string;
  objectPosition?: string;
}

interface Badge {
  label: string;
  variant: "orange" | "light";
}

interface PropertyGalleryProps {
  images: PropertyImage[];
  badge?: Badge;
  badgePosition?: "left" | "right";
}

export function PropertyGallery({ images, badge, badgePosition = "left" }: PropertyGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle keyboard navigation for the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Prevent scrolling when lightbox is open
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Inline Gallery Grid */}
      <section className="container mx-auto px-6 mb-20 md:mb-32 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[50vh] md:h-[65vh] overflow-hidden shadow-2xl">
          {/* Main Large Image */}
          <div 
            className="h-full relative group cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img 
              src={images[0].src} 
              alt={images[0].alt} 
              className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${images[0].objectPosition || ''}`} 
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {badge && (
              <div
                className={`absolute top-6 ${badgePosition === "right" ? "right-6" : "left-6"} ${
                  badge.variant === "orange" ? "bg-boutique-orange text-white" : "bg-boutique-dark text-white"
                } px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] font-sans shadow-lg z-10`}
              >
                {badge.label}
              </div>
            )}
          </div>
          
          {/* 2x2 Grid for smaller images */}
          <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2 h-full">
            {[1, 2, 3, 4].map((index) => {
              if (!images[index]) return null;
              
              const isLastVisible = index === 4 && images.length > 5;
              
              return (
                <div 
                  key={index}
                  className="relative h-full w-full group cursor-pointer overflow-hidden"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={images[index].src} 
                    alt={images[index].alt} 
                    className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${images[index].objectPosition || ''}`} 
                  />
                  
                  {isLastVisible ? (
                    <div className="absolute inset-0 bg-boutique-sand/80 flex flex-col items-center justify-center transition-colors backdrop-blur-[2px] group-hover:bg-boutique-sand/90">
                      <ImageIcon className="w-8 h-8 text-boutique-dark mb-3 group-hover:scale-110 transition-transform duration-500" />
                      <span className="text-boutique-dark font-sans font-bold uppercase tracking-widest text-xs">
                        +{images.length - 5} Foto's
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-boutique-dark/95 backdrop-blur-md animate-fade-in">
          
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
            <div className="text-white/60 font-sans text-xs tracking-widest uppercase">
              {currentIndex + 1} / {images.length}
            </div>
            <button 
              onClick={() => setLightboxOpen(false)}
              className="text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-black/40 p-4 rounded-full z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-black/40 p-4 rounded-full z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Display Image */}
          <div className="relative w-full h-full p-4 md:p-24 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Thumbnail Strip (Bottom) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2 p-2 bg-black/20 max-w-[80vw] overflow-x-auto hide-scrollbar z-50">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-20 h-14 overflow-hidden flex-shrink-0 transition-all ${
                  idx === currentIndex ? "ring-2 ring-boutique-orange opacity-100" : "opacity-40 hover:opacity-80"
                }`}
              >
                <img src={img.src} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}