"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Sliders, X, Shield, Wrench, FileText } from "lucide-react";

interface ServiceData {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  advantages: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  norms: string[];
}

const services: ServiceData[] = [
  {
    id: "bardage",
    num: "01",
    title: "Bardage Métallique",
    subtitle: "Façades Architecturales & Isolation Durable",
    tagline: "Esthétisme rigoureux & protection thermique haute durabilité",
    image: "/images/service-bardage.jpg",
    shortDesc:
      "Pose de bardages extérieurs industriels et tertiaires respectant les normes les plus exigeantes. Systèmes simple peau, double peau avec isolant haute densité et panneaux sandwich.",
    fullDesc:
      "CLADIS CONSTRUCTION réalise la pose de bardages extérieurs en respectant les normes les plus élevées de qualité et de sécurité. Nos solutions de bardage s'adaptent à tous types de bâtiments, offrant à la fois protection mécanique, étanchéité à l'air et esthétisme architectural contemporain. Grâce à notre savoir-faire et à notre bureau d'études, nous vous garantissons une installation durable, résistante aux intempéries et au climat alpin, qui améliore l'efficacité énergétique globale et valorise le patrimoine de votre ouvrage.",
    advantages: [
      "Étanchéité parfaite à l'air et à l'eau testée selon les règles professionnelles",
      "Rupture totale des ponts thermiques grâce à des ossatures secondaires isolées",
      "Grande liberté architecturale : ondes sinusoïdales, profils trapézoïdaux, cassettes planes",
      "Résistance éprouvée aux ambiances industrielles et climats de montagne",
    ],
    specs: [
      { label: "Matériaux", value: "Acier galvanisé prélaqué, aluminium thermo-laqué, inox" },
      { label: "Épaisseurs isolant", value: "De 80 mm à 240 mm (laine de roche / PIR)" },
      { label: "Performance thermique", value: "R jusqu'à 8.5 m²·K/W" },
      { label: "Réaction au feu", value: "Classement A2-s1,d0 / Broof (t3)" },
    ],
    applications: [
      "Bâtiments industriels & usines de production",
      "Entrepôts logistiques & plateformes de distribution",
      "Immeubles de bureaux tertiaires & sièges sociaux",
      "Équipements publics à forte exigence esthétique",
    ],
    norms: ["DTU 32.1", "DTU 32.2", "Règles RAGE", "Eurocodes 3"],
  },
  {
    id: "couverture",
    num: "02",
    title: "Couverture & Étanchéité",
    subtitle: "Solutions de Toitures Industrielles",
    tagline: "Protection absolue contre les intempéries et confort thermique",
    image: "/images/service-couverture.jpg",
    shortDesc:
      "Travaux d'étanchéité bitumineuse multicouche, membranes synthétiques PVC/TPO, bacs acier isolés pour toitures terrasses inaccessibles ou techniques.",
    fullDesc:
      "CLADIS CONSTRUCTION vous accompagne dans vos projets de construction neuve ou de réhabilitation lourde, en vous proposant une large gamme de solutions pour la couverture et l'étanchéité. Que ce soit pour des bâtiments industriels, commerciaux ou logistiques, nos solutions sur mesure garantissent une protection durable et une finition soignée. Nous réalisons des travaux d'étanchéité bitumineuse ou PVC offrant une longévité maximale face aux ultraviolets, aux chocs thermiques et à la neige.",
    advantages: [
      "Systèmes bicouche élastomère SBS haute adhérence ou membranes synthétiques soudées",
      "Intégration d'exutoires de fumées (DENFC) et lanterneaux d'éclairage zénithal",
      "Dimensionnement rigoureux pour surcharges climatiques (neige & vent selon Eurocodes 1)",
      "Entretien simplifié et contrôles d'étanchéité par fumigène ou mise en eau",
    ],
    specs: [
      { label: "Types de membranes", value: "Bitume modifié SBS, PVC armé, membrane FPO/TPO" },
      { label: "Isolants associés", value: "Polyuréthane (PIR), laine de roche soudable" },
      { label: "Pente admissible", value: "De 1% à 15% et plus" },
      { label: "Garantie", value: "Garantie décennale avec contrôle Bureau Veritas / Socotec" },
    ],
    applications: [
      "Toitures terrasses d'usines et entrepôts",
      "Toitures métalliques industrielles en bacs secs ou isolés",
      "Réfection et rénovation sans arrêt d'activité industrielle",
      "Centres commerciaux et hypermarchés",
    ],
    norms: ["DTU 43.1", "DTU 43.3", "DTU 40.35", "Cahiers du CSTB"],
  },
  {
    id: "charpente",
    num: "03",
    title: "Charpentes Métalliques",
    subtitle: "Structures Porteuses Conformes aux Normes",
    tagline: "Robustesse structurelle calculée et mise en œuvre millimétrée",
    image: "/images/service-charpente.jpg",
    shortDesc:
      "Pose de structures métalliques mécano-soudées, ossatures primaires et secondaires, portiques haute portée conçus pour les grandes charges d'exploitation.",
    fullDesc:
      "CLADIS vous assure une pose de charpentes métalliques robustes et pérennes, adaptées aux contraintes géométriques et d'exploitation de chaque projet. Grâce à notre expertise et au bureau d'études, nous garantissons une installation d'une précision millimétrique, strictement conforme aux normes de sécurité et aux Eurocodes. Que ce soit pour des structures industrielles, commerciales ou tertiaires, nous sélectionnons des aciers de première qualité pour assurer une solidité sans compromis.",
    advantages: [
      "Calculs aux états limites (ELU / ELS) sous sollicitations climatiques sévères",
      "Assemblages boulonnés haute résistance (HR) pré-usinés en usine certifiée",
      "Optimisation du tonnage d'acier pour allier économie et résistance maximale",
      "Coordination directe avec les équipes de génie civil et de fondations",
    ],
    specs: [
      { label: "Nuances d'acier", value: "S275JR, S355J2 selon EN 10025" },
      { label: "Protection anticorrosion", value: "Galvanisation à chaud ISO 1461 ou peinture C3/C4" },
      { label: "Portées réalisables", value: "De 12 à plus de 45 mètres sans appuis intermédiaires" },
      { label: "Traçabilité", value: "Marquage CE classe d'exécution EXC2 / EXC3" },
    ],
    applications: [
      "Bâtiments à grande portée libre pour stockage logistique",
      "Hangars aéronautiques et ateliers de maintenance lourde",
      "Auvent de déchargement et quais PL",
      "Mezzanines industrielles à forte charge",
    ],
    norms: ["NF EN 1090-2", "Eurocodes 3 (Calcul des structures en acier)", "Eurocodes 1 (Actions neige/vent)"],
  },
  {
    id: "bardage-specifique",
    num: "04",
    title: "Bardage Spécifique & Façades Singulières",
    subtitle: "Trames Sur Mesure & Haute Technicité",
    tagline: "Réalisation d'enveloppes complexes à forte valeur architecturale",
    image: "/images/service-bardage-specifique.jpg",
    shortDesc:
      "Conception et mise en œuvre de façades à géométrie singulière, cassettes perforées, brise-soleil intégrés, bardage vertical à joint debout et habillages spécifiques.",
    fullDesc:
      "CLADIS CONSTRUCTION conçoit et met en œuvre des solutions de bardage spécifique adaptées aux exigences architecturales, acoustiques et fonctionnelles les plus pointues. Qu'il s'agisse de façades complexes, de formes trapézoïdales ou cintrées, de trames sur mesure ou de systèmes intégrant des contraintes acoustiques ou thermiques renforcées, nos équipes maîtrisent l'ensemble des procédés d'usinage et de fixation invisible. Nous accompagnons les architectes et maîtres d'ouvrage pour transformer les visions conceptuelles les plus audacieuses en réalisations pérennes.",
    advantages: [
      "Fixations invisibles et lignes de fuite épurées sans vis apparentes",
      "Intégration d'éclairages LED linéaires et de brise-soleil métalliques",
      "Études d'exécution 3D pour la gestion millimétrée des angles et jonctions",
      "Traitements de surface spécifiques (anodisation, teintes texturées, thermolaquage Qualicoat)",
    ],
    specs: [
      { label: "Typologies", value: "Cassettes aluminium pliées, panneaux composites Alucobond, joint debout zinc/acier" },
      { label: "Perforations", value: "Motifs personnalisés, perforations acoustiques et claustras" },
      { label: "Fixation", value: "Systèmes brevetés clipsables ou rivets teintés affleurants" },
      { label: "Acoustique", value: "Affaiblissement acoustique Rw jusqu'à 52 dB" },
    ],
    applications: [
      "Sièges d'entreprises & immeubles de prestige",
      "Équipements culturels, sportifs et gares",
      "Façades d'usines vitrines",
      "Surélévations et réhabilitations urbaines",
    ],
    norms: ["Avis Techniques CSTB", "Cahiers du CSTB 3747", "Règles professionnelles Façades"],
  },
  {
    id: "isolation",
    num: "05",
    title: "Isolation Thermique & Énergétique",
    subtitle: "Conformité RE2020 & Performance Globale",
    tagline: "Limitation radicale des déperditions et confort intérieur continu",
    image: "/images/service-isolation.jpg",
    shortDesc:
      "Complexes isolants haute densité, rupteurs de ponts thermiques, isolation continue des enveloppes industrielles pour atteindre les seuils énergétiques les plus stricts.",
    fullDesc:
      "CLADIS CONSTRUCTION intègre l'isolation thermique comme un élément central de la performance globale des bâtiments, en proposant des solutions adaptées aux exigences réglementaires RE2020, environnementales et fonctionnelles de chaque opération. Les systèmes mis en œuvre limitent les déperditions énergétiques hivernales comme les surchauffes estivales, assurant un confort optimal aux occupants. Grâce à une parfaite maîtrise des isolants biosourcés et minéraux, nous garantissons des ouvrages performants et pérennes.",
    advantages: [
      "Continuité parfaite de l'enveloppe isolante sans fuite thermique",
      "Réduction drastique des consommations de chauffage et climatisation",
      "Incombustibilité et sécurité incendie renforcée en toiture et façade",
      "Valorisation environnementale dans les démarches BREEAM, LEED ou HQE",
    ],
    specs: [
      { label: "Matériaux isolants", value: "Laine de roche haute densité, mousse rigide polyisocyanurate (PIR)" },
      { label: "Conductivité thermique", value: "Lambda λ de 0.022 à 0.035 W/(m·K)" },
      { label: "Perméabilité à l'air", value: "Mesure de perméabilité Q4Pa-surf < 0.6 m³/(h·m²)" },
      { label: "Acoustique", value: "Absorption acoustique intégrée (bac perforé absorbant)" },
    ],
    applications: [
      "Entrepôts frigorifiques à température dirigée",
      "Bâtiments tertiaires basse consommation (Passivhaus / BEPOS)",
      "Ateliers de fabrication de haute technologie",
      "Rénovation thermique des enveloppes vétustes",
    ],
    norms: ["Réglementation Environnementale RE2020", "Certifications ACERMI", "Règles Th-U CSTB"],
  },
  {
    id: "vegetalise-solaire",
    num: "06",
    title: "Étanchéité Végétalisée & Solaire",
    subtitle: "Toitures Vertes & Intégration Photovoltaïque",
    tagline: "Synergie entre production d'énergie propre et régulation thermique",
    image: "/images/service-vegetalise-solaire.jpg",
    shortDesc:
      "Complexes d'étanchéité anti-racines pour toitures végétalisées et supports d'intégration solaire photovoltaïque sans percement d'étanchéité.",
    fullDesc:
      "CLADIS CONSTRUCTION met en œuvre des solutions d'étanchéité végétalisée et photovoltaïque intégrées, conçues pour répondre aux défis climatiques et à la loi Climat & Résilience. Ces systèmes associent une membrane d'étanchéité renforcée à des substrats végétalisés légers ou des structures porteuses pour panneaux solaires sans perforation d'étanchéité. Nous assurons la pérennité mécanique de la toiture tout en maximisant la production d'énergie renouvelable de vos bâtiments.",
    advantages: [
      "Système de fixation photovoltaïque lesté ou thermosoudé sans perforation d'étanchéité",
      "Amélioration de l'inertie thermique et absorption des eaux pluviales (rétention d'eau)",
      "Protection mécanique de l'étanchéité doublant sa durée de vie",
      "Contribution active aux objectifs RSE et décarbonation de l'entreprise",
    ],
    specs: [
      { label: "Type de végétalisation", value: "Sedum extensif léger (poids 60 à 90 kg/m² saturé en eau)" },
      { label: "Intégration solaire", value: "Bacs thermo-soudés ou plots lestés certifiés avec Enquête Technique Nouvelle (ETN)" },
      { label: "Membranes requises", value: "Membrane traitée anti-racine certifiée FLL" },
      { label: "Compatibilité", value: "Bacs acier nervurés renforcés pour reprise de charges solaires" },
    ],
    applications: [
      "Toitures de nouveaux bâtiments soumis à l'obligation solaire (Loi Climat)",
      "Éco-quartiers et parcs d'activités tertiaires durables",
      "Bâtiments industriels visant l'autoconsommation électrique",
      "Ouvrages architecturaux soucieux de la biodiversité urbaine",
    ],
    norms: ["Règles professionnelles pour toitures végétalisées", "Guides CSTB toitures photovoltaïques", "ETN validées par bureaux de contrôle"],
  },
];

