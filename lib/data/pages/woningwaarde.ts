import type { SeoData } from "@/lib/types";

export const woningwaardePageSeo: SeoData = {
  metaTitle: "Woningwaarde Berekenen | Gratis Online Waardebepaling",
  metaDescription:
    "Bereken gratis de woningwaarde van uw huis in Amsterdam. Onze online calculator geeft u binnen 5 minuten een indicatie op basis van actuele marktdata.",
  slug: "woningwaarde",
  keywords: [
    "woningwaarde berekenen",
    "wat is mijn huis waard",
    "woningwaarde calculator",
    "online waardebepaling amsterdam",
    "huis waarde berekenen",
    "gratis taxatie amsterdam",
  ],
};

export const woningwaardeHeroData = {
  label: "Woningwaarde berekenen",
  title: "Woningwaarde berekenen",
  subtitle: "Ontvang binnen 5 minuten de geschatte woningwaarde van uw woning!",
  backgroundImage:
    "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
};

export const woningwaardeIntroData = {
  heading: "Online waardebepaling van uw huis",
  subtitle: "Wat is mijn huis waard?",
  ctaLabel: "Bereken uw woningwaarde",
  ctaHref: "#calculator",
};

export const woningwaardeCalculatorTextData = {
  heading: "Woningwaarde calculator",
  paragraphs: [
    "Bent u van plan uw woning in Amsterdam te verkopen en bent u benieuwd wat uw huis waard is? Of wilt u een woning in Amsterdam aankopen en bent u benieuwd wat deze kost? Vul dan de onze handige online rekentool in. Hiermee berekent u snel e woningwaarde van ieder huis. Althans, mits u de juiste gegevens bezit. Onze gratis woningwaarde calculator maakt gebruik van gegevens binnen onze database en van de algemeen bekende verkoopprijzen vergelijkbare woningen. Ons online taxatierapport moet dan ook alleen gezien worden als een indicatieve schatting.",
  ],
  layoutVariant: "stacked" as const,
  centerHeading: true,
};

export const woningwaardeGegevensData = {
  heading:
    "Welke gegevens heb ik nodig om mijn woningwaarde te berekenen?",
  paragraphs: [
    "Wat u bij de hand moet hebben voor de online woningwaarde berekening is uw postcode, huisnummer en de geschatte oppervlakte van de woning. Met deze informatie kan onze calculator de gemiddelde prijs per vierkante meter in uw buurt bepalen.",
    "Dit wordt gedaan door te kijken naar actuele data uit onze database en recente verkoopprijzen van huizen met vergelijkbare specificaties in uw postcodegebied. De verkoopprijzen van deze huizen worden vervolgens afgezet tegen de oppervlakte. Dit geeft ons een gemiddelde prijs per vierkante meter in uw specifieke buurt. Dit, in combinatie met onze marktdata, vormt de sterke basis van de schatting van de waarde van uw huis."
  ],
  image: "/images/woningwaarde-gegevens.png",
  imageAlt: "Woningwaarde gegevens",
  layoutVariant: "side-by-side" as const,
  smallText: true,
  imageType: "illustration" as const,
};

export const woningwaardeCalculatorFormData = {
  fields: {
    postcode: { label: "Postcode", placeholder: "1017 SE", required: true },
    huisnummer: { label: "Huisnummer", placeholder: "143", required: true },
    oppervlakte: {
      label: "Geschatte oppervlakte (m²)",
      placeholder: "85",
      required: true,
    },
  },
  submitLabel: "Bereken woningwaarde",
  resultPrefix:
    "Op basis van onze data schatten wij de waarde van uw woning op approximately",
  resultSuffix: "Neem contact op voor een nauwkeurige taxatie.",
};

export const woningwaardeDataSectionData = {
  heading: "Unieke data rapportages",
  paragraphs: [
    "Wij onderscheiden ons als makelaar in Amsterdam door onze unieke data rapportages van de Amsterdamse huizenmarkt. Als makelaar voldoen wij aan verschillende strenge opleidings- en kwaliteitseisen. Bij de vereniging van NVM Makelaars zijn zo'n 4000 makelaars aangesloten. Ook binnen deze groep van makelaars onderscheiden wij ons door onze data gerichte aanpak.",
    "Daarnaast zijn wij samen met nog 54 makelaars aangesloten bij Qualis. Op basis van ons grote databestand kunnen wij een zeer relevante online waardebepaling aanbieden. Naast de waardebepaling delen wij ook maandelijks cijfers uit de Amsterdamse woningmarkt en aansluitend een kwartaalrapport van de huizenmarkt."
  ],
  image: "/images/woningwaarde-street.png",
  imageAlt: "Amsterdam huizenmarkt straat",
  layoutVariant: "image-fullwidth" as const,
};

export const woningwaardeExacteData = {
  heading: "De exacte woningwaarde berekenen",
  paragraphs: [
    "Doorloop stap voor stap onze calculator om de geschatte waarde van uw woning te berekenen. Vergeet niet dat het een op-data-gebaseerde schatting is.",
    "Voor het berekenen van uw werkelijke woningwaarde is een officiële taxatie nodig inclusief technische inspectie. Hiervoor schakelen wij altijd een erkende taxateur in."
  ],
  bullets: [
    "De actuele staat van het huis",
    "In welke buurt staat het huis en omgeving",
    "De ligging van het huis ten opzichte van de zon",
    "Hoe energiezuinig is de woning (Energielabel)",
  ],
  trailingParagraph:
    "Dit zijn enkele kenmerken die niet kunnen worden beoordeeld via een online formulier en waar iedere online waardecheck dus te kort schiet. Onze calculator geeft echter wel op basis van historische data een waarde die zeer goed in de buurt zit van de werkelijke marktprijs.",
  layoutVariant: "side-by-side" as const,
};

export const woningwaardeHulpData = {
  heading:
    "Hulp nodig bij het verkrijgen van een hypotheek of verkoop?",
  paragraphs: [
    "Na het invullen van de online waardebepaling heeft u een gedegen indicatie van wat uw woning momenteel waard is op de markt. De volgende spannende stap is de zoektocht naar uw droomhuis in de stad.",
    "Ook daar helpen wij u graag mee als deskundig aankoopmakelaar in Amsterdam. Heeft u uw droomhuis gevonden? Dan kan het zo zijn dat u moet veranderen van hypotheek. Ook hier heeft Amsterdam at Home het juiste netwerk voor."
  ],
  subHeading:
    "Voor het verkopen van een woning hanteren wij een unieke online strategie. Onze aanpak omvat onder andere:",
  bullets: [
    "Advertenties op sociale media kanalen zoals Facebook, Instagram en LinkedIn",
    "Database van +10.000 potentiële kopers die we via mail op de hoogte brengen",
    "Promotie via Google en de daarbij aangesloten premium kanalen",
  ],
};

export const woningwaardeCtaCardsData = {
  cards: [
    {
      label: "Gemiddelde klanten beoordeling",
      description:
        "Onze klanten hebben de dienstverlening van Amsterdam at Home beoordeeld met een 9,8!",
      ctaLabel: "Kijken wat klanten zeggen",
      ctaHref: "/klanten-vertellen",
    },
    {
      label: "Download uw kwartaalrapport",
      description:
        "Download ons kwartaalrapport met de meest actuele woningmarktcijfers van uw buurt!",
      ctaLabel: "Download kwartaalrapport",
      ctaHref: "#",
    },
  ],
};
