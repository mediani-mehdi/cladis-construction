"use client";

import Image from "next/image";
import { X, Download, CheckCircle2, ExternalLink } from "lucide-react";

interface CatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogueModal({ isOpen, onClose }: CatalogueModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white border border-black/20 shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-swiss-subtle hover:bg-swiss-ink hover:text-white text-swiss-ink transition-colors"
          aria-label="Fermer le catalogue"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-swiss-muted uppercase tracking-widest font-bold">
            DOCUMENTATION TECHNIQUE OFFICIELLE // 2026
          </span>
          <span className="w-8 h-[1px] bg-black/20" />
        </div>

        <h3 className="font-sans text-2xl sm:text-4xl text-swiss-ink font-extrabold tracking-tight mb-1">
          Catalogue Technique 2026
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-swiss-muted mb-6">
          CLADIS CONSTRUCTION • BARDAGE • ÉTANCHÉITÉ • COUVERTURE
        </p>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-8 bg-swiss-subtle p-5 border border-black/10">
          <div className="sm:col-span-4 relative h-64 overflow-hidden border border-black/10 shadow-sm bg-swiss-stone">
            <Image
              src="/images/catalogue-cover.jpg"
              alt="Couverture Catalogue CLADIS 2026"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="sm:col-span-8 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-swiss-muted font-bold block">
                Sommaire du Catalogue
              </span>
              <h4 className="font-sans text-base sm:text-lg text-swiss-ink font-bold">
                Guide des Systèmes Constructifs & Réalisations
              </h4>
            </div>

            <ul className="space-y-2 text-xs text-swiss-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-swiss-ink shrink-0" />
                <span className="text-swiss-ink">1. Enveloppe du Bâtiment & ADN de l'Entreprise</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-swiss-ink shrink-0" />
                <span className="text-swiss-ink">2. Bardage Métallique, Couverture & Étanchéité</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-swiss-ink shrink-0" />
                <span className="text-swiss-ink">3. Charpentes Métalliques Industrielles (Eurocodes 3)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-swiss-ink shrink-0" />
                <span className="text-swiss-ink">4. Étanchéité Végétalisée & Solaire Photovoltaïque</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-swiss-ink shrink-0" />
                <span className="text-swiss-ink">5. Bureau d'Études Intégré & Alliance Building Services</span>
              </li>
            </ul>

            <div className="pt-2 text-[11px] font-mono text-swiss-muted">
              Format : PDF Haute Définition • 8 Pages Complètes
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/10">
          <a
            href="/catalogue-cladis-2026.pdf"
            download="Catalogue-CLADIS-CONSTRUCTION-2026.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-swiss-ink text-white text-xs uppercase tracking-widest font-mono font-medium hover:bg-neutral-800 transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger le Catalogue (PDF)</span>
          </a>

          <a
            href="/catalogue-cladis-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-black/20 text-xs uppercase tracking-widest font-mono text-swiss-ink hover:bg-swiss-subtle transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Consulter en plein écran</span>
          </a>
        </div>

      </div>
    </div>
  );
}
