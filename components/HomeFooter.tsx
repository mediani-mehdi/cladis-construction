"use client";

import { useState } from "react";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Image from "@/components/SiteImage";
import CatalogueModal from "@/components/CatalogueModal";
import { METIER_LINKS, NAV_LINKS } from "@/lib/site-navigation";

const footerNavigation = [
  ...NAV_LINKS.filter(({ href }) => href !== "/contact"),
  { href: "/contact#configurateur", label: "Configurateur technique" },
  { href: "/contact#devis", label: "Demande de devis et contact" },
];

export default function HomeFooter({ onOpenCatalogue }: { onOpenCatalogue?: () => void }) {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <>
      <footer className="v2-footer-redesign">
        <div className="site-footer-main">
          <div className="site-footer-backdrop" aria-hidden="true">
            <Image src="/images/hero-building-60c1b312.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="v2-container site-footer-directory">
            <div className="site-footer-brand">
              <a href="/" aria-label="CLADIS Construction, accueil">
                <Image src="/images/cladis-logo-transparent-07a6284b.webp" alt="CLADIS Construction" width={208} height={86} />
              </a>
              <p>Conception, ingénierie et réalisation de l’enveloppe du bâtiment industriel et de la construction métallique en Auvergne-Rhône-Alpes.</p>
              <ul className="site-footer-brand-details">
                <li>Bureau d’études intégré</li>
                <li>Chambéry (73)</li>
              </ul>
            </div>

            <nav aria-labelledby="site-footer-navigation">
              <h2 id="site-footer-navigation">Navigation</h2>
              <ul className="site-footer-links">
                {footerNavigation.map(({ href, label }) => <li key={href}><a href={href}>{label}</a></li>)}
              </ul>
            </nav>

            <nav aria-labelledby="site-footer-trades">
              <h2 id="site-footer-trades">Nos lots</h2>
              <ul className="site-footer-links">
                {METIER_LINKS.map(({ href, label }) => <li key={href}><a href={href}>{label}</a></li>)}
              </ul>
            </nav>

            <div className="site-footer-contact">
              <h2>Coordonnées & horaires</h2>
              <address className="site-footer-address">
                <div className="site-footer-contact-row">
                  <MapPin size={15} aria-hidden="true" />
                  <span>74 rue de la Révériaz, 73000 Chambéry</span>
                </div>
                <div className="site-footer-contact-row">
                  <Phone size={15} aria-hidden="true" />
                  <div className="site-footer-phones">
                    <a href="tel:0952863156">09 52 86 31 56</a>
                    <a href="tel:0768527215">07 68 52 72 15</a>
                  </div>
                </div>
                <div className="site-footer-contact-row">
                  <Mail size={15} aria-hidden="true" />
                  <a href="mailto:contact@cladisbardage.com">contact@cladisbardage.com</a>
                </div>
              </address>
              <p className="site-footer-hours"><strong>Heures d’ouverture</strong>Lundi – Vendredi · 8h00 – 18h00</p>
              <button type="button" className="site-footer-catalogue" onClick={onOpenCatalogue ?? (() => setCatalogueOpen(true))}>
                Consulter le catalogue 2026 <span>(PDF)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="site-footer-bottom">
          <div className="v2-container site-footer-bottom-inner">
            <small>© {new Date().getFullYear()} CLADIS CONSTRUCTION. Tous droits réservés.</small>
            <span className="site-footer-region">Chambéry, Savoie, Auvergne-Rhône-Alpes</span>
            <nav aria-label="Informations légales" className="site-footer-legal">
              <a href="/informations-legales#mentions-legales">Mentions légales</a>
              <a href="/informations-legales#conditions-generales">Conditions générales</a>
              <a href="/informations-legales#confidentialite">Confidentialité</a>
            </nav>
            <a href="#" className="site-footer-top" aria-label="Retour en haut de page"><ArrowUp size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </>
  );
}
