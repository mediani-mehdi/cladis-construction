"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenCatalogue?: () => void;
}

export default function Hero({ onOpenCatalogue }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Tracking
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0%", "20%"]);
  const bgScale = useTransform(scrollY, [0, 800], [1.02, 1.14]);
  const textY = useTransform(scrollY, [0, 600], [0, 50]);
  const accentBoxY = useTransform(scrollY, [0, 600], [0, 30]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white pt-24 sm:pt-28"
    >
      {/* 1. Cinematic Construction Background Image with Parallax Scroll */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 pointer-events-none will-change-transform"
      >
        <Image
          src="/images/construction-hero.jpg"
          alt="CLADIS CONSTRUCTION - Chantier d'envergure, engin de terrassement et structure métallique"
          fill
          priority
          className="object-cover object-center filter brightness-[0.88] contrast-[1.08]"
        />

        {/* Cinematic Vignette for maximum text legibility while keeping the excavator & building vivid */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </motion.div>

      {/* 2. Architectural Drafting / Blueprint Grid Overlay (Directly replicates the reference image) */}
      <div className="absolute inset-0 z-10 pointer-events-none grid grid-cols-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-x border-white/10">
        <div className="border-r border-white/10 h-full" />
        <div className="border-r border-white/10 h-full hidden sm:block" />
        <div className="border-r border-white/10 h-full hidden md:block" />
        <div className="h-full" />
      </div>
      
      {/* Horizontal drafting line across the upper third */}
      <div className="absolute top-[28%] left-0 right-0 z-10 border-b border-white/10 pointer-events-none" />

      {/* 3. Upper Content Area: Sub-Headline (Matches reference: "FROM CONCEPT TO COMPLETION — WE BUILD IT RIGHT") */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md sm:max-w-lg"
        >
          <div className="text-sm sm:text-base lg:text-lg font-mono font-bold uppercase tracking-wider text-white leading-snug drop-shadow-md">
            DE L'ÉTUDE À LA LIVRAISON — <br />
            NOUS BÂTISSONS AVEC RIGUEUR
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-2 h-2 bg-construction-blue" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/80">
              CHAMBÉRY • SAVOIE • RHÔNE-ALPES
            </span>
          </div>
        </motion.div>
      </div>

      {/* 4. Bottom Hero Anchor: Massive Display Headline (Left) & Blue Accent Box (Right) */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-0 mt-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Column: Massive Headline (Directly replicates "WE BUILD THE FUTURE") */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-8 pb-6 sm:pb-10"
          >
            <h1 className="font-sans font-black text-6xl sm:text-8xl md:text-9xl xl:text-[9.5rem] tracking-tighter uppercase leading-[0.86] text-white drop-shadow-lg select-none">
              BÂTIR <br />
              <span className="text-white">L'AVENIR</span>
            </h1>

            {/* Micro subtitle line */}
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/80 mt-4 max-w-xl font-medium">
              BARDAGE MÉTALLIQUE • COUVERTURE • ÉTANCHÉITÉ • CHARPENTES INDUSTRIELLES
            </p>
          </motion.div>

          {/* Right Column: Signature Blue Metric & CTA Box (Directly replicates reference layout) */}
          <motion.div
            style={{ y: accentBoxY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="lg:col-span-4 self-end w-full sm:max-w-md lg:max-w-none ml-auto"
          >
            <div className="bg-construction-blue text-white p-7 sm:p-9 shadow-2xl flex flex-col justify-between min-h-[260px] sm:min-h-[290px] border border-construction-blueLight/40">
              
              {/* Top Metric */}
              <div>
                <div className="font-sans font-black text-6xl sm:text-7xl xl:text-8xl leading-none tracking-tight">
                  24+
                </div>
                <div className="font-mono font-bold text-xs sm:text-sm uppercase tracking-widest mt-3 leading-tight text-white/95">
                  ANNÉES D'EXPERTISE EN CONSTRUCTION & ENVELOPPE
                </div>
              </div>

              {/* Bottom Outlined Action Button (Matches "GET IN TOUCH →") */}
              <div className="pt-6 mt-6 border-t border-white/25">
                <a
                  href="#devis"
                  className="w-full py-3.5 px-4 border border-white/50 hover:border-white hover:bg-white hover:text-construction-blue transition-all duration-200 flex items-center justify-between font-mono text-xs uppercase tracking-widest font-bold group"
                >
                  <span>Demander un devis</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-construction-blue group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
