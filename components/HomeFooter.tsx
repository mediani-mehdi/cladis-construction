"use client";

import { ArrowUp, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-navigation";

export default function HomeFooter({ onOpenCatalogue }: { onOpenCatalogue: () => void }) {
  return <footer className="v2-footer"><div className="v2-container"><div className="v2-footer-top"><div><span className="v2-eyebrow">UNE VISION D’ENSEMBLE. LA PRÉCISION DU DÉTAIL.</span><a href="mailto:contact@cladisbardage.com" className="v2-footer-email">Construisons la suite. <ArrowUpRight /></a></div><a href="tel:0952863156" className="v2-footer-phone">09 52 86 31 56</a></div><div className="v2-footer-grid"><div><strong>CLADIS CONSTRUCTION</strong><p>Enveloppe du bâtiment<br />& construction métallique.</p><address>74 rue de la Révériaz<br />73000 Chambéry, France</address></div><nav aria-label="Navigation de pied de page">{NAV_LINKS.filter((link) => link.href !== "/").map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><div><a href="mailto:contact@cladisbardage.com">contact@cladisbardage.com</a><p>Lundi – Vendredi<br />8h00 – 18h00</p><button onClick={onOpenCatalogue} className="v2-text-link">Catalogue 2026 <ArrowUpRight size={16} /></button></div></div><div className="v2-footer-wordmark" aria-hidden="true">CLADIS<span>®</span></div><div className="v2-footer-bottom"><span>© {new Date().getFullYear()} Cladis Construction</span><span>CHAMBÉRY · AUVERGNE-RHÔNE-ALPES</span><a href="#" aria-label="Retour en haut de page">Retour en haut <ArrowUp size={15} /></a></div></div></footer>;
}
