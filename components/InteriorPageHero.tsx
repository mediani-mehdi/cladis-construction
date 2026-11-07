import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface InteriorPageHeroProps {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageQuality?: 75 | 90;
  imageAlt: string;
  caption: string;
  action: { href: string; label: string };
}

export default function InteriorPageHero(props: InteriorPageHeroProps) {
  return (
    <section aria-labelledby={`${props.id}-heading`} className="v2-interior-hero">
      <div className="v2-interior-hero-image">
        <Image src={props.image} alt={props.imageAlt} fill priority quality={props.imageQuality ?? 90} sizes="100vw" className="object-cover" />
      </div>
      <div className="v2-interior-hero-shade" />
      <div className="v2-container v2-interior-hero-content">
        <nav aria-label="Fil d’Ariane" className="v2-breadcrumb">
          <Link href="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{props.label}</span>
        </nav>
        <div className="v2-interior-hero-copy">
          <span className="v2-eyebrow"><i />{props.eyebrow}</span>
          <h1 id={`${props.id}-heading`}>{props.title}<br /><em>{props.subtitle}</em></h1>
          <p>{props.description}</p>
          <div className="v2-interior-hero-actions">
            <a href={props.action.href} className="v2-button v2-button-light">{props.action.label}<ArrowDown size={17} aria-hidden="true" /></a>
            <Link href="/#devis" className="v2-text-link">Parlons de votre projet<ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="v2-interior-hero-caption v2-glass"><span>{props.caption}</span><ArrowDown size={18} aria-hidden="true" /></div>
      </div>
    </section>
  );
}
