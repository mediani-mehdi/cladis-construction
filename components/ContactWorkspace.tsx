"use client";

import { useEffect, useState } from 'react';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import ContactProject from '@/components/ContactProject';
import { CATALOGUE_URL } from '@/lib/site-navigation';

export default function ContactWorkspace({ catalogueSize }: { catalogueSize: string }) {
  const [configOpen, setConfigOpen] = useState(false);
  useEffect(() => {
    const readHash = () => { if (window.location.hash === '#configurateur') setConfigOpen(true); };
    readHash();
    window.addEventListener('hashchange', readHash);
    return () => window.removeEventListener('hashchange', readHash);
  }, []);

  return <div className="v3-wrap contact-workspace">
    <nav className="contact-shortcuts" aria-label="Accès directs">
      <a className="v3-button" href="#devis">Demander un devis <ArrowUpRight size={17} aria-hidden="true" /></a>
      <a className="contact-simple-link" href="#configurateur" onClick={() => setConfigOpen(true)}>Configurer mon projet <ArrowUpRight size={16} aria-hidden="true" /></a>
      <a className="contact-simple-link" href={CATALOGUE_URL} download>Télécharger le catalogue <ArrowDownToLine size={16} aria-hidden="true" /></a>
    </nav>
    <section className="contact-coordinates" aria-labelledby="contact-info-title">
      <div><h2 id="contact-info-title">Contacter CLADIS Construction</h2>
      <p>Notre équipe basée à Chambéry répond à vos questions et vous oriente selon la nature de votre projet. Nous intervenons principalement en Savoie, Haute-Savoie, Isère, Ain et Rhône.</p></div>
      <address>
        <a className="contact-phone" href="tel:0952863156">09 52 86 31 56</a>
        <a href="mailto:contact@cladisbardage.com">contact@cladisbardage.com</a>
        <span>74 rue de la Révériaz · 73000 Chambéry</span>
        <span>Lundi – Vendredi · 8h00 – 18h00</span>
      </address>
    </section>
    <section id="catalogue" className="contact-download" aria-labelledby="catalogue-heading">
      <div><h2 id="catalogue-heading">Télécharger notre catalogue</h2>
        <p>Retrouvez nos métiers, les solutions que nous mettons en œuvre et une sélection de réalisations CLADIS Construction.</p>
        <small>Les documents propres à une consultation peuvent être transmis sur demande.</small>
      </div>
      <a href={CATALOGUE_URL} download className="contact-document-link"><ArrowDownToLine size={20} aria-hidden="true" /><span>Télécharger le catalogue CLADIS (PDF)<small>PDF · {catalogueSize} Mo</small></span></a>
    </section>
    <ContactProject configOpen={configOpen} onConfigOpenChange={setConfigOpen} />
  </div>;
}
