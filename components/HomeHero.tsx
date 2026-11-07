"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const inset = useTransform(scrollYProgress, [0.45, 1], ["0%", "3%"]);
  const radius = useTransform(scrollYProgress, [0.45, 1], [0, 24]);
  const titleY = useTransform(scrollYProgress, [0, 0.65], [0, -160]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4, 0.65], [1, 1, 0]);
  const statementOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  const statementY = useTransform(scrollYProgress, [0.5, 1], [65, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) { video.pause(); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !video.dataset.userPaused) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.05 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [reducedMotion]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { delete video.dataset.userPaused; video.play().catch(() => {}); }
    else { video.dataset.userPaused = "true"; video.pause(); }
  }

  return (
    <section ref={sectionRef} className="v2-hero" aria-label="CLADIS Construction, l’enveloppe de vos ambitions">
      <div className="v2-hero-sticky">
        <motion.div className="v2-hero-film" style={{ inset: reducedMotion ? 0 : inset, borderRadius: reducedMotion ? 0 : radius }}>
          <motion.div className="v2-hero-media" style={{ scale: reducedMotion ? 1 : scale }}>
            <video ref={videoRef} muted loop playsInline preload="auto" poster="/images/homepage-hero-3cdb9cad.webp" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label="Film architectural CLADIS Construction">
              <source src="/hero_1080p.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="v2-hero-shade" />
          <div className="v2-hero-grid" aria-hidden="true" />
          <motion.div className="v2-hero-copy" style={{ y: reducedMotion ? 0 : titleY, opacity: reducedMotion ? 1 : titleOpacity }}>
            <span className="v2-eyebrow"><i /> CONSTRUIRE AVEC EXIGENCE. DEPUIS CHAMBÉRY.</span>
            <h1>L’enveloppe de<br />vos <em>ambitions.</em></h1>
            <div className="v2-hero-description">
              <p>Bardage, couverture et construction métallique.<br />Une vision d’ensemble. La précision du détail.</p>
              <a href="#expertises" className="v2-button v2-button-light">Découvrir notre expertise <ArrowUpRight size={18} /></a>
            </div>
          </motion.div>
          {!reducedMotion && <motion.div className="v2-hero-statement" style={{ opacity: statementOpacity, y: statementY }} aria-hidden="true">
            <span className="v2-eyebrow">DE LA PREMIÈRE ESQUISSE AU DERNIER DÉTAIL</span>
            <h2>La matière prend forme.<br /><em>Votre projet prend vie.</em></h2>
          </motion.div>}
          <div className="v2-hero-bottom">
            <a href="#introduction" className="v2-scroll-link"><span className="v2-round-icon"><ArrowDown size={17} /></span><span>FAITES DÉFILER<br /><b>Découvrez la différence Cladis</b></span></a>
            <div className="v2-hero-location"><span>45°33′59.0″N  5°55′12.0″E</span><b>CHAMBÉRY · AUVERGNE-RHÔNE-ALPES</b></div>
            <button onClick={toggleVideo} className="v2-video-control v2-glass" aria-label={playing ? "Mettre le film en pause" : "Lire le film"}>{playing ? <Pause size={15} /> : <Play size={15} />}<span>LE FILM</span></button>
          </div>
        </motion.div>
        <motion.div className="v2-hero-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />
      </div>
    </section>
  );
}
