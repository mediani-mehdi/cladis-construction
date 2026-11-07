import { spawnSync } from "node:child_process";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Usage: node scripts/extract-hero-frames.mjs <path-to-ffmpeg>
const ffmpeg = process.argv[2] || "ffmpeg";
const source = path.resolve("public/hero_1080p.mp4");
const output = path.resolve("public/hero-frames");
const originals = path.resolve(".asset-sources/hero-frames");
const probe = spawnSync(ffmpeg, ["-hide_banner", "-i", source], { encoding: "utf8" });
if (probe.error) throw probe.error;
const durationMatch = probe.stderr.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
if (!durationMatch) throw new Error(`Could not inspect source video: ${probe.stderr}`);
const duration = Number(durationMatch[1]) * 3600 + Number(durationMatch[2]) * 60 + Number(durationMatch[3]);
const fps = Math.min(24, 180 / duration);
await Promise.all([mkdir(originals, { recursive: true }), mkdir(path.join(output, "desktop"), { recursive: true }), mkdir(path.join(output, "mobile"), { recursive: true })]);
const extraction = spawnSync(ffmpeg, ["-hide_banner", "-loglevel", "error", "-y", "-i", source, "-vf", `fps=${fps}`, "-frames:v", "180", path.join(originals, "frame-%04d.png")], { encoding: "utf8" });
if (extraction.status !== 0) throw new Error(extraction.stderr);
const frames = (await readdir(originals)).filter((file) => /^frame-\d{4}\.png$/.test(file)).sort();
const metadata = await sharp(path.join(originals, frames[0])).metadata();
let next = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (next < frames.length) {
    const index = next++;
    const name = `frame-${String(index).padStart(4, "0")}.webp`;
    const image = sharp(path.join(originals, frames[index]));
    await Promise.all([
      image.clone().sharpen({ sigma: 0.6, m1: 0.5, m2: 1.5 }).webp({ quality: 92, effort: 5 }).toFile(path.join(output, "desktop", name)),
      image.clone().resize({ width: 720, height: 1080, fit: "cover", position: "centre", withoutEnlargement: true, kernel: "lanczos3" }).sharpen({ sigma: 0.5 }).webp({ quality: 90, effort: 5 }).toFile(path.join(output, "mobile", name)),
    ]);
  }
}));
const manifest = { count: frames.length, width: metadata.width, height: metadata.height, duration, fps, desktop: "/hero-frames/desktop", mobile: "/hero-frames/mobile" };
await writeFile(path.join(output, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(JSON.stringify(manifest));
