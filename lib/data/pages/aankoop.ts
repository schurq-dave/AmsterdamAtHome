import type {
  SeoData,
  Property,
  Testimonial,
  AboutTeamMember,
  UspItem,
} from "@/lib/types";

export const aankoopPageSeo: SeoData = {
  metaTitle: "Aankoopmakelaar Amsterdam",
  metaDescription:
    "Vind uw droomhuis met een aankoopmakelaar in Amsterdam. Proactief, data-gedreven en persoonlijk. Amsterdam At Home begeleidt u bij het kopen van een woning.",
  slug: "aankoop",
  keywords: [
    "aankoopmakelaar amsterdam",
    "woning kopen amsterdam",
    "aankoopmakelaar",
    "huis kopen amsterdam",
  ],
};

export const aankoopHeroData = {
  label: "AANKOOPMAKELAAR MET EEN PROACTIEVE AANPAK",
  title: "Aankoopmakelaar Amsterdam",
  subtitle: "Vind uw droomhuis!",
  backgroundImage:
    "https://i.postimg.cc/dVcDNL2P/bigstock_Amsterdam_Sunset_City_Skyline_212181106.jpg",
  bgPositionClass: "bg-[center_30%]",
};

export const aankoopIntroData = {
  paragraph:
    "Als Amsterdamse aankoopmakelaar zijn wij proactief, data-gedreven en persoonlijk. Dat zijn de kernwoorden van Amsterdam At Home Makelaars. Wij geloven dat een proactieve aanpak essentieel is om u zo goed mogelijk te helpen bij uw zoektocht naar een woning in Amsterdam. Wij nemen al uw zorgen uit handen zodat het naast een spannend traject, ook een leuk traject wordt!",
};

export const aankoopWoningSectionData = {
  heading: "Woning kopen in Amsterdam?",
  paragraph:
    "Voor de verkoop van een huis schakelt nagenoeg iedereen een verkoopmakelaar in. Zij zorgen voor de benodigde kennis, ervaring en begeleiding en dat u bij verkoop de beste prijs voor uw huis krijgt. Waarom dit tijdens aankoop niet of nauwelijks wordt gedaan is voor ons als makelaar een raadsel. Wij zien op dagelijkse basis onervaren bezichtigers die zonder enige kennis van de huidige markt of de buurt grote sommen geld bieden op een huis. Dat kan anders. Als aankoopmakelaar bieden wij de benodigde kennis en ervaring. Wij leveren de juiste adviezen op basis van data en zijn flexibel in onze werkzaamheden.\n\nOns aankooprapport biedt inzichten waarover u normaal gesproken als koper van een woning niet zou beschikken. Denk hierbij aan een vergelijking van de prijzen per vierkante meter van de aangrenzende buurten. Download vrijblijvend ons aankooprapport nog vóórdat u uw nieuwe droomhuis aankoopt!",
  ctaLabel: "Download aankooprapport",
  ctaHref: "#aankoop-form",
  buurtOptions: [
    { value: "", label: "Selecteer uw buurt" },
    { value: "centrum", label: "Amsterdam Centrum" },
    { value: "oud-west", label: "Amsterdam Oud-West" },
    { value: "oud-zuid", label: "Amsterdam Oud-Zuid" },
    { value: "noord", label: "Amsterdam Noord" },
    { value: "oost", label: "Amsterdam Oost" },
    { value: "zuidoost", label: "Amsterdam Zuid-Oost" },
    { value: "houthavens", label: "Houthavens" },
    { value: "jordaan", label: "Jordaan" },
    { value: "overig", label: "Overig" },
  ],
};

