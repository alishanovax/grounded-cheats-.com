#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-grounded-blog-posts.mjs'];
const pairs = [
	["Activision's", "Battlestate Games'"],
	['Activision\u2019', "Battlestate Games'"],
	['Activision services', 'Battlestate Games services'],
	['Activision service', 'Battlestate Games service'],
	['Activision platform', 'Battlestate Games platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Battlestate Games bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'Grounded Support'],
	['Activision Grounded', 'Grounded'],
	['Activision Support', 'Grounded Support'],
	['Activision', 'Battlestate Games'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromgrounded.com/support'],
	['www.epicgames.com/grounded', 'www.escapefromgrounded.com'],
	['www.grounded.com/competitive', 'www.escapefromgrounded.com'],
	['https://www.grounded.com/', 'https://www.escapefromgrounded.com/'],
	['Grounded.com', 'Grounded'],
	['Grounded Competitive', 'Grounded'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
