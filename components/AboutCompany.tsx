"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowUpRight, ArrowRight } from "lucide-react";

export default function AboutCompany() {
  return (
    <section id="entreprise" className="py-24 sm:py-28 bg-white border-t border-black/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. QUI SOMMES-NOUS / L'ENTREPRISE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 shadow-swiss-lg bg-neutral-100 group">
              <Image
                src="/images/about-building-a03b650d.webp"
                alt="CLADIS CONSTRUCTION - Bâtiment industriel moderne et enveloppe métallique"
                fill
                className="object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner Architectural Coordinate Mark */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 border border-black/10 text-[10px] font-mono text-neutral-800 font-bold uppercase tracking-wider">
                Chambéry • Savoie
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-construction-blue" />
              <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                Qui sommes-nous
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1]">
              L'expertise industrielle au service de vos projets.
            </h2>

            <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-construction-blue font-bold">
              Enveloppe du bâtiment & construction métallique
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              <strong>CLADIS CONSTRUCTION</strong> réunit expertise technique, maîtrise financière et rigueur
              organisationnelle. Bureau d'études intégré, filiale d'achats et alliance Building Services pour
              couvrir l'ensemble de la chaîne de valeur.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              De l'étude à la livraison, une équipe dédiée pour vos chantiers industriels en Rhône-Alpes.
              Nous intervenons avec une rigueur d'ingénierie absolue pour concevoir, chiffrer et bâtir des enveloppes pérennes adaptées aux exigences structurelles et climatiques régionales.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-construction-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider text-neutral-900 font-mono">
                    Bureau d'études intégré
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    Plans d'exécution & calepinage millimétré
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-construction-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider text-neutral-900 font-mono">
                    Pilotage complet
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    De l'étude à la livraison sans réserve
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/l-entreprise"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md transition-colors"
              >
                <span>Découvrir l'entreprise</span>
                <ArrowRight className="w-4 h-4 text-construction-blue" />
              </Link>

              <a
                href="#devis"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md transition-colors"
              >
                <span>Demander un devis</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#realisations"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 font-mono text-xs uppercase tracking-widest font-bold transition-colors"
              >
                <span>Nos réalisations</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
