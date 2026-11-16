import type { Metadata } from 'next';
import { statSync } from 'node:fs';
import path from 'node:path';
import InformationPageLayout from '@/components/InformationPageLayout';
import ContactProject from '@/components/ContactProject';
export const metadata: Metadata = { title: 'Contact et demande de devis | CLADIS Construction', alternates: { canonical: '/contact' } };
export default function Page() {
    const size = (statSync(path.join(process.cwd(), 'public/catalogue-cladis-2026.pdf')).size / 1024 / 1024).toFixed(1).replace('.', ',');
    return <InformationPageLayout>
    <section className="v3-wrap v3-page-intro">
    <span className="v3-label">Contact</span>
    <h1>Parlons de votre projet</h1>
    <p>Vous préparez des travaux de bardage, de couverture métallique, d’étanchéité de toiture-terrasse ou de charpente métallique ? Présentez-nous votre chantier ou transmettez directement vos plans et votre dossier de consultation. Notre équipe vous recontactera après examen de votre demande.</p>
    <div className="v3-actions">
    <a className="v3-button" href="#devis">Demander un devis ↗</a>
    <a className="v3-link" href="#configurateur">Configurer mon projet ↓</a>
    <a className="v3-link" href="/catalogue-cladis-2026.pdf" download>Télécharger le catalogue ↓</a>
    </div>
    </section>
    <section className="v3-wrap v3-section v3-contact-details">
    <div>
    <span className="v3-label">Coordonnées</span>
    <h2>Contacter CLADIS Construction</h2>
    <p>Notre équipe basée à Chambéry répond à vos questions et vous oriente selon la nature de votre projet. Nous intervenons principalement en Savoie, Haute-Savoie, Isère, Ain et Rhône.</p>
    </div>
    <address>
    <a className="v3-link" href="tel:0952863156">09 52 86 31 56</a>
    <a href="mailto:contact@cladisbardage.com">contact@cladisbardage.com</a>
    <p>74 rue de la Révériaz<br />73000 Chambéry, France</p>
    <p>Lundi – Vendredi · 8h00 – 18h00</p>
    </address>
    </section>
    <section id="catalogue" className="v3-wrap v3-section v3-split">
    <div>
    <span className="v3-label">Catalogue et documents</span>
    <h2>Télécharger notre catalogue</h2>
    </div>
    <div>
    <p>Retrouvez nos métiers, les solutions que nous mettons en œuvre et une sélection de réalisations CLADIS Construction.</p>
    <a className="v3-button" href="/catalogue-cladis-2026.pdf" download>Télécharger le catalogue CLADIS (PDF) ↓</a>
    <p style={{ marginTop: 12 }}>PDF · {size} Mo</p>
    <p>Les documents propres à une consultation peuvent être transmis sur demande.</p>
    </div>
    </section>
    <ContactProject />
    </InformationPageLayout>;
}
