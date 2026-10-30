"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  Download,
  Clock,
  Linkedin,
  Instagram,
  Facebook,
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
    { label: "Bardage Métallique", target: "/metiers/bardage-metallique" },
    { label: "Couverture & Étanchéité", target: "/metiers/couverture-etancheite" },
    { label: "Charpentes Industrielles", target: "/metiers/charpente-metallique" },
    { label: "Bardage Spécifique & Façades", target: "/metiers/bardage-specifique" },
    { label: "Isolation Thermique RE2020", target: "/metiers/isolation-thermique" },
    { label: "Toiture Végétalisée & Solaire", target: "/metiers/toiture-vegetalisee-solaire" },
    { label: "L'Entreprise (Qui sommes-nous)", target: "/l-entreprise" },
    { label: "Nos Métiers (Vue d'ensemble)", target: "/metiers" },
    { label: "L'Alliance Building Services", target: "/#alliance" },
    { label: "Nos Réalisations", target: "/#realisations" },
    { label: "Configurateur Enveloppe", target: "/#configurateur" },
    { label: "Demande de Devis", target: "/#devis" },
    { label: "Catalogue 2026 (PDF)", action: "catalogue" },
  ];

  const handleSearchSelect = (shortcut: { label: string; target?: string; action?: string }) => {
    setSearchOpen(false);
    if (shortcut.action === "catalogue" && onOpenCatalogue) {
      onOpenCatalogue();
      return;
    }
    if (shortcut.target) {
      if (shortcut.target.startsWith("/")) {
        window.location.href = shortcut.target;
        return;
      }
      const el = document.querySelector(shortcut.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/${shortcut.target}`;
      }
    }
  };

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Nos Métiers", href: "/metiers" },
    { label: "L'Entreprise", href: "/l-entreprise" },
    { label: "Réalisations", href: "/#realisations" },
    { label: "Méthodologie", href: "/#methodologie" },
    { label: "L'Alliance", href: "/#alliance" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* 1. Thin Scroll Progress Indicator */}
      <div className={`fixed top-0 left-0 right-0 z-50 h-[2px] ${scrolled ? "bg-black/5" : "bg-white/10"} pointer-events-none transition-colors duration-300`}>
        <div
          className="h-full bg-construction-blue transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Main Header Bar (Full edge-to-edge docking, solid pure white on scroll) */}
      <header
        style={{ backgroundColor: scrolled ? "#ffffff" : undefined }}
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white border-b border-black/10 shadow-swiss-md"
            : "bg-gradient-to-b from-black/90 via-black/55 to-transparent border-b border-white/10"
        }`}
      >
        <div className="w-full flex items-stretch">
          
          {/* A. Full-Height Signature White Logo Block (Docked flush to top-left edge) */}
          <a
            href="/"
            className={`flex-shrink-0 bg-white hover:bg-neutral-50 px-4 sm:px-6 md:px-8 lg:px-9 flex items-center justify-center transition-colors select-none z-30 border-r ${
              scrolled ? "border-black/10" : "border-black/10 shadow-lg"
            } group`}
            title="CLADIS CONSTRUCTION - Accueil"
          >
            <Image
              src="/images/cladis-logo-white-bg.png"
              alt="CLADIS CONSTRUCTION - Bardage, Étanchéité, Couverture"
              width={340}
              height={95}
              className="h-12 sm:h-14 md:h-16 lg:h-[72px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </a>

          {/* B. Right Navigation Area (Two-tier architectural grid layout) */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            
            {/* TOP TIER: Utility Row (Social icons on left, Opening hours & direct phone on right) */}
            <div
              className={`hidden lg:flex items-center justify-between text-[11px] font-mono h-10 px-6 lg:px-10 border-b transition-colors duration-300 ${
                scrolled ? "border-black/10 text-neutral-600" : "border-white/10 text-white/75"
              }`}
            >
              
              {/* Left: Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${scrolled ? "text-neutral-600 hover:text-construction-blue" : "text-white/75 hover:text-construction-blue"} transition-colors`}
                  title="X (Twitter)"
                >
                  <span className="font-sans font-bold text-xs">𝕏</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${scrolled ? "text-neutral-600 hover:text-construction-blue" : "text-white/75 hover:text-construction-blue"} transition-colors`}
                  title="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${scrolled ? "text-neutral-600 hover:text-construction-blue" : "text-white/75 hover:text-construction-blue"} transition-colors`}
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${scrolled ? "text-neutral-600 hover:text-construction-blue" : "text-white/75 hover:text-construction-blue"} transition-colors`}
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right: Working Hours & Direct Phone */}
              <div className="flex items-center gap-6">
                <div className={`flex items-center gap-1.5 ${scrolled ? "text-neutral-700" : "text-white/85"}`}>
                  <Clock className="w-3 h-3 text-construction-blue" />
                  <span>Lun – Ven : 8h00 – 18h00</span>
                </div>
                <div className={`h-3 w-[1px] ${scrolled ? "bg-black/15" : "bg-white/20"}`} />
                <a
                  href="tel:0952863156"
                  className={`${scrolled ? "text-neutral-900 hover:text-construction-blue" : "text-white hover:text-construction-blue"} font-bold transition-colors`}
                >
                  Tél : 09 52 86 31 56
                </a>
              </div>

            </div>

            {/* BOTTOM TIER: Main Navigation Menu + SEARCH & CTA */}
            <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 lg:px-10">
              
              {/* Desktop Nav Links (Clean, direct links, NO submenus) */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono font-bold uppercase tracking-wider">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`${
                      scrolled ? "text-neutral-900 hover:text-construction-blue" : "text-white hover:text-construction-blue"
                    } transition-colors py-2 relative group`}
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-construction-blue transition-all duration-200 group-hover:w-full" />
                  </a>
                ))}
              </nav>

              {/* Right Side: Search & Demander un devis */}
              <div className="flex items-center gap-4 ml-auto lg:ml-0">
                
                {/* Search Trigger */}
                <div className="relative">
                  {searchOpen ? (
                    <div
                      className={`flex items-center gap-2 ${
                        scrolled ? "bg-white border-construction-blue shadow-lg" : "bg-black/95 border-construction-blue shadow-2xl"
                      } border px-3 py-1.5 animate-fadeIn`}
                    >
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
                        className={`bg-transparent text-xs ${
                          scrolled ? "text-neutral-900 placeholder-neutral-500" : "text-white placeholder-white/50"
                        } outline-none w-44 sm:w-56 font-mono`}
                      />
                      <button
                        onClick={() => setSearchOpen(false)}
                        className={`${scrolled ? "text-neutral-500 hover:text-neutral-900" : "text-white/60 hover:text-white"} p-0.5`}
                        aria-label="Fermer la recherche"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSearchOpen(true)}
                      className={`flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider ${
                        scrolled ? "text-neutral-900 hover:text-construction-blue" : "text-white hover:text-construction-blue"
                      } transition-colors py-1.5 px-2 group`}
                      title="Rechercher"
                    >
                      <span className="hidden sm:inline">Search</span>
                      <Search className={`w-4 h-4 ${scrolled ? "text-neutral-900 group-hover:text-construction-blue" : "text-white group-hover:text-construction-blue"}`} />
                    </button>
                  )}

                  {/* Search Shortcuts Flyout */}
                  {searchOpen && (
                    <div
                      className={`absolute right-0 top-full mt-2 w-72 ${
                        scrolled ? "bg-white border-black/10 shadow-swiss-lg" : "bg-[#0c0c0c]/98 border-white/15 shadow-2xl"
                      } backdrop-blur-2xl border p-3 z-50 animate-fadeIn`}
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-construction-blue pb-2 mb-2 border-b border-black/10 font-bold">
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
                              className={`w-full text-left p-2 ${
                                scrolled ? "hover:bg-neutral-100 text-neutral-800" : "hover:bg-white/10 text-white/90"
                              } hover:text-construction-blue text-xs font-mono flex items-center justify-between transition-colors`}
                            >
                              <span>{sc.label}</span>
                              <ArrowUpRight className={`w-3 h-3 ${scrolled ? "text-neutral-400" : "text-white/40"}`} />
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Demander un devis CTA Button */}
                <a
                  href="#devis"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white bg-construction-blue hover:bg-construction-blueDark transition-all duration-200 shadow-md"
                >
                  <span>Demander un devis</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`lg:hidden p-2 ${
                    scrolled
                      ? "text-neutral-900 bg-neutral-100 border-neutral-300 hover:bg-neutral-200"
                      : "text-white bg-white/10 border-white/20 hover:bg-white/20"
                  } border transition-colors`}
                  aria-label="Ouvrir le menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

              </div>

            </div>

          </div>

        </div>
      </header>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="bg-white px-3 py-1.5 shadow-sm inline-flex items-center">
                <Image
                  src="/images/cladis-logo-white-bg.png"
                  alt="CLADIS CONSTRUCTION"
                  width={200}
                  height={56}
                  className="h-9 w-auto object-contain"
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
