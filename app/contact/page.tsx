import type { Metadata } from 'next';
import { statSync } from 'node:fs';
import path from 'node:path';
import InformationPageLayout from '@/components/InformationPageLayout';
import ContactWorkspace from '@/components/ContactWorkspace';

export const metadata: Metadata = {
  title: 'Contact et demande de devis | CLADIS Construction',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  const size = (statSync(path.join(process.cwd(), 'public/catalogue-cladis-2026.pdf')).size / 1024 / 1024)
    .toFixed(1).replace('.', ',');
  return <InformationPageLayout>
    <div className="contact-page">
      <section className="v3-wrap v3-page-intro contact-intro">
        <span className="v3-label">Contact · CLADIS Construction</span>
        <h1>Parlons de <em>votre projet.</em></h1>
        <p>Un chantier de façade, de toiture ou de charpente ?<br />Présentez-nous votre projet ou transmettez votre dossier.</p>
      </section>
      <ContactWorkspace catalogueSize={size} />
    </div>
  </InformationPageLayout>;
}
