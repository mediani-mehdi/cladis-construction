import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuotationForm from "@/components/QuotationForm";
import { METIERS, getMetierBySlug } from "@/lib/metiers-data";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Download,
  Phone,
  Layers,
  HelpCircle,
} from "lucide-react";

interface MetierPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return METIERS.map((m) => ({
    slug: m.slug,
  }));
}

export default function MetierDetailPage({ params }: MetierPageProps) {
  const metier = getMetierBySlug(params.slug);

  if (!metier) {
    notFound();
  }

  // Related other métiers (exclude current)
  const relatedMetiers = METIERS.filter((m) => m.slug !== metier.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-black selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="relative pt-36 sm:pt-44 pb-20 bg-black text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src={metier.heroImage}
            alt={metier.title}
            fill
            priority
            className="object-cover object-center filter brightness-[0.3] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.22),_transparent_70%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-construction-blue" />
            <Link href="/metiers" className="hover:text-white transition-colors">
              Nos Métiers
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-construction-blue" />
            <span className="text-white font-medium">{metier.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  LOT {metier.num} // {metier.subtitle}
                </span>
              </div>

              <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] uppercase">
                {metier.title}
              </h1>

              <p className="text-sm sm:text-base text-white/85 font-mono font-medium leading-relaxed pt-1 max-w-3xl">
                {metier.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#devis-lot"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-construction-blue hover:bg-construction-blueDark text-white font-mono text-xs uppercase tracking-widest font-bold shadow-xl transition-colors"
                >
                  <span>Chiffrer ce lot</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:0952863156"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-construction-blue" />
                  <span>Étude technique : 09 52 86 31 56</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Badge */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 border border-white/15 text-xs font-mono space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-construction-blue font-bold border-b border-white/10 pb-2">
                Fiche d'Identité Technique
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Normes DTU :</span>
                <span className="text-white font-bold">{metier.norms[0]}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Garantie :</span>
                <span className="text-white font-bold">Décennale 10 ans</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-white/60">Zone d'intervention :</span>
                <span className="text-white font-bold">Auvergne-Rhône-Alpes</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-white/60">Bureau d'études :</span>
                <span className="text-white font-bold">Intégré (Tekla / BIM)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & INDUSTRIAL CONTEXT */}
      <section className="py-24 sm:py-28 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  Présentation Technique & Contexte
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
                Une conception et une pose pensées pour la haute durabilité.
              </h2>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                {metier.fullDesc}
              </p>

              <div className="p-5 bg-neutral-50 border-l-4 border-construction-blue text-xs sm:text-sm text-neutral-700 leading-relaxed">
                <strong className="block font-mono text-neutral-900 uppercase tracking-wider mb-1">
                  Exigence Environnementale & Régionale :
                </strong>
                {metier.industrialContext}
              </div>

              <div className="space-y-3 pt-2">
                <div className="font-mono text-xs uppercase tracking-wider font-bold text-neutral-900">
                  Points Forts & Engagements sur ce Lot :
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {metier.advantages.map((adv) => (
                    <div key={adv} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-construction-blue shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-black/10 shadow-swiss-md bg-neutral-100">
                <Image
                  src={metier.galleryImages[1] || metier.heroImage}
                  alt={`${metier.title} - Chantier CLADIS`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-900 border border-black/10">
                  Exécution Certifiée
                </div>
              </div>

              <div className="bg-neutral-50 p-6 border border-neutral-200 space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-construction-blue" />
                  <span className="font-mono text-xs uppercase font-bold text-neutral-900 tracking-wider">
                    Contrôles & Réception de Chantier
                  </span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Tous nos ouvrages sont soumis à des contrôles stricts : vérification de couple de serrage, essais d'arrachement de fixations, tests d'étanchéité par fumigène ou mise en eau, et remise du Dossier des Ouvrages Exécutés (DOE).
                </p>
                <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-700">
                  <span>Assurance décennale :</span>
                  <span className="font-bold text-neutral-900">100% Inclus</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SOLUTIONS GRID */}
      <section className="py-24 sm:py-28 bg-neutral-50 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
              Procédés Constructifs
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
              Nos Solutions Déployées sur ce Lot
            </h2>
            <p className="text-sm text-neutral-600">
              Des systèmes éprouvés, sélectionnés auprès des plus grands fabricants européens pour répondre à vos exigences de budget, d'esthétique et de résistance thermique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metier.solutions.map((sol, idx) => (
              <div
                key={sol.title}
                className="bg-white border border-neutral-200 p-7 shadow-sm hover:border-construction-blue hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-construction-blue">
                      0{idx + 1} // SYSTÈME
                    </span>
                    <Wrench className="w-4 h-4 text-neutral-400 group-hover:text-construction-blue transition-colors" />
                  </div>

                  <h3 className="font-sans text-lg font-bold text-neutral-900 tracking-tight">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {sol.description}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-neutral-100">
                    {sol.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-neutral-700">
                        <span className="w-1.5 h-1.5 bg-construction-blue rounded-full shrink-0 mt-1.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-0 group-hover:w-full h-[2px] bg-construction-blue transition-all duration-300 mt-6" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SPECIFICATIONS & APPLICATIONS TABLE */}
      <section className="py-24 sm:py-28 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Specs Table */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  Fiche Technique & Données d'Ingénierie
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                Spécifications et performances
              </h2>

              <div className="border border-neutral-200 overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs">
                  <tbody className="divide-y divide-neutral-200">
                    {metier.specs.map((sp) => (
                      <tr key={sp.label} className="hover:bg-neutral-50 transition-colors">
                        <td className="p-4 font-mono font-bold text-neutral-800 bg-neutral-50/50 w-2/5 border-r border-neutral-200">
                          {sp.label}
                        </td>
                        <td className="p-4 text-neutral-700 font-medium">
                          {sp.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-2 pt-2">
                <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Normes de Référence & Cadre Réglementaire :
                </div>
                <div className="flex flex-wrap gap-2">
                  {metier.norms.map((norm) => (
                    <span
                      key={norm}
                      className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700"
                    >
                      {norm}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Applications list */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-construction-blue" />
                <span className="text-xs uppercase tracking-widest font-mono text-construction-blue font-bold">
                  Domaines d'Application
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                Bâtiments cibles
              </h3>

              <div className="space-y-3">
                {metier.applications.map((app) => (
                  <div
                    key={app}
                    className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3 hover:bg-white hover:border-construction-blue transition-colors group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-construction-blue shrink-0" />
                    <span className="font-mono text-xs font-bold text-neutral-800 group-hover:text-construction-blue transition-colors">
                      {app}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-black text-white p-6 border border-white/15 space-y-3">
                <div className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
                  Étude Personnalisée Gratuite
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Vous avez un projet atypique ou des contraintes spécifiques de site ? Notre bureau d'études dimensionne votre solution sur mesure.
                </p>
                <a
                  href="#devis-lot"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-construction-blue transition-colors pt-1"
                >
                  <span>Transmettre un DCE / Cahier des charges</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY / PROTOCOLE DE POSE */}
      <section className="py-24 sm:py-28 bg-neutral-50 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
              Protocole d'Exécution
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
              Notre Méthode de Réalisation en 4 Étapes
            </h2>
            <p className="text-sm text-neutral-600">
              Chaque chantier est piloté avec une rigueur absolue pour garantir le respect strict des plannings, la sécurité des compagnons et une finition irréprochable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metier.methodologySteps.map((step) => (
              <div
                key={step.title}
                className="bg-white p-6 border border-neutral-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-construction-blue uppercase tracking-wider">
                    {step.title.split(".")[0]} // ÉTAPE
                  </div>
                  <h3 className="font-sans text-base font-bold text-neutral-900 tracking-tight mt-1">
                    {step.title.split(".")[1]}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>
                <div className="w-8 h-[2px] bg-construction-blue mt-4" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FAQ SECTION */}
      {metier.faqs && metier.faqs.length > 0 && (
        <section className="py-24 sm:py-28 bg-white border-b border-black/8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
                Questions Fréquentes
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                Foire aux Questions Techniques
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600">
                Les réponses de nos ingénieurs aux interrogations courantes sur ce lot.
              </p>
            </div>

            <div className="space-y-4">
              {metier.faqs.map((faq) => (
                <div key={faq.question} className="bg-neutral-50 p-6 border border-neutral-200 space-y-2">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-construction-blue shrink-0 mt-0.5" />
                    <h3 className="font-sans font-bold text-sm text-neutral-900 tracking-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 7. CROSS-LINKING TO OTHER METIERS */}
      <section className="py-20 bg-neutral-50 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-construction-blue font-bold">
                Lots Complémentaires
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                Découvrez nos autres expertises
              </h2>
            </div>
            <Link
              href="/metiers"
              className="text-xs font-mono font-bold uppercase tracking-wider text-construction-blue hover:underline inline-flex items-center gap-1.5"
            >
              <span>Voir les 6 lots</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedMetiers.map((rel) => (
              <Link
                key={rel.slug}
                href={`/metiers/${rel.slug}`}
                className="group bg-white border border-neutral-200 p-6 shadow-sm hover:border-construction-blue hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-construction-blue font-bold uppercase">
                    LOT {rel.num}
                  </span>
                  <h3 className="font-sans text-base font-bold text-neutral-900 tracking-tight mt-1 group-hover:text-construction-blue transition-colors">
                    {rel.shortTitle}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 mt-2 leading-relaxed">
                    {rel.shortDesc}
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

      {/* 8. QUOTATION FORM FOR THIS SPECIFIC LOT */}
      <div id="devis-lot">
        <QuotationForm
          preFillData={{
            buildingType: "Industriel",
            surface: 2500,
            bardageType: metier.preFillFormKey === "bardage" ? metier.shortTitle : undefined,
            toitureType: metier.preFillFormKey === "couverture" ? metier.shortTitle : undefined,
            hasCharpente: metier.preFillFormKey === "charpente",
          }}
        />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}

