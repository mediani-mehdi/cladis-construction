import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import InformationPageLayout from "@/components/InformationPageLayout";
import { ALLIANCE_PILLARS } from "@/lib/alliance-data";

export const metadata: Metadata = {
  title: "L'Alliance | CLADIS CONSTRUCTION",
  description: "CLADIS CONSTRUCTION, Building Services et la filiale d'achat associent études, réalisation et approvisionnements pour accompagner votre projet.",
};

export default function AlliancePage() {
  return (
    <InformationPageLayout>
      <section aria-labelledby="alliance-heading" className="v2-methodology-hero v2-alliance-hero">
        <div className="v2-container">
          <nav aria-label="Fil d’Ariane" className="v2-methodology-breadcrumb">
            <Link href="/">Accueil</Link><span aria-hidden="true">/</span><span aria-current="page">L’Alliance</span>
          </nav>
          <div className="v2-methodology-intro">
            <div className="v2-methodology-copy">
              <span className="v2-eyebrow">Des compétences qui se complètent</span>
              <h1 id="alliance-heading">Trois forces réunies.<br /><em>Une même direction.</em></h1>
              <p>Un projet d'enveloppe mobilise des études, des matériaux et des équipes de terrain. Notre alliance relie ces compétences pour préparer les interventions, partager les décisions et accompagner chaque opération avec une organisation cohérente.</p>
            </div>
            <div className="v2-methodology-visual">
              <Image src="/images/alliance-handshake-hq-ff7ca6d9.webp" alt="Deux professionnels de la construction échangeant sur un chantier" fill priority quality={90} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="nos-complementarites" aria-labelledby="alliance-actors-heading" className="v2-alliance-roles scroll-mt-32 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="v2-alliance-roles-heading mb-9 grid gap-5 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7"><span className="mb-3 block font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/55">Une chaîne de compétences</span><h2 id="alliance-actors-heading" className="font-sans text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">À chaque rôle,<br /><span className="font-normal">une expertise dédiée.</span></h2></div>
            <p className="max-w-md text-sm leading-relaxed text-secondary lg:col-span-5">CLADIS CONSTRUCTION coordonne la vision d'ensemble. Building Services accompagne la réalisation sur site. La filiale d'achat prépare les approvisionnements en lien avec les besoins du projet.</p>
          </div>
          <div className="v2-alliance-cards">
            {ALLIANCE_PILLARS.map((pillar) => (
              <article key={pillar.slug} id={pillar.slug} aria-labelledby={`actor-heading-${pillar.num}`} className="v2-alliance-card">
                <div className="v2-alliance-card-media">
                  <Image src={pillar.image} alt={pillar.imageAlt} fill quality={90} sizes="(min-width: 1101px) 33vw, (min-width: 701px) 45vw, 100vw" className="object-cover object-center" />
                  <span className="v2-alliance-card-number v2-glass">{pillar.num}</span>
                  <div className="v2-alliance-card-benefit v2-glass"><p>{pillar.benefit}</p></div>
                </div>
                <div className="v2-alliance-card-body">
                  <header><span className="v2-eyebrow">{pillar.role}</span><h3 id={`actor-heading-${pillar.num}`}>{pillar.name}</h3></header>
                  <p className="v2-alliance-card-summary">{pillar.description}</p>
                  <ul className="v2-alliance-card-highlights">{pillar.highlights.map((highlight) => <li key={highlight}><Check size={16} strokeWidth={1.5} aria-hidden="true" /><span>{highlight}</span></li>)}</ul>
                  <details className="v2-alliance-card-details"><summary>Notre approche en détail</summary><div><p className="v2-alliance-card-tagline">{pillar.tagline}</p>{pillar.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></details>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="alliance-working-heading" className="bg-[#e9eff7] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 grid gap-5 lg:grid-cols-12 lg:gap-12">
            <h2 id="alliance-working-heading" className="font-sans text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:col-span-7">Une organisation qui relie<br /><span className="font-normal">les études au chantier.</span></h2>
            <p className="max-w-md text-sm leading-relaxed text-secondary lg:col-span-5">La complémentarité prend son sens dans les échanges du quotidien : préparer une commande, préciser un raccordement, organiser une intervention ou traiter un point de réception.</p>
          </div>
          <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Cadrer le besoin", text: "Identifier les objectifs, les contraintes et les responsabilités pour définir un périmètre d'intervention partagé." },
              { title: "Préparer les moyens", text: "Rapprocher les études, les commandes et les ressources de chantier pour organiser les interventions." },
              { title: "Coordonner l'exécution", text: "Faire circuler les informations entre le pilotage, les achats et les équipes pour traiter les points de terrain." },
              { title: "Accompagner la réception", text: "Rassembler les contrôles et les documents, suivre les observations et préparer le passage à l'exploitation." },
            ].map((item, index) => <li key={item.title} className="border-t border-primary/20 pt-5"><span className="mb-5 block font-secondary text-[10px] tracking-widest text-primary/45">0{index + 1} /</span><h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3><p className="text-sm leading-relaxed text-secondary">{item.text}</p></li>)}
          </ol>
        </div>
      </section>

    </InformationPageLayout>
  );
}
