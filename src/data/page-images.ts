import { siteConfig } from './site';
import { groundedImages } from './grounded';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	groundedImages.espWallhack,
	groundedImages.aimbotCombat,
	groundedImages.aimbotSkeleton,
	groundedImages.playerEsp,
	groundedImages.cheatsCombat,
	'/images/grounded-cheats-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/grounded-cheats-hero-1024w.webp',
	'grounded-god-mode': groundedImages.playerEsp,
	'grounded-trainer': groundedImages.aimbotCombat,
	features: groundedImages.aimbotSkeleton,
	pricing: groundedImages.cheatsCombat,
	setup: groundedImages.playerEsp,
	updates: '/images/grounded-cheats-hero-1024w.webp',
	faq: groundedImages.aimbotSkeleton,
	support: groundedImages.cheatsCombat,
	undetected: groundedImages.espWallhack,
	wallhack: groundedImages.espWallhack,
	radar: groundedImages.playerEsp,
	'anti-cheat': groundedImages.aimbotCombat,
	'cheats-2026': '/images/grounded-cheats-hero-1024w.webp',
	hacks: groundedImages.cheatsCombat,
	'cheat-download': groundedImages.cheatsCombat,
	'mod-menu': groundedImages.playerEsp,
	'soft-aim': groundedImages.aimbotSkeleton,
	'best-cheats': '/images/grounded-cheats-hero-1024w.webp',
	'aimbot-hack': groundedImages.aimbotSkeleton,
	'esp-hack': groundedImages.espWallhack,
	'unlock-all': groundedImages.playerEsp,
	privacy: groundedImages.aimbotCombat,
	refund: groundedImages.cheatsCombat,
	terms: groundedImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
