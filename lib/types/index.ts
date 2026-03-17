export interface SeoData {
  metaTitle: string;
  metaDescription: string;
  slug: string;
  keywords?: string[];
  ogImageUrl?: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  logo: { src: string; alt: string };
  trustLogos: { src: string; alt: string }[];
  topBar: { rating: string; phone: string };
  contact: { phone: string; email: string; address: string; addressLine2: string };
  socialLinks: { platform: "instagram" | "facebook" | "linkedin"; href: string }[];
  newsletter: { heading: string; placeholder: string; buttonLabel: string };
}

export interface NavLink {
  label: string;
  href: string;
  variant?: "default" | "primary";
}

export interface MenuGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface NavigationData {
  desktopLinks: NavLink[];
  menuGroups: MenuGroup[];
  menuNeighborhoods: { label: string; href: string }[];
  menuExtraNeighborhoods: { label: string; href: string }[];
  footerColumns: { title: string; links: { label: string; href: string }[] }[];
}

export interface Property {
  image: string;
  label?: string;
  labelStyle?: string;
  title: string;
  location: string;
  price: string;
}

export interface Pillar {
  number: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
}

export interface TeamMember {
  name: string;
  specialty: string;
  image: string;
  quote: string;
  email: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NeighborhoodTab {
  id: string;
  label: string;
}

export interface NeighborhoodContent {
  title: string;
  paragraphs: string[];
  linkText: string;
  specialist: string;
}

export interface NewsArticle {
  image: string;
  date: string;
  title: string;
  author: string;
}

export interface ChatMarketData {
  [area: string]: { overbid: string; sold: number };
}

export interface UspItem {
  title: string;
  description: string;
}

export interface ChatMsg {
  id: string;
  text: string;
  isUser: boolean;
}

export interface AanbodProperty {
  slug: string;
  images: { src: string; alt: string; objectPosition?: string }[];
  badge?: { label: string; variant: "light" | "orange" };
  badgePosition?: "left" | "right";
  neighborhood: string;
  title: string;
  description: string;
  area: string;
  rooms: string;
  price: string;
  priceLabel: string;
  filterBuurt: string;
  filterPrijs: string;
  layout: "image-left" | "image-right";
  // Detail page specifics
  energyLabel?: string;
  constructionYear?: string;
  outdoorSpace?: string;
  features?: string[];
  fullDescription?: string[];
}

export interface FilterOption {
  value: string;
  label: string;
}

export interface AboutDifference {
  number: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageClassName?: string;
}

export interface AboutTeamMember {
  image: { src: string; alt: string };
  role: string;
  name: string;
  bio: string;
  email: string;
  layout: "image-left" | "image-right";
}

export interface Testimonial {
  name: string;
  score: string;
  stars: number;
  paragraphs: string[];
  borderVariant: "orange" | "stone";
  platform?: "funda" | "google";
}

export interface BlogArticle {
  image: string;
  date: string;
  category: string;
  categoryLabel: string;
  title: string;
  excerpt: string;
  author: string;
}
