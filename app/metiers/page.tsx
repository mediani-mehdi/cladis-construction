import type { Metadata } from 'next';
import Image from "@/components/SiteImage";
import InformationPageLayout from '@/components/InformationPageLayout';
import TradeCards from '@/components/TradeCards';
export const metadata: Metadata = { title: 'Bardage, couverture, étanchéité et charpente | CLADIS', description: 'Les quatre métiers de CLADIS Construction à Chambéry, du bardage de façade à la couverture métallique, l’étanchéité et la charpente acier.', alternates: { canonical: '/metiers' } };
export default function Page() {
    return <InformationPageLayout>
    <section className="v3-wrap v3-page-intro">
    <span className="v3-label">Nos métiers</span>
    <h1>Nos métiers de l’enveloppe du bâtiment</h1>
    <p>Depuis Chambéry, CLADIS Construction étudie et réalise vos travaux de bardage, de couverture métallique, d’étanchéité de toiture-terrasse et de charpente métallique. Nous intervenons en neuf, en rénovation et en extension sur des bâtiments industriels, logistiques et tertiaires, des commerces, des logements collectifs et des équipements publics. Selon le projet, nous prenons en charge un lot ou plusieurs lots coordonnés, de l’étude d’exécution à la réception.</p>
    </section>
    <div className="v3-wrap">
    <figure>
    <div className="v3-wide-photo">
    <Image src="/images/realisations-enveloppe-0e344ed8.webp" alt="Bâtiment d’activité avec façades et toiture" fill priority sizes="100vw" className="object-cover"/>
    </div>
    <figcaption>Façades et toiture d’un bâtiment d’activité.</figcaption>
    </figure>
    </div>
    <section className="v3-wrap v3-section">
    <TradeCards />
    </section>
    </InformationPageLayout>;
}
