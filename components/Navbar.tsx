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
  FileText,
  Hammer,
} from "lucide-react";

interface NavbarProps {
  onOpenCatalogue?: () => void;
}

export default function Navbar({ onOpenCatalogue }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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

  // Robust dropdown open/close with graceful leave timeout to prevent flickering
  const handleDropdownEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  const closeDropdown = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(null);
  };

  const servicesList = [
    { title: "Bardage Métallique", desc: "Façades double peau, cassettes & panneaux sandwichs", href: "#metiers" },
    { title: "Couverture & Étanchéité", desc: "Bacs acier, membranes PVC & bitume élastomère", href: "#metiers" },
    { title: "Charpentes Métalliques", desc: "Structures porteuses calculées Eurocodes 3", href: "#metiers" },
    { title: "Bardage Spécifique", desc: "Façades architecturales géométriques sur-mesure", href: "#metiers" },
    { title: "Isolation Thermique RE2020", desc: "Continuité thermique et atténuation acoustique", href: "#metiers" },
    { title: "Étanchéité Végétalisée & Solaire", desc: "Solutions photovoltaïques certifiées sans percement", href: "#metiers" },
  ];

  const allianceList = [
    { title: "Bureau d'Études Cladis", desc: "Ingénierie intégrée, dimensionnement & plans d'exécution", href: "#alliance" },
    { title: "Building Services", desc: "Mise en œuvre sur chantier, encadrement & pose sécurisée", href: "#alliance" },
    { title: "Filiale d'Achat Directe", desc: "Approvisionnement direct auprès des usines sidérurgiques", href: "#alliance" },
  ];

  const projectsCategories = [
    { title: "Tous les Projets", desc: "Chantiers livrés en Rhône-Alpes & Savoie", href: "#realisations" },
    { title: "Bardage Industriel & Tertiaire", desc: "Façades contemporaines et isolation", href: "#realisations" },
    { title: "Toitures & Grandes Portées", desc: "Couvertures métalliques et étanchéité", href: "#realisations" },
    { title: "Charpentes Métalliques", desc: "Bâtiments industriels et plateformes logistiques", href: "#realisations" },
  ];

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

  return (
    <>
      {/* 1. Thin Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/10 pointer-events-none">
        <div
          className="h-full bg-construction-orange transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Main Header Bar (Full edge-to-edge docking matching reference design exactly) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/95 border-b border-white/15 shadow-2xl"
            : "bg-gradient-to-b from-black/90 via-black/50 to-transparent border-b border-white/10"
        }`}
      >
        <div className="w-full flex items-stretch">
          
          {/* A. Full-Height Signature Orange Brand Block (Docked flush against top-left edge) */}
          <a
            href="#"
            className="flex-shrink-0 bg-construction-orange hover:bg-construction-orangeDark text-white px-5 sm:px-7 lg:px-9 flex items-center justify-center gap-3 transition-colors select-none z-30 border-r border-construction-orangeDark/40"
            title="CLADIS CONSTRUCTION - Accueil"
          >
            {/* Geometric Delta Logo Icon */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-black text-2xl sm:text-3xl leading-none">
              ▲
            </div>
            
            {/* Brand Typography */}
            <div className="flex flex-col justify-center">
              <span className="font-sans text-xl sm:text-2xl font-black tracking-tight leading-none text-white">
                CLADIS
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-white/95 font-mono font-bold mt-0.5 leading-none">
                CONSTRUCTION
              </span>
            </div>
          </a>

          {/* B. Right Navigation Area (Two-tier architectural grid layout) */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            
            {/* TOP TIER: Utility Row (Social icons on left, Opening hours & direct phone on right) */}
            <div className="hidden lg:flex items-center justify-between text-[11px] font-mono text-white/75 h-10 px-6 lg:px-10 border-b border-white/10">
              
              {/* Left: Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-construction-orange transition-colors"
                  title="X (Twitter)"
                >
                  <span className="font-sans font-bold text-xs">𝕏</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-construction-orange transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-construction-orange transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-construction-orange transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Right: Working Hours & Direct Phone */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-white/85">
                  <Clock className="w-3 h-3 text-construction-orange" />
                  <span>Lun – Sam : 7h00 – 19h00</span>
                </div>
                <div className="h-3 w-[1px] bg-white/20" />
                <a
                  href="tel:0952863156"
                  className="text-white hover:text-construction-orange font-bold transition-colors"
                >
                  Tél : 09 52 86 31 56
                </a>
              </div>

            </div>

            {/* BOTTOM TIER: Main Navigation Menu + SEARCH */}
            <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 lg:px-10">
              
              {/* Desktop Nav Links (Directly replicates reference layout: uppercase with subtle dropdown carets) */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-9 text-xs font-mono font-bold uppercase tracking-wider text-white">
                
                {/* 1. ACCUEIL */}
                <a
                  href="#"
                  className="hover:text-construction-orange transition-colors py-2 relative group"
                >
                  <span>Accueil</span>
                  <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-construction-orange transition-all duration-200 group-hover:w-full" />
                </a>

                {/* 2. NOS MÉTIERS (Dropdown) */}
                <div
                  className="relative group py-2"
                  onMouseEnter={() => handleDropdownEnter("metiers")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href="#metiers"
                    className="flex items-center gap-1.5 hover:text-construction-orange transition-colors"
                  >
                    <span>Nos Métiers</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === "metiers" ? "rotate-180 text-construction-orange" : ""
                      }`}
                    />
                  </a>

                  {activeDropdown === "metiers" && (
                    <div
                      className="absolute top-full -left-2 pt-2 w-80 z-50 animate-fadeIn"
                      onMouseEnter={() => handleDropdownEnter("metiers")}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-[#0c0c0c]/98 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl">
                        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-construction-orange pb-2 mb-2 border-b border-white/10 font-bold">
                          <span>Lots Techniques Enveloppe</span>
                          <span className="text-white/40">6 Lots</span>
                        </div>
                        <div className="space-y-1">
                          {servicesList.map((srv, idx) => (
                            <a
                              key={srv.title}
                              href={srv.href}
                              onClick={closeDropdown}
                              className="group/item block p-2 hover:bg-white/10 transition-colors"
                            >
                              <div className="flex items-center justify-between text-xs font-bold text-white group-hover/item:text-construction-orange">
                                <span>{srv.title}</span>
                                <span className="font-mono text-[10px] text-white/40">0{idx + 1}</span>
                              </div>
                              <div className="text-[10px] text-white/60 font-mono font-normal mt-0.5 line-clamp-1">
                                {srv.desc}
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="pt-2 mt-2 border-t border-white/10 text-right">
                          <a
                            href="#metiers"
                            onClick={closeDropdown}
                            className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-construction-orange hover:text-white"
                          >
                            <span>Voir le détail technique</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. L'ALLIANCE (Dropdown) */}
                <div
                  className="relative group py-2"
                  onMouseEnter={() => handleDropdownEnter("alliance")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href="#alliance"
                    className="flex items-center gap-1.5 hover:text-construction-orange transition-colors"
                  >
                    <span>L'Alliance</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === "alliance" ? "rotate-180 text-construction-orange" : ""
                      }`}
                    />
                  </a>

                  {activeDropdown === "alliance" && (
                    <div
                      className="absolute top-full -left-2 pt-2 w-80 z-50 animate-fadeIn"
                      onMouseEnter={() => handleDropdownEnter("alliance")}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-[#0c0c0c]/98 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-construction-orange pb-2 mb-2 border-b border-white/10 font-bold">
                          <span>Synergie Opérationnelle</span>
                        </div>
                        <div className="space-y-1">
                          {allianceList.map((item, idx) => (
                            <a
                              key={item.title}
                              href={item.href}
                              onClick={closeDropdown}
                              className="group/item block p-2 hover:bg-white/10 transition-colors"
                            >
                              <div className="flex items-center justify-between text-xs font-bold text-white group-hover/item:text-construction-orange">
                                <span>{item.title}</span>
                                <span className="font-mono text-[10px] text-white/40">P{idx + 1}</span>
                              </div>
                              <div className="text-[10px] text-white/60 font-mono font-normal mt-0.5 line-clamp-1">
                                {item.desc}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. RÉALISATIONS (Dropdown) */}
                <div
                  className="relative group py-2"
                  onMouseEnter={() => handleDropdownEnter("realisations")}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href="#realisations"
                    className="flex items-center gap-1.5 hover:text-construction-orange transition-colors"
                  >
                    <span>Réalisations</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === "realisations" ? "rotate-180 text-construction-orange" : ""
                      }`}
                    />
                  </a>

                  {activeDropdown === "realisations" && (
                    <div
                      className="absolute top-full -left-2 pt-2 w-72 z-50 animate-fadeIn"
                      onMouseEnter={() => handleDropdownEnter("realisations")}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="bg-[#0c0c0c]/98 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-construction-orange pb-2 mb-2 border-b border-white/10 font-bold">
                          <span>Portefeuille Chantiers</span>
                        </div>
                        <div className="space-y-1">
                          {projectsCategories.map((cat) => (
                            <a
                              key={cat.title}
                              href={cat.href}
                              onClick={closeDropdown}
                              className="group/item block p-2 hover:bg-white/10 transition-colors"
                            >
                              <div className="text-xs font-bold text-white group-hover/item:text-construction-orange">
                                {cat.title}
                              </div>
                              <div className="text-[10px] text-white/60 font-mono font-normal mt-0.5 line-clamp-1">
                                {cat.desc}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. MÉTHODOLOGIE */}
                <a
                  href="#methodologie"
                  className="hover:text-construction-orange transition-colors py-2 relative group"
                >
                  <span>Méthodologie</span>
                  <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-construction-orange transition-all duration-200 group-hover:w-full" />
                </a>

                {/* 6. CONTACTS */}
                <a
                  href="#contact"
                  className="hover:text-construction-orange transition-colors py-2 relative group"
                >
                  <span>Contacts</span>
                  <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-construction-orange transition-all duration-200 group-hover:w-full" />
                </a>

              </nav>

              {/* Right Side: Replicates reference image "SEARCH Q" and clean actions */}
              <div className="flex items-center gap-4 ml-auto lg:ml-0">
                
                {/* SEARCH Button / Field (Matches "SEARCH Q" exactly) */}
                <div className="relative">
                  {searchOpen ? (
                    <div className="flex items-center gap-2 bg-black/95 border border-construction-orange px-3 py-1.5 animate-fadeIn shadow-2xl">
                      <Search className="w-3.5 h-3.5 text-construction-orange flex-shrink-0" />
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
                        className="bg-transparent text-xs text-white placeholder-white/50 outline-none w-48 sm:w-64 font-mono"
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
                      className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-construction-orange transition-colors py-1.5 px-2"
                      title="Rechercher sur le site"
                    >
                      <span className="hidden sm:inline">Search</span>
                      <Search className="w-4 h-4 text-white group-hover:text-construction-orange" />
                    </button>
                  )}

                  {/* Search Shortcuts Flyout */}
                  {searchOpen && (
                    <div className="absolute right-0 top-full mt-2 w-80 bg-[#0c0c0c]/98 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl z-50 animate-fadeIn">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-construction-orange pb-2 mb-2 border-b border-white/10 font-bold">
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
                              className="w-full text-left p-2 hover:bg-white/10 text-xs font-mono text-white/90 hover:text-construction-orange flex items-center justify-between transition-colors"
                            >
                              <span>{sc.label}</span>
                              <ArrowUpRight className="w-3 h-3 text-white/40" />
                            </button>
                          ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                  aria-label="Ouvrir le menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

              </div>

            </div>

          </div>

        </div>
      </header>

      {/* 3. Mobile Navigation Drawer (Architectural, full-screen, high-contrast) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl pt-20 px-6 pb-8 flex flex-col justify-between animate-fadeIn overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-construction-orange" />
                <span className="text-[11px] uppercase tracking-widest text-construction-orange font-mono font-bold">
                  MENU // CLADIS CONSTRUCTION
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-white hover:text-construction-orange bg-white/10"
                aria-label="Fermer le menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {[
                { label: "Accueil", href: "#" },
                { label: "Nos Métiers (Bardage, Toiture, Charpente)", href: "#metiers" },
                { label: "L'Alliance Building Services", href: "#alliance" },
                { label: "Nos Réalisations", href: "#realisations" },
                { label: "Méthodologie en 4 Étapes", href: "#methodologie" },
                { label: "Configurateur Industriel", href: "#configurateur" },
                { label: "Contacts & Siège Social", href: "#contact" },
              ].map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-sans font-bold tracking-tight text-white hover:text-construction-orange transition-colors py-2.5 border-b border-white/10 flex items-center justify-between"
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

          <div className="flex flex-col gap-3 pt-6 border-t border-white/15 mt-8">
            <a
              href="tel:0952863156"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 border border-white/20 text-white text-xs font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-construction-orange" />
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
                <Download className="w-3.5 h-3.5 text-construction-orange" />
                <span>Télécharger Catalogue 2026 (PDF)</span>
              </button>
            )}

            <a
              href="#devis"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 px-4 bg-construction-orange text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg"
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
