"use client";
/* eslint-disable @next/next/no-img-element */

import { Instagram, Facebook, Linkedin } from "lucide-react";
import type { SiteConfig, NavigationData } from "@/lib/types";

const socialIcons = { instagram: Instagram, facebook: Facebook, linkedin: Linkedin } as const;

interface FooterProps {
  logo: SiteConfig["logo"];
  contact: SiteConfig["contact"];
  socialLinks: SiteConfig["socialLinks"];
  footerColumns: NavigationData["footerColumns"];
  newsletter: SiteConfig["newsletter"];
}

export function Footer({ logo, contact, socialLinks, footerColumns, newsletter }: FooterProps) {
  return (
    <footer className="bg-boutique-stone pt-32 pb-10 text-boutique-dark">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <a href="#" className="block w-48 h-12 mb-8 overflow-hidden">
            <img src={logo.src} alt={logo.alt} className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply" />
          </a>
          <p className="mb-6 font-light text-sm leading-relaxed font-sans">
            {contact.address}<br />{contact.addressLine2}
          </p>
          <div className="flex gap-5">
            {socialLinks.map(({ platform, href }) => {
              const Icon = socialIcons[platform];
              return (
                <a key={platform} href={href} aria-label={platform}>
                  <Icon className="w-5 h-5 cursor-pointer hover:text-boutique-orange transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-6">{col.title}</h4>
            <ul className="space-y-4 text-sm font-light font-sans">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-boutique-orange transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-boutique-paper p-8 shadow-sm border border-gray-100">
          <h4 className="font-sans font-bold uppercase tracking-widest text-xs mb-3">{newsletter.heading}</h4>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={newsletter.placeholder}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-xs focus:outline-none focus:border-boutique-beige font-sans"
            />
            <button className="w-full bg-boutique-dark text-white text-[10px] font-bold uppercase tracking-[0.2em] py-3 hover:bg-boutique-orange transition-colors font-sans">
              {newsletter.buttonLabel}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
