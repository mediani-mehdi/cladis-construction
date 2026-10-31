"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site-navigation";
import { Menu, X, ArrowUpRight, Phone, Download, Clock, Linkedin, Instagram, Facebook, Search } from "lucide-react";

interface NavbarProps {
  onOpenCatalogue?: () => void;
}

const searchShortcuts = [
  { label: "Bardage Métallique", target: "/metiers/bardage-metallique" },
  { label: "Couverture & Étanchéité", target: "/metiers/couverture-etancheite" },
  { label: "Charpentes Industrielles", target: "/metiers/charpente-metallique" },
  { label: "Bardage Spécifique & Façades", target: "/metiers/bardage-specifique" },
  { label: "Isolation Thermique", target: "/metiers/isolation-thermique" },
  { label: "Toiture Végétalisée & Solaire", target: "/metiers/toiture-vegetalisee-solaire" },
  { label: "À propos (Qui sommes-nous)", target: "/l-entreprise" },
  { label: "Nos Métiers", target: "/metiers" },
  { label: "Méthodologie", target: "/methodologie" },
  { label: "L'Alliance", target: "/alliance" },
  { label: "Nos Réalisations", target: "/realisations" },
  { label: "Configurateur Enveloppe", target: "/#configurateur" },
  { label: "Demande de Devis", target: "/#devis" },
  { label: "Catalogue 2026 (PDF)", action: "catalogue" },
];

