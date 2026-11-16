import type { Metadata } from 'next';
import Image from 'next/image';
import InformationPageLayout from '@/components/InformationPageLayout';
import copy from '@/lib/studies-copy.json';
export const metadata: Metadata = { title: 'Études et travaux | CLADIS Construction', alternates: { canonical: '/etudes-et-travaux' } };
export default function Page() {
    return <InformationPageLayout>
    <section className="v3-wrap v3-page-intro">
    <span className="v3-label">Études et travaux</span>
    <h1>{copy.title}</h1>
    <p>{copy.intro}</p>
    </section>
    <div className="v3-wrap">
    <figure>
    <div className="v3-wide-photo">
    <Image src="/images/alliance-installation-fb19c46e.webp" alt="Équipe de pose intervenant sur le chantier" fill priority sizes="100vw" className="object-cover"/>
    </div>
    <figcaption>La préparation et la pose sur chantier.</figcaption>
    </figure>
    </div>
    <section className="v3-wrap v3-section v3-prose">
    <span className="v3-label">01 / Nos équipes de pose</span>
    <h2>{copy.teamsTitle}</h2>
    <p>{copy.teams}</p>
    </section>
    <section className="v3-tint">
    <div className="v3-wrap v3-section">
    <span className="v3-label">02 / Études d’exécution</span>
    <h2>Notre bureau d’études intégré</h2>
    <p className="v3-lead">{copy.office}</p>
    <div className="v3-solutions">{copy.disciplines.map(x => <article key={x.title}>
        <h3>{x.title}</h3>{x.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div>
    </div>
    </section>
    <section className="v3-wrap v3-section">
    <span className="v3-label">03 / Sur le terrain</span>
    <h2>La préparation et le suivi des chantiers</h2>
    <div className="v3-solutions">{copy.preparation.map(x => <article key={x.title}>
        <h3>{x.title}</h3>{x.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div>
    </section>
    <section className="v3-wrap v3-section">
    <span className="v3-label">04 / Une organisation coordonnée</span>
    <h2>Nos services et partenaires</h2>
    <div className="v3-solutions">{copy.partners.map(x => <article key={x.title}>
        <h3>{x.title}</h3>
        <p>{x.text}</p>
        </article>)}</div>
    <div className="v3-actions">
    <a className="v3-button" href="/realisations">Voir nos réalisations ↗</a>
    <a className="v3-link" href="/contact">Nous contacter ↗</a>
    </div>
    </section>
    </InformationPageLayout>;
}
