import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuotationForm from "@/components/QuotationForm";
import { PROJECTS, getProjectBySlug } from "@/lib/projects-data";
import {
  ChevronRight,
  MapPin,
  Calendar,
  Ruler,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Building2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Related other projects
  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-black selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-36 sm:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-center filter brightness-[0.32] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.22),_transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-construction-blue" />
            <Link href="/realisations" className="hover:text-white transition-colors">
              Nos Réalisations
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-construction-blue" />
            <span className="text-white font-medium">{project.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  {project.categoryLabel} // {project.location}
                </span>
              </div>

              <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] uppercase">
                {project.title}
              </h1>

              <p className="text-sm sm:text-base text-white/85 font-mono font-medium leading-relaxed pt-1 max-w-3xl">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#devis-projet"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-xl transition-colors"
                >
                  <span>Chiffrer un projet similaire</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:0952863156"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-construction-blue" />
                  <span>09 52 86 31 56</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Card */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 border border-white/15 text-xs font-mono space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-construction-blue font-bold border-b border-white/10 pb-2">
                Fiche d'Opération
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Localisation :</span>
                <span className="text-white font-bold">{project.location}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Surface totale :</span>
                <span className="text-white font-bold">{project.surface}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Année de livraison :</span>
                <span className="text-white font-bold">{project.year}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/60">Typologie :</span>
                <span className="text-white font-bold">{project.clientType}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTEXT & PRESENTATION */}
      <section className="py-24 sm:py-28 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  Présentation du Chantier
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
                Une réalisation d'envergure menée de l'étude à la livraison.
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                {project.description}
              </p>

              <div className="p-5 bg-neutral-50 border-l-4 border-construction-blue text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <strong className="block font-mono text-neutral-900 uppercase tracking-wider mb-1">
                  Contexte & Objectifs du Client :
                </strong>
                {project.context}
              </div>

              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-900 block mb-2">
                  Lots Associés Réalisés :
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.associatedLots.map((lot) => (
                    <span
                      key={lot}
                      className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 text-xs font-mono font-bold text-neutral-800"
                    >
                      {lot}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 shadow-swiss-md bg-neutral-100">
                <Image
                  src={project.galleryImages[1] || project.image}
                  alt={`${project.title} - Vue Chantier`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-900 border border-black/10">
                  Chantier Réceptionné Sans Réserve
                </div>
              </div>

              <div className="bg-neutral-50 p-6 border border-neutral-200 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-construction-blue" />
                  <span className="font-mono text-xs uppercase font-bold text-neutral-900 tracking-wider">
                    Garantie & Bureau de Contrôle
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  L'ensemble de l'ouvrage bénéficie de la garantie décennale nominative avec validation préalable des plans d'exécution et du calepinage par les bureaux de contrôle agréés.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CHALLENGES & SOLUTIONS */}
      <section className="py-24 sm:py-28 bg-neutral-50 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Challenges */}
            <div className="bg-white p-8 border border-neutral-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500" />
                <span className="text-xs uppercase tracking-widest font-mono text-neutral-800 font-bold">
                  Contraintes & Défis du Site
                </span>
              </div>
              <h3 className="font-sans text-2xl font-bold text-neutral-900 tracking-tight">
                Les défis techniques relevés
              </h3>
              <ul className="space-y-3 pt-2">
                {project.challenges.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <span className="font-mono text-xs font-bold text-red-500 shrink-0 mt-0.5">0{idx + 1}.</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-white p-8 border border-neutral-200 shadow-sm space-y-4 border-l-4 border-l-construction-blue">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  Ingénierie & Mise en Œuvre Cladis
                </span>
              </div>
              <h3 className="font-sans text-2xl font-bold text-neutral-900 tracking-tight">
                Les solutions apportées
              </h3>
              <ul className="space-y-3 pt-2">
                {project.solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-construction-blue shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TECHNICAL DETAILS SPEC TABLE */}
      <section className="py-24 sm:py-28 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
              Données Techniques Exécutées
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Fiche technique détaillée de l'ouvrage
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Détail des composants, complexes isolants, membranes d'étanchéité et structures mis en œuvre par nos équipes.
            </p>
          </div>

          <div className="border border-neutral-200 overflow-hidden shadow-sm max-w-4xl">
            <table className="w-full text-left text-xs">
              <tbody className="divide-y divide-neutral-200">
                {project.technicalDetails.map((td) => (
                  <tr key={td.label} className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4 font-mono font-bold text-neutral-800 bg-neutral-50/50 w-2/5 border-r border-neutral-200">
                      {td.label}
                    </td>
                    <td className="p-4 text-neutral-700 font-medium">
                      {td.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      {project.galleryImages && project.galleryImages.length > 1 && (
        <section className="py-24 sm:py-28 bg-neutral-50 border-b border-black/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
                Portfolio Visuel
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                Vues du chantier & finitions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] w-full overflow-hidden border border-neutral-200 shadow-sm group">
                  <Image
                    src={img}
                    alt={`${project.title} - Photo ${i + 1}`}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. OTHER RELATED PROJECTS */}
      <section className="py-20 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
                Autres Références
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                Découvrez d'autres réalisations
              </h2>
            </div>
            <Link
              href="/realisations"
              className="text-xs font-mono font-bold uppercase tracking-wider text-construction-blue hover:underline inline-flex items-center gap-1.5"
            >
              <span>Voir tout le portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                href={`/realisations/${rel.slug}`}
                className="group bg-white border border-neutral-200 p-6 shadow-sm hover:border-construction-blue hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-construction-blue font-bold uppercase">
                    {rel.categoryLabel}
                  </span>
                  <h3 className="font-sans text-base font-bold text-neutral-900 tracking-tight mt-1 group-hover:text-construction-blue transition-colors">
                    {rel.title}
                  </h3>
                  <div className="text-[11px] font-mono text-neutral-500 mt-1">
                    {rel.location} • {rel.surface}
                  </div>
                  <p className="text-xs text-neutral-600 line-clamp-2 mt-2 leading-relaxed">
                    {rel.description}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-mono font-bold text-neutral-800 group-hover:text-construction-blue transition-colors">
                  <span>Consulter la fiche</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 7. QUOTATION FORM PRE-FILLED */}
      <div id="devis-projet">
        <QuotationForm
          preFillData={{
            buildingType: project.clientType,
            surface: parseInt(project.surface.replace(/\D/g, "")) || 3500,
            hasCharpente: project.category === "charpente" || project.category === "complexe",
            bardageType: project.category === "bardage" || project.category === "complexe" ? "Bardage Métallique" : undefined,
            toitureType: project.category === "couverture" || project.category === "complexe" ? "Couverture & Étanchéité" : undefined,
          }}
        />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}