export default function CoreServices() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  return (
    <section id="metiers" className="py-28 bg-swiss-snow relative border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Swiss Structured Typography) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-swiss-ink" />
              <span className="text-[11px] uppercase tracking-widest font-mono text-swiss-muted font-medium">
                [02 // DOMAINES D'INTERVENTION & INGÉNIERIE]
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-swiss-ink tracking-tight">
              Nos Métiers & <span className="font-serif italic font-normal text-swiss-accent">Expertises</span>
            </h2>
          </div>

          <p className="text-sm text-swiss-muted max-w-md font-normal leading-relaxed">
            De la charpente primaire jusqu'au bardage de finition, nous maîtrisons l'ensemble des
            systèmes constructifs pour concevoir des enveloppes étanches, esthétiques et thermiquement efficientes.
          </p>
        </div>

        {/* 6 Core Services Modular Grid (Swiss Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group bg-white border border-black/10 hover:border-black/35 shadow-swiss-sm hover:shadow-swiss-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Crisp Swiss Framing */}
              <div className="relative h-60 w-full overflow-hidden bg-swiss-stone border-b border-black/8">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center filter contrast-[1.03] brightness-[0.98] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Service Number Tag (Swiss Minimalist Monospace) */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 bg-white border border-black/10 font-mono text-xs text-swiss-ink font-bold shadow-sm">
                    {service.num}
                  </span>
                </div>

                {/* View Details Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-swiss-ink text-white text-[10px] uppercase tracking-widest font-mono font-medium shadow-md">
                    <span>Fiche Technique</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-swiss-muted font-mono block mb-1 font-medium">
                    {service.subtitle}
                  </span>
                  
                  <h3 className="font-sans text-xl sm:text-2xl text-swiss-ink group-hover:text-neutral-800 transition-colors font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs text-swiss-muted font-normal mt-3 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Footer Micro-specs */}
                <div className="pt-6 mt-6 border-t border-black/8 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-swiss-muted font-mono text-[11px]">
                    <Sliders className="w-3.5 h-3.5 text-swiss-accent" />
                    <span>Normes CSTB & DTU</span>
                  </div>
                  
                  <div className="w-7 h-7 bg-swiss-subtle group-hover:bg-swiss-ink group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal (Swiss Light Aesthetic) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-black/20 shadow-2xl p-6 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 bg-swiss-subtle hover:bg-swiss-ink hover:text-white text-swiss-ink transition-colors"
              aria-label="Fermer la fiche technique"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-swiss-muted uppercase tracking-widest font-semibold">
                FICHE EXPERTISE {selectedService.num} // CLADIS CONSTRUCTION
              </span>
              <span className="w-8 h-[1px] bg-black/20" />
            </div>

            <h3 className="font-sans text-2xl sm:text-4xl text-swiss-ink font-bold tracking-tight mb-1">
              {selectedService.title}
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-swiss-muted mb-6">
              {selectedService.subtitle}
            </p>

            {/* Visual Banner */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden mb-8 border border-black/10 bg-swiss-stone">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md border border-black/10 text-xs text-swiss-ink shadow-sm">
                <span className="font-mono font-bold text-swiss-ink">Point Fort Constructeur : </span>
                <span className="text-swiss-muted">{selectedService.tagline}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-swiss-ink mb-3 flex items-center gap-2 font-bold">
                  <FileText className="w-4 h-4 text-swiss-accent" />
                  <span>Présentation & Maîtrise Technique</span>
                </h4>
                <p className="text-sm text-swiss-muted font-normal leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Grid 2 cols: Advantages & Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-black/8">
                
                {/* Advantages */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-swiss-ink mb-3 flex items-center gap-2 font-bold">
                    <Shield className="w-4 h-4 text-swiss-accent" />
                    <span>Avantages Clés</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedService.advantages.map((adv, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-swiss-muted leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-swiss-ink shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-swiss-ink mb-3 flex items-center gap-2 font-bold">
                    <Wrench className="w-4 h-4 text-swiss-accent" />
                    <span>Données & Spécifications</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedService.specs.map((spec, i) => (
                      <div key={i} className="p-3 bg-swiss-subtle border border-black/5 flex flex-col justify-between">
                        <span className="text-[10px] uppercase font-mono text-swiss-muted font-medium">{spec.label}</span>
                        <span className="text-xs font-bold text-swiss-ink mt-0.5">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Norms & Applications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-black/8">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-swiss-muted block mb-2 font-bold">
                    Applications Typiques
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.applications.map((app, i) => (
                      <span key={i} className="px-3 py-1 bg-swiss-subtle text-[11px] text-swiss-ink border border-black/5 font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-swiss-muted block mb-2 font-bold">
                    Normes & Conformité
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.norms.map((norm, i) => (
                      <span key={i} className="px-3 py-1 bg-white text-swiss-ink border border-black/15 text-[11px] font-mono font-semibold">
                        {norm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons inside modal */}
              <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-swiss-muted font-normal">
                  Vous avez un projet intégrant ce corps d'état ?
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#devis"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto text-center px-6 py-3 bg-swiss-ink text-white text-xs uppercase tracking-widest font-mono font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Chiffrer ce lot
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
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