export const aankoopRecentPropertiesData = {
  heading: "Recent aangekocht door onze klanten",
  description: "Een selectie van woningen die wij recentelijk voor onze klanten hebben aangekocht.",
  properties: [
    {
      image: "https://i.postimg.cc/LspjQTTq/130717214_1920x1280.jpg",
      label: "Aangekocht",
      labelStyle: "bg-boutique-paper/90 text-boutique-dark",
      title: "Keizersgracht 402",
      location: "Centrum • 145 m²",
      price: "€ 1.250.000 k.k.",
    },
    {
      image: "https://i.postimg.cc/qvzRT5N9/112275029_1920x1280.jpg",
      label: "Aangekocht",
      labelStyle: "bg-boutique-paper/90 text-boutique-dark",
      title: "Brouwersgracht 210",
      location: "Centrum • 135 m²",
      price: "€ 1.450.000 k.k.",
    },
    {
      image: "https://i.postimg.cc/bwsJhBZW/212827899_1920x1281.jpg",
      label: "Aangekocht",
      labelStyle: "bg-boutique-paper/90 text-boutique-dark",
      title: "Lijnbaansgracht 65",
      location: "Jordaan • 85 m²",
      price: "€ 795.000 k.k.",
    },
  ] satisfies Property[],
};

export const aankoopWaardebepalingData = {
  heading: "Online waardebepaling",
  description:
    "Wilt u weten wat uw huidige woning waard is? Ontvang direct een indicatie van de woningwaarde.",
  ctaLabel: "Wat is mijn huis waard?",
  ctaHref: "#waardebepaling",
};

export const aankoopProcessData = {
  heading: "Het aankoopproces van een woning",
  subheading: "De verschillende stappen binnen het aankoopproces van een woning bij Amsterdam at Home Makelaars.",
  steps: [
    { 
      number: "01", 
      title: "Denk na over uw droomhuis",
      description: "Wat zijn uw wensen en hoe wilt u wonen? Tijdens het eerste gesprek achterhalen we samen waar uw droomhuis aan moet voldoen. Naast het ontzorgen staat Amsterdam at Home ook voor persoonlijke aandacht. We komen daarom graag vrijblijvend in contact om elkaar te leren kennen en uw behoefte en vraag te achterhalen als start van het aankoopproces."
    },
    { 
      number: "02", 
      title: "Wat is er financieel mogelijk?",
      description: "Naast de behoeften en wensen, kijken we ook mee met uw financiële mogelijkheden. We denken met u mee en zoeken naar de beste voorwaarden en mogelijkheden. We gaan niet alleen voor een droomhuis dat bij u past, maar ook voor maandlasten en een hypotheek die aansluiten bij uw toekomstplannen en wensen."
    },
    { 
      number: "03", 
      title: "De zoektocht naar uw huis start",
      description: "De zoektocht is nu officieel gestart! Op basis van de kortgesloten wensen, behoeften, eisen en mogelijkheden gaan onze specialisten aan de slag met het zoeken naar uw droomhuis. De zoektocht vindt plaats binnen ons eigen uitgebreide netwerk en platformen."
    },
    { 
      number: "04", 
      title: "Plannen van een bezichtiging",
      description: "Wanneer een huis voldoet aan uw behoeften en wensen, en wij als makelaars potentie zien in de desbetreffende woning, nemen wij contact met u en de verkoper op om een bezichtiging in te plannen."
    },
    { 
      number: "05", 
      title: "Analyse",
      description: "Op basis van de bezichtiging herzien onze aankoopmakelaars de voorafgaande analyse om te kijken of dit nog steeds genoeg potentie heeft om te voldoen aan uw droomhuis. Onze aankoopmakelaars beschikken over de benodigde kennis en ervaring om uw budget te bewaken en zullen u adviseren in wat de juiste prijs voor het juiste huis is. Zo betaalt u nooit te veel voor een woning. Een aankoopmakelaar gaat voor de beste deal voor de koper."
    },
    { 
      number: "06", 
      title: "Bieden",
      description: "De bezichtiging is goed verlopen, de nadere analyse was veelbelovend en alles past binnen het plaatje, bieden maar! Ondanks uw enthousiasme zorgen we dat het gevoel niet de overhand neemt en dat uw belangen voorop blijven staan. De bieding wordt gewogen ingezet en de voorwaarden van de tegenpartij worden meegenomen. U wordt in dit proces volledig ontzorgd en de onderhandeling laten we aan onze ervaren aankoopmakelaars over."
    },
    { 
      number: "07", 
      title: "Aankopen",
      description: "Het bod is geaccepteerd en de koopovereenkomst laten wij opmaken door de notaris. Wij controleren de overeenkomt en ronden het proces af. Hetgeen wat u moet doen? Een handtekening zetten en proosten!"
    },
    { 
      number: "08", 
      title: "Verhuizen",
      description: "De laatste stap, de sleutel van uw droomhuis. De verhuizing kan in gang worden gezet. Als een na laatste stap inspecteren we de woning nogmaals en nemen we de meterstanden op. Ook gaan we met je mee naar de notaris voor de levering. We ronden het proces samen af zodat u zorgeloos kan beginnen met verbouwen of verhuizen."
    },
  ],
  ctaLabel: "Aankoopmakelaar inschakelen",
  ctaHref: "#kennismaken",
};

