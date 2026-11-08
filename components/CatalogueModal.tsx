"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Download, ArrowUpRight } from "lucide-react";

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogueModal({ isOpen, onClose }: CatalogueModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { onClose(); return; }
      if (event.key !== "Tab") return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", handleKey); if (previousFocus?.isConnected) previousFocus.focus(); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="catalogue-overlay">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="catalogue-title" aria-describedby="catalogue-description" className="catalogue-dialog" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="catalogue-close" aria-label="Fermer le catalogue"><X size={20} aria-hidden="true" /></button>
        <div className="catalogue-preview">
          <span className="catalogue-edition">LA COLLECTION CLADIS / 2026</span>
          <div className="catalogue-book"><Image src="/images/catalogue-cover-faed49b8.webp" alt="Couverture du catalogue CLADIS 2026" fill sizes="(min-width: 768px) 260px, 160px" className="object-contain" /></div>
          <span className="catalogue-preview-caption">L’EXIGENCE, À CHAQUE PAGE.</span>
        </div>
        <div className="catalogue-content">
          <span className="catalogue-eyebrow">CLADIS CONSTRUCTION · ÉDITION 2026</span>
          <h2 id="catalogue-title">Notre savoir-faire.<br /><em>Votre catalogue.</em></h2>
          <p id="catalogue-description">Des solutions techniques aux réalisations, découvrez notre vision de l’enveloppe du bâtiment et les expertises qui donnent forme à vos projets.</p>
          <div className="catalogue-contents"><span>AU FIL DES PAGES</span><ul>{["Bardage, couverture & étanchéité", "Charpente & isolation thermique", "Toitures végétalisées & solaires", "Études, accompagnement & réalisations"].map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></div>
          <div className="catalogue-actions">
            <a href="/catalogue-cladis-2026.pdf" download="Catalogue-CLADIS-CONSTRUCTION-2026.pdf" className="catalogue-download"><span>Télécharger le catalogue</span><Download size={19} aria-hidden="true" /></a>
            <a href="/catalogue-cladis-2026.pdf" target="_blank" rel="noopener noreferrer" className="catalogue-read">Feuilleter en ligne<ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <span className="catalogue-file-note">PDF · 2026 · Accès libre</span>
        </div>
      </div>
    </div>
  );
}
