import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  title: "CLADIS CONSTRUCTION | Enveloppe Industrielle & Construction Métallique",
  description:
    "Spécialiste de l'enveloppe du bâtiment, bardage métallique, couverture et étanchéité industrielle. Bureau d'études intégré et logistique en Auvergne-Rhône-Alpes.",
  keywords: [
    "CLADIS CONSTRUCTION",
    "Bardage métallique Chambéry",
    "Couverture industrielle Savoie",
    "Étanchéité toiture Rhône-Alpes",
    "Charpente métallique",
    "Building Services",
    "Architecture industrielle",
  ],
  authors: [{ name: "CLADIS CONSTRUCTION" }],
  icons: {
    icon: "/images/cladis-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-white text-swiss-ink min-h-screen antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
