/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Grounded Cheats',
	/** Short product label if needed */
	shortName: 'Grounded',
	/** Canonical origin — no trailing slash */
	url: 'https://groundedcheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@groundedcheats.com',
	checkoutUrl: 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fgrounded',

	/** Game this template instance targets */
	game: 'Grounded',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/grounded-cheats-logo.webp',
	logoRaster: '/images/grounded-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Grounded Cheats logo',
	defaultOgImage: '/images/grounded-cheats-hero-1024w.webp',
	heroImage: '/images/grounded-cheats-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 99, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC', 'Steam', 'Xbox Game Pass'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#ff8c00',
		bg: '#0f1a14',
		soft: '#f1c40f',
		deep: '#c0392b',
		hover: '#ffa733',
		panel: '#152620',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 * Keep 5–8 terms.
	 */
	keywords: {
		primary: 'grounded cheats',
		list: [
			'grounded cheats',
			'grounded trainer',
			'grounded cheats pc',
			'grounded mod menu',
			'grounded trainer download',
			'grounded god mode',
			'grounded infinite health',
			'grounded free crafting',
			'grounded cheat engine',
			'grounded hacks pc',
			'grounded cheat table',
			'best grounded trainer 2025',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Grounded Cheats | Trainer & Mod Menu for PC',
		homeDescription: 'Official Grounded Cheats site for Windows PC. God mode, infinite health, free crafting, trainer download, and mod menu — Steam and Xbox Game Pass supported.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription: 'Everything in one {game} trainer license for Windows PC — god mode, infinite stamina, free crafting, noclip, and patch updates after {antiCheat}.',
		storeTitle: '{game} Store | {brand}',
		storeDescription: 'Monthly and lifetime {game} trainer plans for Windows PC. Same mod menu features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription: 'Live trainer status for {brand} after {game} or {antiCheat} patches. Check here before you play on Windows PC today.',
		previewTitle: 'Grounded Cheats | Trainer & God Mode PC',
		previewDescription: 'Buy grounded cheats for Grounded on Windows PC. God mode, infinite health, free crafting, mod menu, and Easy Anti-Cheat patch updates with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription: 'Install and launch {brand} trainer on Windows PC after checkout. Short setup steps so you can play faster. Follow each step in order.',
		supportTitle: '{game} Support | {brand}',
		supportDescription: 'Get help with {brand} trainer on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription: 'Short answers about {brand} for Grounded — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription: 'Buyer reviews for {brand} — god mode, infinite health, free crafting, and patch updates for Grounded on Windows PC.',
		blogTitle: '{game} Guides | {brand}',
		blogDescription: 'Guides and tips for {game} — trainer setup, god mode, free crafting, console commands, and {antiCheat} update coverage for PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: '{primaryKeyword} — trainer, god mode, and mod menu for PC',
		summary: '{brand} is a {game} trainer package for Windows PC. Includes god mode, infinite health, free crafting, and mod menu, with {antiCheat} maintenance after patches.',
		heroLede: 'God mode, infinite health, free crafting, and mod menu for Grounded on Windows PC.',
		blogLabel: 'Grounded Guides',
		ctaBuy: 'Get Cheats',
		ctaBuyShort: 'Buy Cheats',
		featuresIntro: 'Everything included in one trainer license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro: '{brand} for Grounded — god mode, infinite health, free crafting, mod menu, and Easy Anti-Cheat rebuilds after patches.',
		setupIntro: 'Install {brand} trainer on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — god mode, infinite health, free crafting, and support.',
		chipEsp: 'God mode',
		chipAim: 'Free crafting',
		chipRadar: 'Mod menu',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on save to refresh crawl dates */
		contentLastmod: '2026-09-03',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and guides for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/grounded-cheats-esp.webp',
				title: 'Grounded trainer mod menu overlay',
				caption: 'God mode and infinite health toggles in the backyard',
			},
			{
				src: '/images/grounded-cheats-wallhack.webp',
				title: 'Grounded god mode in action',
				caption: 'Infinite health and super damage against backyard insects',
			},
			{
				src: '/images/grounded-cheats-aimbot.webp',
				title: 'Grounded free crafting trainer',
				caption: 'Free crafting and unlimited items in survival mode',
			},
			{
				src: '/images/grounded-cheats-aimbot-view.webp',
				title: 'Grounded mod menu controls',
				caption: 'In-menu trainer controls for Windows PC',
			},
			{
				src: '/images/grounded-cheats-radar.webp',
				title: 'Grounded item spawner menu',
				caption: 'Spawn items and unlock all recipes',
			},
			{
				src: '/images/grounded-cheats-raid.webp',
				title: 'Grounded Cheats license plans',
				caption: 'Monthly and lifetime plans for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
