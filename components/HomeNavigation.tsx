"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, HEADER_NAV_LINKS } from "@/lib/site-navigation";
export default function HomeNavigation({ onOpenCatalogue }: {
    onOpenCatalogue?: () => void;
}) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        const update = () => setScrolled(window.scrollY > 60);
        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);
    useEffect(() => {
        if (!open)
            return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
        const keyboard = (event: KeyboardEvent) => {
            if (event.key === "Escape")
                setOpen(false);
            if (event.key !== "Tab")
                return;
            const items = menuRef.current?.querySelectorAll<HTMLElement>("a[href], button");
            if (!items?.length)
                return;
            const first = items[0], last = items[items.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            }
            else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", keyboard);
        return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", keyboard); triggerRef.current?.focus(); };
    }, [open]);
    return <>
    <a className="v2-skip" href={isHome ? "#savoir-faire" : "#page-content"}>Aller au contenu</a>
    <header className={`v2-nav v2-glass ${!isHome ? "v2-nav-interior" : ""} ${scrolled || !isHome ? "is-scrolled" : ""}`}>
      <a href="/" className="v2-brand" aria-label="CLADIS Construction, accueil">
    <Image src="/images/cladis-logo-transparent-07a6284b.webp" alt="CLADIS Construction" width={210} height={60} priority/>
    </a>
      <nav aria-label="Navigation principale" className="v2-desktop-nav">
        {HEADER_NAV_LINKS.map((link) => <a key={link.href} href={link.href} aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined}>{link.label}</a>)}

      </nav>
      <a href="/catalogue-cladis-2026.pdf" download className="v2-nav-cta">Télécharger le catalogue <ArrowUpRight size={16}/>
    </a>
      <button ref={triggerRef} className="v2-menu-trigger" onClick={() => setOpen(true)} aria-label="Ouvrir le menu" aria-expanded={open} aria-controls="v2-mobile-menu">
    <Menu size={22}/>
    </button>
    </header>
    {open && <div ref={menuRef} id="v2-mobile-menu" className="v2-mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
      <div className="v2-mobile-top">
        <span>CLADIS CONSTRUCTION</span>
        <button onClick={() => setOpen(false)} aria-label="Fermer le menu">
        <X />
        </button>
        </div>
      <nav>{NAV_LINKS.map((link, i) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            <small>0{i + 1}</small>{link.label}<ArrowUpRight size={20}/>
            </a>)}</nav>
      <a className="v2-button v2-button-light" href="/catalogue-cladis-2026.pdf" download>Télécharger le catalogue <ArrowUpRight size={18}/>
        </a>
      <a className="v2-mobile-phone" href="tel:0952863156">09 52 86 31 56</a>
    </div>}
  </>;
}
