"use client";
import { useRef, useState, type FormEvent } from 'react';
import { ACCEPTED_EXTENSIONS, BUILDING_OPTIONS, EMPTY_PROJECT, OPERATION_OPTIONS, TRADE_OPTIONS, projectRows, validateFiles, type ProjectDraft } from '@/lib/contact';
function ProjectFields({ value, onChange, prefix }: {
    value: ProjectDraft;
    onChange: (v: ProjectDraft) => void;
    prefix: string;
}) {
    const text = (key: keyof ProjectDraft, label: string, placeholder = '') => <label className="v3-field" key={key} htmlFor={prefix + key}>{label}{prefix === 'quote-' && key === 'town' ? ' *' : ''}<input id={prefix + key} required={prefix === 'quote-' && key === 'town'} value={String(value[key])} onChange={e => onChange({ ...value, [key]: e.target.value })} maxLength={500} placeholder={placeholder}/>
    </label>;
    return <div className="v3-form-grid">
    <label className="v3-field" htmlFor={prefix + 'operation'}>Type d’opération<select id={prefix + 'operation'} value={value.operation} onChange={e => onChange({ ...value, operation: e.target.value })}>
    <option value="">À préciser</option>{OPERATION_OPTIONS.map(x => <option key={x}>{x}</option>)}</select>
    </label>
    <label className="v3-field" htmlFor={prefix + 'building'}>Type de bâtiment<select id={prefix + 'building'} value={value.building} onChange={e => onChange({ ...value, building: e.target.value })}>
    <option value="">À préciser</option>{BUILDING_OPTIONS.map(x => <option key={x}>{x}</option>)}</select>
    </label>{text('town', 'Commune du chantier', 'Chambéry')}{text('postcode', 'Code postal', '73000')}<fieldset>
    <legend>Métiers concernés{prefix === 'quote-' ? ' *' : ''}</legend>
    <div className="v3-checkboxes">{TRADE_OPTIONS.map(x => <label key={x}>
        <input type="checkbox" checked={value.trades.includes(x)} onChange={e => onChange({ ...value, trades: e.target.checked ? [...value.trades, x] : value.trades.filter(t => t !== x) })}/>{x}</label>)}</div>
    </fieldset>{text('surface', 'Surface approximative par lot', 'Ex. : bardage 800 m², couverture 1 200 m²')}{text('system', 'Support ou système envisagé')}{text('calendar', 'Période souhaitée pour les travaux')}</div>;
}
export default function ContactProject() {
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
    <section id="configurateur" className="v3-wrap v3-section">
    <span className="v3-label">Configurateur de projet</span>
    <h2>Préparer votre demande de devis</h2>
    <p className="v3-lead">Indiquez les caractéristiques principales du bâtiment et les travaux envisagés. Vous pourrez joindre vos plans et transmettre le récapitulatif à notre équipe pour étude.</p>
    <ProjectFields value={draft} onChange={setDraft} prefix="config-"/>
    <div className="v3-summary">
    <h3>Récapitulatif du projet</h3>
    <dl>{projectRows(draft).map(([k, v]) => <div key={k} style={{ display: 'contents' }}>
        <dt>{k}</dt>
        <dd>{v || 'À préciser'}</dd>
        </div>)}</dl>
    <p>Ce récapitulatif prépare votre consultation. Le chiffrage, le dimensionnement et le délai sont établis après examen de votre dossier.</p>
    <button className="v3-button" type="button" onClick={() => { setProject({ ...draft, trades: [...draft.trades] }); setSent(false); setStatus(''); window.location.hash = 'devis'; form.current?.querySelector<HTMLInputElement>('#quote-name')?.focus({ preventScroll: true }); }}>Reprendre ces informations dans ma demande ↗</button>
    </div>
    </section>
    <section id="devis" className="v3-tint">
    <div className="v3-wrap v3-section">
    <span className="v3-label">Votre consultation</span>
    <h2>Demander un devis</h2>
    <p className="v3-lead">Pour étudier votre demande, indiquez la commune du chantier, le lot à chiffrer et les principales contraintes de l’opération. Si vous avez des plans, un CCTP ou un dossier de consultation, joignez-les à votre demande. Précisez la date de remise de votre offre si elle est fixée.</p>
    <p>Les champs marqués d’un * sont obligatoires.</p>
    <form ref={form} onSubmit={submit}>
    <fieldset disabled={loading || sent}>
    <div className="v3-form-grid">
    <label className="v3-field" htmlFor="quote-name">Nom et prénom *<input id="quote-name" name="name" autoComplete="name" required maxLength={150}/>
    </label>
    <label className="v3-field" htmlFor="quote-email">E-mail *<input id="quote-email" name="email" type="email" autoComplete="email" required maxLength={254}/>
    </label>
    <label className="v3-field" htmlFor="quote-company">Société ou organisme<input id="quote-company" name="company" autoComplete="organization" maxLength={200}/>
    </label>
    <label className="v3-field" htmlFor="quote-phone">Téléphone<input id="quote-phone" name="phone" type="tel" autoComplete="tel" maxLength={40}/>
    </label>
    <label className="v3-field" htmlFor="quote-reference">Référence du chantier<input id="quote-reference" name="reference" maxLength={200}/>
    </label>
    <label className="v3-field" htmlFor="quote-date">Date de remise d’offre<input id="quote-date" name="offerDate" type="date"/>
    </label>
    </div>
    <div style={{ marginBlock: 24 }}>
    <ProjectFields value={project} onChange={setProject} prefix="quote-"/>
    </div>
    <div className="v3-form-grid">
    <label className="v3-field wide" htmlFor="quote-description">Description des travaux et contraintes *<textarea id="quote-description" name="description" required maxLength={10000} rows={5}/>
    </label>
    <label className="v3-field wide" htmlFor="quote-files">Plans, CCTP, DPGF, DCE ou photos<input id="quote-files" name="files" type="file" multiple accept={ACCEPTED_EXTENSIONS.map(x => '.' + x).join(',')} aria-describedby="file-limits file-error" onChange={e => setFileError(validateFiles(Array.from(e.target.files || [])))}/>
    <small id="file-limits">PDF, DWG, DXF, ZIP, JPG, PNG, WebP, Word ou Excel. 5 fichiers maximum, 3 Mo par fichier et moins de 4 Mo au total. Pour un dossier volumineux, indiquez un lien ci-dessous.</small>
    </label>{fileError && <p id="file-error" className="wide" role="alert">{fileError}</p>}<label className="v3-field wide" htmlFor="quote-link">Lien de téléchargement du dossier (facultatif)<input id="quote-link" name="downloadUrl" type="url" placeholder="https://" maxLength={2000}/>
    </label>
    </div>
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
