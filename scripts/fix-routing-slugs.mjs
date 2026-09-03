#!/usr/bin/env node
/** Fix broken slugs from wallhack → god mode migration in routing.ts */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = path.join(ROOT, 'src/data/i18n/routing.ts');
let c = fs.readFileSync(file, 'utf8');

c = c.replace(/grounded-god-mode-god mode/g, 'grounded-god-mode-esp');
c = c.replace(/'god mode-/g, "'wallhack-");
c = c.replace(/escape-from-grounded-cheats/g, 'grounded-cheats');

fs.writeFileSync(file, c);
console.log('Fixed routing.ts slugs');
