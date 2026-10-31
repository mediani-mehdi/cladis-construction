"use client";

import Image from "next/image";
import Link from "next/link";
import { ALLIANCE_PILLARS } from "@/lib/alliance-data";
import { ShieldCheck, Truck, Cpu, CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";

export default function AllianceSection() {
  const pillarIcons = [Cpu, Truck, ShieldCheck];
  const pillars = ALLIANCE_PILLARS.map((pillar, index) => ({ ...pillar, icon: pillarIcons[index] }));

  return (
    <section id="alliance" className="py-16 sm:py-20 lg:py-28 bg-swiss-snow relative border-t border-black/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-swiss-ink" />
            <span className="text-[11px] uppercase tracking-widest font-mono text-swiss-muted font-medium">
              [04 // ORGANISATION & SYNERGIE STRATÉGIQUE]
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold text-swiss-ink tracking-tight">
            Notre Alliance <span className="font-serif italic font-normal text-swiss-accent">Stratégique</span>
          </h2>

          <p className="text-sm text-swiss-muted font-normal leading-relaxed">
            Une entreprise pensée comme un groupe structuré. Notre chaîne de valeur intégrée associe
            l'ingénierie de conception, la puissance d'achat direct et l'excellence de pose sur site
            pour garantir la réussite sans compromis de vos projets industriels.
          </p>
          <Link href="/alliance" className="inline-flex items-center gap-2 border-b border-primary/30 pb-2 text-xs font-semibold text-primary hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            Comprendre notre alliance
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* 3 Pillar Cards Grid (Swiss White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.name}
                className={`group bg-white border border-black/10 hover:border-black/35 shadow-swiss-sm hover:shadow-swiss-lg transition-all duration-300 flex flex-col justify-between ${idx === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
              >
                {/* Top Image Preview */}
                <div className="relative h-56 w-full overflow-hidden bg-swiss-stone border-b border-black/8">
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    className="object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-black/10 text-[10px] font-mono text-swiss-ink uppercase tracking-widest font-semibold shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-swiss-accent" />
                      <span>{pillar.badge}</span>
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="font-mono text-xs text-swiss-muted bg-white/90 px-2 py-0.5 border border-black/10">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-swiss-muted font-mono block font-semibold">
                      {pillar.role}
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl text-swiss-ink font-bold mt-1 tracking-tight">
                      {pillar.name}
                    </h3>
                    <p className="text-xs font-mono text-swiss-muted mt-0.5">
                      {pillar.tagline}
                    </p>

                    <p className="text-xs text-swiss-muted font-normal mt-4 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="pt-5 border-t border-black/8 space-y-2.5">
                    {pillar.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-swiss-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-swiss-ink shrink-0 mt-0.5" />
                        <span className="leading-snug text-swiss-ink font-normal">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pillar Footer Bar */}
                  <div className="pt-4 border-t border-black/8 flex items-center justify-between text-xs text-swiss-muted font-mono">
                    <span className="text-[11px] uppercase tracking-wider text-swiss-ink font-semibold">
                      Maîtrise Opérationnelle
                    </span>
                    <div className="w-6 h-6 bg-swiss-subtle group-hover:bg-swiss-ink group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Synergies Summary Banner (Swiss High-Contrast White/Ink) */}
        <div className="mt-10 p-5 sm:p-8 bg-white border border-black/10 shadow-swiss-md flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
          <div className="min-w-0 space-y-1">
            <h4 className="font-sans text-xl text-swiss-ink font-bold tracking-tight">
              Un interlocuteur unique pour l'intégralité de votre enveloppe
            </h4>
            <p className="text-xs text-swiss-muted font-normal">
              Zéro dispersion de responsabilités entre le bureau d'études, les fournisseurs et les équipes de pose sur le chantier.
            </p>
          </div>

          <a
            href="#devis"
            className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 px-5 sm:px-7 py-3.5 bg-swiss-ink text-white text-xs uppercase tracking-widest font-mono font-medium hover:bg-neutral-800 transition-colors shrink-0 shadow-sm"
          >
            <span>Démarrer une consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
