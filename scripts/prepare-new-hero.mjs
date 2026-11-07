import { createHash } from "node:crypto";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source = path.resolve("public/New-hero");
const output = path.resolve("public/hero-frames/new-hero");
const sources = (await readdir(source)).filter((file) => /^ezgif-frame-\d+\.png$/i.test(file)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
if (!sources.length) throw new Error("No frames found in public/New-hero");
await Promise.all(["desktop", "mobile"].map((variant) => mkdir(path.join(output, variant), { recursive: true })));
const unique = new Map();
const files = [];
for (const filename of sources) {
  const buffer = await readFile(path.join(source, filename));
  const hash = createHash("sha256").update(buffer).digest("hex").slice(0, 16);
  const name = `${hash}.webp`;
  files.push(name);
  if (!unique.has(name)) unique.set(name, filename);
}
const entries = Array.from(unique.entries());
let next = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (next < entries.length) {
    const [name, original] = entries[next++];
    const image = sharp(path.join(source, original));
    await Promise.all([
      image.clone().sharpen({ sigma: 0.5, m1: 0.4, m2: 1 }).webp({ quality: 87, effort: 5 }).toFile(path.join(output, "desktop", name)),
      image.clone().resize({ width: 720, height: 1080, fit: "cover", position: "centre", withoutEnlargement: true }).sharpen({ sigma: 0.5 }).webp({ quality: 86, effort: 5 }).toFile(path.join(output, "mobile", name)),
    ]);
  }
}));
const metadata = await sharp(path.join(source, sources[0])).metadata();
const manifest = { count: files.length, width: metadata.width, height: metadata.height, desktop: "/hero-frames/new-hero/desktop", mobile: "/hero-frames/new-hero/mobile", files };
await writeFile(path.join(output, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(JSON.stringify({ frames: files.length, uniqueFrames: unique.size, width: metadata.width, height: metadata.height }));
