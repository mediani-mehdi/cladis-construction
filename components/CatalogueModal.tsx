"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Download, CheckCircle2, ExternalLink } from "lucide-react";

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
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-6">
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="catalogue-title" className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden border border-primary/20 bg-white shadow-2xl sm:max-h-[calc(100dvh-3rem)]" onClick={(event) => event.stopPropagation()}>
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-primary/10 px-5 py-4 sm:px-8 sm:py-5">
          <div className="min-w-0">
            <span className="mb-2 block font-secondary text-[9px] font-semibold uppercase tracking-wider text-primary/55">Documentation technique officielle</span>
            <h2 id="catalogue-title" className="font-sans text-xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">Catalogue Technique 2026</h2>
          </div>
          <button type="button" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/5 text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label="Fermer le catalogue"><X className="h-5 w-5" aria-hidden="true" /></button>
        </div>

        <div className="min-h-0 overflow-y-auto overscroll-contain p-5 sm:p-8">
          <p className="mb-5 font-secondary text-[10px] uppercase leading-relaxed tracking-wider text-primary/60">CLADIS CONSTRUCTION · Bardage · Étanchéité · Couverture</p>
          <div className="grid grid-cols-1 items-start gap-6 border border-primary/10 bg-swiss-subtle p-4 md:grid-cols-12 md:p-5">
            <div className="relative mx-auto h-60 w-44 max-w-full overflow-hidden border border-primary/10 bg-swiss-stone shadow-sm md:col-span-4 md:h-64 md:w-full">
              <Image src="/images/catalogue-cover-faed49b8.webp" alt="Couverture du catalogue CLADIS 2026" fill sizes="(min-width: 768px) 200px, 176px" className="object-cover object-top" />
            </div>
            <div className="min-w-0 space-y-4 md:col-span-8">
              <div><span className="mb-2 block font-secondary text-[9px] font-semibold uppercase tracking-widest text-primary/55">Sommaire du catalogue</span><h3 className="font-sans text-lg font-bold leading-snug text-primary">Guide des systèmes constructifs & réalisations</h3></div>
              <ul className="space-y-3 text-xs leading-relaxed text-primary">
                {[
                  "Enveloppe du bâtiment & identité de l'entreprise",
                  "Bardage métallique, couverture & étanchéité",
                  "Charpentes métalliques industrielles",
                  "Étanchéité végétalisée & solaire photovoltaïque",
                  "Bureau d'études intégré & alliance Building Services",
                ].map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/65" aria-hidden="true" /><span className="min-w-0">{item}</span></li>)}
              </ul>
              <p className="text-[11px] text-primary/55">Format PDF · Documentation complète</p>
            </div>
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-1 gap-3 border-t border-primary/10 p-5 sm:grid-cols-2 sm:px-8">
          <a href="/catalogue-cladis-2026.pdf" download="Catalogue-CLADIS-CONSTRUCTION-2026.pdf" className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-4 py-3 text-center text-xs font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><Download className="h-4 w-4 shrink-0" aria-hidden="true" /><span>Télécharger le catalogue</span></a>
          <a href="/catalogue-cladis-2026.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-primary/25 px-4 py-3 text-center text-xs font-semibold text-primary transition-colors hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" /><span>Consulter en plein écran</span></a>
        </div>
      </div>
    </div>
  );
}
