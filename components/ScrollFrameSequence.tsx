"use client";

import { useEffect, useRef } from "react";
import { type MotionValue } from "framer-motion";
import frames from "@/public/hero-frames/new-hero/manifest.json";

interface ScrollFrameSequenceProps {
  progress: MotionValue<number>;
  reducedMotion: boolean;
}

export default function ScrollFrameSequence({
  progress,
  reducedMotion,
}: ScrollFrameSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reducedMotion) return;

    const context = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true,
    });
    if (!context) return;

    const mobileQuery = window.matchMedia("(max-width: 700px)");
    let variant = mobileQuery.matches ? frames.mobile : frames.desktop;

    // Cache images by unique filename so duplicates in manifest take 0 extra network/memory
    const imageCache = new Map<string, HTMLImageElement>();
    const inFlight = new Set<string>();
    let disposed = false;

    let targetFrame = 0;
    let currentFrame = 0;
    let lastRenderedIndex = -1;
    let rafId = 0;
    let isAnimating = false;

    // Helper: Paint image with cover (proportional crop & center)
    function paint(image: HTMLImageElement) {
      if (!canvas || !context || !image.naturalWidth) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const nw = image.naturalWidth;
      const nh = image.naturalHeight;

      const scale = Math.max(cw / nw, ch / nh);
      const dw = nw * scale;
      const dh = nh * scale;
      const dx = (cw - dw) * 0.5;
      const dy = (ch - dh) * 0.5;

      context.drawImage(image, dx, dy, dw, dh);
      canvas.dataset.ready = "true";
    }

    function render(framePosition: number) {
      if (disposed || !canvas || !context) return;

      const total = frames.count;
      const targetIndex = Math.max(0, Math.min(total - 1, Math.round(framePosition)));

      const fileName = frames.files[targetIndex];
      let img = imageCache.get(fileName);

      // If exact frame is not ready, fallback to the nearest available loaded frame
      if (!img || !img.complete || img.naturalWidth === 0) {
        let bestDist = Infinity;
        let fallbackImg: HTMLImageElement | null = null;

        // Search in a window of +- 30 frames for the closest ready frame
        for (let offset = 1; offset <= 30; offset++) {
          const prev = frames.files[targetIndex - offset];
          if (prev) {
            const candidate = imageCache.get(prev);
            if (candidate && candidate.complete && candidate.naturalWidth > 0) {
              fallbackImg = candidate;
              bestDist = offset;
              break;
            }
          }
          const next = frames.files[targetIndex + offset];
          if (next) {
            const candidate = imageCache.get(next);
            if (candidate && candidate.complete && candidate.naturalWidth > 0) {
              if (offset < bestDist) {
                fallbackImg = candidate;
                break;
              }
            }
          }
        }

        if (fallbackImg) {
          img = fallbackImg;
        }
      }

      if (img && img.complete && img.naturalWidth > 0) {
        paint(img);
        lastRenderedIndex = targetIndex;
      }
    }

    // High-performance 60/120fps physics lerp loop
    function tick() {
      if (disposed) return;

      const diff = targetFrame - currentFrame;
      const absDiff = Math.abs(diff);

      if (absDiff > 0.008) {
        // Dynamic lerp: faster when delta is large, silk-smooth when settling
        const speed = absDiff > 10 ? 0.28 : absDiff > 2 ? 0.22 : 0.18;
        currentFrame += diff * speed;

        render(currentFrame);
        rafId = requestAnimationFrame(tick);
      } else {
        currentFrame = targetFrame;
        render(currentFrame);
        isAnimating = false;
        rafId = 0;
      }
    }

    function startAnimation() {
      if (!isAnimating) {
        isAnimating = true;
        rafId = requestAnimationFrame(tick);
      }
    }

    // Image loading with priority
    function fetchImage(fileName: string, priority: "high" | "auto" | "low" = "auto") {
      if (disposed || !fileName) return;
      if (imageCache.has(fileName) || inFlight.has(fileName)) return;

      inFlight.add(fileName);
      const img = new window.Image();
      img.decoding = "async";
      img.fetchPriority = priority;

      img.onload = () => {
        if (disposed) return;
        inFlight.delete(fileName);
        imageCache.set(fileName, img);

        // If this image corresponds to the current frame or nearby, render immediately
        const currentFile = frames.files[Math.round(currentFrame)];
        if (fileName === currentFile || lastRenderedIndex === -1) {
          render(currentFrame);
        }
      };

      img.onerror = () => {
        inFlight.delete(fileName);
      };

      img.src = `${variant}/${fileName}`;
    }

    // Preload window around a target index
    function preloadAround(index: number) {
      if (disposed) return;
      const center = Math.max(0, Math.min(frames.count - 1, Math.round(index)));

      // High priority immediate window (current +- 8 frames)
      for (let offset = -4; offset <= 12; offset++) {
        const file = frames.files[center + offset];
        if (file) fetchImage(file, "high");
      }

      // Next buffer window (forward 13..35 frames)
      for (let offset = 13; offset <= 35; offset++) {
        const file = frames.files[center + offset];
        if (file) fetchImage(file, "auto");
      }
    }

    // Background progressive loader that steadily loads all unique files
    let backgroundIndex = 0;
    const uniqueFiles = Array.from(new Set(frames.files));

    function queueBackgroundPreload() {
      if (disposed) return;
      let idleLoads = 0;
      while (idleLoads < 6 && backgroundIndex < uniqueFiles.length) {
        const file = uniqueFiles[backgroundIndex++];
        if (file && !imageCache.has(file) && !inFlight.has(file)) {
          fetchImage(file, "low");
          idleLoads++;
        }
      }

      if (backgroundIndex < uniqueFiles.length) {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(queueBackgroundPreload, { timeout: 800 });
        } else {
          setTimeout(queueBackgroundPreload, 60);
        }
      }
    }

    function resize() {
      if (!canvas || !context) return;
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      // Cap DPR at 1.5 to keep GPU fill-rate at native 60fps without wasteful supersampling
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.round(rect.width * dpr);
      const height = Math.round(rect.height * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "medium";
        render(currentFrame);
      }
    }

    function onScrollProgress(val: number) {
      const clamped = Math.max(0, Math.min(1, val));
      targetFrame = clamped * (frames.count - 1);
      preloadAround(targetFrame);
      startAnimation();
    }

    function handleMediaChange() {
      variant = mobileQuery.matches ? frames.mobile : frames.desktop;
      imageCache.clear();
      inFlight.clear();
      backgroundIndex = 0;
      delete canvas!.dataset.ready;
      preloadAround(currentFrame);
      queueBackgroundPreload();
      resize();
    }

    // Initial setup
    resize();
    const initialProgress = progress.get();
    targetFrame = Math.max(0, Math.min(1, initialProgress)) * (frames.count - 1);
    currentFrame = targetFrame;

    // Preload immediate frames for initial render
    preloadAround(currentFrame);

    // Start background preloading after a brief delay so initial page load is instant
    const backgroundTimer = setTimeout(queueBackgroundPreload, 250);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    mobileQuery.addEventListener("change", handleMediaChange);

    const unsubscribe = progress.on("change", onScrollProgress);

    return () => {
      disposed = true;
      clearTimeout(backgroundTimer);
      unsubscribe();
      resizeObserver.disconnect();
      mobileQuery.removeEventListener("change", handleMediaChange);
      if (rafId) cancelAnimationFrame(rafId);
      imageCache.clear();
      inFlight.clear();
    };
  }, [progress, reducedMotion]);

  return (
    <div className="v2-frame-sequence">
      <picture>
        <source
          media="(max-width: 700px)"
          srcSet={`${frames.mobile}/${frames.files[0]}`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${frames.desktop}/${frames.files[0]}`}
          alt="Vue architecturale d’un bâtiment Cladis Construction"
          width={frames.width}
          height={frames.height}
          fetchPriority="high"
        />
      </picture>
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
