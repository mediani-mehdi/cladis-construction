"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/HomeNavigation";
import Footer from "@/components/HomeFooter";
import CatalogueModal from "@/components/CatalogueModal";

const sections = [
  { id: "mentions-legales", title: "Mentions légales", text: "Pour obtenir les informations légales complètes de CLADIS Construction, contactez notre équipe.", subject: "Demande de mentions légales" },
  { id: "conditions-generales", title: "Conditions générales", text: "Vous souhaitez consulter nos conditions générales ? Notre équipe vous transmet les documents correspondant à votre demande.", subject: "Demande de conditions générales" },
  { id: "confidentialite", title: "Confidentialité", text: "Pour obtenir des informations sur le traitement de vos données personnelles ou adresser une demande concernant vos données, écrivez-nous.", subject: "Demande concernant mes données personnelles" },
];

export default function InformationsLegalesPage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);
  return (
    <main className="v2-home v2-interior">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />
      <div id="page-content" tabIndex={-1} className="v2-page-content">
        <section className="bg-[#e9eff7] pb-16 pt-36 sm:pt-44">
          <div className="v2-container">
            <Link href="/" className="v2-text-link">Accueil</Link>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-6xl">Informations légales</h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed">CLADIS Construction · 74 rue de la Révériaz, 73000 Chambéry, France.</p>
          </div>
        </section>
        <div className="v2-container py-16 sm:py-24">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="grid scroll-mt-36 gap-5 border-t border-primary/15 py-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div><span className="v2-eyebrow">0{index + 1} / INFORMATIONS</span><h2 id={`${section.id}-title`} className="mt-3 text-2xl font-semibold">{section.title}</h2></div>
              <div><p className="max-w-xl text-sm leading-relaxed">{section.text}</p><a className="v2-text-link mt-5" href={`mailto:contact@cladisbardage.com?subject=${encodeURIComponent(section.subject)}`}>contact@cladisbardage.com</a></div>
            </section>
          ))}
        </div>
      </div>
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
