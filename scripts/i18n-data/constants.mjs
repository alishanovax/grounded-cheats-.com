/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'grounded-god-mode', 'grounded-trainer', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'anti-cheat',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — simple grounded cheats keyword filenames. */
export const HERO_IMAGES = {
	home: '/images/grounded-cheats-esp.webp',
	'grounded-god-mode': '/images/grounded-cheats-radar.webp',
	'grounded-trainer': '/images/grounded-cheats-aimbot.webp',
	features: '/images/grounded-cheats-aimbot-view.webp',
	pricing: '/images/grounded-cheats-raid.webp',
	setup: '/images/grounded-cheats-radar.webp',
	updates: '/images/grounded-cheats-esp.webp',
	faq: '/images/grounded-cheats-aimbot-view.webp',
	support: '/images/grounded-cheats-raid.webp',
	undetected: '/images/grounded-cheats-wallhack.webp',
	wallhack: '/images/grounded-cheats-wallhack.webp',
	radar: '/images/grounded-cheats-radar.webp',
	'anti-cheat': '/images/grounded-cheats-aimbot.webp',
	'cheats-2026': '/images/grounded-cheats-esp.webp',
	hacks: '/images/grounded-cheats-raid.webp',
	'cheat-download': '/images/grounded-cheats-raid.webp',
	'mod-menu': '/images/grounded-cheats-radar.webp',
	'soft-aim': '/images/grounded-cheats-aimbot-view.webp',
	'best-cheats': '/images/grounded-cheats-esp.webp',
	'aimbot-hack': '/images/grounded-cheats-aimbot-view.webp',
	'esp-hack': '/images/grounded-cheats-wallhack.webp',
	'unlock-all': '/images/grounded-cheats-radar.webp',
	privacy: '/images/grounded-cheats-aimbot.webp',
	refund: '/images/grounded-cheats-raid.webp',
	terms: '/images/grounded-cheats-aimbot-view.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; trainer: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
\t};
};
export type PageId = 'home' | 'grounded-god-mode' | 'grounded-trainer' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anti-cheat' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return (lastSpace > 40 ? trimmed.slice(0, lastSpace) : trimmed).trim();
}

export function clampDescription(s) {
	if (s.length <= 160) return s;
	const trimmed = s.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return (lastSpace > 120 ? trimmed.slice(0, lastSpace) : trimmed).trim() + '…';
}

export const clampDesc = clampDescription;

/** Remove brand checkout references from meta strings. */
export function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via [^.]+\.?/gi, '.')
		.replace(/\s*via [^.]+checkout\.?/gi, '.')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers. */
export const EXT = {
	grounded:
		'<a href="https://www.obsidian.net/games/grounded" target="_blank" rel="noopener noreferrer">Grounded</a>',
	status:
		'<a href="https://www.xbox.com/en-us/games/grounded" target="_blank" rel="noopener noreferrer">Grounded on Xbox</a>',
	antiCheat:
		'<a href="https://www.easy.ac/" target="_blank" rel="noopener noreferrer">Easy Anti-Cheat</a>',
};
