// One-off script: parses the Google Fonts CSS (already fetched into
// .staging/fonts.css with a real browser UA to get woff2 URLs) and
// downloads the "latin" + "latin-ext" subsets (covers French accents)
// for each family/weight into public/fonts/, so the site no longer
// depends on a live fetch to fonts.gstatic.com at request time.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const cssPath = path.join(projectRoot, ".staging", "fonts.css");
const outDir = path.join(projectRoot, "public", "fonts");
fs.mkdirSync(outDir, { recursive: true });

const css = fs.readFileSync(cssPath, "utf-8");

// Split into @font-face blocks, each preceded by a /* subset */ comment.
const blocks = css.split(/\/\*\s*([\w-]+)\s*\*\//).slice(1);
// blocks alternates: [subset, faceCss, subset, faceCss, ...]

const wanted = new Set(["latin", "latin-ext"]);
const manifest = [];

for (let i = 0; i < blocks.length; i += 2) {
  const subset = blocks[i];
  const faceCss = blocks[i + 1];
  if (!wanted.has(subset)) continue;

  const family = /font-family:\s*'([^']+)'/.exec(faceCss)?.[1];
  const weight = /font-weight:\s*(\d+)/.exec(faceCss)?.[1];
  const url = /src:\s*url\(([^)]+)\)/.exec(faceCss)?.[1];
  if (!family || !weight || !url) continue;

  const familySlug = family.toLowerCase().replace(/\s+/g, "-");
  const filename = `${familySlug}-${weight}-${subset}.woff2`;
  manifest.push({ family, weight: Number(weight), subset, filename, url });
}

console.log(`Found ${manifest.length} font files to download`);

for (const entry of manifest) {
  const dest = path.join(outDir, entry.filename);
  const res = await fetch(entry.url);
  if (!res.ok) {
    console.error(`FAILED ${entry.filename}: ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log(`OK ${entry.filename} (${buf.length} bytes)`);
}

fs.writeFileSync(
  path.join(projectRoot, ".staging", "fonts-manifest.json"),
  JSON.stringify(manifest, null, 2)
);
console.log("Manifest written to .staging/fonts-manifest.json");
