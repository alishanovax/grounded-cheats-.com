#!/usr/bin/env node
/**
 * Completes escape-from-grounded-cheats SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'grounded-cheats', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'grounded-trainer-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'grounded-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'grounded-infinite-health', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-grounded-cheats', pageId: 'best-cheats' },
	{ id: 'trainer-hack', dir: 'grounded-super-damage', pageId: 'trainer-hack' },
	{ id: 'esp-hack', dir: 'grounded-noclip', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'grounded-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/grounded-grounded/g, 'grounded'],
	[/anti-cheat-bypass-grounded/g, 'anti-cheat-bypass'],
	[/Grounded/g, 'Grounded'],
	[/Grounded/g, 'Grounded'],
	[/Call of Duty/g, 'Grounded'],
	[/Grounded God mode/g, 'Grounded God mode'],
	[/Grounded Radar Hack/g, 'Grounded Radar Hack'],
	[/Grounded Cheat Features/g, 'Grounded Cheat Features'],
	[/Grounded Cheat Pricing/g, 'Grounded Cheat Pricing'],
	[/Grounded Cheat Setup/g, 'Grounded Cheat Setup'],
	[/Grounded Cheat Status/g, 'Grounded Cheat Status'],
	[/Grounded Cheat Support/g, 'Grounded Cheat Support'],
	[/Grounded squad fight/g, 'Grounded squad fight'],
	[/Grounded squad builder/g, 'Grounded loadout builder'],
	[/Grounded store header/g, 'Grounded header'],
	[/Grounded wasteland combat/g, 'Grounded battle royale combat'],
	[/Grounded loadout builder/g, 'Grounded loadout builder'],
	[/Grounded pricing/g, 'Grounded pricing'],
	[/Grounded Easy Anti-Cheat/g, 'Grounded Easy Anti-Cheat'],
	[/on Grounded/g, 'on Grounded'],
	[/for Grounded/g, 'for Grounded'],
	[/Grounded guides/g, 'Grounded guides'],
	[/Grounded guide/g, 'Grounded guide'],
	[/Grounded hileleri/g, 'Grounded hileleri'],
	[/Grounded hile/g, 'Grounded hile'],
	[/Grounded hileleri/g, 'Grounded hileleri'],
	[/cheatów Grounded/g, 'cheatów Grounded'],
	[/cheat Grounded/g, 'cheat Grounded'],
	[/cheats Grounded/g, 'cheats Grounded'],
	[/trucos Grounded/g, 'trucos Grounded'],
	[/triche Grounded/g, 'triche Grounded'],
	[/trucchi Grounded/g, 'trucchi Grounded'],
	[/God mode Grounded/g, 'Grounded God mode'],
	[/cheat Grounded undetected/g, 'cheat Grounded undetected'],
	[/cheats Grounded undetected/g, 'cheats Grounded undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/session and scav-run/g, 'session and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/easy-anti-cheat/gi, 'anti-cheat'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-grounded-cheats/g, 'escape-from-grounded-cheats'],
	[/escape-from-grounded/g, 'grounded'],
	[/Undetected God mode for Call of Duty/g, 'Undetected God mode for Grounded'],
	[/How ESP god mode, radar, and Trainer rebuild after Call of Duty anti-cheat/g,
		'How ESP god mode, radar, and Trainer rebuild after Grounded anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Grounded Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Grounded guides/g, 'Grounded guides');
	content = content.replace(/Grounded guide/g, 'Grounded guide');
	content = content.replace(/Grounded hileleri/g, 'Grounded hileleri');
	content = content.replace(/Grounded hile/g, 'Grounded hile');
	content = content.replace(/cheat Grounded/g, 'cheat Grounded');
	content = content.replace(/cheats Grounded/g, 'cheats Grounded');
	content = content.replace(/trucos Grounded/g, 'trucos Grounded');
	content = content.replace(/triche Grounded/g, 'triche Grounded');
	content = content.replace(/trucchi Grounded/g, 'trucchi Grounded');
	content = content.replace(/cheatów Grounded/g, 'cheatów Grounded');
	content = content.replace(/читов Grounded/g, 'читов Grounded');
	content = content.replace(/читів Grounded/g, 'читів Grounded');
	content = content.replace(/Groundedチート/g, 'Groundedチート');
	content = content.replace(/Grounded 치트/g, 'Grounded 치트');
	content = content.replace(/Grounded作弊/g, 'Grounded作弊');
	content = content.replace(/Grounded rehberleri/g, 'Grounded rehberleri');
	content = content.replace(/Grounded gidsen/g, 'Grounded gidsen');
	content = content.replace(/Grounded průvodce/g, 'Grounded průvodce');
	content = content.replace(/Grounded guider/g, 'Grounded guider');
	content = content.replace(/Grounded related/g, 'Grounded related');
	content = content.replace(/Grounded ガイド/g, 'Grounded ガイド');
	content = content.replace(/Grounded 가이드/g, 'Grounded 가이드');
	content = content.replace(/Grounded指南/g, 'Grounded指南');
	content = content.replace(/Grounded गाइड/g, 'Grounded गाइड');
	content = content.replace(/Grounded panduan/g, 'Grounded panduan');
	content = content.replace(/Grounded คู่มือ/g, 'Grounded คู่มือ');
	content = content.replace(/Grounded hướng dẫn/g, 'Grounded hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Grounded Cheats SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
