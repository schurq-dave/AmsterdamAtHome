import type {
  SeoData,
  AboutDifference,
  AboutTeamMember,
  Testimonial,
  Property,
} from "@/lib/types";

export const verkoopPageSeo: SeoData = {
  metaTitle: "Verkoopmakelaar Amsterdam | Woning verkopen in Amsterdam",
  metaDescription:
    "Proactief, data-gedreven en persoonlijk. Verkoop uw woning in Amsterdam met Amsterdam at Home. Internationale strategie via Rightmove, datamodel en groot bereik.",
  slug: "verkoop",
  keywords: [
    "verkoopmakelaar amsterdam",
    "woning verkopen amsterdam",
    "makelaar verkoop amsterdam",
    "huis verkopen amsterdam",
  ],
};

export const verkoopHeroData = {
  label: "Verkoopmakelaar Amsterdam",
  title: "Woning verkopen in Amsterdam?",
  backgroundImage:
    "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
};

export const verkoopIntroData = {
  paragraphs: [
    "De kernwoorden van verkoopmakelaar Amsterdam at Home. Proactief, data-gedreven en persoonlijk. Wij houden rekening met de toenemende stroom van expats en bieden naast een nationale verkoopstrategie, ook een internationale strategie om uw woning aan een nog groter publiek te presenteren. Zo zijn wij aangesloten bij het grootste woningplatform van de UK, Rightmove. Met onze aanpak zullen wij het verkoopproces van uw woning.",
  ],
  cta: { label: "Verkoopmakelaar inschakelen", href: "#kennismaken" },
};

export const verkoopProactiefData = {
  heading: "Verkopen met een proactieve aanpak!",
  items: [
    {
      number: "01",
      title: "Internationale expat-verkoopstrategie",
      description:
        "Bereik potentiële kopers via Rightmove en meertalige presentatie (EN/ES).",
      image: "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
      imageAlt: "Internationale expat-verkoopstrategie",
    },
    {
      number: "02",
      title: "Datamodel met unieke inzichten",
      description:
        "Op basis van actuele marktdata adviseren wij u over de optimale vraagprijs.",
      image: "/images/aankoop-rapport-transparent.png",
      imageAlt: "Datamodel met unieke inzichten",
      imageClassName: "object-contain p-8 md:p-12 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]",
    },
    {
      number: "03",
      title: "Groot bestand aan zoekers",
      description:
        "Wij bereiken uw woning bij duizenden actieve kopers in en buiten Nederland.",
      image: "/images/aankoop-netwerk-transparent.png",
      imageAlt: "Groot bestand aan zoekers",
      imageClassName: "object-contain p-8 md:p-12 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]",
    },
    {
      number: "04",
      title: "Online verkoopstrategie",
      description:
        "Uw woning bereikt 5.000–10.000 mensen via gerichte online campagnes.",
      image: "/images/buurten-kaart-3d-transparent.png",
      imageAlt: "Online verkoopstrategie",
      imageClassName: "object-contain p-8 md:p-12 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]",
    },
    {
      number: "05",
      title: "Persoonlijke begeleiding van begin tot eind",
      description:
        "Van waardebepaling tot overdracht staat uw verkoopmakelaar aan uw zijde.",
      image: "https://i.postimg.cc/wTNX7VHL/Chat-GPT-Image-2-mrt-2026-14-57-27.png",
      imageAlt: "Persoonlijke begeleiding van begin tot eind",
    },
  ] satisfies AboutDifference[],
  cta: { label: "Kennismaking inplannen", href: "#kennismaken" },
};

export const verkoopOnlineStrategieData = {
  heading: "Uitwerken van online strategie",
  paragraph:
    "Samen met u werken wij een online verkoopstrategie uit die bij uw woning en uw wensen past. Eerst bepalen we de waarde van uw huis.",
  linkText: "Wat is mijn huis waard?",
  linkHref: "#waardebepaling",
};

