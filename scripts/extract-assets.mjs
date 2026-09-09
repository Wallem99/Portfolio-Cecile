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
// (Find it dynamically — the filename uses a combining accent character.)
const pdfName = fs.readdirSync(repoRoot).find((f) => f.toLowerCase().endsWith(".pdf"));
if (!pdfName) {
  console.error("WARNING: no CV PDF found in repo root, skipping copy.");
} else {
  const CV_PATH = path.join(repoRoot, pdfName);
  const publicDir = path.join(projectRoot, "public");
  fs.mkdirSync(publicDir, { recursive: true });
  fs.copyFileSync(
    CV_PATH,
    path.join(publicDir, "cv-ngo-ntonga-cecile-claude-2025.pdf")
  );
  console.log("Copied CV PDF to public/");
}
