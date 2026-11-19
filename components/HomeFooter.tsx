"use client";

import { useState } from "react";
import { ArrowUp, Mail, MapPin, Phone, Clock, FileText, ChevronRight, ShieldCheck } from "lucide-react";
import Image from "@/components/SiteImage";
import CatalogueModal from "@/components/CatalogueModal";
import { METIER_LINKS } from "@/lib/site-navigation";

const footerNavLinks = [
  { href: "/", label: "Accueil" },
  { href: "/l-entreprise", label: "L’entreprise" },
  { href: "/metiers", label: "Nos métiers" },
  { href: "/methodologie", label: "Notre méthode" },
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/alliance", label: "Alliance CLADIS" },
  { href: "/contact#configurateur", label: "Configurateur technique" },
  { href: "/contact", label: "Demande de devis & contact" },
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
      <footer className="v2-footer-redesign">
        <div className="site-footer-main">
          {/* Faded Background Image & Signature Blue Shadow */}
          <div className="site-footer-backdrop" aria-hidden="true">
            <Image
              src="/images/hero-building-60c1b312.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="site-footer-fade" aria-hidden="true" />

          <div className="v2-container site-footer-directory">
            {/* Brand Column */}
            <div className="site-footer-brand">
              <a href="/" aria-label="CLADIS Construction, accueil" className="site-footer-logo-wrap">
                <Image
                  src="/images/cladis-logo-transparent-07a6284b.webp"
                  alt="CLADIS Construction"
                  width={210}
                  height={80}
                  priority={false}
                />
              </a>
              <p className="site-footer-brand-desc">
                Conception, ingénierie et réalisation de l’enveloppe du bâtiment industriel et de la construction métallique en Auvergne-Rhône-Alpes.
              </p>
              <ul className="site-footer-brand-details">
                <li>
                  <span className="site-footer-badge-dot"></span>
                  Bureau d’études intégré
                </li>
                <li>
                  <span className="site-footer-badge-dot"></span>
                  Chambéry (73)
                </li>
                <li>
                  <ShieldCheck size={14} className="site-footer-badge-icon" aria-hidden="true" />
                  Garantie décennale
                </li>
              </ul>
            </div>

            {/* Navigation Column */}
            <nav aria-labelledby="site-footer-navigation" className="site-footer-nav-col">
              <h2 id="site-footer-navigation">
                <span className="site-footer-h2-indicator" aria-hidden="true"></span>
                Navigation
              </h2>
              <ul className="site-footer-links">
                {footerNavLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href}>
                      <ChevronRight size={15} className="site-footer-link-chevron" aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Trades / Lots Column */}
            <nav aria-labelledby="site-footer-trades" className="site-footer-trades-col">
              <h2 id="site-footer-trades">
                <span className="site-footer-h2-indicator" aria-hidden="true"></span>
                Nos lots d’expertise
              </h2>
              <ul className="site-footer-links">
                {METIER_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href}>
                      <ChevronRight size={15} className="site-footer-link-chevron" aria-hidden="true" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact & Hours Column */}
            <div className="site-footer-contact">
              <h2>
                <span className="site-footer-h2-indicator" aria-hidden="true"></span>
                Coordonnées & Horaires
              </h2>
              <address className="site-footer-address">
                <div className="site-footer-contact-row">
                  <div className="site-footer-icon-circle">
                    <MapPin size={16} aria-hidden="true" />
                  </div>
                  <span>74 rue de la Révériaz, 73000 Chambéry</span>
                </div>
                <div className="site-footer-contact-row">
                  <div className="site-footer-icon-circle">
                    <Phone size={16} aria-hidden="true" />
                  </div>
                  <div className="site-footer-phones">
                    <a href="tel:0952863156">09 52 86 31 56</a>
                    <span className="site-footer-phone-sep">/</span>
                    <a href="tel:0768527215">07 68 52 72 15</a>
                  </div>
                </div>
                <div className="site-footer-contact-row">
                  <div className="site-footer-icon-circle">
                    <Mail size={16} aria-hidden="true" />
                  </div>
                  <a href="mailto:contact@cladisbardage.com" className="site-footer-email-link">
                    contact@cladisbardage.com
                  </a>
                </div>
              </address>

              <div className="site-footer-hours-card">
                <div className="site-footer-hours-header">
                  <Clock size={15} aria-hidden="true" />
                  <strong>Heures d’ouverture</strong>
                </div>
                <p>Lundi – Vendredi · 8h00 – 18h00</p>
              </div>

              <button
                type="button"
                className="site-footer-catalogue"
                onClick={onOpenCatalogue ?? (() => setCatalogueOpen(true))}
              >
                <div className="site-footer-catalogue-icon-wrap">
                  <FileText size={18} aria-hidden="true" />
                </div>
                <div className="site-footer-catalogue-text">
                  <span className="site-footer-catalogue-title">Consulter le catalogue 2026</span>
                  <span className="site-footer-catalogue-badge">Documentation technique PDF</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="site-footer-bottom">
          <div className="v2-container site-footer-bottom-inner">
            <small className="site-footer-copy">
              © {new Date().getFullYear()} CLADIS CONSTRUCTION. Tous droits réservés.
            </small>
            <span className="site-footer-region">
              Chambéry · Savoie · Auvergne-Rhône-Alpes
            </span>
            <nav aria-label="Informations légales" className="site-footer-legal">
              <a href="/informations-legales#mentions-legales">Mentions légales</a>
              <a href="/informations-legales#conditions-generales">Conditions générales</a>
              <a href="/informations-legales#confidentialite">Confidentialité</a>
            </nav>
            <a
              href="#"
              onClick={scrollToTop}
              className="site-footer-top"
              aria-label="Retour en haut de page"
              title="Retour en haut de page"
            >
              <ArrowUp size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>

      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </>
  );
}
