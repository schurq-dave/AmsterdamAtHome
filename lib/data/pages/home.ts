import type { SeoData, UspItem, ChatMarketData } from "@/lib/types";

export const homePageSeo: SeoData = {
  metaTitle: "Amsterdam at Home | Boutique Makelaar",
  metaDescription:
    "De makelaar van Amsterdam. Beoordeeld met een 9.8. Wij bieden een proactieve, persoonlijke en datagedreven aanpak.",
  slug: "",
  keywords: [
    "makelaar amsterdam",
    "makelaars amsterdam",
    "aankoopmakelaar amsterdam",
    "verkoopmakelaar amsterdam",
    "woningmarkt amsterdam",
  ],
};

export const heroData = {
  backgroundImage:
    "https://i.postimg.cc/BvSVZ78X/Chat-GPT-Image-3-mrt-2026-08-49-05.png",
  headline: {
    prefix: "De",
    accent: "makelaar",
    connector: "van",
    suffix: "Amsterdam",
  },
  description:
    "Amsterdam At Home combineert uitgebreide marktanalyse met een makelaar die jouw belang vooropzet. Zodat je biedt met zekerheid en verkoopt met resultaat.",
  primaryCta: { label: "Bekijk Woningaanbod", href: "#aanbod" },
  secondaryCta: { label: "Verkoopadvies", href: "#waardebepaling" },
  trustLogos: [
    { src: "https://i.postimg.cc/L8JkGMrG/631005.png", alt: "NVM", className: "h-11 md:h-12 lg:h-14 w-auto object-contain brightness-0 invert self-end" },
    { src: "https://i.postimg.cc/rwDG7Lvf/filters_quality(100).jpg", alt: "MVA", className: "h-8 md:h-9 lg:h-10 w-auto object-contain invert grayscale mix-blend-screen self-end pb-[6px]" },
    { src: "https://i.postimg.cc/pLmQ3tg0/Rightmove_logo_(1).png", alt: "Rightmove", className: "h-11 md:h-12 lg:h-14 w-auto object-contain brightness-0 invert self-center" },
  ],
  chatPreview: {
    title: "Woningmarkt Specialist",
    subtitle: "Stel direct uw vraag...",
    badge: "Amsterdam at Home",
  },
  chatWelcomeHtml:
    'Goedemiddag. Welkom bij Amsterdam at Home. Ik heb directe toegang tot de laatste marktinformatie.<br /><br />Vraag mij gerust naar <strong>overbiedingen</strong>, <strong>m² prijzen</strong> of <strong>aantal verkochte woningen</strong> in uw favoriete buurt.',
  chatQuickReplies: [
    { label: "Overbieding Centrum", query: "Overbieding in Centrum" },
    { label: "m² prijs Oud-Zuid", query: "m2 prijs in Oud-Zuid" },
  ],
};

export const introData = {
  label: "Over ons",
  heading: "Een makelaar in Amsterdam die bij u past",
  headingAccent: "én voor u klaar staat",
  paragraph:
    "Als makelaar van Amsterdam bieden wij een proactieve, persoonlijke en datagedreven aanpak voor de aan- of verkoop een uw woning. Makelaarskantoor Amsterdam at Home heeft voor iedere buurt een eigen buurtspecialist. Zij weten alle ins- en outs van iedere buurt. Deze kennis combineren we met onze real-time data en behalen zo maximaal resultaat voor onze klanten.",
  uspCard: {
    title: "Uniek in Amsterdam",
    descriptionHtml:
      'Als enige vastgoedmakelaar bieden wij u inzicht in <span class="text-boutique-orange font-medium">de actuele prijs per m² en overbieding percentages</span>. Combineer dit met onze online waardetool en u weet direct waar u aan toe bent.',
  },
  ctaLabel: "Meer over onze aanpak",
  ctaHref: "#",
  image: {
    src: "https://i.postimg.cc/wTNX7VHL/Chat-GPT-Image-2-mrt-2026-14-57-27.png",
    alt: "Amsterdam interieur sfeer",
  },
  stats: [
    { value: "100%", label: "Datagedreven Advies" },
    { value: "20+ Jaar", label: "Ervaring in Amsterdam" },
  ],
};

export const immersiveData = {
  image: {
    src: "https://i.postimg.cc/YCsFn85V/Chat_GPT_Image_2_mrt_2026_16_24_51.png",
    alt: "Amsterdam Lifestyle",
  },
  label: "Onze Werkwijze",
  heading: "Waar persoonlijke aandacht en data samenkomen.",
};

