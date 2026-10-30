"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogueModal from "@/components/CatalogueModal";
import { PROJECTS } from "@/lib/projects-data";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  MapPin,
  Calendar,
  Layers,
  Ruler,
  Phone,
  Download,
} from "lucide-react";

export default function RealisationsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-black selection:text-white">
      {/* Global Navbar */}
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* 1. HERO HEADER */}
      <section className="relative pt-36 sm:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-building.jpg"
            alt="CLADIS CONSTRUCTION - Réalisations et chantiers livrés"
            fill
            priority
            className="object-cover object-center filter brightness-[0.3] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.22),_transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-construction-blue" />
            <span className="text-white font-medium">Nos Réalisations</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-construction-blue" />
              <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                Portfolio // Auvergne-Rhône-Alpes
              </span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] uppercase">
              Nos Réalisations <br />
              <span className="text-construction-blue">d'Envergure.</span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed pt-2">
              Découvrez une sélection de nos chantiers industriels, plateformes logistiques et sièges tertiaires
              livrés en Savoie, Haute-Savoie, Isère et dans tout le quart sud-est de la France.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/#devis"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg transition-colors"
              >
                <span>Demander un devis pour votre projet</span>
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

      {/* 2. FILTER PILLS & PROJECTS GRID */}
      <section className="py-24 sm:py-28 bg-neutral-50 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
                Chantiers Livrés & Références
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                Consultez nos fiches de chantiers
              </h2>
              <p className="text-xs text-neutral-600">
                Cliquez sur un projet pour découvrir l'étude de cas complète, les défis techniques et les solutions apportées.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "Tous les Projets" },
                { id: "bardage", label: "Bardage Métallique" },
                { id: "couverture", label: "Couverture & Étanchéité" },
                { id: "charpente", label: "Charpente Métallique" },
                { id: "complexe", label: "Enveloppes Clé en Main" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-mono font-bold transition-all duration-200 border ${
                    filter === tab.id
                      ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                      : "bg-white border-neutral-300 text-neutral-600 hover:text-neutral-900 hover:border-neutral-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects (direct navigation to dedicated pages, NO MODALS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/realisations/${project.slug}`}
                className="group bg-white border border-neutral-200 hover:border-construction-blue shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Thumbnail */}
                  <div className="relative h-64 w-full overflow-hidden bg-neutral-100 border-b border-neutral-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 text-[11px] font-mono text-neutral-900 font-bold border border-black/10 flex items-center gap-1.5 shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-construction-blue" />
                      <span>{project.location}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-neutral-900 text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-bold">
                      {project.categoryLabel}
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-construction-blue text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg inline-flex items-center gap-2">
                        <span>Voir la fiche de chantier</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 mb-1">
                        <Calendar className="w-3 h-3 text-construction-blue" />
                        <span>Livré en {project.year}</span>
                        <span>•</span>
                        <Ruler className="w-3 h-3 text-construction-blue" />
                        <span>{project.surface}</span>
                      </div>
                      <h3 className="font-sans text-xl font-bold text-neutral-900 tracking-tight group-hover:text-construction-blue transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Micro specs */}
                    <div className="pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                      {project.associatedLots.map((lot) => (
                        <span
                          key={lot}
                          className="px-2 py-0.5 bg-neutral-100 text-[10px] font-mono text-neutral-700"
                        >
                          {lot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 pt-0">
                  <div className="w-full inline-flex items-center justify-between py-3 px-4 bg-neutral-100 group-hover:bg-construction-blue group-hover:text-white text-neutral-900 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200">
                    <span>Consulter l'étude de cas</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CTA BANNER */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/construction-hero.jpg"
            alt="CLADIS CONSTRUCTION - Engin et structure métallique"
            fill
            className="object-cover object-center filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
              Un projet similaire à concrétiser ?
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Nos ingénieurs et chefs de chantier vous accompagnent.
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              De la conception des plans d'exécution jusqu'à la réception sans réserve, profitez de notre savoir-faire pour votre prochain ouvrage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              href="/#devis"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-xl transition-colors"
            >
              <span>Demander un devis gratuit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0952863156"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-construction-blue" />
              <span>09 52 86 31 56</span>
            </a>
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

