"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site-navigation";
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
  const pathname = usePathname();
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
    { label: "À propos (Qui sommes-nous)", target: "/l-entreprise" },
    { label: "Nos Métiers (Vue d'ensemble)", target: "/metiers" },
    { label: "Méthodologie en quatre phases", target: "/methodologie" },
    { label: "L'Alliance Building Services", target: "/alliance" },
    { label: "Nos Réalisations", target: "/realisations" },
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

  const navLinks = NAV_LINKS;
  const isActivePage = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && (pathname === href || pathname.startsWith(`${href}/`));

  return (
    <>
      {/* 1. Thin Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-black/5 pointer-events-none">
        <div
          className="h-full bg-construction-blue transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Main Header Bar (Solid pure white background across all sections including hero) */}
      <header
        className="fixed top-0 left-0 right-0 z-40 w-full bg-white border-b border-black/10 shadow-swiss-sm transition-all duration-300"
      >
        <div className="w-full flex items-stretch">
          
          {/* A. Signature Clear-Background Logo Block (Docked flush to left edge, like the reference image) */}
          <a
            href="/"
            className="flex-shrink-0 bg-white border-r border-black/10 px-5 sm:px-7 md:px-9 lg:px-11 xl:px-7 2xl:px-11 py-2.5 sm:py-3 flex items-center justify-center transition-colors select-none z-30 group min-w-[200px] sm:min-w-[260px] md:min-w-[290px] lg:min-w-[320px] xl:min-w-[260px] 2xl:min-w-[320px]"
            title="CLADIS CONSTRUCTION - Accueil"
          >
            <Image
              src="/images/cladis-logo-transparent-07a6284b.webp"
              alt="CLADIS CONSTRUCTION - Bardage, Étanchéité, Couverture"
              width={420}
              height={120}
              className="h-13 sm:h-16 md:h-18 lg:h-20 xl:h-16 2xl:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
              priority
            />
          </a>

          {/* B. Right Navigation Area (Two-tier architectural grid layout) */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            
            {/* TOP TIER: Utility Row (Social icons on left, Opening hours & direct phone on right) */}
            <div
              className="hidden lg:flex items-center justify-between text-[11px] font-secondary h-9 px-6 lg:px-8 border-b border-black/8 bg-neutral-50/70 text-[#878787]"
            >
              
              {/* Left: Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#878787] hover:text-construction-blue transition-colors"
                  title="X (Twitter)"
                >
                  <span className="font-bold text-xs">𝕏</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#878787] hover:text-construction-blue transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#878787] hover:text-construction-blue transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#878787] hover:text-construction-blue transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right: Working Hours & Direct Phone */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-[#878787]">
                  <Clock className="w-3 h-3 text-construction-blue" />
                  <span>Lun – Ven : 8h00 – 18h00</span>
                </div>
                <div className="h-3 w-[1px] bg-black/15" />
                <a
                  href="tel:0952863156"
                  className="text-[#2D374E] hover:text-construction-blue font-bold font-secondary transition-colors"
                >
                  Tél : 09 52 86 31 56
                </a>
              </div>

            </div>

            {/* BOTTOM TIER: Main Navigation Menu + SEARCH & CTA */}
            <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 lg:px-8">
              
              {/* Desktop Nav Links (Clean, direct links, Primary: #2D374E, Font: Montserrat) */}
              <nav aria-label="Navigation principale" className="hidden xl:flex items-center gap-5 whitespace-nowrap text-[11px] font-secondary font-bold uppercase tracking-wider">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={isActivePage(link.href) ? "page" : undefined}
                    className="text-[#2D374E] hover:text-construction-blue transition-colors py-2 relative group"
                  >
                    <span>{link.label}</span>
                    <span className={`absolute bottom-1 left-0 h-[2px] bg-primary transition-all duration-200 group-hover:w-full ${isActivePage(link.href) ? "w-full" : "w-0"}`} />
                  </a>
                ))}
              </nav>

              {/* Right Side: Search & Demander un devis */}
              <div className="flex items-center gap-4 ml-auto lg:ml-0">
                
                {/* Search Trigger */}
                <div className="relative">
                  {searchOpen ? (
                    <div
                      className="flex items-center gap-2 bg-white border border-construction-blue shadow-lg px-3 py-1.5 animate-fadeIn"
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
                            const q = searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                            if (q.includes("cata") && onOpenCatalogue) {
                              onOpenCatalogue();
                              setSearchOpen(false);
                            } else {
                              const target = q.includes("method") ? "/methodologie"
                                : q.includes("alliance") ? "/alliance"
                                : q.includes("propos") || q.includes("entreprise") ? "/l-entreprise"
                                : q.includes("devis") || q.includes("contact") ? "/#devis"
                                : q.includes("config") ? "/#configurateur"
                                : q.includes("projet") || q.includes("real") ? "/realisations"
                                : "/metiers";
                              handleSearchSelect({ label: searchQuery, target });
                            }
                          }
                        }}
                        className="bg-transparent text-xs text-[#2D374E] placeholder-[#878787] outline-none w-44 sm:w-56 font-secondary"
                      />
                      <button
                        onClick={() => setSearchOpen(false)}
                        className="text-[#878787] hover:text-[#2D374E] p-0.5"
                        aria-label="Fermer la recherche"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSearchOpen(true)}
                      className="flex items-center gap-2 text-xs font-secondary font-bold uppercase tracking-wider text-[#2D374E] hover:text-construction-blue transition-colors py-1.5 px-2 group"
                      title="Rechercher"
                    >
                      <span className="sr-only">Rechercher</span>
                      <Search className="w-4 h-4 text-[#2D374E] group-hover:text-construction-blue" />
                    </button>
                  )}

                  {/* Search Shortcuts Flyout */}
                  {searchOpen && (
                    <div
                      className="absolute right-0 top-full mt-2 w-72 bg-white border border-black/10 shadow-swiss-lg p-3 z-50 animate-fadeIn"
                    >
                      <div className="text-[10px] font-secondary uppercase tracking-widest text-construction-blue pb-2 mb-2 border-b border-black/10 font-bold">
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
                              className="w-full text-left p-2 hover:bg-neutral-100 text-[#2D374E] hover:text-construction-blue text-xs font-secondary flex items-center justify-between transition-colors"
                            >
                              <span>{sc.label}</span>
                              <ArrowUpRight className="w-3 h-3 text-[#878787]" />
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Demander un devis CTA Button */}
                <a
                  href="/#devis"
                  className="hidden sm:inline-flex xl:hidden 2xl:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-secondary font-bold uppercase tracking-wider text-white bg-construction-blue hover:bg-construction-blueDark transition-all duration-200 shadow-md"
                >
                  <span>Demander un devis</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="xl:hidden p-2 text-[#2D374E] bg-neutral-100 border border-neutral-300 hover:bg-neutral-200 transition-colors"
                  aria-label="Ouvrir le menu"
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-navigation"
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
        <div className="xl:hidden fixed inset-0 z-50 bg-primary pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="bg-white px-3 py-1.5 shadow-sm inline-flex items-center">
                <Image
                  src="/images/cladis-logo-transparent-07a6284b.webp"
                  alt="CLADIS CONSTRUCTION"
                  width={220}
                  height={62}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-white hover:bg-white/20 bg-white/10"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav id="mobile-navigation" aria-label="Navigation mobile" className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActivePage(link.href) ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-sans font-bold tracking-tight text-white hover:bg-white/10 aria-[current=page]:bg-white/10 transition-colors px-2 py-2.5 border-b border-white/10 flex items-center justify-between"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-white/50">0{idx + 1}.</span>
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
              <Phone className="w-3.5 h-3.5 text-white/70" />
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
                <Download className="w-3.5 h-3.5 text-white/70" />
                <span>Télécharger Catalogue 2026 (PDF)</span>
              </button>
            )}

            <a
              href="/#devis"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 px-4 bg-white text-primary font-mono text-xs uppercase tracking-widest font-bold shadow-lg"
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
