import Image from 'next/image';
import { NAV_LINKS } from '@/lib/site-navigation';
export default function HomeFooter({ onOpenCatalogue }: {
    onOpenCatalogue?: () => void;
}) {
    return <footer className="v3-footer">
    <div className="v3-wrap">
    <div className="v3-footer-grid">
    <div>
    <a href="/" aria-label="Accueil CLADIS">
    <Image src="/images/cladis-logo-transparent-07a6284b.webp" alt="CLADIS Construction" width={180} height={52}/>
    </a>
    <p>Enveloppe du bâtiment<br />et construction métallique.</p>
    <a className="v3-link" href="/contact">Parlons de votre projet ↗</a>
    </div>
    <nav aria-label="Navigation du pied de page">{NAV_LINKS.map(l => <a href={l.href} key={l.href}>{l.label}</a>)}<a href="/catalogue-cladis-2026.pdf" download>Télécharger le catalogue ↗</a>
    </nav>
    <address>
    <a href="mailto:contact@cladisbardage.com">contact@cladisbardage.com</a>
    <a href="tel:0952863156">09 52 86 31 56</a>
    <p>74 rue de la Révériaz<br />73000 Chambéry</p>
    <p>Lundi – Vendredi · 8h00 – 18h00</p>
    </address>
    </div>
    <div className="v3-footer-bottom">
    <span>© {new Date().getFullYear()} CLADIS Construction</span>
    <a href="/informations-legales#mentions-legales">Mentions légales</a>
    <a href="/informations-legales#confidentialite">Confidentialité</a>
    <a href="#">Retour en haut ↑</a>
    </div>
    </div>
    </footer>;
}
