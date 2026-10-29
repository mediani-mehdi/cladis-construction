"use client";

import { useState } from "react";
import { Search, PenTool, Hammer, CheckCheck, Clock, FileCheck, ChevronRight } from "lucide-react";

interface StepData {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  duration: string;
  icon: any;
}

const steps: StepData[] = [
  {
    num: "01",
    title: "Étude & Diagnostic",
    subtitle: "Analyse technique et faisabilité",
    description:
      "Chaque opération débute par une analyse exhaustive des contraintes du site (climatiques selon Eurocodes 1, sol, charges dynamiques, surcharges de neige en zone alpine). Notre bureau d'études étudie la faisabilité constructive et préconise les systèmes d'enveloppe les plus efficients.",
    deliverables: [
      "Note de calculs préliminaire",
      "Diagnostic des contraintes de site (vent, neige, sismique)",
      "Préconisation des complexes isolants & membranes",
      "Évaluation budgétaire optimisée",
    ],
    tools: ["Tekla Structures", "Robot Structural Analysis", "Eurocodes 1 & 3"],
    duration: "1 à 2 semaines",
    icon: Search,
  },
  {
    num: "02",
    title: "Conception & Modélisation",
    subtitle: "Plans d'exécution et calepinage au millimètre",
    description:
      "Modélisation BIM 3D détaillée de la charpente, des ossatures secondaires et calepinage des façades. Tous les détails d'interfaces (noues, faîtages, acrotères, jonctions baies) sont rigoureusement validés avant fabrication et commande directe usine.",
    deliverables: [
      "Plans d'exécution d'atelier et de pose (PEA / PEP)",
      "Calepinage précis des panneaux et cassettes",
      "Carnet de détails d'étanchéité et finitions",
      "Validation par le Bureau de Contrôle (Socotec, Veritas)",
    ],
    tools: ["AutoCAD Architecture", "Revit BIM", "SolidWorks"],
    duration: "2 à 4 semaines",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Réalisation & Pilotage",
    subtitle: "Pilotage chantier et respect strict des délais",
    description:
      "Prise en charge de la mise en œuvre sur site en synergie avec notre partenaire Building Services. Nos chefs de chantier supervisent la sécurité, le levage, la précision de montage et la coordination avec les autres corps d'état du gros œuvre et du second œuvre.",
    deliverables: [
      "Planning d'intervention phasé et logistique de levage",
      "Rapports de contrôles intermédiaires hebdomadaires",
      "Respect scrupuleux du plan de sécurité (PPSPS)",
      "Contrôle continu de l'alignement et des fixations",
    ],
    tools: ["Nacelles & grues spécialisées", "Lasers d'alignement géodésique", "GMAO Chantier"],
    duration: "Selon calendrier opérationnel",
    icon: Hammer,
  },
  {
    num: "04",
    title: "Livraison & Réception",
    subtitle: "Réception sans réserve et contrôle post-livraison",
    description:
      "Vérification minutieuse de l'étanchéité à l'air et à l'eau de l'ouvrage. Remise du dossier des ouvrages exécutés (DOE) complet, attestations de conformité et activation des garanties légales décennales avec suivi post-livraison réactif.",
    deliverables: [
      "Procès-verbal de réception des travaux sans réserve",
      "Dossier des Ouvrages Exécutés (DOE) & DIUO",
      "Attestations de garantie décennale et RC Pro",
      "Guide d'entretien pérenne de l'enveloppe",
    ],
    tools: ["Tests d'étanchéité par fumigène", "Thermographie infrarouge", "Dossier DOE Numérisé"],
    duration: "Clôture & archivage pérenne",
    icon: CheckCheck,
  },
];

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="methodologie" className="py-28 bg-white relative border-t border-black/8 bg-swiss-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-swiss-ink" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-swiss-muted font-medium">
              [03 // PROTOCOLE D'EXÉCUTION & RIGUEUR TECHNIQUE]
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-swiss-ink tracking-tight">
            Une Méthodologie <span className="font-serif italic font-normal text-swiss-accent">Éprouvée</span>
          </h2>

          <p className="text-sm text-swiss-muted font-normal leading-relaxed">
            De la feuille de calcul initiale à la livraison sur site, chaque étape fait l'objet d'un contrôle rigoureux
            pour éliminer les aléas de chantier et garantir une exécution parfaite dans les délais convenus.
          </p>
        </div>

        {/* Desktop Step Selector Tabs (Swiss High-Contrast Inversion) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-6 transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? "bg-swiss-ink text-white border border-swiss-ink shadow-swiss-md -translate-y-1"
                    : "bg-white border border-black/10 hover:border-black/30 hover:bg-swiss-snow text-swiss-ink shadow-swiss-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs uppercase tracking-widest font-bold ${
                      isActive ? "text-swiss-accent" : "text-swiss-muted"
                    }`}
                  >
                    PHASE {step.num}
                  </span>
                  <div
                    className={`w-8 h-8 flex items-center justify-center transition-colors ${
                      isActive ? "bg-white/10 text-white" : "bg-swiss-subtle text-swiss-ink"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className={`font-sans text-lg font-bold tracking-tight ${isActive ? "text-white" : "text-swiss-ink"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-[11px] font-normal mt-1 ${isActive ? "text-neutral-400" : "text-swiss-muted"}`}>
                    {step.subtitle}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[10px] font-mono ${
                  isActive ? "border-white/10 text-neutral-400" : "border-black/5 text-swiss-muted"
                }`}>
                  <span>Délai moyen</span>
                  <span className={isActive ? "text-swiss-accent font-semibold" : "text-swiss-ink font-semibold"}>
                    {step.duration}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Panel (Swiss Clean Architectural Container) */}
        <div className="bg-swiss-subtle border border-black/10 p-8 sm:p-12 shadow-swiss-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Column: Deep Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-swiss-ink text-white text-xs font-mono font-medium">
                  PHASE {steps[activeStep].num} / 04
                </span>
                <span className="text-xs uppercase tracking-widest text-swiss-muted font-mono font-semibold">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-4xl text-swiss-ink font-extrabold tracking-tight">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm text-swiss-muted font-normal leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Tools & Environment */}
              <div className="pt-4 border-t border-black/10">
                <span className="text-[10px] uppercase tracking-widest text-swiss-ink font-mono block mb-2 font-bold">
                  Outils & Référentiels Utilisés
                </span>
                <div className="flex flex-wrap gap-2">
                  {steps[activeStep].tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white border border-black/10 text-xs text-swiss-ink font-mono font-medium shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Deliverables Checklist */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 border border-black/10 shadow-swiss-sm space-y-5">
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-swiss-accent" />
                  <span className="text-xs uppercase tracking-widest text-swiss-ink font-mono font-bold">
                    Livrables & Garanties
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-swiss-muted font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{steps[activeStep].duration}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {steps[activeStep].deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-swiss-muted">
                    <span className="w-4 h-4 bg-swiss-ink text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-mono">
                      ✓
                    </span>
                    <span className="leading-relaxed text-swiss-ink font-normal">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-black/8 flex items-center justify-between text-[11px]">
                <span className="text-swiss-muted font-mono">Étape suivante :</span>
                <button
                  onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                  className="inline-flex items-center gap-1 text-swiss-ink font-bold hover:underline font-mono"
                >
                  <span>
                    {activeStep === steps.length - 1 ? "Revenir au début" : steps[activeStep + 1].title}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
