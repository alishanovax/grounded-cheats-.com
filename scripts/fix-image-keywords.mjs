#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'grounded cheats', espGod mode: 'grounded cheats god mode', trainerCombat: 'grounded cheats trainer', squadFight: 'grounded cheats', playerEsp: 'grounded cheats esp', headerArt: 'grounded cheats trainer', cheatsPackage: 'grounded cheats radar', rebootFight: 'grounded cheats trainer', battleRoyale: 'grounded cheats', battleRoyaleIsland: 'grounded cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espGod mode: '[^']+', trainerCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Grounded ESP player tags hack'", "imageAlt: 'grounded cheats esp'"],
	["imageAlt: 'Grounded ESP free crafting'", "imageAlt: 'grounded cheats radar'"],
	["imageAlt: 'Grounded trainer sniper kill'", "imageAlt: 'grounded cheats trainer'"],
	["imageAlt: 'Grounded trainer skeleton targeting'", "imageAlt: 'grounded cheats trainer'"],
	["imageAlt: 'Grounded cheats ADS combat'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheats setup PC activation'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheats updates Easy Anti-Cheat maintenance'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheats FAQ ESP trainer'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheats support license help'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Undetected grounded cheats ESP god mode'", "imageAlt: 'undetected grounded cheats'"],
	["imageAlt: 'Grounded god mode skeleton ESP'", "imageAlt: 'grounded cheats god mode'"],
	["imageAlt: 'Easy Anti-Cheat bypass grounded ESP trainer'", "imageAlt: 'grounded cheats easy-anti-cheat'"],
	["imageAlt: 'Grounded cheats 2026 ESP trainer'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheats combat trainer'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheat download ESP trainer'", "imageAlt: 'grounded cheats download'"],
	["imageAlt: 'Grounded mod menu ESP trainer'", "imageAlt: 'grounded cheats mod menu'"],
	["imageAlt: 'Grounded trainer controls trainer settings'", "imageAlt: 'grounded cheats trainer controls'"],
	["imageAlt: 'Best grounded cheats 2026 ESP'", "imageAlt: 'best grounded cheats'"],
	["imageAlt: 'Grounded trainer hack combat'", "imageAlt: 'grounded cheats trainer'"],
	["imageAlt: 'Grounded ESP hack god mode'", "imageAlt: 'grounded cheats esp'"],
	["imageAlt: 'Grounded unlock all ESP trainer guide'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheats privacy policy'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheats refund policy'", "imageAlt: 'grounded cheats'"],
	["imageAlt: 'Grounded cheats terms of use'", "imageAlt: 'grounded cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Grounded ${meta.altKeyword}`")
	.join("imageAlt: 'grounded cheats'")
	.split("galleryTitle: `Grounded Cheats ${topicName}`")
	.join("galleryTitle: 'grounded cheats'")
	.split("imageAlt: `Grounded cheats ${kind} policy`")
	.join("imageAlt: 'grounded cheats'")
	.split("galleryTitle: `Grounded Cheats ${kind} resources`")
	.join("galleryTitle: 'grounded cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
