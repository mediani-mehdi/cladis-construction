"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone, Download, Clock, Linkedin, Instagram, Facebook } from "lucide-react";

interface NavbarProps {
  onOpenCatalogue?: () => void;
}

export default function Navbar({ onOpenCatalogue }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#" },
    { label: "Nos Métiers", href: "#metiers" },
    { label: "L'Alliance", href: "#alliance" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Méthodologie", href: "#methodologie" },
    { label: "Configurateur", href: "#configurateur" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/10 pointer-events-none">
        <div
          className="h-full bg-construction-orange transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/85 border-b border-white/10 py-2.5 shadow-2xl"
            : "bg-gradient-to-b from-black/60 via-black/25 to-transparent pt-0 pb-3"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Micro-Bar (matches reference: social on left, operating hours on right) */}
          <div className="hidden lg:flex items-center justify-between text-[11px] font-mono text-white/70 py-1.5 border-b border-white/10 ml-48 xl:ml-52">
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-widest text-white/50">Suivez-nous :</span>
              <div className="flex items-center gap-2.5 text-white/70">
                <a href="#" className="hover:text-construction-orange transition-colors" title="LinkedIn">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="hover:text-construction-orange transition-colors" title="Instagram">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a href="#" className="hover:text-construction-orange transition-colors" title="Facebook">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-white/80">
                <Clock className="w-3 h-3 text-construction-orange" />
                <span>Lun – Sam : 7h00 – 19h00 • Chambéry (73)</span>
              </div>
              <a href="tel:0952863156" className="text-white hover:text-construction-orange font-bold transition-colors">
                Tél : 09 52 86 31 56
              </a>
            </div>
          </div>

          {/* Main Navigation Row */}
          <div className="flex items-center justify-between pt-1 sm:pt-2">
            
            {/* Signature Top-Left Orange Brand Block (Directly matches the AVELON orange box from reference) */}
            <a
              href="#"
              className="relative -mt-2 sm:-mt-3.5 -ml-4 sm:-ml-6 lg:-ml-8 px-6 sm:px-8 py-3.5 sm:py-5 bg-construction-orange text-white flex items-center gap-3 shadow-md hover:bg-construction-orangeDark transition-colors group z-20"
            >
              <div className="w-6 h-6 flex items-center justify-center font-black text-xl leading-none">
                ▲
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl sm:text-2xl font-black tracking-tight leading-none">
                  CLADIS
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/90 font-mono font-bold mt-0.5">
                  CONSTRUCTION
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Transparent/White High-Contrast) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-widest font-mono text-white/90 font-bold">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-construction-orange transition-colors duration-200 relative py-1 group flex items-center gap-1"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-construction-orange transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {onOpenCatalogue && (
                <button
                  onClick={onOpenCatalogue}
                  className="hidden xl:flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-mono text-white/90 hover:text-white hover:bg-white/10 transition-colors py-2 px-3 border border-white/25"
                  title="Télécharger le Catalogue 2026"
                >
                  <Download className="w-3.5 h-3.5 text-construction-orange" />
                  <span>Catalogue 2026</span>
                </button>
              )}

              <a
                href="#devis"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-mono font-bold text-white bg-construction-orange hover:bg-construction-orangeDark transition-all duration-200 shadow-md"
              >
                <span>Demander un devis</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white bg-black/60 border border-white/20 hover:bg-black transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="text-[10px] uppercase tracking-widest text-construction-orange font-mono font-bold">
                [MENU // CLADIS CONSTRUCTION]
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-white"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-sans font-bold tracking-tight text-white hover:text-construction-orange transition-colors py-2 border-b border-white/10 flex items-center justify-between"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-construction-orange">0{idx + 1}.</span>
                    <span>{link.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/50" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/15">
            <a
              href="tel:0952863156"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 border border-white/20 text-white text-xs font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-construction-orange" />
              <span>09 52 86 31 56 • CHAMBÉRY</span>
            </a>

            {onOpenCatalogue && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatalogue();
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/20 text-white text-xs font-mono uppercase tracking-wider hover:bg-white/15"
              >
                <Download className="w-3.5 h-3.5 text-construction-orange" />
                <span>Télécharger Catalogue 2026 (PDF)</span>
              </button>
            )}

            <a
              href="#devis"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 px-4 bg-construction-orange text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
