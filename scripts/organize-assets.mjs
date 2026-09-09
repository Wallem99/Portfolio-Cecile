// Organizes the converted .staging/webp/* files into public/images/ with
// meaningful names, based on the mapping confirmed by visual inspection
// (see docs/superpowers plan). Idempotent: safe to re-run.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const STAGING_WEBP = path.join(projectRoot, ".staging", "webp");
const IMAGES_DIR = path.join(projectRoot, "public", "images");

function copy(srcName, destRelPath) {
  const src = path.join(STAGING_WEBP, srcName);
  const dest = path.join(IMAGES_DIR, destRelPath);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

// --- Portraits -------------------------------------------------------
// NOTE: image5/image17/image2/image35 are near-fully-transparent "watermark"
// duplicates (alpha capped ~8-16%) used as faint decoration inside the
// original Word doc — NOT usable as real cutouts. image3/8/21/36/88 are the
// true opaque cutouts (alpha reaches 255 on the subject), confirmed via
// `sharp` stats. Only use images from the second group here.
copy("image8.webp", "portraits/hero.webp");
copy("image8-thumb.webp", "portraits/hero-thumb.webp");
copy("image21.webp", "portraits/side-camera.webp");
copy("image3.webp", "portraits/front-camera.webp");
copy("image88.webp", "portraits/at-work.webp");

// The source cutouts are only ~480-580px wide (native docx resolution).
// Displayed at ~380-400 CSS px on a 2x/3x-DPR (retina) screen, that native
// resolution reads as soft/blurry. Upscale with a high-quality kernel and a
// light sharpen pass so they hold up on high-DPI displays.
const UPSCALE_TARGETS = [
  "portraits/hero.webp",
  "portraits/side-camera.webp",
  "portraits/front-camera.webp",
];
for (const rel of UPSCALE_TARGETS) {
  const p = path.join(IMAGES_DIR, rel);
  const buf = fs.readFileSync(p);
  const upscaled = await sharp(buf)
    .resize({ width: 1000, kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8 })
    .webp({ quality: 90 })
    .toBuffer();
  fs.writeFileSync(p, upscaled);
}
console.log(`Upscaled ${UPSCALE_TARGETS.length} portraits for high-DPI screens`);

// --- Client logos ------------------------------------------------------
copy("image22.webp", "logos/jogoo-agriculture.webp");
copy("image23.webp", "logos/yoomee-cameroun.webp");
copy("image24.webp", "logos/atelier-black-giraffe.webp");
copy("image25.webp", "logos/jus-delice.webp");
copy("image32.webp", "logos/biserv-cameroon.webp");
copy("image33.webp", "logos/safvis-sa.webp");
copy("image87.webp", "logos/un-livre-un-jouet.webp");

// --- Project galleries ---------------------------------------------
const GALLERIES = {
  "jogoo-agriculture": range(37, 44),
  "jus-delice": range(45, 52),
  provaressc: range(53, 58),
  "amani-bio-health-care": range(59, 63),
  "makayla-fashion": range(64, 68),
  "savon-noir-du-ghana": range(69, 76),
  "artiste-chanteur": range(77, 80),
  "autres-visuels": range(81, 85),
  "logos-realises": [86, 87],
};

function range(a, b) {
  const out = [];
  for (let i = a; i <= b; i++) out.push(i);
  return out;
}

for (const [slug, ids] of Object.entries(GALLERIES)) {
  ids.forEach((id, idx) => {
    const n = String(idx + 1).padStart(2, "0");
    copy(`image${id}.webp`, `projects/${slug}/${n}.webp`);
    copy(`image${id}-thumb.webp`, `projects/${slug}/${n}-thumb.webp`);
  });
  console.log(`${slug}: ${ids.length} images`);
}

console.log("Done organizing assets into public/images/");
