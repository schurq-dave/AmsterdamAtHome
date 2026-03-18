import type { NavigationData } from "@/lib/types";

export const navigationData: NavigationData = {
  desktopLinks: [
    { label: "Datagedreven Makelaardij", href: "/datagedreven-makelaardij" },
    { label: "Overbiedingen", href: "#datagedreven" },
    { label: "Contact", href: "#contact", variant: "primary" },
  ],
  menuGroups: [
    {
      title: "Over ons",
      links: [
        { label: "Datagedreven Makelaardij", href: "/datagedreven-makelaardij" },
        { label: "Ons woningaanbod", href: "/aanbod" },
        { label: "Klanten vertellen", href: "/klanten-vertellen" },
        { label: "Blog", href: "/blog" },
        { label: "Vacature: Office manager", href: "/vacature-office-manager" },
      ],
    },
    {
      title: "Onze Expertise",
      links: [
        { label: "Aankoopmakelaar", href: "/aankoop" },
        { label: "Verkoopmakelaar", href: "/verkoop" },
        { label: "Beleggingsmakelaar", href: "/belegging" },
      ],
    },
    {
      title: "Verkopen",
      links: [
        { label: "Verkoop < € 1 miljoen", href: "/verkoop-laag" },
        { label: "Verkoop > € 1 miljoen", href: "/verkoop-hoog" },
        { label: "Stille verkoop Amsterdam", href: "/stille-verkoop" },
      ],
    },
    {
      title: "Huizenmarkt Amsterdam",
      links: [
        { label: "Woningwaarde berekenen", href: "/woningwaarde" },
        { label: "Woningmarkt Amsterdam", href: "/woningmarkt" },
        { label: "Miljoenenmarkt Amsterdam", href: "/miljoenenmarkt" },
      ],
    },
  ],
  menuNeighborhoods: [
    { label: "Binnenstad", href: "#" }, { label: "Grachtengordel", href: "#" }, { label: "Makelaar Amstelveen", href: "#" }, { label: "Spaarndammerbuurt", href: "#" },
    { label: "Bos en Lommer", href: "#" }, { label: "Helmersbuurt", href: "#" }, { label: "Museumkwartier", href: "#" }, { label: "Staatsliedenbuurt", href: "#" },
    { label: "Buitenveldert", href: "#" }, { label: "Hoofddorpplein", href: "#" }, { label: "Nieuw-West", href: "#" }, { label: "Stadionbuurt", href: "#" },
    { label: "Centrum", href: "#" }, { label: "Houthavens", href: "#" }, { label: "Noord", href: "#" }, { label: "Watergraafsmeer", href: "#" },
    { label: "De Baarsjes", href: "#" }, { label: "IJburg", href: "#" }, { label: "Oost", href: "#" }, { label: "Weesperzijde", href: "#" },
    { label: "De Pijp", href: "#" }, { label: "Indische Buurt", href: "#" }, { label: "Oostelijke Eilanden", href: "#" }, { label: "Westerpark", href: "#" },
    { label: "Frederik Hendrikbuurt", href: "#" }, { label: "Jordaan", href: "/buurten/jordaan" }, { label: "Oud-West", href: "#" }, { label: "Willemspark", href: "#" },
    { label: "Funenpark", href: "#" }, { label: "Kinkerbuurt", href: "#" }, { label: "Rivierenbuurt", href: "#" }, { label: "Zeeburg", href: "#" },
  ],
  menuExtraNeighborhoods: [{ label: "Zuid-Oost", href: "#" }, { label: "Stadshart Amstelveen", href: "#" }],
  footerColumns: [
    {
      title: "Makelaardij",
      links: [
        { label: "Aankoopmakelaar", href: "/aankoop" },
        { label: "Verkoopmakelaar", href: "/verkoop" },
        { label: "Waardebepaling", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "020-3080650", href: "tel:0203080650" },
        { label: "info@amsterdam-athome.nl", href: "mailto:info@amsterdam-athome.nl" },
      ],
    },
  ],
};
