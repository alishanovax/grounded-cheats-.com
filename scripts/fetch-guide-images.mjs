import { writeFile, readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const cachePath = path.resolve('src/data/guides/ign-cache.generated.json');
const manifestPath = path.resolve('src/data/guides/image-manifest.generated.json');
const guidesDir = path.resolve('public/images/guides');

/** Gallery slideshow pages that return sm.ign.com 1400.jpg in HTML */
const GALLERY_PAGES_BY_SLUG = {
	fortnite: [
		'https://pk.ign.com/fortnite/238250/gallery/fortnite-x-star-wars-watch-party-island-screenshots',
		'https://sea.ign.com/fortnite/237204/gallery/fortnite-x-south-park-trailer-screenshots',
		'https://in.ign.com/fortnite/229911/gallery/fortnite-x-star-wars-watch-party-island-screenshots',
	],
	valorant: ['https://sea.ign.com/riot/158338/gallery/valorant-screenshots'],
	'escape-from-tarkov': ['https://sea.ign.com/games/escape-from-tarkov/gallery/escape-from-tarkov-screenshots'],
	'genshin-impact': ['https://sea.ign.com/games/genshin-impact/gallery/genshin-impact-screenshots'],
	palworld: ['https://sea.ign.com/games/palworld/gallery/palworld-screenshots'],
	'dead-by-daylight': ['https://sea.ign.com/games/dead-by-daylight/gallery/dead-by-daylight-screenshots'],
	'overwatch-2': ['https://sea.ign.com/games/overwatch-2/gallery/overwatch-2-screenshots'],
	'the-finals': ['https://sea.ign.com/games/the-finals/gallery/the-finals-screenshots'],
	'war-thunder': ['https://sea.ign.com/games/war-thunder/gallery/war-thunder-screenshots'],
	rust: ['https://sea.ign.com/games/rust/gallery/rust-screenshots'],
	'destiny-2': ['https://sea.ign.com/games/destiny-2/gallery/destiny-2-screenshots'],
	'sea-of-thieves': ['https://sea.ign.com/games/sea-of-thieves/gallery/sea-of-thieves-screenshots'],
	minecraft: ['https://sea.ign.com/games/minecraft/gallery/minecraft-screenshots'],
	warframe: ['https://sea.ign.com/games/warframe/gallery/warframe-screenshots'],
	'rainbow-six-siege': ['https://sea.ign.com/games/rainbow-six-siege/gallery/rainbow-six-siege-screenshots'],
	dayz: ['https://sea.ign.com/games/dayz/gallery/dayz-screenshots'],
	'the-isle': ['https://sea.ign.com/games/the-isle/gallery/the-isle-screenshots'],
	'lost-ark': ['https://sea.ign.com/games/lost-ark/gallery/lost-ark-screenshots'],
	'hunt-showdown': ['https://sea.ign.com/games/hunt-showdown/gallery/hunt-showdown-screenshots'],
	'ark-survival-ascended': ['https://sea.ign.com/games/ark-survival-ascended/gallery/ark-survival-ascended-screenshots'],
	'call-of-duty-warzone': ['https://sea.ign.com/games/call-of-duty-warzone/gallery/call-of-duty-warzone-screenshots'],
	'battlefield-2042': ['https://sea.ign.com/games/battlefield-2042/gallery/battlefield-2042-screenshots'],
	'league-of-legends': ['https://sea.ign.com/games/league-of-legends/gallery/league-of-legends-screenshots'],
	'once-human': ['https://sea.ign.com/games/once-human/gallery/once-human-screenshots'],
	'dune-awakening': ['https://sea.ign.com/games/dune-awakening/gallery/dune-awakening-screenshots'],
	'wuthering-waves': ['https://sea.ign.com/games/wuthering-waves/gallery/wuthering-waves-screenshots'],
	'arc-raiders': ['https://sea.ign.com/games/arc-raiders/gallery/arc-raiders-screenshots'],
	marathon: ['https://sea.ign.com/games/marathon/gallery/marathon-screenshots'],
	'marvel-rivals': ['https://sea.ign.com/games/marvel-rivals/gallery/marvel-rivals-screenshots'],
	'grounded-2': ['https://pk.ign.com/games/grounded-2/gallery/grounded-2-screenshots'],
};

const GAME_IGN_SLUG = {
	'ARK: Survival Ascended': 'ark-survival-ascended',
	'ARK: Survival Evolved': 'ark-survival-evolved',
	Deadside: 'deadside',
	'ARC Raiders': 'arc-raiders',
	'Genshin Impact': 'genshin-impact',
	'Dead by Daylight': 'dead-by-daylight',
	'Escape from Tarkov': 'escape-from-tarkov',
	Unturned: 'unturned',
	'War Thunder': 'war-thunder',
	Fortnite: 'fortnite',
	Marathon: 'marathon',
	Battlefield: 'battlefield-2042',
	'League of Legends': 'league-of-legends',
	'Call of Duty: Warzone': 'call-of-duty-warzone',
	Valorant: 'valorant',
	'Gray Zone Warfare': 'gray-zone-warfare',
	Overwatch: 'overwatch-2',
	'The Isle': 'the-isle',
	'The Finals': 'the-finals',
	DayZ: 'dayz',
	'Marvel Rivals': 'marvel-rivals',
	'Mecha BREAK': 'mecha-break',
	Rust: 'rust',
	Palworld: 'palworld',
	'Rainbow Six Siege': 'rainbow-six-siege',
	Caliber: 'caliber',
	'Call of Duty': 'call-of-duty-warzone',
	'Hunt: Showdown': 'hunt-showdown',
	'Destiny 2': 'destiny-2',
	Squad: 'squad',
	SAND: 'sand',
	'Arena Breakout: Infinite': 'arena-breakout-infinite',
	Bodycam: 'bodycam',
	'Once Human': 'once-human',
	'Arma Reforger': 'arma-reforger',
	Backrooms: 'escape-the-backrooms',
	'Lost Ark': 'lost-ark',
	Warframe: 'warframe',
	'Naraka: Bladepoint': 'naraka-bladepoint',
	Minecraft: 'minecraft',
	'Path of Exile': 'path-of-exile',
	Raft: 'raft',
	'Sea of Thieves': 'sea-of-thieves',
	'Delta Force': 'delta-force-hawk-ops',
	'Dune: Awakening': 'dune-awakening',
	'Wuthering Waves': 'wuthering-waves',
	'Combat Master': 'combat-master',
	Foxhole: 'foxhole',
	Exoborne: 'exoborne',
	'NBA 2K26': 'nba-2k26',
};

async function fetchHtml(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0' },
		redirect: 'follow',
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	return res.text();
}

function extractImages(html) {
	const imgs = new Set();
	for (const m of html.matchAll(/https:\/\/sm\.ign\.com[^"'\s<>]+\.1400\.jpg/gi)) imgs.add(m[0]);
	for (const m of html.matchAll(/https:\/\/sm\.ign\.com[^"'\s<>]+\.200\.jpg/gi)) {
		imgs.add(m[0].replace(/\.200\.jpg$/i, '.1400.jpg'));
	}
	return [...imgs];
}

async function buildCache() {
	let cache = {};
	try {
		cache = JSON.parse(await readFile(cachePath, 'utf8'));
	} catch {
		/* fresh */
	}
	for (const [slug, pages] of Object.entries(GALLERY_PAGES_BY_SLUG)) {
		const imgs = new Set(cache[slug] ?? []);
		for (const page of pages) {
			try {
				const html = await fetchHtml(page);
				for (const img of extractImages(html)) imgs.add(img);
				await new Promise((r) => setTimeout(r, 400));
			} catch (e) {
				console.warn('skip', page, e.message);
			}
		}
		if (imgs.size) {
			cache[slug] = [...imgs];
			console.log(slug, imgs.size);
		}
	}
	await writeFile(cachePath, JSON.stringify(cache, null, 2), 'utf8');
	return cache;
}

async function fetchImage(url) {
	const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

function hashStr(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
	return h;
}

async function saveUniqueCrop(buf, outPath, seed) {
	const meta = await sharp(buf).metadata();
	const w = meta.width ?? 1280;
	const h = meta.height ?? 720;
	const cropW = Math.floor(w * 0.68);
	const cropH = Math.floor(h * 0.68);
	const maxLeft = Math.max(0, w - cropW);
	const maxTop = Math.max(0, h - cropH);
	const left = maxLeft ? hashStr(`${seed}-x`) % maxLeft : 0;
	const top = maxTop ? hashStr(`${seed}-y`) % maxTop : 0;
	const webp = await sharp(buf)
		.extract({ left, top, width: cropW, height: cropH })
		.resize({ width: 1280, withoutEnlargement: true })
		.webp({ quality: 86 })
		.toBuffer();
	await writeFile(outPath, webp);
}

async function main() {
	const cache = await buildCache();
	const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
	await mkdir(guidesDir, { recursive: true });

	const allPool = Object.values(cache).flat();
	const usedUrls = {};
	const gameCounters = {};
	let ok = 0;

	for (const entry of manifest) {
		const ignSlug = GAME_IGN_SLUG[entry.game];
		let pool = cache[ignSlug] ?? [];
		if (!pool.length) pool = allPool;
		if (!pool.length) {
			console.warn(`No IGN pool for ${entry.game} (${entry.slug})`);
			continue;
		}
		const idx = gameCounters[entry.game] ?? 0;
		gameCounters[entry.game] = idx + 1;
		const url = pool[(idx + hashStr(entry.slug)) % pool.length];
		const out = path.join(guidesDir, `${entry.slug}.webp`);
		try {
			const buf = await fetchImage(url);
			await saveUniqueCrop(buf, out, entry.slug);
			usedUrls[entry.slug] = url;
			ok++;
		} catch (e) {
			console.warn('fail', entry.slug, e.message);
		}
	}

	await writeFile(
		path.resolve('src/data/guides/image-sources.generated.json'),
		JSON.stringify(usedUrls, null, 2),
		'utf8',
	);
	console.log(`Images: ${ok}/${manifest.length}, cache games: ${Object.keys(cache).length}`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
