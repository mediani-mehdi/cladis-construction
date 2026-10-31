"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";

const categories = [
  { id: "all", label: "Tous les métiers" },
  { id: "bardage", label: "Bardage" },
  { id: "couverture", label: "Couverture & étanchéité" },
  { id: "charpente", label: "Charpente métallique" },
  { id: "complexe", label: "Enveloppe complète" },
];

const featuredIds = new Set(["hub-chambery", "charpente-porteuse-vallee", "siege-architectural-lyon"]);
const featuredProjects = PROJECTS.filter((project) => featuredIds.has(project.id)).slice(0, 3);
const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function ProjectShowcase({ standalone = false }: { standalone?: boolean }) {
  const [filter, setFilter] = useState("all");
  const visibleProjects = standalone
    ? filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.category === filter)
    : featuredProjects;
  const Heading = standalone ? "h1" : "h2";

  return (
    <section
      id="realisations"
      aria-labelledby="projects-heading"
      className={`scroll-mt-32 border-t border-primary/10 bg-white pb-20 sm:pb-28 ${standalone ? "pt-36 sm:pt-44" : "pt-20 sm:pt-28"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {standalone && (
          <nav aria-label="Fil d’Ariane" className="mb-9 flex items-center gap-3 text-xs text-primary/60">
            <Link href="/" className={`hover:text-primary ${focusStyle}`}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-primary">Réalisations</span>
          </nav>
        )}

        <div className="mb-10 grid gap-6 sm:mb-12 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-6 bg-primary" aria-hidden="true" />
              <span className="font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/65">
                Une signature, des réalisations
              </span>
            </div>
            <Heading
              id="projects-heading"
              className="font-sans text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl"
            >
              Nos Réalisations<br />
              <span className="font-normal text-primary/65">d’Envergure.</span>
            </Heading>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-secondary lg:col-span-4 lg:pb-1">
            {standalone
              ? "Explorez nos chantiers et découvrez les solutions qui donnent forme à chaque projet."
              : "Trois projets, trois expressions de notre savoir-faire. Des structures aux façades, l’exigence se lit dans chaque détail."}
          </p>
        </div>

        {standalone && (
          <div className="mb-9 flex flex-wrap gap-x-6 gap-y-0 border-b border-primary/15" role="group" aria-label="Filtrer les réalisations par métier">
            {categories.map((category) => {
              const isActive = filter === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  aria-controls="projects-gallery"
                  onClick={() => setFilter(category.id)}
                  className={`-mb-px inline-flex min-h-12 items-center border-b-2 pb-3 pt-2 text-xs transition-colors motion-reduce:transition-none ${focusStyle} ${isActive ? "border-primary font-bold text-primary" : "border-transparent text-primary/60 hover:border-primary/25 hover:text-primary"}`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        )}

        <div id="projects-gallery" className="grid grid-cols-1 gap-x-6 gap-y-10 min-[560px]:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {visibleProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/realisations/${project.slug}`}
              className={`group block min-w-0 ${!standalone && index === 2 ? "min-[560px]:col-span-2 lg:col-span-1" : ""} ${focusStyle}`}
            >
              <div className={`relative aspect-[4/3] overflow-hidden bg-swiss-stone ${!standalone && index === 2 ? "min-[560px]:aspect-[16/9] lg:aspect-[4/5]" : "sm:aspect-[4/5]"}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none ${project.id === "hub-chambery" ? "object-bottom" : "object-center"}`}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="absolute left-5 top-5 max-w-[calc(100%-5rem)] bg-white/95 px-2.5 py-2 font-secondary text-[9px] font-semibold uppercase leading-relaxed tracking-wider text-primary">
                  {project.categoryLabel}
                </span>
                <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center bg-white/95 font-secondary text-[10px] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white">
                    <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {project.location}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-white motion-reduce:transition-none">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              </div>
              <div className="pt-5">
                <div className="mb-2 flex items-center justify-between gap-4 font-secondary text-[10px] uppercase tracking-wider text-primary/55">
                  <span>{project.surface}</span>
                  <span>Livraison {project.year}</span>
                </div>
                <h3 className="max-w-sm font-sans text-xl font-bold leading-tight tracking-tight text-primary sm:text-2xl">
                  {project.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 border-b border-primary/20 pb-1 text-xs font-semibold text-primary transition-colors group-hover:border-primary">
                  Découvrir le projet
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {standalone ? (
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary/15 pt-7 sm:flex-row sm:items-center">
            <p className="text-sm text-secondary">Donnons forme à votre prochain projet.</p>
            <Link href="/#devis" className={`inline-flex items-center gap-4 bg-primary px-6 py-4 text-xs font-semibold text-white transition-colors hover:bg-primary/90 ${focusStyle}`}>
              Parlons de votre projet
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="mt-12 flex justify-center border-t border-primary/15 pt-9 sm:mt-14 sm:pt-10">
            <Link
              href="/realisations"
              className={`inline-flex min-h-12 items-center justify-center gap-6 bg-primary px-7 py-4 font-secondary text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90 ${focusStyle}`}
            >
              Voir plus de réalisations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
