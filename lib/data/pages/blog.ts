import type { SeoData, BlogArticle, FilterOption } from "@/lib/types";

export const blogPageSeo: SeoData = {
  metaTitle: "Blog",
  metaDescription:
    "Blijf op de hoogte van de laatste ontwikkelingen op de Amsterdamse woningmarkt. Kwartaalrapporten, marktcijfers en verkooptips van Amsterdam at Home.",
  slug: "blog",
  keywords: [
    "woningmarkt amsterdam blog",
    "huizenprijzen amsterdam",
    "kwartaalrapport woningmarkt",
    "verkooptips makelaar amsterdam",
  ],
};

export const blogHeroData = {
  label: "Inzichten & Data",
  title: "Blog",
};

export const blogIntroData = {
  heading: "Ontwikkelingen binnen de Amsterdamse woningmarkt.",
  paragraphs: [
    "Met deze blog willen wij je op de hoogte houden van de laatste ontwikkelingen op de Amsterdamse huizenmarkt en delen wij graag andere informatie.",
    "Zo delen wij bijvoorbeeld kwartaalrapporten die de laatste ontwikkelingen tonen. De cijfers die hiervoor worden gebruikt komen voort uit ons eigen ontwikkelde data model.",
  ],
};

export const blogCategories: FilterOption[] = [
  { value: "alle", label: "Alle categorieën" },
  { value: "marktcijfers", label: "Marktcijfers" },
  { value: "kwartaalrapporten", label: "Kwartaalrapporten" },
  { value: "tips", label: "Verkooptips" },
  { value: "nieuws", label: "Nieuws" },
];

export const blogArticles: BlogArticle[] = [
  {
    image: "https://i.postimg.cc/FRkH11Fm/amsterdam_at_home_31_600x400.jpg",
    date: "18 Nov 2025",
    category: "marktcijfers",
    categoryLabel: "Marktcijfers",
    title: "Demografische trends die de Amsterdamse woningmarkt vormgeven",
    excerpt:
      "De samenstelling van Amsterdam verandert. We zien een sterke toename in expats en jonge gezinnen die net buiten de ring gaan wonen. Wat betekent dit voor de waarde van uw woning in het centrum?",
    author: "Anouk Monnik",
  },
  {
    image: "https://i.postimg.cc/2S5Thsq1/amsterdam_at_home_22_1_(1).jpg",
    date: "14 Nov 2025",
    category: "marktcijfers",
    categoryLabel: "Marktcijfers",
    title: "Wat bepaalt de huizenprijzen in Amsterdam in 2025?",
    excerpt:
      "Renteschommelingen, verduurzaming en een tekort aan aanbod spelen een grote rol. In deze analyse duiken we diep in de cijfers van ons eigen datamodel om de voorspellingen voor volgend jaar te maken.",
    author: "Wouter Thöne",
  },
  {
    image:
      "https://i.postimg.cc/wvRj33x3/Uitwerken_van_online_strategie_door_onze_makelaars_in_Amsterdam_e1665392490551_600x525.jpg",
    date: "14 Okt 2025",
    category: "kwartaalrapporten",
    categoryLabel: "Kwartaalrapporten",
    title: "Kwartaalrapport Q3: Van biedstrijd tot balans",
    excerpt:
      "De cijfers van het derde kwartaal zijn binnen. We zien lokaal enorme verschillen: waar in Noord nog hevig wordt overboden, zien we in Zuid een normalisatie van de vraagprijzen.",
    author: "Data Team",
  },
  {
    image: "https://i.postimg.cc/wTNX7VHL/Chat-GPT-Image-2-mrt-2026-14-57-27.png",
    date: "02 Sep 2025",
    category: "tips",
    categoryLabel: "Verkooptips",
    title: "Hoe maak je jouw woning verkoopklaar voor expats?",
    excerpt:
      "Expats letten op hele andere details tijdens een bezichtiging dan de gemiddelde Amsterdammer. Met deze 5 interieurtips verhoog je de aantrekkingskracht voor de internationale koper.",
    author: "Kaylee",
  },
  {
    image: "https://i.postimg.cc/1XzsMMfc/bus-piccadilly-circus-london-england.jpg",
    date: "18 Aug 2025",
    category: "nieuws",
    categoryLabel: "Nieuws",
    title: "Nieuwe samenwerking met Rightmove.co.uk een groot succes",
    excerpt:
      "Onze exclusieve samenwerking met het Britse platform werpt zijn vruchten af. Het bereik van onze woningen is met 30% gestegen, resulterend in snellere verkopen in het hogere segment.",
    author: "Wouter Thöne",
  },
  {
    image: "https://i.postimg.cc/QMy84qxB/113723215_1920x1280.jpg",
    date: "05 Aug 2025",
    category: "tips",
    categoryLabel: "Verkooptips",
    title: "De stijgende waarde van een A-label in Amsterdam",
    excerpt:
      "Uit onze nieuwste data blijkt dat kopers steeds meer bereid zijn een forse premie te betalen voor verduurzaamde woningen. Lees hier welke ingrepen het meeste rendement opleveren.",
    author: "Anouk Monnik",
  },
];
