"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const heroSlides = [
  {
    title: "ENVELOPPE DU BÂTIMENT & CONSTRUCTION MÉTALLIQUE",
    subtitle: "L'exigence technique, au cœur de chaque projet.",
    description: "Une expertise structurée pour concevoir et piloter des solutions constructives performantes.",
  },
  {
    title: "CLADIS CONSTRUCTION",
    subtitle: "L'expertise technique au service de vos ambitions.",
    description: "Enveloppe du bâtiment et construction métallique, avec rigueur, précision et exigence.",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0%", "15%"]);
  const bgScale = useTransform(scrollY, [0, 800], [1.02, 1.12]);

  function moveSlide(direction: number) {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  }

  return (
    <section
      aria-label="Présentation de CLADIS CONSTRUCTION"
      aria-roledescription="carrousel"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-black pt-36 text-white sm:pt-44 lg:pt-48"
    >
      <motion.div
        style={{ y: reducedMotion ? 0 : bgY, scale: reducedMotion ? 1.02 : bgScale }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[120%] w-full origin-bottom will-change-transform"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 mx-auto grid max-w-[1440px] grid-cols-4 border-x border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="h-full border-r border-white/10" />
        <div className="hidden h-full border-r border-white/10 sm:block" />
        <div className="hidden h-full border-r border-white/10 md:block" />
        <div className="h-full" />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 pb-6 pt-6 sm:px-6 sm:pt-10 lg:px-8">
        <span className="inline-flex items-center gap-2 font-secondary text-[9px] uppercase tracking-widest text-white/80 sm:text-[10px]">
          <span className="h-1.5 w-1.5 shrink-0 bg-white/70" aria-hidden="true" />
          Chambéry · Savoie · Rhône-Alpes
        </span>
        <span className="font-secondary text-[10px] tracking-widest text-white/65" aria-hidden="true">
          0{activeSlide + 1} / 0{heroSlides.length}
        </span>
      </div>

      <div className="relative z-20 mx-auto mt-auto w-full max-w-[1440px] px-4 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8 lg:pb-16">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-9" aria-live="polite" aria-atomic="true">
            <div key={activeSlide} className="animate-fadeIn motion-reduce:animate-none">
              <div className="flex min-h-[8.5rem] items-end sm:min-h-[10rem] lg:min-h-[13rem]">
                <h1 className="max-w-5xl font-sans text-[clamp(2rem,4.5vw,4.75rem)] font-black uppercase leading-[1.02] tracking-tight text-white drop-shadow-lg">
                  {slide.title}
                </h1>
              </div>
              <h2 className="mt-6 max-w-3xl font-sans text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl lg:text-[1.75rem]">
                {slide.subtitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                {slide.description}
              </p>
            </div>
          </div>
          <div className="lg:col-span-3 lg:flex lg:justify-end lg:pb-1">
            <a
              href="#devis"
              className="group inline-flex items-center gap-3 whitespace-nowrap border border-white/25 bg-primary px-6 py-4 font-secondary text-[10px] font-bold uppercase tracking-widest text-white shadow-xl transition-colors hover:border-white/60 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Demander un devis
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white group-hover:text-primary">
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6 border-t border-white/25 pt-5 sm:mt-10 sm:pt-6">
          <div role="group" aria-label="Choisir une présentation" className="flex items-center gap-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Afficher la présentation ${index + 1} : ${item.title}`}
                aria-pressed={activeSlide === index}
                onClick={() => setActiveSlide(index)}
                className={`inline-flex min-h-11 items-center gap-2.5 px-2 font-secondary text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${activeSlide === index ? "text-white" : "text-white/50 hover:text-white"}`}
              >
                <span className={`h-0.5 transition-all motion-reduce:transition-none ${activeSlide === index ? "w-10 bg-white" : "w-5 bg-white/40"}`} aria-hidden="true" />
                0{index + 1}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => moveSlide(-1)} aria-label="Présentation précédente" className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => moveSlide(1)} aria-label="Présentation suivante" className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
