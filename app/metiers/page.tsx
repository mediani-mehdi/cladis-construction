"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogueModal from "@/components/CatalogueModal";
import { METIERS } from "@/lib/metiers-data";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Wrench,
  Download,
  Building2,
  Phone,
} from "lucide-react";

export default function MetiersPage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-black selection:text-white">
      {/* Global Navbar */}
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* 1. HERO HEADER */}
      <section className="relative pt-36 sm:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/construction-hero.jpg"
            alt="CLADIS CONSTRUCTION - Métiers et expertises industrielles"
            fill
            priority
            className="object-cover object-center filter brightness-[0.32] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.2),_transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-construction-blue" />
            <span className="text-white font-medium">Nos Métiers</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-construction-blue" />
              <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                Domaines d'Intervention // 6 Lots Techniques
              </span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] uppercase">
              Nos Métiers & <br />
              <span className="text-construction-blue">Solutions Enveloppe.</span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed pt-2">
              Des fondations à l'étanchéité de toiture, <strong>CLADIS CONSTRUCTION</strong> maîtrise l'intégralité
              de l'enveloppe du bâtiment industriel et de la charpente métallique. Une vision globale pour des
              ouvrages étanches, esthétiques et conformes aux exigences RE2020.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/#devis"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg transition-colors"
              >
                <span>Demander un devis par lot</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setCatalogueOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors"
              >
                <Download className="w-4 h-4 text-construction-blue" />
                <span>Télécharger le catalogue 2026</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6 METIERS GRID (WITH DIRECT LINKS TO DETAILED PAGES) */}
      <section className="py-24 sm:py-28 bg-neutral-50 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
              Expertises Spécialisées
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
              Des solutions complètes pour chaque composant du bâtiment.
            </h2>
            <p className="text-sm text-neutral-600">
              Cliquez sur un métier pour consulter sa page technique détaillée, ses caractéristiques normatives, ses cas d'usage et sa méthodologie de pose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {METIERS.map((metier) => (
              <div
                key={metier.slug}
                className="group bg-white border border-neutral-200 hover:border-construction-blue shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-100 border-b border-neutral-200">
                    <Image
                      src={metier.heroImage}
                      alt={metier.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-900 border border-black/10">
                      LOT {metier.num}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <span className="text-[11px] font-mono text-construction-blue font-bold uppercase tracking-wider">
                        {metier.subtitle}
                      </span>
                      <h3 className="font-sans text-xl font-bold text-neutral-900 tracking-tight mt-1 group-hover:text-construction-blue transition-colors">
                        {metier.shortTitle}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {metier.shortDesc}
                    </p>

                    {/* Quick Specs Badges */}
                    <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                      {metier.specs.slice(0, 2).map((spec) => (
                        <span
                          key={spec.label}
                          className="px-2 py-1 bg-neutral-100 text-[10px] font-mono text-neutral-700 font-medium"
                        >
                          {spec.label} : {spec.value.split(",")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/metiers/${metier.slug}`}
                    className="w-full inline-flex items-center justify-between py-3 px-4 bg-neutral-100 group-hover:bg-construction-blue group-hover:text-white text-neutral-900 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200"
                  >
                    <span>Voir la page détaillée</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. TECHNICAL MATRIX / COMPARATIVE TABLE */}
      <section className="py-24 sm:py-28 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
              Synthèse Technique
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Tableau comparatif des lots d'enveloppe
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Vue d'ensemble des normes de référence, matériaux mis en œuvre et applications pour chaque lot.
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-neutral-900 text-white font-mono uppercase tracking-wider text-[11px]">
                  <th className="p-4 border-r border-neutral-800">Lot & Métier</th>
                  <th className="p-4 border-r border-neutral-800">Matériaux Principaux</th>
                  <th className="p-4 border-r border-neutral-800">Normes & DTU</th>
                  <th className="p-4 border-r border-neutral-800">Applications Types</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {METIERS.map((m) => (
                  <tr key={m.slug} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-bold text-neutral-900 border-r border-neutral-200 whitespace-nowrap">
                      <span className="font-mono text-construction-blue mr-2">[{m.num}]</span>
                      {m.shortTitle}
                    </td>
                    <td className="p-4 text-neutral-700 border-r border-neutral-200">
                      {m.specs.find((s) => s.label === "Matériaux" || s.label === "Matériaux isolants" || s.label === "Types d'étanchéité" || s.label === "Nuances d'acier" || s.label === "Typologies" || s.label === "Végétalisation")?.value || "Acier galvanisé, aluminium, isolants"}
                    </td>
                    <td className="p-4 text-neutral-600 font-mono text-[11px] border-r border-neutral-200">
                      {m.norms[0]}
                    </td>
                    <td className="p-4 text-neutral-600 border-r border-neutral-200">
                      {m.applications[0]}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <Link
                        href={`/metiers/${m.slug}`}
                        className="text-construction-blue hover:underline font-mono font-bold inline-flex items-center gap-1"
                      >
                        <span>Détails</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-building.jpg"
            alt="Toiture et bardage industriel"
            fill
            className="object-cover object-center filter brightness-[0.22]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
              Besoin d'un chiffrage multi-lots ?
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Combinez bardage, toiture et charpente avec un seul interlocuteur.
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              En confiant l'ensemble du clos-couvert à CLADIS CONSTRUCTION, vous supprimez les interfaces conflictuelles entre charpentier, étancheur et bardeur.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              href="/#devis"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-xl transition-colors"
            >
              <span>Demander un devis global</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#configurateur"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors"
            >
              <span>Tester le configurateur</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* Catalogue Modal */}
      <CatalogueModal
        isOpen={catalogueOpen}
        onClose={() => setCatalogueOpen(false)}
      />
    </main>
  );
}

