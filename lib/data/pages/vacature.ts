import type { SeoData } from "@/lib/types";

export const vacaturePageSeo: SeoData = {
  metaTitle: "Vacature: Office Manager",
  metaDescription:
    "Wij zoeken een energieke Office Manager voor ons makelaarsteam in hartje Amsterdam. Bekijk de vacature en solliciteer direct bij Amsterdam at Home.",
  slug: "vacature-office-manager",
  keywords: [
    "vacature makelaar amsterdam",
    "office manager amsterdam",
    "vacature makelaardij",
  ],
};

export const vacatureHeroData = {
  label: "Vacature",
  title: "Office Manager",
  backgroundImage: "/images/vacature/vacature-hero.png",
  bgPositionClass: "bg-[center_30%]",
  overlayClass: "bg-black/20",
};

export const vacatureContentData = {
  subtitle:
    "Office Manager bij Amsterdam At Home – het kloppend hart van ons makelaarsteam (fulltime)",
  location: "Hartje Amsterdam",
  intro: [
    "Bij Amsterdam At Home combineren we menselijkheid met data-gedreven innovatie. We zijn een vooruitstrevend makelaarskantoor dat de woningmarkt doorgrondt met slimme marketing en warme relaties met klanten én collega's.",
    "Daarom zoeken we jou: een energieke en georganiseerde Office Manager die het rustpunt en steunpunt is voor ons team van 5 makelaars en onze fulltime binnendienstmedewerker.",
  ],
  cta: { label: "Neem contact op", href: "#solliciteren" },
  responsibilities: {
    heading: "Wat ga je doen?",
    description: "In deze veelzijdige rol:",
    items: [
      "Je zorgt dat het kantoor op rolletjes loopt: van agendabeheer en dossiercontrole tot klantcontact.",
      "Je ondersteunt makelaars bij het voorbereiden van verkoopdossiers, taxaties, bezichtigingen en koopovereenkomsten.",
      "Je bewaakt deadlines, schakelt snel met notarissen, fotografen en klanten en zorgt dat alle stukken tijdig en correct klaarliggen.",
      "Je houdt overzicht, structuur en sfeer op kantoor.",
      "Je bent het eerste aanspreekpunt voor binnenkomende klanten, leveranciers en samenwerkingspartners.",
      "Je organiseert de gezamenlijke lunch – voor de gezelligheid én de teamspirit.",
    ],
  },
  offer: {
    heading: "Wat bieden wij?",
    items: [
      {
        title: "Een dynamische werkomgeving",
        description: "Werk in het bruisende hart van Amsterdam.",
      },
      {
        title: "Een betrokken en hecht team",
        description:
          "Jouw inzet wordt gewaardeerd en je maakt deel uit van een fijne werksfeer.",
      },
      {
        title: "Ruimte voor ontwikkeling",
        description:
          "Mogelijkheden om jezelf te ontwikkelen en te groeien binnen de vastgoedbranche.",
      },
      {
        title: "Flexibele werktijden",
        description: "Uren zijn bespreekbaar, passend bij jouw situatie.",
      },
    ],
  },
  requirements: {
    heading: "Wat breng jij mee?",
    items: [
      "Je kent alle ins en outs van het makelaarsvak en je bent klaar voor meer verantwoordelijkheid.",
      "Je hebt ervaring in een ondersteunende of coördinerende rol binnen een makelaarskantoor of vastgoedomgeving.",
      "Je denkt vooruit, schakelt snel en houdt altijd het overzicht.",
      "Je combineert daadkracht met vriendelijkheid en vindt het leuk om in een dynamisch team te werken.",
    ],
  },
  closing: {
    paragraph:
      "Bij Amsterdam At Home ben je geen radertje in een machine, maar een sleutelfiguur in een mensgericht team met grote ambities. We geloven in technologie én teamgevoel en zorgen dat jij daar middenin staat. Hier krijg je ruimte om te groeien, initiatief te nemen en impact te maken.",
    applyHeading: "Solliciteer vandaag nog!",
    applyDescription:
      "Solliciteer direct via onderstaand formulier. Dan nemen we zo snel mogelijk contact met je op en maken we graag kennis. Wil je eerst meer informatie? Neem dan telefonisch of per mail contact met ons op!",
  },
};

export const vacatureContactData = {
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
