"use client";

import Image from "next/image";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onOpenCatalogue?: () => void;
}

export default function Footer({ onOpenCatalogue }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-black/10 text-swiss-muted relative z-10">
      
      {/* Upper Footer: Brand Identity & Accreditations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="inline-block py-1" title="CLADIS CONSTRUCTION">
              <Image
                src="/images/cladis-logo-white-bg.png"
                alt="CLADIS CONSTRUCTION - Bardage, Étanchéité, Couverture"
                width={240}
                height={68}
                className="h-11 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-swiss-muted font-normal leading-relaxed max-w-sm">
              Conception, ingénierie et réalisation de l'enveloppe du bâtiment industriel et de la construction métallique en région Auvergne-Rhône-Alpes. Bureau d'études intégré et alliance opérationnelle avec Building Services.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 bg-swiss-subtle border border-black/8 text-[10px] font-mono text-swiss-ink font-medium">
                Garantie Décennale
              </span>
              <span className="px-2.5 py-1 bg-swiss-subtle border border-black/8 text-[10px] font-mono text-swiss-ink font-medium">
                DTU & Eurocodes 3
              </span>
              <span className="px-2.5 py-1 bg-swiss-subtle border border-black/8 text-[10px] font-mono text-swiss-ink font-medium">
                Chambéry (73)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-swiss-ink font-bold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-normal">
              <li>
                <a href="#" className="hover:text-swiss-ink transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#metiers" className="hover:text-swiss-ink transition-colors">Nos Métiers (Bardage, Couverture, Charpente)</a>
              </li>
              <li>
                <a href="#methodologie" className="hover:text-swiss-ink transition-colors">Notre Méthodologie en 4 Phases</a>
              </li>
              <li>
                <a href="#alliance" className="hover:text-swiss-ink transition-colors">L'Alliance Stratégique Building Services</a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-swiss-ink transition-colors">Réalisations & Portfolio</a>
              </li>
              <li>
                <a href="#configurateur" className="hover:text-swiss-ink transition-colors">Configurateur Technique</a>
              </li>
              <li>
                <a href="#devis" className="hover:text-swiss-ink transition-colors">Demande de Devis & Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Métiers & Expertises */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-swiss-ink font-bold block">
              Nos Lots
            </span>
            <ul className="space-y-2.5 text-xs font-normal">
              <li>
                <a href="#metiers" className="hover:text-swiss-ink transition-colors">Bardage Métallique</a>
              </li>
              <li>
                <a href="#metiers" className="hover:text-swiss-ink transition-colors">Couverture Industrielle</a>
              </li>
              <li>
                <a href="#metiers" className="hover:text-swiss-ink transition-colors">Étanchéité Toiture</a>
              </li>
              <li>
                <a href="#metiers" className="hover:text-swiss-ink transition-colors">Charpente Métallique</a>
              </li>
              <li>
                <a href="#metiers" className="hover:text-swiss-ink transition-colors">Isolation RE2020</a>
              </li>
              <li>
                <a href="#metiers" className="hover:text-swiss-ink transition-colors">Toiture Végétalisée & Solaire</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-swiss-ink font-bold block">
              Coordonnées & Horaires
            </span>
            <div className="space-y-2.5 text-xs font-normal">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-swiss-accent shrink-0 mt-0.5" />
                <span className="text-swiss-ink">74 rue de la Révériaz, 73000 Chambéry</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-swiss-accent shrink-0 mt-0.5" />
                <span className="font-mono text-swiss-ink">09 52 86 31 56 / 07 68 52 72 15</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-swiss-accent shrink-0 mt-0.5" />
                <span className="font-mono text-swiss-ink">contact@cladisbardage.com</span>
              </div>
              <div className="pt-2 text-[11px] font-mono text-swiss-muted border-t border-black/8">
                <span className="text-swiss-ink block font-bold">Heures d'ouverture :</span>
                <span>Lundi – Vendredi : 8h00 – 18h00</span>
              </div>
            </div>

            {onOpenCatalogue && (
              <button
                onClick={onOpenCatalogue}
                className="w-full mt-2 py-2 px-3 bg-swiss-subtle border border-black/10 hover:border-black text-swiss-ink text-xs font-mono uppercase tracking-wider transition-colors text-center block"
              >
                Télécharger Catalogue 2026 (PDF)
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-black/8 py-6 bg-swiss-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left text-swiss-muted font-normal">
            <span>© {new Date().getFullYear()} CLADIS CONSTRUCTION. Tous droits réservés.</span>
            <span className="hidden sm:inline">•</span>
            <span>Chambéry, Savoie, Auvergne-Rhône-Alpes</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-swiss-muted hover:text-swiss-ink transition-colors cursor-pointer font-mono">
              Mentions Légales
            </span>
            <span className="text-[11px] text-swiss-muted hover:text-swiss-ink transition-colors cursor-pointer font-mono">
              Politique de Confidentialité
            </span>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-white border border-black/10 hover:border-black hover:text-swiss-ink text-swiss-muted flex items-center justify-center transition-colors shadow-sm"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
