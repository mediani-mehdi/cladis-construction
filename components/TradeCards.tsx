"use client";
import { useRef } from 'react';
import Image from "@/components/SiteImage";
import { METIERS } from '@/lib/metiers-data';
export default function TradeCards({ exclude }: {
    exclude?: string;
}) {
    const rail = useRef<HTMLDivElement>(null);
    return <>
    <div className="v3-rail-controls">
    <button type="button" aria-label="Métier précédent" onClick={() => rail.current?.scrollBy({ left: -320, behavior: 'smooth' })}>←</button>
    <button type="button" aria-label="Métier suivant" onClick={() => rail.current?.scrollBy({ left: 320, behavior: 'smooth' })}>→</button>
    </div>
    <div ref={rail} className={exclude ? 'v3-trade-rail' : 'v3-trade-grid'}>{METIERS.filter(m => m.slug !== exclude).map(m => <a className="v3-trade-card" href={'/metiers/' + m.slug} key={m.slug}>
        <figure>
        <div className="v3-photo">
        <Image src={m.heroImage} alt={m.imageAlt} fill sizes="(max-width:700px) 85vw,50vw" className="object-cover"/>
        </div>
        <figcaption>{m.imageAlt}</figcaption>
        </figure>
        <span className="v3-label">{m.num}</span>
        <h3>{m.title} ↗</h3>{!exclude && <p>{m.shortDesc}</p>}</a>)}</div>
    </>;
}
