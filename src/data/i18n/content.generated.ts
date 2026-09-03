import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; trainer: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'grounded-god-mode' | 'grounded-trainer' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'anti-cheat' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Trainer & God mode",
					accentShort: "Undetected grounded cheats 2026",
					subtitle: "Grounded cheats with grounded god mode, free crafting and grounded trainer for Windows PC — Easy Anti-Cheat maintenance included.",
					subtitleShort: "Grounded esp, radar & trainer for PC",
					buyNow: "Buy Grounded Cheats",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Grounded Cheats — undetected grounded cheats live for Grounded on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected grounded cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Grounded Cheats buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Grounded Cheats",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected Grounded cheats for PC.\nESP, god mode, radar & trainer.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | Undetected ESP, Trainer & God mode",
					description: "Grounded cheats for Windows PC — ESP, trainer controls, radar, and Easy Anti-Cheat updates. Compare plans and buy.",
					h1: "Grounded Cheats — Undetected ESP, God mode & Trainer",
					intro: "Grounded Cheats is the undetected grounded cheats package for Windows PC — built for Grounded on Windows PC. Grounded esp god mode, item spawner, and grounded trainer with Easy Anti-Cheat maintenance after every major patch.",
					imageAlt: "Grounded Cheats homepage hero — ESP and trainer for Grounded",
					galleryTitle: "Grounded Cheats gallery — ESP, Trainer and god mode visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose Grounded cheats in 2026",
							paragraphs: [
								"Grounded rewards map awareness. Grounded Cheats combines ESP god mode for enemy players and loot, radar-style threat cues, and configurable Trainer so you can read fights before committing — on session, scav-run, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a> and <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. We rebuild ESP, radar, and Trainer modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($99) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/grounded-cheats/\">Grounded cheats pillar</a>, <a href=\"/grounded-god-mode/\">ESP guide</a>, <a href=\"/grounded-trainer/\">Trainer controls</a>, and <a href=\"/grounded-cheats/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP god mode, free crafting, and Trainer in one license",
							paragraphs: [
								"Instead of stacking separate tools, Grounded Cheats bundles player ESP god mode, loot markers, item spawner overlays, and Trainer profiles in one undetected package built for survival sessions and scav-runs — covering both “grounded cheats” and “escape from grounded cheats” search intent.",
								"Browse the <a href=\"/grounded-god-mode/\">ESP</a>, <a href=\"/grounded-trainer/\">Trainer</a>, <a href=\"/grounded-god-mode/\">god mode</a>, and <a href=\"/grounded-free-crafting/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> for Obsidian Entertainment service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-esp.webp",
				},
				"grounded-god-mode": {
					title: "Grounded ESP 2026 | Player Boxes & God mode",
					description: "Grounded ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected grounded cheats for Grounded.",
					h1: "Grounded ESP — Player Boxes & God mode",
					intro: "Grounded esp visibility tools for session and scav-run. Read enemy squads, players, insects, loot, and distance before you commit — toggleable grounded god mode god mode overlays bundled in our grounded cheats package.",
					imageAlt: "Grounded ESP player boxes and distance readouts in a session",
					galleryTitle: "Grounded ESP overlay visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Grounded god mode guide",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "What Grounded ESP solves in sessions",
							paragraphs: [
								"Grounded maps punish incomplete information. Grounded Cheats ESP god mode helps you spot enemy squads early, spot players and insects before they push your angle, and mark high-value loot worth the detour.",
								"On session, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Trainer in one license.",
								"Grounded’s live seasons and map updates are published by Obsidian Entertainment (<a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and loot ESP god mode categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, base camp cues, and loot pins so only session-critical ESP god mode overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports survival sessions and scav-runs lobbies alike.",
								"Compare category detail on the <a href=\"/grounded-god-mode/\">god mode page</a> and pair visibility with the <a href=\"/grounded-free-crafting/\">free crafting</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and base camp awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Grounded Cheats ESP god mode is maintained for Grounded with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Easy Anti-Cheat bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first session.",
							],
						},
						{
							h2: "ESP next steps — Trainer, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Trainer covers the firefight. Review <a href=\"/grounded-trainer/\">Trainer controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($99) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/grounded-cheats/\">Grounded cheats pillar</a> and <a href=\"/grounded-cheats/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-radar.webp",
				},
				"grounded-trainer": {
					title: "Grounded Trainer 2026 | Soft Aim for Windows PC",
					description: "Grounded trainer with trainer controls tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our grounded cheats package.",
					h1: "Grounded Trainer — Soft Aim for Windows PC",
					intro: "Configurable Trainer tools for Grounded firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP god mode and radar in one undetected license.",
					imageAlt: "Grounded trainer and trainer controls controls on Windows PC",
					galleryTitle: "Grounded Trainer combat previews",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "See ESP god mode",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer tuned for Grounded combat pace",
							paragraphs: [
								"Grounded mixes long-range AR fights with close-quarters SMG pushes. Grounded Cheats Trainer includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>. Revisit Trainer FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Trainer profiles",
							paragraphs: [
								"Save separate Trainer profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every session.",
								"Prefer softer tracking? Read the <a href=\"/grounded-trainer/\">trainer controls guide</a>.",
								"Trainer ships alongside <a href=\"/grounded-god-mode/\">ESP god mode</a> and <a href=\"/grounded-free-crafting/\">item spawner</a> in the same Grounded Cheats license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Trainer mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance for undetected Trainer",
							paragraphs: [
								"Grounded Cheats rebuilds Trainer behavior when Easy Anti-Cheat or major Grounded patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> and anti-cheat context on <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>, then follow our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Trainer with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Trainer plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-aimbot.webp",
				},
				features: {
					title: "Grounded Cheats Features | ESP, Soft Aim & Radar",
					description: "Full grounded cheats feature list: ESP boxes, trainer controls, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Grounded Cheats Features — Full Control List",
					intro: "Every ESP god mode, free crafting, and Trainer control included in the Grounded Cheats package for Grounded on Windows PC — with Easy Anti-Cheat maintenance after major patches.",
					imageAlt: "Grounded Cheats features — ESP, trainer controls, and radar screenshots",
					galleryTitle: "Grounded Cheats feature gallery",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP god mode and visibility features",
							paragraphs: [
								"Enemy player ESP god mode, boss and base camp awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.",
								"Team and enemy colour coding supports survival sessions and scav-runs. Deep-dive the <a href=\"/grounded-god-mode/\">ESP page</a> and <a href=\"/grounded-god-mode/\">god mode guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Free crafting and Trainer controls",
							paragraphs: [
								"item spawner overlay with directional threat cues, configurable range for rotations and late-session base camps, plus Trainer smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Trainer during live Grounded sessions. See <a href=\"/grounded-free-crafting/\">radar</a> and <a href=\"/grounded-trainer/\">Trainer</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/grounded-cheats/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Easy Anti-Cheat maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($99) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@groundedcheats.com.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/grounded-cheats/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
				},
				pricing: {
					title: "Grounded Cheats Pricing | $35/mo or $99 Life",
					description: "Grounded cheats pricing: $35/month or $99 lifetime for ESP, trainer controls, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Grounded Cheats Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Grounded Cheats — ESP god mode, free crafting, and Trainer for Grounded on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Grounded Cheats package visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Grounded Cheats plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP god mode, free crafting, and Trainer access with Easy Anti-Cheat maintenance included during your term.",
								"Lifetime license: $99 USD for long-term access to the same undetected Grounded Cheats package — ideal if you play Grounded regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP god mode, loot markers, item spawner overlays, Trainer controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Grounded patches.",
								"Season calendars and client updates come from <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/grounded-cheats/\">Grounded cheats</a>, <a href=\"/grounded-cheats/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-raid.webp",
				},
				setup: {
					title: "Grounded Cheats Setup | Windows PC Guide",
					description: "Set up grounded cheats on Windows PC — activate ESP boxes, trainer controls profiles, and . Check Easy Anti-Cheat updates before your first queue.",
					h1: "Grounded Cheats Setup — Windows PC Guide",
					intro: "Install and configure Grounded Cheats for Grounded on Windows 10 or 11. Activate your license, load ESP god mode and Trainer profiles, and verify Easy Anti-Cheat maintenance status before queueing.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Grounded Cheats setup visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Grounded Cheats",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Grounded.",
								"Also glance at <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> if Obsidian Entertainment services look unstable on patch day — a platform outage is not a license fault.",
								"Grounded Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP god mode or Trainer toggles.",
							],
						},
						{
							h2: "Activate ESP god mode and Trainer profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP god mode categories for players, insects, and loot — then tune radar range and Trainer smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Trainer mid-match. Details for Easy Anti-Cheat module live on <a href=\"/grounded-god-mode/\">ESP</a>, <a href=\"/grounded-trainer/\">Trainer</a>, and <a href=\"/grounded-cheats/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/grounded-trainer/\">trainer controls</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Grounded or Easy Anti-Cheat patches",
							paragraphs: [
								"When Obsidian Entertainment ships a major Grounded update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">Easy Anti-Cheat bypass page</a> and <a href=\"/grounded-cheats/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-radar.webp",
				},
				updates: {
					title: "Grounded Cheats Updates | Easy Anti-Cheat Maintenance Log",
					description: "Grounded cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, trainer controls, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Grounded Cheats Updates — Maintenance Log",
					intro: "Track Easy Anti-Cheat maintenance and Grounded patch rebuilds for the undetected ESP god mode, free crafting, and Trainer package. Check here before queueing after major updates.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Grounded patch and maintenance visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Grounded and Easy Anti-Cheat receive frequent patches. Grounded Cheats publishes maintenance notes when ESP god mode, radar, or Trainer behavior needs a rebuild.",
								"Use <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> for Obsidian Entertainment platform health and this page for Grounded Cheats build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on session and scav-run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP god mode overlays, radar range fixes, Trainer tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> and <a href=\"/grounded-cheats/\">undetected Grounded cheats</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a Easy Anti-Cheat update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-esp.webp",
				},
				faq: {
					title: "Grounded Cheats FAQ | ESP, Soft Aim & Radar Answers",
					description: "Grounded cheats FAQ: ESP boxes, trainer controls, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Grounded Cheats FAQ — Common Questions",
					intro: "Answers about undetected Grounded Cheats — ESP god mode, free crafting, Trainer, Easy Anti-Cheat maintenance, checkout, and Grounded compatibility on Windows PC.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "Grounded Cheats FAQ visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Grounded Cheats?",
							paragraphs: [
								"Grounded Cheats is an undetected cheat package for Grounded on Windows PC. It includes ESP god mode, item spawner-style awareness, and Trainer controls with Easy Anti-Cheat maintenance updates.",
								"Packages cover session and scav-run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/grounded-god-mode/\">ESP</a> / <a href=\"/grounded-trainer/\">Trainer</a> for module detail.",
								"Grounded itself is published by Obsidian Entertainment (<a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>). Cheats are third-party tools and may violate Obsidian Entertainment' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Grounded Cheats undetected in 2026?",
							paragraphs: [
								"Grounded Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/grounded-cheats/\">undetected Grounded cheats</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $99 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@groundedcheats.com or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
				},
				support: {
					title: "Grounded Cheats Support | Help & Contact",
					description: "Contact grounded cheats support for licenses, ESP setup, trainer controls profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Grounded Cheats Support — Contact Us",
					intro: "Get help with Grounded Cheats licenses, checkout, ESP god mode setup, Trainer profiles, and Easy Anti-Cheat maintenance for Grounded on Windows PC.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Grounded Cheats support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP god mode or Trainer setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Grounded Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Obsidian Entertainment bans.",
								"Account and game policy questions belong with Obsidian Entertainment. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@groundedcheats.com",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-raid.webp",
				},
				undetected: {
					title: "Undetected Grounded Cheats 2026 | Easy Anti-Cheat",
					description: "Undetected grounded cheats with Easy Anti-Cheat maintenance for ESP boxes, trainer controls, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Grounded Cheats — Easy Anti-Cheat Maintenance",
					intro: "How Grounded Cheats stays maintained for Grounded after Easy Anti-Cheat patches — ESP god mode, free crafting, and Trainer rebuilds for Windows PC.",
					imageAlt: "Grounded Cheats undetected status overview for Windows PC",
					galleryTitle: "Undetected Grounded Cheats visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Easy Anti-Cheat bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Grounded Cheats",
							paragraphs: [
								"Undetected Grounded Cheats means the package is actively maintained against Easy Anti-Cheat and major Grounded patches — not that detection is impossible forever.",
								"Rebuilds target ESP god mode overlays, radar behavior, and Trainer signatures after Easy Anti-Cheat security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>; Grounded client updates ship through <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or Grounded updates ship, the team assesses ESP, radar, and Trainer modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Easy Anti-Cheat bypass Grounded guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/grounded-cheats/\">Grounded cheats 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-wallhack.webp",
				},
				wallhack: {
					title: "Grounded God mode 2026 | ESP Boxes & Visibility",
					description: "Grounded god mode ESP with player boxes and loot markers for Windows PC. Undetected grounded cheats — learn overlays and buy.",
					h1: "Grounded God mode — ESP Boxes & Visibility",
					intro: "Grounded god mode ESP for Grounded — see players, loot, bosses, and containers through toggleable god mode overlays built for survival sessions and scav-runs.",
					imageAlt: "Grounded god mode visibility through walls in a session",
					galleryTitle: "Grounded god mode ESP gallery",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Grounded ESP page",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode ESP vs raw aim tools",
							paragraphs: [
								"A Grounded god mode focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Grounded Cheats bundles god mode ESP with radar and optional Trainer in one license.",
								"Toggle categories so only the god mode overlays you need stay active during rotations and base camp holds.",
								"For the broader ESP keyword page see <a href=\"/grounded-god-mode/\">Grounded ESP</a>; for combat assist see <a href=\"/grounded-trainer/\">Trainer</a>.",
							],
						},
						{
							h2: "Map coverage for god mode ESP",
							paragraphs: [
								"God mode overlays support session, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>. God mode remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair god mode awareness with <a href=\"/grounded-free-crafting/\">free crafting</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected god mode maintenance",
							paragraphs: [
								"ESP god mode modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/grounded-cheats/\">undetected Grounded cheats</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/grounded-god-mode/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-wallhack.webp",
				},
				radar: {
					title: "Grounded Radar Hack 2026 | 2D Threat Overlay",
					description: "Grounded free crafting for flank awareness on Windows PC. Bundled with ESP boxes, trainer controls, and radar in our grounded cheats package.",
					h1: "Grounded Radar Hack — 2D Threat Awareness",
					intro: "item spawner-style overlay for Grounded — directional threat cues for nearby players outside your line of sight, bundled with ESP god mode and Trainer.",
					imageAlt: "Grounded item spawner overlay showing nearby threats",
					galleryTitle: "Grounded free crafting visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "See ESP god mode",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Why free crafting matters in Grounded",
							paragraphs: [
								"sessions fights happen in three dimensions — rooftops, windows, and flanks. A item spawner overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"Grounded Cheats radar complements <a href=\"/grounded-god-mode/\">ESP god mode</a> markers during squad pushes and base camp camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight base camp holds. Directional cues highlight flanks during building clears and flank pushes across session and scav-run.",
								"Toggle radar alongside ESP and Trainer with in-client hotkeys during live matches — see the <a href=\"/grounded-cheats/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/grounded-trainer/\">Trainer</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Free crafting modules receive Easy Anti-Cheat maintenance rebuilds with the full Grounded Cheats package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Grounded patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/grounded-cheats/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-radar.webp",
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass Grounded | Grounded Cheats",
					description: "How grounded cheats rebuild after Easy Anti-Cheat patches — ESP boxes, trainer controls, and radar maintenance for Windows PC. Read before queueing.",
					h1: "Easy Anti-Cheat Bypass — Grounded Cheats Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for Grounded Cheats — how ESP god mode, free crafting, and Trainer rebuild after Grounded security updates.",
					imageAlt: "Grounded Cheats maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat maintenance visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Obsidian Entertainment' anti-cheat for Grounded on PC (see <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a>). Security updates can affect ESP god mode, radar, and Trainer behavior — requiring maintenance rebuilds for undetected packages.",
								"Grounded Cheats monitors Easy Anti-Cheat patch notes and Grounded seasonal updates from <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a> to schedule module reviews.",
								"“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Easy Anti-Cheat patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Trainer profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Obsidian Entertainment service health on <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/grounded-cheats/\">undetected Grounded cheats</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-aimbot.webp",
				},
				"cheats-2026": {
					title: "Grounded Cheats 2026 | ESP Soft Aim & Radar",
					description: "Best grounded cheats 2026: ESP boxes, trainer controls, and radar for Windows PC. Undetected grounded cheats with Easy Anti-Cheat maintenance — compare and buy.",
					h1: "Grounded Cheats 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Grounded Cheats package for Grounded — undetected ESP god mode, free crafting, and Trainer with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Cheats 2026 gallery",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why grounded cheats buyers choose Grounded Cheats in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Grounded Cheats bundles ESP god mode, free crafting, and Trainer with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($99) plans cover session and scav-run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP god mode, loot markers, item spawner overlays, Trainer profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/grounded-cheats/\">Grounded cheats pillar</a>, <a href=\"/grounded-god-mode/\">ESP</a>, <a href=\"/grounded-trainer/\">Trainer</a>, <a href=\"/grounded-god-mode/\">god mode</a>, <a href=\"/grounded-free-crafting/\">radar</a>, <a href=\"/grounded-cheats/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/grounded-cheats/\">Grounded cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/grounded-cheats/\">Grounded cheats</a> checklist, <a href=\"/blog/grounded-cheats-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@groundedcheats.com via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-esp.webp",
				},
				hacks: {
					title: "Grounded Cheats 2026 | Undetected ESP Trainer Guide",
					description: "Grounded cheats for Windows PC: undetected ESP god mode, free crafting, and Trainer with Easy Anti-Cheat maintenance. Compare grounded cheats options and buy…",
					h1: "Grounded Cheats — Undetected ESP, Trainer & God mode",
					intro: "Grounded cheats for session and scav-run combine ESP god mode visibility, item spawner-style threat cues, and Trainer controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for grounded cheats in 2026.",
					imageAlt: "Grounded Cheats product page — ESP, trainer, and radar",
					galleryTitle: "Grounded cheats gallery — ESP, Trainer, god mode",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "What Grounded cheats include in 2026",
							paragraphs: [
								"Players searching for Grounded cheats usually want visibility and combat tools without stacking separate downloads. Grounded Cheats bundles player ESP god mode, loot markers, item spawner overlays, and configurable Trainer in one maintained package — the same toolkit often called grounded cheats.",
								"Coverage spans session and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($99) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> before patch-day queues.",
							],
						},
						{
							h2: "How this Grounded cheats pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/grounded-cheats/\">grounded cheats 2026</a> and <a href=\"/grounded-cheats/\">Grounded cheats</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/grounded-god-mode/\">Grounded ESP</a>, <a href=\"/grounded-trainer/\">Grounded Trainer</a>, <a href=\"/grounded-god-mode/\">god mode</a>, <a href=\"/grounded-free-crafting/\">free crafting</a>, and <a href=\"/grounded-trainer/\">trainer controls</a>.",
								"Blog guides expand Easy Anti-Cheat keyword: <a href=\"/blog/grounded-cheats-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/grounded-cheats-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-grounded-cheats-antiCheat/\">undetected Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2: "Grounded cheats vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only god mode or only aim assist. Grounded Cheats maps the full session loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Trainer per weapon class.",
								"Compare the <a href=\"/grounded-god-mode/\">ESP</a>, <a href=\"/grounded-trainer/\">Trainer</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/grounded-cheats/\">mod menu</a>, <a href=\"/grounded-trainer/\">trainer</a>, <a href=\"/grounded-god-mode/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected Grounded cheats with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Undetected Grounded cheats require rebuilds after Easy Anti-Cheat and major Grounded patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.easy.ac/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href=\"/grounded-cheats/\">undetected Grounded cheats</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-raid.webp",
				},
				"cheat-download": {
					title: "Grounded Hack Download 2026 | Instant Access",
					description: "Grounded cheat download with instant license delivery — ESP boxes, trainer controls, and radar for Windows PC. Buy, activate, and play.",
					h1: "Grounded Hack Download — Instant License Delivery",
					intro: "How Grounded cheat download works for Grounded — digital license delivery after payment confirmation, with ESP god mode, free crafting, and Trainer access on Windows PC.",
					imageAlt: "Grounded Cheats download and install delivery flow",
					galleryTitle: "Grounded cheat download visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Grounded cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, Grounded Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Obsidian Entertainment services are down, check <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Grounded cheat download includes player ESP god mode, loot and container markers, item spawner overlays, Trainer profiles, and in-client toggles for survival sessions and scav-runs.",
								"Monthly ($35) and lifetime ($99) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/grounded-god-mode/\">ESP</a>, <a href=\"/grounded-trainer/\">Trainer</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP god mode and Trainer on Windows 10 or 11. When Grounded or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/grounded-cheats/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-raid.webp",
				},
				"mod-menu": {
					title: "Grounded Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Grounded mod menu for in-match toggles — ESP boxes, trainer controls, radar, and on Windows PC. Undetected grounded cheats package.",
					h1: "Grounded Mod Menu — In-Client Control Panel",
					intro: "Grounded mod menu controls for Grounded — toggle ESP god mode categories, radar range, and Trainer profiles mid-match without leaving your Grounded session on Windows PC.",
					imageAlt: "Grounded Cheats in-game menu controls",
					galleryTitle: "Grounded mod menu gallery",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Grounded mod menu controls",
							paragraphs: [
								"A Grounded mod menu is the in-client panel where you enable ESP god mode overlays, adjust radar range, and switch Trainer profiles during live matches. Grounded Cheats keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Trainer settings without alt-tabbing out of Grounded.",
								"Control deep-dives: <a href=\"/grounded-god-mode/\">ESP</a>, <a href=\"/grounded-trainer/\">Trainer</a>, <a href=\"/grounded-free-crafting/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for survival sessions and scav-runs",
							paragraphs: [
								"Separate ESP god mode categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and base camp holds.",
								"Free crafting range and Trainer smoothness adjust from the same mod menu — useful when ${EXT.grounded} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/grounded-trainer/\">trainer controls</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Easy Anti-Cheat patches",
							paragraphs: [
								"Grounded mod menu behavior is rebuilt when Easy Anti-Cheat or major Grounded updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-radar.webp",
				},
				"soft-aim": {
					title: "Grounded Soft Aim 2026 | Smooth Trainer Settings",
					description: "Grounded trainer controls settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our grounded cheats with ESP boxes.",
					h1: "Grounded Soft Aim — Smooth Trainer Controls",
					intro: "Grounded trainer controls settings for Grounded — configurable Trainer smoothness, FOV, bone priority, and hotkey toggles bundled with ESP god mode and radar in one undetected license.",
					imageAlt: "Grounded trainer controls FOV and smoothness settings",
					galleryTitle: "Grounded trainer controls gallery",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Trainer controls",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "What Grounded trainer controls means",
							paragraphs: [
								"Grounded trainer controls refers to Trainer behavior tuned for smooth, natural-looking tracking rather than instant snap. Grounded Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Trainer documentation: <a href=\"/grounded-trainer/\">Grounded Trainer</a>. Alternate wording: <a href=\"/grounded-trainer/\">trainer hack</a>.",
							],
						},
						{
							h2: "Trainer controls profiles per weapon class",
							paragraphs: [
								"Save separate trainer controls profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a> balance patches — retune smoothness after major combat updates.",
								"Trainer controls ships alongside <a href=\"/grounded-god-mode/\">ESP god mode</a> and <a href=\"/grounded-free-crafting/\">item spawner</a> overlays.",
							],
						},
						{
							h2: "Undetected trainer controls with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Trainer modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Grounded Cheats 2026 | Buyer Guide",
					description: "Best grounded cheats for 2026: ESP boxes, trainer controls, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Grounded Cheats — 2026 Buyer Guide",
					intro: "Compare the Grounded cheats for Grounded in 2026 — undetected ESP god mode, free crafting, and Trainer in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Best Grounded cheats gallery",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the Grounded cheats in 2026",
							paragraphs: [
								"The Grounded cheats combine active Easy Anti-Cheat maintenance, a full ESP god mode and radar stack, configurable Trainer, and clear update communication — not a stale build from a prior season.",
								"Grounded Cheats covers session and scav-run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.xbox.com/en-us/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded on Xbox</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Grounded cheats feature checklist",
							paragraphs: [
								"Look for player ESP god mode, loot markers, item spawner overlays, Trainer profiles, hotkey toggles, and documented maintenance after Grounded patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/grounded-cheats/\">undetected status</a>, and <a href=\"/grounded-cheats/\">Grounded cheats 2026</a> before checkout — monthly ($35) and lifetime ($99) plans available.",
								"Module pages worth opening: <a href=\"/grounded-god-mode/\">ESP</a>, <a href=\"/grounded-trainer/\">Trainer</a>, <a href=\"/grounded-cheats/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the Grounded cheats safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Obsidian Entertainment terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-esp.webp",
				},
				"aimbot-hack": {
					title: "Grounded Trainer Hack 2026 | Soft Aim Assist",
					description: "Grounded trainer hack with trainer controls for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our grounded cheats package.",
					h1: "Grounded Trainer Hack — Soft Aim Assist",
					intro: "Grounded trainer hack tools for Grounded — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP god mode and radar in one undetected license.",
					imageAlt: "Grounded trainer hack controls and bone priority",
					galleryTitle: "Grounded trainer hack gallery",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "Trainer settings",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded trainer hack vs visibility tools",
							paragraphs: [
								"A Grounded trainer hack focuses on assisted targeting during firefights — while ESP god mode and radar handle map awareness. Grounded Cheats bundles trainer hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Grounded combat pace across survival sessions and scav-runs.",
								"Prefer softer tracking language? See <a href=\"/grounded-trainer/\">trainer controls</a>. Full settings: <a href=\"/grounded-trainer/\">Trainer page</a>.",
							],
						},
						{
							h2: "Trainer hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable trainer hack mid-match without opening menus during rotations or late-session base camps.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected trainer hack maintenance",
							paragraphs: [
								"Trainer hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/grounded-god-mode/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Grounded ESP Hack 2026 | Player Boxes & Loot",
					description: "Grounded ESP hack with player boxes and loot markers for Windows PC. Undetected grounded cheats with — see overlays and buy.",
					h1: "Grounded ESP Hack — Player Boxes Guide",
					intro: "Grounded ESP hack overlays for Grounded — player outlines, boss threat cues, loot and container markers with distance readouts across session and scav-run.",
					imageAlt: "Grounded ESP hack boxes and loot markers",
					galleryTitle: "Grounded ESP hack gallery",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "What a Grounded ESP hack shows",
							paragraphs: [
								"A Grounded ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/grounded-god-mode/\">Grounded ESP</a>. God mode wording: <a href=\"/grounded-god-mode/\">god mode</a>.",
							],
						},
						{
							h2: "ESP hack categories for sessions",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only session-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports survival sessions and scav-runs.",
								"POI and loot changes publish through <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with Easy Anti-Cheat maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and Grounded patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/grounded-free-crafting/\">free crafting</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/grounded-cheats/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-wallhack.webp",
				},
				"unlock-all": {
					title: "Grounded Unlock All 2026 | What It Really Means",
					description: "Grounded unlock all explained vs real grounded cheats — ESP boxes, trainer controls, and radar for Windows PC. Know what you are buying.",
					h1: "Grounded Unlock All — What Players Search For",
					intro: "Grounded unlock all is a common search term for Grounded — this page clarifies what unlock-all tools claim versus the ESP god mode, free crafting, and Trainer tools Grounded Cheats actually provides on Windows PC.",
					imageAlt: "Grounded Cheats license features overview",
					galleryTitle: "Grounded unlock all guide visuals",
					ctaPrimary: "Buy Grounded Cheats",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Grounded unlock all usually means",
							paragraphs: [
								"Grounded unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP god mode and Trainer.",
								"Grounded Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Trainer — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://www.obsidian.net/games/grounded\" target=\"_blank\" rel=\"noopener noreferrer\">Grounded</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP god mode helps you spot enemy squads, bosses, and high-value loot during live matches. Free crafting adds flank awareness; Trainer covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/grounded-god-mode/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/grounded-cheats/\">Grounded cheats</a> and <a href=\"/grounded-cheats/\">Grounded cheats</a>.",
							],
						},
						{
							h2: "Buying Grounded Cheats for the right reasons",
							paragraphs: [
								"If you need undetected ESP god mode, free crafting, and Trainer for Grounded on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Grounded Cheats",
					description: "Privacy policy for Grounded Cheats. How we handle support emails, order data, and checkout for grounded cheats licenses on groundedcheats.com.",
					h1: "Privacy Policy",
					intro: "How Grounded Cheats handles information when you browse groundedcheats.com or contact support about a Grounded license.",
					imageAlt: "Grounded Cheats privacy policy page",
					galleryTitle: "Grounded Cheats legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Grounded Cheats customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@groundedcheats.com with your request details.",
								"Policy updates publish on this page. Continued use of groundedcheats.com after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Grounded Cheats",
					description: "Refund policy for Grounded Cheats. Digital delivery terms and eligibility for grounded cheats packages with ESP, trainer controls, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Grounded Cheats licenses — ESP god mode, free crafting, and Trainer packages purchased through checkout for Grounded.",
					imageAlt: "Grounded Cheats refund policy page",
					galleryTitle: "Grounded Cheats billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Grounded Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@groundedcheats.com with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-raid.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Grounded Cheats Rules",
					description: "Terms of use for groundedcheats.com and Grounded Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of groundedcheats.com and Grounded Cheats licenses for Grounded on Windows PC.",
					imageAlt: "Grounded Cheats terms of use page",
					galleryTitle: "Grounded Cheats legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Grounded Cheats you agree to these terms. Licenses grant personal use of ESP god mode, radar, and Trainer tools for Grounded on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Grounded may violate Obsidian Entertainment terms and result in account penalties. Grounded Cheats provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/grounded-cheats/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@groundedcheats.com for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Grounded indetectables",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting y Trainer para Grounded en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, radar y Trainer para Grounded PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Grounded Cheats está activo para Grounded en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Grounded",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Grounded Cheats",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, god mode, radar y Trainer indetectables para Grounded — checkout en .",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode y Trainer",
					description: "Trucos Grounded indetectables para Grounded en PC. ESP god mode, free crafting y Trainer con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "Grounded Cheats — ESP, God mode y Trainer indetectables",
					intro: "Paquete undetected para Grounded en Windows PC: ESP god mode, radar y Trainer con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Galería Grounded Cheats — ESP, Trainer y god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Grounded Cheats en 2026",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Ideal para leer escuadrones enemigos en BR y scav-run.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar y Trainer en una licencia",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Cajas de jugador y god mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. player boxes, loot markers, and god mode overlays.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Controles trainer controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, trainer controls, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Funciones.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Funciones",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. ESP, trainer controls, radar controls.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $99 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Precios.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. $35 monthly or $99 lifetime licenses.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Instalación.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Actualizaciones: Easy Anti-Cheat patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Actualizaciones.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Soporte.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Trucos indetectables.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | Visibilidad ESP",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. god mode ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | Radar 2D de amenazas",
					description: "Free crafting: item spawner cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Free crafting",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. item spawner cues for flanks and rotations.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Grounded 2026 | Guía del comprador",
					description: "Trucos Grounded 2026: 2026 Grounded cheats checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Grounded 2026",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Trucos Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Trucos Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Trucos Grounded 2026",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. 2026 Grounded cheats checklist before checkout.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Grounded | Guía ESP y Trainer",
					description: "Trucos Grounded: the Grounded hacks pillar for ESP and Trainer. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Trucos Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Trucos Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. the Grounded hacks pillar for ESP and Trainer.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Grounded Cheats | Acceso instantáneo",
					description: "Descarga Grounded Cheats: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Grounded Cheats",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Descarga Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Descarga Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Grounded Cheats",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Grounded | Controles en partida",
					description: "Menú mod Grounded: in-client ESP and trainer controls toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Menú mod Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Menú mod Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. in-client ESP and trainer controls toggles.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Ajustes trainer controls",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. smooth trainer controls settings for Windows PC.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Grounded | Lista de compra",
					description: "Mejores trucos Grounded: what to compare before buying Grounded cheats. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Mejores trucos Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Mejores trucos Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. what to compare before buying Grounded cheats.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack trainer Grounded | Asistencia trainer controls",
					description: "Hack trainer Grounded: undetected Trainer hack assist for Grounded. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack trainer Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Hack trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack trainer Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. undetected Trainer hack assist for Grounded.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Cajas y loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | Qué significa",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. unlock-all searches vs real ESP and Trainer tools.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Grounded Cheats",
					description: "Política de privacidad for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Política de privacidad",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Política de privacidad for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Grounded Cheats",
					description: "Política de reembolso for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Política de reembolso",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Política de reembolso for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Contact email, order references, and basic site security data.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Grounded Cheats",
					description: "Términos de uso for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Términos de uso",
					intro: "Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Términos de uso for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Contact email, order references, and basic site security data.",
								"Licencias con entrega digital instantánea. Planes $35/mes y $99 de por vida incluyen mantenimiento Easy Anti-Cheat.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Grounded Cheats ofrece god mode trainer, free crafting y grounded trainer para Grounded en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@groundedcheats.com para solicitudes legales o de soporte.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Grounded indétectables",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting et Trainer pour Grounded sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, radar et Trainer pour Grounded PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Grounded Cheats est actif pour Grounded sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Grounded",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Grounded Cheats",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, god mode, radar et Trainer indétectables pour Grounded — secure checkout.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode et Trainer",
					description: "Triches Grounded indétectables pour Grounded sur PC. ESP god mode, free crafting et Trainer avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.",
					h1: "Grounded Cheats — ESP, God mode et Trainer indétectables",
					intro: "Pack undetected pour Grounded sur PC Windows : ESP god mode, radar et Trainer avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Galerie Grounded Cheats — ESP, Trainer et god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Grounded Cheats en 2026",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Parfait pour lire les escouades ennemies en BR et scav-run.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar et Trainer en une licence",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Boîtes joueur et god mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. player boxes, loot markers, and god mode overlays.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Contrôles trainer controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, trainer controls, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Fonctions.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Fonctions",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. ESP, trainer controls, radar controls.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $99 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Tarifs.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. $35 monthly or $99 lifetime licenses.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Installation.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Mises à jour: Easy Anti-Cheat patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Mises à jour.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Support.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after Easy Anti-Cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Triches indétectables.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | Visibilité ESP",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. god mode ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | Radar 2D des menaces",
					description: "Free crafting: item spawner cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Free crafting",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. item spawner cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Grounded 2026 | Guide acheteur",
					description: "Triches Grounded 2026: 2026 Grounded cheats checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Grounded 2026",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Triches Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Triches Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Triches Grounded 2026",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. 2026 Grounded cheats checklist before checkout.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Grounded | Guide ESP et Trainer",
					description: "Triches Grounded: the Grounded hacks pillar for ESP and Trainer. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Triches Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Triches Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. the Grounded hacks pillar for ESP and Trainer.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Grounded Cheats | Accès instantané",
					description: "Téléchargement Grounded Cheats: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Grounded Cheats",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Téléchargement Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Téléchargement Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Grounded Cheats",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Grounded | Contrôles en jeu",
					description: "Menu mod Grounded: in-client ESP and trainer controls toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Menu mod Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Menu mod Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. in-client ESP and trainer controls toggles.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Réglages trainer controls",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. smooth trainer controls settings for Windows PC.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Grounded | Checklist acheteur",
					description: "Meilleures triches Grounded: what to compare before buying Grounded cheats. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Meilleures triches Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Meilleures triches Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. what to compare before buying Grounded cheats.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack trainer Grounded | Assistance trainer controls",
					description: "Hack trainer Grounded: undetected Trainer hack assist for Grounded. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack trainer Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Hack trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack trainer Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. undetected Trainer hack assist for Grounded.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Boîtes et loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | Ce que ça signifie",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acheter Grounded Cheats",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. unlock-all searches vs real ESP and Trainer tools.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Grounded Cheats",
					description: "Politique de confidentialité for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Politique de confidentialité for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Grounded Cheats",
					description: "Politique de remboursement for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Politique de remboursement for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Contact email, order references, and basic site security data.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Grounded Cheats",
					description: "Conditions d'utilisation for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Conditions d'utilisation for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Contact email, order references, and basic site security data.",
								"Licences avec livraison numérique instantanée. Forfaits 25 $/mois et 99 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Grounded Cheats combine god mode trainer, free crafting et grounded trainer pour Grounded sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@groundedcheats.com pour le support ou les demandes légales.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Grounded Cheats",
					accentShort: "Grounded Cheats",
					subtitle: "ESP God mode, Radar Hack und Trainer für Grounded auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Trainer für Grounded PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Grounded Cheats Paket ist live für Grounded auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Grounded Cheats Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, God mode, Radar und Trainer für Grounded — Checkout über .",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode & Trainer",
					description: "Undetected Grounded Cheats für Grounded auf PC. ESP God mode, Radar Hack und Trainer mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "Grounded Cheats — Undetected ESP, God mode & Trainer",
					intro: "Undetected Windows PC Paket für Grounded: ESP God mode, Radar und Trainer mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Grounded Cheats Galerie — ESP, Trainer und God mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Grounded Cheats 2026 führt",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Ideal um feindliche Squads in BR und scav-run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP God mode, Radar und Trainer in einer Lizenz",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Spielerboxen & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. player boxes, loot markers, and god mode overlays.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft-Aim Steuerung",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, trainer controls, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Features.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Features",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. ESP, trainer controls, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $99 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Preise.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. $35 monthly or $99 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Setup.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Updates: Easy Anti-Cheat patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Updates.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Support.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Undetected Cheats.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Sichtbarkeit",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. god mode ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: item spawner cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. item spawner cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch-Wartung",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded Cheats 2026 | Käuferleitfaden",
					description: "Grounded Cheats 2026: 2026 Grounded cheats checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded Cheats 2026",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded Cheats 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Cheats 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded Cheats 2026",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. 2026 Grounded cheats checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Grounded Cheats | ESP Trainer Guide",
					description: "Grounded Cheats: the Grounded hacks pillar for ESP and Trainer. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded Cheats",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded Cheats.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Cheats",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. the Grounded hacks pillar for ESP and Trainer.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Grounded Cheat Download | Sofortzugang",
					description: "Grounded Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded Cheat Download",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded Cheat Download.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Grounded Cheat Download",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Grounded Cheat Download",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded Mod-Menü | In-Game Toggles",
					description: "Grounded Mod-Menü: in-client ESP and trainer controls toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded Mod-Menü",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded Mod-Menü.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded Mod-Menü",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Mod-Menü",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. in-client ESP and trainer controls toggles.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Soft-Aim Einstellungen",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. smooth trainer controls settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Grounded Cheats | Käufer-Checkliste",
					description: "Beste Grounded Cheats: what to compare before buying Grounded cheats. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Grounded Cheats",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Beste Grounded Cheats.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Beste Grounded Cheats",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Grounded Cheats",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. what to compare before buying Grounded cheats.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded Trainer Hack | Soft-Aim Assist",
					description: "Grounded Trainer Hack: undetected Trainer hack assist for Grounded. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded Trainer Hack",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded Trainer Hack.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded Trainer Hack",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Trainer Hack",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. undetected Trainer hack assist for Grounded.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP Hack | Boxen & Loot",
					description: "Grounded ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded ESP Hack",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded ESP Hack.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP Hack",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP Hack",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | Was es bedeutet",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. unlock-all searches vs real ESP and Trainer tools.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Grounded Cheats",
					description: "Datenschutz for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Datenschutz",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Datenschutz for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Grounded Cheats",
					description: "Rückerstattung for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Rückerstattung",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Rückerstattung for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Contact email, order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Grounded Cheats",
					description: "Nutzungsbedingungen for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Nutzungsbedingungen for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Contact email, order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung. $35/Monat und $99 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Grounded Cheats bündelt god mode trainer, free crafting und grounded trainer für Grounded auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@groundedcheats.com für Support und rechtliche Anfragen.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Grounded indetectáveis",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting e Trainer para Grounded no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, radar e Trainer para Grounded PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Grounded Cheats está ativo para Grounded no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Grounded",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Grounded Cheats",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, god mode, radar e Trainer indetectáveis para Grounded — secure checkout.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode e Trainer",
					description: "Cheats Grounded indetectáveis para Grounded no PC. ESP god mode, free crafting e Trainer com manutenção Easy Anti-Cheat. Entrega digital instantánea.",
					h1: "Grounded Cheats — ESP, God mode e Trainer indetectáveis",
					intro: "Pacote undetected para Grounded no Windows PC: ESP god mode, radar e Trainer com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Galeria Grounded Cheats — ESP, Trainer e god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Grounded Cheats em 2026",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Ideal para ler esquadrões inimigos em BR e scav-run.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar e Trainer numa licença",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Caixas de jogador e god mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. player boxes, loot markers, and god mode overlays.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Controles trainer controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, trainer controls, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Recursos.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Recursos",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. ESP, trainer controls, radar controls.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $99 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Preços.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. $35 monthly or $99 lifetime licenses.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Instalação.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Atualizações: Easy Anti-Cheat patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Atualizações.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Suporte.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Cheats indetectáveis.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | Visibilidade ESP",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. god mode ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | Radar 2D de ameaças",
					description: "Free crafting: item spawner cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Free crafting",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. item spawner cues for flanks and rotations.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Grounded 2026 | Guia do comprador",
					description: "Cheats Grounded 2026: 2026 Grounded cheats checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Grounded 2026",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Cheats Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Cheats Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheats Grounded 2026",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. 2026 Grounded cheats checklist before checkout.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Grounded | Guia ESP e Trainer",
					description: "Cheats Grounded: the Grounded hacks pillar for ESP and Trainer. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Cheats Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Cheats Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. the Grounded hacks pillar for ESP and Trainer.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Grounded Cheats | Acesso instantâneo",
					description: "Download Grounded Cheats: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Grounded Cheats",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Download Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Download Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Grounded Cheats",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Grounded | Controles in-game",
					description: "Menu mod Grounded: in-client ESP and trainer controls toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Menu mod Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Menu mod Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. in-client ESP and trainer controls toggles.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Ajustes trainer controls",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. smooth trainer controls settings for Windows PC.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Grounded | Checklist do comprador",
					description: "Melhores cheats Grounded: what to compare before buying Grounded cheats. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Melhores cheats Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Melhores cheats Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. what to compare before buying Grounded cheats.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack trainer Grounded | Assistência trainer controls",
					description: "Hack trainer Grounded: undetected Trainer hack assist for Grounded. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack trainer Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Hack trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack trainer Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. undetected Trainer hack assist for Grounded.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Caixas e loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | O que significa",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Comprar Grounded Cheats",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. unlock-all searches vs real ESP and Trainer tools.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Grounded Cheats",
					description: "Política de privacidade for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Política de privacidade",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Política de privacidade for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Grounded Cheats",
					description: "Política de reembolso for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Política de reembolso",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Política de reembolso for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Contact email, order references, and basic site security data.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Grounded Cheats",
					description: "Termos de uso for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Termos de uso",
					intro: "Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Termos de uso for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Contact email, order references, and basic site security data.",
								"Licenças com entrega digital instantânea. Planos $35/mês e $99 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats reúne god mode trainer, free crafting e grounded trainer para Grounded no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@groundedcheats.com para suporte ou questões legais.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Grounded indetectable",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting e Trainer per Grounded su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, radar e Trainer per Grounded PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Grounded Cheats è attivo per Grounded su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Grounded",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Grounded Cheats",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, god mode, radar e Trainer indetectable per Grounded — secure checkout.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode e Trainer",
					description: "Cheat Grounded indetectable per Grounded su PC. ESP god mode, free crafting e Trainer con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.",
					h1: "Grounded Cheats — ESP, God mode e Trainer indetectable",
					intro: "Pacchetto undetected per Grounded su PC Windows: ESP god mode, radar e Trainer con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Galleria Grounded Cheats — ESP, Trainer e god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Grounded Cheats nel 2026",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Ideale per leggere squadre nemiche in BR e scav-run.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar e Trainer in una licenza",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Box giocatore e god mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. player boxes, loot markers, and god mode overlays.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Controlli trainer controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, trainer controls, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Funzioni.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Funzioni",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. ESP, trainer controls, radar controls.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $99 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Prezzi.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. $35 monthly or $99 lifetime licenses.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Setup.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Aggiornamenti: Easy Anti-Cheat patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Aggiornamenti.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Supporto.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after Easy Anti-Cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Cheat indetectable.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | Visibilità ESP",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. god mode ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | Radar 2D minacce",
					description: "Free crafting: item spawner cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Free crafting",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. item spawner cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Grounded 2026 | Guida acquirente",
					description: "Cheat Grounded 2026: 2026 Grounded cheats checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Grounded 2026",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Cheat Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Cheat Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheat Grounded 2026",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. 2026 Grounded cheats checklist before checkout.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Grounded | Guida ESP e Trainer",
					description: "Cheat Grounded: the Grounded hacks pillar for ESP and Trainer. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Cheat Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Cheat Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. the Grounded hacks pillar for ESP and Trainer.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Grounded Cheats | Accesso istantaneo",
					description: "Download Grounded Cheats: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Grounded Cheats",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Download Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Download Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Grounded Cheats",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Grounded | Toggle in-game",
					description: "Mod menu Grounded: in-client ESP and trainer controls toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Mod menu Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Mod menu Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. in-client ESP and trainer controls toggles.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Impostazioni trainer controls",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. smooth trainer controls settings for Windows PC.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Grounded | Checklist acquirente",
					description: "Migliori cheat Grounded: what to compare before buying Grounded cheats. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Migliori cheat Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Migliori cheat Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. what to compare before buying Grounded cheats.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack trainer Grounded | Assist trainer controls",
					description: "Hack trainer Grounded: undetected Trainer hack assist for Grounded. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack trainer Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Hack trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack trainer Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. undetected Trainer hack assist for Grounded.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Box e loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | Cosa significa",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Acquista Grounded Cheats",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. unlock-all searches vs real ESP and Trainer tools.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Grounded Cheats",
					description: "Informativa privacy for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Informativa privacy",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Informativa privacy for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Grounded Cheats",
					description: "Politica di rimborso for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Politica di rimborso for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Contact email, order references, and basic site security data.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Grounded Cheats",
					description: "Termini di utilizzo for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Termini di utilizzo for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Contact email, order references, and basic site security data.",
								"Licenze con consegna digitale istantanea. Piani $35/mese e $99 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats unisce god mode trainer, free crafting e grounded trainer per Grounded su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@groundedcheats.com per supporto o richieste legali.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Grounded Cheats",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting en Trainer voor Grounded op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Trainer voor Grounded PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Grounded Cheats pakket is live voor Grounded op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Grounded Cheats kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, god mode, radar en Trainer voor Grounded — secure checkout.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode & Trainer",
					description: "Undetected Grounded cheats voor Grounded op PC. ESP god mode, free crafting en Trainer met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "Grounded Cheats — Undetected ESP, God mode & Trainer",
					intro: "Undetected Windows PC pakket voor Grounded: ESP god mode, radar en Trainer met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Grounded Cheats galerij — ESP, Trainer en god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Grounded Cheats in 2026",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Ideaal om vijandelijke squads te lezen in BR en scav-run.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP god mode, radar en Trainer in één licentie",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. player boxes, loot markers, and god mode overlays.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, trainer controls, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Functies.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Functies",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. ESP, trainer controls, radar controls.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $99 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Prijzen.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. $35 monthly or $99 lifetime licenses.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Setup.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Maintenance Log",
					description: "Updates: Easy Anti-Cheat patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Updates.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Support.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Undetected Cheats.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. god mode ESP for players, loot, and distance.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: item spawner cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. item spawner cues for flanks and rotations.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded Cheats 2026 | Buyer Guide",
					description: "Grounded Cheats 2026: 2026 Grounded cheats checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded Cheats 2026",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded Cheats 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Cheats 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded Cheats 2026",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. 2026 Grounded cheats checklist before checkout.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Grounded Cheats | ESP Trainer Guide",
					description: "Grounded Cheats: the Grounded hacks pillar for ESP and Trainer. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded Cheats",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded Cheats.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Cheats",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. the Grounded hacks pillar for ESP and Trainer.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Grounded Cheat Download | Instant Access",
					description: "Grounded Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded Cheat Download",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded Cheat Download.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Grounded Cheat Download",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Grounded Cheat Download",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded Mod Menu | In-Game Toggles",
					description: "Grounded Mod Menu: in-client ESP and trainer controls toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded Mod Menu",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded Mod Menu.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded Mod Menu",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Mod Menu",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. in-client ESP and trainer controls toggles.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. smooth trainer controls settings for Windows PC.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Grounded Cheats | Buyer Checklist",
					description: "Beste Grounded Cheats: what to compare before buying Grounded cheats. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Grounded Cheats",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Beste Grounded Cheats.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Beste Grounded Cheats",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Grounded Cheats",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. what to compare before buying Grounded cheats.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded Trainer Hack | Soft Aim Assist",
					description: "Grounded Trainer Hack: undetected Trainer hack assist for Grounded. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded Trainer Hack",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded Trainer Hack.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded Trainer Hack",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Trainer Hack",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. undetected Trainer hack assist for Grounded.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP Hack | Boxes & Loot",
					description: "Grounded ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded ESP Hack",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded ESP Hack.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP Hack",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP Hack",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. directe digitale levering. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. unlock-all searches vs real ESP and Trainer tools.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@groundedcheats.com voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Grounded Cheats",
					description: "Privacybeleid for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Privacybeleid",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Privacybeleid for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com voor support en juridische vragen.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Grounded Cheats",
					description: "Restitutiebeleid for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Restitutiebeleid for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Contact email, order references, and basic site security data.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com voor support en juridische vragen.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Grounded Cheats",
					description: "Gebruiksvoorwaarden for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Gebruiksvoorwaarden for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Contact email, order references, and basic site security data.",
								"Licenties met directe digitale levering. $35/maand en $99 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats bundelt god mode trainer, free crafting en grounded trainer voor Grounded op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com voor support en juridische vragen.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Grounded",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting i Trainer do Grounded na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, radar i Trainer dla Grounded PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Grounded Cheats jest aktywny dla Grounded na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Grounded",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Grounded Cheats",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, god mode, radar i Trainer dla Grounded — checkout przez .",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode i Trainer",
					description: "Undetected cheaty Grounded dla Grounded na PC. ESP god mode, free crafting i Trainer z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.",
					h1: "Grounded Cheats — Undetected ESP, God mode i Trainer",
					intro: "Pakiet undetected dla Grounded na Windows PC: ESP god mode, radar i Trainer z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Galeria Grounded Cheats — ESP, Trainer i god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Grounded Cheats w 2026",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Idealny do czytania wrogich squadów w BR i scav-run.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar i Trainer w jednej licencji",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Player Boxes & God mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. player boxes, loot markers, and god mode overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Soft Aim Controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, trainer controls, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Funkcje.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Funkcje",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. ESP, trainer controls, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $99 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Cennik.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. $35 monthly or $99 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Instalacja.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizacje: Easy Anti-Cheat patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Aktualizacje.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Wsparcie.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Easy Anti-Cheat Safe Status",
					description: "Cheaty undetected: undetected maintenance after Easy Anti-Cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Cheaty undetected.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | ESP Visibility",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. god mode ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | 2D Threat Overlay",
					description: "Free crafting: item spawner cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Free crafting",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. item spawner cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Grounded 2026 | Buyer Guide",
					description: "Cheaty Grounded 2026: 2026 Grounded cheats checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Grounded 2026",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Cheaty Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Cheaty Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheaty Grounded 2026",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. 2026 Grounded cheats checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Grounded | ESP Trainer Guide",
					description: "Cheaty Grounded: the Grounded hacks pillar for ESP and Trainer. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Cheaty Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Cheaty Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. the Grounded hacks pillar for ESP and Trainer.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Grounded Cheats | Instant Access",
					description: "Pobieranie Grounded Cheats: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Grounded Cheats",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Pobieranie Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Pobieranie Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Grounded Cheats",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Grounded | In-Game Toggles",
					description: "Mod menu Grounded: in-client ESP and trainer controls toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Mod menu Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Mod menu Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. in-client ESP and trainer controls toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Smooth Aim Settings",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. smooth trainer controls settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Grounded | Buyer Checklist",
					description: "Najlepsze cheaty Grounded: what to compare before buying Grounded cheats. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Najlepsze cheaty Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Najlepsze cheaty Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. what to compare before buying Grounded cheats.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack trainer Grounded | Soft Aim Assist",
					description: "Hack trainer Grounded: undetected Trainer hack assist for Grounded. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack trainer Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Hack trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack trainer Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. undetected Trainer hack assist for Grounded.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Boxes & Loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | What It Means",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Kup Grounded Cheats",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. unlock-all searches vs real ESP and Trainer tools.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Grounded Cheats",
					description: "Polityka prywatności for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Polityka prywatności for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Grounded Cheats",
					description: "Polityka zwrotów for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Polityka zwrotów for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Contact email, order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Grounded Cheats",
					description: "Warunki użytkowania for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Warunki użytkowania for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Contact email, order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa. Plany $35/mies. i $99 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats łączy god mode trainer, free crafting i grounded trainer dla Grounded na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com w sprawach wsparcia i prawnych.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Grounded",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting и Trainer для Grounded на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar и Trainer для Grounded PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Grounded Cheats активен для Grounded на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Grounded Cheats",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, god mode, radar и Trainer для Grounded — оплата через .",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode и Trainer",
					description: "Undetected читы Grounded для Grounded на PC. ESP god mode, free crafting и Trainer с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "Grounded Cheats — Undetected ESP, God mode и Trainer",
					intro: "Undetected пакет для Grounded на Windows PC: ESP god mode, radar и Trainer с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Галерея Grounded Cheats — ESP, Trainer и god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Grounded Cheats в 2026",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Идеально для чтения вражеских отрядов в BR и scav-run.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar и Trainer в одной лицензии",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Боксы игроков и god mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. player boxes, loot markers, and god mode overlays.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Управление trainer controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, trainer controls, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Функции.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Функции",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. ESP, trainer controls, radar controls.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $99 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Цены.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. $35 monthly or $99 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Установка.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Обновления: Easy Anti-Cheat patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Обновления.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Поддержка.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after Easy Anti-Cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Undetected читы.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | Видимость ESP",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. god mode ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | 2D радар угроз",
					description: "Free crafting: item spawner cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Free crafting",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. item spawner cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Grounded 2026 | Гайд покупателя",
					description: "Читы Grounded 2026: 2026 Grounded cheats checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Grounded 2026",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Читы Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Читы Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Читы Grounded 2026",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. 2026 Grounded cheats checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Grounded | Гайд ESP и Trainer",
					description: "Читы Grounded: the Grounded hacks pillar for ESP and Trainer. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Читы Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Читы Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. the Grounded hacks pillar for ESP and Trainer.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Grounded Cheats | Мгновенный доступ",
					description: "Скачать Grounded Cheats: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Grounded Cheats",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Скачать Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Скачать Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Grounded Cheats",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Grounded | Игровые переключатели",
					description: "Мод-меню Grounded: in-client ESP and trainer controls toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Мод-меню Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Мод-меню Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. in-client ESP and trainer controls toggles.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Настройки trainer controls",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. smooth trainer controls settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Grounded | Чеклист покупателя",
					description: "Лучшие читы Grounded: what to compare before buying Grounded cheats. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Лучшие читы Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Лучшие читы Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. what to compare before buying Grounded cheats.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак trainer Grounded | Trainer controls ассист",
					description: "Хак trainer Grounded: undetected Trainer hack assist for Grounded. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак trainer Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Хак trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Хак trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Хак trainer Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. undetected Trainer hack assist for Grounded.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Grounded | Боксы и лут",
					description: "Хак ESP Grounded: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Хак ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Хак ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Хак ESP Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | Что это значит",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купить Grounded Cheats",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. unlock-all searches vs real ESP and Trainer tools.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@groundedcheats.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Grounded Cheats",
					description: "Политика конфиденциальности for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Политика конфиденциальности for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com для поддержки и юридических вопросов.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Grounded Cheats",
					description: "Политика возврата for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Политика возврата",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Политика возврата for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Contact email, order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com для поддержки и юридических вопросов.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Grounded Cheats",
					description: "Условия использования for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Условия использования",
					intro: "Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Условия использования for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Contact email, order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка. Тарифы $35/мес и $99 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats объединяет god mode trainer, free crafting и grounded trainer для Grounded на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com для поддержки и юридических вопросов.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Grounded hileleri",
					accentShort: "Grounded Cheats",
					subtitle: "Grounded Windows PC için ESP god mode, free crafting ve Trainer — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "Grounded PC için ESP, radar ve Trainer",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Grounded Cheats paketi Grounded Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Grounded Cheats alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Grounded için undetected ESP, god mode, radar ve Trainer —  checkout.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode ve Trainer",
					description: "Grounded için undetected hileler. ESP god mode, free crafting ve Trainer — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "Grounded Cheats — Undetected ESP, God mode ve Trainer",
					intro: "Grounded Windows PC undetected paketi: ESP god mode, radar ve Trainer — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Grounded Cheats galeri — ESP, Trainer ve god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Grounded Cheats",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. BR ve scav-run'da düşman squad okumak için ideal.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP god mode, radar ve Trainer tek lisans",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. player boxes, loot markers, and god mode overlays.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. trainer controls, FOV, and per-weapon Trainer profiles.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, trainer controls, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Özellikler.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Özellikler",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. ESP, trainer controls, radar controls.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $99 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Fiyatlar.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. $35 monthly or $99 lifetime licenses.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Kurulum.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Windows PC activation and first-launch setup.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description: "Güncellemeler: Easy Anti-Cheat patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Güncellemeler.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Easy Anti-Cheat patch status and rebuild notes.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. SSS.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Destek.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. order help and license support contact.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Easy Anti-Cheat Safe Status",
					description: "Undetected hileler: undetected maintenance after Easy Anti-Cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Undetected hileler.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. undetected maintenance after Easy Anti-Cheat patches.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. god mode ESP for players, loot, and distance.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | 2D Threat Overlay",
					description: "Free crafting: item spawner cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Free crafting",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. item spawner cues for flanks and rotations.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat bypass | Patch Maintenance",
					description: "Easy Anti-Cheat bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "Easy Anti-Cheat bypass",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Easy Anti-Cheat bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat bypass",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded Hileleri 2026 | Buyer Guide",
					description: "Grounded Hileleri 2026: 2026 Grounded cheats checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded Hileleri 2026",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded Hileleri 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Hileleri 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded Hileleri 2026",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. 2026 Grounded cheats checklist before checkout.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				hacks: {
					title: "Grounded Hileleri | ESP Trainer Guide",
					description: "Grounded Hileleri: the Grounded hacks pillar for ESP and Trainer. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded Hileleri",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded Hileleri.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded Hileleri",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Hileleri",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. the Grounded hacks pillar for ESP and Trainer.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Grounded Hile İndir | Instant Access",
					description: "Grounded Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded Hile İndir",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded Hile İndir.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Grounded Hile İndir",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Grounded Hile İndir",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. digital license download after payment.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded Mod Menü | In-Game Toggles",
					description: "Grounded Mod Menü: in-client ESP and trainer controls toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded Mod Menü",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded Mod Menü.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded Mod Menü",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Mod Menü",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. in-client ESP and trainer controls toggles.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. smooth trainer controls settings for Windows PC.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Grounded Hileleri | Buyer Checklist",
					description: "En İyi Grounded Hileleri: what to compare before buying Grounded cheats. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Grounded Hileleri",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. En İyi Grounded Hileleri.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "En İyi Grounded Hileleri",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Grounded Hileleri",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. what to compare before buying Grounded cheats.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded Trainer Hilesi | Soft Aim Assist",
					description: "Grounded Trainer Hilesi: undetected Trainer hack assist for Grounded. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded Trainer Hilesi",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded Trainer Hilesi.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded Trainer Hilesi",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Trainer Hilesi",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. undetected Trainer hack assist for Grounded.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP Hilesi | Boxes & Loot",
					description: "Grounded ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded ESP Hilesi",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded ESP Hilesi.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP Hilesi",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP Hilesi",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. ESP hack boxes, loot pins, and distance.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. unlock-all searches vs real ESP and Trainer tools.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@groundedcheats.com.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Grounded Cheats",
					description: "Gizlilik politikası for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Gizlilik politikası for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@groundedcheats.com.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Grounded Cheats",
					description: "İade politikası for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "İade politikası",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. İade politikası for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Contact email, order references, and basic site security data.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@groundedcheats.com.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Grounded Cheats",
					description: "Kullanım şartları for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Kullanım şartları for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Contact email, order references, and basic site security data.",
								"anında dijital teslimat. $35/ay ve $99 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats, Grounded için Windows PC üzerinde god mode trainer, free crafting ve grounded trainer sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@groundedcheats.com.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Grounded غير مكتشف",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode ورadar hack وTrainer لـ Grounded على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وTrainer لـ Grounded PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Grounded Cheats نشطة لـ Grounded على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Grounded Cheats",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وgod mode ورadar وTrainer غير مكتشف لـ Grounded — الدفع عبر .",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP وGod mode وTrainer",
					description: "غش Grounded undetected لـ Grounded على PC. ESP god mode ورadar hack وTrainer مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "Grounded Cheats — ESP وGod mode وTrainer غير مكتشف",
					intro: "حزمة undetected لـ Grounded على Windows PC: ESP god mode ورadar وTrainer مع صيانة Easy Anti-Cheat.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "معرض Grounded Cheats — ESP وTrainer وgod mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Grounded Cheats في 2026",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. مثالي لقراءة فرق العدو في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode ورadar وTrainer في ترخيص واحد",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Player Boxes & God mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. player boxes, loot markers, and god mode overlays.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Soft Aim Controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. trainer controls, FOV, and per-weapon Trainer profiles.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, trainer controls, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. الميزات.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "الميزات",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. ESP, trainer controls, radar controls.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $99 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. الأسعار.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. $35 monthly or $99 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. التثبيت.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Easy Anti-Cheat Maintenance Log",
					description: "التحديثات: Easy Anti-Cheat patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. التحديثات.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. الأسئلة.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. الدعم.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Easy Anti-Cheat Safe Status",
					description: "غش undetected: undetected maintenance after Easy Anti-Cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. غش undetected.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | ESP Visibility",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. god mode ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | 2D Threat Overlay",
					description: "Free crafting: item spawner cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Free crafting",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. item spawner cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Grounded 2026 | Buyer Guide",
					description: "غش Grounded 2026: 2026 Grounded cheats checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Grounded 2026",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. غش Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "غش Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "غش Grounded 2026",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. 2026 Grounded cheats checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Grounded | ESP Trainer Guide",
					description: "غش Grounded: the Grounded hacks pillar for ESP and Trainer. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. غش Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "غش Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. the Grounded hacks pillar for ESP and Trainer.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Grounded Cheats | Instant Access",
					description: "تحميل Grounded Cheats: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Grounded Cheats",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. تحميل Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "تحميل Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Grounded Cheats",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Grounded | In-Game Toggles",
					description: "قائمة مود Grounded: in-client ESP and trainer controls toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. قائمة مود Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "قائمة مود Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. in-client ESP and trainer controls toggles.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Smooth Aim Settings",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. smooth trainer controls settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Grounded | Buyer Checklist",
					description: "أفضل غش Grounded: what to compare before buying Grounded cheats. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. أفضل غش Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "أفضل غش Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. what to compare before buying Grounded cheats.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Trainer Grounded | Soft Aim Assist",
					description: "هاك Trainer Grounded: undetected Trainer hack assist for Grounded. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Trainer Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. هاك Trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "هاك Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "هاك Trainer Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. undetected Trainer hack assist for Grounded.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Grounded | Boxes & Loot",
					description: "هاك ESP Grounded: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. هاك ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "هاك ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "هاك ESP Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | What It Means",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "اشترِ Grounded Cheats",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. unlock-all searches vs real ESP and Trainer tools.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@groundedcheats.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Grounded Cheats",
					description: "سياسة الخصوصية for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. سياسة الخصوصية for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@groundedcheats.com للدعم والطلبات القانونية.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Grounded Cheats",
					description: "سياسة الاسترداد for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. سياسة الاسترداد for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Contact email, order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تصحيحات Easy Anti-Cheat.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@groundedcheats.com للدعم والطلبات القانونية.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Grounded Cheats",
					description: "شروط الاستخدام for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. شروط الاستخدام for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Contact email, order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري. خطط 25$/شهر و99$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Grounded Cheats يجمع god mode trainer وfree crafting وgrounded trainer لـ Grounded على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@groundedcheats.com للدعم والطلبات القانونية.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Groundedチート",
					accentShort: "Grounded Cheats",
					subtitle: "Grounded Windows PC向けESP god mode、free crafting、Trainer — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "Grounded PC向けESP・radar・Trainer",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Grounded CheatsパッケージはGrounded Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Grounded Cheats購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Grounded向けundetected ESP、god mode、radar、Trainer — で購入。",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP・God mode・Trainer",
					description: "Grounded向けundetectedチート。ESP god mode、free crafting、Trainer、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "Grounded Cheats — Undetected ESP・God mode・Trainer",
					intro: "Grounded Windows PC向けundetectedパッケージ：ESP god mode、radar、Trainer、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "Grounded cheats hero ESP trainer god mode",
					galleryTitle: "Grounded Cheatsギャラリー — ESP、Trainer、god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にGrounded Cheatsを選ぶ理由",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。BRとscav-runで敵スクワッドを読むのに最適。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP god mode、radar、Trainerが1ライセンス",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。player boxes, loot markers, and god mode overlays.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。trainer controls, FOV, and per-weapon Trainer profiles.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, trainer controls, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。機能.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "機能",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。ESP, trainer controls, radar controls.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $99 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。料金.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。$35 monthly or $99 lifetime licenses.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。セットアップ.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Windows PC activation and first-launch setup.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。更新.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Easy Anti-Cheat patch status and rebuild notes.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。サポート.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。order help and license support contact.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Easy Anti-Cheat Safe Status",
					description: "Undetectedチート: undetected maintenance after Easy Anti-Cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Undetectedチート.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。undetected maintenance after Easy Anti-Cheat patches.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。god mode ESP for players, loot, and distance.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: item spawner cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。item spawner cues for flanks and rotations.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded Cheats 2026 | Buyer Guide",
					description: "Grounded Cheats 2026: 2026 Grounded cheats checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded Cheats 2026",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded Cheats 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Cheats 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded Cheats 2026",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。2026 Grounded cheats checklist before checkout.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				hacks: {
					title: "Grounded Cheats | ESP Trainer Guide",
					description: "Grounded Cheats: the Grounded hacks pillar for ESP and Trainer. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded Cheats",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded Cheats.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Cheats",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。the Grounded hacks pillar for ESP and Trainer.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Grounded Cheat Download | Instant Access",
					description: "Grounded Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded Cheat Download",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded Cheat Download.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Grounded Cheat Download",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Grounded Cheat Download",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。digital license download after payment.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded Mod Menu | In-Game Toggles",
					description: "Grounded Mod Menu: in-client ESP and trainer controls toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded Mod Menu",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded Mod Menu.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded Mod Menu",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Mod Menu",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。in-client ESP and trainer controls toggles.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。smooth trainer controls settings for Windows PC.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Groundedチート | Buyer Checklist",
					description: "最強Groundedチート: what to compare before buying Grounded cheats. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Groundedチート",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。最強Groundedチート.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "最強Groundedチート",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Groundedチート",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。what to compare before buying Grounded cheats.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded Trainer Hack | Soft Aim Assist",
					description: "Grounded Trainer Hack: undetected Trainer hack assist for Grounded. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded Trainer Hack",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded Trainer Hack.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded Trainer Hack",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Trainer Hack",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。undetected Trainer hack assist for Grounded.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP Hack | Boxes & Loot",
					description: "Grounded ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded ESP Hack",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded ESP Hack.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP Hack",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP Hack",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。ESP hack boxes, loot pins, and distance.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheatsを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。unlock-all searches vs real ESP and Trainer tools.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@groundedcheats.com",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Grounded Cheats",
					description: "プライバシーポリシー for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。プライバシーポリシー for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Grounded Cheats",
					description: "返金ポリシー for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "返金ポリシー",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。返金ポリシー for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Contact email, order references, and basic site security data.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Grounded Cheats",
					description: "利用規約 for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "利用規約",
					intro: "Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。利用規約 for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Contact email, order references, and basic site security data.",
								"即時デジタル配信。$35/月と$99永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Grounded CheatsはGrounded向けWindows PC用god mode trainer、free crafting、grounded trainerパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Grounded 치트",
					accentShort: "Grounded Cheats",
					subtitle: "Grounded Windows PC용 ESP god mode, free crafting, Trainer — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "Grounded PC용 ESP, radar, Trainer",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Grounded Cheats 패키지는 Grounded Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Grounded Cheats 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Grounded용 undetected ESP, god mode, radar, Trainer —  결제.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode, Trainer",
					description: "Grounded undetected 치트. ESP god mode, free crafting, Trainer, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "Grounded Cheats — Undetected ESP, God mode, Trainer",
					intro: "Grounded Windows PC undetected 패키지: ESP god mode, radar, Trainer, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "Grounded cheats hero ESP trainer god mode",
					galleryTitle: "Grounded Cheats 갤러리 — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Grounded Cheats를 선택하는 이유",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. BR 및 scav-run에서 적 분대 읽기에 이상적.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP god mode, radar, Trainer 단일 라이선스",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. player boxes, loot markers, and god mode overlays.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. trainer controls, FOV, and per-weapon Trainer profiles.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, trainer controls, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 기능.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "기능",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. ESP, trainer controls, radar controls.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $99 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 가격.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. $35 monthly or $99 lifetime licenses.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 설치.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Windows PC activation and first-launch setup.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Easy Anti-Cheat Maintenance Log",
					description: "업데이트: Easy Anti-Cheat patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 업데이트.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Easy Anti-Cheat patch status and rebuild notes.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 지원.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. order help and license support contact.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Easy Anti-Cheat Safe Status",
					description: "Undetected 치트: undetected maintenance after Easy Anti-Cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Undetected 치트.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. undetected maintenance after Easy Anti-Cheat patches.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. god mode ESP for players, loot, and distance.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: item spawner cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. item spawner cues for flanks and rotations.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded Cheats 2026 | Buyer Guide",
					description: "Grounded Cheats 2026: 2026 Grounded cheats checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded Cheats 2026",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded Cheats 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Cheats 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded Cheats 2026",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 2026 Grounded cheats checklist before checkout.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				hacks: {
					title: "Grounded Cheats | ESP Trainer Guide",
					description: "Grounded Cheats: the Grounded hacks pillar for ESP and Trainer. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded Cheats",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded Cheats.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Cheats",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. the Grounded hacks pillar for ESP and Trainer.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Grounded Cheat Download | Instant Access",
					description: "Grounded Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded Cheat Download",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded Cheat Download.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Grounded Cheat Download",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Grounded Cheat Download",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. digital license download after payment.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded 모드 메뉴 | In-Game Toggles",
					description: "Grounded 모드 메뉴: in-client ESP and trainer controls toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded 모드 메뉴",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded 모드 메뉴.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded 모드 메뉴",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded 모드 메뉴",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. in-client ESP and trainer controls toggles.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. smooth trainer controls settings for Windows PC.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Grounded 치트 | Buyer Checklist",
					description: "최고의 Grounded 치트: what to compare before buying Grounded cheats. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Grounded 치트",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 최고의 Grounded 치트.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "최고의 Grounded 치트",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Grounded 치트",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. what to compare before buying Grounded cheats.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded 에임봇 핵 | Soft Aim Assist",
					description: "Grounded 에임봇 핵: undetected Trainer hack assist for Grounded. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded 에임봇 핵",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded 에임봇 핵.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded 에임봇 핵",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded 에임봇 핵",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. undetected Trainer hack assist for Grounded.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP 핵 | Boxes & Loot",
					description: "Grounded ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded ESP 핵",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded ESP 핵.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP 핵",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP 핵",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. unlock-all searches vs real ESP and Trainer tools.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@groundedcheats.com",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Grounded Cheats",
					description: "개인정보 처리방침 for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 개인정보 처리방침 for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Grounded Cheats",
					description: "환불 정책 for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "환불 정책",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 환불 정책 for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Contact email, order references, and basic site security data.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Grounded Cheats",
					description: "이용 약관 for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "이용 약관",
					intro: "Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. 이용 약관 for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Contact email, order references, and basic site security data.",
								"즉시 디지털 배송. $35/월 및 $99 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats는 Grounded Windows PC용 god mode trainer, free crafting, grounded trainer 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Grounded作弊",
					accentShort: "Grounded Cheats",
					subtitle: "适用于Grounded Windows PC的ESP god mode、free crafting和Trainer — 含Easy Anti-Cheat维护。",
					subtitleShort: "Grounded PC版ESP、radar与Trainer",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Grounded Cheats套餐已在Grounded Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Grounded Cheats 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Grounded undetected ESP、god mode、radar与Trainer — 通过结账。",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP、God mode、Trainer",
					description: "Grounded undetected作弊。ESP god mode、free crafting、Trainer、Easy Anti-Cheat维护。即时数字交付。",
					h1: "Grounded Cheats — Undetected ESP、God mode、Trainer",
					intro: "Grounded Windows PC undetected套餐：ESP god mode、radar、Trainer，含Easy Anti-Cheat维护。",
					imageAlt: "Grounded cheats hero ESP trainer god mode",
					galleryTitle: "Grounded Cheats图库 — ESP、Trainer、god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Grounded Cheats的原因",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。适合在BR和scav-run中读取敌方小队。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP god mode、radar、Trainer单一许可证",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。player boxes, loot markers, and god mode overlays.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。trainer controls, FOV, and per-weapon Trainer profiles.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, trainer controls, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。功能.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "功能",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。ESP, trainer controls, radar controls.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $99 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。价格.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。$35 monthly or $99 lifetime licenses.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。安装.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Windows PC activation and first-launch setup.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。更新.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Easy Anti-Cheat patch status and rebuild notes.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。常见问题.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。支持.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。order help and license support contact.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Easy Anti-Cheat Safe Status",
					description: "Undetected作弊: undetected maintenance after Easy Anti-Cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Undetected作弊.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。undetected maintenance after Easy Anti-Cheat patches.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。god mode ESP for players, loot, and distance.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: item spawner cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。item spawner cues for flanks and rotations.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. 即时数字交付. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded作弊 2026 | Buyer Guide",
					description: "Grounded作弊 2026: 2026 Grounded cheats checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded作弊 2026",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded作弊 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded作弊 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded作弊 2026",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。2026 Grounded cheats checklist before checkout.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				hacks: {
					title: "Grounded作弊 | ESP Trainer Guide",
					description: "Grounded作弊: the Grounded hacks pillar for ESP and Trainer. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded作弊",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded作弊.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded作弊",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded作弊",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。the Grounded hacks pillar for ESP and Trainer.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Grounded作弊下载 | Instant Access",
					description: "Grounded作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded作弊下载",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded作弊下载.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Grounded作弊下载",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Grounded作弊下载",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。digital license download after payment.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded修改菜单 | In-Game Toggles",
					description: "Grounded修改菜单: in-client ESP and trainer controls toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded修改菜单",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded修改菜单.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded修改菜单",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded修改菜单",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。in-client ESP and trainer controls toggles.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。smooth trainer controls settings for Windows PC.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Grounded作弊 | Buyer Checklist",
					description: "最佳Grounded作弊: what to compare before buying Grounded cheats. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Grounded作弊",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。最佳Grounded作弊.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "最佳Grounded作弊",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Grounded作弊",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。what to compare before buying Grounded cheats.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded自瞄外挂 | Soft Aim Assist",
					description: "Grounded自瞄外挂: undetected Trainer hack assist for Grounded. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded自瞄外挂",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded自瞄外挂.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded自瞄外挂",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded自瞄外挂",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。undetected Trainer hack assist for Grounded.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP外挂 | Boxes & Loot",
					description: "Grounded ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded ESP外挂",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded ESP外挂.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP外挂",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP外挂",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。ESP hack boxes, loot pins, and distance.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. 即时数字交付. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "购买 Grounded Cheats",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。unlock-all searches vs real ESP and Trainer tools.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
								"支持与法务：support@groundedcheats.com",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Grounded Cheats",
					description: "隐私政策 for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "隐私政策",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。隐私政策 for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Grounded Cheats",
					description: "退款政策 for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "退款政策",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。退款政策 for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Contact email, order references, and basic site security data.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Grounded Cheats",
					description: "使用条款 for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "使用条款",
					intro: "Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。使用条款 for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Contact email, order references, and basic site security data.",
								"即时数字交付。$35/月和$99终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats为GroundedWindows PC提供god mode trainer、free crafting和grounded trainer套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected Grounded cheats",
					accentShort: "Grounded Cheats",
					subtitle: "Grounded Windows PC के लिए ESP god mode, free crafting और Trainer — Easy Anti-Cheat maintenance शामिल।",
					subtitleShort: "Grounded PC के लिए ESP, radar और Trainer",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Grounded Cheats पैकेज Grounded Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Easy Anti-Cheat maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Grounded Cheats खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Grounded के लिए undetected ESP, god mode, radar और Trainer —  checkout।",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode और Trainer",
					description: "Grounded undetected cheats. ESP god mode, free crafting, Trainer, Easy Anti-Cheat maintenance. Instant digital delivery.",
					h1: "Grounded Cheats — Undetected ESP, God mode और Trainer",
					intro: "Grounded Windows PC undetected पैकेज: ESP god mode, radar, Trainer, Easy Anti-Cheat maintenance सहित.",
					imageAlt: "Grounded cheats hero ESP trainer god mode",
					galleryTitle: "Grounded Cheats gallery — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Grounded Cheats क्यों",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP god mode, radar, Trainer एक लाइसेंस में",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। player boxes, loot markers, and god mode overlays.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। trainer controls, FOV, and per-weapon Trainer profiles.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, trainer controls, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। ESP, trainer controls, radar controls.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $99 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। कीमत.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। $35 monthly or $99 lifetime licenses.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। सेटअप.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Windows PC activation and first-launch setup.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Easy Anti-Cheat Maintenance Log",
					description: "अपडेट: Easy Anti-Cheat patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। अपडेट.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Easy Anti-Cheat patch status and rebuild notes.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। सहायता.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। order help and license support contact.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Undetected cheats.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। undetected maintenance after Easy Anti-Cheat patches.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। god mode ESP for players, loot, and distance.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: item spawner cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। item spawner cues for flanks and rotations.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded Cheats 2026 | Buyer Guide",
					description: "Grounded Cheats 2026: 2026 Grounded cheats checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded Cheats 2026",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded Cheats 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Cheats 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded Cheats 2026",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। 2026 Grounded cheats checklist before checkout.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				hacks: {
					title: "Grounded Cheats | ESP Trainer Guide",
					description: "Grounded Cheats: the Grounded hacks pillar for ESP and Trainer. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded Cheats",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded Cheats.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Cheats",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। the Grounded hacks pillar for ESP and Trainer.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "Grounded Cheat Download | Instant Access",
					description: "Grounded Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded Cheat Download",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded Cheat Download.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Grounded Cheat Download",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Grounded Cheat Download",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। digital license download after payment.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded Mod Menu | In-Game Toggles",
					description: "Grounded Mod Menu: in-client ESP and trainer controls toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded Mod Menu",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded Mod Menu.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded Mod Menu",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Mod Menu",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। in-client ESP and trainer controls toggles.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। smooth trainer controls settings for Windows PC.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Grounded Cheats | Buyer Checklist",
					description: "सर्वश्रेष्ठ Grounded Cheats: what to compare before buying Grounded cheats. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Grounded Cheats",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। सर्वश्रेष्ठ Grounded Cheats.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "सर्वश्रेष्ठ Grounded Cheats",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Grounded Cheats",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। what to compare before buying Grounded cheats.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded Trainer Hack | Soft Aim Assist",
					description: "Grounded Trainer Hack: undetected Trainer hack assist for Grounded. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded Trainer Hack",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded Trainer Hack.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded Trainer Hack",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Trainer Hack",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। undetected Trainer hack assist for Grounded.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP Hack | Boxes & Loot",
					description: "Grounded ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded ESP Hack",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded ESP Hack.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP Hack",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP Hack",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Grounded Cheats खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। unlock-all searches vs real ESP and Trainer tools.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@groundedcheats.com",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Grounded Cheats",
					description: "गोपनीयता नीति for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। गोपनीयता नीति for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Grounded Cheats",
					description: "रिफंड नीति for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। रिफंड नीति for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Contact email, order references, and basic site security data.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Grounded Cheats",
					description: "उपयोग की शर्तें for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। उपयोग की शर्तें for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Contact email, order references, and basic site security data.",
								"तुरंत डिजिटल डिलीवरी। $35/माह और $99 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats Grounded के लिए Windows PC पर god mode trainer, free crafting और grounded trainer पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@groundedcheats.com",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Grounded undetected",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting, dan Trainer untuk Grounded di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, radar & Trainer untuk Grounded PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Grounded Cheats aktif untuk Grounded di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Grounded Cheats",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, god mode, radar, dan Trainer undetected untuk Grounded — secure checkout.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode & Trainer",
					description: "Cheat Grounded undetected untuk Grounded di PC. ESP god mode, free crafting, Trainer, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.",
					h1: "Grounded Cheats — Undetected ESP, God mode & Trainer",
					intro: "Paket undetected Grounded di Windows PC: ESP god mode, radar, Trainer dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Galeri Grounded Cheats — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Grounded Cheats di 2026",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Ideal membaca squad musuh di BR dan scav-run.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar, Trainer dalam satu lisensi",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Player Boxes & God mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. player boxes, loot markers, and god mode overlays.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Soft Aim Controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. trainer controls, FOV, and per-weapon Trainer profiles.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, trainer controls, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Fitur.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Fitur",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. ESP, trainer controls, radar controls.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $99 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Harga.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. $35 monthly or $99 lifetime licenses.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Setup.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Easy Anti-Cheat Maintenance Log",
					description: "Pembaruan: Easy Anti-Cheat patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Pembaruan.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Dukungan.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. order help and license support contact.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Cheat undetected.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | ESP Visibility",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. god mode ESP for players, loot, and distance.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | 2D Threat Overlay",
					description: "Free crafting: item spawner cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Free crafting",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. item spawner cues for flanks and rotations.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Grounded 2026 | Buyer Guide",
					description: "Cheat Grounded 2026: 2026 Grounded cheats checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Grounded 2026",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Cheat Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Cheat Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheat Grounded 2026",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. 2026 Grounded cheats checklist before checkout.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Grounded | ESP Trainer Guide",
					description: "Cheat Grounded: the Grounded hacks pillar for ESP and Trainer. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Cheat Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Cheat Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. the Grounded hacks pillar for ESP and Trainer.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Grounded | Instant Access",
					description: "Download Cheat Grounded: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Download Cheat Grounded.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Download Cheat Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. digital license download after payment.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Grounded | In-Game Toggles",
					description: "Menu mod Grounded: in-client ESP and trainer controls toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Menu mod Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Menu mod Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. in-client ESP and trainer controls toggles.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Smooth Aim Settings",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. smooth trainer controls settings for Windows PC.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Grounded terbaik | Buyer Checklist",
					description: "Cheat Grounded terbaik: what to compare before buying Grounded cheats. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Grounded terbaik",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Cheat Grounded terbaik.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Cheat Grounded terbaik",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Grounded terbaik",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. what to compare before buying Grounded cheats.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack trainer Grounded | Soft Aim Assist",
					description: "Hack trainer Grounded: undetected Trainer hack assist for Grounded. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack trainer Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Hack trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack trainer Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. undetected Trainer hack assist for Grounded.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Boxes & Loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | What It Means",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Beli Grounded Cheats",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. unlock-all searches vs real ESP and Trainer tools.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@groundedcheats.com untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Grounded Cheats",
					description: "Kebijakan privasi for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Kebijakan privasi for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com untuk dukungan dan legal.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Grounded Cheats",
					description: "Kebijakan refund for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Kebijakan refund for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Contact email, order references, and basic site security data.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com untuk dukungan dan legal.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Grounded Cheats",
					description: "Syarat penggunaan for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Syarat penggunaan for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Contact email, order references, and basic site security data.",
								"pengiriman digital instan. Paket $35/bulan dan $99 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats menyediakan god mode trainer, free crafting, dan grounded trainer untuk Grounded di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com untuk dukungan dan legal.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "Grounded cheats ไม่ถูกตรวจจับ",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting และ Trainer สำหรับ Grounded บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, radar และ Trainer สำหรับ Grounded PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Grounded Cheats พร้อมใช้งานสำหรับ Grounded บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Grounded Cheats",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, god mode, radar และ Trainer ไม่ถูกตรวจจับสำหรับ Grounded — ชำระผ่าน ",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode และ Trainer",
					description: "Cheat Grounded undetected สำหรับ Grounded บน PC. ESP god mode, free crafting, Trainer, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Grounded Cheats — Undetected ESP, God mode และ Trainer",
					intro: "แพ็ก undetected สำหรับ Grounded บน Windows PC: ESP god mode, radar, Trainer พร้อม Easy Anti-Cheat maintenance",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "แกลเลอรี Grounded Cheats — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Grounded Cheats ปี 2026",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP god mode, radar, Trainer ในใบอนุญาตเดียว",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC player boxes, loot markers, and god mode overlays.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC trainer controls, FOV, and per-weapon Trainer profiles.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, trainer controls, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ฟีเจอร์.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ESP, trainer controls, radar controls.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $99 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ราคา.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC $35 monthly or $99 lifetime licenses.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ติดตั้ง.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Easy Anti-Cheat Maintenance Log",
					description: "อัปเดต: Easy Anti-Cheat patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC อัปเดต.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Easy Anti-Cheat patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC สนับสนุน.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Cheats undetected.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC undetected maintenance after Easy Anti-Cheat patches.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC god mode ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: item spawner cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC item spawner cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded Cheats 2026 | Buyer Guide",
					description: "Grounded Cheats 2026: 2026 Grounded cheats checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Grounded Cheats 2026",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Grounded Cheats 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Cheats 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded Cheats 2026",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC 2026 Grounded cheats checklist before checkout.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Grounded Cheats | ESP Trainer Guide",
					description: "Grounded Cheats: the Grounded hacks pillar for ESP and Trainer. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Grounded Cheats",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Grounded Cheats.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Cheats",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC the Grounded hacks pillar for ESP and Trainer.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Grounded Cheats | Instant Access",
					description: "ดาวน์โหลด Grounded Cheats: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Grounded Cheats",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ดาวน์โหลด Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Grounded Cheats",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Grounded | In-Game Toggles",
					description: "เมนูมอด Grounded: in-client ESP and trainer controls toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Grounded",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC เมนูมอด Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "เมนูมอด Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Grounded",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC in-client ESP and trainer controls toggles.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC smooth trainer controls settings for Windows PC.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Grounded ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Grounded ที่ดีที่สุด: what to compare before buying Grounded cheats. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Grounded ที่ดีที่สุด",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Cheat Grounded ที่ดีที่สุด.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Cheat Grounded ที่ดีที่สุด",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Grounded ที่ดีที่สุด",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC what to compare before buying Grounded cheats.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Trainer Grounded | Soft Aim Assist",
					description: "Hack Trainer Grounded: undetected Trainer hack assist for Grounded. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Trainer Grounded",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Hack Trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack Trainer Grounded",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC undetected Trainer hack assist for Grounded.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Boxes & Loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "ซื้อ Grounded Cheats",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC unlock-all searches vs real ESP and Trainer tools.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@groundedcheats.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Grounded Cheats",
					description: "นโยบายความเป็นส่วนตัว for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC นโยบายความเป็นส่วนตัว for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com สำหรับการสนับสนุน",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Grounded Cheats",
					description: "นโยบายการคืนเงิน for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC นโยบายการคืนเงิน for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Contact email, order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com สำหรับการสนับสนุน",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Grounded Cheats",
					description: "ข้อกำหนดการใช้งาน for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC ข้อกำหนดการใช้งาน for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Contact email, order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที แพ็ก $35/เดือน และ $99 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats รวม god mode trainer, free crafting และ grounded trainer สำหรับ Grounded บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com สำหรับการสนับสนุน",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Grounded undetected",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting và Trainer cho Grounded trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, radar & Trainer cho Grounded PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Grounded Cheats đang hoạt động cho Grounded trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Grounded Cheats",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, god mode, radar và Trainer undetected cho Grounded — thanh toán qua .",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode & Trainer",
					description: "Cheat Grounded undetected cho Grounded trên PC. ESP god mode, free crafting, Trainer, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.",
					h1: "Grounded Cheats — Undetected ESP, God mode & Trainer",
					intro: "Gói undetected Grounded trên Windows PC: ESP god mode, radar, Trainer với bảo trì Easy Anti-Cheat.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Thư viện Grounded Cheats — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Grounded Cheats 2026",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Lý tưởng đọc squad địch trong BR và scav-run.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar, Trainer trong một giấy phép",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Player Boxes & God mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. player boxes, loot markers, and god mode overlays.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Soft Aim Controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. trainer controls, FOV, and per-weapon Trainer profiles.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, trainer controls, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Tính năng.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Tính năng",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. ESP, trainer controls, radar controls.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $99 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Giá.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. $35 monthly or $99 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Cài đặt.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Easy Anti-Cheat Maintenance Log",
					description: "Cập nhật: Easy Anti-Cheat patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Cập nhật.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Hỗ trợ.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Cheat undetected.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | ESP Visibility",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. god mode ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | 2D Threat Overlay",
					description: "Free crafting: item spawner cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Free crafting",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. item spawner cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Grounded 2026 | Buyer Guide",
					description: "Cheat Grounded 2026: 2026 Grounded cheats checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Grounded 2026",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Cheat Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Cheat Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheat Grounded 2026",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. 2026 Grounded cheats checklist before checkout.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Grounded | ESP Trainer Guide",
					description: "Cheat Grounded: the Grounded hacks pillar for ESP and Trainer. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Cheat Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Cheat Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. the Grounded hacks pillar for ESP and Trainer.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Grounded | Instant Access",
					description: "Tải Cheat Grounded: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Tải Cheat Grounded.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Tải Cheat Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Grounded | In-Game Toggles",
					description: "Mod menu Grounded: in-client ESP and trainer controls toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Mod menu Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Mod menu Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. in-client ESP and trainer controls toggles.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Smooth Aim Settings",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. smooth trainer controls settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Grounded tốt nhất | Buyer Checklist",
					description: "Cheat Grounded tốt nhất: what to compare before buying Grounded cheats. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Grounded tốt nhất",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Cheat Grounded tốt nhất.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Cheat Grounded tốt nhất",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Grounded tốt nhất",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. what to compare before buying Grounded cheats.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack trainer Grounded | Soft Aim Assist",
					description: "Hack trainer Grounded: undetected Trainer hack assist for Grounded. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack trainer Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Hack trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack trainer Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. undetected Trainer hack assist for Grounded.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Boxes & Loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | What It Means",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Mua Grounded Cheats",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. unlock-all searches vs real ESP and Trainer tools.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Grounded Cheats",
					description: "Chính sách bảo mật for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Chính sách bảo mật for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Grounded Cheats",
					description: "Chính sách hoàn tiền for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Chính sách hoàn tiền for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Contact email, order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Grounded Cheats",
					description: "Điều khoản sử dụng for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Điều khoản sử dụng for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Contact email, order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì. Gói $35/tháng và $99 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats cung cấp god mode trainer, free crafting và grounded trainer cho Grounded trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com cho hỗ trợ và pháp lý.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Grounded",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting і Trainer для Grounded на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar і Trainer для Grounded PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Grounded Cheats активний для Grounded на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Grounded Cheats",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, god mode, radar і Trainer для Grounded — оплата через .",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode і Trainer",
					description: "Undetected чіти Grounded для Grounded на PC. ESP god mode, free crafting, Trainer, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.",
					h1: "Grounded Cheats — Undetected ESP, God mode і Trainer",
					intro: "Undetected пакет для Grounded на Windows PC: ESP god mode, radar, Trainer з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Галерея Grounded Cheats — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Grounded Cheats у 2026",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Ідеально для читання ворожих загонів у BR і scav-run.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar і Trainer в одній ліцензії",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Player Boxes & God mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. player boxes, loot markers, and god mode overlays.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Soft Aim Controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, trainer controls, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Функції.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Функції",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. ESP, trainer controls, radar controls.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $99 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Ціни.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. $35 monthly or $99 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Встановлення.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Easy Anti-Cheat Maintenance Log",
					description: "Оновлення: Easy Anti-Cheat patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Оновлення.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Підтримка.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Easy Anti-Cheat Safe Status",
					description: "Undetected чіти: undetected maintenance after Easy Anti-Cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Undetected чіти.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | ESP Visibility",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. god mode ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | 2D Threat Overlay",
					description: "Free crafting: item spawner cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Free crafting",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. item spawner cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Grounded 2026 | Buyer Guide",
					description: "Чіти Grounded 2026: 2026 Grounded cheats checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Grounded 2026",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Чіти Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Чіти Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Чіти Grounded 2026",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. 2026 Grounded cheats checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Grounded | ESP Trainer Guide",
					description: "Чіти Grounded: the Grounded hacks pillar for ESP and Trainer. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Чіти Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Чіти Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. the Grounded hacks pillar for ESP and Trainer.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Grounded Cheats | Instant Access",
					description: "Завантаження Grounded Cheats: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Grounded Cheats",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Завантаження Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Завантаження Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Grounded Cheats",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Grounded | In-Game Toggles",
					description: "Мод-меню Grounded: in-client ESP and trainer controls toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Мод-меню Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Мод-меню Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. in-client ESP and trainer controls toggles.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Smooth Aim Settings",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. smooth trainer controls settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Grounded | Buyer Checklist",
					description: "Найкращі чіти Grounded: what to compare before buying Grounded cheats. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Найкращі чіти Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Найкращі чіти Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. what to compare before buying Grounded cheats.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак trainer Grounded | Soft Aim Assist",
					description: "Хак trainer Grounded: undetected Trainer hack assist for Grounded. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак trainer Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Хак trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Хак trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Хак trainer Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. undetected Trainer hack assist for Grounded.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Grounded | Boxes & Loot",
					description: "Хак ESP Grounded: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Хак ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Хак ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Хак ESP Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | What It Means",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Купити Grounded Cheats",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. unlock-all searches vs real ESP and Trainer tools.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@groundedcheats.com для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Grounded Cheats",
					description: "Політика конфіденційності for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Політика конфіденційності for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com для підтримки та правових питань.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Grounded Cheats",
					description: "Політика повернення for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Політика повернення",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Політика повернення for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Contact email, order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com для підтримки та правових питань.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Grounded Cheats",
					description: "Умови використання for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Умови використання",
					intro: "Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Умови використання for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Contact email, order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка. Тарифи $35/міс і $99 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats об'єднує god mode trainer, free crafting і grounded trainer для Grounded на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com для підтримки та правових питань.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Grounded cheaty",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting a Trainer pro Grounded na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, radar a Trainer pro Grounded PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Grounded Cheats je aktivní pro Grounded na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Grounded Cheats",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, god mode, radar a Trainer pro Grounded — checkout přes .",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode a Trainer",
					description: "Undetected Grounded cheaty pro Grounded na PC. ESP god mode, free crafting, Trainer, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "Grounded Cheats — Undetected ESP, God mode a Trainer",
					intro: "Undetected balíček pro Grounded na Windows PC: ESP god mode, radar, Trainer s údržbou Easy Anti-Cheat.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Galerie Grounded Cheats — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Grounded Cheats v roce 2026",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Ideální pro čtení nepřátelských squadů v BR a scav-run.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar a Trainer v jedné licenci",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. player boxes, loot markers, and god mode overlays.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, trainer controls, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Funkce.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Funkce",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. ESP, trainer controls, radar controls.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $99 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Ceny.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. $35 monthly or $99 lifetime licenses.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Instalace.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizace: Easy Anti-Cheat patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Aktualizace.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Podpora.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Easy Anti-Cheat Safe Status",
					description: "Undetected cheaty: undetected maintenance after Easy Anti-Cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Undetected cheaty.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. god mode ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: item spawner cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. item spawner cues for flanks and rotations.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded cheaty 2026 | Buyer Guide",
					description: "Grounded cheaty 2026: 2026 Grounded cheats checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded cheaty 2026",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded cheaty 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded cheaty 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded cheaty 2026",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. 2026 Grounded cheats checklist before checkout.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Grounded cheaty | ESP Trainer Guide",
					description: "Grounded cheaty: the Grounded hacks pillar for ESP and Trainer. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded cheaty",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded cheaty.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded cheaty",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded cheaty",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. the Grounded hacks pillar for ESP and Trainer.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Grounded Cheats | Instant Access",
					description: "Stáhnout Grounded Cheats: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Grounded Cheats",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Stáhnout Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Stáhnout Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Grounded Cheats",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded mod menu | In-Game Toggles",
					description: "Grounded mod menu: in-client ESP and trainer controls toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded mod menu",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded mod menu.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded mod menu",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded mod menu",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. in-client ESP and trainer controls toggles.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. smooth trainer controls settings for Windows PC.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Grounded cheaty | Buyer Checklist",
					description: "Nejlepší Grounded cheaty: what to compare before buying Grounded cheats. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Grounded cheaty",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Nejlepší Grounded cheaty.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Nejlepší Grounded cheaty",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Grounded cheaty",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. what to compare before buying Grounded cheats.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded trainer hack | Soft Aim Assist",
					description: "Grounded trainer hack: undetected Trainer hack assist for Grounded. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded trainer hack",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded trainer hack.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded trainer hack",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded trainer hack",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. undetected Trainer hack assist for Grounded.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP hack | Boxes & Loot",
					description: "Grounded ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded ESP hack",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded ESP hack.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP hack",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP hack",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Koupit Grounded Cheats",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. unlock-all searches vs real ESP and Trainer tools.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
								"support@groundedcheats.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Grounded Cheats",
					description: "Zásady ochrany soukromí for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Zásady ochrany soukromí for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com pro podporu a právní dotazy.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Grounded Cheats",
					description: "Zásady vrácení peněz for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Zásady vrácení peněz for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Contact email, order references, and basic site security data.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com pro podporu a právní dotazy.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Grounded Cheats",
					description: "Podmínky použití for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Podmínky použití",
					intro: "Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Podmínky použití for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Contact email, order references, and basic site security data.",
								"Licence s okamžité digitální doručení. Plány $35/měs. a $99 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats spojuje god mode trainer, free crafting a grounded trainer pro Grounded na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com pro podporu a právní dotazy.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Grounded undetected",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting și Trainer pentru Grounded pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, radar și Trainer pentru Grounded PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Grounded Cheats este activ pentru Grounded pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Grounded Cheats",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, god mode, radar și Trainer undetected pentru Grounded — secure checkout.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode și Trainer",
					description: "Cheats Grounded undetected pentru Grounded pe PC. ESP god mode, free crafting, Trainer, mentenanță Easy Anti-Cheat. Livrare digitală instantă.",
					h1: "Grounded Cheats — Undetected ESP, God mode și Trainer",
					intro: "Pachet undetected Grounded pe Windows PC: ESP god mode, radar, Trainer cu mentenanță Easy Anti-Cheat.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Galerie Grounded Cheats — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Grounded Cheats în 2026",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și scav-run.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP god mode, radar și Trainer într-o licență",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "ESP Grounded | Player Boxes & God mode",
					description: "ESP Grounded: player boxes, loot markers, and god mode overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. ESP Grounded.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "ESP Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "ESP Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. player boxes, loot markers, and god mode overlays.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Trainer Grounded | Soft Aim Controls",
					description: "Trainer Grounded: trainer controls, FOV, and per-weapon Trainer profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Trainer Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Trainer Grounded.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Trainer Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, trainer controls, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Funcții.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Funcții",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. ESP, trainer controls, radar controls.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $99 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Prețuri.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. $35 monthly or $99 lifetime licenses.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Instalare.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Easy Anti-Cheat Maintenance Log",
					description: "Actualizări: Easy Anti-Cheat patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Actualizări.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Suport.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Cheats undetected.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "God mode Grounded | ESP Visibility",
					description: "God mode Grounded: god mode ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "God mode Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. God mode Grounded.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "God mode Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "God mode Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. god mode ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Free crafting | 2D Threat Overlay",
					description: "Free crafting: item spawner cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Free crafting",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Free crafting.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Free crafting",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Free crafting",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. item spawner cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Grounded hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Grounded 2026 | Buyer Guide",
					description: "Cheats Grounded 2026: 2026 Grounded cheats checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Grounded 2026",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Cheats Grounded 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Cheats Grounded 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Cheats Grounded 2026",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. 2026 Grounded cheats checklist before checkout.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Grounded | ESP Trainer Guide",
					description: "Cheats Grounded: the Grounded hacks pillar for ESP and Trainer. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Cheats Grounded.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Cheats Grounded",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. the Grounded hacks pillar for ESP and Trainer.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Grounded Cheats | Instant Access",
					description: "Descărcare Grounded Cheats: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Grounded Cheats",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Descărcare Grounded Cheats.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Descărcare Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Grounded Cheats",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Grounded | In-Game Toggles",
					description: "Meniu mod Grounded: in-client ESP and trainer controls toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Meniu mod Grounded.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Meniu mod Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. in-client ESP and trainer controls toggles.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Trainer controls Grounded | Smooth Aim Settings",
					description: "Trainer controls Grounded: smooth trainer controls settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Trainer controls Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Trainer controls Grounded.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Trainer controls Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Trainer controls Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. smooth trainer controls settings for Windows PC.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Grounded | Buyer Checklist",
					description: "Cele mai bune cheats Grounded: what to compare before buying Grounded cheats. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Cele mai bune cheats Grounded.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Cele mai bune cheats Grounded",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. what to compare before buying Grounded cheats.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack trainer Grounded | Soft Aim Assist",
					description: "Hack trainer Grounded: undetected Trainer hack assist for Grounded. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack trainer Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Hack trainer Grounded.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Hack trainer Grounded",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Hack trainer Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. undetected Trainer hack assist for Grounded.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Grounded | Boxes & Loot",
					description: "Hack ESP Grounded: ESP hack boxes, loot pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Hack ESP Grounded.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Hack ESP Grounded",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Hack ESP Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Grounded | What It Means",
					description: "Unlock all Grounded: unlock-all searches vs real ESP and Trainer tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Grounded",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Unlock all Grounded.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Unlock all Grounded",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Cumpără Grounded Cheats",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Grounded",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. unlock-all searches vs real ESP and Trainer tools.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@groundedcheats.com pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Grounded Cheats",
					description: "Politica de confidențialitate for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Politica de confidențialitate for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com pentru suport și legal.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Grounded Cheats",
					description: "Politica de rambursare for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Politica de rambursare for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Contact email, order references, and basic site security data.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com pentru suport și legal.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Grounded Cheats",
					description: "Termeni de utilizare for Grounded Cheats — ESP god mode, Trainer, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Termeni de utilizare for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Contact email, order references, and basic site security data.",
								"Licențe cu livrare digitală instantă. Planuri $35/lună și $99 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats combină god mode trainer, free crafting și grounded trainer pentru Grounded pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com pentru suport și legal.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					trainer: "Trainer",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected Grounded cheats",
					accentShort: "Grounded Cheats",
					subtitle: "ESP god mode, free crafting och Trainer för Grounded på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Trainer för Grounded PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Grounded Cheats-paketet är live för Grounded på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "Grounded Cheats",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Grounded",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Grounded Cheats-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, god mode, radar och Trainer för Grounded — secure checkout.",
				},
				images: {
					hero: "Grounded Cheats hero — ESP and trainer overlay in Grounded",
					espWallhack: "God mode outlines showing players and insects through walls",
					aimbotCombat: "Trainer controls assist overlay during an Grounded session",
					squadFight: "Grounded Cheats combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Grounded session",
					headerArt: "Trainer view and bone priority controls for Grounded",
					cheatsPackage: "item spawner threat overlay for Grounded",
					rebootFight: "Trainer assist during a Grounded firefight",
					battleRoyale: "Grounded Cheats in-session overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base camps in Grounded",
				},
			},
			pages: {
				home: {
					title: "Grounded Cheats 2026 | ESP, God mode & Trainer",
					description: "Undetected Grounded cheats för Grounded på PC. ESP god mode, free crafting, Trainer, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "Grounded Cheats — Undetected ESP, God mode & Trainer",
					intro: "Undetected paket för Grounded på Windows PC: ESP god mode, radar, Trainer med Easy Anti-Cheat-underhåll.",
					imageAlt: "Grounded ESP player tags hack",
					galleryTitle: "Grounded Cheats galleri — ESP, Trainer, god mode",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Grounded Cheats 2026",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Ideal för att läsa fiendesquads i BR och scav-run.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP god mode, radar och Trainer i en licens",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
							],
						},
					],
				},
				"grounded-god-mode": {
					title: "Grounded ESP | Player Boxes & God mode",
					description: "Grounded ESP: player boxes, loot markers, and god mode overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded ESP",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded ESP.",
					imageAlt: "Grounded god mode infinite health in backyard combat",
					galleryTitle: "Grounded ESP",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded ESP",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. player boxes, loot markers, and god mode overlays.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"grounded-trainer": {
					title: "Grounded Trainer | Soft Aim Controls",
					description: "Grounded Trainer: trainer controls, FOV, and per-weapon Trainer profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded Trainer",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded Trainer.",
					imageAlt: "Grounded trainer download and mod menu on Windows PC",
					galleryTitle: "Grounded Trainer",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded Trainer",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. trainer controls, FOV, and per-weapon Trainer profiles.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, trainer controls, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Funktioner.",
					imageAlt: "Grounded Cheats features — god mode, free crafting, and mod menu",
					galleryTitle: "Funktioner",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. ESP, trainer controls, radar controls.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $99 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Priser.",
					imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. $35 monthly or $99 lifetime licenses.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Installation.",
					imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description: "Uppdateringar: Easy Anti-Cheat patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Uppdateringar.",
					imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, trainer controls, delivery, and Easy Anti-Cheat questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. FAQ.",
					imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. ESP, trainer controls, delivery, and Easy Anti-Cheat questions.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Support.",
					imageAlt: "Grounded Cheats support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Undetected cheats.",
					imageAlt: "Grounded Cheats trainer status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Grounded God mode | ESP Visibility",
					description: "Grounded God mode: god mode ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded God mode",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded God mode.",
					imageAlt: "Grounded cheat engine god mode in backyard survival",
					galleryTitle: "Grounded God mode",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded God mode",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. god mode ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: item spawner cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Radar Hack.",
					imageAlt: "Grounded free crafting and unlimited items trainer menu",
					galleryTitle: "Radar Hack",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. item spawner cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"anti-cheat": {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Grounded hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Grounded Cheats maintenance after an Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. how Easy Anti-Cheat updates are handled for Grounded hacks.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Grounded Cheats 2026 | Buyer Guide",
					description: "Grounded Cheats 2026: 2026 Grounded cheats checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded Cheats 2026",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded Cheats 2026.",
					imageAlt: "Grounded Cheats product overview for Grounded",
					galleryTitle: "Grounded Cheats 2026",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-cheats/",
					sections: [
						{
							h2: "Grounded Cheats 2026",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. 2026 Grounded cheats checklist before checkout.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Grounded Cheats | ESP Trainer Guide",
					description: "Grounded Cheats: the Grounded hacks pillar for ESP and Trainer. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded Cheats",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded Cheats.",
					imageAlt: "Grounded Cheats product page — god mode, trainer, and mod menu",
					galleryTitle: "Grounded Cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Cheats",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. the Grounded hacks pillar for ESP and Trainer.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Grounded Cheat Download | Instant Access",
					description: "Grounded Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded Cheat Download",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded Cheat Download.",
					imageAlt: "Grounded trainer download and install delivery flow",
					galleryTitle: "Grounded Cheat Download",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Grounded Cheat Download",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Grounded Mod-meny | In-Game Toggles",
					description: "Grounded Mod-meny: in-client ESP and trainer controls toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded Mod-meny",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded Mod-meny.",
					imageAlt: "Grounded mod menu in-game trainer controls",
					galleryTitle: "Grounded Mod-meny",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Mod-meny",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. in-client ESP and trainer controls toggles.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Grounded Soft Aim | Smooth Aim Settings",
					description: "Grounded Soft Aim: smooth trainer controls settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded Soft Aim",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded Soft Aim.",
					imageAlt: "Grounded infinite health and god mode settings",
					galleryTitle: "Grounded Soft Aim",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Soft Aim",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. smooth trainer controls settings for Windows PC.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Grounded Cheats | Buyer Checklist",
					description: "Bästa Grounded Cheats: what to compare before buying Grounded cheats. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Grounded Cheats",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Bästa Grounded Cheats.",
					imageAlt: "Grounded Cheats overview for Grounded on PC",
					galleryTitle: "Bästa Grounded Cheats",
					heroImage: "/images/grounded-cheats-esp.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Grounded Cheats",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. what to compare before buying Grounded cheats.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Grounded Trainer Hack | Soft Aim Assist",
					description: "Grounded Trainer Hack: undetected Trainer hack assist for Grounded. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded Trainer Hack",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded Trainer Hack.",
					imageAlt: "Grounded super damage and one hit kills trainer",
					galleryTitle: "Grounded Trainer Hack",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-trainer/",
					sections: [
						{
							h2: "Grounded Trainer Hack",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. undetected Trainer hack assist for Grounded.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Grounded ESP Hack | Boxes & Loot",
					description: "Grounded ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded ESP Hack",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded ESP Hack.",
					imageAlt: "Grounded noclip and fly mode trainer controls",
					galleryTitle: "Grounded ESP Hack",
					heroImage: "/images/grounded-cheats-wallhack.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/grounded-god-mode/",
					sections: [
						{
							h2: "Grounded ESP Hack",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Grounded Unlock All | What It Means",
					description: "Grounded Unlock All: unlock-all searches vs real ESP and Trainer tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Grounded Unlock All",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Grounded Unlock All.",
					imageAlt: "Grounded unlock all recipes trainer feature",
					galleryTitle: "Grounded Unlock All",
					heroImage: "/images/grounded-cheats-radar.webp",
					ctaPrimary: "Köp Grounded Cheats",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Grounded Unlock All",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. unlock-all searches vs real ESP and Trainer tools.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@groundedcheats.com för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Grounded Cheats",
					description: "Integritetspolicy for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Integritetspolicy for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Contact email, order references, and basic site security data.",
								"Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@groundedcheats.com för support och juridik.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Grounded Cheats",
					description: "Återbetalningspolicy for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Återbetalningspolicy for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Contact email, order references, and basic site security data.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@groundedcheats.com för support och juridik.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Grounded Cheats",
					description: "Användarvillkor for Grounded Cheats — ESP god mode, Trainer, Windows PC.",
					h1: "Användarvillkor",
					intro: "Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Användarvillkor for groundedcheats.com and Grounded licenses.",
					imageAlt: "grounded cheats",
					galleryTitle: "grounded cheats",
					heroImage: "/images/grounded-cheats-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Contact email, order references, and basic site security data.",
								"Licenser med omedelbar digital leverans. $35/mån och $99 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Grounded Cheats kombinerar god mode trainer, free crafting och grounded trainer för Grounded på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@groundedcheats.com för support och juridik.",
								"Email: support@groundedcheats.com",
							],
						},
					],
				},
			},
		},
	};
