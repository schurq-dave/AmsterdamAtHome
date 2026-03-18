import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Amsterdam at Home",
  url: "https://amsterdam-athome.nl",
  logo: {
    src: "https://i.postimg.cc/BQ8s4bWn/Chat-GPT-Image-3-mrt-2026-08-55-42.png",
    alt: "Amsterdam at Home Makelaars",
  },
  trustLogos: [
    { src: "/images/nvm-logo-new.png", alt: "NVM" },
    { src: "/images/mva-logo-new.png", alt: "MVA" },
    { src: "https://i.postimg.cc/pLmQ3tg0/Rightmove_logo_(1).png", alt: "Rightmove" },
  ],
  topBar: {
    rating: "Beoordeeld met een 9.8",
    phone: "020-3080650",
  },
  contact: {
    phone: "020-3080650",
    email: "info@amsterdam-athome.nl",
    address: "Kantoor Weteringschans 143",
    addressLine2: "1017 SE Amsterdam Centrum",
  },
  socialLinks: [
    { platform: "instagram", href: "#" },
    { platform: "facebook", href: "#" },
    { platform: "linkedin", href: "#" },
  ],
  newsletter: {
    heading: "Marktcijfers ontvangen?",
    placeholder: "Uw emailadres",
    buttonLabel: "Inschrijven",
  },
};
