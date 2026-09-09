// Extracts word/media/* images from the source .docx portfolio into .staging/
// as raw files, then converts each to WebP (full + thumb) for use in the site.
import AdmZip from "adm-zip";
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(projectRoot, "..");

const DOCX_PATH = path.join(
  repoRoot,
  "PORTFOLIO_NGO NTONGA Cécile 2026.docx"
);
const STAGING_DIR = path.join(projectRoot, ".staging");
const STAGING_RAW = path.join(STAGING_DIR, "raw");
const STAGING_WEBP = path.join(STAGING_DIR, "webp");

fs.mkdirSync(STAGING_RAW, { recursive: true });
fs.mkdirSync(STAGING_WEBP, { recursive: true });

console.log(`Reading ${DOCX_PATH}`);
const zip = new AdmZip(DOCX_PATH);
const entries = zip
  .getEntries()
  .filter((e) => e.entryName.startsWith("word/media/"));

console.log(`Found ${entries.length} media entries`);

let ok = 0;
let failed = 0;

for (const entry of entries) {
  const baseName = path.basename(entry.entryName); // e.g. image37.png
  const rawPath = path.join(STAGING_RAW, baseName);
  const data = entry.getData();
  fs.writeFileSync(rawPath, data);

  const name = path.parse(baseName).name; // image37
  const fullOut = path.join(STAGING_WEBP, `${name}.webp`);
  const thumbOut = path.join(STAGING_WEBP, `${name}-thumb.webp`);

  try {
    await sharp(data)
      .resize({ width: 1400, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(fullOut);
    await sharp(data)
      .resize({ width: 600, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(thumbOut);
    ok++;
  } catch (err) {
    failed++;
    console.error(`FAILED converting ${baseName}: ${err.message}`);
  }
}

console.log(`Done. Converted: ${ok}, Failed: ${failed}, Total: ${entries.length}`);

// Also copy the CV PDF into public/ for the download button.
// The repo root can hold more than one CV over time (e.g. a 2025 and a
// 2026 version) — pick the most recently modified one rather than just
// "the first .pdf found", so this stays correct as new CVs are added.
// IMPORTANT: after running this, update the filename in
// src/app/api/cv/route.ts to match the one logged below.
const pdfCandidates = fs
  .readdirSync(repoRoot)
  .filter((f) => f.toLowerCase().endsWith(".pdf"))
  .map((f) => ({ name: f, mtime: fs.statSync(path.join(repoRoot, f)).mtimeMs }))
  .sort((a, b) => b.mtime - a.mtime);

if (pdfCandidates.length === 0) {
  console.error("WARNING: no CV PDF found in repo root, skipping copy.");
} else {
  const { name: pdfName } = pdfCandidates[0];
  const CV_PATH = path.join(repoRoot, pdfName);
  const publicDir = path.join(projectRoot, "public");
  fs.mkdirSync(publicDir, { recursive: true });
  const destName = "cv-ngo-ntonga-cecile-claude.pdf";
  fs.copyFileSync(CV_PATH, path.join(publicDir, destName));
  console.log(`Copied most recent CV PDF (${pdfName}) to public/${destName}`);
  if (pdfCandidates.length > 1) {
    console.log(
      `Note: ${pdfCandidates.length} PDFs found in repo root; ignored older ones: ${pdfCandidates
        .slice(1)
        .map((c) => c.name)
        .join(", ")}`
    );
  }
}
