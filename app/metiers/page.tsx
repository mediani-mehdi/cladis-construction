"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CatalogueModal from "@/components/CatalogueModal";
import { METIERS } from "@/lib/metiers-data";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Download } from "lucide-react";

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

// These two source photographs depict cladding and roof waterproofing respectively.
const serviceImages: Record<string, string> = {
  "bardage-metallique": "/images/service-couverture-bd4b90a9.webp",
  "couverture-etancheite": "/images/service-bardage-31295ac1.webp",
};

export default function MetiersPage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-primary antialiased selection:bg-primary selection:text-white">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />

      <section aria-labelledby="metiers-heading" className="overflow-hidden bg-[#F6F5F2] pb-12 pt-32 sm:pb-16 sm:pt-40 lg:pt-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d’Ariane" className="mb-8 flex items-center gap-3 text-xs text-primary/55 sm:mb-10">
            <Link href="/" className={`transition-colors hover:text-primary ${focusStyle}`}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-primary">Nos métiers</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6 lg:py-5">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-6 bg-primary" aria-hidden="true" />
                <span className="font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/65">L’expertise de l’enveloppe</span>
              </div>
              <h1 id="metiers-heading" className="font-sans text-4xl font-bold leading-[1.06] tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
                Nos métiers.<br />
                <span className="font-normal text-primary/60">Votre bâtiment,<br />notre exigence.</span>
              </h1>
              <p className="mt-7 max-w-md text-sm leading-relaxed text-secondary sm:text-base">
                Charpente, façade, toiture : chaque élément compte.
                CLADIS CONSTRUCTION associe six expertises pour concevoir
                et réaliser une enveloppe à la hauteur de votre projet.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href="#expertises" className={`inline-flex min-h-12 items-center justify-between gap-6 bg-primary px-6 py-4 font-secondary text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90 ${focusStyle}`}>
                  Explorer nos métiers
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                <button type="button" onClick={() => setCatalogueOpen(true)} className={`inline-flex min-h-12 items-center gap-2 border-b border-primary/30 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary ${focusStyle}`}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Le catalogue 2026
                </button>
              </div>
              <div className="mt-9 flex items-start gap-3 border-t border-primary/15 pt-5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/55" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-primary/65">
                  Construction neuve & rénovation<br />
                  Chambéry · Savoie · Auvergne-Rhône-Alpes
                </p>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-swiss-stone lg:aspect-[5/6] lg:max-h-[610px]">
                <Image
                  src="/images/cladis-hero-facade-4k-fef0595c.webp"
                  alt="Façade contemporaine associant bardage métallique, bois et vitrages"
                  fill
                  priority
                  quality={90}
                  sizes="(min-width: 1280px) 580px, (min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-left"
                />
                <span className="absolute right-5 top-5 border border-white/50 bg-white/90 px-3 py-2 font-secondary text-[9px] font-semibold uppercase tracking-widest text-primary sm:right-6 sm:top-6">
                  Structure · Protection · Finition
                </span>
              </div>
              <div className="relative -mt-16 ml-5 flex items-center gap-5 bg-primary px-6 py-5 text-white sm:-mt-20 sm:ml-10 sm:px-8 sm:py-6">
                <span className="font-sans text-5xl font-light leading-none tracking-tight sm:text-6xl">{String(METIERS.length).padStart(2, "0")}</span>
                <span className="h-12 w-px bg-white/25" aria-hidden="true" />
                <div>
                  <span className="block font-secondary text-[9px] uppercase tracking-[0.2em] text-white/60">Expertises complémentaires</span>
                  <span className="mt-1 block font-sans text-lg font-semibold leading-tight sm:text-xl">De la structure à la finition.</span>
                </div>
              </div>
            </div>
          </div>

          <nav aria-label="Accès direct à nos métiers" className="mt-12 grid grid-cols-2 border-l border-t border-primary/15 md:grid-cols-3 lg:mt-16 lg:grid-cols-6">
            {METIERS.map((metier) => (
              <a key={metier.slug} href={`#metier-${metier.slug}`} className={`group flex min-h-24 flex-col justify-between gap-3 border-b border-r border-primary/15 px-4 py-4 transition-colors hover:bg-white ${focusStyle}`}>
                <span className="font-secondary text-[9px] tracking-widest text-primary/45">{metier.num} /</span>
                <span className="flex items-end justify-between gap-2 text-xs font-semibold leading-snug text-primary">
                  {metier.shortTitle}
                  <ArrowDown className="mb-0.5 h-3.5 w-3.5 shrink-0 text-primary/50 transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="expertises" aria-labelledby="expertises-heading" className="scroll-mt-32 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-5 sm:mb-14 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <span className="mb-4 block font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/55">Nos domaines d’intervention</span>
              <h2 id="expertises-heading" className="font-sans text-3xl font-bold leading-[1.1] tracking-tight text-primary sm:text-4xl lg:text-5xl">
                Six expertises.<br /><span className="font-normal">Une vision d’ensemble.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-secondary lg:col-span-5">
              Un besoin précis ou un projet complet : nos solutions s’adaptent
              à votre bâtiment, à ses usages et à ses contraintes.
              Explorez chaque métier pour en découvrir les possibilités.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {METIERS.map((metier) => (
              <article key={metier.slug} id={`metier-${metier.slug}`} className="scroll-mt-36">
                <Link href={`/metiers/${metier.slug}`} aria-labelledby={`metier-title-${metier.slug}`} className={`group flex h-full flex-col ${focusStyle}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-swiss-stone">
                    <Image
                      src={serviceImages[metier.slug] ?? metier.heroImage}
                      alt={metier.title}
                      fill
                      sizes="(min-width: 1280px) 584px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.035] group-focus-visible:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
                    />
                    <span className="absolute left-5 top-5 inline-flex items-baseline gap-2 bg-white px-3 py-2 text-primary sm:left-6 sm:top-6">
                      <span className="font-secondary text-[9px] uppercase tracking-widest text-primary/50">Métier</span>
                      <span className="font-secondary text-xs font-semibold">{metier.num}</span>
                    </span>
                    <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center bg-white text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:bottom-6 sm:right-6">
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col pt-6">
                    <span className="mb-2 font-secondary text-[9px] font-semibold uppercase leading-relaxed tracking-wider text-primary/55">{metier.subtitle}</span>
                    <h3 id={`metier-title-${metier.slug}`} className="font-sans text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl">{metier.shortTitle}</h3>
                    <p className="mb-6 mt-3 max-w-lg text-sm leading-relaxed text-secondary">{metier.shortDesc}</p>
                    <span className="mt-auto flex items-center justify-between gap-4 border-t border-primary/15 pt-4 text-xs font-semibold text-primary">
                      Découvrir ce métier
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="metiers-project-heading" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden bg-primary lg:grid-cols-12">
            <div className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
              <span className="mb-5 block font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Votre projet, dans son ensemble</span>
              <h2 id="metiers-project-heading" className="max-w-xl font-sans text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
                Une enveloppe cohérente.<br /><span className="font-normal text-white/75">Un seul interlocuteur.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75">Associez les bons métiers dès la conception. Notre équipe vous accompagne pour définir une solution adaptée et coordonner l’ensemble de votre enveloppe.</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/#devis" className="inline-flex min-h-12 items-center justify-between gap-6 bg-white px-5 py-4 font-secondary text-[10px] font-bold uppercase tracking-wider text-primary transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Étudier mon projet
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/#configurateur" className="inline-flex min-h-12 items-center justify-between gap-4 border border-white/35 px-5 py-4 font-secondary text-[10px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Configurer mon bâtiment
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 border-t border-white/15 p-7 sm:p-10 lg:col-span-4 lg:border-l lg:border-t-0 lg:p-8">
              {[
                { title: "Étude & conception", text: "Des solutions définies selon vos contraintes." },
                { title: "Coordination des métiers", text: "Des interfaces anticipées entre chaque lot." },
                { title: "Réalisation & suivi", text: "Un accompagnement jusqu’à la réception." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/65">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
