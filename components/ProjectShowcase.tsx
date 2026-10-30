"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, ArrowUpRight, Calendar, Ruler } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="realisations" className="py-28 bg-white relative border-t border-black/8 bg-swiss-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-swiss-ink" />
              <span className="text-[11px] uppercase tracking-widest font-mono text-swiss-muted font-medium">
                [05 // PORTFOLIO SÉLECTIONNÉ • RHÔNE-ALPES]
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-swiss-ink tracking-tight">
              Nos Réalisations d'<span className="font-serif italic font-normal text-swiss-accent">Envergure</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            {/* Category Filter Pills */}
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
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-mono font-medium transition-all duration-200 border ${
                    filter === tab.id
                      ? "bg-swiss-ink text-white border-swiss-ink shadow-sm"
                      : "bg-white border-black/10 text-swiss-muted hover:text-swiss-ink hover:border-black/25"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <Link
              href="/realisations"
              className="text-xs font-mono font-bold uppercase tracking-wider text-construction-blue hover:underline inline-flex items-center gap-1.5 pt-1"
            >
              <span>Voir la galerie complète des chantiers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Projects Grid (Direct Links to Detailed Pages, NO MODAL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/realisations/${project.slug}`}
              className="group bg-white border border-black/10 hover:border-construction-blue shadow-swiss-sm hover:shadow-swiss-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Thumbnail */}
                <div className="relative h-64 w-full overflow-hidden bg-swiss-stone border-b border-black/8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 border border-black/10 text-[10px] font-mono text-swiss-ink font-bold shadow-sm">
                      <MapPin className="w-3 h-3 text-construction-blue" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  {/* Surface Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-swiss-ink text-white text-[10px] font-mono font-bold shadow-sm">
                      <Ruler className="w-3 h-3 text-construction-blue" />
                      <span>{project.surface}</span>
                    </span>
                  </div>

                  {/* View Project Badge */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-construction-blue text-white text-[10px] uppercase tracking-widest font-mono font-bold shadow-md">
                      <span>Consulter</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-swiss-muted mb-1">
                      <Calendar className="w-3 h-3 text-construction-blue" />
                      <span>Livraison {project.year}</span>
                      <span>•</span>
                      <span className="text-construction-blue font-bold uppercase">{project.categoryLabel}</span>
                    </div>

                    <h3 className="font-sans text-xl font-bold text-swiss-ink group-hover:text-construction-blue transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-swiss-muted font-normal leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Micro Specs */}
                  <div className="pt-4 border-t border-black/8 space-y-1.5">
                    {project.technicalDetails.slice(0, 2).map((detail, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-swiss-muted">{detail.label}</span>
                        <span className="text-swiss-ink font-medium truncate max-w-[170px] text-right">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <div className="w-full inline-flex items-center justify-between py-3 px-4 bg-neutral-50 group-hover:bg-construction-blue group-hover:text-white text-neutral-900 text-xs font-mono font-bold uppercase tracking-wider transition-colors duration-200 border border-neutral-200 group-hover:border-construction-blue">
                  <span>Voir l'étude de cas complète</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
