"use client";

import { useEffect, useRef } from "react";
import { type MotionValue } from "framer-motion";
import frames from "@/public/hero-frames/manifest.json";

export default function ScrollFrameSequence({ progress, reducedMotion }: { progress: MotionValue<number>; reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;
    const mobile = window.matchMedia("(max-width: 700px)");
    const cache = new Map<number, HTMLImageElement>();
    const pending = new Map<number, HTMLImageElement>();
    const failed = new Set<number>();
    let disposed = false;
    let target = 0;
    let raf = 0;
    let variant = mobile.matches ? frames.mobile : frames.desktop;
    let lastDrawn = -1;
    const cacheLimit = mobile.matches ? 12 : 18;

    function draw() {
      raf = 0;
      if (disposed || !context || !canvas || !cache.size) return;
      const closest = Array.from(cache.keys()).reduce((best, index) => Math.abs(index - target) < Math.abs(best - target) ? index : best);
      if (closest === lastDrawn) return;
      const image = cache.get(closest)!;
      const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
      lastDrawn = closest;
      canvas.dataset.ready = "true";
      canvas.dataset.frame = String(closest);
    }

    function scheduleDraw() { if (!raf) raf = requestAnimationFrame(draw); }

    function loadNearby() {
      if (disposed) return;
      // Load the requested frame first. A bounded working set avoids decoding
      // hundreds of full-resolution images into memory on mobile devices.
      const candidates = [target];
      for (let distance = 1; distance <= 5; distance++) candidates.push(target + distance, target - distance);
      for (const index of candidates) {
        if (pending.size >= 4) break;
        if (index < 0 || index >= frames.count || cache.has(index) || pending.has(index) || failed.has(index)) continue;
        const image = new window.Image();
        const requestedVariant = variant;
        image.decoding = "async";
        pending.set(index, image);
        image.onload = () => {
          if (disposed || requestedVariant !== variant) return;
          pending.delete(index);
          cache.set(index, image);
          while (cache.size > cacheLimit) {
            const farthest = Array.from(cache.keys()).reduce((best, key) => Math.abs(key - target) > Math.abs(best - target) ? key : best);
            cache.delete(farthest);
          }
          scheduleDraw();
          loadNearby();
        };
        image.onerror = () => {
          if (disposed || requestedVariant !== variant) return;
          pending.delete(index);
          failed.add(index);
          loadNearby();
        };
        image.src = `${variant}/frame-${String(index).padStart(4, "0")}.webp`;
      }
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt((frames.width * frames.height) / (rect.width * rect.height)));
      canvas.width = Math.round(rect.width * ratio);
      canvas.height = Math.round(rect.height * ratio);
      lastDrawn = -1;
      scheduleDraw();
    }

    function changeVariant() {
      variant = mobile.matches ? frames.mobile : frames.desktop;
      pending.forEach((image) => { image.onload = null; image.onerror = null; image.src = ""; });
      pending.clear(); cache.clear(); failed.clear(); lastDrawn = -1;
      delete canvas!.dataset.ready;
      loadNearby(); resize();
    }

    function update(value: number) {
      target = Math.round(Math.max(0, Math.min(1, value)) * (frames.count - 1));
      scheduleDraw(); loadNearby();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    mobile.addEventListener("change", changeVariant);
    const unsubscribe = progress.on("change", update);
    resize(); update(progress.get());
    return () => {
      disposed = true; unsubscribe(); observer.disconnect(); mobile.removeEventListener("change", changeVariant);
      cancelAnimationFrame(raf);
      pending.forEach((image) => { image.onload = null; image.onerror = null; image.src = ""; });
      pending.clear(); cache.clear();
    };
  }, [progress, reducedMotion]);

  return <div className="v2-frame-sequence">
    <picture>
      <source media="(max-width: 700px)" srcSet={`${frames.mobile}/frame-0000.webp`} />
      {/* The first source frame remains visible while the canvas loads or if JS fails. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${frames.desktop}/frame-0000.webp`} alt="Vue architecturale d’un bâtiment Cladis Construction" width={frames.width} height={frames.height} fetchPriority="high" />
    </picture>
    <canvas ref={canvasRef} aria-hidden="true" />
  </div>;
}
