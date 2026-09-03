#!/usr/bin/env node
/** Final pass: fix remaining Grounded references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'trainer-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['groundedImages', 'groundedImages'],
	["from '../data/grounded'", "from '../data/grounded'"],
	["from './grounded'", "from './grounded'"],
	['/undetected-grounded-cheats/', '/undetected-grounded-cheats/'],
	['/grounded-cheat-engine/', '/grounded-cheat-engine/'],
	['/grounded-free-crafting/', '/grounded-free-crafting/'],
	['/anti-cheat-bypass/', '/anti-cheat-bypass/'],
	['/grounded-cheats-2026/', '/grounded-cheats-2026/'],
	['/grounded-trainer/', '/grounded-trainer/'],
	['/grounded-god-mode/', '/grounded-god-mode/'],
	['/grounded-cheats/', '/grounded-god-mode/'],
	['Grounded Cheats', 'Grounded Cheats'],
	['Grounded cheats', 'Grounded cheats'],
	['Grounded god mode', 'Grounded god mode'],
	['Grounded radar', 'Grounded radar'],
	['Grounded Trainer', 'Grounded Trainer'],
	['Grounded ESP', 'Grounded ESP'],
	['Grounded', 'Grounded'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['anti-cheat', 'anti-cheat'],
	['groundedcheats.com', 'groundedcheats.com'],
	['operatorEsp', 'playerEsp'],
	['base campFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
