"use client";

import { useEffect, useRef } from "react";
import { type MotionValue } from "framer-motion";
import frames from "@/public/hero-frames/new-hero/manifest.json";

export default function ScrollFrameSequence({ progress, reducedMotion }: { progress: MotionValue<number>; reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;
    const mobile = window.matchMedia("(max-width: 700px)");
    const cache = new Map<string, { image: HTMLImageElement; index: number }>();
    const pending = new Map<string, HTMLImageElement>();
    const failed = new Set<string>();
    let disposed = false;
    let target = 0;
    let position = 0;
    let direction = 1;
    let raf = 0;
    let variant = mobile.matches ? frames.mobile : frames.desktop;
    let lastDrawn = "";

    function paint(image: HTMLImageElement, alpha = 1) {
      if (!canvas || !context) return;
      const scale = Math.max(canvas.width / image.naturalWidth, canvas.height / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      context.globalAlpha = alpha;
      context.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
    }

    function draw() {
      raf = 0;
      if (disposed || !context || !canvas || !cache.size) return;
      const lower = Math.floor(position);
      const upper = Math.min(lower + 1, frames.count - 1);
      let first = cache.get(frames.files[lower]);
      const second = cache.get(frames.files[upper]);
      let blend = position - lower;
      if (!first) {
        const closest = Array.from(cache.values()).reduce((best, entry) => Math.abs(entry.index - position) < Math.abs(best.index - position) ? entry : best);
        // Hold the last painted frame while buffering rather than jumping to
        // an unrelated cached frame after a fast scroll or direction change.
        if (Math.abs(closest.index - position) > 2) return;
        first = closest;
        blend = 0;
      }
      const signature = `${first.index}:${second?.index}:${blend.toFixed(3)}`;
      if (signature === lastDrawn) return;
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      paint(first.image);
      if (second && blend > 0 && first.image !== second.image) paint(second.image, blend);
      context.globalAlpha = 1;
      lastDrawn = signature;
      canvas.dataset.ready = "true";
      canvas.dataset.frame = String(lower);
      canvas.dataset.blend = blend.toFixed(3);
    }

    function scheduleDraw() { if (!raf) raf = requestAnimationFrame(draw); }

    function loadNearby() {
      if (disposed) return;
      // Decode adjacent frames before painting. Prefetch farther in the scroll
      // direction while keeping decoded image memory bounded on each device.
      const candidates = [Math.floor(position), Math.ceil(position)];
      const ahead = mobile.matches ? 8 : 14;
      for (let distance = 1; distance <= ahead; distance++) {
        candidates.push(target + distance * direction);
        if (distance <= 4) candidates.push(target - distance * direction);
      }
      for (const index of candidates) {
        if (index < 0 || index >= frames.count) continue;
        const key = frames.files[index];
        const cached = cache.get(key);
        if (cached) { cached.index = index; continue; }
        if (pending.size >= 6) break;
        if (pending.has(key) || failed.has(key)) continue;
        const image = new window.Image();
        const requestedVariant = variant;
        image.decoding = "async";
        image.fetchPriority = Math.abs(index - position) <= 1 ? "high" : "low";
        pending.set(key, image);
        image.onload = async () => {
          try { await image.decode(); } catch { /* A completed image can still be painted by older decoders. */ }
          if (disposed || requestedVariant !== variant) return;
          pending.delete(key);
          cache.set(key, { image, index });
          const cacheLimit = mobile.matches ? 18 : 26;
          while (cache.size > cacheLimit) {
            const farthest = Array.from(cache.entries()).reduce((best, entry) => Math.abs(entry[1].index - position) > Math.abs(best[1].index - position) ? entry : best);
            cache.delete(farthest[0]);
          }
          scheduleDraw();
          loadNearby();
        };
        image.onerror = () => {
          if (disposed || requestedVariant !== variant) return;
          pending.delete(key);
          failed.add(key);
          loadNearby();
        };
        image.src = `${variant}/${key}`;
      }
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt((frames.width * frames.height) / (rect.width * rect.height)));
      const width = Math.round(rect.width * ratio);
      const height = Math.round(rect.height * ratio);
      if (canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      lastDrawn = "";
      scheduleDraw();
    }

    function changeVariant() {
      variant = mobile.matches ? frames.mobile : frames.desktop;
      pending.forEach((image) => { image.onload = null; image.onerror = null; image.src = ""; });
      pending.clear(); cache.clear(); failed.clear(); lastDrawn = "";
      delete canvas!.dataset.ready;
      loadNearby(); resize();
    }

    function update(value: number) {
      const next = Math.max(0, Math.min(1, value)) * (frames.count - 1);
      if (Math.abs(next - position) > 0.001) direction = next > position ? 1 : -1;
      position = next;
      target = Math.round(position);
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
      <source media="(max-width: 700px)" srcSet={`${frames.mobile}/${frames.files[0]}`} />
      {/* The first source frame remains visible while the canvas loads or if JS fails. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${frames.desktop}/${frames.files[0]}`} alt="Vue architecturale d’un bâtiment Cladis Construction" width={frames.width} height={frames.height} fetchPriority="high" />
    </picture>
    <canvas ref={canvasRef} aria-hidden="true" />
  </div>;
}
