"use client";

import Image from "next/image";
import { NAV_LINKS, METIER_LINKS } from "@/lib/site-navigation";
import { ArrowUp, ArrowUpRight, Phone, Mail, MapPin, Download } from "lucide-react";

interface FooterProps {
  onOpenCatalogue?: () => void;
}

const footerLinkStyle = "inline-flex min-h-11 items-center text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:min-h-0";

export default function Footer({ onOpenCatalogue }: FooterProps) {
  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-primary text-white/80">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/hero-building-60c1b312.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.28] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-primary/95" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 items-start gap-x-5 gap-y-9 sm:gap-x-9 lg:grid-cols-12">
          <div className="col-span-2 space-y-5 md:col-span-1 lg:col-span-4">
            <a href="/" className="inline-flex border border-white/25 bg-white px-4 py-2.5 transition-colors hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" title="CLADIS CONSTRUCTION — Accueil">
              <Image
                src="/images/cladis-logo-transparent-07a6284b.webp"
                alt="CLADIS CONSTRUCTION — Accueil"
                width={240}
                height={68}
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="max-w-sm text-xs leading-relaxed text-white/70">
              Une expertise structurée en enveloppe du bâtiment et en construction métallique.
              Des études à la réalisation, nous accompagnons vos projets avec rigueur, précision et exigence.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="border border-white/15 px-2.5 py-1.5 text-[10px] text-white/75">Bureau d'études intégré</span>
              <span className="border border-white/15 px-2.5 py-1.5 text-[10px] text-white/75">Alliance opérationnelle</span>
            </div>
            <nav aria-label="Préparer votre projet" className="flex flex-col items-start gap-3 border-t border-white/15 pt-5 text-xs font-semibold">
              <a href="/#configurateur" className={`inline-flex items-center gap-2 ${footerLinkStyle}`}>Configurer mon bâtiment<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
              <a href="/#devis" className={`inline-flex items-center gap-2 ${footerLinkStyle}`}>Demander un devis<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
            </nav>
          </div>

          <nav aria-labelledby="footer-pages-heading" className="lg:col-span-2">
            <h2 id="footer-pages-heading" className="mb-5 font-secondary text-[10px] font-bold uppercase tracking-[0.18em] text-white">Explorer</h2>
            <ul className="space-y-1 text-xs xl:space-y-3">
              {NAV_LINKS.map((link) => <li key={link.href}><a href={link.href} className={footerLinkStyle}>{link.label}</a></li>)}
            </ul>
          </nav>

          <nav aria-labelledby="footer-metiers-heading" className="lg:col-span-3">
            <h2 id="footer-metiers-heading" className="mb-5 font-secondary text-[10px] font-bold uppercase tracking-[0.18em] text-white">Nos métiers</h2>
            <ul className="space-y-1 text-xs xl:space-y-3">
              {METIER_LINKS.map((link) => <li key={link.href}><a href={link.href} className={footerLinkStyle}>{link.label}</a></li>)}
            </ul>
          </nav>

          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <h2 className="mb-5 font-secondary text-[10px] font-bold uppercase tracking-[0.18em] text-white">Contact & horaires</h2>
            <address className="space-y-4 text-xs not-italic">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
                <span className="leading-relaxed text-white/80">74 rue de la Révériaz<br />73000 Chambéry</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
                <div className="flex flex-col items-start gap-2">
                  <a href="tel:0952863156" className={footerLinkStyle}>09 52 86 31 56</a>
                  <a href="tel:0768527215" className={footerLinkStyle}>07 68 52 72 15</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
                <a href="mailto:contact@cladisbardage.com" className={`break-all ${footerLinkStyle}`}>contact@cladisbardage.com</a>
              </div>
            </address>
            <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-relaxed text-white/65">
              <span className="block font-semibold text-white/85">Heures d'ouverture</span>
              Lundi – Vendredi : 8h00 – 18h00
            </p>
            {onOpenCatalogue ? (
              <button type="button" onClick={onOpenCatalogue} className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 border border-white/25 bg-white/10 px-3 py-3 text-xs font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />Consulter le catalogue
              </button>
            ) : (
              <a href="/catalogue-cladis-2026.pdf" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 border border-white/25 bg-white/10 px-3 py-3 text-xs font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />Consulter le catalogue
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-black/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-[11px] leading-relaxed text-white/55">© {new Date().getFullYear()} CLADIS CONSTRUCTION. Tous droits réservés.</p>
          <div className="flex w-full items-center justify-between gap-5 sm:w-auto">
            <span className="text-[10px] text-white/55">Chambéry · Auvergne-Rhône-Alpes</span>
            <button type="button" onClick={scrollToTop} className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" aria-label="Retour en haut de page">
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
