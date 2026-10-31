import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import InformationPageLayout from "@/components/InformationPageLayout";
import InteriorPageHero from "@/components/InteriorPageHero";
import { METHODOLOGY_PHASES } from "@/lib/methodology-data";

export const metadata: Metadata = {
  title: "Méthodologie | CLADIS CONSTRUCTION",
  description: "Découvrez les quatre phases de notre accompagnement : étude, conception, réalisation et réception de votre enveloppe de bâtiment.",
};

const focusStyle = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function MethodologiePage() {
  return (
    <InformationPageLayout>
      <InteriorPageHero
        id="methodologie"
        label="Méthodologie"
        eyebrow="De la première étude à la réception"
        title="Une méthode claire."
        subtitle="Un projet maîtrisé."
        description="Un ouvrage réussi se prépare à chaque étape. CLADIS CONSTRUCTION organise les études, les échanges techniques et la réalisation autour d'un parcours en quatre phases, pour relier vos objectifs aux conditions concrètes du chantier."
        image="/images/construction-hero-bcc0de60.webp"
        imageAlt="Chantier de construction d'un bâtiment à structure métallique"
        caption="Étudier · Concevoir · Réaliser · Transmettre"
        action={{ href: "#phases", label: "Découvrir les quatre phases" }}
      />

      <section id="phases" aria-labelledby="phases-heading" className="scroll-mt-32 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 block font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/55">Le parcours de votre projet</span>
              <h2 id="phases-heading" className="font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl">Quatre phases, une continuité.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-secondary">Chaque phase prépare la suivante. Les choix techniques, les documents et les interventions restent reliés à une même vision du projet.</p>
          </div>
          <nav aria-label="Les quatre phases du projet" className="grid grid-cols-1 border-l border-t border-primary/15 sm:grid-cols-2 lg:grid-cols-4">
            {METHODOLOGY_PHASES.map((phase) => (
              <a key={phase.slug} href={`#${phase.slug}`} className={`group flex min-h-28 flex-col justify-between gap-4 border-b border-r border-primary/15 p-5 transition-colors hover:bg-[#F6F5F2] ${focusStyle}`}>
                <span className="font-secondary text-[10px] tracking-widest text-primary/45">{phase.num} /</span>
                <span className="flex items-center justify-between gap-3 text-sm font-bold text-primary">{phase.title}<ArrowDown className="h-4 w-4 shrink-0 text-primary/55 transition-transform group-hover:translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" /></span>
              </a>
            ))}
          </nav>

          <div className="mt-12 sm:mt-16">
            {METHODOLOGY_PHASES.map((phase, index) => (
              <article key={phase.slug} id={phase.slug} aria-labelledby={`phase-heading-${phase.num}`} className="scroll-mt-36 border-t border-primary/15 py-12 last:pb-0 sm:py-16">
                <div className="mb-7 flex items-center gap-3 font-secondary text-[10px] font-semibold uppercase tracking-widest text-primary/55">
                  <span className="h-px w-7 bg-primary/35" aria-hidden="true" />Phase {phase.num} / 04
                </div>
                <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <h3 id={`phase-heading-${phase.num}`} className="font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl">{phase.title}</h3>
                    <p className="mb-5 mt-3 text-base font-medium leading-relaxed text-primary/70">{phase.subtitle}</p>
                    <div className="space-y-4 text-sm leading-relaxed text-secondary">
                      {phase.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    <ul className="mt-6 space-y-3 border-t border-primary/10 pt-5">
                      {phase.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-3 text-xs leading-relaxed text-primary"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" aria-hidden="true" /><span>{task}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className={`min-w-0 lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[16/9] overflow-hidden bg-swiss-stone">
                      <Image src={phase.photo.src} alt={phase.photo.alt} fill sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, 100vw" className="object-cover object-center" />
                      <span className="absolute bottom-4 left-4 bg-white/95 px-3 py-2 font-secondary text-[10px] font-semibold text-primary">{phase.num} / CLADIS CONSTRUCTION</span>
                    </div>
                    <div className="bg-[#F6F5F2] p-6">
                      <h4 className="mb-4 font-secondary text-[10px] font-bold uppercase tracking-widest text-primary">Les documents & repères de cette phase</h4>
                      <ul className="space-y-3">
                        {phase.deliverables.map((deliverable) => <li key={deliverable} className="flex items-start gap-2.5 text-xs leading-relaxed text-secondary"><span className="mt-1.5 h-1 w-1 shrink-0 bg-primary/45" aria-hidden="true" />{deliverable}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="coordination-heading" className="bg-[#F6F5F2] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 grid gap-5 lg:grid-cols-12 lg:gap-12">
            <h2 id="coordination-heading" className="font-sans text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:col-span-7">La même exigence,<br /><span className="font-normal">du début à la fin.</span></h2>
            <p className="max-w-md text-sm leading-relaxed text-secondary lg:col-span-5">Le calendrier et le contenu des études sont précisés selon l'ampleur de l'opération, les documents disponibles et les validations à organiser.</p>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {[
              { title: "Des interfaces anticipées", text: "Charpente, couverture, bardage et autres lots sont étudiés ensemble pour préciser les raccordements et les limites d'intervention." },
              { title: "Des décisions partagées", text: "Les points techniques, les ajustements et leurs conséquences sont échangés avec les intervenants pour préparer les étapes suivantes." },
              { title: "Une qualité suivie", text: "La préparation, les contrôles de réalisation et les documents de réception contribuent à la continuité du suivi de l'ouvrage." },
            ].map((item) => <div key={item.title} className="border-t border-primary/20 pt-5"><h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3><p className="text-sm leading-relaxed text-secondary">{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section aria-labelledby="methodologie-contact-heading" className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div><h2 id="methodologie-contact-heading" className="font-sans text-2xl font-bold tracking-tight text-primary sm:text-3xl">Commençons par votre projet.</h2><Link href="/alliance" className={`mt-4 inline-flex items-center gap-3 text-xs font-semibold text-primary/65 hover:text-primary ${focusStyle}`}>Découvrez les acteurs de notre alliance<ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></Link></div>
          <Link href="/#devis" className={`inline-flex min-h-12 items-center gap-6 bg-primary px-6 py-4 font-secondary text-[10px] font-bold uppercase tracking-wider text-white hover:bg-primary/90 ${focusStyle}`}>Échanger avec notre équipe<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
    </InformationPageLayout>
  );
}
