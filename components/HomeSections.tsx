"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Plus, Minus, Layers3, Ruler, HardHat, PackageCheck } from "lucide-react";
import { METIERS } from "@/lib/metiers-data";
import { PROJECTS } from "@/lib/projects-data";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

const steps = [
  { icon: Ruler, title: "Comprendre & concevoir", text: "Un bureau d’études intégré pour traduire vos contraintes en solutions techniques précises.", tag: "ÉTUDES & CONCEPTION" },
  { icon: Layers3, title: "Choisir & préparer", text: "Des matériaux sélectionnés et un approvisionnement coordonné pour un chantier maîtrisé.", tag: "MATÉRIAUX & LOGISTIQUE" },
  { icon: HardHat, title: "Construire & coordonner", text: "Des équipes de pose mobilisées, un interlocuteur dédié et une attention constante aux interfaces.", tag: "RÉALISATION & PILOTAGE" },
  { icon: PackageCheck, title: "Vérifier & transmettre", text: "Des contrôles jusqu’aux finitions, une réception accompagnée et les documents de votre ouvrage.", tag: "LIVRAISON & RÉCEPTION" },
];

export default function HomeSections() {
  const [activeService, setActiveService] = useState(0);
  const [projectFilter, setProjectFilter] = useState("Tous");
  const filters = [{ label: "Tous", value: "Tous" }, { label: "Bardage", value: "bardage" }, { label: "Couverture", value: "couverture" }, { label: "Charpente", value: "charpente" }];
  const projects = projectFilter === "Tous" ? PROJECTS.slice(0, 3) : PROJECTS.filter((p) => p.category === projectFilter);
  const active = METIERS[activeService];

  return <>
    <section id="introduction" className="v2-intro v2-container">
      <Reveal className="v2-section-top"><span className="v2-eyebrow">01 / L’ESPRIT CLADIS</span><span className="v2-small-note">L’EXIGENCE, PAR NATURE.</span></Reveal>
      <Reveal className="v2-intro-grid"><div><h2>De la structure<br />à la signature<br /><em>architecturale.</em></h2><a href="/l-entreprise" className="v2-text-link">Rencontrer Cladis <ArrowUpRight size={18} /></a></div><div className="v2-intro-right"><p className="v2-lead">Nous donnons à vos bâtiments<br />une enveloppe à la hauteur<br />de ce qu’ils abritent.</p><p>Depuis Chambéry, Cladis Construction accompagne les projets industriels, logistiques et tertiaires. Nous réunissons l’ingénierie, les matériaux et le savoir-faire de terrain pour construire des ouvrages cohérents, durables et singuliers.</p><div className="v2-intro-facts"><div><strong>06</strong><span>expertises complémentaires</span></div><div><strong>01</strong><span>interlocuteur pour votre projet</span></div></div></div></Reveal>
      <Reveal className="v2-intro-image"><Image src="/images/high-quality/about-building.jpg" alt="Façade contemporaine d’un bâtiment industriel, bardage métallique et lignes architecturales" fill sizes="(max-width: 700px) 100vw, 90vw" /><div className="v2-image-caption v2-glass"><span>LA TECHNIQUE AU SERVICE DE L’ARCHITECTURE</span><ArrowUpRight size={22} /></div><span className="v2-image-index">CLADIS — CONCEPTION / RÉALISATION</span></Reveal>
    </section>

    <section id="expertises" className="v2-expertise">
      <div className="v2-container"><Reveal className="v2-section-top"><span className="v2-eyebrow">02 / NOS EXPERTISES</span><a href="/metiers" className="v2-text-link">Tous nos métiers <ArrowUpRight size={17} /></a></Reveal>
        <Reveal className="v2-section-heading"><h2>Une enveloppe complète.<br /><em>Chaque détail compte.</em></h2><p>Six savoir-faire qui se répondent.<br />Une même exigence de réalisation.</p></Reveal>
        <div className="v2-expertise-grid"><Reveal className="v2-service-image"><Image key={active.slug} src={`/images/high-quality/metier-${active.slug}.png`} alt={active.shortTitle} fill sizes="(max-width: 800px) 100vw, 45vw" /><div className="v2-service-image-label v2-glass"><span>SAVOIR-FAIRE / {active.num}</span><h3>{active.shortTitle}</h3><a href={`/metiers/${active.slug}`} className="v2-round-icon" aria-label={`Découvrir ${active.shortTitle}`}><ArrowUpRight size={21} /></a></div></Reveal>
          <div className="v2-service-list">{METIERS.map((service, index) => <div key={service.slug} className={`v2-service ${activeService === index ? "is-active" : ""}`}><button id={`service-trigger-${index}`} onClick={() => setActiveService(index)} aria-expanded={activeService === index} aria-controls={`service-panel-${index}`}><span className="v2-service-number">{service.num}</span><span>{service.shortTitle}</span>{activeService === index ? <Minus size={19} /> : <Plus size={19} />}</button><div id={`service-panel-${index}`} role="region" aria-labelledby={`service-trigger-${index}`} hidden={activeService !== index}><p>{service.shortDesc}</p><a href={`/metiers/${service.slug}`} className="v2-text-link">Explorer cette expertise <ArrowUpRight size={16} /></a></div></div>)}</div>
        </div>
      </div>
    </section>

    <section id="realisations" className="v2-projects v2-container">
      <Reveal className="v2-section-top"><span className="v2-eyebrow">03 / RÉALISATIONS CHOISIES</span><a href="/realisations" className="v2-text-link">Tous les projets <ArrowUpRight size={17} /></a></Reveal>
      <Reveal className="v2-section-heading"><h2>La preuve,<br /><em>sur le terrain.</em></h2><p>Des contraintes réelles.<br />Des réponses qui prennent forme.</p></Reveal>
      <div className="v2-project-filters" role="group" aria-label="Filtrer les réalisations">{filters.map((filter) => <button key={filter.value} onClick={() => setProjectFilter(filter.value)} aria-pressed={projectFilter === filter.value} className={projectFilter === filter.value ? "is-active" : ""}>{filter.label}{filter.value === "Tous" && <span>0{PROJECTS.length}</span>}</button>)}</div>
      <div className="v2-project-grid" aria-live="polite">{projects.map((project, index) => <a key={project.id} href={`/realisations/${project.slug}`} className={`v2-project-card ${index === 0 ? "v2-project-featured" : ""}`}><div className="v2-project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 60vw" /><span className="v2-project-tag v2-glass">{project.categoryLabel}</span><span className="v2-project-arrow v2-glass"><ArrowUpRight size={23} /></span><div className="v2-project-image-footer"><span>{project.location}</span><span>{project.surface} / {project.year}</span></div></div><div className="v2-project-title"><h3>{project.title}</h3><span>0{PROJECTS.indexOf(project) + 1}</span></div></a>)}</div>
    </section>

    <section className="v2-method" id="approche"><div className="v2-container"><Reveal className="v2-section-top"><span className="v2-eyebrow">04 / UNE MÉTHODE, UN ENGAGEMENT</span><a href="/methodologie" className="v2-text-link">Notre méthodologie <ArrowUpRight size={17} /></a></Reveal><Reveal className="v2-section-heading"><h2>Maîtriser chaque étape.<br /><em>Tenir le cap, ensemble.</em></h2><p>Un projet réussi commence par une vision claire.<br />Et se construit dans la continuité.</p></Reveal><div className="v2-steps">{steps.map((step, index) => <Reveal key={step.title} className="v2-step"><div className="v2-step-top"><step.icon size={27} strokeWidth={1.2} /><span>0{index + 1}</span></div><span className="v2-step-tag">{step.tag}</span><h3>{step.title}</h3><p>{step.text}</p></Reveal>)}</div></div></section>

    <section className="v2-alliance v2-container"><Reveal className="v2-alliance-visual"><Image src="/images/high-quality/alliance-installation.png" alt="Équipe spécialisée dans la pose et la réalisation de l’enveloppe du bâtiment" fill sizes="(max-width: 800px) 100vw, 50vw" /><div className="v2-alliance-badge v2-glass"><span>CLADIS</span><Plus size={17} /><span>BUILDING SERVICES</span></div></Reveal><Reveal className="v2-alliance-copy"><span className="v2-eyebrow">05 / LA FORCE DU COLLECTIF</span><h2>Des expertises unies.<br /><em>Un projet maîtrisé.</em></h2><p>Cladis Construction, Building Services et notre filiale d’achat associent leurs forces. De l’étude à la pose, une chaîne de compétences coordonnée pour donner à votre projet toute sa dimension.</p><a href="/alliance" className="v2-text-link">Découvrir notre alliance <ArrowUpRight size={18} /></a><div className="v2-alliance-signature"><span>CONCEVOIR</span><ArrowRight size={14} /><span>APPROVISIONNER</span><ArrowRight size={14} /><span>CONSTRUIRE</span></div></Reveal></section>

    <section className="v2-project-invitation"><div className="v2-container"><Reveal><span className="v2-eyebrow">ET SI ON CONSTRUISAIT LA SUITE ?</span><h2>Votre idée.<br /><em>Notre prochain projet.</em></h2><div className="v2-invitation-bottom"><p>Une construction, une rénovation, une ambition ?<br />Donnons ensemble une première forme à votre projet.</p><a href="#configurateur" className="v2-button v2-button-light">Configurer mon bâtiment <ArrowDown size={18} /></a><a href="#devis" className="v2-text-link">Échanger avec notre équipe <ArrowUpRight size={18} /></a></div></Reveal></div></section>
  </>;
}
