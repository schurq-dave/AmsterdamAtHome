"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Link from "next/link";
import type { AanbodProperty } from "@/lib/types";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface AanbodPropertyCardProps {
  property: AanbodProperty;
}

export function AanbodPropertyCard({ property }: AanbodPropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const mainImage = property.images[currentImageIndex];
  const allImages = property.images;

  return (
    <Link href={`/aanbod/${property.slug}`} className="group reveal cursor-pointer block">
      <div className="flex flex-col">
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden mb-6">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${mainImage.objectPosition ?? ""}`}
          />
          
          {/* Pagination Indicators - Bottom Left */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-4 flex gap-1.5 z-10 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
              {allImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Vorige foto"
              >
                <ArrowLeft className="w-4 h-4 text-boutique-dark" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Volgende foto"
              >
                <ArrowRight className="w-4 h-4 text-boutique-dark" />
              </button>
            </div>
          )}

          {property.badge && (
            <div
              className={`absolute top-4 ${property.badgePosition === "right" ? "right-4" : "left-4"} ${
                property.badge.variant === "orange"
                  ? "bg-boutique-orange text-white"
                  : "bg-white text-boutique-dark"
              } px-4 py-2 text-[10px] font-bold uppercase tracking-widest font-sans z-10 rounded-sm`}
            >
              {property.badge.label}
            </div>
          )}
        </div>

        {/* Info Section - Clean & Minimal like the reference */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-lg font-sans text-boutique-dark mb-1">
              {property.title}
            </h2>
            <p className="text-sm font-sans text-gray-600 mb-4">
              {property.neighborhood}
            </p>
            <div className="text-sm font-sans text-boutique-dark">
              {property.priceLabel === "k.k." ? "Vraagprijs " : ""}{property.price} {property.priceLabel}
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-sans text-boutique-dark mb-1">
              {property.area} wonen
            </p>
            <p className="text-sm font-sans text-gray-600">
              {property.rooms}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
