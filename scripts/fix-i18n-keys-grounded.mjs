#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = [
	'scripts/i18n-data/pages-en.mjs',
	'scripts/i18n-data/pages-i18n.mjs',
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	c = c
		.replace(/\bgod mode:/g, 'wallhack:')
		.replace(/'trainer-hack'/g, "'aimbot-hack'")
		.replace(/easy-anti-cheat/g, 'antiCheat')
		.replace(/escape-from-grounded/g, 'grounded')
		.replace(/Battlestate Games/g, 'Obsidian Entertainment')
		.replace(/EXT\.activision/g, 'EXT.grounded')
		.replace(/\$35/g, '$25')
		.replace(/\$150/g, '$99');
	writeFileSync(f, c);
	console.log('Fixed', f);
}
