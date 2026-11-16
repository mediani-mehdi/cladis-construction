import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import InformationPageLayout from '@/components/InformationPageLayout';
import TradeCards from '@/components/TradeCards';
import { METIERS, getMetierBySlug } from '@/lib/metiers-data';
type Props = {
    params: Promise<{
        slug: string;
    }>;
};
export function generateStaticParams() { return METIERS.map(m => ({ slug: m.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const m = getMetierBySlug((await params).slug); return m ? { title: m.seoTitle, description: m.seoDescription, alternates: { canonical: '/metiers/' + m.slug } } : {}; }
export default async function Page({ params }: Props) {
    const m = getMetierBySlug((await params).slug);
    if (!m)
        notFound();
    return <InformationPageLayout>
    <section className="v3-wrap v3-page-intro">
    <a className="v3-label" href="/metiers">← Nos métiers / {m.num}</a>
    <h1>{m.title}</h1>
    <p>{m.fullDesc}</p>{m.slug === 'couverture-metallique' && <a className="v3-link" href="/metiers/etancheite-toiture-terrasse">Découvrir aussi nos travaux d’étanchéité de toiture-terrasse ↗</a>}</section>
    <div className="v3-wrap">
    <figure>
    <div className="v3-wide-photo">
    <Image src={m.heroImage} alt={m.imageAlt} fill priority sizes="100vw" className="object-cover"/>
    </div>
    <figcaption>{m.imageAlt}</figcaption>
    </figure>
    </div>
    <section className="v3-wrap v3-section">
    <span className="v3-label">Les systèmes mis en œuvre</span>
    <h2>Nos solutions</h2>
    <div className="v3-solutions">{m.solutions.map(s => <article key={s.title}>
        <h3>{s.title}</h3>
        <p>{s.description}</p>
        </article>)}</div>
    </section>{m.slug === 'bardage-metallique' && <section className="v3-wrap v3-section">
        <h2>Des parements adaptés à chaque façade</h2>
        <div className="v3-three">{[{ src: '/images/metier-bardage-specifique-7a7c34f6.webp', caption: 'Panneaux de façade et habillage métallique perforé' }, { src: '/images/about-company-woodland-d9a52e11.webp', caption: 'Habillage bois autour d’une baie en façade' }].map(photo => <figure key={photo.src}>
            <div className="v3-photo">
            <Image src={photo.src} alt={photo.caption} fill sizes="(max-width:700px) 100vw,40vw" className="object-cover"/>
            </div>
            <figcaption>{photo.caption}</figcaption>
            </figure>)}</div>
        </section>}<section className="v3-tint">
    <div className="v3-wrap v3-section v3-prose">
    <h2>{m.normHeading}</h2>{m.norms.map(n => <p key={n}>{n}</p>)}{m.industrialContext && <>
        <h3>Nos exigences environnementales</h3>
        <p>{m.industrialContext}</p>
        </>}{m.applications.length > 0 && <>
        <h3>Domaines d’application</h3>{m.applications.map(a => <p key={a}>{a}</p>)}</>}</div>
    </section>
    <section className="v3-wrap v3-section">
    <h2>Notre méthode en quatre étapes</h2>
    <div className="v3-four">{m.methodologySteps.map((s, i) => <article key={s.title}>
        <span className="v3-label">0{i + 1}</span>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
        </article>)}</div>
    </section>
    <section className="v3-wrap v3-section">
    <h2>Découvrez aussi nos autres métiers</h2>
    <TradeCards exclude={m.slug}/>
    </section>
    </InformationPageLayout>;
}