const normalize = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function Navbar({ onOpenCatalogue }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) setMobileMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    searchInputRef.current?.focus();
    const closeSearch = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSearchOpen(false); searchButtonRef.current?.focus(); }
    };
    const outsideSearch = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!searchPanelRef.current?.contains(target) && !searchButtonRef.current?.contains(target)) setSearchOpen(false);
    };
    document.addEventListener("keydown", closeSearch);
    document.addEventListener("pointerdown", outsideSearch);
    return () => { document.removeEventListener("keydown", closeSearch); document.removeEventListener("pointerdown", outsideSearch); };
  }, [searchOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileMenuOpen(false); return; }
      if (event.key !== "Tab") return;
      const elements = menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!elements?.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", keyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", keyboard);
      menuButtonRef.current?.focus();
    };
  }, [mobileMenuOpen]);

  const handleSearchSelect = (shortcut: { label: string; target?: string; action?: string }) => {
    setSearchOpen(false);
    searchButtonRef.current?.focus();
    if (shortcut.action === "catalogue") {
      if (onOpenCatalogue) onOpenCatalogue();
      else window.location.href = "/catalogue-cladis-2026.pdf";
    } else if (shortcut.target) window.location.href = shortcut.target;
  };

  const submitSearch = () => {
    const query = normalize(searchQuery);
    if (query.includes("cata")) { handleSearchSelect({ label: searchQuery, action: "catalogue" }); return; }
    const target = query.includes("method") ? "/methodologie"
      : query.includes("alliance") ? "/alliance"
      : query.includes("propos") || query.includes("entreprise") ? "/l-entreprise"
      : query.includes("devis") || query.includes("contact") ? "/#devis"
      : query.includes("config") ? "/#configurateur"
      : query.includes("projet") || query.includes("real") ? "/realisations" : "/metiers";
    handleSearchSelect({ label: searchQuery, target });
  };

  const isActivePage = (href: string) => href === "/" ? pathname === "/" : !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));
  const matchingShortcuts = searchShortcuts.filter((shortcut) => normalize(shortcut.label).includes(normalize(searchQuery.trim())));

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-primary/5" aria-hidden="true">
        <div className="h-full bg-primary" style={{ width: `${scrollProgress}%` }} />
      </div>
      <header className="fixed inset-x-0 top-0 z-40 w-full border-b border-primary/10 bg-white shadow-swiss-sm">
        <div className="flex w-full items-stretch">
          <a href="/" title="CLADIS CONSTRUCTION — Accueil" className={`flex min-w-0 shrink-0 items-center justify-center border-r border-primary/10 bg-white px-3 py-3 sm:px-5 lg:px-7 xl:px-6 2xl:px-9 ${focusStyle}`}>
            <Image src="/images/cladis-logo-transparent-07a6284b.webp" alt="CLADIS CONSTRUCTION — Accueil" width={420} height={120} priority className="h-12 w-[150px] object-contain sm:h-16 sm:w-[210px] lg:h-20 lg:w-[260px] xl:h-16 xl:w-[230px] 2xl:h-20 2xl:w-[260px]" />
          </a>
          <div className="flex min-w-0 flex-1 flex-col justify-between">
            <div className="hidden h-9 items-center justify-between gap-4 border-b border-primary/10 bg-neutral-50/70 px-6 text-[10px] text-muted lg:flex lg:px-8">
              <div className="flex items-center gap-4">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={`hover:text-primary ${focusStyle}`}>𝕏</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`hover:text-primary ${focusStyle}`}><Facebook className="h-3.5 w-3.5" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`hover:text-primary ${focusStyle}`}><Instagram className="h-3.5 w-3.5" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`hover:text-primary ${focusStyle}`}><Linkedin className="h-3.5 w-3.5" /></a>
              </div>
              <div className="flex items-center gap-5 whitespace-nowrap">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" aria-hidden="true" />Lun – Ven : 8h00 – 18h00</span>
                <a href="tel:0952863156" className={`font-semibold text-primary ${focusStyle}`}>09 52 86 31 56</a>
              </div>
            </div>
            <div className="flex h-[72px] min-w-0 items-center justify-between gap-3 px-3 sm:h-[88px] sm:px-5 lg:h-[68px] lg:px-6">
              <nav aria-label="Navigation principale" className="hidden min-w-0 items-center gap-4 whitespace-nowrap font-secondary text-[11px] font-bold uppercase tracking-wider xl:flex 2xl:gap-5">
                {NAV_LINKS.map((link) => <a key={link.href} href={link.href} aria-current={isActivePage(link.href) ? "page" : undefined} className={`relative py-3 text-primary ${focusStyle}`}><span>{link.label}</span><span aria-hidden="true" className={`absolute bottom-1 left-0 h-0.5 bg-primary ${isActivePage(link.href) ? "w-full" : "w-0"}`} /></a>)}
              </nav>
              <div className="ml-auto flex shrink-0 items-center gap-2 lg:gap-3">
                <button ref={searchButtonRef} type="button" aria-label="Rechercher" aria-expanded={searchOpen} aria-controls="site-search" onClick={() => { setMobileMenuOpen(false); setSearchOpen((current) => !current); }} className={`flex h-11 w-11 items-center justify-center text-primary hover:bg-primary/5 ${focusStyle}`}>
                  <Search className="h-5 w-5" aria-hidden="true" />
                </button>
                <a href="/#devis" className={`hidden min-h-11 items-center gap-2 whitespace-nowrap bg-primary px-4 py-3 font-secondary text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90 md:inline-flex xl:hidden 2xl:inline-flex ${focusStyle}`}>Demander un devis<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a>
                <button ref={menuButtonRef} type="button" aria-label="Ouvrir le menu" aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" onClick={() => { setSearchOpen(false); setMobileMenuOpen(true); }} className={`flex h-11 w-11 items-center justify-center border border-primary/15 bg-primary/5 text-primary hover:bg-primary/10 xl:hidden ${focusStyle}`}>
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {searchOpen && (
          <div ref={searchPanelRef} id="site-search" className="fixed inset-x-4 top-[calc(var(--site-header-height)+0.5rem)] max-h-[calc(100dvh-var(--site-header-height)-1.5rem)] overflow-y-auto overscroll-contain border border-primary/15 bg-white p-3 shadow-swiss-lg sm:left-auto sm:right-6 sm:w-96 sm:p-4">
            <form onSubmit={(event) => { event.preventDefault(); submitSearch(); }} className="sticky top-0 z-10 mb-4 flex min-w-0 items-center gap-2 border-b border-primary/15 bg-white pb-3">
              <label htmlFor="site-search-input" className="sr-only">Rechercher sur le site</label>
              <input id="site-search-input" ref={searchInputRef} type="search" placeholder="Métier, projet, catalogue…" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="min-h-11 min-w-0 flex-1 bg-transparent px-2 text-base text-primary outline-none" />
              <button type="button" onClick={() => { setSearchOpen(false); searchButtonRef.current?.focus(); }} aria-label="Fermer la recherche" className={`flex h-11 w-11 shrink-0 items-center justify-center text-primary hover:bg-primary/5 ${focusStyle}`}><X className="h-5 w-5" aria-hidden="true" /></button>
            </form>
            <p className="mb-2 font-secondary text-[9px] font-semibold uppercase tracking-widest text-primary/60">Accès rapides</p>
            <div className="space-y-1">
              {matchingShortcuts.length ? matchingShortcuts.map((shortcut) => <button key={shortcut.label} type="button" onClick={() => handleSearchSelect(shortcut)} className={`flex min-h-11 w-full items-center justify-between gap-3 px-2 py-3 text-left text-xs text-primary hover:bg-primary/5 ${focusStyle}`}><span className="min-w-0">{shortcut.label}</span><ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /></button>) : <p className="px-2 py-3 text-sm text-muted">Aucun résultat. Essayez un métier ou « devis ».</p>}
            </div>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div ref={menuRef} role="dialog" aria-modal="true" aria-label="Menu principal" className="fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto overscroll-contain bg-primary px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))] text-white sm:px-8 xl:hidden">
          <div className="mx-auto flex w-full max-w-xl flex-1 flex-col">
            <div className="mb-5 flex shrink-0 items-center justify-between gap-4 border-b border-white/20 pb-4">
              <a href="/" className="inline-flex bg-white px-3 py-2" aria-label="Accueil CLADIS CONSTRUCTION"><Image src="/images/cladis-logo-transparent-07a6284b.webp" alt="CLADIS CONSTRUCTION" width={220} height={62} className="h-9 w-[150px] object-contain sm:h-11 sm:w-[190px]" /></a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} aria-label="Fermer le menu" className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><X className="h-5 w-5" aria-hidden="true" /></button>
            </div>
            <nav id="mobile-navigation" aria-label="Navigation mobile">
              {NAV_LINKS.map((link) => <a key={link.href} href={link.href} aria-current={isActivePage(link.href) ? "page" : undefined} onClick={() => setMobileMenuOpen(false)} className="flex min-h-12 items-center justify-between gap-4 border-b border-white/15 px-2 py-3.5 text-base font-semibold text-white hover:bg-white/10 aria-[current=page]:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><span>{link.label}</span><ArrowUpRight className="h-4 w-4 shrink-0 text-white/55" aria-hidden="true" /></a>)}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-7">
              <a href="/#devis" onClick={() => setMobileMenuOpen(false)} className="inline-flex min-h-12 items-center justify-between gap-3 bg-white px-5 py-4 text-sm font-bold text-primary">Demander un devis<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>
              {onOpenCatalogue ? <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenCatalogue(); }} className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-4 py-3 text-xs text-white"><Download className="h-4 w-4 shrink-0" aria-hidden="true" />Consulter le catalogue</button> : <a href="/catalogue-cladis-2026.pdf" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-4 py-3 text-xs text-white"><Download className="h-4 w-4 shrink-0" aria-hidden="true" />Consulter le catalogue</a>}
              <a href="tel:0952863156" className="inline-flex min-h-11 items-center justify-center gap-2 py-2 text-xs text-white/75"><Phone className="h-3.5 w-3.5" aria-hidden="true" />09 52 86 31 56</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
