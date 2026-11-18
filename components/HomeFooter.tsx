"use client";

import { useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "@/components/SiteImage";
import CatalogueModal from "@/components/CatalogueModal";
import { NAV_LINKS } from "@/lib/site-navigation";

export default function HomeFooter({ onOpenCatalogue }: { onOpenCatalogue?: () => void }) {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <>
      <footer className="v2-footer-redesign">
        <div className="site-footer-project">
          <div className="v2-container site-footer-project-grid">
            <div>
              <h2>Parlons de <em>votre projet.</em></h2>
              <a href="/contact" className="site-footer-contact-cta">
                Nous contacter <ArrowUpRight size={19} aria-hidden="true" />
              </a>
            </div>
            <button type="button" className="site-footer-catalogue" onClick={onOpenCatalogue ?? (() => setCatalogueOpen(true))}>
              <Image src="/images/catalogue-cover-faed49b8.webp" alt="" width={84} height={109} className="site-footer-catalogue-cover" />
              <span>
                <span className="site-footer-catalogue-edition">Édition 2026</span>
                <span className="site-footer-catalogue-title">Consulter le catalogue</span>
              </span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="v2-container">
          <div className="site-footer-directory">
            <div className="site-footer-brand">
              <a href="/" aria-label="CLADIS Construction, accueil">
                <Image src="/images/cladis-logo-transparent-07a6284b.webp" alt="CLADIS Construction" width={210} height={60} />
              </a>
              <p>Enveloppe du bâtiment et construction métallique à Chambéry.</p>
            </div>

            <nav aria-labelledby="site-footer-navigation">
              <h3 id="site-footer-navigation">Navigation</h3>
              <ul className="site-footer-links">
                {NAV_LINKS.map(({ href, label }) => <li key={href}><a href={href}>{label}</a></li>)}
              </ul>
            </nav>

            <div>
              <h3>Coordonnées</h3>
              <address className="site-footer-address">
                <span>74 rue de la Révériaz<br />73000 Chambéry, France</span>
                <a href="mailto:contact@cladisbardage.com">contact@cladisbardage.com</a>
                <div className="site-footer-phones">
                  <a href="tel:0952863156">09 52 86 31 56</a>
                  <a href="tel:0768527215">07 68 52 72 15</a>
                </div>
              </address>
              <p className="site-footer-hours">Lundi – Vendredi · 8h00 – 18h00</p>
            </div>
          </div>

          <div className="site-footer-bottom">
            <small>© {new Date().getFullYear()} Cladis Construction</small>
            <nav aria-label="Informations légales" className="site-footer-legal">
              <a href="/informations-legales#mentions-legales">Mentions légales</a>
              <a href="/informations-legales#conditions-generales">Conditions générales</a>
              <a href="/informations-legales#confidentialite">Confidentialité</a>
            </nav>
            <a href="#" className="site-footer-top">Retour en haut <ArrowUp size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </>
  );
}
