import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Clock,
  FileText,
  Sparkles,
  Layers,
  ShieldCheck,
  Wrench,
  Compass,
} from "lucide-react";
import InformationPageLayout from "@/components/InformationPageLayout";
import { METHODOLOGY_PHASES } from "@/lib/methodology-data";

export const metadata: Metadata = {
  title: "Méthodologie | CLADIS CONSTRUCTION",
  description: "Découvrez les quatre phases de notre accompagnement : étude, conception, réalisation et réception de votre enveloppe de bâtiment.",
};

const phaseIcons = [Compass, Layers, Wrench, ShieldCheck];

export default function MethodologiePage() {
  return (
    <InformationPageLayout>
      {/* 1. HERO SECTION */}
      <section aria-labelledby="methodologie-heading" className="v2-methodology-hero">
        <div className="v2-container">
          <nav aria-label="Fil d’Ariane" className="v2-methodology-breadcrumb">
            <Link href="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Notre méthode</span>
          </nav>
          <div className="v2-methodology-intro">
            <div className="v2-methodology-copy">
              <span className="v2-eyebrow">De la première étude à la réception</span>
              <h1 id="methodologie-heading">
                Une méthode claire.<br />
                <em>Un projet maîtrisé.</em>
              </h1>
              <p>
                Un ouvrage réussi se prépare à chaque étape. CLADIS CONSTRUCTION organise les études, les échanges techniques et la réalisation autour d'un parcours en quatre phases, pour relier vos objectifs aux conditions concrètes du chantier.
              </p>
            </div>
            <div className="v2-methodology-visual">
              <Image
                src="/images/methodology-hero-69ff522c.webp"
                alt="Ingénieur examinant les plans d'un bâtiment industriel devant sa charpente métallique et son bardage"
                fill
                priority
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHASES 01 TO 04: REDESIGNED WITH PREMIUM GLASSY CARDS */}
      <section
        id="phases"
        aria-labelledby="phases-heading"
        className="relative scroll-mt-32 py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#f4f8fc] via-[#edf3fa] to-[#f5f8fc]"
      >
        {/* Ambient Glass Reflections & Soft Lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[95vw] max-w-6xl rounded-full bg-gradient-to-b from-blue-400/15 via-sky-300/10 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-48 h-96 w-96 rounded-full bg-[#0066FF]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-sky-400/12 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#173b6808_1px,transparent_1px),linear-gradient(to_bottom,#173b6808_1px,transparent_1px)] bg-[size:52px_52px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end lg:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#cde0f5] text-[10px] font-bold uppercase tracking-[0.2em] text-[#173b68] shadow-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                Le parcours de votre projet
              </div>
              <h2
                id="phases-heading"
                className="font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Quatre phases, une continuité.
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-secondary">
              Chaque phase prépare la suivante. Les choix techniques, les documents et les interventions restent reliés à une même vision globale de l'enveloppe.
            </p>
          </div>

          {/* Quick-Nav Glassy Cards Grid */}
          <nav
            aria-label="Les quatre phases du projet"
            className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-20 lg:grid-cols-4"
          >
            {METHODOLOGY_PHASES.map((phase, idx) => {
              const Icon = phaseIcons[idx] || Sparkles;
              return (
                <a
                  key={phase.slug}
                  href={`#${phase.slug}`}
                  className="group relative flex min-h-[145px] flex-col justify-between rounded-2xl border border-white/85 bg-white/75 p-5 shadow-[0_8px_24px_rgba(23,59,104,0.05),inset_0_1px_1px_rgba(255,255,255,0.95)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#0066FF]/40 hover:bg-white/95 hover:shadow-[0_16px_36px_rgba(23,59,104,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#173b68] to-[#102e56] text-white shadow-sm transition-colors group-hover:from-[#0066FF] group-hover:to-[#004ec2]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="rounded-full border border-[#d8e5f3] bg-white/80 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#557ca9] backdrop-blur-sm">
                      {phase.duration}
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-base font-bold leading-snug text-primary transition-colors group-hover:text-[#0066FF]">
                      {phase.num}. {phase.title}
                    </span>
                    <span className="mt-1 block text-xs leading-normal text-secondary/80 line-clamp-1">
                      {phase.subtitle}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-[#d8e5f3]/70 pt-2 text-[11px] font-semibold text-[#557ca9] transition-colors group-hover:text-[#0066FF]">
                    <span>Accéder aux détails</span>
                    <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none" />
                  </div>
                </a>
              );
            })}
          </nav>

          {/* 4 Large Glassy Phase Cards */}
          <div className="space-y-12 sm:space-y-16">
            {METHODOLOGY_PHASES.map((phase, index) => {
              const Icon = phaseIcons[index] || Sparkles;
              return (
                <div key={phase.slug} className="relative">
                  {/* Step Connector Between Cards */}
                  {index > 0 && (
                    <div
                      aria-hidden="true"
                      className="mb-8 flex items-center justify-center sm:mb-12"
                    >
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/70 px-4 py-1.5 text-[11px] font-mono font-semibold text-[#557ca9] shadow-sm backdrop-blur-md">
                        <span>Phase 0{index}</span>
                        <ArrowDown className="h-3.5 w-3.5 text-[#0066FF]" />
                        <span>Phase 0{index + 1}</span>
                      </div>
                    </div>
                  )}

                  {/* Main Glass Card */}
                  <article
                    id={phase.slug}
                    aria-labelledby={`phase-heading-${phase.num}`}
                    className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-white/90 bg-white/80 p-6 shadow-[0_20px_50px_rgba(23,59,104,0.07),inset_0_1px_2px_rgba(255,255,255,0.95)] backdrop-blur-2xl transition-all duration-300 hover:border-white hover:shadow-[0_28px_65px_rgba(23,59,104,0.11)] sm:p-9 lg:p-12"
                  >
                    {/* Decorative Corner Glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-sky-400/15 to-transparent blur-2xl"
                    />

                    {/* Card Header Bar */}
                    <div className="relative mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#e2ecf7] pb-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2.5 rounded-full border border-[#173b68]/15 bg-[#173b68]/10 px-4 py-1.5 font-secondary text-[11px] font-bold uppercase tracking-wider text-[#173b68] backdrop-blur-md">
                          <span className="h-2 w-2 rounded-full bg-[#0066FF] shadow-[0_0_8px_#0066FF]" />
                          Phase {phase.num} / 04
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8e5f3] bg-white/90 px-3.5 py-1 text-xs font-medium text-secondary shadow-sm backdrop-blur-sm">
                          <Clock className="h-3.5 w-3.5 text-[#0066FF]" />
                          <span>{phase.duration}</span>
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2">
                        {phase.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-lg border border-[#d8e5f3] bg-white/70 px-2.5 py-1 font-mono text-[10px] font-medium text-[#557ca9] backdrop-blur-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 2-Column Responsive Layout */}
                    <div className="relative grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                      {/* Left: Content & Actions */}
                      <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 shadow-sm">
                            <Icon className="h-4 w-4" />
                          </span>
                          <h3
                            id={`phase-heading-${phase.num}`}
                            className="font-sans text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl"
                          >
                            {phase.title}
                          </h3>
                        </div>

                        <p className="mb-6 mt-2 text-base font-semibold leading-relaxed text-[#557ca9] sm:text-lg">
                          {phase.subtitle}
                        </p>

                        <div className="space-y-4 text-sm leading-relaxed text-secondary sm:text-base">
                          {phase.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>

                        {/* Glassy Objectives & Actions Box */}
                        <div className="mt-8 rounded-2xl border border-[#d8e5f3] bg-gradient-to-br from-white/90 via-white/75 to-[#f4f8fc]/85 p-5 shadow-sm backdrop-blur-md sm:p-6">
                          <h4 className="mb-4 flex items-center gap-2 font-secondary text-[11px] font-bold uppercase tracking-wider text-primary">
                            <Sparkles className="h-4 w-4 text-[#0066FF]" />
                            <span>Actions &amp; Engagements CLADIS</span>
                          </h4>
                          <ul className="space-y-3">
                            {phase.tasks.map((task) => (
                              <li
                                key={task}
                                className="flex items-start gap-3 text-xs leading-relaxed text-primary sm:text-sm"
                              >
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#0066FF]/25 bg-[#0066FF]/10 text-[#0066FF]">
                                  <Check className="h-3 w-3 stroke-[2.5]" />
                                </span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Visual Frame & Glassy Deliverables Panel */}
                      <div className={`min-w-0 lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        {/* Photo in Glass Framing */}
                        <div className="group relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] overflow-hidden rounded-2xl border border-white/90 bg-white shadow-md">
                          <Image
                            src={phase.photo.src}
                            alt={phase.photo.alt}
                            fill
                            sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, 100vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Floating Glass Label */}
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-xl border border-white/80 bg-white/90 px-3.5 py-2 shadow-md backdrop-blur-md">
                            <span className="font-secondary text-[10px] font-bold uppercase tracking-wider text-primary truncate">
                              {phase.num} / {phase.title}
                            </span>
                            <span className="shrink-0 rounded border border-[#d8e5f3] bg-white px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-widest text-[#557ca9]">
                              CLADIS
                            </span>
                          </div>
                        </div>

                        {/* Glassy Deliverables Card */}
                        <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#cde0f5] bg-gradient-to-br from-[#eaf2fc]/95 via-white/85 to-[#f3f7fd]/95 p-5 shadow-sm backdrop-blur-xl sm:p-6">
                          {/* Subtle Glass Reflection Pill */}
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/70 blur-xl"
                          />
                          <div className="relative mb-4 flex items-center justify-between border-b border-[#cde0f5]/80 pb-3">
                            <h4 className="flex items-center gap-2 font-secondary text-[11px] font-bold uppercase tracking-widest text-primary">
                              <FileText className="h-4 w-4 text-[#0066FF]" />
                              <span>Livrables &amp; Repères Clés</span>
                            </h4>
                            <span className="rounded-full border border-[#cde0f5] bg-white/90 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#557ca9] shadow-sm">
                              Phase {phase.num}
                            </span>
                          </div>
                          <ul className="relative space-y-2.5">
                            {phase.deliverables.map((deliverable) => (
                              <li
                                key={deliverable}
                                className="flex items-start gap-2.5 text-xs leading-relaxed text-secondary"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066FF] shadow-[0_0_6px_#0066FF]" />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COORDINATION & CONTINUITY SECTION */}
      <section aria-labelledby="coordination-heading" className="bg-[#e9eff7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 grid gap-5 lg:grid-cols-12 lg:gap-12">
            <h2
              id="coordination-heading"
              className="font-sans text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:col-span-7"
            >
              La même exigence,<br />
              <span className="font-normal">du début à la fin.</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-secondary lg:col-span-5">
              Le calendrier et le contenu des études sont précisés selon l'ampleur de l'opération, les documents disponibles et les validations à organiser.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {[
              {
                title: "Des interfaces anticipées",
                text: "Charpente, couverture, bardage et autres lots sont étudiés ensemble pour préciser les raccordements et les limites d'intervention.",
              },
              {
                title: "Des décisions partagées",
                text: "Les points techniques, les ajustements et leurs conséquences sont échangés avec les intervenants pour préparer les étapes suivantes.",
              },
              {
                title: "Une qualité suivie",
                text: "La préparation, les contrôles de réalisation et les documents de réception contribuent à la continuité du suivi de l'ouvrage.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-200 hover:bg-white hover:shadow-md"
              >
                <h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InformationPageLayout>
  );
}
