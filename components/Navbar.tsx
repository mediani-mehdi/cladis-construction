"use client";

import { useState, useEffect, useRef } from "react";
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
  ChevronDown,
  Building2,
  Layers,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenCatalogue?: () => void;
}

export default function Navbar({ onOpenCatalogue }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const servicesList = [
    { title: "Bardage Métallique", desc: "Façades double peau & cassettes", href: "#metiers" },
    { title: "Couverture & Étanchéité", desc: "Membranes bitume, PVC & isolation", href: "#metiers" },
    { title: "Charpentes Métalliques", desc: "Structures porteuses Eurocodes 3", href: "#metiers" },
    { title: "Bardage Spécifique", desc: "Façades géométriques & cassettes sur-mesure", href: "#metiers" },
    { title: "Isolation Thermique RE2020", desc: "Performance thermo-acoustique continue", href: "#metiers" },
    { title: "Étanchéité Végétalisée & Solaire", desc: "Intégration photovoltaïque sans percement", href: "#metiers" },
  ];

  const projectsCategories = [
    { title: "Tous les Projets", href: "#realisations" },
    { title: "Bardage Architectural", href: "#realisations" },
    { title: "Couverture Industrielle", href: "#realisations" },
    { title: "Charpentes Haute Portée", href: "#realisations" },
    { title: "Enveloppes Clé en Main", href: "#realisations" },
  ];

  return (
    <>
      {/* 1. Thin Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/10 pointer-events-none">
        <div
          className="h-full bg-construction-orange transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Main Header Bar (Directly replicates the reference image 2-tier layout) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/90 border-b border-white/15 shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-white/10"
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-stretch">
          
          {/* A. Full-Height Signature Orange Brand Block (Matches ▲ AVELON block exactly) */}
          <a
            href="#"
            className="flex-shrink-0 bg-construction-orange hover:bg-construction-orangeDark text-white px-6 sm:px-9 py-3 sm:py-4 flex items-center gap-3 transition-colors select-none z-30"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-black text-2xl sm:text-3xl leading-none">
              ▲
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-sans text-xl sm:text-2xl font-black tracking-tight leading-none">
                CLADIS
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/95 font-mono font-bold mt-0.5">
                CONSTRUCTION
              </span>
            </div>
          </a>

          {/* B. Right Navigation Area (Two-tier grid structure) */}
          <div className="flex-1 flex flex-col justify-between pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8">
            
            {/* Top Tier (Utility Row: Social on left, Hours & Direct Contact on right) */}
            <div className="hidden lg:flex items-center justify-between text-[11px] font-mono text-white/70 py-2 border-b border-white/10">
              {/* Social media icons */}
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-construction-orange transition-colors" title="LinkedIn">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-construction-orange transition-colors" title="Facebook">
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-construction-orange transition-colors" title="Instagram">
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Working hours & Direct phone */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-white/80">
                  <Clock className="w-3 h-3 text-construction-orange" />
                  <span>Lun – Sam : 7h00 – 19h00</span>
                </div>
                <div className="h-3 w-[1px] bg-white/20" />
                <a href="tel:0952863156" className="text-white hover:text-construction-orange font-bold transition-colors">
                  Tél : 09 52 86 31 56
                </a>
              </div>
            </div>

            {/* Bottom Tier (Main Nav Links + Search / CTAs) */}
            <div className="flex items-center justify-between py-2.5 sm:py-3">
              
              {/* Desktop Nav Links with Dropdowns (Directly replicates reference typography & carets) */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono font-bold uppercase tracking-wider text-white">
                
                {/* 1. Accueil */}
                <a href="#" className="hover:text-construction-orange transition-colors py-1 relative group">
                  <span>Accueil</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-construction-orange transition-all duration-200 group-hover:w-full" />
                </a>

                {/* 2. Nos Métiers with Interactive Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <a
                    href="#metiers"
                    className="flex items-center gap-1 hover:text-construction-orange transition-colors py-1"
                  >
                    <span>Nos Métiers</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180 text-construction-orange" : ""}`} />
                  </a>

                  {servicesDropdown && (
                    <div className="absolute top-full -left-4 w-72 bg-black/95 backdrop-blur-xl border border-white/15 p-3 shadow-2xl animate-fadeIn z-50">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-construction-orange pb-2 mb-2 border-b border-white/10 font-bold">
                        Lots Techniques
                      </div>
                      <div className="space-y-1">
                        {servicesList.map((srv) => (
                          <a
                            key={srv.title}
                            href={srv.href}
                            onClick={() => setServicesDropdown(false)}
                            className="block p-2 hover:bg-white/10 transition-colors"
                          >
                            <div className="text-xs font-bold text-white group-hover:text-construction-orange">
                              {srv.title}
                            </div>
                            <div className="text-[10px] text-white/60 font-mono font-normal">
                              {srv.desc}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. L'Alliance */}
                <a href="#alliance" className="hover:text-construction-orange transition-colors py-1 relative group">
                  <span>L'Alliance</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-construction-orange transition-all duration-200 group-hover:w-full" />
                </a>

                {/* 4. Réalisations with Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setProjectsDropdown(true)}
                  onMouseLeave={() => setProjectsDropdown(false)}
                >
                  <a
                    href="#realisations"
                    className="flex items-center gap-1 hover:text-construction-orange transition-colors py-1"
                  >
                    <span>Réalisations</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${projectsDropdown ? "rotate-180 text-construction-orange" : ""}`} />
                  </a>

                  {projectsDropdown && (
                    <div className="absolute top-full -left-4 w-60 bg-black/95 backdrop-blur-xl border border-white/15 p-3 shadow-2xl animate-fadeIn z-50">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-construction-orange pb-2 mb-2 border-b border-white/10 font-bold">
                        Catégories Chantiers
                      </div>
                      <div className="space-y-1">
                        {projectsCategories.map((cat) => (
                          <a
                            key={cat.title}
                            href={cat.href}
                            onClick={() => setProjectsDropdown(false)}
                            className="block p-2 hover:bg-white/10 text-xs font-bold text-white hover:text-construction-orange transition-colors"
                          >
                            {cat.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. Méthodologie */}
                <a href="#methodologie" className="hover:text-construction-orange transition-colors py-1 relative group">
                  <span>Méthodologie</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-construction-orange transition-all duration-200 group-hover:w-full" />
                </a>

                {/* 6. Contact */}
                <a href="#contact" className="hover:text-construction-orange transition-colors py-1 relative group">
                  <span>Contacts</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-construction-orange transition-all duration-200 group-hover:w-full" />
                </a>
              </nav>

              {/* Right Side Action Tools (Matches SEARCH 🔍 from reference) */}
              <div className="flex items-center gap-4 ml-auto lg:ml-0">
                
                {/* Search Toggle (Exactly as in reference image "SEARCH 🔍") */}
                <div className="relative">
                  {searchOpen ? (
                    <div className="flex items-center gap-2 bg-black/90 border border-construction-orange px-3 py-1.5 animate-fadeIn">
                      <Search className="w-3.5 h-3.5 text-construction-orange" />
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Rechercher (ex: bardage, devis)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const target = document.querySelector("#metiers");
                            if (target) target.scrollIntoView({ behavior: "smooth" });
                            setSearchOpen(false);
                          }
                        }}
                        className="bg-transparent text-xs text-white placeholder-white/50 outline-none w-48 font-mono"
                      />
                      <button
                        onClick={() => setSearchOpen(false)}
                        className="text-white/60 hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSearchOpen(true)}
                      className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-construction-orange transition-colors py-1"
                    >
                      <span>Search</span>
                      <Search className="w-3.5 h-3.5 text-white group-hover:text-construction-orange" />
                    </button>
                  )}
                </div>

                {/* Catalogue Download Button */}
                {onOpenCatalogue && (
                  <button
                    onClick={onOpenCatalogue}
                    className="hidden xl:flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-mono text-white/90 hover:text-white hover:bg-white/10 transition-colors py-2 px-3 border border-white/25"
                    title="Télécharger le Catalogue 2026"
                  >
                    <Download className="w-3.5 h-3.5 text-construction-orange" />
                    <span>Catalogue</span>
                  </button>
                )}

                {/* Outlined CTA Button */}
                <a
                  href="#devis"
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-mono font-bold text-white bg-construction-orange hover:bg-construction-orangeDark transition-all duration-200 shadow-md"
                >
                  <span>Demander un devis</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-white bg-black/60 border border-white/20 hover:bg-black transition-colors"
                  aria-label="Toggle menu"
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
              {[
                { label: "Accueil", href: "#" },
                { label: "Nos Métiers (Bardage, Toiture, Charpente)", href: "#metiers" },
                { label: "L'Alliance Building Services", href: "#alliance" },
                { label: "Nos Réalisations", href: "#realisations" },
                { label: "Méthodologie en 4 Étapes", href: "#methodologie" },
                { label: "Configurateur Industriel", href: "#configurateur" },
                { label: "Contact & Devis", href: "#contact" },
              ].map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-sans font-bold tracking-tight text-white hover:text-construction-orange transition-colors py-2 border-b border-white/10 flex items-center justify-between"
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
