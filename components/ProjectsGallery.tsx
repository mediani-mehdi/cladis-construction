"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects-data";

const filters = [
  { value: "all", label: "Tous les projets" },
  { value: "bardage", label: "Bardage" },
  { value: "couverture", label: "Couverture & étanchéité" },
  { value: "charpente", label: "Charpente métallique" },
  { value: "complexe", label: "Enveloppe complète" },
];

export default function ProjectsGallery() {
  const [filter, setFilter] = useState("all");
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  return <>
    <section id="realisations" className="v2-portfolio-section">
      <div className="v2-container">
        <div className="v2-section-top"><span className="v2-eyebrow">01 / LE SAVOIR-FAIRE EN IMAGES</span><span className="v2-small-note" aria-live="polite">{String(visible.length).padStart(2, "0")} PROJETS À DÉCOUVRIR</span></div>
        <div className="v2-section-heading"><h2>Des contraintes réelles.<br /><em>Des réponses concrètes.</em></h2><p>Explorez nos chantiers et découvrez les solutions<br />qui donnent forme à chaque projet.</p></div>
        <div className="v2-project-filters" role="group" aria-label="Filtrer les réalisations par métier">{filters.map((item) => <button key={item.value} type="button" aria-pressed={filter === item.value} aria-controls="projects-gallery" onClick={() => setFilter(item.value)} className={filter === item.value ? "is-active" : ""}>{item.label}</button>)}</div>
        <div id="projects-gallery" className="v2-project-grid" aria-live="polite">
          {visible.map((project, index) => <Link key={project.id} href={`/realisations/${project.slug}`} className={`v2-project-card ${index === 0 && filter === "all" ? "v2-project-featured" : ""}`}>
            <div className="v2-project-image"><Image src={project.image} alt={project.title} fill quality={90} sizes="(max-width: 700px) 100vw, 60vw" /><span className="v2-project-tag v2-glass">{project.categoryLabel}</span><span className="v2-project-arrow v2-glass"><ArrowUpRight size={23} aria-hidden="true" /></span><div className="v2-project-image-footer"><span>{project.location}</span><span>{project.surface} / {project.year}</span></div></div>
            <div className="v2-project-title"><h3>{project.title}</h3><span>{String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}</span></div>
          </Link>)}
        </div>
      </div>
    </section>
    <section className="v2-project-invitation"><div className="v2-container"><span className="v2-eyebrow">ET SI ON CONSTRUISAIT LA SUITE ?</span><h2>Votre idée.<br /><em>Notre prochain projet.</em></h2><div className="v2-invitation-bottom"><p>Donnons forme à votre prochain projet.<br />Notre équipe vous accompagne de l’étude à la réalisation.</p><Link href="/#devis" className="v2-button v2-button-light">Parlons de votre projet<ArrowUpRight size={18} /></Link></div></div></section>
  </>;
}
