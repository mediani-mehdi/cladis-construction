import { Compass, Layers, Handshake } from "lucide-react";

const strengths = [
  {
    title: "Expertise éprouvée",
    description: "Une connaissance approfondie de l'enveloppe du bâtiment et de la construction métallique.",
    icon: Compass,
  },
  {
    title: "Organisation structurée",
    description: "Des études préparées avec rigueur et des interfaces coordonnées à chaque étape.",
    icon: Layers,
  },
  {
    title: "Engagement terrain",
    description: "Un accompagnement attentif aux contraintes et aux ambitions de chaque projet.",
    icon: Handshake,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-primary/10 bg-[#F6F5F2] py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-10 lg:px-8">
        <div className="lg:col-span-4">
          <span className="mb-4 block font-secondary text-[9px] font-semibold uppercase tracking-[0.2em] text-primary/55">Le savoir-faire CLADIS</span>
          <h2 id="experience-heading" className="font-sans text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">
            Une solide expérience.<br />
            <span className="font-normal">Un savoir-faire exigeant.</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
          {strengths.map((strength) => {
            const Icon = strength.icon;
            return (
              <div key={strength.title} className="border-t border-primary/20 pt-5">
                <Icon className="mb-4 h-5 w-5 text-primary/65" aria-hidden="true" />
                <h3 className="mb-2 font-sans text-base font-bold leading-tight text-primary">{strength.title}</h3>
                <p className="text-xs leading-relaxed text-secondary">{strength.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
