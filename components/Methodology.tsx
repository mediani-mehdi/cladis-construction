"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { METHODOLOGY_PHASES } from "@/lib/methodology-data";
import { Search, PenTool, Hammer, CheckCheck, ArrowRight, ArrowUpRight, Check, Clock, Plus } from "lucide-react";

const phaseIcons = [Search, PenTool, Hammer, CheckCheck];
const steps = METHODOLOGY_PHASES.map((phase, index) => ({ ...phase, icon: phaseIcons[index] }));

export default function Methodology() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];
  const photo = step.photo;

  return (
    <section
      id="methodologie"
      aria-labelledby="methodology-heading"
      className="scroll-mt-32 border-t border-primary/10 bg-[#F6F5F2] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-3 sm:mb-14">
          <span className="h-2 w-2 bg-primary" aria-hidden="true" />
          <span className="font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
            Notre méthode de travail
          </span>
          <span className="ml-auto font-secondary text-[10px] tracking-widest text-primary/50">
            CLADIS / 04 PHASES
          </span>
        </div>

        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h2
            id="methodology-heading"
            className="font-sans text-4xl font-bold leading-[1.06] tracking-tight text-primary sm:text-5xl lg:col-span-7 lg:text-6xl"
          >
            Une Méthodologie<br />
            <span className="font-normal">Éprouvée.</span>
          </h2>
          <div className="max-w-md lg:col-span-5 lg:pb-1">
            <p className="text-sm leading-relaxed text-secondary sm:text-base">
              Un projet bien construit commence par une méthode claire.
              De la première étude à la réception, nous avançons à vos côtés,
              étape par étape.
            </p>
            <a
              href="#devis"
              className="mt-5 inline-flex items-center gap-3 border-b border-primary/30 pb-2 font-secondary text-[11px] font-bold uppercase tracking-wider text-primary transition-colors hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Parlons de votre projet
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link href="/methodologie" className="mt-4 flex w-fit items-center gap-2 text-xs font-semibold text-primary/65 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              Découvrir notre méthodologie
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center justify-between font-secondary text-[10px] uppercase tracking-widest text-primary/60">
              <span>Le parcours de votre projet</span>
              <span>{step.num} / 04</span>
            </div>
            <div className="grid grid-cols-1 border-t border-primary/15 sm:grid-cols-2 lg:grid-cols-1">
              {steps.map((item, index) => {
                const isActive = index === activeStep;
                const Icon = item.icon;
                return (
                  <button
                    key={item.num}
                    id={`methodology-phase-${item.num}`}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="methodology-detail"
                    onClick={() => setActiveStep(index)}
                    className={`group relative flex min-h-28 w-full items-center gap-4 border-b border-primary/15 p-5 text-left transition-colors duration-200 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none sm:min-h-32 lg:min-h-36 ${
                      isActive ? "bg-primary text-white" : "text-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className={`self-start pt-1 font-secondary text-xs ${isActive ? "text-white/60" : "text-primary/40"}`}>
                      {item.num}
                    </span>
                    <span className="min-w-0 flex-1">
                      <Icon className={`mb-3 h-5 w-5 ${isActive ? "text-white/70" : "text-primary/60"}`} aria-hidden="true" />
                      <span className="block font-sans text-lg font-bold leading-tight xl:text-xl">
                        {item.title}
                      </span>
                      <span className={`mt-2 block text-xs leading-relaxed ${isActive ? "text-white/70" : "text-primary/65"}`}>
                        {item.subtitle}
                      </span>
                    </span>
                    <ArrowUpRight className={`h-5 w-5 shrink-0 transition-transform motion-reduce:transition-none ${isActive ? "text-white" : "text-primary/35 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="methodology-detail"
            role="region"
            aria-labelledby={`methodology-phase-${step.num}`}
            className="min-w-0 overflow-hidden bg-white lg:col-span-8"
          >
            <div className="relative h-52 overflow-hidden bg-primary sm:h-64 lg:h-72">
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-primary/10" />
              <span className="absolute left-6 top-6 bg-white px-3 py-2 font-secondary text-[10px] font-bold uppercase tracking-widest text-primary sm:left-8">
                De l’étude à la livraison
              </span>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:left-8 sm:right-8">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium">{step.duration}</span>
                </div>
                <span className="font-sans text-7xl font-light leading-[0.8] tracking-tighter text-white/75 sm:text-8xl" aria-hidden="true">
                  {step.num}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8" aria-live="polite" aria-atomic="true">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-7 bg-primary/40" aria-hidden="true" />
                <span className="font-secondary text-[10px] font-semibold uppercase tracking-widest text-primary/60">
                  Phase {step.num} / 04
                </span>
              </div>
              <h3 className="mb-4 font-sans text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary">{step.description}</p>

              <div className="mt-7 border-t border-primary/10 pt-6">
                <h4 className="mb-4 font-secondary text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Les livrables de cette étape
                </h4>
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {step.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-secondary">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <details key={step.num} className="group mt-6 border-t border-primary/10 pt-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary [&::-webkit-details-marker]:hidden">
                  Outils & référentiels techniques
                  <Plus className="h-4 w-4 shrink-0 transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true" />
                </summary>
                <p className="pt-3 text-xs leading-relaxed text-secondary">
                  {step.tools.join(" · ")}
                </p>
              </details>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-primary/10 px-6 py-5 sm:px-8">
              <div className="flex gap-1.5" aria-hidden="true">
                {steps.map((item, index) => (
                  <span key={item.num} className={`h-1 w-6 ${index === activeStep ? "bg-primary" : "bg-primary/15"}`} />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveStep((current) => (current + 1) % steps.length)}
                className="inline-flex items-center gap-2 text-xs font-bold text-primary transition-colors hover:text-primary/65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {activeStep === steps.length - 1 ? "Revoir les étapes" : "Étape suivante"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
