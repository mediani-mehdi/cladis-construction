"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogueModal from "@/components/CatalogueModal";
import {
  ShieldCheck,
  Award,
  Compass,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Hammer,
  Truck,
  FileCheck,
  ChevronRight,
  Sparkles,
  MapPin,
  Phone,
} from "lucide-react";

export default function EntreprisePage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  const pillars = [
    {
      num: "01",
      title: "CLADIS CONSTRUCTION",
      role: "Ingénierie, Études & Pilotage",
      image: "/images/alliance-bureau-etudes.jpg",
      desc: "Entité mère responsable de la conception technique, des calculs de structures, du chiffrage rigoureux et du pilotage global des opérations.",
      points: [
        "Bureau d'études 3D & calculs structurels intégrés",
        "Calepinage au millimètre et anticipation des interfaces",
        "Interlocuteur unique contractuel et garantie décennale",
        "Suivi budgétaire transparent sans surcoûts",
      ],
    },
    {
      num: "02",
      title: "BUILDING SERVICES",
      role: "Exécution sur Chantier & Levage",
      image: "/images/alliance-building-services.jpg",
      desc: "Partenaire opérationnel fort de 24 ans de présence sur les chantiers alpins. Building Services assure la pose de haute précision et la logistique de levage.",
      points: [
        "+24 ans d'expérience terrain en Rhône-Alpes",
        "Équipes qualifiées et habilitées (CACES, travail en hauteur)",
        "Parc d'engins et outillages de levage spécialisés",
        "Respect absolu des plannings et sécurité zéro accident",
      ],
    },
    {
      num: "03",
      title: "FILIALE D'ACHAT",
      role: "Approvisionnement Sécurisé & Compétitivité",
      image: "/images/alliance-filiale-achats.jpg",
      desc: "Centrale d'achat dédiée permettant de s'approvisionner directement auprès des plus grandes aciéries européennes pour garantir prix et disponibilité immédiate.",
      points: [
        "Accords-cadres directs avec les plus grands lamineurs d'acier",
        "Sécurisation des stocks et remparts contre la volatilité",
        "Contrôle qualité strict des matières premières (marquage CE)",
        "Tarifs négociés au plus juste répercutés aux clients",
      ],
    },
  ];

  const atouts = [
    {
      num: "01",
      title: "Bureau d'études intégré",
      desc: "Études d'exécution, plans techniques et coordination des interfaces sans intermédiaires.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Expertise technique",
      desc: "Plus de 24 ans d'expérience en enveloppe du bâtiment et charpente métallique.",
      icon: Award,
    },
    {
      num: "03",
      title: "Coordination complète",
      desc: "Pilotage des interfaces, respect rigoureux des plannings et réactivité continue.",
      icon: Users,
    },
    {
      num: "04",
      title: "Réseau de partenaires",
      desc: "Alliance Building Services et filiale d'achat pour sécuriser approvisionnements et pose.",
      icon: Truck,
    },
    {
      num: "05",
      title: "Réactivité chantier",
      desc: "Équipes internes qualifiées et encadrement expérimenté présent sur chaque phase.",
      icon: Clock,
    },
    {
      num: "06",
      title: "Solutions sur mesure",
      desc: "Adaptation pointue aux contraintes techniques, climatiques et architecturales les plus exigeantes.",
      icon: Sparkles,
    },
  ];

  const stats = [
    { value: "24+", label: "Années d'expérience", sub: "Fondé sur les chantiers alpins" },
    { value: "500+", label: "Projets livrés", sub: "Usines, entrepôts & tertiaires" },
    { value: "100%", label: "Accompagnement", sub: "De l'étude à la réception clé en main" },
    { value: "1", label: "Bureau d'études intégré", sub: "Modélisation 3D BIM & Eurocodes" },
  ];

  const engagements = [
    {
      title: "Garantie Décennale & Responsabilité Civile",
      desc: "Tous nos travaux font l'objet d'une assurance décennale nominative auprès des leaders français de l'assurance construction.",
    },
    {
      title: "Conformité Normative DTU & Eurocodes",
      desc: "Application stricte des DTU 32, 40, 43 et des Eurocodes 1, 3 et 8 garantissant la pérennité mécanique et climatique de vos ouvrages.",
    },
    {
      title: "Sécurité & Zéro Accident",
      desc: "Plans Particuliers de Sécurité (PPSPS), formation CACES continue de nos équipes et port obligatoire des EPI sur chaque intervention.",
    },
    {
      title: "Performance Thermique RE2020",
      desc: "Solutions d'enveloppe isolée à rupture totale de ponts thermiques, testées à l'infiltrométrie et validées par les bureaux de contrôle.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-black selection:text-white">
      {/* Global Navbar */}
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* 1. HERO HEADER */}
      <section className="relative pt-36 sm:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/about-building.jpg"
            alt="CLADIS CONSTRUCTION - Bâtiment industriel et enveloppe métallique"
            fill
            priority
            className="object-cover object-center filter brightness-[0.35] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.22),_transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-construction-blue" />
            <span className="text-white font-medium">L'Entreprise</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-construction-blue" />
              <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                Qui sommes-nous // CLADIS CONSTRUCTION
              </span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] uppercase">
              L'expertise industrielle <br />
              <span className="text-construction-blue">au service de vos projets.</span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed pt-2">
              Spécialiste reconnu de l'enveloppe du bâtiment industriel et de la construction métallique
              en région Auvergne-Rhône-Alpes. De l'étude préliminaire à la livraison définitive, nous réunissons
              expertise technique, rigueur organisationnelle et alliance stratégique.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/#devis"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-lg transition-colors"
              >
                <span>Demander une étude chiffrée</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setCatalogueOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors"
              >
                <span>Télécharger le catalogue 2026</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-neutral-50 border-b border-black/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
            {stats.map((item, idx) => (
              <div key={item.label} className="p-4 flex flex-col justify-between">
                <span className="font-mono text-[11px] text-construction-blue font-bold">0{idx + 1} //</span>
                <div className="font-sans text-4xl sm:text-5xl font-black text-neutral-900 mt-2">
                  {item.value}
                </div>
                <div className="font-sans font-bold text-sm text-neutral-900 mt-1 uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-xs text-neutral-600 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HISTOIRE & IDENTITÉ */}
      <section className="py-24 sm:py-28 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  Notre Histoire & Ancrage
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                24 ans d'ingénierie et de chantiers en Auvergne-Rhône-Alpes.
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Fondée sur une exigence de précision suisse et d'efficacité industrielle française, <strong>CLADIS CONSTRUCTION</strong> est née avec la vocation de concevoir et ériger des enveloppes de bâtiments capables de résister aux environnements les plus rigoureux.
              </p>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Implantée à <strong>Chambéry en Savoie (73)</strong>, notre entreprise intervient au cœur des bassins industriels et logistiques alpins (Savoie, Haute-Savoie, Isère, Rhône, Ain). Nous maîtrisons les spécificités topographiques, sismiques et climatiques de la région (charges de neige accidentelle selon Eurocodes 1, vents de couloir rhodanien, cycles gel/dégel).
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-construction-blue shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-800">
                    <strong>Une chaîne de valeur complète :</strong> Bureau d'études intégré, filiale d'achats aciers et pose spécialisée avec Building Services.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-construction-blue shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-800">
                    <strong>Un interlocuteur unique responsable :</strong> Aucun flou de sous-traitance, un seul chef de projet de l'esquisse à la réception sans réserve.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-construction-blue shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-800">
                    <strong>Respect strict des engagements budgétaires :</strong> Devis fermes, chiffrages détaillés et sécurisation des approvisionnements matière.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 shadow-swiss-lg bg-neutral-100 group">
                <Image
                  src="/images/construction-hero.jpg"
                  alt="Chantier de construction métallique CLADIS"
                  fill
                  className="object-cover object-center filter brightness-[0.96] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 border border-black/10 text-xs font-mono text-neutral-900 font-bold">
                  Siège & Direction : 74 rue de la Révériaz, Chambéry
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. LE BUREAU D'ÉTUDES INTÉGRÉ */}
      <section className="py-24 sm:py-28 bg-neutral-50 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 shadow-swiss-md bg-neutral-200">
                <Image
                  src="/images/alliance-bureau-etudes.jpg"
                  alt="Bureau d'études et plans d'exécution BIM 3D"
                  fill
                  className="object-cover object-center filter brightness-[0.98] contrast-[1.02]"
                />
                <div className="absolute top-4 left-4 bg-construction-blue text-white px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-wider">
                  Ingénierie & BIM 3D
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  Pôle Ingénierie
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
                Le Bureau d'Études Intégré : l'anticipation millimétrée de chaque interface.
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Contrairement aux entreprises de pose traditionnelles qui externalisent leurs études, <strong>CLADIS CONSTRUCTION dispose de son propre pôle d'ingénierie intégré</strong>. Cette proximité immédiate entre concepteurs et poseurs supprime les erreurs d'interprétation et réduit considérablement les temps d'exécution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-5 border border-neutral-200 shadow-sm">
                  <div className="font-mono text-xs font-bold text-construction-blue uppercase tracking-wider mb-1">
                    Modélisation 3D BIM & Tekla
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed">
                    Maquettes numériques complètes permettant de détecter les clashs avant usinage usine et de calepiner chaque panneau au millimètre.
                  </div>
                </div>

                <div className="bg-white p-5 border border-neutral-200 shadow-sm">
                  <div className="font-mono text-xs font-bold text-construction-blue uppercase tracking-wider mb-1">
                    Calculs de Charges Eurocodes
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed">
                    Notes de calculs certifiées sous sollicitations de vent, neige alpine et séismes pour dimensionner pannes, lisses et ancrages.
                  </div>
                </div>

                <div className="bg-white p-5 border border-neutral-200 shadow-sm">
                  <div className="font-mono text-xs font-bold text-construction-blue uppercase tracking-wider mb-1">
                    Carnet de Détails d'Étanchéité
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed">
                    Dessin précis des acrotères, noues, faîtages, bavettes et liaisons avec les menuiseries pour une étanchéité pérenne.
                  </div>
                </div>

                <div className="bg-white p-5 border border-neutral-200 shadow-sm">
                  <div className="font-mono text-xs font-bold text-construction-blue uppercase tracking-wider mb-1">
                    Validation Bureaux de Contrôle
                  </div>
                  <div className="text-xs text-neutral-600 leading-relaxed">
                    Soumission et validation rigoureuse des dossiers d'exécution auprès des organismes certifiés (Socotec, Bureau Veritas, Apave).
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. L'ALLIANCE STRATÉGIQUE (3 PILIERS) */}
      <section className="py-24 sm:py-28 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-construction-blue" />
              <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                Synergie Industrielle
              </span>
            </div>
            
            <h2 className="font-sans text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
              Notre Alliance Stratégique
            </h2>
            
            <p className="text-sm text-neutral-600">
              Une structure pensée pour durer et performer. L'alliance de trois forces pour couvrir l'ensemble de la chaîne de valeur du bâtiment industriel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-neutral-200 hover:border-construction-blue transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-100 border-b border-neutral-200">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-900 border border-black/10">
                      {pillar.role}
                    </div>
                    <div className="absolute top-4 right-4 bg-construction-blue text-white px-2 py-0.5 font-mono text-xs font-bold">
                      {pillar.num}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="font-sans text-xl font-bold text-neutral-900 tracking-tight group-hover:text-construction-blue transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {pillar.desc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-neutral-100">
                      {pillar.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-neutral-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-construction-blue shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="w-0 group-hover:w-full h-[2px] bg-construction-blue transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. NOS ATOUTS (6 PILIERS OFFICIELS) */}
      <section className="py-24 sm:py-28 bg-neutral-50 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-construction-blue" />
              <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                Nos atouts
              </span>
            </div>
            
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Une organisation pensée pour les projets industriels exigeants.
            </h2>
            
            <p className="text-sm text-neutral-600">
              Des méthodes éprouvées, un encadrement réactif et des solutions sur mesure adaptées aux contraintes des maîtres d'ouvrage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atouts.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-7 border border-neutral-200 hover:border-construction-blue transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-construction-blue">
                        {item.num} //
                      </span>
                      <div className="w-10 h-10 bg-neutral-100 group-hover:bg-blue-50 border border-neutral-200 group-hover:border-construction-blue flex items-center justify-center transition-colors">
                        <IconComp className="w-4 h-4 text-neutral-800 group-hover:text-construction-blue transition-colors" />
                      </div>
                    </div>

                    <h3 className="font-sans text-base font-bold text-neutral-900 tracking-tight group-hover:text-construction-blue transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="w-0 group-hover:w-full h-[2px] bg-construction-blue transition-all duration-300 mt-6" />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. GARANTIES, NORMES & SÉCURITÉ */}
      <section className="py-24 sm:py-28 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  Sécurité & Qualité
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
                Engagements contractuels et conformité sans concession.
              </h2>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Chaque bâtiment que nous érigeons engage notre responsabilité sur le long terme. Nous appliquons des protocoles stricts de contrôle qualité pour garantir que votre ouvrage reste sain, étanche et performant pendant plusieurs décennies.
              </p>

              <div className="pt-4 border-t border-neutral-200">
                <div className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Bureaux de Contrôle Partenaires :
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-600">
                  <span className="px-3 py-1 bg-neutral-100 border border-neutral-200">Socotec</span>
                  <span className="px-3 py-1 bg-neutral-100 border border-neutral-200">Bureau Veritas</span>
                  <span className="px-3 py-1 bg-neutral-100 border border-neutral-200">Apave</span>
                  <span className="px-3 py-1 bg-neutral-100 border border-neutral-200">Dekra</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {engagements.map((item) => (
                <div key={item.title} className="bg-neutral-50 p-6 border border-neutral-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-construction-blue" />
                    <h3 className="font-sans font-bold text-sm text-neutral-900 tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero-building.jpg"
            alt="Façade industrielle CLADIS"
            fill
            className="object-cover object-center filter brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
              Parlons de votre prochain projet industriel
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Vous avez un projet de construction ou de rénovation d'enveloppe ?
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Transmettez-nous vos plans ou votre cahier des charges. Notre bureau d'études analyse votre besoin et vous adresse une étude technique chiffrée sous 48h.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <Link
              href="/#devis"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-xl transition-colors"
            >
              <span>Demander un devis gratuit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0952863156"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors"
            >
              <Phone className="w-4 h-4 text-construction-blue" />
              <span>09 52 86 31 56</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />

      {/* Catalogue Modal */}
      <CatalogueModal
        isOpen={catalogueOpen}
        onClose={() => setCatalogueOpen(false)}
      />
    </main>
  );
}

