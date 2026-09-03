import { mkdir, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { buildOverlaySvg } from './grounded-trainer-overlays.mjs';

const imagesDir = path.resolve('public/images');
const publicDir = path.resolve('public');

const PK = 'https://sm.ign.com/t/ign_pk/photo/default';
const ZA = 'https://sm.ign.com/t/ign_za/photo/default';
const G2 = 'https://sm.ign.com/t/ign_pk/gallery/g/grounded-2';

const KEYWORD_ASSETS = [
	{ file: 'grounded-cheats-hero.webp', url: `${G2}/grounded-2-screenshots_xfmw.1400.jpg`, overlay: 'hero' },
	{ file: 'grounded-cheats-aimbot.webp', url: `${PK}/grounded-2-scorpion-fight-01-small-1753750317289_ht24.1400.jpg`, overlay: 'menu' },
	{ file: 'grounded-cheats-wallhack.webp', url: `${PK}/grounded-2-cockroach-fight-01-small-1753750317289_fzu5.1400.jpg`, overlay: 'godmode' },
	{ file: 'grounded-cheats-esp.webp', url: `${PK}/grounded-2-base-build-01-small-1753750317289_gx6s.1400.jpg`, overlay: 'crafting' },
	{ file: 'grounded-cheats-raid.webp', url: `${PK}/grounded-2-environment-small-1753750317290_cu6v.1400.jpg`, overlay: 'hero' },
	{ file: 'grounded-cheats-radar.webp', url: `${PK}/grounded-2-ladybug-small-1753750317290_vsa5.1400.jpg`, overlay: 'items' },
	{ file: 'grounded-cheats-aimbot-view.webp', url: `${PK}/grounded-2-caterpillar-small-1753750317290_z178.1400.jpg`, overlay: 'menu' },
	{ file: 'grounded-squad-fight.webp', url: `${PK}/grounded-2-scorpion-fight-02-small-1753750317290_p6a1.1400.jpg`, overlay: 'godmode' },
	{ file: 'grounded-header-art.webp', url: `${PK}/grounded-2-ice-cream-cart-01-small-1753750317290_g2f5.1400.jpg`, overlay: 'hero' },
	{ file: 'grounded-loadout-builder.webp', url: `${PK}/grounded-2-base-build-03-small-1753750317290_kznk.1400.jpg`, overlay: 'crafting' },
	{ file: 'grounded-battle-royale-combat.webp', url: `${ZA}/screenshot-10-1664317245753_u8xh.1400.jpg`, overlay: 'godmode' },
	{ file: 'grounded-extract-fight.webp', url: `${ZA}/screenshot-9-1664317245752_2dw9.1400.jpg`, overlay: 'menu' },
	{ file: 'grounded-player-esp.webp', url: `${ZA}/screenshot-8-1664317245752_cwfx.1400.jpg`, overlay: 'items' },
	{ file: 'grounded-scav-run-combat.webp', url: `${ZA}/screenshot-7-1664317245751_6mpw.1400.jpg`, overlay: 'godmode' },
	{ file: 'grounded-scav-run-mode.webp', url: `${ZA}/screenshot-6-1664317245751_fgtb.1400.jpg`, overlay: 'crafting' },
	{ file: 'grounded-verdansk-map.webp', url: `${ZA}/screenshot-5-1664317245750_v5bz.1400.jpg`, overlay: 'hero' },
	{ file: 'grounded-cheats-cover.webp', url: `${ZA}/screenshot-3-1664317245749_6p8g.1400.jpg`, overlay: 'menu' },
	{ file: 'grounded-cheats-package.webp', url: `${ZA}/screenshot-2-1664317245748_v2b2.1400.jpg`, overlay: 'items' },
];

const LOGO_URL = 'https://zadeyo.com/_next/image?url=%2Frt-removebg-preview.png&w=256&q=75';

const REMOVE_PATTERNS = [/^fortnite-/, /^tarkov-/, /^grounded-aimbot-skeleton/];

async function fetchBase(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; GroundedCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function composeImage(baseBuffer, overlayPreset) {
	const base = sharp(baseBuffer).resize({ width: 1920, withoutEnlargement: true });
	const meta = await base.metadata();
	const width = meta.width ?? 1920;
	const height = meta.height ?? 1080;
	const overlaySvg = Buffer.from(buildOverlaySvg(width, height, overlayPreset));
	const darkened = await base.modulate({ brightness: 0.88, saturation: 1.12 }).toBuffer();
	return sharp(darkened)
		.composite([{ input: overlaySvg, top: 0, left: 0 }])
		.webp({ quality: 86 })
		.toBuffer();
}

async function cleanImagesDir() {
	const files = await readdir(imagesDir).catch(() => []);
	for (const file of files) {
		if (file.includes('grounded-cheats-logo')) continue;
		if (REMOVE_PATTERNS.some((p) => p.test(file))) {
			await unlink(path.join(imagesDir, file)).catch(() => {});
		}
	}
}

async function downloadLogo() {
	try {
		const buf = await fetchBase(LOGO_URL);
		const logoWebp = await sharp(buf).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 90 }).toBuffer();
		const logoPng = await sharp(buf).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
		await writeFile(path.join(imagesDir, 'grounded-cheats-logo.webp'), logoWebp);
		await writeFile(path.join(imagesDir, 'grounded-cheats-logo.png'), logoPng);
		for (const { name, size } of [
			{ name: 'favicon-16x16.png', size: 16 },
			{ name: 'favicon-32x32.png', size: 32 },
			{ name: 'apple-touch-icon.png', size: 180 },
			{ name: 'favicon.png', size: 192 },
		]) {
			await writeFile(path.join(publicDir, name), await sharp(logoPng).resize(size, size).png().toBuffer());
		}
		await writeFile(path.join(publicDir, 'favicon.ico'), await sharp(logoPng).resize(32, 32).png().toBuffer());
		console.log('Downloaded logo + favicons');
	} catch (e) {
		console.warn('Logo download failed:', e.message);
	}
}

