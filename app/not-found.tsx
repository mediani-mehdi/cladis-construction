import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import InformationPageLayout from "@/components/InformationPageLayout";

export default function NotFound() {
  return <InformationPageLayout>
    <section className="v2-not-found"><div className="v2-container"><span className="v2-eyebrow">CLADIS CONSTRUCTION / PAGE INTROUVABLE</span><span className="v2-error-number" aria-hidden="true">404</span><h1>Un détour.<br /><em>Gardons le cap.</em></h1><p>Cette page n’existe pas ou a été déplacée. Retrouvez nos expertises et les projets qui donnent forme à notre savoir-faire.</p><div className="v2-interior-hero-actions"><Link href="/" className="v2-button v2-button-light">Retour à l’accueil<ArrowLeft size={17} /></Link><Link href="/realisations" className="v2-text-link">Découvrir nos réalisations<ArrowUpRight size={17} /></Link></div></div></section>
  </InformationPageLayout>;
}
