"use client";

import { Award, Briefcase, CheckSquare, Layers } from "lucide-react";

export default function MetricsBar() {
  const metrics = [
    {
      value: "24",
      unit: "ans",
      label: "Années d'expérience",
      detail: "Plus de 24 ans d'expertise en enveloppe du bâtiment et construction métallique",
      icon: Award,
    },
    {
      value: "500+",
      unit: "réalisés",
      label: "Projets réalisés",
      detail: "Bâtiments industriels, tertiaires et logistiques en Rhône-Alpes",
      icon: Briefcase,
    },
    {
      value: "100%",
      unit: "dédié",
      label: "Accompagnement",
      detail: "De l'étude à la livraison, une équipe dédiée pour vos chantiers industriels",
      icon: CheckSquare,
    },
    {
      value: "1",
      unit: "intégré",
      label: "Bureau d'études intégré",
      detail: "Études d'exécution, plans techniques et coordination des interfaces",
      icon: Layers,
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-black/10 divide-y sm:divide-y-0 sm:divide-x divide-black/10 shadow-swiss-md">
        {metrics.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.label}
              className="group relative bg-white p-7 sm:p-8 flex flex-col justify-between hover:bg-swiss-snow transition-all duration-300"
            >
              {/* Top Row: Index & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-swiss-muted group-hover:text-swiss-ink transition-colors font-medium">
                  0{index + 1} //
                </span>
                <div className="w-8 h-8 bg-swiss-subtle border border-black/5 group-hover:border-black/20 flex items-center justify-center transition-colors">
                  <IconComponent className="w-4 h-4 text-swiss-ink" />
                </div>
              </div>

              {/* Counter Display */}
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-swiss-ink group-hover:text-neutral-800 transition-colors">
                    {item.value}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-swiss-muted font-medium">
                    {item.unit}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-sm text-swiss-ink uppercase tracking-wider mt-2.5">
                  {item.label}
                </h3>
                
                <p className="text-xs text-swiss-muted font-normal mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom Subtle Indicator Bar */}
              <div className="w-0 group-hover:w-full h-[2px] bg-swiss-ink transition-all duration-300 mt-6" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
