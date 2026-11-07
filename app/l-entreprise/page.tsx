"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/HomeNavigation";
import Footer from "@/components/HomeFooter";
import CatalogueModal from "@/components/CatalogueModal";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";

const values = [
  {
    num: "01",
    title: "Rigueur et précision",
    description: "Nous accordons une importance particulière à la précision technique et au souci du détail pour garantir des projets maîtrisés à chaque étape.",
  },
  {
    num: "02",
    title: "Fiabilité",
    description: "Nous proposons des solutions fiables et durables, en nous appuyant sur une organisation structurée et un accompagnement rigoureux.",
  },
  {
    num: "03",
    title: "Engagement",
    description: "Nous nous impliquons pleinement dans chaque projet afin de répondre aux exigences de nos clients et de respecter nos engagements.",
  },
  {
    num: "04",
    title: "Performance",
    description: "Nous recherchons des solutions techniques et organisationnelles optimisées pour garantir l'efficacité et la qualité de nos interventions.",
  },
];

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function EntreprisePage() {
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <main className="v2-home v2-interior">
      <Navbar onOpenCatalogue={() => setCatalogueOpen(true)} />
      <div id="page-content" tabIndex={-1} className="v2-page-content">

      <section id="histoire" aria-labelledby="about-heading" className="v2-editorial-hero bg-[#e9eff7] pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d’Ariane" className="mb-9 flex items-center gap-3 text-xs text-primary/55 sm:mb-12">
            <Link href="/" className={`transition-colors hover:text-primary ${focusStyle}`}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-primary">À propos</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-6 bg-primary" aria-hidden="true" />
                <span className="font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/65">Histoire de l'entreprise</span>
              </div>
              <h1 id="about-heading" className="font-sans text-4xl font-bold leading-[1.06] tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
                Qui sommes-<em>nous ?</em>
              </h1>
              <p className="mt-5 max-w-xl font-secondary text-[10px] font-semibold uppercase leading-relaxed tracking-wider text-primary/65 sm:text-xs">
                Enveloppe du bâtiment &amp; construction métallique
              </p>
              <div className="mt-8 max-w-xl space-y-5 sm:mt-10">
                <p className="text-lg font-medium leading-relaxed text-primary sm:text-xl">
                  <strong className="font-bold">CLADIS CONSTRUCTION</strong> est née d'une conviction forte : les projets ambitieux exigent des entreprises structurées, visionnaires et parfaitement organisées.
                </p>
                <p className="text-sm leading-relaxed text-secondary sm:text-base">
                  Issue du milieu de la construction, CLADIS CONSTRUCTION a été pensée dès sa création comme une entité capable de répondre aux enjeux techniques, économiques et organisationnels des opérations d'envergure, dans les domaines de l'enveloppe du bâtiment et de la construction métallique.
                </p>
              </div>
            </div>

            <figure className="min-w-0 lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-swiss-stone sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/about-company-woodland-d9a52e11.webp"
                  alt="Bâtiment contemporain en bardage métallique anthracite, encadrement bois et vitrages éclairés dans un environnement boisé"
                  fill
                  priority
                  quality={90}
                  sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-center"
                />
                <span className="absolute bottom-5 left-5 border border-white/50 bg-white/95 px-3 py-2 font-secondary text-[9px] font-semibold uppercase tracking-widest text-primary sm:bottom-6 sm:left-6">
                  CLADIS CONSTRUCTION
                </span>
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 border-t border-primary/20 pt-3 font-secondary text-[9px] uppercase tracking-wider text-primary/50">
                <span>Enveloppe du bâtiment</span>
                <span>Construction métallique</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="ambition-heading" className="v2-company-ambition">
        <div className="v2-container">
          <div className="v2-ambition-panel">
            <div className="v2-ambition-label">
              <ArrowUpRight size={24} strokeWidth={1.25} aria-hidden="true" />
              <h2 id="ambition-heading" className="font-secondary">Notre ambition est claire :</h2>
            </div>
            <p className="v2-ambition-copy">
              <strong>Concevoir, structurer et piloter</strong> des projets complexes avec rigueur, précision et exigence, en apportant des solutions fiables, durables et performantes.
            </p>
          </div>
        </div>
      </section>

      <section id="mission-vision" aria-label="Notre mission et notre vision" className="scroll-mt-32 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <article aria-labelledby="mission-heading" className="border-t border-primary/20 pt-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-secondary text-[10px] uppercase tracking-widest text-primary/45">01 / Notre raison d’agir</span>
              <ArrowUpRight className="h-5 w-5 text-primary/40" aria-hidden="true" />
            </div>
            <h2 id="mission-heading" className="font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl">Notre mission</h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-primary">
              Accompagner nos clients dans la réalisation de leurs projets de construction en proposant des solutions techniques fiables, durables et performantes.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
              Grâce à notre expertise en enveloppe du bâtiment et en construction métallique, à notre bureau d'études intégré et à une organisation rigoureuse, nous assurons la maîtrise de chaque étape du projet, de la conception technique à la préparation de sa réalisation.
            </p>
          </article>
          <article aria-labelledby="vision-heading" className="border-t border-primary/20 pt-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-secondary text-[10px] uppercase tracking-widest text-primary/45">02 / Notre cap pour demain</span>
              <ArrowUpRight className="h-5 w-5 text-primary/40" aria-hidden="true" />
            </div>
            <h2 id="vision-heading" className="font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl">Notre vision</h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-primary">
              Devenir un acteur de référence dans les domaines de l'enveloppe du bâtiment et de la construction métallique, en nous distinguant par notre expertise technique, notre organisation et notre capacité à accompagner les projets les plus ambitieux.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-secondary sm:text-base">
              Nous aspirons à construire des partenariats durables fondés sur la confiance, la performance et l'excellence opérationnelle, tout en contribuant à la réalisation des bâtiments de demain.
            </p>
          </article>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="border-y border-primary/10 bg-[#e9eff7] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-4">
            <span className="mb-5 block font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/55">Ce qui nous guide</span>
            <h2 id="values-heading" className="font-sans text-4xl font-bold tracking-tight text-primary sm:text-5xl">Nos valeurs</h2>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-swiss-stone">
              <Image
                src="/images/construction-hero-bcc0de60.webp"
                alt="Chantier d'un bâtiment à structure métallique avec grue et pelleteuse"
                fill
                sizes="(min-width: 1280px) 350px, (min-width: 1024px) 33vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <ol className="min-w-0 border-t border-primary/20 lg:col-span-8">
            {values.map((value) => (
              <li key={value.num} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-primary/20 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6 sm:py-7">
                <span className="pt-1 font-secondary text-xs text-primary/45" aria-hidden="true">{value.num}</span>
                <div>
                  <h3 className="font-sans text-xl font-bold tracking-tight text-primary sm:text-2xl">{value.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-secondary">{value.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="about-contact-heading" className="py-14 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
          <div>
            <h2 id="about-contact-heading" className="font-sans text-2xl font-bold tracking-tight text-primary sm:text-3xl">Donnons forme à votre projet.</h2>
            <Link href="/realisations" className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary/65 transition-colors hover:text-primary ${focusStyle}`}>
              Découvrez nos réalisations
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <button type="button" onClick={() => setCatalogueOpen(true)} className={`inline-flex min-h-12 items-center gap-2 border-b border-primary/30 py-2 text-xs font-semibold text-primary transition-colors hover:border-primary ${focusStyle}`}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Notre catalogue
            </button>
            <Link href="/#devis" className={`inline-flex min-h-12 items-center justify-between gap-6 bg-primary px-6 py-4 font-secondary text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90 ${focusStyle}`}>
              Parlons de votre projet
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      </div>
      <Footer onOpenCatalogue={() => setCatalogueOpen(true)} />
      <CatalogueModal isOpen={catalogueOpen} onClose={() => setCatalogueOpen(false)} />
    </main>
  );
}
