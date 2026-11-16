import Image from 'next/image';
import { UsersRound, Ruler, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { METIERS } from '@/lib/metiers-data';
import { PROJECTS } from '@/lib/projects-data';
import copy from '@/lib/home-copy.json';
export default function HomeSections() {
    return <div className="v3-home-content">
    <section id="savoir-faire" tabIndex={-1} className="v3-wrap v3-section">
    <span className="v3-label">Le savoir-faire CLADIS</span>
    <h2>Une solide expérience.<br /><em>De l’enveloppe du bâtiment.</em></h2>
    <div className="v3-three">{copy.knowhow.map(x => <article key={x.title}>
        <h3>{x.title}</h3>
        <p>{x.text}</p>
        </article>)}</div>
    </section>
    <section className="v3-wrap v3-section v3-split">
    <div>
    <span className="v3-label">01 / L’esprit CLADIS</span>
    <h2>Des façades et des toitures pensées pour chaque bâtiment</h2>
    </div>
    <div>
    <p>{copy.spirit}</p>
    <a className="v3-link" href="/l-entreprise">Découvrir l’entreprise ↗</a>
    </div>
    </section>
    <section className="v3-tint">
    <div className="v3-wrap v3-section">
    <span className="v3-label">02 / Nos métiers</span>
    <div className="v3-section-heading">
    <h2>Une enveloppe complète.<br /><em>Chaque détail compte.</em></h2>
    <p>Nous intervenons sur les façades, les toitures et les structures qui les supportent, sur un lot ou sur plusieurs lots coordonnés.</p>
    </div>
    <div className="v3-trades">{METIERS.map(m => <a className="v3-trade" href={'/metiers/' + m.slug} key={m.slug}>
        <span className="v3-label">{m.num}</span>
        <div>
        <h3>{m.shortTitle}</h3>
        <p className="v3-trade-description">{["Simple peau, double peau, panneaux sandwich, cassettes, panneaux composites et profils métalliques.", "Couverture métallique, bac acier, panneaux sandwich et zinc à joint debout.", "Toiture-terrasse, étanchéité PVC et bitumineuse, végétalisation et murs enterrés.", "Ossatures, extensions, renforts et adaptations de structures existantes."][Number(m.num) - 1]}</p>
        </div>
        <span aria-hidden="true">↗</span>
        </a>)}</div>
    <a className="v3-link" href="/metiers">Découvrir nos métiers ↗</a>
    </div>
    </section>
    <section className="v3-wrap v3-section">
    <span className="v3-label">03 / Réalisations à la une</span>
    <div className="v3-section-heading">
    <h2>La preuve,<br /><em>sur le terrain.</em></h2>
    <p>Des contraintes réelles, des réponses qui prennent forme. Découvrez les travaux de bardage, de couverture, d’étanchéité et de charpente réalisés par CLADIS Construction.</p>
    </div>
    <div className="v3-three">{PROJECTS.slice(0, 3).map(p => <a className="v3-project" href={'/realisations/' + p.slug} key={p.slug}>
        <div className="v3-photo">
        <Image src={p.image} alt={p.title} fill sizes="(max-width:700px) 100vw,33vw" className="object-cover"/>
        </div>
        <span className="v3-label">{p.location} · {p.categoryLabel}</span>
        <h3>{p.title} ↗</h3>
        </a>)}</div>
    <a className="v3-link" href="/realisations">Voir toutes les réalisations ↗</a>
    </section>
    <section className="v3-method"><div className="v3-wrap v3-section">
    <span className="v3-label">04 / Notre méthode et nos engagements</span>
    <h2>De l’analyse du projet<br /><em>au contrôle avant livraison.</em></h2>
    <div className="v3-four">{copy.steps.map((s, i) => <article key={s.title}>
        <span className="v3-label">0{i + 1}</span>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        </article>)}</div>
    <a className="v3-link" href="/etudes-et-travaux">Découvrir nos études et travaux ↗</a>
    </div></section>
    <section id="collectif" className="v3-tint v3-collective" aria-labelledby="collective-heading">
      <div className="v3-wrap v3-section v3-collective-layout">
        <figure className="v3-collective-visual">
          <div className="v3-collective-photo">
            <Image src="/images/alliance-installation-fb19c46e.webp"
              alt="Deux poseurs équipés de casques et de gilets contrôlant les raccords d’une façade"
              fill sizes="(max-width: 800px) 100vw, 44vw" className="object-cover" />
            <div className="v3-collective-photo-note v2-glass">
              <span>CLADIS CONSTRUCTION</span>
              <strong>Des études à la pose.</strong>
            </div>
          </div>
          <figcaption>La pose et le contrôle des raccords sur chantier.</figcaption>
        </figure>
        <div className="v3-collective-copy">
          <span className="v3-label">05 / La force du collectif</span>
          <h2 id="collective-heading">Nos points <em>forts.</em></h2>
          <ol className="v3-collective-strengths">
            {copy.strengths.map((strength, index) => {
              const Icon = [UsersRound, Ruler, ClipboardCheck][index];
              return <li key={strength.title}>
                <span className="v3-collective-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.4} /></span>
                <div><h3>{strength.title}</h3><p>{strength.text}</p></div>
              </li>;
            })}
          </ol>
          <a className="v3-link" href="/etudes-et-travaux">D?couvrir nos ?quipes et nos ?tudes <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
    </div>;
}
