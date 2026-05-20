/**
 * Media pipeline for Grandma's Love, Inc.
 *
 * Reads the original assets downloaded from the legacy Wix CDN (in /.media-src),
 * resizes + re-encodes them to web-optimized WebP/PNG, and writes them to
 * /public/images so the site has zero runtime dependency on external media.
 *
 * It also emits a tiny base64 blur placeholder for each photographic asset to
 * /src/content/generated/blur.json, used for `placeholder="blur"` on <Image>.
 *
 * Run with:  npm run media
 */
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, ".media-src");
const OUT = path.join(ROOT, "public", "images");
const BLUR_OUT = path.join(ROOT, "src", "content", "generated", "blur.json");

/**
 * @typedef {Object} Job
 * @property {string} src   filename inside /.media-src
 * @property {string} out   output filename (without extension)
 * @property {number} width target width in px
 * @property {"webp"|"png"} [format]  output format (default webp)
 * @property {boolean} [trim]  trim surrounding solid background
 * @property {boolean} [blur]  emit a blur placeholder
 */

/** @type {Job[]} */
const JOBS = [
  // Photography — the emotional core of the site
  { src: "photo-classmates.jpg", out: "hero-children", width: 1800, blur: true },
  { src: "photo-tablets.jpeg", out: "children-tablets", width: 1400, blur: true },
  { src: "photo-beanie-book.jpeg", out: "beanie-book", width: 1200, blur: true },
  { src: "photo-child-writing.jpg", out: "child-writing", width: 1000, blur: true },
  { src: "photo-young-man.jpg", out: "young-reader", width: 1000, blur: true },
  { src: "photo-grass-reading.jpg", out: "grass-reading", width: 1100, blur: true },
  { src: "photo-homework.jpg", out: "homework-help", width: 1000, blur: true },
  { src: "photo-child-forward.jpg", out: "child-portrait", width: 1000, blur: true },
  { src: "photo-children-circle.jpg", out: "children-circle", width: 1100, blur: true },
  { src: "photo-students-group.jpg", out: "students-group", width: 1100, blur: true },

  // Event imagery
  { src: "event-pizza-garden.png", out: "event-pizza-garden", width: 1400, blur: true },
  { src: "event-storytime.png", out: "event-storytime", width: 1400, blur: true },
  { src: "event-workshop.png", out: "event-workshop", width: 1400, blur: true },
  { src: "event-rock.png", out: "event-rock", width: 1400, blur: true },

  // Blog imagery
  { src: "blog-empowering.png", out: "blog-empowering", width: 1200, blur: true },
  { src: "blog-supporting.png", out: "blog-supporting", width: 1200, blur: true },
  { src: "blog-fighting.png", out: "blog-fighting", width: 1200, blur: true },

  // Donation QR — keep lossless + crisp
  { src: "qr-caregivers.png", out: "qr-caregivers", width: 520, format: "png" },

  // Original playful program icons (kept available; transparency preserved)
  { src: "icon-books.png", out: "icon-books", width: 220, format: "png" },
  { src: "icon-vending.png", out: "icon-vending", width: 220, format: "png" },
  { src: "icon-foodbox.png", out: "icon-foodbox", width: 220, format: "png" },
  { src: "icon-hands-hearts.png", out: "icon-hands-hearts", width: 220, format: "png" },
  { src: "icon-donation-box.png", out: "icon-donation-box", width: 220, format: "png" },
  { src: "icon-legacy.png", out: "icon-legacy", width: 220, format: "png" },
];

async function run() {
  if (!existsSync(SRC)) {
    console.error(`Source media directory not found: ${SRC}`);
    process.exit(1);
  }
  await mkdir(OUT, { recursive: true });
  await mkdir(path.dirname(BLUR_OUT), { recursive: true });

  const available = new Set(await readdir(SRC));
  /** @type {Record<string,string>} */
  const blurMap = {};
  let count = 0;

  for (const job of JOBS) {
    if (!available.has(job.src)) {
      console.warn(`skip (missing source): ${job.src}`);
      continue;
    }
    const format = job.format ?? "webp";
    const input = await readFile(path.join(SRC, job.src));
    let pipeline = sharp(input);

    if (job.trim) pipeline = pipeline.trim({ threshold: 12 });
    pipeline = pipeline.resize({
      width: job.width,
      withoutEnlargement: true,
      fit: "inside",
    });

    const outName = `${job.out}.${format}`;
    const buffer =
      format === "png"
        ? await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer()
        : await pipeline.webp({ quality: 80, effort: 5 }).toBuffer();

    await writeFile(path.join(OUT, outName), buffer);
    count += 1;
    console.log(`ok  ${outName}  (${(buffer.length / 1024).toFixed(0)} KB)`);

    if (job.blur) {
      const tiny = await sharp(input)
        .resize({ width: 24, fit: "inside" })
        .webp({ quality: 45 })
        .toBuffer();
      blurMap[job.out] = `data:image/webp;base64,${tiny.toString("base64")}`;
    }
  }

  await deriveBrandIcons();

  await writeFile(BLUR_OUT, JSON.stringify(blurMap, null, 2) + "\n");
  console.log(`\n${count} assets written to public/images`);
  console.log(`blur placeholders -> ${path.relative(ROOT, BLUR_OUT)}`);
}

/**
 * Derives the transparent brand mark and favicons from the master heart logo
 * (public/images/icon.avif), so the logo + favicon stay in sync with the
 * source artwork.
 */
async function deriveBrandIcons() {
  const ICON_SRC = path.join(OUT, "icon.avif");
  if (!existsSync(ICON_SRC)) {
    console.warn("skip brand icons (missing public/images/icon.avif)");
    return;
  }
  const APP = path.join(ROOT, "src", "app");
  const trimmed = await sharp(ICON_SRC).trim({ threshold: 8 }).toBuffer();

  // Header/footer brand mark — transparent webp
  await sharp(trimmed)
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 92 })
    .toFile(path.join(OUT, "logo-mark.webp"));

  // Favicon — transparent, square
  await sharp(trimmed)
    .resize({ width: 64, height: 64, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(APP, "icon.png"));

  // Apple touch icon — opaque paper background (Apple ignores alpha)
  await sharp(trimmed)
    .resize({ width: 150, height: 150, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 15, bottom: 15, left: 15, right: 15, background: { r: 252, g: 247, b: 240, alpha: 1 } })
    .flatten({ background: "#fcf7f0" })
    .png()
    .toFile(path.join(APP, "apple-icon.png"));

  console.log("brand icons -> logo-mark.webp, src/app/icon.png, src/app/apple-icon.png");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
