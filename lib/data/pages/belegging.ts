import type {
  SeoData,
  AboutDifference,
  AboutTeamMember,
  Property,
  Testimonial,
} from "@/lib/types";

export const beleggingPageSeo: SeoData = {
  metaTitle: "Beleggingsmakelaardij | Beleggingspand Verkopen Amsterdam",
  metaDescription:
    "Uw beleggings- of ongesplitste pand in Amsterdam verkopen? Amsterdam at Home heeft jarenlange ervaring met het verkopen van beleggingspanden. Proactieve aanpak, persoonlijke aandacht.",
  slug: "belegging",
  keywords: [
    "beleggingsmakelaardij amsterdam",
    "beleggingspand verkopen",
    "beleggingspand amsterdam",
    "ongesplitste pand verkopen",
  ],
};

export const beleggingHeroData = {
  label: "Beleggingsmakelaardij",
  title: "Beleggingspand verkopen",
  backgroundImage:
    "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
};

export const beleggingIntroData = {
  heading: "Uw beleggings- of ongesplitste pand in Amsterdam verkopen?",
  paragraphs: [
    "Ervaring met het verkopen van beleggingspanden. Amsterdam at Home is een familiebedrijf met een proactieve en persoonlijke aanpak. Wij combineren uitgebreide marktkennis met aandacht voor uw specifieke situatie.",
    "Of u nu een portefeuille wilt afbouwen, een ongesplitste woning wilt verkopen of advies zoekt over de beste verkoopstrategie: wij staan voor u klaar met maatwerk.",
  ],
};

export const beleggingRecentSoldData = {
  heading: "Recent succesvol begeleid",
  description: "Een selectie van beleggingspanden en ongesplitste woningen die wij recentelijk succesvol hebben aangekocht of verkocht voor onze relaties.",
  properties: [
    {
      image: "https://i.postimg.cc/MGF6PYKv/94614349_1920x1280.jpg",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Keizersgracht 402",
      location: "Centrum • 145 m²",
      price: "€ 1.250.000 k.k.",
    },
    {
      image: "https://i.postimg.cc/QMy84qxB/113723215_1920x1280.jpg",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Van Baerlestraat 12",
      location: "Oud-Zuid • 98 m²",
      price: "€ 985.000 k.k.",
    },
    {
      image: "https://i.postimg.cc/mDqZ0JXT/Chat_GPT_Image_2_mrt_2026_16_05_43.png",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "NDSM-straat 88",
      location: "Noord • 85 m²",
      price: "€ 650.000 k.k.",
    },
  ] satisfies Property[],
};

export const beleggingDifferencesData = {
  heading: "Ontdek de 5 verschillen van onze proactieve aanpak",
  items: [
    {
      number: "01",
      title: "Verkopen zonder financieringsvoorbehoud",
      description:
        "Uw beleggingspand verkopen aan kopers die direct kunnen financieren. Wij screenen kopers zorgvuldig zodat u zekerheid heeft.",
    },
    {
      number: "02",
      title: "Opknappen is niet nodig, dit doet de koper",
      description:
        "Wij verkopen uw pand in de staat waarin het zich bevindt. De koper neemt het onderhoud en eventuele renovatie op zich.",
    },
    {
      number: "03",
      title: "Makelaar met unieke inzichten (datamodel, waardebepaling)",
      description:
        "Ons eigen datamodel en ervaring met beleggingspanden geven u een realistisch beeld van de waarde en verkoopkansen.",
    },
    {
      number: "04",
      title: "Jarenlange ervaring",
      description:
        "Amsterdam at Home heeft jarenlange ervaring met het verkopen van beleggings- en ongesplitste panden in Amsterdam.",
    },
    {
      number: "05",
      title: "Groot klantenbestand",
      description:
        "Dankzij ons uitgebreide netwerk en database bereiken wij kopers die specifiek op zoek zijn naar beleggingspanden.",
    },
  ] satisfies AboutDifference[],
};

export const beleggingCtaData = {
  heading:
    "Uw beleggings- of ongesplitste pand in Amsterdam verkopen? Wij staan voor u klaar",
  ctaLabel: "Neem contact met ons op",
  ctaHref: "#kennismakingsgesprek",
};