export const aankoopAdvantagesData = {
  heading: "De voordelen van een aankoopmakelaar",
  items: [
    {
      title: "Kritische blik tijdens bezichtigingen",
      description: "Na het vinden van een reeks geschikte woningen kunnen er bezichtigingen worden ingepland. U gaat samen met een van de makelaars van Amsterdam At Home naar een bezichtiging van een potentiële woning. De rol van de aankoopmakelaar staat centraal bij de bezichtiging. Dit is het moment om de woning te beoordelen en met een kritische blik naar de woning en de vraagprijs te kijken. Door de specialisatie van de aankoopmakelaar kunnen de juiste kritische vragen worden gesteld tijdens een bezichtiging om een gegrond advies te kunnen geven over de aankoop van de woning.",
    },
    {
      title: "Streven naar de beste prijs",
      description: "Het is niet alleen belangrijk dat we samen met u de juiste woningen vinden, maar dat u hiervoor ook de beste prijs betaalt. Een aankoopmakelaar is gespecialiseerd in de aankoop van woningen en streeft daarom altijd naar de beste prijs voor de koper. Door de reële blik van onze makelaars adviseren zij u over de prijs-kwaliteitverhouding van een woning. De verkopende partij is namelijk altijd gebaat bij de hoogst haalbare prijs voor de woning. Het is belangrijk om de onderhandeling aan te gaan met de juiste kennis van de markt.",
    },
  ],
};

export const aankoopNoWorriesData = {
  heading: "Geen zorgen tijdens het aankoopproces",
  description: "Het aankopen van een woning is tijdrovend en wordt over het algemeen ervaren als stressvol. Dit nemen wij graag uit handen. Ook als u uw droomhuis al heeft gezien. Laat een woning niet aan u voorbij gaan en schakel een aankoopmakelaar in. Als ervaren all-round makelaar en specialist van de Amsterdamse huizenmarkt zijn wij dagelijks bezig met het aan- of verkopen van huizen. Wat wij jou als aankoopmakelaar bieden?",
  subheading: "Wat wij u leveren als aankoopmakelaar",
  items: [
    {
      title: "Uitgebreid en gedegen onderzoek naar verborgen parels",
      description:
        "Zo zorgen wij dat uw droomhuis niet aan uw neus voorbij gaat. Ook plannen en begeleiden wij de bezichtigingen. Wij houden rekening met uw agenda. Naast uitgebreid advies over de prijs-kwaliteit verhouding van het huis onderhandelen we ook voor de beste prijs. Ook de formaliteiten zoals de koopovereenkomst, leveringsakte en hypotheekakte worden door ons gecontroleerd.",
    },
  ] satisfies UspItem[],
};

