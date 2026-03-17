import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amsterdam at Home | Boutique Makelaar",
    template: "%s | Amsterdam at Home",
  },
  description:
    "De makelaar van Amsterdam. Beoordeeld met een 9.8. Wij bieden een proactieve, persoonlijke en datagedreven aanpak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`scroll-smooth ${cormorant.variable} ${lato.variable} ${montserrat.variable}`}
    >
      <body className="antialiased selection:bg-boutique-stone selection:text-boutique-dark bg-boutique-stone transition-colors duration-1000 ease-in-out">
        {children}
      </body>
    </html>
  );
}
