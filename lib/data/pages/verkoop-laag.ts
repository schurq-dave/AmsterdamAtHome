import type { SeoData, Property } from "@/lib/types";

export const verkoopLaagPageSeo: SeoData = {
  metaTitle:
    "Woning verkopen onder € 1.000.000 in Amsterdam | Amsterdam at Home",
  metaDescription:
    "Verkoop uw woning onder € 1.000.000 in Amsterdam met een proactieve aanpak. Internationale strategie, eigen datamodel en 500+ tevreden klanten. Beoordeling 9.8.",
  slug: "verkoop-laag",
  keywords: [
    "woning verkopen amsterdam",
    "huis verkopen onder miljoen amsterdam",
    "verkoopmakelaar amsterdam",
    "makelaar amsterdam goedkoop segment",
    "woning verkopen onder 1 miljoen",
  ],
};

export const verkoopLaagHeroData = {
  label: "Verkoopmakelaar Amsterdam",
  title: "Verkoop < € 1.000.000",
  backgroundImage:
    "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
};

export const verkoopLaagTrustData = {
  heading: "Aangesloten bij",
  logos: [
    { name: "NVM", placeholder: "NVM" },
    { name: "Qualis", placeholder: "Qualis" },
    { name: "Rightmove", placeholder: "Rightmove" },
  ],
};

export const verkoopLaagKrapteData = {
  heading: "Krapte op de Amsterdamse huizenmarkt",
  paragraph:
    "Er heerst krapte op de Amsterdamse huizenmarkt dus dit is hét moment om uw woning te verkopen. Er is vooral veel vraag naar woningen met een prijs onder de 1.000.000 euro en deze worden snel verkocht. Toch brengt het verkopen van uw woning veel vragen met zich mee, zoals 'Hoe krijg ik de maximale prijs met de beste voorwaarden?' en 'Hoe kan ik het beste onderhandelen?'. Onze verkoopmakelaars hebben jarenlange ervaring binnen dit segment en willen deze vragen graag voor u beantwoorden.",
};

export const verkoopLaagVerschillenData = {
  heading: "De 5 verschillen van onze proactieve aanpak",
  items: [
    {
      number: "01",
      title: "Internationaal verkopen met Rightmove",
      description:
        "Wij werken nauw samen met Rightmove, het grootste woningplatform van het Verenigd Koninkrijk met ruim 14 miljoen bezoekers per maand. Zo bereikt uw woning een internationaal publiek.",
    },
    {
      number: "02",
      title: "Unieke inzichten dankzij ons eigen datamodel",
      description:
        "Dankzij ons eigen datamodel hebben wij unieke inzichten in de actuele ontwikkelingen van woningprijzen bij u in de buurt. Zo adviseren wij u over de optimale vraagprijs.",
      cta: { label: "Download kwartaalrapport", href: "#" },
    },
    {
      number: "03",
      title: "Groot bestand aan zoekers",
      description:
        "Wij beschikken over een grote database van actieve zoekers die automatisch per mail op de hoogte worden gebracht van uw woning — al een dag voordat het op Funda komt.",
    },
    {
      number: "04",
      title: "Een groot bereik met sociale media",
      description:
        "Onze online marketing specialist zorgt ervoor dat uw woning 5.000 tot 10.000 mensen in de doelgroep bereikt via gerichte social media campagnes.",
    },
    {
      number: "05",
      title: "Ervaren en persoonlijke benadering",
      description:
        "Wij combineren jonge, frisse blikken met ruim 20 jaar ervaring in de Amsterdamse woningmarkt. Korte lijnen en snelle reacties zijn bij ons de standaard.",
    },
  ],
};

export const verkoopLaagStatsData = {
  stat: "9.8 gemiddelde beoordeling",
  heading: "Al 500+ tevreden klanten",
  description:
    "Met een verkoopmakelaar van Amsterdam at Home vergroot u de kans op het succesvol verkopen van uw woning. Al 500+ klanten gingen u voor en beoordelen ons met een 9.8!",
  ctaLabel: "Verkoopmakelaar inschakelen",
  ctaHref: "#kennismaken",
};

export const verkoopLaagCtaCardsData = {
  cards: [
    {
      heading: "Niet zeker of u uw woning wilt verkopen?",
      description:
        "Vraag een gratis en vrijblijvende waardebepaling aan en ontdek wat uw woning waard is op de huidige markt.",
      ctaLabel: "Vraag waardebepaling aan",
      ctaHref: "#kennismaken",
    },
    {
      heading: "Download uw kwartaalrapport",
      description:
        "Ontvang de meest actuele woningmarktcijfers van Amsterdam en uw buurt in ons uitgebreide kwartaalrapport.",
      ctaLabel: "Download kwartaalrapport",
      ctaHref: "#",
    },
  ],
};

export const verkoopLaagSoldData = {
  heading: "Recent verkocht < € 1.000.000",
  description: "Een selectie van woningen onder het miljoen die wij recentelijk succesvol hebben verkocht voor onze klanten.",
  properties: [
    {
      image: "/images/properties/prop1-ext.png",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Lijnbaansgracht 65",
      location: "Jordaan • 85 m²",
      price: "€ 795.000 k.k.",
    },
    {
      image: "/images/properties/prop2-ext.png",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Elandsgracht 112",
      location: "Jordaan • 65 m²",
      price: "€ 625.000 k.k.",
    },
    {
      image: "/images/properties/prop3-ext.png",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Prinsengracht 40",
      location: "Jordaan • 95 m²",
      price: "€ 875.000 k.k.",
    },
  ] satisfies Property[],
};

export const verkoopLaagFormData = {
  heading: "Meld u aan voor een vrijblijvend kennismakingsgesprek",
};

export const verkoopLaagContactData = {
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
