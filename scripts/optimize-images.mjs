import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const root = process.cwd();
const imageDirectory = path.resolve(root, "public/images");
const sourceDirectory = path.resolve(root, ".asset-sources/images");

function workspacePath(candidate) {
  const resolved = path.resolve(candidate);
  if (!resolved.startsWith(`${root}${path.sep}`)) throw new Error(`Path outside workspace: ${resolved}`);
  return resolved;
}

async function sourceFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? sourceFiles(entryPath) : /\.(tsx?|jsx?|mjs|css)$/.test(entry.name) ? [entryPath] : [];
  }));
  return files.flat();
}

const files = (await Promise.all(["app", "components", "lib"].map((directory) => sourceFiles(path.join(root, directory))))).flat();
const sources = await Promise.all(files.map(async (file) => ({ file, text: await fs.readFile(file, "utf8") })));
const referenced = new Set(sources.flatMap(({ text }) => [...text.matchAll(/\/images\/[\w.-]+\.(?:jpe?g|png|webp|avif)/g)].map(([url]) => url)));
const originals = await fs.readdir(imageDirectory);
const isOptimized = (name) => /\.(webp|avif)$/.test(name) || /-[a-f\d]{8}\.png$/.test(name);
if ([...referenced].every(isOptimized) && originals.every((name) => referenced.has(`/images/${name}`))) {
  console.log("All referenced images are already optimized; no changes needed.");
  process.exit(0);
}
const replacements = new Map();
const assets = [];
await fs.mkdir(sourceDirectory, { recursive: true });

for (const url of referenced) {
  const originalName = path.basename(url);
  if (isOptimized(originalName)) continue;
  const originalPath = workspacePath(path.join(imageDirectory, originalName));
  const original = await fs.readFile(originalPath);
  const metadata = await sharp(original).metadata();
  const icon = originalName === "cladis-icon.png";
  const logo = originalName.includes("logo");
  let pipeline = sharp(original).rotate();
  if (icon) pipeline = pipeline.resize({ width: 256, height: 256, fit: "inside", withoutEnlargement: true });
  else if (logo) pipeline = pipeline.resize({ width: 900, withoutEnlargement: true });
  else pipeline = pipeline.resize({ width: 3840, withoutEnlargement: true });
  let compressed = icon
    ? await pipeline.png({ compressionLevel: 9, palette: true, effort: 10 }).toBuffer()
    : await pipeline.webp({ quality: 82, effort: 6, lossless: logo }).toBuffer();
  for (let quality = 76; !icon && !logo && compressed.length > original.length && quality >= 64; quality -= 6) {
    compressed = await pipeline.webp({ quality, effort: 6 }).toBuffer();
  }
  const hash = crypto.createHash("sha256").update(compressed).digest("hex").slice(0, 8);
  const extension = icon ? ".png" : ".webp";
  const optimizedName = `${path.parse(originalName).name}-${hash}${extension}`;
  const optimizedUrl = `/images/${optimizedName}`;
  await fs.writeFile(workspacePath(path.join(imageDirectory, optimizedName)), compressed);
  const outputMetadata = await sharp(compressed).metadata();
  replacements.set(url, optimizedUrl);
  assets.push({ source: url, optimized: optimizedUrl, before: original.length, after: compressed.length, width: outputMetadata.width, height: outputMetadata.height, sourceWidth: metadata.width, sourceHeight: metadata.height });
}

for (const { file, text } of sources) {
  let updated = text;
  for (const [before, after] of replacements) updated = updated.replaceAll(before, after);
  if (updated !== text) await fs.writeFile(file, updated);
}

const archived = [];
for (const name of originals) {
  const url = `/images/${name}`;
  if (referenced.has(url) && !replacements.has(url)) continue;
  const from = workspacePath(path.join(imageDirectory, name));
  const to = workspacePath(path.join(sourceDirectory, name));
  try { await fs.access(to); throw new Error(`Archive already exists: ${to}`); }
  catch (error) { if (error.code !== "ENOENT") throw error; }
  const stat = await fs.stat(from);
  if (!stat.isFile()) throw new Error(`Unexpected image directory entry: ${from}`);
  await fs.rename(from, to);
  archived.push({ name, bytes: stat.size, used: referenced.has(url) });
}

const before = archived.reduce((total, entry) => total + entry.bytes, 0);
const after = (await Promise.all((await fs.readdir(imageDirectory)).map(async (name) => (await fs.stat(path.join(imageDirectory, name))).size))).reduce((total, size) => total + size, 0);
const report = { before, after, savingsPercent: Number(((1 - after / before) * 100).toFixed(1)), assets, archived };
await fs.mkdir(path.join(root, "output"), { recursive: true });
await fs.writeFile(path.join(root, "output/asset-optimization.json"), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ before, after, savingsPercent: report.savingsPercent, optimized: assets.length, unusedArchived: archived.filter((entry) => !entry.used).length, archive: ".asset-sources/images" }, null, 2));
