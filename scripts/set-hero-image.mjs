#!/usr/bin/env node
/** Build homepage hero WebP ladder from source artwork. */
import { copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = path.join(ROOT, 'public/images');
const sourceArg = process.argv[2];
const defaultSource = path.join(
	ROOT,
	'assets/c__Users_JUMBO_COMPUTERS_AppData_Roaming_Cursor_User_workspaceStorage_5496d87f9f6820d2c16cdc5c01edf511_images_image-c3667518-6247-46f0-a8f3-06a0de64eecf.jpg',
);
const source = sourceArg ? path.resolve(sourceArg) : defaultSource;

const widths = [640, 1024, 1400];

const meta = await sharp(source).metadata();
const nativeWidth = meta.width ?? 1920;
const nativeHeight = meta.height ?? 1080;

for (const width of widths) {
	if (width > nativeWidth) continue;
	const file = `grounded-cheats-hero-${width}w.webp`;
	const buffer = await sharp(source)
		.resize({ width, withoutEnlargement: true })
		.webp({ quality: width <= 640 ? 72 : 82, effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, file), buffer);
	console.log(`Wrote ${file} (${buffer.length} bytes)`);
}

await copyFile(source, path.join(imagesDir, 'grounded-cheats-hero.jpg'));
console.log(`Native dimensions: ${nativeWidth}x${nativeHeight}`);
