"use client";

import { useState } from "react";
import Image from "@/components/SiteImage";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import CatalogueModal from "@/components/CatalogueModal";

const menuLinks = [
  { href: "/", label: "Accueil" },
  { href: "/l-entreprise", label: "À propos" },
  { href: "/metiers", label: "Nos Métiers" },
  { href: "/methodologie", label: "Méthodologie" },
  { href: "/alliance", label: "L'Alliance" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/informations-legales#mentions-legales", label: "Mentions légales" },
  { href: "/informations-legales#conditions-generales", label: "Conditions générales" },
  { href: "/informations-legales#confidentialite", label: "Confidentialité" },
];

export default function HomeFooter({ onOpenCatalogue }: { onOpenCatalogue?: () => void }) {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <footer className="v2-footer v2-footer-redesign">
        {/* Faded Background Building Image & Blue Fade Overlay */}
        <div className="v2-footer-backdrop" aria-hidden="true">
          <Image
            src="/images/homepage-hero-3cdb9cad.webp"
            alt=""
            fill
            quality={90}
            sizes="(max-width: 700px) 100vw, 70vw"
            className="object-cover"
          />
        </div>
        <div className="v2-footer-fade" aria-hidden="true" />

        <div className="v2-container v2-footer-content">
          {/* Top Banner */}
          <div className="v2-footer-banner">
            <span className="v2-eyebrow">UNE VISION D’ENSEMBLE. LA PRÉCISION DU DÉTAIL.</span>
            <div className="v2-footer-banner-content">
              <h2>
                Votre projet commence<br />
                <em>par un échange.</em>
              </h2>
              <button
                type="button"
                onClick={onOpenCatalogue ?? (() => setCatalogueOpen(true))}
                className="v2-button v2-button-light v2-footer-catalogue-cta"
              >
                <span>
                  Cladis Construction <em>Catalogue</em>
                </span>
                <ArrowUpRight size={23} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* 4-column Main Navigation & Contact */}
          <div className="v2-footer-main">
            {/* Col 1: Brand */}
            <div className="v2-footer-brand">
              <a href="/" aria-label="CLADIS Construction, accueil">
                <Image
                  src="/images/cladis-logo-transparent-07a6284b.webp"
                  alt="CLADIS Construction"
                  width={210}
                  height={60}
                  className="v2-footer-logo"
                />
              </a>
              <p>
                De la structure aux finitions, nous donnons forme à vos ambitions. Une enveloppe durable, un savoir-faire précis, un engagement à chaque étape.
              </p>
            </div>

            {/* Col 2: Menu */}
            <nav className="v2-footer-navigation" aria-label="Menu de pied de page">
              <span className="v2-eyebrow">MENU</span>
              <div>
                {menuLinks.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Col 3: Informations légales */}
            <nav className="v2-footer-navigation" aria-label="Informations légales">
              <span className="v2-eyebrow">INFORMATIONS LÉGALES</span>
              <div>
                {legalLinks.map((link) => (
                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Col 4: Contact */}
            <div className="v2-footer-connect">
              <span className="v2-eyebrow">NOUS CONTACTER</span>
              <address className="v2-footer-contact-list">
                <span className="v2-footer-contact-address">
                  74 rue de la Révériaz<br />
                  73000 Chambéry, France
                </span>
                <a href="mailto:contact@cladisbardage.com" className="v2-footer-contact-link">
                  contact@cladisbardage.com
                </a>
                <a href="tel:0952863156" className="v2-footer-contact-link">
                  09 52 86 31 56
                </a>
                <a href="tel:0768527215" className="v2-footer-contact-link">
                  07 68 52 72 15
                </a>
              </address>
              <span className="v2-footer-hours">Lundi – Vendredi · 8h00 – 18h00</span>
            </div>
          </div>

          {/* Final Bottom Bar */}
          <div className="v2-footer-final">
            <span>© {new Date().getFullYear()} Cladis Construction</span>
            <span>CHAMBÉRY · AUVERGNE-RHÔNE-ALPES</span>
            <a href="#" onClick={scrollToTop} aria-label="Retour en haut de page">
              <span>Revenir en haut</span>
              <span className="v2-footer-up">
                <ArrowUp size={17} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </footer>

      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </>
  );
}
