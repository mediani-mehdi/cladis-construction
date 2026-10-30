"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Compass,
  Award,
  Layers,
  Users,
  Clock,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";

export default function AboutCompany() {
  const atouts = [
    {
      num: "01",
      title: "Bureau d'études intégré",
      desc: "Études d'exécution, plans techniques et coordination.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Expertise technique",
      desc: "Plus de 24 ans d'expérience en enveloppe du bâtiment.",
      icon: Award,
    },
    {
      num: "03",
      title: "Coordination complète",
      desc: "Pilotage des interfaces et suivi rigoureux.",
      icon: Layers,
    },
    {
      num: "04",
      title: "Réseau de partenaires",
      desc: "Alliance Building Services et filiale d'achat.",
      icon: Users,
    },
    {
      num: "05",
      title: "Réactivité chantier",
      desc: "Équipes qualifiées et encadrement expérimenté.",
      icon: Clock,
    },
    {
      num: "06",
      title: "Solutions sur mesure",
      desc: "Adaptation aux contraintes techniques et architecturales.",
      icon: Sparkles,
    },
  ];

  const trustedSectors = [
    { name: "Plateformes Logistiques", desc: "Grands volumes & toitures photovoltaïques" },
    { name: "Unités de Production Industrielle", desc: "Contraintes coupe-feu & étanchéité renforcée" },
    { name: "Bâtiments Tertiaires & Sièges", desc: "Façades architecturales haute technicité" },
    { name: "Entrepôts Frigorifiques & Agroalimentaire", desc: "Isolation thermique continue & RE2020" },
    { name: "Centres Techniques & Concessions", desc: "Charpentes métalliques grande portée" },
  ];

  return (
    <section id="entreprise" className="py-24 sm:py-28 bg-white border-t border-black/8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. QUI SOMMES-NOUS / L'ENTREPRISE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with architectural accents & badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 shadow-swiss-lg bg-neutral-100 group">
              <Image
                src="/images/about-building.jpg"
                alt="CLADIS CONSTRUCTION - Bâtiment industriel moderne et enveloppe métallique"
                fill
                className="object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner Architectural Coordinate Mark */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 border border-black/10 text-[10px] font-mono text-neutral-800 font-bold uppercase tracking-wider">
                Chambéry • 73000
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-construction-blue text-white p-5 sm:p-6 shadow-2xl border border-white/20 max-w-[240px]">
              <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight">
                24 ans
              </div>
              <div className="font-mono text-[11px] uppercase tracking-wider font-bold mt-1 text-white/90">
                d'expertise industrielle
              </div>
              <div className="text-[10px] text-white/75 mt-1">
                Enveloppe du bâtiment en Rhône-Alpes
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-construction-blue" />
              <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                Qui sommes-nous
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-[1.1]">
              L'expertise industrielle au service de vos projets.
            </h2>

            <p className="font-mono text-xs sm:text-sm uppercase tracking-wider text-construction-blue font-bold">
              Enveloppe du bâtiment & construction métallique
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              <strong>CLADIS CONSTRUCTION</strong> réunit expertise technique, maîtrise financière et rigueur
              organisationnelle. Bureau d'études intégré, filiale d'achats et alliance Building Services pour
              couvrir l'ensemble de la chaîne de valeur.
            </p>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              De l'étude à la livraison, une équipe dédiée pour vos chantiers industriels en Rhône-Alpes.
              Nous intervenons avec une rigueur d'ingénierie absolue pour concevoir, chiffrer et bâtir des enveloppes pérennes adaptées aux exigences structurelles et climatiques régionales.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-construction-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider text-neutral-900 font-mono">
                    Bureau d'études intégré
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    Plans d'exécution & calepinage millimétré
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-neutral-50 border border-neutral-200">
                <CheckCircle2 className="w-5 h-5 text-construction-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider text-neutral-900 font-mono">
                    Pilotage complet
                  </div>
                  <div className="text-xs text-neutral-600 mt-0.5">
                    De l'étude à la livraison sans réserve
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/l-entreprise"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md transition-colors"
              >
                <span>Découvrir l'entreprise</span>
                <ArrowRight className="w-4 h-4 text-construction-blue" />
              </Link>

              <a
                href="#devis"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-md transition-colors"
              >
                <span>Demander un devis</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#realisations"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 font-mono text-xs uppercase tracking-widest font-bold transition-colors"
              >
                <span>Nos réalisations</span>
              </a>
            </div>

          </div>

        </div>

        {/* 2. NOS ATOUTS (6 Piliers officiels de cladisbardage.com) */}
        <div className="mt-28 pt-20 border-t border-black/8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-construction-blue" />
              <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                Nos atouts
              </span>
            </div>
            
            <h3 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Une organisation pensée pour les projets industriels exigeants.
            </h3>
            
            <p className="text-sm text-neutral-600">
              Des fondations techniques solides et une chaîne logistique optimisée pour assurer la réussite de chaque chantier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atouts.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white p-7 border border-neutral-200 hover:border-construction-blue transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-construction-blue">
                        {item.num} //
                      </span>
                      <div className="w-9 h-9 bg-neutral-100 group-hover:bg-blue-50 border border-neutral-200 group-hover:border-construction-blue flex items-center justify-center transition-colors">
                        <IconComp className="w-4 h-4 text-neutral-800 group-hover:text-construction-blue transition-colors" />
                      </div>
                    </div>

                    <h4 className="font-sans text-base font-bold text-neutral-900 tracking-tight group-hover:text-construction-blue transition-colors">
                      {item.title}
                    </h4>

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

        {/* 3. ILS NOUS FONT CONFIANCE */}
        <div className="mt-20 pt-16 border-t border-black/8">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
              Ils nous font confiance
            </span>
            <p className="text-xs text-neutral-600 mt-1">
              Partenaires industriels, promoteurs et donneurs d'ordres en Auvergne-Rhône-Alpes
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustedSectors.map((sector) => (
              <div
                key={sector.name}
                className="bg-neutral-50 border border-neutral-200 p-4 text-center hover:bg-white hover:border-construction-blue transition-colors group"
              >
                <div className="font-mono text-xs font-bold text-neutral-800 group-hover:text-construction-blue transition-colors">
                  {sector.name}
                </div>
                <div className="text-[10px] text-neutral-500 mt-1">
                  {sector.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
