#!/usr/bin/env node
/**
 * Purge Fortnite/Warzone/BR leftovers from EN page source and regenerate i18n.
 * Run: node scripts/seo-perfect-en.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PAGES_EN = path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs');

/** @type {Array<[RegExp|string, string]>} */
const replacements = [
	// Wrong publishers in prose (EXT.activision already links to escapefromgrounded.com)
	['published by ${EXT.activision}', 'published by Battlestate Games (${EXT.grounded})'],
	['from ${EXT.activision}', 'from ${EXT.grounded}'],
	['via ${EXT.activision}', 'via ${EXT.grounded}'],
	['belong with ${EXT.activision}', 'belong with Battlestate Games'],
	['${EXT.activision} terms', 'Battlestate Games terms'],
	['${EXT.activision} season updates', '${EXT.grounded} wipe and map updates'],

	['PC & Controllers', 'Windows PC'],
	['PC & Controller Guide', 'Windows PC Guide'],
	['PC and controller cheats', 'Windows PC cheats'],

	// BR / Fortnite lexicon → Grounded
	['vehicles, loot', 'players, insects, loot'],
	['notice vehicles before they push your position', 'spot players and insects before they push your angle'],
	['Player, vehicle, and loot', 'Player, boss, and loot'],
	[
		'vehicle threat cues, supply-drop awareness markers, and loot or chest pins so only BR-critical',
		'boss markers, base camp cues, and loot pins so only session-critical',
	],
	['Vehicle and supply-drop threat cues', 'Boss and base camp awareness cues'],
	['vehicle and supply-drop threat cues', 'boss and base camp awareness cues'],
	['loot or chest pins', 'loot and container pins'],
	['Loot and chest markers', 'Loot and container markers'],
	['loot and chest markers', 'loot and container markers'],
	['chests worth the detour', 'high-value loot worth the detour'],
	['vehicles, and chests', 'bosses, and containers'],
	['loot, vehicles, and chests', 'loot, bosses, and containers'],
	['players, loot, and vehicles', 'players, insects, and loot'],
	['players, loot, vehicles', 'players, insects, loot'],
	['vehicle threat cues', 'boss threat cues'],
	['vehicle pushes', 'flank pushes'],
	['track vehicles and chests', 'track bosses and containers'],
	['full BR loop', 'full session loop'],
	['BR rotations', 'map rotations'],
	['BR-critical', 'session-critical'],
	['endgame circles', 'base camp holds'],
	['final circles', 'late-session base camps'],
	['final-circle scrims', 'base camp camp fights'],
	['before your first ranked block', 'before your first session'],
	['before ranked', 'before you queue'],
	['reboot rounds', 'close-range scav fights'],
	['Battle Pass', 'wipe progression'],
	[
		'long-range AR beams and close-quarters room clears without reopening menus every spawn',
		'long-range DMR fights and dorms clears without reopening menus every session',
	],
	['assault rifles, SMGs, and snipers', 'ARs, SMGs, and bolt-actions'],
	['AR / SMG / sniper', 'AR / SMG / bolt-action'],
	['players, loot, and vehicles', 'players, insects, and loot'],
	['for players, loot, and vehicles', 'for players, loot, and base camps'],

	// Broken / truncated meta fragments
	['trainer controls, and .', 'trainer controls, and radar.'],
	['trainer controls, and on Windows PC', 'trainer controls, and radar on Windows PC'],
	['trainer controls, and for Windows PC', 'trainer controls, and radar for Windows PC'],
	['trainer controls, and in our', 'trainer controls, and radar in our'],
	['trainer controls, and maintenance', 'trainer controls, and radar maintenance'],
	['trainer controls, boxes, and on Windows PC', 'trainer controls, and radar on Windows PC'],
	['ESP, Soft Aim, ', 'ESP, Soft Aim & Radar'],
	['Best Hacks with ESP & ', 'ESP Soft Aim & Radar'],
	['ESP, Soft Aim & ', 'ESP, Soft Aim & Radar'],
	['with — learn', '— learn'],
	['REasy Anti-Cheat out for', 'Reach out for'],
	['an Easy Anti-Cheat', 'a Easy Anti-Cheat'],
	['After a Escape', 'After an Escape'],
	['after a Escape', 'after an Escape'],

	// Keyword stuffing / nonsense duplicates
	['grounded cheats & grounded cheats', 'grounded cheats'],
	[
		'covering both grounded cheats and grounded cheats search intent',
		'covering both “grounded cheats” and “escape from grounded cheats” search intent',
	],
	[
		'also searched as grounded cheats and grounded cheat.',
		'built for Grounded on Windows PC.',
	],
	[
		'Grounded cheats vs grounded cheats — same stack, clear pages',
		'How this Grounded cheats pillar fits nearby pages',
	],
	[
		'Searchers use grounded cheats and grounded cheats interchangeably. This pillar focuses on hacks language; the',
		'Use this pillar for the core product overview. For year-specific buying notes, see the',
	],

	// Point cannibal URLs at canonicals
	['/grounded-noclip/', '/grounded-god-mode/'],
	['/grounded-super-damage/', '/grounded-trainer/'],
	['/best-grounded-cheats/', '/grounded-cheats/'],
	['best Grounded cheats guide', 'Grounded cheats pillar'],
	['best Grounded cheats checklist', 'Grounded cheats checklist'],
	['best Grounded cheats', 'Grounded cheats'],
	[
		'Prefer softer tracking? Read the <a href="/grounded-infinite-health/">trainer controls guide</a>. Want the search term most players use? See <a href="/grounded-trainer/">trainer hack</a>.',
		'Prefer softer tracking? Read the <a href="/grounded-infinite-health/">trainer controls guide</a>.',
	],
	['Related landings: <a href="/grounded-trainer-download/">cheat download</a>, <a href="/grounded-mod-menu/">mod menu</a>, <a href="/grounded-trainer/">trainer hack</a>, <a href="/grounded-god-mode/">ESP hack</a>.',
		'Related landings: <a href="/grounded-trainer-download/">cheat download</a>, <a href="/grounded-mod-menu/">mod menu</a>, <a href="/grounded-trainer/">trainer</a>, <a href="/grounded-god-mode/">ESP</a>.'],
];

let src = readFileSync(PAGES_EN, 'utf8');
let hits = 0;
for (const [from, to] of replacements) {
	if (typeof from === 'string') {
		if (!src.includes(from)) continue;
		const count = src.split(from).length - 1;
		src = src.split(from).join(to);
		hits += count;
	} else {
		const next = src.replace(from, to);
		if (next !== src) hits += 1;
		src = next;
	}
}

writeFileSync(PAGES_EN, src);
console.log(`Replaced ${hits} occurrences in pages-en.mjs`);

const gen = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'generate-i18n-content.mjs')], {
	cwd: ROOT,
	stdio: 'inherit',
});
if (gen.status !== 0) process.exit(gen.status ?? 1);
console.log('Regenerated content.generated.ts');
