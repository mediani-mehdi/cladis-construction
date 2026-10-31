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
  imageAlt: string;
  caption: string;
  action: { href: string; label: string };
}

export default function InteriorPageHero(props: InteriorPageHeroProps) {
  return (
    <section aria-labelledby={`${props.id}-heading`} className="bg-[#F6F5F2] pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Fil d’Ariane" className="mb-9 flex items-center gap-3 text-xs text-primary/55 sm:mb-12">
          <Link href="/" className="hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-primary">{props.label}</span>
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1.5 w-6 bg-primary" aria-hidden="true" />
              <span className="font-secondary text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/65">{props.eyebrow}</span>
            </div>
            <h1 id={`${props.id}-heading`} className="font-sans text-4xl font-bold leading-[1.06] tracking-tight text-primary sm:text-5xl xl:text-6xl">
              {props.title}<br /><span className="font-normal text-primary/65">{props.subtitle}</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-secondary sm:text-base">{props.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href={props.action.href} className="inline-flex min-h-12 items-center gap-6 bg-primary px-6 py-4 font-secondary text-[10px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                {props.action.label}<ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link href="/#devis" className="inline-flex min-h-12 items-center gap-3 border-b border-primary/30 py-2 text-xs font-semibold text-primary hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                Parlons de votre projet<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <figure className="min-w-0 lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-swiss-stone lg:aspect-[5/6]">
              <Image src={props.image} alt={props.imageAlt} fill priority sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, 100vw" className="object-cover object-center" />
            </div>
            <figcaption className="mt-4 border-t border-primary/20 pt-3 font-secondary text-[9px] uppercase tracking-wider text-primary/55">{props.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