export const verkoopRecentSoldData = {
  heading: "Recent verkocht door onze makelaars",
  description: "Een selectie van woningen die wij recentelijk succesvol hebben verkocht voor onze klanten.",
  properties: [
    {
      image: "https://i.postimg.cc/LspjQTTq/130717214_1920x1280.jpg",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Keizersgracht 402",
      location: "Centrum • 145 m²",
      price: "€ 1.250.000 k.k.",
    },
    {
      image: "https://i.postimg.cc/qvzRT5N9/112275029_1920x1280.jpg",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Brouwersgracht 210",
      location: "Centrum • 135 m²",
      price: "€ 1.450.000 k.k.",
    },
    {
      image: "https://i.postimg.cc/bwsJhBZW/212827899_1920x1281.jpg",
      label: "Verkocht",
      labelStyle: "bg-boutique-orange text-white",
      title: "Lijnbaansgracht 65",
      location: "Jordaan • 85 m²",
      price: "€ 795.000 k.k.",
    },
  ] satisfies Property[],
};

export const verkoop5StappenData = {
  heading: "Aanpak verkoopmakelaar Amsterdam At Home in 5 stappen",
  steps: [
    {
      number: "01",
      title: "Internationale Expat verkoopstrategie",
      description: "Rightmove, meertalig (EN/ES) – bereik kopers in het buitenland.",
    },
    {
      number: "02",
      title: "Een verkoopmakelaar met unieke inzichten",
      description: "Datamodel met actuele marktdata.",
      cta: { label: "Download kwartaalrapport", href: "#" },
    },
    {
      number: "03",
      title: "Groot bestand aan zoekers",
      description: "Uw woning bereikt actieve kopers die al in ons netwerk zitten.",
    },
    {
      number: "04",
      title: "Een online verkoopstrategie",
      description: "5.000–10.000 mensen bereik met gerichte campagnes.",
    },
    {
      number: "05",
      title: "Persoonlijke begeleiding",
      description: "Van bezichtiging tot overdracht aan uw zijde.",
    },
  ],
};

export const verkoopTeamData = {
  heading: "Maak kennis met onze verkoopmakelaars in Amsterdam",
  description:
    "Onze verkoopmakelaars combineren marktkennis met persoonlijke aandacht. Maak kennis met het team dat uw woning aan de juiste koper koppelt.",
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
    {
      image: {
        src: "https://i.postimg.cc/jqM2sdn2/Kaylee.png",
        alt: "Kaylee",
      },
      role: "Verkoopmakelaar",
      name: "Kaylee",
      bio: "Gedreven verkoopmakelaar met oog voor detail en resultaat. Kaylee zorgt ervoor dat het verkoopproces soepel verloopt en uw woning bij de juiste koper terechtkomt.",
      email: "info@amsterdam-athome.nl",
      layout: "image-left" as const,
    },
  ] satisfies AboutTeamMember[],
};

export const verkoopReferentiesData = {
  heading: "Onze referenties",
  score: "9.8",
  reviewCount: "500+",
  intro: "Lees wat onze klanten zeggen over hun ervaring met Amsterdam at Home bij het verkopen van hun woning.",
  testimonials: [
    {
      name: "Marvin van Dongen",
      score: "10",
      stars: 5,
      paragraphs: [
        '"Wouter, Anouk en hun team hebben mij bijgestaan in zowel de verkoop van twee woningen als in de aankoop van een nieuwe woning, in het centrum van Amsterdam. Ze hebben werkelijk alles van A tot Z uit handen genomen, absoluut topwerk geleverd."',
      ],
      borderVariant: "orange" as const,
    },
    {
      name: "Josien Herder",
      score: "9.9",
      stars: 4.5,
      paragraphs: [
        '"Erg prettig. Het overleg was goed, afspraken waren duidelijk en werden goed nagekomen. De kennis om in te schatten hoe het huis verkocht kon worden was zeer adequaat."',
      ],
      borderVariant: "stone" as const,
    },
    {
      name: "Peter Sluijter",
      score: "10",
      stars: 5,
      paragraphs: [
        '"Je voelt dat de verkoop van je huis in vertrouwde handen is. Ze maken meer dan waar wat ze beloven. Je krijgt bij vragen altijd snel en duidelijk antwoord."',
      ],
      borderVariant: "stone" as const,
    },
  ] satisfies Testimonial[],
};

export const verkoopApplyData = {
  heading:
    "Van plan om uw huis te verkopen? Meld u aan voor een vrijblijvend kennismakingsgesprek",
};

export const verkoopContactData = {
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
