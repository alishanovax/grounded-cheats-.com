import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { RAW_EXTERNAL_GUIDE_URLS } from './external-guide-urls.mjs';
import { GAME_IGN_IMAGES, FALLBACK_IGN } from './guide-ign-images.mjs';

const OUT_POSTS = path.resolve('src/data/guides/posts.generated.ts');
const OUT_MANIFEST = path.resolve('src/data/guides/image-manifest.generated.json');
const OUT_ORDER = path.resolve('src/data/guides/shuffle-order.generated.ts');

const ANCHOR_TEXTS = [
	'this resource',
	'more game information',
	'additional information',
	'additional guides',
	'related resources',
	'game updates',
	'more gaming information',
];

const CLOSING_TEMPLATES = [
	'For more game updates, guides, and related resources, you can also explore {link}.',
	'If you want additional guides beyond what we covered here, {link} has more gaming information.',
	'When you are done with these basics, {link} is a solid place for additional information.',
	'Players who want related resources on patches and loadouts often check {link} as well.',
	'For broader game updates and walkthrough tips, you can browse {link} at your own pace.',
];

const TOPIC_ANGLES = [
	{ slug: 'beginner', title: 'Beginner Guide', h1: 'Getting Started', focus: 'core mechanics and first-hour survival' },
	{ slug: 'advanced', title: 'Advanced Tips', h1: 'Advanced Playbook', focus: 'mid-game optimization and efficient routes' },
	{ slug: 'coop', title: 'Co-op Guide', h1: 'Co-op Strategy', focus: 'squad roles, callouts, and shared resources' },
	{ slug: 'pvp', title: 'PvP Guide', h1: 'PvP Fundamentals', focus: 'positioning, trades, and fight selection' },
	{ slug: 'economy', title: 'Economy Guide', h1: 'Economy & Loot', focus: 'crafting loops, vendors, and stash value' },
	{ slug: 'builds', title: 'Build Guide', h1: 'Builds & Loadouts', focus: 'gear choices that match your play style' },
	{ slug: 'maps', title: 'Map Guide', h1: 'Map Knowledge', focus: 'landmarks, rotations, and safe paths' },
	{ slug: 'season', title: 'Season Update', h1: 'Current Season Overview', focus: 'patch changes and meta shifts' },
];

function normalizeUrl(raw) {
	const u = new URL(raw.trim());
	u.protocol = 'https:';
	u.hash = '';
	u.search = '';
	let p = u.pathname.replace(/\/+$/, '') || '';
	u.pathname = p ? `${p}/` : '/';
	return u.href;
}

function hostKey(url) {
	return new URL(url).hostname.replace(/^www\./, '').toLowerCase();
}

