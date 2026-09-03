export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/grounded-cheats/' },
	{ label: 'Grounded trainer', href: '/grounded-trainer/' },
	{ label: 'Grounded mod menu', href: '/grounded-mod-menu/' },
	{ label: 'Grounded trainer download', href: '/grounded-trainer-download/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: 'Grounded god mode', href: '/grounded-god-mode/' },
	{ label: 'Grounded free crafting', href: '/grounded-free-crafting/' },
	{ label: 'Grounded cheat engine', href: '/grounded-cheat-engine/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/grounded-cheats/' },
	{ label: 'Trainer', href: '/grounded-trainer/' },
	{ label: 'God Mode', href: '/grounded-god-mode/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/grounded-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/grounded-god-mode/' },
	{ label: fillBrandTokens('{game} Trainer controls'), href: '/grounded-trainer/' },
	{ label: fillBrandTokens('{game} free crafting'), href: '/grounded-free-crafting/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Guides blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is a {primaryKeyword} trainer package for Grounded on Windows PC. It includes god mode, infinite health, free crafting, mod menu, and unlimited items, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-grounded-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: god mode, infinite health, free crafting, and mod menu for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} safe to use in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you play. Use in single-player or private sessions for best results.',
		slug: 'are-grounded-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Safe in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and tips for safe trainer use on Windows PC.',
	}),
	faq({
		question: 'Does this work on Steam and Xbox Game Pass?',
		answer:
			'Yes. The trainer works on Steam and Xbox Game Pass versions of {game} on Windows PC. God mode, infinite health, and free crafting are available in solo and co-op sessions.',
		slug: 'steam-and-xbox-game-pass-support',
		seoTitle: 'Steam and Xbox Game Pass Support | FAQ',
		seoDescription:
			'{brand} works on Steam and Xbox Game Pass — god mode, free crafting, and mod menu for Windows PC.',
	}),
	faq({
		question: 'What is included — god mode, free crafting, or mod menu?',
		answer:
			'{brand} bundles god mode, infinite health, free crafting, unlimited items, noclip, and mod menu in one license. See Features for the full list.',
		slug: 'god-mode-free-crafting-or-mod-menu',
		seoTitle: 'What Is Included: God Mode, Free Crafting, Mod Menu | FAQ',
		seoDescription:
			'One {brand} license includes god mode, infinite health, free crafting, unlimited items, and mod menu for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Grounded or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Grounded or {antiCheat} update affects the trainer. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is Grounded god mode?',
		answer:
			'Grounded god mode gives you infinite health and makes you immune to insect attacks. {brand} includes god mode, no hunger, no thirst, and unlimited stamina in one mod menu.',
		slug: 'what-is-grounded-god-mode',
		seoTitle: 'What Is Grounded God Mode? | FAQ',
		seoDescription:
			'Grounded god mode explained — infinite health, no hunger, and unlimited stamina with {brand} trainer on Windows PC.',
	}),
	faq({
		question: 'Does {brand} include free crafting?',
		answer:
			'Yes. {brand} includes free crafting, unlimited items, unlock all recipes, and no building requirements — build your base anywhere in the backyard.',
		slug: 'does-grounded-cheats-include-free-crafting',
		seoTitle: 'Does {brand} Include Free Crafting? | FAQ',
		seoDescription:
			'Yes — {brand} includes free crafting, unlimited items, and unlock all recipes for Grounded on Windows PC.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you play.',
		slug: 'easy-anti-cheat-and-grounded-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy {primaryKeyword} for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with god mode, free crafting, and mod menu in one package. Compare plans on Store before checkout.',
		slug: 'buy-grounded-cheats-windows-pc',
		seoTitle: 'Buy {primaryKeyword} for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — god mode, free crafting, and mod menu. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_EFT',
		rating: 5,
		text: 'Trainer controls in Grounded Cheats feels smooth on Customs. The menu took a few minutes to learn. After that, sessions felt easy.',
		short: 'Trainer controls in Grounded Cheats feels smooth on Customs.',
		slug: 'grounded-infinite-health-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_EFT — 5/5 | {brand}',
		seoDescription: '@xKrypt0_EFT rates {brand} trainer controls 5/5 for Customs on Windows PC.',
		date: '2026-07-24',
		tag: 'Trainer controls',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes help on co-op sessions. You can see who is holding a hallway before you push. Still worth the price for Grounded Cheats.',
		short: 'ESP boxes help on co-op sessions. Still worth the price for Grounded Cheats.',
		slug: 'grounded-god-mode-scav-run-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for co-op sessions on Windows PC.',
		date: '2026-07-19',
		tag: 'Scav run',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to Grounded Cheats this wipe. Setup was simple. It stayed up after the last Easy Anti-Cheat update when my old cheat failed. Lifetime was a good buy.',
		short: 'Grounded Cheats stayed up after the last Easy Anti-Cheat update. Lifetime was a good buy.',
		slug: 'grounded-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Trainer controls in Grounded Cheats is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Trainer controls in Grounded Cheats is easy to tune on PC.',
		slug: 'grounded-infinite-health-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} trainer controls 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Trainer controls',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'Grounded Cheats works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on Woods is solid.',
		short: 'ESP on Woods is solid. Support helped after a slow first launch.',
		slug: 'grounded-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on Woods is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Loot ESP in Grounded Cheats pays for the monthly plan. Extract markers and distance make early sessions faster.',
		short: 'Loot ESP in Grounded Cheats pays for the monthly plan.',
		slug: 'grounded-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates {brand} loot ESP 5/5 for early sessions on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used Grounded Cheats since last wipe. Trainer controls per weapon helps in dorms. Status updates after Easy Anti-Cheat patches could be clearer, but it came back the next day.',
		short: 'Trainer controls per weapon in Grounded Cheats helps in dorms.',
		slug: 'grounded-infinite-health-session-review-rankedgrind42',
		seoTitle: 'Raid Soft Aim by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} trainer controls 4/5 for sessions on Windows PC.',
		date: '2026-07-07',
		tag: 'Raid',
	}),
	reviewMeta({
		handle: 'vanLifeEFT',
		rating: 5,
		text: 'Radar in Grounded Cheats saved me near base camps. Seeing the third party early in duos is huge. Boxes plus radar look clean.',
		short: 'Radar in Grounded Cheats saved me near base camps.',
		slug: 'grounded-free-crafting-review-vanlifeeft',
		seoTitle: 'Radar Review by @vanLifeEFT — 5/5 | {brand}',
		seoDescription: '@vanLifeEFT rates {brand} radar 5/5 near base camps on Windows PC.',
		date: '2026-07-28',
		tag: 'Extracts',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. Grounded Cheats posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'Grounded Cheats was back the next morning after a patch.',
		slug: 'grounded-easy-anti-cheat-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'Easy Anti-Cheat updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Bolt-action trainer controls plus ESP in Grounded Cheats is excellent for long shots. Simple and strong.',
		short: 'Bolt-action trainer controls plus ESP in Grounded Cheats is excellent.',
		slug: 'grounded-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper trainer controls 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
