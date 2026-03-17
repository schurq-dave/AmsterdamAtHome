import type { NeighborhoodTab, NeighborhoodContent } from "@/lib/types";

export const neighborhoodTabs: NeighborhoodTab[] = [
  { id: "houthavens", label: "Houthavens" },
  { id: "noord", label: "Amsterdam Noord" },
  { id: "oud-west", label: "Amsterdam Oud-West" },
  { id: "centrum", label: "Amsterdam Centrum" },
  { id: "oost", label: "Amsterdam Oost" },
  { id: "zuidoost", label: "Amsterdam Zuid-Oost" },
];

export const neighborhoodContent: Record<string, NeighborhoodContent> = {
  houthavens: {
    title: "Over de Amsterdamse Houthavens",
    paragraphs: [
      "De Houthavens van Amsterdam ondergaat een ware metamorfose. Vroeger losten vrachtschepen met hout uit heel Europa hier hun lading. Nu is het gebied een fantastische plek om te wonen.",
      "Tal van creatieve bedrijven hebben zich al gevestigd in het gebied, evenals scholen, sportscholen, trendy bars, sfeervolle restaurants en gezellige terrassen aan het water.",
    ],
    linkText: "Bekijk aanbod in Houthavens",
    specialist: "Anouk",
  },
  noord: {
    title: "Onze buurtspecialist over Amsterdam Noord",
    paragraphs: [
      "Amsterdam Noord is een buurt gelegen aan de Noordkant van het IJ en ligt recht tegenover het centrum van Amsterdam. De buurt is bekend om zijn industriële geschiedenis, met oude fabrieken en scheepswerven die nu zijn omgebouwd tot hippe en trendy wooncomplexen.",
      "Een van de grootste highlights van Amsterdam Noord is het EYE Filmmuseum, dat een indrukwekkende collectie films toont en een prachtig uitzicht biedt over de stad en het IJ. Ook is er het NDSM-werf, een oude scheepswerf die nu een cultureel erfgoed is.",
      "Een andere hotspot is het A'DAM Toren, waar je kunt genieten van een panoramisch uitzicht over de stad. Daarnaast zijn er veel leuke plekken om te eten en drinken in de buurt, zoals Pllek of het Brouwerij 't IJ.",
    ],
    linkText: "Bekijk aanbod in Noord",
    specialist: "Kaylee",
  },
  "oud-west": {
    title: "Onze buurtspecialist over Amsterdam Oud-West",
    paragraphs: [
      "Amsterdam Oud-West is wijk in Amsterdam, gelegen ten westen van het Centrum van de stad. Het is een populaire buurt met een levendige sfeer en veel historische en culturele bezienswaardigheden.",
      "Ook vind je hier veel winkels, café's en restaurants zoals Brouwerij 't IJ en de Westermarkt. Op de Westermarkt is iedere zaterdag een boerenmarkt en iedere zondag een biologische markt. En vergeet het Anne Frank Huis niet.",
    ],
    linkText: "Bekijk aanbod in Oud-West",
    specialist: "Danique",
  },
  centrum: {
    title: "Onze buurtspecialist over Amsterdam Centrum",
    paragraphs: [
      "Amsterdam Centrum is het hart van de stad en omvat de beroemde grachtengordel. De grachtengordel is een UNESCO werelderfgoed en bestaat uit een aantal historische grachten met monumentale panden en bruggen.",
      "En dat is niet het enige dat het Centrum van Amsterdam zo mooi maakt. Met De Dam, De Jordaan, het Rijksmuseum, de Heineken Experience en De Negen Straatjes is het centrum van Amsterdam een van de mooiste buurten van de wereld.",
    ],
    linkText: "Bekijk aanbod in Centrum",
    specialist: "Anouk",
  },
  oost: {
    title: "Onze buurtspecialist over Amsterdam Oost",
    paragraphs: [
      "Amsterdam Oost is een diverse en multiculturele buurt met een aantal populaire bezienswaardigheden en hotspots. De Dappermarkt is er hier een van. Hier komt een mengelmoes van verschillende culturen samen.",
      "Ook het alom bekende Oosterpark met z'n kenmerkende rozentuin en grote vijver is onderdeel van Amsterdam Oost. En tussen het Oosterpark en de Dappermarkt bevindt zich het Tropenmuseum.",
      "Over het algemeen is Amsterdam Oost een stijlvolle en aangename buurt om te wonen met veel historische bezienswaardigheden, een levendige sfeer en een brede diversiteit.",
    ],
    linkText: "Bekijk aanbod in Oost",
    specialist: "Wouter",
  },
  zuidoost: {
    title: "Onze buurtspecialist over Amsterdam Zuid-Oost",
    paragraphs: [
      "Amsterdam Zuid-Oost is wijk in Amsterdam waar een mix van verschillende culturen en nationaliteiten samenkomen. Een van de grootste highlights is het Amsterdamse Bos met meer dan 1.000 hectare aan bossen, weiden, meren en parken.",
      "Een andere hotspot is het stadion van Ajax, de Johan Cruijff ArenA. Verder zijn er veel leuke plekken om te eten en drinken, zoals het Bijlmerpark Theater, een groot theatercomplex met vele activiteiten en voorstellingen.",
    ],
    linkText: "Bekijk aanbod in Zuid-Oost",
    specialist: "Kaylee",
  },
};
