"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/HomeNavigation";
import Footer from "@/components/HomeFooter";
import CatalogueModal from "@/components/CatalogueModal";
import ProjectsGallery from "@/components/ProjectsGallery";
import { PROJECTS } from "@/lib/projects-data";

export default function RealisationsPage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="v2-home v2-interior">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />
      <div id="page-content" tabIndex={-1} className="v2-page-content">
      <section className="portfolio-opening" aria-labelledby="portfolio-heading">
        <div className="v2-container">
          <nav className="portfolio-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">Réalisations</span></nav>
          <div className="portfolio-opening-topline"><span>CLADIS / NOS RÉALISATIONS</span><span>DE LA CONCEPTION AU DERNIER DÉTAIL</span></div>
          <div className="portfolio-opening-heading">
            <div><h1 id="portfolio-heading">L’exigence<br /><em>prend forme.</em></h1></div>
            <div className="portfolio-opening-intro"><p>Des structures aux façades, chaque ouvrage raconte une ambition. Découvrez notre savoir-faire à travers les projets qui lui donnent vie.</p><a href="#realisations" className="portfolio-explore"><span>Explorer nos réalisations <small>{String(PROJECTS.length).padStart(2, "0")} projets</small></span><span className="portfolio-explore-arrow"><ArrowDown size={20} aria-hidden="true" /></span></a></div>
          </div>
          <figure className="portfolio-opening-feature">
            <div className="portfolio-opening-photo"><Image src={PROJECTS[0].image} alt={PROJECTS[0].title} fill priority quality={90} sizes="(max-width: 700px) 100vw, 90vw" /><span className="portfolio-photo-tag">INDUSTRIEL · LOGISTIQUE · TERTIAIRE</span></div>
            <figcaption><div className="portfolio-feature-index"><span>À LA UNE</span><strong>01</strong></div><div className="portfolio-feature-name"><span>{PROJECTS[0].location} / {PROJECTS[0].year}</span><Link href={`/realisations/${PROJECTS[0].slug}`}>{PROJECTS[0].title}<ArrowUpRight size={22} aria-hidden="true" /></Link></div><div className="portfolio-feature-detail"><span>{PROJECTS[0].surface}</span><small>{PROJECTS[0].categoryLabel}</small></div></figcaption>
          </figure>
        </div>
      </section>
      <ProjectsGallery />
      </div>
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
