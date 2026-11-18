import type { Metadata } from "next";
import { Box, Layers3, PanelsTopLeft, Plus } from "lucide-react";
import Image from "@/components/SiteImage";
import InformationPageLayout from "@/components/InformationPageLayout";
import copy from "@/lib/studies-copy.json";

export const metadata: Metadata = {
  title: "Études et travaux | CLADIS Construction",
  alternates: { canonical: "/etudes-et-travaux" },
};

const disciplineOverviews = [
  { Icon: PanelsTopLeft, summary: "Élévations, calepinage des parements et détails de raccordement." },
  { Icon: Layers3, summary: "Plans de toiture, réservations et évacuation des eaux pluviales." },
  { Icon: Box, summary: "Modélisation 3D et plans de fabrication et de montage." },
];

function StudiesPhoto({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure>
      <div className="v3-studies-photo">
        <Image src={src} alt={alt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1488px) 52vw, 750px" className="object-cover" />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <InformationPageLayout>
      <section className="v3-wrap v3-page-intro">
        <span className="v3-label">Études et travaux</span>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </section>

      <section className="v3-wrap v3-section v3-studies-teams">
        <div className="v3-studies-split">
          <div>
            <span className="v3-label">01 / Nos équipes de pose</span>
            <h2>{copy.teamsTitle}</h2>
            <p>{copy.teams}</p>
          </div>
          <StudiesPhoto
            src="/images/alliance-installation-fb19c46e.webp"
            alt="Deux poseurs alignent un panneau de bardage sur une façade industrielle."
            caption="Pose du bardage métallique sur chantier"
          />
        </div>
      </section>

      <section className="v3-studies-office" aria-labelledby="bureau-etudes">
        <div className="v3-wrap v3-section">
          <div className="v3-studies-office-feature">
            <div className="v3-studies-office-intro">
              <span className="v3-label">02 / Études d’exécution</span>
              <h2 id="bureau-etudes">Notre bureau d’études <em>intégré</em></h2>
              <p>{copy.office}</p>
            </div>
            <StudiesPhoto
              src="/images/methodology-conception-modelisation-b93b0957.webp"
              alt="Un modèle de charpente métallique à l’écran et des plans imprimés sur le bureau."
              caption="Modélisation 3D et plans d’exécution"
            />
          </div>
          <div className="v3-studies-disciplines">
            {copy.disciplines.map(({ title, paragraphs }, index) => {
              const { Icon, summary } = disciplineOverviews[index];
              return (
                <article key={title} className="v3-studies-discipline">
                  <span className="v3-studies-discipline-icon"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <details>
                    <summary aria-label={`Détails des études — ${title}`}>
                      Détails des études <Plus size={17} aria-hidden="true" />
                    </summary>
                    <div className="v3-studies-discipline-content">
                      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </details>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="v3-wrap v3-section">
        <div className="v3-studies-split">
          <div>
            <span className="v3-label">03 / Sur le terrain</span>
            <h2>La préparation et le suivi des chantiers</h2>
          </div>
          <StudiesPhoto
            src="/images/methodology-etude-diagnostic-639c3753.webp"
            alt="Deux personnes en casque et gilet de sécurité examinent un plan devant une façade industrielle."
            caption="Vérification des plans sur site"
          />
        </div>
        <div className="v3-solutions">
          {copy.preparation.map(({ title, paragraphs }) => (
            <article key={title}>
              <h3>{title}</h3>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          ))}
        </div>
      </section>

      <section className="v3-tint">
        <div className="v3-wrap v3-section">
          <div className="v3-studies-split v3-studies-split-reverse">
            <div>
              <span className="v3-label">04 / Une organisation coordonnée</span>
              <h2>Nos services et partenaires</h2>
            </div>
            <StudiesPhoto
              src="/images/alliance-procurement-01b95925.webp"
              alt="Un responsable vérifie des panneaux et des profilés métalliques en entrepôt."
              caption="Contrôle des approvisionnements en entrepôt"
            />
          </div>
          <div className="v3-solutions">
            {copy.partners.map(({ title, text }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="v3-actions">
            <a className="v3-button" href="/realisations">Voir nos réalisations ↗</a>
            <a className="v3-link" href="/contact">Nous contacter ↗</a>
          </div>
        </div>
      </section>
    </InformationPageLayout>
  );
}
