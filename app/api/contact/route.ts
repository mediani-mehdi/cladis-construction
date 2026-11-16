import { NextResponse } from 'next/server';
import { BUILDING_OPTIONS, OPERATION_OPTIONS, TRADE_OPTIONS, MAX_TOTAL_BYTES, validateFiles, type ProjectDraft } from '@/lib/contact';
export const runtime = 'nodejs';
const fail = (status: number) => NextResponse.json({ ok: false }, { status });
export async function POST(request: Request) {
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin)
        return fail(403);
    if (!request.headers.get('content-type')?.startsWith('multipart/form-data'))
        return fail(415);
    if (Number(request.headers.get('content-length')) > MAX_TOTAL_BYTES)
        return fail(413);
    let data: FormData;
    try {
        const reader = request.body?.getReader();
        if (!reader)
            return fail(400);
        const chunks: Uint8Array[] = [];
        let bytes = 0;
        while (true) {
            const { done, value } = await reader.read();
            if (done)
                break;
            bytes += value.byteLength;
            if (bytes > MAX_TOTAL_BYTES) {
                await reader.cancel();
                return fail(413);
            }
            chunks.push(value);
        }
        data = await new Response(new Blob(chunks as BlobPart[]), { headers: { 'content-type': request.headers.get('content-type')! } }).formData();
    }
    catch {
        return fail(400);
    }
    if (data.get('website'))
        return fail(400);
    const text = (key: string, max: number) => typeof data.get(key) === 'string' && String(data.get(key)).trim().length <= max ? String(data.get(key)).trim() : '';
    if (!text('name', 150) || !text('description', 10000) || !/^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/.test(text('email', 254)))
        return fail(400);
    const files = data.getAll('files').filter((f): f is File => f instanceof File && f.size > 0);
    if (validateFiles(files))
        return fail(413);
    let p: ProjectDraft;
    try {
        p = JSON.parse(String(data.get('project')));
        if (!p || typeof p !== 'object' || Object.keys(p).some(k => !['operation', 'building', 'town', 'postcode', 'trades', 'surface', 'system', 'calendar'].includes(k)) || !Array.isArray(p.trades) || !p.trades.length || p.trades.some(t => !TRADE_OPTIONS.includes(t)) || ['operation', 'building', 'town', 'postcode', 'surface', 'system', 'calendar'].some(k => typeof p[k as keyof ProjectDraft] !== 'string' || String(p[k as keyof ProjectDraft]).length > 500) || !p.town.trim() || (p.operation && !OPERATION_OPTIONS.includes(p.operation)) || (p.building && !BUILDING_OPTIONS.includes(p.building)))
            return fail(400);
    }
    catch {
        return fail(400);
    }
    const link = text('downloadUrl', 2000);
    if (link) {
        try {
            if (!['https:', 'http:'].includes(new URL(link).protocol))
                return fail(400);
        }
        catch {
            return fail(400);
        }
    }
    const endpoint = process.env.CONTACT_WEBHOOK_URL;
    if (!endpoint)
        return fail(503);
    try {
        const url = new URL(endpoint);
        if (url.protocol !== 'https:' && !(process.env.NODE_ENV === 'development' && ['localhost', '127.0.0.1'].includes(url.hostname)))
            return fail(503);
        const payload = new FormData();
        for (const key of ['name', 'email', 'company', 'phone', 'reference', 'offerDate', 'description', 'downloadUrl'])
            payload.set(key, text(key, key === 'description' ? 10000 : 2000));
        payload.set('project', JSON.stringify(p));
        for (const file of files)
            payload.append('files', file);
        const response = await fetch(url, { method: 'POST', body: payload, headers: process.env.CONTACT_WEBHOOK_TOKEN ? { Authorization: 'Bearer ' + process.env.CONTACT_WEBHOOK_TOKEN } : {}, signal: AbortSignal.timeout(15000), redirect: 'error' });
        if (!response.ok)
            return fail(502);
        return NextResponse.json({ ok: true });
    }
    catch {
        return fail(502);
    }
}
