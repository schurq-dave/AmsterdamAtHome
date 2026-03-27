import type { SeoData } from "@/lib/types";

export const overbiedingenSeo: SeoData = {
  metaTitle: "Overbiedingen in Amsterdam | Amsterdam at Home",
  metaDescription:
    "Ontdek alles over overbiedingen op de Amsterdamse woningmarkt. Actuele cijfers, trends en inzichten per buurt met onze Overbiedingsmonitor.",
  slug: "overbiedingen",
  keywords: [
    "overbiedingen amsterdam",
    "overbiedingsmonitor",
    "woningmarkt amsterdam",
    "hoeveel overbieden amsterdam",
    "huizenprijzen amsterdam",
  ],
};

export const overbiedingenHeroData = {
  label: "Marktinzichten",
  title: "Overbiedingen in Amsterdam",
  subtitle: "Actuele data en trends voor de Amsterdamse woningmarkt",
  backgroundImage: "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
  bgPositionClass: "bg-[center_30%]",
};

export const overbiedingenIntroData = {
  heading: "Inzicht in overbiedingen",
  paragraphs: [
    "Op de Amsterdamse woningmarkt is overbieden vaak eerder regel dan uitzondering. Maar hoeveel moet u precies overbieden? En verschilt dit per buurt of type woning? Met onze Overbiedingsmonitor geven wij u exact inzicht in de huidige marktsituatie.",
    "Wij analyseren continu de nieuwste transactiedata om u te voorzien van betrouwbare cijfers. Zo weet u als koper precies waar u aan toe bent en kunt u als verkoper een optimale verkoopstrategie bepalen."
  ],
  layoutVariant: "stacked" as const,
  centerHeading: true,
};

export const overbiedingenContentData = {
  heading: "Hoe werkt de Overbiedingsmonitor?",
  paragraphs: [
    "Onze monitor verzamelt data van alle recente woningtransacties in Amsterdam. We kijken hierbij niet alleen naar de uiteindelijke verkoopprijs, maar zetten deze af tegen de oorspronkelijke vraagprijs.",
    "Hierdoor kunnen we per stadsdeel, buurt en zelfs per type woning nauwkeurig in kaart brengen wat het gemiddelde overbiedingspercentage is. Deze data wordt wekelijks geüpdatet, zodat u altijd beschikt over de meest actuele inzichten."
  ],
  image: "/images/noord-market-stats.png",
  imageAlt: "Overbiedingsmonitor data",
  layoutVariant: "side-by-side" as const,
};
