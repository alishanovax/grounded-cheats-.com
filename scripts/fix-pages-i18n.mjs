import fs from 'node:fs';

const f = 'scripts/i18n-data/pages-i18n.mjs';
let c = fs.readFileSync(f, 'utf8');
c = c.replace(/\bantiCheat:/g, "'anti-cheat':");
c = c.replace(/Zadeyo/g, '');
c = c.replace(/Contact email, order references/g, 'Contact email and order references');
c = c.replace(/processed by checkout/g, 'processed by our payment partner');
fs.writeFileSync(f, c);
console.log('Fixed pages-i18n.mjs');
