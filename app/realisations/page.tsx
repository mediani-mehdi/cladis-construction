"use client";

import { useState } from "react";
import Navbar from "@/components/HomeNavigation";
import Footer from "@/components/HomeFooter";
import CatalogueModal from "@/components/CatalogueModal";
import ProjectsGallery from "@/components/ProjectsGallery";
import InteriorPageHero from "@/components/InteriorPageHero";
import { PROJECTS } from "@/lib/projects-data";

export default function RealisationsPage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="v2-home v2-interior">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />
      <div id="page-content" tabIndex={-1} className="v2-page-content">
      <InteriorPageHero
        id="portfolio"
        label="Réalisations"
        eyebrow="Une signature, des réalisations"
        title="Nos réalisations."
        subtitle="L’exigence prend forme."
        description="Des structures aux façades, l’exigence se lit dans chaque détail. Découvrez les ouvrages qui illustrent notre savoir-faire en enveloppe du bâtiment et construction métallique."
        image={PROJECTS[0].image}
        imageAlt={PROJECTS[0].title}
        caption="INDUSTRIEL · LOGISTIQUE · TERTIAIRE"
        action={{ href: "#realisations", label: "Explorer nos projets" }}
      />
      <ProjectsGallery />
      </div>
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
