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
    <footer className="relative overflow-hidden text-white/80 border-t border-construction-blue/40 z-10">
      
      {/* 1. Cinematic Background Image with Deep Blue Shadow Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-building.jpg"
          alt="CLADIS CONSTRUCTION - Façade Industrielle et Enveloppe Métallique"
          fill
          className="object-cover object-center filter brightness-[0.28] contrast-[1.15]"
        />
        
        {/* Deep Industrial Midnight-to-Electric Blue Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020713]/95 via-[#051736]/90 to-[#01050e]/98" />
        
        {/* Vibrant Blue Atmospheric Shadow Vignettes */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,102,255,0.28),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,102,255,0.22),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,85,255,0.12),_transparent_70%)]" />
        
        {/* Architectural Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      {/* 2. Upper Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo on Pure White Background Badge (Preserving authentic white background requested by user) */}
            <a href="#" className="inline-block" title="CLADIS CONSTRUCTION">
              <div className="bg-white px-4 py-2.5 shadow-xl inline-flex items-center border border-white/30 hover:bg-neutral-50 transition-colors">
                <Image
                  src="/images/cladis-logo-white-bg.png"
                  alt="CLADIS CONSTRUCTION - Bardage, Étanchéité, Couverture"
                  width={240}
                  height={68}
                  className="h-11 w-auto object-contain"
                />
              </div>
            </a>

            <p className="text-xs text-white/70 font-normal leading-relaxed max-w-sm">
              Conception, ingénierie et réalisation de l'enveloppe du bâtiment industriel et de la construction métallique en région Auvergne-Rhône-Alpes. Bureau d'études intégré et alliance opérationnelle avec Building Services.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-white/90 font-medium">
                Garantie Décennale
              </span>
              <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-white/90 font-medium">
                DTU & Eurocodes 3
              </span>
              <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] font-mono text-white/90 font-medium">
                Chambéry (73)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-construction-blue" />
              <span>Navigation</span>
            </span>
            <ul className="space-y-2.5 text-xs font-normal">
              <li>
                <a href="#" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Accueil</a>
              </li>
              <li>
                <a href="#metiers" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Nos Métiers (Bardage, Couverture, Charpente)</a>
              </li>
              <li>
                <a href="#methodologie" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Notre Méthodologie en 4 Phases</a>
              </li>
              <li>
                <a href="#alliance" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">L'Alliance Stratégique Building Services</a>
              </li>
              <li>
                <a href="#realisations" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Réalisations & Portfolio</a>
              </li>
              <li>
                <a href="#configurateur" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Configurateur Technique</a>
              </li>
              <li>
                <a href="#devis" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Demande de Devis & Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Métiers & Lots */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-construction-blue" />
              <span>Nos Lots</span>
            </span>
            <ul className="space-y-2.5 text-xs font-normal">
              <li>
                <a href="#metiers" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Bardage Métallique</a>
              </li>
              <li>
                <a href="#metiers" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Couverture Industrielle</a>
              </li>
              <li>
                <a href="#metiers" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Étanchéité Toiture</a>
              </li>
              <li>
                <a href="#metiers" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Charpente Métallique</a>
              </li>
              <li>
                <a href="#metiers" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Isolation RE2020</a>
              </li>
              <li>
                <a href="#metiers" className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block">Toiture Végétalisée & Solaire</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Horaires */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-construction-blue" />
              <span>Coordonnées & Horaires</span>
            </span>
            <div className="space-y-2.5 text-xs font-normal">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-construction-blue shrink-0 mt-0.5" />
                <span className="text-white/90">74 rue de la Révériaz, 73000 Chambéry</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-construction-blue shrink-0 mt-0.5" />
                <a href="tel:0952863156" className="font-mono text-white/90 hover:text-white transition-colors">
                  09 52 86 31 56 / 07 68 52 72 15
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-construction-blue shrink-0 mt-0.5" />
                <a href="mailto:contact@cladisbardage.com" className="font-mono text-white/90 hover:text-white transition-colors">
                  contact@cladisbardage.com
                </a>
              </div>
              <div className="pt-2 text-[11px] font-mono text-white/60 border-t border-white/10">
                <span className="text-white/90 block font-bold">Heures d'ouverture :</span>
                <span>Lundi – Vendredi : 8h00 – 18h00</span>
              </div>
            </div>

            {onOpenCatalogue && (
              <button
                onClick={onOpenCatalogue}
                className="w-full mt-2 py-2.5 px-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white text-white text-xs font-mono uppercase tracking-wider transition-all text-center block shadow-md"
              >
                Télécharger Catalogue 2026 (PDF)
              </button>
            )}
          </div>

        </div>
      </div>

      {/* 3. Bottom Bar: Copyright & Back to Top */}
      <div className="relative z-10 border-t border-white/10 py-6 bg-black/55 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left text-white/60 font-normal">
            <span>© {new Date().getFullYear()} CLADIS CONSTRUCTION. Tous droits réservés.</span>
            <span className="hidden sm:inline">•</span>
            <span>Chambéry, Savoie, Auvergne-Rhône-Alpes</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-white/60 hover:text-white transition-colors cursor-pointer font-mono">
              Mentions Légales
            </span>
            <span className="text-[11px] text-white/60 hover:text-white transition-colors cursor-pointer font-mono">
              Politique de Confidentialité
            </span>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-white/10 border border-white/20 hover:bg-construction-blue hover:border-construction-blue text-white flex items-center justify-center transition-all shadow-sm"
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
