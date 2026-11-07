import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import InformationPageLayout from "@/components/InformationPageLayout";
import InteriorPageHero from "@/components/InteriorPageHero";
import { ALLIANCE_PILLARS } from "@/lib/alliance-data";

export const metadata: Metadata = {
  title: "L'Alliance | CLADIS CONSTRUCTION",
  description: "CLADIS CONSTRUCTION, Building Services et la filiale d'achat associent études, réalisation et approvisionnements pour accompagner votre projet.",
};

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function AlliancePage() {
  return (
    <InformationPageLayout>
      <InteriorPageHero
        id="alliance"
        label="L’Alliance"
        eyebrow="Des compétences qui se complètent"
        title="Trois forces réunies."
        subtitle="Une même direction."
        description="Un projet d'enveloppe mobilise des études, des matériaux et des équipes de terrain. Notre alliance relie ces compétences pour préparer les interventions, partager les décisions et accompagner chaque opération avec une organisation cohérente."
        image="/images/alliance-handshake-hq-ff7ca6d9.webp"
        imageQuality={90}
        imageAlt="Deux professionnels de la construction échangeant sur un chantier"
        caption="CLADIS CONSTRUCTION · BUILDING SERVICES · FILIALE D'ACHAT"
        action={{ href: "#nos-complementarites", label: "Découvrir notre organisation" }}
      />

      <section id="nos-complementarites" aria-labelledby="alliance-actors-heading" className="scroll-mt-32 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 grid gap-5 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7"><span className="mb-3 block font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/55">Une chaîne de compétences</span><h2 id="alliance-actors-heading" className="font-sans text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">À chaque rôle,<br /><span className="font-normal">une expertise dédiée.</span></h2></div>
            <p className="max-w-md text-sm leading-relaxed text-secondary lg:col-span-5">CLADIS CONSTRUCTION coordonne la vision d'ensemble. Building Services accompagne la réalisation sur site. La filiale d'achat prépare les approvisionnements en lien avec les besoins du projet.</p>
          </div>
          <nav aria-label="Les trois acteurs de l'alliance" className="grid grid-cols-1 border-l border-t border-primary/15 md:grid-cols-3">
            {ALLIANCE_PILLARS.map((pillar) => <a key={pillar.slug} href={`#${pillar.slug}`} className={`group flex min-h-28 flex-col justify-between gap-4 border-b border-r border-primary/15 p-5 hover:bg-[#e9eff7] ${focusStyle}`}><span className="font-secondary text-[9px] uppercase tracking-wider text-primary/55">{pillar.num} / {pillar.role}</span><span className="flex items-center justify-between gap-3 text-sm font-bold text-primary">{pillar.name}<ArrowDown className="h-4 w-4 shrink-0 text-primary/55 transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" /></span></a>)}
          </nav>

          <div className="mt-12 sm:mt-16">
            {ALLIANCE_PILLARS.map((pillar, index) => (
              <article key={pillar.slug} id={pillar.slug} aria-labelledby={`actor-heading-${pillar.num}`} className="scroll-mt-36 border-t border-primary/15 py-12 last:pb-0 sm:py-16">
                <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
                  <div className={`min-w-0 lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-swiss-stone">
                      <Image src={pillar.image} alt={pillar.imageAlt} fill sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, 100vw" className="object-cover object-center" />
                      <span className="absolute bottom-5 left-5 bg-white px-3 py-2 font-secondary text-[9px] font-semibold uppercase tracking-widest text-primary">{pillar.badge}</span>
                    </div>
                    <p className="mt-5 border-l-2 border-primary/35 pl-4 text-sm font-medium leading-relaxed text-primary">{pillar.benefit}</p>
                  </div>
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <span className="mb-4 block font-secondary text-[10px] font-semibold uppercase tracking-widest text-primary/55">{pillar.num} / {pillar.role}</span>
                    <h3 id={`actor-heading-${pillar.num}`} className="font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl">{pillar.name}</h3>
                    <p className="mb-5 mt-3 text-base font-medium leading-relaxed text-primary/70">{pillar.tagline}</p>
                    <div className="space-y-4 text-sm leading-relaxed text-secondary">{pillar.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                    <ul className="mt-6 grid gap-x-5 gap-y-3 border-t border-primary/10 pt-5 sm:grid-cols-2">{pillar.highlights.map((highlight) => <li key={highlight} className="flex items-start gap-2.5 text-xs leading-relaxed text-primary"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" aria-hidden="true" /><span>{highlight}</span></li>)}</ul>
                  </div>
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

      <section aria-labelledby="alliance-contact-heading" className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7"><h2 id="alliance-contact-heading" className="font-sans text-2xl font-bold tracking-tight text-primary sm:text-3xl">Des compétences réunies pour votre projet.</h2><Link href="/methodologie" className={`mt-4 inline-flex items-center gap-3 text-xs font-semibold text-primary/65 hover:text-primary ${focusStyle}`}>Parcourez notre méthode en quatre phases<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link></div>
          <div className="flex flex-wrap gap-4 lg:col-span-5 lg:justify-end"><Link href="/realisations" className={`inline-flex min-h-12 items-center gap-4 border border-primary/25 px-5 py-4 text-xs font-semibold text-primary hover:bg-primary/5 ${focusStyle}`}>Nos réalisations<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="/#devis" className={`inline-flex min-h-12 items-center gap-4 bg-primary px-5 py-4 text-xs font-semibold text-white hover:bg-primary/90 ${focusStyle}`}>Parlons de votre projet<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </section>
    </InformationPageLayout>
  );
}
