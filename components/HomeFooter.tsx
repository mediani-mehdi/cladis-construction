"use client";

import Image from "next/image";
import { ArrowUp, ArrowUpRight, Download } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-navigation";

export default function HomeFooter({ onOpenCatalogue }: { onOpenCatalogue: () => void }) {
  return <footer className="v2-footer v2-footer-redesign">
    <div className="v2-footer-backdrop" aria-hidden="true"><Image src="/images/homepage-hero-3cdb9cad.webp" alt="" fill quality={90} sizes="(max-width: 700px) 100vw, 70vw" className="object-cover" /></div>
    <div className="v2-footer-fade" aria-hidden="true" />
    <div className="v2-container v2-footer-content">
      <div className="v2-footer-banner">
        <span className="v2-eyebrow">UNE VISION D’ENSEMBLE. LA PRÉCISION DU DÉTAIL.</span>
        <div className="v2-footer-banner-content"><h2>Votre projet commence<br /><em>par un échange.</em></h2><a href="/#devis" className="v2-button v2-button-light">Parlons de votre projet<ArrowUpRight size={18} aria-hidden="true" /></a></div>
      </div>
      <div className="v2-footer-main">
        <div className="v2-footer-brand"><a href="/" aria-label="CLADIS Construction, accueil"><Image src="/images/cladis-logo-transparent-07a6284b.webp" alt="CLADIS Construction" width={210} height={60} className="v2-footer-logo" /></a><p>Enveloppe du bâtiment<br />& construction métallique.</p><address>74 rue de la Révériaz<br />73000 Chambéry, France</address><button type="button" onClick={onOpenCatalogue} className="v2-footer-catalogue"><Download size={16} aria-hidden="true" /><span>Catalogue 2026</span><ArrowUpRight size={15} aria-hidden="true" /></button></div>
        <nav className="v2-footer-navigation" aria-label="Navigation de pied de page"><span className="v2-eyebrow">EXPLORER</span><div>{NAV_LINKS.filter((link) => link.href !== "/").map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div></nav>
        <div className="v2-footer-connect"><span className="v2-eyebrow">NOUS CONTACTER</span><address className="v2-footer-contact-list">
          <a href="mailto:contact@cladisbardage.com" className="v2-footer-contact-link">contact@cladisbardage.com</a>
          <a href="tel:0952863156" className="v2-footer-contact-link">09 52 86 31 56</a>
          <a href="tel:0768527215" className="v2-footer-contact-link">07 68 52 72 15</a>
        </address><span className="v2-footer-hours">Lundi – Vendredi · 8h00 – 18h00</span></div>
      </div>
      <div className="v2-footer-final"><span>© {new Date().getFullYear()} Cladis Construction</span><span>CHAMBÉRY · AUVERGNE-RHÔNE-ALPES</span><a href="#" aria-label="Retour en haut de page"><span>Revenir en haut</span><span className="v2-footer-up"><ArrowUp size={17} aria-hidden="true" /></span></a></div>
    </div>
  </footer>;
}
