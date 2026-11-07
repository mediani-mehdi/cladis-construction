"use client";

import Image from "next/image";
import { ArrowUp, ArrowUpRight, Download, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-navigation";

export default function HomeFooter({ onOpenCatalogue }: { onOpenCatalogue: () => void }) {
  return <footer className="v2-footer v2-footer-redesign">
    <div className="v2-footer-backdrop" aria-hidden="true"><Image src="/images/homepage-hero-3cdb9cad.webp" alt="" fill quality={90} sizes="(max-width: 700px) 100vw, 70vw" className="object-cover" /></div>
    <div className="v2-footer-fade" aria-hidden="true" />
    <div className="v2-container v2-footer-content">
      <div className="v2-footer-invitation">
        <div className="v2-footer-intro"><span className="v2-eyebrow">UNE VISION D’ENSEMBLE. LA PRÉCISION DU DÉTAIL.</span><h2>Construisons<br /><em>la suite.</em></h2><a href="/#devis" className="v2-button v2-button-light">Parlons de votre projet<ArrowUpRight size={18} aria-hidden="true" /></a></div>
        <address className="v2-footer-contact v2-glass"><span className="v2-eyebrow">VOTRE PROJET COMMENCE PAR UN ÉCHANGE</span><a href="tel:0952863156" className="v2-footer-call">09 52 86 31 56 <ArrowUpRight size={22} aria-hidden="true" /></a><a href="mailto:contact@cladisbardage.com" className="v2-footer-mail">contact@cladisbardage.com<ArrowUpRight size={16} aria-hidden="true" /></a><div className="v2-footer-address"><MapPin size={17} aria-hidden="true" /><span>74 rue de la Révériaz<br />73000 Chambéry, France</span></div><span className="v2-footer-hours">Lundi – Vendredi · 8h00 – 18h00</span></address>
      </div>
      <div className="v2-footer-links">
        <div className="v2-footer-signature"><a href="/" aria-label="CLADIS Construction, accueil"><Image src="/images/cladis-logo-transparent-07a6284b.webp" alt="CLADIS Construction" width={210} height={60} className="v2-footer-logo" /></a><p>Enveloppe du bâtiment<br />& construction métallique.</p></div>
        <nav aria-label="Navigation de pied de page">{NAV_LINKS.filter((link) => link.href !== "/").map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
        <button type="button" onClick={onOpenCatalogue} className="v2-footer-catalogue"><Download size={20} strokeWidth={1.5} aria-hidden="true" /><span>Le catalogue Cladis<small>ÉDITION 2026</small></span><ArrowUpRight size={18} aria-hidden="true" /></button>
      </div>
      <div className="v2-footer-final"><span>© {new Date().getFullYear()} Cladis Construction</span><span>CHAMBÉRY · AUVERGNE-RHÔNE-ALPES</span><a href="#" aria-label="Retour en haut de page"><span>Revenir en haut</span><span className="v2-footer-up"><ArrowUp size={17} aria-hidden="true" /></span></a></div>
    </div>
  </footer>;
}
