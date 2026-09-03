#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Grounded source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'trainer-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['grounded-god-mode', 'grounded-god-mode'],
	['grounded-trainer', 'grounded-trainer'],
	["'anti-cheat'", "'anti-cheat'"],
	['anti-cheat-bypass', 'anti-cheat-bypass'],
	['undetected-grounded-cheats', 'undetected-grounded-cheats'],
	['grounded-cheat-engine', 'grounded-cheat-engine'],
	['grounded-free-crafting', 'grounded-free-crafting'],
	['grounded-cheats-2026', 'grounded-cheats-2026'],
	['escape-from-grounded-cheats', 'escape-from-grounded-cheats'],
	['escape-from-grounded', 'grounded'],
	['Grounded', 'Grounded'],
	['Grounded', 'Grounded'],
	['Grounded Cheats', 'Grounded Cheats'],
	['Grounded cheats', 'Grounded cheats'],
	['Grounded cheat', 'Grounded cheat'],
	['Grounded ESP', 'Grounded ESP'],
	['Grounded Trainer', 'Grounded Trainer'],
	['Grounded god mode', 'Grounded god mode'],
	['Grounded radar', 'Grounded radar'],
	['Grounded firefights', 'Grounded firefights'],
	['Grounded combat', 'Grounded combat'],
	['Grounded patches', 'Grounded patches'],
	['Grounded updates', 'Grounded updates'],
	['Grounded setup', 'Grounded setup'],
	['Grounded license', 'Grounded license'],
	['Grounded licenses', 'Grounded licenses'],
	['Grounded sessions', 'Grounded sessions'],
	['in Grounded', 'in Grounded'],
	['for Grounded', 'for Grounded'],
	['Grounded on', 'Grounded on'],
	['Grounded or', 'Grounded or'],
	['Grounded\'s', 'Grounded\'s'],
	['Grounded ', 'Grounded '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['anti-cheat', 'anti-cheat'],
	['support@groundedcheats.com', 'support@groundedcheats.com'],
	['backyard biomes, oak tree, and sandbox zones', 'backyard biomes, oak tree, and sandbox zones'],
	['backyard biomes, oak tree, and sandbox zones', 'backyard biomes, oak tree, and sandbox zones'],
	['boss fights', 'boss fights'],
	['boss fight', 'boss fight'],
	['play sessions', 'play sessions'],
	['base camp', 'base camp'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['base camp timer', 'base camp timer'],
	['solo survival and co-op sessions', 'solo survival and co-op sessions'],
	['solo survival and co-op sessions', 'solo survival and co-op sessions'],
	['Solo & Co-op', 'Solo & Co-op'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Grounded combat pace'],
	['COD', 'Grounded'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP god mode',
	radar: 'free crafting',
	trainer: 'Trainer',
	product: 'Grounded Cheats',
	game: 'Grounded',
	checkout: 'Zadeyo',
	easy-anti-cheat: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.easy-anti-cheat/g, 'KW.easy-anti-cheat');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'backyard biomes, oak tree, and sandbox zones'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
