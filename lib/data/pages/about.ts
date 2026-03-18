import type { SeoData, AboutDifference, AboutTeamMember } from "@/lib/types";

export const aboutPageSeo: SeoData = {
  metaTitle: "Over Ons",
  metaDescription:
    "Maak kennis met Amsterdam at Home. Een team van enthousiaste en ervaren makelaars met een proactieve aanpak voor de Amsterdamse woningmarkt.",
  slug: "over-ons",
  keywords: [
    "makelaar amsterdam",
    "amsterdam at home",
    "over ons",
    "makelaars team amsterdam",
  ],
};

export const aboutHeroData = {
  label: "Amsterdam at Home",
  title: "Over ons",
  backgroundImage:
    "https://i.postimg.cc/wTNX7VHL/Chat-GPT-Image-2-mrt-2026-14-57-27.png",
  heightClass: "h-[40vh] md:h-[50vh]",
  bgPositionClass: "bg-[center_30%]",
  overlayClass: "bg-black/40",
};

export const aboutIntroData = {
  heading: "Kiezen van de juiste makelaar",
  paragraphs: [
    "Een woning kopen of verkopen is een spannend proces en daarom is een vertrouwd gevoel bij uw makelaar zeer belangrijk.",
    "Wij begrijpen dat het kiezen van de juiste makelaar een lastige keuze is en daarom leggen wij u graag uit wat de kenmerken zijn van onze proactieve aanpak.",
  ],
};

export const aboutDifferencesData = {
  heading: "De 5 verschillen van onze proactieve aanpak",
  items: [
    {
      number: "01",
      title: "Team van enthousiaste en ervaren medewerkers",
      description:
        "Hierdoor hebben wij een persoonlijke benadering en korte lijnen. U kunt zeer snelle reacties verwachten.",
      image: "/images/properties/prop1-ext.png",
    },
    {
      number: "02",
      title: "Wij beschikken over een eigen datamodel",
      description:
        "Daardoor hebben wij een uniek inzicht in de ontwikkeling van de woningprijzen bij u in de buurt en kunnen wij u adviseren welke prijs u het beste kunt vragen om het hoogst mogelijk resultaat te behalen.",
      image: "/images/properties/prop2-ext.png",
    },
    {
      number: "03",
      title: "Wij hanteren een Brexit strategie",
      description:
        "De toenemende stroom van expats is zeer belangrijk in de huidige markt en met onze strategie zorgen wij ervoor dat deze groep via de juiste kanalen bereikt wordt.",
      image: "/images/properties/prop3-ext.png",
    },
    {
      number: "04",
      title: "Wij zijn buurtspecialisten",
      description: "Met jarenlange ervaring in uw favoriete buurt(en).",
      image: "/images/properties/prop4-ext.png",
    },
    {
      number: "05",
      title: "Groot netwerk van makelaars, taxateurs en bouwkundigen",
      description:
        "Wij onderhouden een zeer goede relatie met onze collega makelaars. Dit kan net het verschil maken tussen het huis voor u kunnen aan-/verkopen of niet.",
      image: "/images/properties/prop1-int1.png",
    },
  ] satisfies AboutDifference[],
};

export const aboutTeamData = {
  heading: "Maak kennis met ons team",
  description:
    "Tot slot moet het gevoel kloppen, zeker binnen de huidige Amsterdamse woningmarkt. Maak daarom kennis met ons team!",
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