await mkdir(imagesDir, { recursive: true });
await cleanImagesDir();

let heroBuffer = null;
let saved = 0;

for (const asset of KEYWORD_ASSETS) {
	console.log(`Fetching ${asset.file} (${asset.overlay})`);
	try {
		const base = await fetchBase(asset.url);
		const webp = await composeImage(base, asset.overlay);
		await writeFile(path.join(imagesDir, asset.file), webp);
		console.log(`  ✓ ${asset.file}`);
		saved++;
		if (asset.file === 'grounded-cheats-hero.webp') heroBuffer = webp;
	} catch (err) {
		console.warn(`  ✗ Skip ${asset.file}: ${err.message}`);
	}
}

await downloadLogo();

// Responsive hero variants
if (heroBuffer) {
	for (const { suffix, width } of [
		{ suffix: '-640w', width: 640 },
		{ suffix: '-1024w', width: 1024 },
		{ suffix: '-1536w', width: 1536 },
	]) {
		const buf = await sharp(heroBuffer).resize(width, null, { withoutEnlargement: true }).webp({ quality: 85 }).toBuffer();
		await writeFile(path.join(imagesDir, `grounded-cheats-hero${suffix}.webp`), buf);
		const png = await sharp(heroBuffer).resize(width, null, { withoutEnlargement: true }).png().toBuffer();
		await writeFile(path.join(imagesDir, `grounded-cheats-hero${suffix}.png`), png);
	}
	await writeFile(path.join(imagesDir, 'grounded-cheats-hero-full.png'), await sharp(heroBuffer).png().toBuffer());
}

// Responsive variants for main product images
const mainImages = ['grounded-cheats-esp', 'grounded-cheats-wallhack', 'grounded-cheats-aimbot', 'grounded-cheats-radar', 'grounded-cheats-raid', 'grounded-cheats-aimbot-view'];
for (const name of mainImages) {
	const fp = path.join(imagesDir, `${name}.webp`);
	try {
		const buf = await sharp(fp).toBuffer();
		for (const w of [480, 960]) {
			await writeFile(path.join(imagesDir, `${name}-${w}w.webp`), await sharp(buf).resize(w, null, { withoutEnlargement: true }).webp({ quality: 84 }).toBuffer());
		}
	} catch { /* skip */ }
}

console.log(`\nDone — ${saved}/${KEYWORD_ASSETS.length} Grounded images from IGN + logo.`);