export const pillarsHeading = {
  label: "Makelaar Amsterdam at Home",
  title: "De 5 pilaren van onze proactieve aanpak",
};

export const aanbodHeading = {
  label: "Exclusive listings",
  title: "Ontdek het actuele woningaanbod in Amsterdam",
  description:
    "Op zoek naar een woning in Amsterdam? Ons aanbod bestaat uit exclusieve koopwoningen in populaire buurten zoals De Pijp, Oud-Zuid, het Centrum en Amsterdam-Noord.",
  ctaLabel: "Bekijk volledig aanbod",
  ctaHref: "/aanbod",
  mobileCta: "Bekijk woningaanbod",
};

export const conversionData = {
  heading: "Waarom kiezen voor Amsterdam at Home als makelaar?",
  usps: [
    { title: "Lokale marktkennis", description: "Altijd op de hoogte van de laatste ontwikkelingen in de woningmarkt en huizenprijzen." },
    { title: "Persoonlijk advies", description: "Van kennismakingsgesprek tot succesvolle verkoop." },
    { title: "Sterke onderhandelingspositie", description: "Wij realiseren de beste deal met een exclusief netwerk." },
  ] satisfies UspItem[],
  image: "https://i.postimg.cc/66Fq02rX/67f59767d215b1ae843546b8fb57e814.jpg",
  strategyCard: {
    title: "Online verkoopstrategie",
    paragraphs: [
      "Wanneer u uw woning wilt verkopen kunt u vertrouwen op de makelaars van Amsterdam at Home. Onze online verkoopstrategie gaat verder dan alleen uw woning plaatsen op Funda.",
      "We bieden advertenties op Social Media (Facebook, Instagram, LinkedIn), e-mailmarketing naar een database van meer dan 10.000 huizenzoekers, promotie via Google en het Display netwerk.",
    ],
    quote:
      "Met doelgerichte campagnes zorgen we dat uw huis maximaal onder de aandacht wordt gebracht voor het beste resultaat!",
  },
};

export const expatData = {
  label: "Internationaal Bereik",
  headline: { prefix: "Unieke", accent: "Expat", suffix: "Strategie" },
  paragraphs: [
    "Naast onze jaren ervaring hebben we ook een unieke expat strategie. Zo zijn wij het enige makelaarskantoor van Amsterdam die de website hebben vertaald in zowel het Engels als in het Spaans.",
    'Ook hebben wij een exclusieve samenwerking met het grootste woningplatform van Engeland, <strong>Rightmove</strong>. Daarnaast spreken onze (expat)makelaars vloeiend Engels om het aan- of verkoopproces vlot te laten verlopen.',
  ],
  badges: ["EN / ES / NL", "Rightmove Partner"],
  image: "https://i.postimg.cc/1XzsMMfc/bus-piccadilly-circus-london-england.jpg",
  partnerCard: {
    title: "Exclusive Partner",
    subtitle: "Rightmove.co.uk",
    quote:
      "Bereik duizenden potentiële kopers uit het Verenigd Koninkrijk en daarbuiten.",
    languages: ["EN", "ES", "NL"],
  },
};

export const neighborhoodsHeading = {
  title: "Buurten in Amsterdam",
  description:
    "Onze buurt specialisten zijn als makelaar actief in geheel Amsterdam. Iedere makelaar is verantwoordelijk voor zijn of haar eigen buurt en weten alle hotspots te benoemen. In combinatie met real time data van de Amsterdamse huizenmarkt én onze proactieve werkwijze maakt dat wij het gehele aan- en verkoopproces voor u ontzorgen.",
};

export const chatMarketData: ChatMarketData = {
  centrum: { overbid: "8%", sold: 20 },
  "de pijp": { overbid: "12%", sold: 45 },
  "oud-zuid": { overbid: "10%", sold: 30 },
  noord: { overbid: "15%", sold: 60 },
  oost: { overbid: "9%", sold: 35 },
  west: { overbid: "11%", sold: 40 },
  jordaan: { overbid: "13%", sold: 15 },
};

export const stickyChatWelcomeHtml =
  'Goededag. Ik ben uw persoonlijke vastgoed-assistent. Vraag mij gerust naar <strong>overbiedingen</strong>, <strong>m² prijzen</strong> of <strong>markttrends</strong> per buurt.';
