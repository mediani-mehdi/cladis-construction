"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenCatalogue?: () => void;
}

export default function Hero({ onOpenCatalogue }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Tracking (Background image subtle depth)
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0%", "15%"]);
  const bgScale = useTransform(scrollY, [0, 800], [1.02, 1.12]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white pt-36 sm:pt-44 lg:pt-48"
    >
      {/* 1. Bright architectural background with parallax scroll */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-x-0 bottom-0 w-full h-[120%] origin-bottom z-0 pointer-events-none will-change-transform"
      >
        <Image
          src="/images/cladis-hero-facade-4k-fef0595c.webp"
          alt="Façade contemporaine en bardage métallique et bois, avec les Alpes en arrière-plan"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-left"
        />

        {/* Gentle shading keeps white text readable while preserving the daylight. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
      </motion.div>

      {/* 2. Architectural Drafting / Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-x border-white/10">
        <div className="border-r border-white/10 h-full" />
        <div className="border-r border-white/10 h-full hidden sm:block" />
        <div className="border-r border-white/10 h-full hidden md:block" />
        <div className="h-full" />
      </div>
      
      {/* Horizontal drafting line across the upper third */}
      <div className="absolute top-[28%] left-0 right-0 z-10 border-b border-white/10 pointer-events-none" />

      {/* 3. Upper Content Area: Sub-Headline & Official Tagline */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-lg sm:max-w-xl"
        >
          <div className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white leading-snug">
            CLADIS CONSTRUCTION — BARDAGE, COUVERTURE & ÉTANCHÉITÉ
          </div>
          <div className="text-sm sm:text-base lg:text-lg font-mono font-bold uppercase tracking-wider text-white leading-snug mt-1">
            ENVELOPPE DU BÂTIMENT INDUSTRIEL &amp; CONSTRUCTION MÉTALLIQUE
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-construction-blue" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-white">
              CHAMBÉRY • SAVOIE • RHÔNE-ALPES — DE L'ÉTUDE À LA LIVRAISON
            </span>
          </div>
        </motion.div>
      </div>

      {/* 4. Bottom Hero Anchor: Massive Display Headline (Left) & Compact 'Demander un devis' Button (Right) */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 sm:pb-20 lg:pb-28 mt-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Column: Massive Headline & Clean Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-8 pb-2"
          >
            <h1 className="font-sans font-black text-6xl sm:text-8xl md:text-9xl xl:text-[9.5rem] tracking-tighter uppercase leading-[0.86] text-white drop-shadow-lg select-none">
              BÂTIR <br />
              <span className="text-white">L'AVENIR</span>
            </h1>

            {/* Micro subtitle line - Always clear with ample clearance above oncoming sections */}
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/95 mt-4 max-w-xl font-medium">
              BARDAGE MÉTALLIQUE • COUVERTURE • ÉTANCHÉITÉ • CHARPENTES INDUSTRIELLES
            </p>
          </motion.div>

          {/* Right Column: Smaller 'Demander un devis' CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="lg:col-span-4 lg:flex lg:justify-end pb-3"
          >
            <a
              href="#devis"
              className="inline-flex items-center gap-3 px-7 py-4 bg-primary hover:bg-primary/90 text-white font-mono text-xs uppercase tracking-widest font-bold shadow-2xl transition-all duration-200 group border border-white/20 hover:border-white"
            >
              <span>Demander un devis</span>
              <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white group-hover:text-primary flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
