import Image from 'next/image';
import frames from '@/public/hero-frames/new-hero/manifest.json';
export default function HomeHero() {
    return <section className="v3-hero">
    <Image src={frames.desktop + '/' + frames.files[0]} alt="Bâtiment à façade métallique dans son environnement" fill priority sizes="100vw" className="object-cover"/>
    <div className="v3-hero-shade"/>
    <div className="v3-wrap v3-hero-copy">
    <span className="v3-label">CLADIS Construction · Chambéry</span>
    <h1>Enveloppe du bâtiment<br />et construction métallique</h1>
    <h2>L’exigence technique,<br />au cœur de chaque projet.</h2>
    <p>Bardage, étanchéité et couverture. Depuis Chambéry, nous réalisons vos travaux de façade et de toiture, en neuf comme en rénovation.</p>
    <a className="v3-button light" href="/contact">Parlons de votre projet <span>↗</span>
    </a>
    </div>
    </section>;
}
