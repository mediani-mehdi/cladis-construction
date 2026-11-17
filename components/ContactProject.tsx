"use client";
import { useRef, useState, type FormEvent } from 'react';
import { SlidersHorizontal, Send } from 'lucide-react';
import { ACCEPTED_EXTENSIONS, BUILDING_OPTIONS, EMPTY_PROJECT, OPERATION_OPTIONS, TRADE_OPTIONS, projectRows, validateFiles, type ProjectDraft } from '@/lib/contact';
function ProjectFields({ value, onChange, prefix }: {
  value: ProjectDraft;
  onChange: (value: ProjectDraft) => void;
  prefix: string;
}) {
  const isQuote = prefix === 'quote-';
  const text = (key: Exclude<keyof ProjectDraft, 'trades'>, label: string, placeholder = '') => (
    <label className="v3-field" htmlFor={prefix + key}>
      {label}{isQuote && key === 'town' ? ' *' : ''}
      <input id={prefix + key} required={isQuote && key === 'town'} value={value[key]}
        onChange={event => onChange({ ...value, [key]: event.target.value })}
        maxLength={500} placeholder={placeholder} />
    </label>
  );
  const extras = <>
    <label className="v3-field" htmlFor={prefix + 'operation'}>Type d’opération
      <select id={prefix + 'operation'} value={value.operation} onChange={event => onChange({ ...value, operation: event.target.value })}>
        <option value="">À préciser</option>{OPERATION_OPTIONS.map(option => <option key={option}>{option}</option>)}
      </select>
    </label>
    <label className="v3-field" htmlFor={prefix + 'building'}>Type de bâtiment
      <select id={prefix + 'building'} value={value.building} onChange={event => onChange({ ...value, building: event.target.value })}>
        <option value="">À préciser</option>{BUILDING_OPTIONS.map(option => <option key={option}>{option}</option>)}
      </select>
    </label>
    {text('surface', 'Surface approximative par lot', 'Ex. : bardage 800 m²')}
    {text('system', 'Support ou système envisagé')}
    {text('calendar', 'Période souhaitée pour les travaux')}
  </>;
  return <div className="v3-form-grid">
    {text('town', 'Commune du chantier', 'Chambéry')}
    {text('postcode', 'Code postal', '73000')}
    <fieldset>
      <legend>Métiers concernés{isQuote ? ' *' : ''}</legend>
      <div className="v3-checkboxes">{TRADE_OPTIONS.map(trade => <label key={trade}>
        <input type="checkbox" checked={value.trades.includes(trade)} onChange={event => onChange({
          ...value, trades: event.target.checked ? [...value.trades, trade] : value.trades.filter(item => item !== trade),
        })} />{trade}
      </label>)}</div>
    </fieldset>
    {isQuote ? <details className="contact-disclosure wide">
      <summary>Préciser les caractéristiques du bâtiment <span>Facultatif</span></summary>
      <div className="v3-form-grid">{extras}</div>
    </details> : extras}
  </div>;
}
export default function ContactProject({ configOpen, onConfigOpenChange }: {
    configOpen: boolean;
    onConfigOpenChange: (open: boolean) => void;
}) {
    const [draft, setDraft] = useState<ProjectDraft>({ ...EMPTY_PROJECT });
    const [project, setProject] = useState<ProjectDraft>({ ...EMPTY_PROJECT });
    const [status, setStatus] = useState('');
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const [fileError, setFileError] = useState('');
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (loading || sent) return;
        const data = new FormData(event.currentTarget);
        const files = data.getAll('files').filter((value): value is File => value instanceof File && value.size > 0);
        const error = validateFiles(files);
        if (error) {
            setFileError(error);
            return;
        }
        if (!project.town.trim() || !project.trades.length) {
            setStatus('Indiquez la commune du chantier et au moins un métier concerné.');
            return;
        }
        data.set('project', JSON.stringify(project));
        setLoading(true);
        setStatus('');
        try {
            const response = await fetch('/api/contact', { method: 'POST', body: data });
            if (!response.ok) throw new Error('Submission failed');
            setSent(true);
            setStatus('Votre demande a bien été transmise à CLADIS Construction. Notre équipe reviendra vers vous après examen du dossier.');
        } catch {
            setStatus('L’envoi a échoué. Vos informations sont toujours disponibles. Réessayez ou contactez-nous par e-mail pour nous transmettre votre dossier.');
        } finally {
            setLoading(false);
        }
    }
    return <>
    <details id="configurateur" className="contact-configurator contact-panel contact-section-card" open={configOpen} onToggle={event => onConfigOpenChange(event.currentTarget.open)}>
    <summary><span><span className="contact-card-label"><SlidersHorizontal size={17} aria-hidden="true" />03 / Configurateur · Facultatif</span><span className="contact-config-title">Préparer votre demande de devis</span></span><span className="contact-config-toggle" aria-hidden="true">+</span></summary>
    <div className="contact-config-body">
    <p className="v3-lead">Indiquez les caractéristiques principales du bâtiment et les travaux envisagés. Vous pourrez joindre vos plans et transmettre le récapitulatif à notre équipe pour étude.</p>
    <ProjectFields value={draft} onChange={setDraft} prefix="config-"/>
    <div className="v3-summary"><h3>Récapitulatif du projet</h3>
    <dl>{projectRows(draft).map(([k, v]) => <div key={k} style={{ display: 'contents' }}>
        <dt>{k}</dt>
        <dd>{v || 'À préciser'}</dd>
        </div>)}</dl>
    <p>Ce récapitulatif prépare votre consultation. Le chiffrage, le dimensionnement et le délai sont établis après examen de votre dossier.</p>
    </div>
    <button className="v3-button contact-transfer" type="button" onClick={() => {
      setProject({ ...draft, trades: [...draft.trades] });
      setSent(false);
      setStatus('');
      window.history.replaceState(null, '', '#devis');
      requestAnimationFrame(() => {
        document.getElementById('devis')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        form.current?.querySelector<HTMLInputElement>('#quote-name')?.focus({ preventScroll: true });
      });
    }}>Reprendre ces informations dans ma demande ↗</button>
    </div></details>
    <section id="devis" className="contact-panel contact-quote contact-section-card" aria-labelledby="quote-heading">
    <div>
    <span className="contact-card-label"><Send size={17} aria-hidden="true" />04 / Votre demande</span>
    <h2 id="quote-heading">Demander un devis</h2>
    <p className="v3-lead">Présentez votre chantier et joignez vos plans ou votre dossier de consultation. Notre équipe vous recontactera après examen.</p>
    <p className="contact-required">* Champs obligatoires</p>
    <form ref={form} onSubmit={submit}>
    <fieldset disabled={loading || sent}>
    <div className="v3-form-grid">
    <label className="v3-field" htmlFor="quote-name">Nom et prénom *<input id="quote-name" name="name" autoComplete="name" required maxLength={150}/>
    </label>
    <label className="v3-field" htmlFor="quote-email">E-mail *<input id="quote-email" name="email" type="email" autoComplete="email" required maxLength={254}/>
    </label>
    </div>
    <div style={{ marginBlock: 24 }}>
    <ProjectFields value={project} onChange={setProject} prefix="quote-"/>
    </div>
    <div className="v3-form-grid">
    <label className="v3-field wide" htmlFor="quote-description">Description des travaux et contraintes *<textarea id="quote-description" name="description" required maxLength={10000} rows={3}/>
    </label>
    </div>
    <details className="contact-disclosure">
    <summary>Joindre des plans ou un dossier <span>Facultatif</span></summary>
    <div className="v3-form-grid">
    <label className="v3-field wide" htmlFor="quote-files">Plans, CCTP, DPGF, DCE ou photos<input id="quote-files" name="files" type="file" multiple accept={ACCEPTED_EXTENSIONS.map(x => '.' + x).join(',')} aria-describedby={fileError ? 'file-limits file-error' : 'file-limits'} onChange={e => setFileError(validateFiles(Array.from(e.target.files || [])))}/>
    <small id="file-limits">PDF, DWG, DXF, ZIP, JPG, PNG, WebP, Word ou Excel. 5 fichiers maximum, 3 Mo par fichier et moins de 4 Mo au total. Pour un dossier volumineux, indiquez un lien ci-dessous.</small>
    </label>{fileError && <p id="file-error" className="wide" role="alert">{fileError}</p>}<label className="v3-field wide" htmlFor="quote-link">Lien de téléchargement du dossier (facultatif)<input id="quote-link" name="downloadUrl" type="url" placeholder="https://" maxLength={2000}/>
    </label>
    </div>
    </details>
    <details className="contact-disclosure">
      <summary>Coordonnées et délais complémentaires <span>Facultatif</span></summary>
      <div className="v3-form-grid">    <label className="v3-field" htmlFor="quote-company">Société ou organisme<input id="quote-company" name="company" autoComplete="organization" maxLength={200}/>
    </label>
    <label className="v3-field" htmlFor="quote-phone">Téléphone<input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={40}/>
    </label>
    <label className="v3-field" htmlFor="quote-reference">Référence du chantier<input id="quote-reference" name="reference" maxLength={200}/>
    </label>
    <label className="v3-field" htmlFor="quote-date">Date de remise d’offre<input id="quote-date" name="offerDate" type="date"/>
    </label>
</div>
    </details>
    <label className="v3-honeypot" aria-hidden="true">Site web<input name="website" tabIndex={-1} autoComplete="off"/>
    </label>
    <p className="v3-privacy">Vos informations sont utilisées pour traiter votre demande. <a href="/informations-legales#confidentialite">Informations de confidentialité</a>.</p>
    <button className="v3-button" type="submit" disabled={loading || sent}>{loading ? 'Envoi en cours…' : sent ? 'Demande transmise' : 'Envoyer ma demande de devis'} ↗</button>
    </fieldset>
    <div className="v3-form-status" role="status" aria-live="polite">{status}</div>{status && !sent && <a className="v3-link" href="mailto:contact@cladisbardage.com">Transmettre mon dossier par e-mail ↗</a>}{sent && <button type="button" className="v3-link" onClick={() => { setSent(false); setStatus(''); }}>Préparer une autre demande</button>}</form>
    </div>
    </section>
    </>;
}
