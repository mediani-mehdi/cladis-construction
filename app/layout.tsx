import type { Metadata, Viewport } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102e56",
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
    icon: "/images/cladis-icon-95c79c03.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cairo.variable} ${montserrat.variable}`}>
      <body className="bg-white text-primary font-cairo min-h-screen antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
