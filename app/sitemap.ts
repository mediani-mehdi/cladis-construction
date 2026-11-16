import type { MetadataRoute } from 'next';
import { METIERS } from '@/lib/metiers-data';
import { PROJECTS } from '@/lib/projects-data';
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://cladisbardage.com'; return ['', '/l-entreprise', '/metiers', '/etudes-et-travaux', '/realisations', '/contact', '/informations-legales', ...METIERS.map(m => '/metiers/' + m.slug), ...PROJECTS.map(p => '/realisations/' + p.slug)].map(path => ({ url: base + path })); }
