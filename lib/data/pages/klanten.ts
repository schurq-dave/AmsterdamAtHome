import type { SeoData, Testimonial } from "@/lib/types";

export const klantenPageSeo: SeoData = {
  metaTitle: "Klanten Vertellen",
  metaDescription:
    "Lees de ervaringen van onze klanten. Amsterdam at Home makelaars is beoordeeld met een 9.8 uit meer dan 500 reviews.",
  slug: "klanten-vertellen",
  keywords: [
    "klantbeoordelingen amsterdam at home",
    "reviews makelaar amsterdam",
    "ervaringen makelaar",
  ],
};

export const klantenHeroData = {
  label: "Onze referenties",
  title: "Klanten vertellen",
  backgroundImage: "https://i.postimg.cc/NfTNcmKk/amsterdam_at_home_22_1.jpg",
};

export const klantenRatingData = {
  score: "9.8",
  reviewCount: "500+",
  intro: "Wie kunnen er beter vertellen over de ervaringen van onze dienstverlening dan onze klanten? Amsterdam at Home makelaars heeft inmiddels al meer dan 500 klanten begeleid bij het aan- of verkopen van een woning. Wij zijn dan ook erg trots op onze klantenbeoordelingsscore van een 9.8. Lees hier meer over in onze referenties.",
};

export const testimonials: Testimonial[] = [
  {
    name: "Marvin van Dongen",
    score: "10",
    stars: 5,
    paragraphs: [
      '"Wouter, Anouk en hun team hebben mij bijgestaan in zowel de verkoop van twee woningen als in de aankoop van een nieuwe woning, in het centrum van Amsterdam. In een tijd waarin de woningmarkt behoorlijk gespannen was.',
      'Ze hebben werkelijk alles van A tot Z uit handen genomen, absoluut topwerk geleverd, en mij geholpen in de aanschaf van het droomhuis van mij en mijn kinderen. Deze mensen doen niet alleen hun werk, ze maken het persoonlijk. Ze kijken naar de mens en zorgen ervoor dat je je geluk vindt. Ze zijn kritisch, ze verstaan hun vak, en gaan een stap verder. Je hebt makelaars, en je hebt Amsterdam At Home. Als je van Amsterdam houdt, kies je voor dit geweldige team."',
    ],
    borderVariant: "orange",
    platform: "funda",
  },
  {
    name: "Thomas de Boer",
    score: "5.0",
    stars: 5,
    paragraphs: [
      '"Hele fijne ervaring met Amsterdam at Home. Ze kennen de Amsterdamse markt ontzettend goed en werken met een heldere strategie. We werden wekelijks proactief op de hoogte gehouden via WhatsApp. Binnen no-time ons appartement in West verkocht voor een uitstekende prijs. Aanrader!"',
    ],
    borderVariant: "stone",
    platform: "google",
  },
  {
    name: "Martin Bezemer",
    score: "10",
    stars: 5,
    paragraphs: [
      '"Ik belde om advies te vragen over een vastgoed kwestie. Dhr Thöne vertelde mij op een integere en prettige wijze over de markt en analyseerde mijn probleem feilloos. De informatie die Dhr Thöne verstrekte was realistisch, deskundig en betrouwbaar."',
    ],
    borderVariant: "stone",
    platform: "funda",
  },
  {
    name: "Sarah van der Meer",
    score: "5.0",
    stars: 5,
    paragraphs: [
      '"Super makelaar! Vanaf het eerste contact was het duidelijk dat dit een kantoor is met passie voor het vak. Anouk dacht heel goed met ons mee bij de aankoop van ons eerste huis. Altijd bereikbaar en super snel schakelen, wat echt nodig was in de huidige markt."',
    ],
    borderVariant: "orange",
    platform: "google",
  },
  {
    name: "Josien Herder",
    score: "9.9",
    stars: 4.5,
    paragraphs: [
      '"Erg prettig. Het overleg was goed, afspraken waren duidelijk en werden goed nagekomen. De kennis om in te schatten hoe het huis verkocht kon worden was zeer adequaat. Ook tijdens het bieden werd er kundig advies gegeven. Ook de foto\'s, verzorgd door Amsterdam at Home waren heel smaakvol."',
    ],
    borderVariant: "stone",
    platform: "funda",
  },
  {
    name: "Jeroen en Lisa",
    score: "5.0",
    stars: 5,
    paragraphs: [
      '"De data-gedreven aanpak van Amsterdam at Home werkt fantastisch. We kregen heel nauwkeurig inzicht in de waarde van onze woning en de buurt. De presentatie (video, foto\'s en teksten) was van enorm hoge kwaliteit. Ons huis in Zuid was binnen een week verkocht."',
    ],
    borderVariant: "stone",
    platform: "google",
  },
  {
    name: "Peter Sluijter",
    score: "10",
    stars: 5,
    paragraphs: [
      '"Je voelt dat de verkoop van je huis in vertrouwde handen is. Ze maken meer dan waar wat ze beloven. Je krijgt bij vragen altijd snel en duidelijk antwoord."',
    ],
    borderVariant: "stone",
    platform: "funda",
  },
];
