"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Download,
  Search,
} from "lucide-react";

interface NavbarProps {
  onOpenCatalogue?: () => void;
}

export default function Navbar({ onOpenCatalogue }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const searchShortcuts = [
    { label: "Bardage Métallique", target: "#metiers" },
    { label: "Couverture & Étanchéité", target: "#metiers" },
    { label: "Charpentes Industrielles", target: "#metiers" },
    { label: "L'Alliance Building Services", target: "#alliance" },
    { label: "Nos Réalisations", target: "#realisations" },
    { label: "Configurateur Enveloppe", target: "#configurateur" },
    { label: "Demande de Devis", target: "#devis" },
    { label: "Catalogue 2026 (PDF)", action: "catalogue" },
  ];

  const handleSearchSelect = (shortcut: { label: string; target?: string; action?: string }) => {
    setSearchOpen(false);
    if (shortcut.action === "catalogue" && onOpenCatalogue) {
      onOpenCatalogue();
      return;
    }
    if (shortcut.target) {
      const el = document.querySelector(shortcut.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "Accueil", href: "#" },
    { label: "Nos Métiers", href: "#metiers" },
    { label: "L'Alliance", href: "#alliance" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Méthodologie", href: "#methodologie" },
    { label: "Contacts", href: "#contact" },
  ];

  return (
    <>
      {/* 1. Thin Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/10 pointer-events-none">
        <div
          className="h-full bg-construction-blue transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Main Header Bar (Clean, single-tier, with official logo & direct navigation) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/95 border-b border-white/15 shadow-2xl py-2"
            : "bg-gradient-to-b from-black/90 via-black/55 to-transparent border-b border-white/10 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* A. Official CLADIS Logo on Crisp White Background */}
          <a
            href="#"
            className="flex items-center bg-white px-4 sm:px-5 py-2 sm:py-2.5 shadow-lg select-none group border border-white/30 transition-all hover:bg-neutral-50"
            title="CLADIS CONSTRUCTION - Accueil"
          >
            <Image
              src="/images/cladis-logo-white-bg.png"
              alt="CLADIS CONSTRUCTION - Bardage, Étanchéité, Couverture"
              width={260}
              height={74}
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              priority
            />
          </a>

          {/* B. Direct Main Navigation Links (Clean, direct, NO submenus) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-xs font-mono font-bold uppercase tracking-wider text-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-construction-blue transition-colors py-2 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-construction-blue transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* C. Right Actions: Direct Phone, Search & 'Demander un devis' CTA */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Direct Phone Number */}
            <a
              href="tel:0952863156"
              className="hidden xl:flex items-center gap-2 text-xs font-mono text-white/85 hover:text-construction-blue font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-construction-blue" />
              <span>09 52 86 31 56</span>
            </a>

            {/* Search Trigger */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center gap-2 bg-black/95 border border-construction-blue px-3 py-1.5 animate-fadeIn shadow-2xl">
                  <Search className="w-3.5 h-3.5 text-construction-blue flex-shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Rechercher (bardage, devis, catalogue)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const q = searchQuery.toLowerCase();
                        if (q.includes("devis")) {
                          document.querySelector("#devis")?.scrollIntoView({ behavior: "smooth" });
                        } else if (q.includes("cata") && onOpenCatalogue) {
                          onOpenCatalogue();
                        } else if (q.includes("alliance")) {
                          document.querySelector("#alliance")?.scrollIntoView({ behavior: "smooth" });
                        } else if (q.includes("projet") || q.includes("real")) {
                          document.querySelector("#realisations")?.scrollIntoView({ behavior: "smooth" });
                        } else {
                          document.querySelector("#metiers")?.scrollIntoView({ behavior: "smooth" });
                        }
                        setSearchOpen(false);
                      }
                    }}
                    className="bg-transparent text-xs text-white placeholder-white/50 outline-none w-44 sm:w-56 font-mono"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-white/60 hover:text-white p-0.5"
                    aria-label="Fermer la recherche"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-construction-blue transition-colors py-1.5 px-2"
                  title="Rechercher"
                >
                  <Search className="w-4 h-4 text-white hover:text-construction-blue" />
                </button>
              )}

              {/* Quick Jump Search Dropdown */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-[#0c0c0c]/98 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl z-50 animate-fadeIn">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-construction-blue pb-2 mb-2 border-b border-white/10 font-bold">
                    Accès Rapides
                  </div>
                  <div className="space-y-1">
                    {searchShortcuts
                      .filter((sc) =>
                        searchQuery.trim() === ""
                          ? true
                          : sc.label.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((sc) => (
                        <button
                          key={sc.label}
                          onClick={() => handleSearchSelect(sc)}
                          className="w-full text-left p-2 hover:bg-white/10 text-xs font-mono text-white/90 hover:text-construction-blue flex items-center justify-between transition-colors"
                        >
                          <span>{sc.label}</span>
                          <ArrowUpRight className="w-3 h-3 text-white/40" />
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Demander un Devis CTA Button */}
            <a
              href="#devis"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-construction-blue hover:bg-construction-blueDark transition-all duration-200 shadow-md"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </header>

      {/* 3. Mobile Navigation Drawer (Clean, direct links, no submenus) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="bg-white px-3 py-1.5 shadow-sm inline-flex items-center">
                <Image
                  src="/images/cladis-logo-white-bg.png"
                  alt="CLADIS CONSTRUCTION"
                  width={180}
                  height={50}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-white hover:text-construction-blue bg-white/10"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-sans font-bold tracking-tight text-white hover:text-construction-blue transition-colors py-2.5 border-b border-white/10 flex items-center justify-between"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-construction-blue">0{idx + 1}.</span>
                    <span>{link.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/50" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/15 mt-8">
            <a
              href="tel:0952863156"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 border border-white/20 text-white text-xs font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-construction-blue" />
              <span>09 52 86 31 56 • CHAMBÉRY (SAVOIE)</span>
            </a>

            {onOpenCatalogue && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalogue();
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/20 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/15"
              >
                <Download className="w-3.5 h-3.5 text-construction-blue" />
                <span>Télécharger Catalogue 2026 (PDF)</span>
              </button>
            )}

            <a
              href="#devis"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 px-4 bg-construction-blue text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg"
            >
              <span>Demander un devis en ligne</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
