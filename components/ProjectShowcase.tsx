"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Maximize2, ArrowUpRight, X, Calendar, Layers, Ruler } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "bardage" | "couverture" | "charpente" | "complexe";
  location: string;
  surface: string;
  year: string;
  image: string;
  clientType: string;
  description: string;
  technicalDetails: { label: string; value: string }[];
}

const projects: ProjectItem[] = [
  {
    id: "hub-chambery",
    title: "Centre Logistique & Hub Tertiaire des Alpes",
    category: "complexe",
    location: "Chambéry, Savoie (73)",
    surface: "6 400 m²",
    year: "2025",
    image: "/images/hero-building.jpg",
    clientType: "Plateforme Industrielle & Bureaux",
    description:
      "Conception et mise en œuvre complète de l'enveloppe du bâtiment : charpente métallique haute portée, façades en bardage double peau avec cassettes perforées rétroéclairées et toiture étanchée en membrane bicouche élastomère avec isolation thermique haute performance RE2020.",
    technicalDetails: [
      { label: "Système Façade", value: "Bardage métallique cassette aluminium laqué 20/10ème" },
      { label: "Isolation", value: "Laine de roche 160 mm - R = 4.85 m²·K/W" },
      { label: "Étanchéité Toiture", value: "Membrane SBS autoprotégée avec classement Broof (t3)" },
      { label: "Bureau d'études", value: "Modélisation BIM 3D intégrale Cladis Construction" },
    ],
  },
  {
    id: "usine-bardage-haute-savoie",
    title: "Unité de Production & Métallurgie de Précision",
    category: "bardage",
    location: "Annecy, Haute-Savoie (74)",
    surface: "4 200 m²",
    year: "2024",
    image: "/images/service-bardage.jpg",
    clientType: "Bâtiment Industriel de Pointe",
    description:
      "Rénovation complète et extension de façade en bardage métallique nervuré vertical et horizontal. Traitement acoustique intégré pour l'absorption des bruits de machines et respect scrupuleux de l'intégration dans l'écrin paysager alpin.",
    technicalDetails: [
      { label: "Système Façade", value: "Panneaux sandwichs à âme laine de roche 120 mm" },
      { label: "Affaiblissement", value: "Rw+Ctr = 34 dB" },
      { label: "Teinte & Finition", value: "Gris Anthracite RAL 7016 mat texturé Qualicoat" },
      { label: "Pose", value: "Équipes Building Services (CACES & Nacelles grand déport)" },
    ],
  },
  {
    id: "toiture-grenoble",
    title: "Complexe de Distribution & Entrepôt Froid",
    category: "couverture",
    location: "Grenoble, Isère (38)",
    surface: "8 500 m²",
    year: "2024",
    image: "/images/service-couverture.jpg",
    clientType: "Logistique & Froid Positif",
    description:
      "Travaux d'étanchéité bitumineuse et pose de complexe isolant polyuréthane haute densité. Préparation structurelle pour l'intégration de centrales photovoltaïques sur bacs acier renforcés sans pénétration de la membrane.",
    technicalDetails: [
      { label: "Support", value: "Bacs acier nervurés grande portée 1.00 mm" },
      { label: "Isolant", value: "Mousse PIR 140 mm certifiée ACERMI" },
      { label: "Étanchéité", value: "Bicouche élastomère soudable sous ETN solaire" },
      { label: "Sécurité", value: "Lignes de vie inox et garde-corps autoportants permanents" },
    ],
  },
  {
    id: "charpente-porteuse-vallee",
    title: "Hangar Aéronautique & Maintenance Lourde",
    category: "charpente",
    location: "Bourget-du-Lac, Savoie (73)",
    surface: "3 800 m²",
    year: "2023",
    image: "/images/service-charpente.jpg",
    clientType: "Structure Métallique Grande Portée",
    description:
      "Fabrication et montage d'une charpente métallique en profilés PRS haute résistance (S355J2) avec portée libre de 38 mètres sans poteau intermédiaire. Intégration de chemins de roulement pour ponts roulants de 10 tonnes.",
    technicalDetails: [
      { label: "Acier employé", value: "Acier normalisé S355 avec traçabilité usine EXC3" },
      { label: "Portée libre", value: "38 mètres d'un seul tenant" },
      { label: "Protection", value: "Peinture époxy-polyuréthane C3 hautement résistante" },
      { label: "Boulonnerie", value: "Boulons HR 10.9 précontraints contrôlés par clé dynamométrique" },
    ],
  },
  {
    id: "siege-architectural-lyon",
    title: "Siège Régional & Espace Showroom Tertiaire",
    category: "bardage",
    location: "Lyon Est, Rhône (69)",
    surface: "2 900 m²",
    year: "2025",
    image: "/images/service-bardage-specifique.jpg",
    clientType: "Siège Corporatif Haut de Gamme",
    description:
      "Façade géométrique à cassettes d'aluminium thermolaqué avec découpes laser sur mesure. Système de fixations 100% invisibles garantissant un rendu architectural monolithique et épuré.",
    technicalDetails: [
      { label: "Matériau Façade", value: "Cassettes aluminium composite 4 mm pré-anodisées" },
      { label: "Système de pose", value: "Pattes équerres à rupture de pont thermique Isofix" },
      { label: "Étanchéité à l'air", value: "Membrane pare-pluie respirante haute résistance UV" },
      { label: "Validation", value: "Essai AEV validé en laboratoire certifié CSTB" },
    ],
  },
  {
    id: "toiture-solaire-vegetalisee",
    title: "Éco-Hub Industriel & Toiture Biosourcée",
    category: "couverture",
    location: "Albertville, Savoie (73)",
    surface: "5 100 m²",
    year: "2024",
    image: "/images/service-vegetalise-solaire.jpg",
    clientType: "Bâtiment Éco-conçu & Bas Carbone",
    description:
      "Association innovante d'une toiture végétalisée en sedum sur 2 000 m² et d'une centrale photovoltaïque en toiture de 3 100 m². Régulation hygrométrique naturelle et production annuelle d'énergie verte réinjectée dans le réseau.",
    technicalDetails: [
      { label: "Complexe Végétal", value: "Tapis de sedum précultivé 7 variétés régionales" },
      { label: "Étanchéité", value: "Membrane anti-racine traitée selon directives FLL" },
      { label: "Puissance Solaire", value: "540 kWc intégrés sur bacs sans percement" },
      { label: "Rétention Eau", value: "Capacité de stockage pluvial de 35 L/m²" },
    ],
  },
];

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="realisations" className="py-28 bg-white relative border-t border-black/8 bg-swiss-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-swiss-ink" />
              <span className="text-[11px] uppercase tracking-widest font-mono text-swiss-muted font-medium">
                [05 // PORTFOLIO SÉLECTIONNÉ • RHÔNE-ALPES]
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-swiss-ink tracking-tight">
              Nos Réalisations d'<span className="font-serif italic font-normal text-swiss-accent">Envergure</span>
            </h2>
          </div>

          {/* Category Filter Pills (Swiss Minimalist Monospace Tabs) */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "Tous les Projets" },
              { id: "bardage", label: "Bardage Métallique" },
              { id: "couverture", label: "Couverture & Étanchéité" },
              { id: "charpente", label: "Charpente Métallique" },
              { id: "complexe", label: "Enveloppes Clé en Main" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-mono font-medium transition-all duration-200 border ${
                  filter === tab.id
                    ? "bg-swiss-ink text-white border-swiss-ink shadow-sm"
                    : "bg-white border-black/10 text-swiss-muted hover:text-swiss-ink hover:border-black/25"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (Swiss White Framing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white border border-black/10 hover:border-black/35 shadow-swiss-sm hover:shadow-swiss-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Thumbnail */}
              <div className="relative h-64 w-full overflow-hidden bg-swiss-stone border-b border-black/8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Location Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-black/10 text-[10px] font-mono text-swiss-ink font-medium shadow-sm">
                    <MapPin className="w-3 h-3 text-swiss-accent" />
                    <span>{project.location}</span>
                  </span>
                </div>

                {/* Surface Tag */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-swiss-ink text-white text-[10px] font-mono font-medium shadow-sm">
                    <Ruler className="w-3 h-3" />
                    <span>{project.surface}</span>
                  </span>
                </div>

                {/* Zoom Icon on Hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="w-8 h-8 bg-swiss-ink text-white flex items-center justify-center shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-swiss-muted mb-1.5 font-medium">
                    <span>{project.clientType}</span>
                    <span className="text-swiss-ink font-bold">{project.year}</span>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl text-swiss-ink group-hover:text-neutral-800 transition-colors font-bold leading-snug tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs text-swiss-muted font-normal mt-2.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-black/8 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-swiss-ink font-semibold group-hover:underline">
                    Fiche technique détaillée
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-swiss-muted group-hover:text-swiss-ink transition-colors" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Full Detail Modal (Swiss Light Theme) */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-black/20 shadow-2xl p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 bg-swiss-subtle hover:bg-swiss-ink hover:text-white text-swiss-ink transition-colors"
              aria-label="Fermer le projet"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Heading */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-swiss-muted uppercase tracking-widest font-bold">
                RÉALISATION // {activeProject.location}
              </span>
              <span className="w-8 h-[1px] bg-black/20" />
            </div>

            <h3 className="font-sans text-2xl sm:text-4xl text-swiss-ink font-extrabold tracking-tight mb-1">
              {activeProject.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-swiss-muted mb-6">
              <span className="flex items-center gap-1.5 text-swiss-ink font-medium">
                <MapPin className="w-3.5 h-3.5 text-swiss-accent" />
                {activeProject.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-swiss-ink font-medium">
                <Ruler className="w-3.5 h-3.5 text-swiss-accent" />
                {activeProject.surface}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-swiss-ink font-medium">
                <Calendar className="w-3.5 h-3.5 text-swiss-accent" />
                Livraison {activeProject.year}
              </span>
            </div>

            {/* Large Image Showcase */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden mb-8 border border-black/10 bg-swiss-stone">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-swiss-ink mb-2 font-bold">
                  Descriptif du Projet
                </h4>
                <p className="text-sm text-swiss-muted font-normal leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-swiss-ink mb-3 flex items-center gap-2 font-bold">
                  <Layers className="w-4 h-4 text-swiss-accent" />
                  <span>Données d'Exécution & Systèmes Installés</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProject.technicalDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-swiss-subtle border border-black/5 flex flex-col justify-between"
                    >
                      <span className="text-[10px] uppercase font-mono text-swiss-muted font-medium">
                        {detail.label}
                      </span>
                      <span className="text-xs font-bold text-swiss-ink mt-1">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Footer */}
              <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-swiss-muted font-normal">
                  Vous souhaitez réaliser un ouvrage similaire ?
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#devis"
                    onClick={() => setActiveProject(null)}
                    className="w-full sm:w-auto text-center px-6 py-3 bg-swiss-ink text-white text-xs uppercase tracking-widest font-mono font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Demander une étude
                  </a>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="w-full sm:w-auto px-6 py-3 border border-black/20 text-xs uppercase tracking-widest font-mono text-swiss-ink hover:bg-swiss-subtle transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