function slugFromHost(hostname) {
	return hostname
		.replace(/^www\./, '')
		.replace(/\./g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

function detectGame(hostname) {
	const h = hostname.toLowerCase();
	if (h.includes('arkascended')) return 'ARK: Survival Ascended';
	if (h.includes('lostark')) return 'Lost Ark';
	if (h.includes('arkcheat')) return 'ARK: Survival Evolved';
	if (h.includes('deadside')) return 'Deadside';
	if (h.includes('arcraider')) return 'ARC Raiders';
	if (h.includes('genshin')) return 'Genshin Impact';
	if (h.includes('dbd')) return 'Dead by Daylight';
	if (h.includes('tarkov') || h.includes('eft')) return 'Escape from Tarkov';
	if (h.includes('unturned')) return 'Unturned';
	if (h.includes('warthunder')) return 'War Thunder';
	if (h.includes('fortnite') || h.includes('fncheat')) return 'Fortnite';
	if (h.includes('marathon')) return 'Marathon';
	if (h.includes('battlefield')) return 'Battlefield';
	if (h.includes('lol')) return 'League of Legends';
	if (h.includes('warzone')) return 'Call of Duty: Warzone';
	if (h.includes('valo')) return 'Valorant';
	if (h.includes('grayzone')) return 'Gray Zone Warfare';
	if (h.includes('overwatch')) return 'Overwatch';
	if (h.includes('theisle') || h.includes('islecheat')) return 'The Isle';
	if (h.includes('thefinals') || h.includes('thefinal')) return 'The Finals';
	if (h.includes('dayz')) return 'DayZ';
	if (h.includes('marvelrival')) return 'Marvel Rivals';
	if (h.includes('mecca') || h.includes('meccha')) return 'Mecha BREAK';
	if (h.includes('rust')) return 'Rust';
	if (h.includes('palworld')) return 'Palworld';
	if (h.includes('r6') || h.includes('siegehack')) return 'Rainbow Six Siege';
	if (h.includes('caliber')) return 'Caliber';
	if (h.includes('cod')) return 'Call of Duty';
	if (h.includes('hunt')) return 'Hunt: Showdown';
	if (h.includes('destiny2') || h.includes('destiny')) return 'Destiny 2';
	if (h.includes('squad')) return 'Squad';
	if (h.includes('sandraider')) return 'SAND';
	if (h.includes('abi')) return 'Arena Breakout: Infinite';
	if (h.includes('bodycam')) return 'Bodycam';
	if (h.includes('oncehuman')) return 'Once Human';
	if (h.includes('reforger')) return 'Arma Reforger';
	if (h.includes('backrooms')) return 'Backrooms';
	if (h.includes('thefront')) return 'The Front';
	if (h.includes('lostark')) return 'Lost Ark';
	if (h.includes('warframe')) return 'Warframe';
	if (h.includes('naraka')) return 'Naraka: Bladepoint';
	if (h.includes('minecraft')) return 'Minecraft';
	if (h.includes('poe')) return 'Path of Exile';
	if (h.includes('raft')) return 'Raft';
	if (h.includes('sandhack')) return 'SAND';
	if (h.includes('seaofthieves')) return 'Sea of Thieves';
	if (h.includes('deltaforce')) return 'Delta Force';
	if (h.includes('dune')) return 'Dune: Awakening';
	if (h.includes('wuthering')) return 'Wuthering Waves';
	if (h.includes('combatmaster')) return 'Combat Master';
	if (h.includes('foxhole')) return 'Foxhole';
	if (h.includes('exoborne')) return 'Exoborne';
	if (h.includes('nba2k')) return 'NBA 2K26';
	if (h.includes('rival')) return 'Marvel Rivals';
	return 'Unknown';
}

function hashStr(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
	return h;
}

function dedupeUrls(rawList) {
	const seen = new Set();
	const out = [];
	for (const raw of rawList) {
		const norm = normalizeUrl(raw);
		if (seen.has(norm)) continue;
		seen.add(norm);
		out.push(norm);
	}
	return out;
}

function buildSections(game, angle, idx) {
	const g = game;
	const f = angle.focus;
	return [
		{
			h2: `Why ${g} rewards ${angle.h1.toLowerCase()}`,
			paragraphs: [
				`${g} mixes tense moment-to-moment decisions with longer progression arcs. A strong ${angle.slug} plan helps you ${f} without wasting hours on dead routes.`,
				`New players often chase flashy plays before they understand map flow. Slow down, learn one zone at a time, and note where fights usually start in ${g}.`,
				`Veterans still reset habits each season. Patch notes change weapon balance, spawn logic, and economy sinks — revisit your ${angle.slug} notes after every major update.`,
			],
		},
		{
			h2: `Practical ${angle.title.toLowerCase()} steps`,
			paragraphs: [
				`Start sessions with a single goal: extract safely, complete one quest line, or practice one mechanic. ${g} punishes unfocused looting when you have no exit plan.`,
				`Use audio and terrain before you push. In ${g}, the player who hears footsteps first often wins the trade without firing a shot.`,
				`Keep consumables and repair kits in predictable slots. Mid-fight inventory fumbling costs more than a mediocre weapon choice in ${g}.`,
			],
		},
		{
			h2: `Staying consistent in ${g}`,
			paragraphs: [
				`Review one mistake per session — bad rotation, greedy peek, or ignored objective timer. Small fixes compound faster than copying pro loadouts.`,
				`Play with fixed sensitivity and keybinds for at least a week before you tweak them. Muscle memory matters more than perfect theory in ${g}.`,
				`When a patch drops, test changes in low-stakes modes first. ${g} metas shift quickly; your old routes may be obsolete overnight.`,
			],
		},
	];
}

function buildPost(url, index, gameCounters) {
	const host = hostKey(url);
	const game = detectGame(host);
	const angle = TOPIC_ANGLES[index % TOPIC_ANGLES.length];
	const baseSlug = slugFromHost(host);
	const slug = `guide-${baseSlug}`;
	const id = slug;

	const gameIdx = gameCounters[game] ?? 0;
	gameCounters[game] = gameIdx + 1;

	const pool = GAME_IGN_IMAGES[game] ?? [FALLBACK_IGN];
	const ignUrl = pool[(gameIdx + index) % pool.length];
	const imageSrc = `/images/guides/${slug}.webp`;

	const title = `${game} ${angle.title}: ${angle.focus}`;
	const h1 = `${game} ${angle.h1}`;
	const intro = `This ${angle.title.toLowerCase()} covers ${angle.focus} in ${game}. Whether you are new or returning after a break, these notes focus on decisions that actually win matches — not filler lists.`;
	const metaDescription = `${game} ${angle.title.toLowerCase()} — ${angle.focus}. Practical tips for PC players updated for the current season.`;
	const keywords = [game.toLowerCase(), `${game.toLowerCase()} guide`, `${game.toLowerCase()} tips`, angle.slug];
	const imageAlt = `${game} gameplay screenshot for ${angle.title.toLowerCase()}`;
	const sections = buildSections(game, angle, index);

	const anchor = ANCHOR_TEXTS[index % ANCHOR_TEXTS.length];
	const closingTpl = CLOSING_TEMPLATES[index % CLOSING_TEMPLATES.length];
	const link = `<a href="${url}" target="_blank" rel="noopener noreferrer">${anchor}</a>`;
	const closing = closingTpl.replace('{link}', link);

	const published = `2026-0${1 + (index % 6)}-${String(5 + (index % 20)).padStart(2, '0')}`;
	const updated = `2026-0${1 + (index % 6)}-${String(10 + (index % 18)).padStart(2, '0')}`;

	return {
		id,
		slug,
		url,
		game,
		imageSrc,
		ignUrl,
		anchor,
		published,
		updated,
		translation: {
			slug,
			title,
			metaDescription,
			h1,
			intro,
			keywords,
			imageAlt,
			sections,
			closing,
		},
	};
}

/** Greedy shuffle — avoid adjacent same-game guides when possible. */
function shuffleNoAdjacent(posts) {
	const buckets = new Map();
	for (const p of posts) {
		const arr = buckets.get(p.game) ?? [];
		arr.push(p);
		buckets.set(p.game, arr);
	}
	const result = [];
	let prevGame = null;
	while (result.length < posts.length) {
		const candidates = [...buckets.entries()]
			.filter(([g, list]) => list.length > 0 && g !== prevGame)
			.sort((a, b) => b[1].length - a[1].length);
		let pick;
		if (candidates.length > 0) {
			pick = candidates[0];
		} else {
			pick = [...buckets.entries()].filter(([, list]) => list.length > 0).sort((a, b) => b[1].length - a[1].length)[0];
		}
		const [game, list] = pick;
		result.push(list.shift());
		prevGame = game;
	}
	return result;
}

function esc(s) {
	return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function emitPosts(posts) {
	const lines = posts.map((p) => {
		const sections = p.translation.sections
			.map(
				(s) => `			{
				h2: "${esc(s.h2)}",
				paragraphs: [
${s.paragraphs.map((para) => `					"${esc(para)}",`).join('\n')}
				],
			}`,
			)
			.join(',\n');
		return `	{
		id: "${esc(p.id)}",
		game: "${esc(p.game)}",
		externalUrl: "${esc(p.url)}",
		imageSrc: "${esc(p.imageSrc)}",
		published: "${p.published}",
		updated: "${p.updated}",
		translations: {
			en: {
				slug: "${esc(p.translation.slug)}",
				title: "${esc(p.translation.title)}",
				metaDescription: "${esc(p.translation.metaDescription)}",
				h1: "${esc(p.translation.h1)}",
				intro: "${esc(p.translation.intro)}",
				keywords: [${p.translation.keywords.map((k) => `"${esc(k)}"`).join(', ')}],
				imageAlt: "${esc(p.translation.imageAlt)}",
				sections: [
${sections}
				],
				closing: "${esc(p.translation.closing)}",
			},
		},
	}`;
	});
	return `/* Auto-generated by scripts/generate-external-guides.mjs — do not edit by hand. */
import type { ExternalGuidePost } from './types';

export const externalGuidePosts: ExternalGuidePost[] = [
${lines.join(',\n')}
];
`;
}

function emitOrder(shuffled) {
	const ids = shuffled.map((p) => `"${p.id}"`).join(',\n\t');
	return `/* Auto-generated — shuffled display order for Other Games section. */
export const externalGuideShuffleOrder: string[] = [
\t${ids},
];
`;
}

async function main() {
	const urls = dedupeUrls(RAW_EXTERNAL_GUIDE_URLS);
	const gameCounters = {};
	const posts = urls.map((url, i) => buildPost(url, i, gameCounters));
	const shuffled = shuffleNoAdjacent([...posts]);

	await mkdir(path.dirname(OUT_POSTS), { recursive: true });
	await writeFile(OUT_POSTS, emitPosts(posts), 'utf8');
	await writeFile(OUT_ORDER, emitOrder(shuffled), 'utf8');

	const manifest = posts.map((p) => ({
		slug: p.slug,
		game: p.game,
		imageSrc: p.imageSrc,
		ignUrl: p.ignUrl,
		externalUrl: p.url,
		anchor: p.anchor,
	}));
	await writeFile(OUT_MANIFEST, JSON.stringify(manifest, null, 2), 'utf8');

	console.log(`Provided (raw): ${RAW_EXTERNAL_GUIDE_URLS.length}`);
	console.log(`Unique URLs: ${urls.length}`);
	console.log(`Posts generated: ${posts.length}`);
	console.log(`Wrote ${OUT_POSTS}`);
	console.log(`Wrote ${OUT_ORDER}`);
	console.log(`Wrote ${OUT_MANIFEST}`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
