"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Linkedin, Mouse } from "lucide-react";
import ScrollFrameSequence from "@/components/ScrollFrameSequence";
import { HERO_SLIDES } from "@/lib/hero-content";
import { SOCIAL_LINKS } from "@/lib/social-links";

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress: rawProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const scrollYProgress = useSpring(rawProgress, { stiffness: 150, damping: 24, mass: 0.35, restDelta: 0.00005 });
  const titleY = useTransform(scrollYProgress, [0, 0.65], [0, -160]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4, 0.65], [1, 1, 0]);
  const statementOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  const statementY = useTransform(scrollYProgress, [0.5, 1], [65, 0]);

  return (
    <section ref={sectionRef} className="v2-hero" aria-label="Présentation de CLADIS CONSTRUCTION">
      <div className="v2-hero-sticky">
        <div className="v2-hero-film">
          <div className="v2-hero-media"><ScrollFrameSequence progress={scrollYProgress} reducedMotion={!!reducedMotion} /></div>
          <div className="v2-hero-shade" />
          <div className="v2-hero-grid" aria-hidden="true" />
          <motion.div className="v2-hero-copy" style={{ y: reducedMotion ? 0 : titleY, opacity: reducedMotion ? 1 : titleOpacity }}>
            <span className="v2-eyebrow"><i /> Chambéry · Savoie · Rhône-Alpes</span>
            <h1>{HERO_SLIDES[0].title}</h1>
            <h2 className="v2-hero-subtitle">{HERO_SLIDES[0].subtitle}</h2>
            <div className="v2-hero-description">
              <p>{HERO_SLIDES[0].description}</p>
              <a href="#devis" className="v2-button v2-button-light">Demander un devis <ArrowUpRight size={18} /></a>
            </div>
          </motion.div>
          {!reducedMotion && <motion.div className="v2-hero-statement" style={{ opacity: statementOpacity, y: statementY }} aria-hidden="true">
            <span className="v2-eyebrow">{HERO_SLIDES[1].title}</span>
            <h2>{HERO_SLIDES[1].subtitle}</h2>
            <p>{HERO_SLIDES[1].description}</p>
          </motion.div>}
          <div className="v2-hero-bottom">
            <a href="#savoir-faire" className="v2-scroll-link"><span className="v2-round-icon"><ArrowDown size={17} /></span><span>FAITES DÉFILER<br /><b>Découvrez la différence Cladis</b></span></a>
            <nav className="v2-hero-social" aria-label="Retrouvez Cladis sur les réseaux sociaux">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="v2-hero-social-link v2-glass" aria-label="Contacter Cladis sur WhatsApp" title="WhatsApp"><Image src="/icons/whatsapp.svg" alt="" width={20} height={20} aria-hidden="true" /></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="v2-hero-social-link v2-glass" aria-label="CLADIS Construction sur LinkedIn" title="LinkedIn"><Linkedin size={20} aria-hidden="true" /></a>
            </nav>
            <span className="v2-sequence-hint v2-glass"><Mouse size={15} /><span>LE SCROLL DONNE VIE</span></span>
          </div>
        </div>
        <motion.div className="v2-hero-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      </div>
    </section>
  );
}