export const beleggingTeamData = {
  heading: "Onze Makelaars in Amsterdam",
  description:
    "Anouk Monnik en Wouter Thöne begeleiden u met persoonlijke aandacht bij de verkoop van uw beleggingspand.",
  members: [
    {
      image: {
        src: "https://i.postimg.cc/Yqt2p4Fz/DEF-2025-05-AT-HOME-13414-scaled-(1).jpg",
        alt: "Anouk Monnik",
      },
      role: "Register makelaar / Directeur",
      name: "Anouk Monnik",
      bio: "Anouk Monnik; geboren Amsterdammer, een echte vakvrouw en al 15 jaar actief in de makelaardij. Haar grootste passie: de klant blij maken! Geen moeite is te veel, waardoor ze over de jaren heen een steeds groter wordende schare enthousiaste klanten aan zich heeft weten te binden, die steeds weer bij haar terug komen.",
      email: "anouk@amsterdam-athome.nl",
      layout: "image-left" as const,
    },
    {
      image: {
        src: "https://i.postimg.cc/ncVxyybJ/DEF-2025-05-AT-HOME-13420-scaled-(1).jpg",
        alt: "Wouter Thöne",
      },
      role: "Directeur",
      name: "Wouter Thöne",
      bio: 'Enthousiaste makelaar met een grote passie voor zijn klanten. Geboren en getogen in Oud Zuid en woont daar nog steeds met veel plezier. "Er is niets mooier dan vertrouwensman, adviseur en klankbord voor de klant te zijn en in een mooie samenwerking het optimale resultaat bij de verkoop of aankoop van een woning te realiseren".',
      email: "wouter@amsterdam-athome.nl",
      layout: "image-right" as const,
    },
  ] satisfies AboutTeamMember[],
};

export const beleggingReviewsData = {
  score: "9.8",
  reviewCount: "500+",
  testimonials: [
    {
      name: "Marvin van Dongen",
      score: "10",
      stars: 5,
      paragraphs: [
        '"Wouter, Anouk en hun team hebben mij bijgestaan in zowel de verkoop van twee woningen als in de aankoop van een nieuwe woning. Absoluut topwerk geleverd."',
      ],
      borderVariant: "orange" as const,
    },
    {
      name: "Martin Bezemer",
      score: "10",
      stars: 5,
      paragraphs: [
        '"De informatie die Dhr Thöne verstrekte was realistisch, deskundig en betrouwbaar. Erg prettig en professioneel."',
      ],
      borderVariant: "stone" as const,
    },
    {
      name: "Josien Herder",
      score: "9.9",
      stars: 4.5,
      paragraphs: [
        '"Erg prettig. Het overleg was goed, afspraken waren duidelijk. De kennis om in te schatten hoe het huis verkocht kon worden was zeer adequaat."',
      ],
      borderVariant: "stone" as const,
    },
  ] satisfies Testimonial[],
};

export const beleggingCtaBlocksData = {
  blocks: [
    {
      heading: "WETEN WAT UW WONING WAARD IS?",
      ctaLabel: "Woningwaarde berekenen",
      ctaHref: "#",
    },
    {
      heading: "DOWNLOAD UW KWARTAALRAPPORT",
      ctaLabel: "Woningmarktcijfers downloaden",
      ctaHref: "#",
    },
  ],
};

export const beleggingFormData = {
  heading: "Kennismakingsgesprek inplannen?",
  fields: {
    naam: { label: "Naam", required: true },
    email: { label: "E-mailadres", required: true },
    telefoon: { label: "Telefoon", required: false },
    onderwerp: { label: "Onderwerp", required: false },
    bericht: { label: "Bericht", required: false },
    privacy: { label: "Privacy Policy", required: true },
    kwartaal: { label: "Ik wil het kwartaalrapport ontvangen", required: false },
    woningen: { label: "Ik wil op de hoogte blijven van nieuwe woningen", required: false },
  },
  submitLabel: "Verstuur aanvraag",
};
