export const MAX_FILE_BYTES = 3 * 1024 * 1024;
export const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
export const ACCEPTED_EXTENSIONS = ['pdf', 'dwg', 'dxf', 'zip', 'jpg', 'jpeg', 'png', 'webp', 'doc', 'docx', 'xls', 'xlsx'];
export const TRADE_OPTIONS = ['Bardage et façades', 'Couverture métallique', 'Étanchéité de toiture-terrasse', 'Charpente métallique'];
export const OPERATION_OPTIONS = ['Construction neuve', 'Rénovation', 'Extension'];
export const BUILDING_OPTIONS = ['Industriel', 'Logistique', 'Tertiaire', 'Commercial', 'Logement collectif', 'Équipement public', 'Autre'];
export type ProjectDraft = {
    operation: string;
    building: string;
    town: string;
    postcode: string;
    trades: string[];
    surface: string;
    system: string;
    calendar: string;
};
export const EMPTY_PROJECT: ProjectDraft = { operation: '', building: '', town: '', postcode: '', trades: [], surface: '', system: '', calendar: '' };
export function projectRows(p: ProjectDraft) { return [['Type d’opération', p.operation], ['Type de bâtiment', p.building], ['Commune', p.town], ['Code postal', p.postcode], ['Métiers concernés', p.trades.join(', ')], ['Surfaces par lot', p.surface], ['Support ou système', p.system], ['Calendrier souhaité', p.calendar]]; }
export function validateFiles(files: File[]) { if (files.length > 5 || files.some(f => f.size > MAX_FILE_BYTES || !ACCEPTED_EXTENSIONS.includes(f.name.split('.').pop()?.toLowerCase() || '')) || files.reduce((n, f) => n + f.size, 0) > MAX_TOTAL_BYTES - 32768)
    return 'Ce fichier dépasse la taille autorisée ou son format ne peut pas être accepté. Vous pouvez joindre un autre fichier ou indiquer un lien de téléchargement.'; return ''; }
