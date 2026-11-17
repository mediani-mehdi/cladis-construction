"use client";

import { useState, type CSSProperties } from "react";
import Image from "@/components/SiteImage";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import "./FacadeComparison.css";

export default function FacadeComparison() {
  const [position, setPosition] = useState(50);

  return (
    <div className="v2-intro-image v2-intro-image-woodland v2-comparison" style={{ "--comparison-position": `${position}%` } as CSSProperties}>
      <Image src="/images/about-company-woodland-d9a52e11.webp" alt="Après : façade habillée de bardage métallique anthracite et d’encadrements en bois" fill quality={90} sizes="(max-width: 700px) 100vw, 90vw" draggable={false} />
      <div className="v2-comparison-before">
        <Image src="/images/woodland-before-cladding.webp" alt="Avant : illustration du même bâtiment avant la pose du bardage, avec sa façade brute" fill quality={90} sizes="(max-width: 700px) 100vw, 90vw" draggable={false} />
      </div>
      <span className="v2-comparison-label v2-comparison-label-before">AVANT <span>Sans bardage</span></span>
      <span className="v2-comparison-label v2-comparison-label-after">APRÈS <span>Avec bardage</span></span>
      <div className="v2-comparison-divider" aria-hidden="true"><span className="v2-comparison-handle"><ChevronLeft size={19} /><ChevronRight size={19} /></span></div>
      <input className="v2-comparison-range" type="range" min={0} max={100} step={1} value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label="Comparer le bâtiment avant et après la pose du bardage" aria-valuetext={`${position} % sans bardage, ${100 - position} % avec bardage`} />
      <div className="v2-image-caption v2-glass"><span>LA TECHNIQUE AU SERVICE DE L’ARCHITECTURE</span><ArrowUpRight size={22} /></div>
      <span className="v2-image-index">CLADIS — CONCEPTION / RÉALISATION</span>
      <span className="v2-comparison-hint">Glissez pour comparer</span>
    </div>
  );
}
