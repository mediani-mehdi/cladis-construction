"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/HomeNavigation";
import Footer from "@/components/HomeFooter";
import CatalogueModal from "@/components/CatalogueModal";
import { METIERS } from "@/lib/metiers-data";
import { ArrowUpRight, Download } from "lucide-react";

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function MetiersPage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="v2-home v2-interior">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />
      <div id="page-content" tabIndex={-1} className="v2-page-content">

      <section aria-labelledby="metiers-heading" className="v2-editorial-hero overflow-hidden bg-[#e9eff7] pb-12 pt-32 sm:pb-16 sm:pt-40 lg:pt-44">
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
                  src={METIERS[0].heroImage}
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
            </div>
          </div>

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
                      src={metier.heroImage}
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
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="metiers-project-heading" className="v2-expertise-summary">
        <div className="v2-container">
          <div className="v2-expertise-summary-panel">
            <span className="v2-eyebrow">Votre projet, dans son ensemble</span>
            <div className="v2-expertise-summary-copy">
              <h2 id="metiers-project-heading" className="v2-expertise-summary-title">Une enveloppe cohérente.<br /><em>Un seul interlocuteur.</em></h2>
              <p>Associez les bons métiers dès la conception. Notre équipe vous accompagne pour définir une solution adaptée et coordonner l’ensemble de votre enveloppe.</p>
            </div>
          </div>
        </div>
      </section>

      </div>
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
