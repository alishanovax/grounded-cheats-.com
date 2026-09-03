#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Grounded Cheats', 'Grounded Cheats'],
	['Grounded cheats', 'Grounded cheats'],
	['Grounded Cheats', 'Grounded Cheats'],
	['Grounded', 'Grounded'],
	['Grounded', 'Grounded'],
	['Call of Duty', 'Grounded'],
	['Grounded PC', 'Grounded PC'],
	['for Grounded', 'for Grounded'],
	['Grounded ', 'Grounded '],
	['grounded ', 'grounded '],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['operatorEsp', 'playerEsp'],
	['base campFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['base camp', 'base camp'],
	['groundedcheats.com', 'groundedcheats.com'],
	['Trucos Grounded', 'Trucos Grounded'],
	['Triches Grounded', 'Triches Grounded'],
	['Cheats Grounded', 'Cheats Grounded'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en easy-anti-cheat key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teasy-anti-cheat: \{/, "\t'anti-cheat': {");
pagesEn = pagesEn.replace(/Grounded Grounded/g, 'Grounded');
pagesEn = pagesEn.replace(/for Grounded Grounded/g, 'for Grounded');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'anti-cheat'/g, "'anti-cheat'");
pagesI18n = pagesI18n.replace(/easy-anti-cheat:/g, "'anti-cheat':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
