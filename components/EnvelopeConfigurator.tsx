"use client";

import { useState } from "react";
import { Building2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface ConfiguratorProps {
  onApplyConfig?: (summary: {
    buildingType: string;
    surface: number;
    bardageType: string;
    toitureType: string;
    hasCharpente: boolean;
  }) => void;
}

export default function EnvelopeConfigurator({ onApplyConfig }: ConfiguratorProps) {
  const [buildingType, setBuildingType] = useState("Industriel & Usine");
  const [surface, setSurface] = useState<number>(2500);
  const [bardageType, setBardageType] = useState("Panneaux Sandwichs Haute Isolation");
  const [toitureType, setToitureType] = useState("Toiture Étanchée Solaire (PV)");
  const [hasCharpente, setHasCharpente] = useState(true);

  // Derived calculations
  const estimatedRValue =
    bardageType.includes("Double Peau") ? 5.8 : bardageType.includes("Sandwichs") ? 5.2 : 4.6;
  const estimatedWeeks = Math.max(3, Math.round(surface / 800) + (hasCharpente ? 4 : 2));
  const estimatedSteelTons = hasCharpente ? Math.round((surface * 32) / 1000) : 0;

  const handleTransfer = () => {
    if (onApplyConfig) {
      onApplyConfig({
        buildingType,
        surface,
        bardageType,
        toitureType,
        hasCharpente,
      });
    }
    const formElement = document.getElementById("devis");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="configurateur" className="py-28 bg-swiss-snow relative border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-swiss-ink" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-swiss-muted font-medium">
              [06 // INGÉNIERIE VIRTUELLE & PRÉ-DIMENSIONNEMENT]
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-swiss-ink tracking-tight">
            Configurateur d'<span className="font-serif italic font-normal text-swiss-accent">Enveloppe</span>
          </h2>

          <p className="text-sm text-swiss-muted font-normal leading-relaxed">
            Architectes, promoteurs et industriels : simulez les paramètres techniques clés de votre futur ouvrage
            et visualisez les préconisations de notre bureau d'études en temps réel.
          </p>
        </div>

        {/* Configurator Card Container (Swiss Clean White Design) */}
        <div className="bg-white border border-black/10 shadow-swiss-md p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Typologie */}
              <div>
                <label className="text-xs uppercase font-mono tracking-widest text-swiss-ink font-bold block mb-3">
                  01. Typologie de Bâtiment
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    "Industriel & Usine",
                    "Plateforme Logistique",
                    "Siège Tertiaire",
                    "Entrepôt Frigorifique",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setBuildingType(type)}
                      className={`p-3 text-xs font-mono text-left transition-all duration-200 border ${
                        buildingType === type
                          ? "bg-swiss-ink text-white border-swiss-ink shadow-sm"
                          : "bg-swiss-subtle border-black/5 text-swiss-muted hover:text-swiss-ink hover:border-black/20"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Surface */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase font-mono tracking-widest text-swiss-ink font-bold">
                    02. Surface Totale de l'Enveloppe (m²)
                  </label>
                  <span className="font-mono text-sm font-bold text-swiss-ink px-3 py-1 bg-swiss-subtle border border-black/10">
                    {surface.toLocaleString("fr-FR")} m²
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={15000}
                  step={250}
                  value={surface}
                  onChange={(e) => setSurface(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer bg-swiss-stone h-2 rounded-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-swiss-muted mt-1.5">
                  <span>500 m² (Atelier artisanal)</span>
                  <span>7 500 m² (Moyen hub)</span>
                  <span>15 000 m² (Mégasite)</span>
                </div>
              </div>

              {/* 3. Système de Bardage */}
              <div>
                <label className="text-xs uppercase font-mono tracking-widest text-swiss-ink font-bold block mb-3">
                  03. Système de Façade & Bardage
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Panneaux Sandwichs Haute Isolation", desc: "PIR / Laine de roche coupe-feu" },
                    { title: "Double Peau Énergie Plus", desc: "Plateau nervuré + isolant 160 mm" },
                    { title: "Cassettes Aluminium Pleines / Perforées", desc: "Finition architecturale haute couture" },
                    { title: "Bardage Spécifique & Joint Debout", desc: "Géométrie singulière et lignes épurées" },
                  ].map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setBardageType(item.title)}
                      className={`p-3.5 text-left transition-all duration-200 border ${
                        bardageType === item.title
                          ? "bg-swiss-ink text-white border-swiss-ink shadow-sm"
                          : "bg-swiss-subtle border-black/5 hover:border-black/25 text-swiss-ink"
                      }`}
                    >
                      <span className="text-xs font-bold block">
                        {item.title}
                      </span>
                      <span className={`text-[11px] font-normal block mt-0.5 ${
                        bardageType === item.title ? "text-neutral-300" : "text-swiss-muted"
                      }`}>
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Couverture & Toiture */}
              <div>
                <label className="text-xs uppercase font-mono tracking-widest text-swiss-ink font-bold block mb-3">
                  04. Système de Couverture & Toiture
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Toiture Étanchée Solaire (PV)", desc: "Support sans perforation pour photovoltaïque" },
                    { title: "Toiture Végétalisée Sedum", desc: "Rétention des eaux & inertie thermique" },
                    { title: "Membrane Bicouche SBS Haute Durabilité", desc: "Protection classique étanche certifiée" },
                    { title: "Couverture Bac Acier Isolé", desc: "Idéal pour grands hangars industriels" },
                  ].map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setToitureType(item.title)}
                      className={`p-3.5 text-left transition-all duration-200 border ${
                        toitureType === item.title
                          ? "bg-swiss-ink text-white border-swiss-ink shadow-sm"
                          : "bg-swiss-subtle border-black/5 hover:border-black/25 text-swiss-ink"
                      }`}
                    >
                      <span className="text-xs font-bold block">
                        {item.title}
                      </span>
                      <span className={`text-[11px] font-normal block mt-0.5 ${
                        toitureType === item.title ? "text-neutral-300" : "text-swiss-muted"
                      }`}>
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Charpente Switch */}
              <div className="flex items-center justify-between p-4 bg-swiss-subtle border border-black/10">
                <div>
                  <span className="text-xs font-bold text-swiss-ink block">
                    Intégrer le lot Charpente Métallique porteuse ?
                  </span>
                  <span className="text-[11px] text-swiss-muted font-normal">
                    Calculs de descente de charges et portiques mécano-soudés
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setHasCharpente(!hasCharpente)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors border ${
                    hasCharpente
                      ? "bg-swiss-ink text-white font-bold border-swiss-ink"
                      : "bg-white text-swiss-muted border-black/15 hover:border-black/30"
                  }`}
                >
                  {hasCharpente ? "Inclus (Recommandé)" : "Non requis"}
                </button>
              </div>

            </div>

            {/* Right Column: Live Output & Engineering Summary (Swiss Structured Card) */}
            <div className="lg:col-span-5 bg-swiss-subtle border border-black/10 p-7 sm:p-8 space-y-6 lg:sticky lg:top-28 shadow-swiss-sm">
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-swiss-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest text-swiss-ink font-bold">
                    Diagnostic Préliminaire
                  </span>
                </div>
                <span className="text-[10px] font-mono text-swiss-ink px-2 py-0.5 bg-white border border-black/15 font-semibold">
                  RE 2020 Compliant
                </span>
              </div>

              {/* Key Metrics Display */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-white border border-black/8 shadow-sm">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-swiss-muted block font-medium">
                    Performance Thermique
                  </span>
                  <div className="text-2xl font-sans text-swiss-ink font-extrabold mt-1">
                    R = {estimatedRValue} <span className="text-xs font-mono text-swiss-muted font-normal">m²·K/W</span>
                  </div>
                  <span className="text-[10px] text-swiss-muted">Conforme réglementation thermique</span>
                </div>

                <div className="p-4 bg-white border border-black/8 shadow-sm">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-swiss-muted block font-medium">
                    Délai Prévisionnel
                  </span>
                  <div className="text-2xl font-sans text-swiss-ink font-extrabold mt-1">
                    ~{estimatedWeeks} <span className="text-xs font-mono text-swiss-muted font-normal">semaines</span>
                  </div>
                  <span className="text-[10px] text-swiss-muted">Étude + appro + pose</span>
                </div>

                {hasCharpente && (
                  <div className="p-4 bg-white border border-black/8 shadow-sm col-span-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-swiss-muted block font-medium">
                      Tonnage d'Acier Estimé
                    </span>
                    <div className="text-xl font-sans text-swiss-ink font-bold mt-1">
                      ~{estimatedSteelTons} <span className="text-xs font-mono text-swiss-muted">tonnes d'acier normalisé</span>
                    </div>
                    <span className="text-[10px] text-swiss-muted">Profilés PRS et laminés S355 avec marquage CE</span>
                  </div>
                )}
              </div>

              {/* Selected Criteria Summary */}
              <div className="p-4 bg-white border border-black/8 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-swiss-muted">Typologie :</span>
                  <span className="text-swiss-ink font-mono font-medium">{buildingType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-swiss-muted">Surface :</span>
                  <span className="text-swiss-ink font-mono font-medium">{surface} m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-swiss-muted">Façade :</span>
                  <span className="text-swiss-ink font-mono font-medium text-right text-[11px] max-w-[200px] truncate">
                    {bardageType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-swiss-muted">Toiture :</span>
                  <span className="text-swiss-ink font-mono font-medium text-right text-[11px] max-w-[200px] truncate">
                    {toitureType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-swiss-muted">Charpente :</span>
                  <span className="text-swiss-ink font-mono font-bold">{hasCharpente ? "Incluse" : "Non incluse"}</span>
                </div>
              </div>

              {/* Transfer CTA Button */}
              <button
                type="button"
                onClick={handleTransfer}
                className="w-full py-4 bg-swiss-ink text-white text-xs uppercase tracking-widest font-mono font-medium hover:bg-neutral-800 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group"
              >
                <span>Chiffrer ce projet sur mesure</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-swiss-muted font-mono text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-swiss-accent shrink-0" />
                <span>Étude sans engagement réalisée par notre bureau d'études</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