export const aankoopWhyUsData = {
  heading: "Waarom aankoopmakelaar Amsterdam At Home?",
  items: [
    {
      title: "Wij beschikken over eigen datamodel",
      description:
        "Hierdoor weten wij als eerste wat er speelt op de markt en kunnen wij u het beste adviseren over de juiste waarde en een bieding die leidt tot een aankoop. Dit datamodel stelt ons in staat om u een gratis online waardebepaling of een totaalrapport van een door u gekozen buurt aan te bieden.",
      image: "/images/aankoop-rapport-transparent.png",
      imageAlt: "Rapport aankoopmakelaar",
      imageClassName: "object-contain p-8 md:p-12 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]",
    },
    {
      title: "Groot netwerk van makelaars, taxateurs en bouwkundigen",
      description:
        "Wij onderhouden een zeer goede relatie met onze collega makelaars. Dit kan net het verschil maken tussen het huis voor u kunnen aankopen of niet.",
      image: "/images/aankoop-netwerk-transparent.png",
      imageAlt: "Netwerk aankoopmakelaar",
      imageClassName: "object-contain p-8 md:p-12 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]",
    },
    {
      title: "Wij zijn buurtspecialisten",
      description:
        "Met jarenlange ervaring in uw favoriete buurt(en). Met de huidige schaarste aan woningen is het als aankoopmakelaar in Amsterdam van groot belang dat wij de eerste zijn die uw potentiële woning kunnen aankopen. Onze buurtspecialisten zijn actief in Amsterdam Noord, Zuid, West, Oost en het het Centrum.",
      image: "/images/buurten-kaart-3d-transparent.png",
      imageAlt: "Buurten voor aankoopproces",
      imageClassName: "object-contain p-8 md:p-12 drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]",
    },
    {
      title: "Team van enthousiaste en ervaren medewerkers",
      description:
        "Hierdoor hebben wij een persoonlijke benadering en korte lijnen. U kunt zeer snelle reacties verwachten. Samen brengen wij uw wensen en behoeften in kaart. Zo weten wij wat uw droomhuis in Amsterdam is en kunnen wij op zoek naar een passende woning voor u!",
      image: "https://i.postimg.cc/wTNX7VHL/Chat-GPT-Image-2-mrt-2026-14-57-27.png",
      imageAlt: "Team Amsterdam at Home",
    },
  ],
};

export const aankoopStatsData = {
  stat: "Al 500+ klanten",
  heading: "Heeft u uw droomhuis al gezien?",
  description:
    "Laat ons u helpen bij het vinden van uw ideale woning in Amsterdam. Schakel een aankoopmakelaar in en ontdek het verschil.",
  ctaLabel: "Vrijblijvend kennismaken",
  ctaHref: "#kennismaken",
};

export const aankoopTestimonialsData = {
  heading: "Onze beoordelingen",
  testimonials: [
    {
      name: "Marvin van Dongen",
      score: "10",
      stars: 5,
      paragraphs: [
        '"Ze hebben werkelijk alles van A tot Z uit handen genomen, absoluut topwerk geleverd. Deze mensen doen niet alleen hun werk, ze maken het persoonlijk."',
      ],
      borderVariant: "orange" as const,
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
    {
      name: "Martin Bezemer",
      score: "10",
      stars: 5,
      paragraphs: [
        '"Dhr Thöne vertelde mij op een integere en prettige wijze over de markt en analyseerde mijn probleem feilloos. De informatie was realistisch, deskundig en betrouwbaar."',
      ],
      borderVariant: "stone" as const,
    },
  ] satisfies Testimonial[],
};

export const aankoopTeamData = {
  heading: "De aankoopmakelaars van Amsterdam At Home",
  description:
    "Onze ervaren aankoopmakelaars staan voor u klaar om u te begeleiden bij het vinden van uw droomhuis in Amsterdam.",
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
      role: "Aankoopmakelaar",
      name: "Kaylee",
      bio: "Kaylee is een betrokken aankoopmakelaar met uitgebreide kennis van Amsterdam Noord en Zuid-Oost. Zij combineert haar lokale expertise met een persoonlijke aanpak om klanten te helpen hun droomhuis te vinden.",
      email: "info@amsterdam-athome.nl",
      layout: "image-left" as const,
    },
  ] satisfies AboutTeamMember[],
};

export const aankoopFinalFormData = {
  heading: "Woning kopen in Amsterdam?",
  subheading: "Meld u aan voor een vrijblijvend kennismakingsgesprek",
};
