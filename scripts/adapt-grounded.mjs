#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Grounded Cheats (groundedcheats.com)
 * Run from project root: node scripts/adapt-grounded.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'grounded-trainer'],
	['tarkov-esp', 'grounded-god-mode'],
	['tarkov-wallhack', 'grounded-cheat-engine'],
	['tarkov-radar-hack', 'grounded-free-crafting'],
	['undetected-tarkov-cheats', 'undetected-grounded-cheats'],
	['tarkov-cheats-2026', 'grounded-cheats-2026'],
	['battleye-bypass', 'anti-cheat-bypass'],
	['tarkov-cheats', 'grounded-cheats'],
	['tarkov-cheat-download', 'grounded-trainer-download'],
	['tarkov-mod-menu', 'grounded-mod-menu'],
	['tarkov-soft-aim', 'grounded-infinite-health'],
	['best-tarkov-cheats', 'best-grounded-cheats'],
	['tarkov-aimbot-hack', 'grounded-super-damage'],
	['tarkov-esp-hack', 'grounded-noclip'],
	['tarkov-unlock-all', 'grounded-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://groundedcheats.com'],
	['https://www.tarkovcheats.org', 'https://www.groundedcheats.com'],
	['https://tarkovcheats.net', 'https://groundedcheats.com'],
	['www.tarkovcheats.org', 'www.groundedcheats.com'],
	['tarkovcheats.org', 'groundedcheats.com'],
	['support@tarkovcheats.org', 'support@groundedcheats.com'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fgrounded'],
	['/products/escape-from-tarkov', '/products/grounded'],
	['project-name=tarkovcheats', 'project-name=groundedcheats'],
	['project-name=besttarkovcheats', 'project-name=groundedcheats'],
	['name = "besttarkovcheats"', 'name = "groundedcheats"'],
	['"name": "tarkov-cheats"', '"name": "grounded-cheats"'],
	['undetected-tarkov-cheats', 'undetected-grounded-cheats'],
	['best-tarkov-cheats', 'best-grounded-cheats'],
	['tarkov-cheat-download', 'grounded-trainer-download'],
	['tarkov-cheats-2026', 'grounded-cheats-2026'],
	['tarkov-radar-hack', 'grounded-free-crafting'],
	['tarkov-aimbot-hack', 'grounded-super-damage'],
	['tarkov-esp-hack', 'grounded-noclip'],
	['tarkov-unlock-all', 'grounded-unlock-all'],
	['tarkov-soft-aim', 'grounded-infinite-health'],
	['tarkov-mod-menu', 'grounded-mod-menu'],
	['tarkov-wallhack', 'grounded-cheat-engine'],
	['tarkov-cheats', 'grounded-cheats'],
	['tarkov-aimbot', 'grounded-trainer'],
	['tarkov-esp', 'grounded-god-mode'],
	['battleye-bypass', 'anti-cheat-bypass'],
	["'tarkov-esp'", "'grounded-god-mode'"],
	["'tarkov-aimbot'", "'grounded-trainer'"],
	['pageId="battleye"', 'pageId="anti-cheat"'],
	["pageId: 'battleye'", "pageId: 'anti-cheat'"],
	["'battleye'", "'anti-cheat'"],
	['"battleye"', '"anti-cheat"'],
	['tarkov-cheats-logo', 'grounded-cheats-logo'],
	['tarkov-hero-banner', 'grounded-hero-banner'],
	['tarkov-hero-ghost', 'grounded-hero-ghost'],
	['tarkov-hero-source', 'grounded-hero-source'],
	['escape-from-tarkov-cheats', 'grounded-cheats-pc'],
	['Escape from Tarkov', 'Grounded'],
	['Escape From Tarkov', 'Grounded'],
	['Tarkov Cheats', 'Grounded Cheats'],
	['Tarkov cheats', 'Grounded cheats'],
	['Tarkov cheat', 'Grounded cheat'],
	['Tarkov hacks', 'Grounded cheats'],
	['Tarkov hack', 'Grounded cheat'],
	['Tarkov Intel', 'Grounded Guides'],
	['TarkovCheatsSite', 'GroundedCheatsSite'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'easy-anti-cheat'],
	['Customs, Woods, and Streets of Tarkov', 'backyard biomes, oak tree, and sandbox zones'],
	['Customs, Woods and Streets of Tarkov', 'backyard biomes, oak tree, and sandbox zones'],
	['PMC raids and Scav runs', 'solo survival and co-op sessions'],
	['PMC & Scav', 'Solo & Co-op'],
	['PMC raids', 'survival sessions'],
	['Scav runs', 'co-op sessions'],
	['PMCs', 'players'],
	['Scavs', 'insects'],
	['extract fights', 'boss fights'],
	['extract fight', 'boss fight'],
	['raid rounds', 'play sessions'],
	['extract', 'base camp'],
	['raid', 'session'],
	['loot routes', 'resource farming'],
	['soft aim', 'trainer controls'],
	['Soft aim', 'Trainer controls'],
	['aimbot', 'trainer'],
	['Aimbot', 'Trainer'],
	['wallhack', 'god mode'],
	['Wallhack', 'God mode'],
	['ESP wallhack', 'trainer menu'],
	['ESP, soft aim, and radar', 'god mode, infinite health, and free crafting'],
	['ESP, aimbot, and radar', 'god mode, infinite stamina, and mod menu'],
	['ESP, soft aim, radar', 'god mode, infinite health, mod menu'],
	['2D radar', 'item spawner'],
	['radar hack', 'free crafting'],
	['Radar hack', 'Free crafting'],
	['tarkovImages', 'groundedImages'],
	["from './tarkov'", "from './grounded'"],
	["from '../data/tarkov'", "from '../data/grounded'"],
	["from '../../data/tarkov'", "from '../../data/grounded'"],
	['fetch-tarkov-images', 'fetch-grounded-images'],
	['tarkov-hack-overlays', 'grounded-trainer-overlays'],
	['generate-blog-posts.mjs', 'generate-grounded-blog-posts.mjs'],
	['trucos-tarkov', 'trucos-grounded'],
	['triche-tarkov', 'triche-grounded'],
	['cheats-tarkov', 'cheats-grounded'],
	['trucchi-tarkov', 'trucchi-grounded'],
	['cheaty-tarkov', 'cheaty-grounded'],
	['chity-tarkov', 'chity-grounded'],
	['chitov-tarkov', 'chitov-grounded'],
	['chitiv-tarkov', 'chitiv-grounded'],
	['cheatow-tarkov', 'cheatow-grounded'],
	['hile-tarkov', 'hile-grounded'],
	['tarkov-hile', 'grounded-hile'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-grounded-cheats'],
	['cheats-tarkov-indetectaveis', 'cheats-grounded-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-grounded-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-grounded'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-grounded'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-grounded-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-grounded'],
	['cheats-tarkov-nedetectabile', 'cheats-grounded-nedetectabile'],
	['basta-tarkov-cheats', 'basta-grounded-cheats'],
	['tarkov-cheats-funktionen', 'grounded-cheats-funktionen'],
	['tarkov-cheats-functies', 'grounded-cheats-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-grounded'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-grounded'],
	['recursos-cheats-tarkov', 'recursos-cheats-grounded'],
	['call-of-duty-warzone', 'grounded-survival'],
	['Buy Tarkov Cheats', 'Buy Grounded Cheats'],
	['tarkov cheats', 'grounded cheats'],
	['undetected tarkov cheats', 'undetected grounded cheats'],
	['best tarkov cheats', 'best grounded cheats'],
	['tarkov esp', 'grounded god mode'],
	['tarkov aimbot', 'grounded trainer'],
	['tarkov wallhack', 'grounded cheat engine'],
	['tarkov hacks', 'grounded cheats'],
	['Tarkov', 'Grounded'],
	['tarkov', 'grounded'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['adapt-tarkov.mjs', 'adapt-grounded.mjs', 'adapt-fortnite.mjs', 'adapt-warzone.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataTs() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'grounded.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → grounded.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-grounded-images.mjs'],
		['tarkov-hack-overlays.mjs', 'grounded-trainer-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-grounded-copy.mjs'],
		['generate-blog-posts.mjs', 'generate-grounded-blog-posts.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'grounded-trainer': 'grounded-trainer',
		'grounded-god-mode': 'grounded-god-mode',
		'grounded-cheat-engine': 'wallhack',
		'grounded-free-crafting': 'radar',
		'undetected-grounded-cheats': 'undetected',
		'grounded-cheats-2026': 'cheats-2026',
		'anti-cheat-bypass': 'anti-cheat',
		'grounded-cheats': 'hacks',
		'grounded-trainer-download': 'cheat-download',
		'grounded-mod-menu': 'mod-menu',
		'grounded-infinite-health': 'soft-aim',
		'best-grounded-cheats': 'best-cheats',
		'grounded-super-damage': 'aimbot-hack',
		'grounded-noclip': 'esp-hack',
		'grounded-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'grounded');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Grounded Cheats (groundedcheats.com)...\n');
	await renamePageDirs();
	await renameDataTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, fetch images, generate blogs, sync:brand.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
