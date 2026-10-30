"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sliders } from "lucide-react";
import { METIERS } from "@/lib/metiers-data";

export default function CoreServices() {
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

          <div className="flex flex-col sm:items-end gap-3 max-w-md">
            <p className="text-sm text-swiss-muted font-normal leading-relaxed">
              De la charpente primaire jusqu'au bardage de finition, nous maîtrisons l'ensemble des
              systèmes constructifs pour concevoir des enveloppes étanches, esthétiques et thermiquement efficientes.
            </p>
            <Link
              href="/metiers"
              className="text-xs font-mono font-bold uppercase tracking-wider text-construction-blue hover:underline inline-flex items-center gap-1.5"
            >
              <span>Voir le guide détaillé des 6 métiers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6 Core Services Modular Grid (Direct Links to Dedicated Pages, NO MODAL) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {METIERS.map((service) => (
            <Link
              key={service.slug}
              href={`/metiers/${service.slug}`}
              className="group bg-white border border-black/10 hover:border-construction-blue shadow-swiss-sm hover:shadow-swiss-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Crisp Swiss Framing */}
              <div className="relative h-60 w-full overflow-hidden bg-swiss-stone border-b border-black/8">
                <Image
                  src={service.heroImage}
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
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 group-hover:bg-construction-blue group-hover:text-white text-neutral-900 text-[10px] uppercase tracking-widest font-mono font-bold shadow-md transition-colors border border-black/10">
                    <span>Page Détaillée</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-construction-blue font-mono block mb-1 font-bold">
                    {service.subtitle}
                  </span>
                  
                  <h3 className="font-sans text-xl sm:text-2xl text-swiss-ink group-hover:text-construction-blue transition-colors font-bold tracking-tight">
                    {service.shortTitle}
                  </h3>

                  <p className="text-xs text-swiss-muted font-normal mt-3 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Footer Micro-specs */}
                <div className="pt-6 mt-6 border-t border-black/8 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-swiss-muted font-mono text-[11px]">
                    <Sliders className="w-3.5 h-3.5 text-construction-blue" />
                    <span>Normes CSTB & DTU</span>
                  </div>
                  
                  <div className="inline-flex items-center gap-1 text-xs font-mono font-bold text-neutral-900 group-hover:text-construction-blue transition-colors">
                    <span>Consulter</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
