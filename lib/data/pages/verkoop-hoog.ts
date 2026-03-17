import type { SeoData, Property } from "@/lib/types";

export const verkoopHoogPageSeo: SeoData = {
  metaTitle:
    "Verkoop > € 1.000.000 | Luxe Woning Verkopen Amsterdam",
  metaDescription:
    "Proactief, data-gedreven en persoonlijk. Verkoop uw woning in het hoge segment met Amsterdam at Home. Internationale strategie via Rightmove, eigen datamodel en stille verkoop.",
  slug: "verkoop-hoog",
  keywords: [
    "luxe woning verkopen amsterdam",
    "verkoop boven miljoen amsterdam",
    "makelaar hoog segment amsterdam",
    "stille verkoop amsterdam",
    "rightmove nederland",
  ],
};

export const verkoopHoogHeroData = {
  label: "Amsterdam at Home",
  title: "Verkoop > € 1.000.000",
  backgroundImage:
    "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
  heightClass: "h-[50vh] md:h-[60vh]",
  overlayClass: "bg-black/50",
};

export const verkoopHoogTrustData = {
  heading: "Vertrouwd door",
  logos: [
    { name: "NVM", placeholder: "NVM" },
    { name: "Qualis", placeholder: "Qualis" },
    { name: "Rightmove", placeholder: "Rightmove" },
  ],
};

export const verkoopHoogIntroData = {
  heading: "Amsterdam at Home: een proactieve aanpak",
  paragraph:
    "Proactief, data-gedreven en persoonlijk. Dat zijn de kernwoorden van Amsterdam at Home. Wij begrijpen dat het verkopen van een woning in het hoge segment vraagt om een unieke aanpak. Amsterdam at Home houdt rekening met de toenemende stroom van expats en biedt naast haar nationale verkoopstrategie, ook een internationale strategie om uw woning aan een nog groter publiek te presenteren. Zo zijn wij aangesloten bij het grootste woningplatform van de UK, Rightmove, en werken wij nauw samen met exclusieve organisaties.",
};

export interface VerkoopHoogDifference {
  number: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
}

export const verkoopHoogDifferencesData = {
  heading: "De 6 verschillen van onze proactieve aanpak",
  items: [
    {
      number: "01",
      title: "Internationaal verkopen met Rightmove",
      description:
        "Dankzij onze nauwe samenwerking met Rightmove, het grootste woningplatform van de UK met meer dan 14 miljoen bezoekers per maand, presenteren wij uw woning aan een breed internationaal publiek.",
    },
    {
      number: "02",
      title: "Unieke inzichten dankzij ons eigen datamodel",
      description:
        "Met ons eigen datamodel hebben wij uniek inzicht in de actuele ontwikkelingen van woningprijzen in uw buurt. Zo adviseren wij u over de optimale vraagprijs voor het hoogst mogelijke resultaat.",
      cta: { label: "Download kwartaalrapport", href: "#download" },
    },
    {
      number: "03",
      title: "Familiebedrijf",
      description:
        "Amsterdam at Home bestaat uit vier makelaars en drie enthousiaste jonge dames op de binnendienst. Onze klanten voelen zich onderdeel van de Amsterdam at Home 'familie'. Dat maakt het verschil.",
    },
    {
      number: "04",
      title: "Ervaren en persoonlijke benadering",
      description:
        "Wij combineren jonge, frisse blikken met meer dan 20 jaar ervaring in de Amsterdamse woningmarkt. Korte lijnen en snelle reacties zijn daarbij vanzelfsprekend.",
    },
    {
      number: "05",
      title: "Online verkoopstrategie",
      description:
        "Uw woning bereikt 5.000–10.000 mensen via gerichte online campagnes en social media. Wij zorgen dat uw woning bij het juiste publiek terechtkomt.",
    },
    {
      number: "06",
      title: "Stille verkoop",
      description:
        "Wilt u uw woning in volledige rust en privacy verkopen? Met onze stille-verkoopstrategie blijft u volledig in controle over wie uw huis bezoekt en wanneer.",
    },
  ] satisfies VerkoopHoogDifference[],
};

export const verkoopHoogStatsData = {
  heading: "Succesvol verkopen begint hier",
  description:
    "Met een makelaar van Amsterdam at Home vergroot u de kans op het succesvol verkopen van uw woning. Al 500+ klanten gingen u voor en beoordelen ons met een 9.8!",
  stat: "500+ tevreden klanten",
  ctaLabel: "Verkoopmakelaar inschakelen",
  ctaHref: "#kennismaken",
};

export const verkoopHoogContactData = {
  heading: "Vragen? Neem contact op",
  description: "Onze collega's staan voor u klaar!",
  email: "info@amsterdam-athome.nl",
  phone: "020-3080650",
};

export const verkoopHoogDownloadData = {
  heading: "Download uw kwartaalrapport",
  description:
    "Download ons kwartaalrapport met de meest actuele woningmarktcijfers van Amsterdam!",
  ctaLabel: "Download kwartaalrapport",
  ctaHref: "#",
};

export const verkoopHoogRecentSoldData = {
  heading: "Recent verkochte woningen",
  properties: [
    {
      image: "https://i.postimg.cc/wTNX7VHL/Chat-GPT-Image-2-mrt-2026-14-57-27.png",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Herengracht 200",
      location: "Grachtengordel • 185 m²",
      price: "€ 1.850.000 k.k.",
    },
    {
      image: "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Willemsparkweg 88",
      location: "Oud-Zuid • 210 m²",
      price: "€ 2.350.000 k.k.",
    },
    {
      image: "https://i.postimg.cc/wTNX7VHL/Chat-GPT-Image-2-mrt-2026-14-57-27.png",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Keizersgracht 312",
      location: "Centrum • 240 m²",
      price: "€ 3.100.000 k.k.",
    },
  ] satisfies Property[],
};

export const verkoopHoogFormData = {
  heading: "Meld u aan voor een vrijblijvend kennismakingsgesprek",
  description:
    "Bent u nieuwsgierig geworden? Vul onderstaand formulier in en wij nemen zo snel mogelijk contact met u op.",
};

export const verkoopHoogFormContactData = {
  office: {
    title: "Kantoor",
    lines: ["Weteringschans 143 huis,", "1017SE Amsterdam Centrum"],
  },
  contact: {
    title: "Contact",
    email: "info@amsterdam-athome.nl",
    phone: "020 – 3080650",
  },
  hours: {
    title: "Openingstijden",
    schedule: [
      { day: "Maandag", time: "09:00 – 17:00" },
      { day: "Dinsdag", time: "09:00 – 17:00" },
      { day: "Woensdag", time: "09:00 – 17:00" },
      { day: "Donderdag", time: "09:00 – 17:00" },
      { day: "Vrijdag", time: "09:00 – 17:00" },
      { day: "Zaterdag", time: "Gesloten" },
      { day: "Zondag", time: "Gesloten" },
    ],
  },
};
