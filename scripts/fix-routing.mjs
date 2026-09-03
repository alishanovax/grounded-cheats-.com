#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Grounded source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'trainer-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['grounded-god-mode', 'grounded-god-mode'],
	['grounded-trainer', 'grounded-trainer'],
	['anti-cheat', 'anti-cheat'],
	['undetected-grounded-cheats', 'undetected-grounded-cheats'],
	['grounded-cheat-engine', 'grounded-cheat-engine'],
	['grounded-free-crafting', 'grounded-free-crafting'],
	['grounded-cheats-2026', 'grounded-cheats-2026'],
	['anti-cheat-bypass', 'anti-cheat-bypass'],
	['groundedcheats.com', 'groundedcheats.com'],
	['trucos-grounded', 'trucos-grounded'],
	['triche-grounded', 'triche-grounded'],
	['grounded-cheats', 'escape-from-grounded-cheats'],
	['cheats-grounded', 'cheats-grounded'],
	['trucchi-grounded', 'trucchi-grounded'],
	['cheaty-grounded', 'cheaty-grounded'],
	['chity-grounded', 'chity-grounded'],
	['chitov-grounded', 'chitov-grounded'],
	['chitiv-grounded', 'chitiv-grounded'],
	['cheatow-grounded', 'cheatow-grounded'],
	['hile-grounded', 'hile-grounded'],
	['grounded-hile', 'grounded-hile'],
	['grounded-god-mode-chity', 'grounded-god-mode-chity'],
	['grounded-trainer-chity', 'grounded-trainer-chity'],
	['unentdeckte-grounded-cheats', 'unentdeckte-escape-from-grounded-cheats'],
	['cheats-grounded-indetectaveis', 'cheats-grounded-indetectaveis'],
	['trucchi-grounded-indetectabili', 'trucchi-grounded-indetectabili'],
	['niewykrywalne-cheats-grounded', 'niewykrywalne-cheats-grounded'],
	['nedecektiruemye-chity-grounded', 'nedecektiruemye-chity-grounded'],
	['tespit-edilemeyen-grounded-hileleri', 'tespit-edilemeyen-grounded-hileleri'],
	['nedecektovani-chity-grounded', 'nedecektovani-chity-grounded'],
	['cheats-grounded-nedetectabile', 'cheats-grounded-nedetectabile'],
	['basta-grounded-cheats', 'basta-escape-from-grounded-cheats'],
	['anti-cheat-bypass-trucos-grounded', 'anti-cheat-bypass-trucos-grounded'],
	['anti-cheat-bypass-triche-grounded', 'anti-cheat-bypass-triche-grounded'],
	['anti-cheat-bypass-cheats-grounded', 'anti-cheat-bypass-cheats-grounded'],
	['anti-cheat-bypass-chity-grounded', 'anti-cheat-bypass-chity-grounded'],
	['anti-cheat-bypass-grounded', 'anti-cheat-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix easy-anti-cheat key in englishPaths
	content = content.replace(/\teasy-anti-cheat: '/, "\t'anti-cheat': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-grounded-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-grounded-cheats-hero.webp',
	'grounded-god-mode': '/images/escape-from-grounded-cheats-esp-god mode.webp',
	'grounded-trainer': '/images/escape-from-grounded-cheats-trainer-combat.webp',
	features: '/images/escape-from-grounded-cheats-package.webp',
	pricing: '/images/escape-from-grounded-cheats-cover.webp',
	setup: '/images/grounded-loadout-builder.webp',
	updates: '/images/grounded-header-art.webp',
	faq: '/images/grounded-squad-fight.webp',
	support: '/images/escape-from-grounded-cheats-package.webp',
	undetected: '/images/grounded-battle-royale-combat.webp',
	god mode: '/images/escape-from-grounded-cheats-esp-god mode.webp',
	radar: '/images/grounded-player-esp.webp',
	'anti-cheat': '/images/grounded-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-grounded-cheats-hero.webp',
	privacy: '/images/escape-from-grounded-cheats-trainer-combat.webp',
	refund: '/images/escape-from-grounded-cheats-cover.webp',
	terms: '/images/escape-from-grounded-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'grounded-god-mode', 'grounded-trainer', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'god mode', 'radar', 'anti-cheat',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'grounded-god-mode' | 'grounded-trainer' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'god mode' | 'radar' | 'anti-cheat' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/base campFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
