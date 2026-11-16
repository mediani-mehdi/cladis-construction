"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import { ArrowDownToLine, ArrowUpRight, FileText, SlidersHorizontal, Send } from 'lucide-react';
import ContactProject from '@/components/ContactProject';

type Section = 'devis' | 'configurateur' | 'catalogue';
const sections = [
  { id: 'devis' as const, title: 'Demander un devis', description: 'Présentez votre chantier.', icon: Send },
  { id: 'configurateur' as const, title: 'Préparer mon projet', description: 'Précisez vos besoins.', icon: SlidersHorizontal },
  { id: 'catalogue' as const, title: 'Notre catalogue', description: 'Découvrez nos solutions.', icon: FileText },
];

export default function ContactWorkspace({ catalogueSize }: { catalogueSize: string }) {
  const [selected, setSelected] = useState<Section>('devis');
  const tabs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.slice(1);
      if (sections.some(section => section.id === hash)) setSelected(hash as Section);
    };
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);

  function select(section: Section) {
    setSelected(section);
    window.history.replaceState(null, '', '#' + section);
  }

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % sections.length;
    else if (event.key === 'ArrowLeft') next = (index + sections.length - 1) % sections.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = sections.length - 1;
    else return;
    event.preventDefault();
    select(sections[next].id);
    tabs.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return <div className="v3-wrap contact-workspace">
    <div ref={tabs} className="contact-section-cards" role="tablist" aria-label="Choisir une rubrique de contact">
      {sections.map((section, index) => <button key={section.id} type="button" role="tab"
        id={'tab-' + section.id} aria-controls={section.id} aria-selected={selected === section.id}
        tabIndex={selected === section.id ? 0 : -1} onClick={() => select(section.id)}
        onKeyDown={event => navigateTabs(event, index)} className="contact-section-card">
        <section.icon size={20} strokeWidth={1.5} aria-hidden="true" />
        <span><strong>{section.title}</strong><small>{section.description}</small></span>
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>)}
    </div>
    <div className="contact-layout">
      <aside className="contact-info-card" aria-labelledby="contact-info-title">
        <span className="v3-label">À votre écoute</span>
        <h2 id="contact-info-title">Un projet ?<br /><em>Échangeons.</em></h2>
        <address>
          <a className="contact-phone" href="tel:0952863156">09 52 86 31 56</a>
          <a className="contact-email" href="mailto:contact@cladisbardage.com">contact@cladisbardage.com <ArrowUpRight size={14} aria-hidden="true" /></a>
          <p>74 rue de la Révériaz<br />73000 Chambéry, France</p>
          <p>Lundi – Vendredi<br />8h00 – 18h00</p>
        </address>
        <div className="contact-area"><span className="v3-label">Notre zone d’intervention</span>
          <p>Savoie, Haute-Savoie, Isère, Ain et Rhône.</p>
        </div>
      </aside>
      <div className="contact-content-card">
        <ContactProject selected={selected} onSelect={select} />
        <section id="catalogue" className="contact-panel contact-catalogue" role="tabpanel"
          aria-labelledby="tab-catalogue" hidden={selected !== 'catalogue'}>
          <div>
            <span className="v3-label">Catalogue et documents</span>
            <h2>Télécharger notre catalogue</h2>
            <p>Retrouvez nos métiers, les solutions que nous mettons en œuvre et une sélection de réalisations CLADIS Construction.</p>
            <a className="v3-button" href="/catalogue-cladis-2026.pdf" download>Télécharger le catalogue CLADIS <ArrowDownToLine size={17} aria-hidden="true" /></a>
            <small>PDF · {catalogueSize} Mo</small>
            <p className="contact-document-note">Les documents propres à une consultation peuvent être transmis sur demande.</p>
          </div>
          <div className="contact-catalogue-cover"><Image src="/images/catalogue-cover-faed49b8.webp" alt="Couverture du catalogue CLADIS 2026" width={200} height={280} className="object-contain" /></div>
        </section>
      </div>
    </div>
  </div>;
}
