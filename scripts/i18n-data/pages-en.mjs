import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'Grounded Cheats 2026 | Undetected ESP, Trainer & God mode',
		description:
			'Grounded cheats for Windows PC — ESP, trainer controls, radar, and Easy Anti-Cheat updates. Compare plans and buy.',
		h1: 'Grounded Cheats — Undetected ESP, God mode & Trainer',
		intro:
			'Grounded Cheats is the undetected grounded cheats package for Windows PC — built for Grounded on Windows PC. Grounded esp god mode, item spawner, and grounded trainer with Easy Anti-Cheat maintenance after every major patch.',
		imageAlt: "Grounded Cheats homepage hero — ESP and trainer for Grounded",
		galleryTitle: 'Grounded Cheats gallery — ESP, Trainer and god mode visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose Grounded cheats in 2026',
				'Grounded rewards map awareness. Grounded Cheats combines ESP god mode for enemy players and loot, radar-style threat cues, and configurable Trainer so you can read fights before committing — on session, scav-run, and competitive lobbies.',
				`Official seasons, patches, and anti-cheat updates come from ${EXT.grounded} and ${EXT.antiCheat}. We rebuild ESP, radar, and Trainer modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($99) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/grounded-cheats/">Grounded cheats pillar</a>, <a href="/grounded-god-mode/">ESP guide</a>, <a href="/grounded-trainer/">Trainer controls</a>, and <a href="/grounded-cheats/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'ESP god mode, free crafting, and Trainer in one license',
				'Instead of stacking separate tools, Grounded Cheats bundles player ESP god mode, loot markers, item spawner overlays, and Trainer profiles in one undetected package built for survival sessions and scav-runs — covering both “grounded cheats” and “escape from grounded cheats” search intent.',
				'Browse the <a href="/grounded-god-mode/">ESP</a>, <a href="/grounded-trainer/">Trainer</a>, <a href="/grounded-god-mode/">god mode</a>, and <a href="/grounded-free-crafting/">radar</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Obsidian Entertainment service health, then confirm our maintenance notes so you are not queueing on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'grounded-god-mode': {
		title: 'Grounded ESP 2026 | Player Boxes & God mode',
		description:
			'Grounded ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected grounded cheats for Grounded.',
		h1: 'Grounded ESP — Player Boxes & God mode',
		intro:
			'Grounded esp visibility tools for session and scav-run. Read enemy squads, players, insects, loot, and distance before you commit — toggleable grounded god mode god mode overlays bundled in our grounded cheats package.',
		imageAlt: "Grounded ESP player boxes and distance readouts in a session",
		galleryTitle: 'Grounded ESP overlay visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Grounded god mode guide',
		ctaSecondaryHref: '/grounded-god-mode/',
		sections: [
			section(
				'What Grounded ESP solves in sessions',
				'Grounded maps punish incomplete information. Grounded Cheats ESP god mode helps you spot enemy squads early, spot players and insects before they push your angle, and mark high-value loot worth the detour.',
				'On session, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Trainer in one license.',
				`Grounded’s live seasons and map updates are published by Obsidian Entertainment (${EXT.grounded}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP god mode categories',
				'Toggle enemy player outlines, boss markers, base camp cues, and loot pins so only session-critical ESP god mode overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports survival sessions and scav-runs lobbies alike.',
				'Compare category detail on the <a href="/grounded-god-mode/">god mode page</a> and pair visibility with the <a href="/grounded-free-crafting/">free crafting</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and base camp awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with Easy Anti-Cheat maintenance',
				'Grounded Cheats ESP god mode is maintained for Grounded with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.antiCheat} for how anti-cheat updates ship, then cross-check our <a href="/updates/">Easy Anti-Cheat bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first session.',
			),
			section(
				'ESP next steps — Trainer, pricing, and support',
				'ESP alone wins information wars; Trainer covers the firefight. Review <a href="/grounded-trainer/">Trainer controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($99) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/grounded-cheats/">Grounded cheats pillar</a> and <a href="/grounded-cheats/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'grounded-trainer': {
		title: 'Grounded Trainer 2026 | Soft Aim for Windows PC',
		description:
			'Grounded trainer with trainer controls tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our grounded cheats package.',
		h1: 'Grounded Trainer — Soft Aim for Windows PC',
		intro:
			'Configurable Trainer tools for Grounded firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP god mode and radar in one undetected license.',
		imageAlt: "Grounded trainer and trainer controls controls on Windows PC",
		galleryTitle: 'Grounded Trainer combat previews',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'See ESP god mode',
		ctaSecondaryHref: '/grounded-god-mode/',
		sections: [
			section(
				'Trainer tuned for Grounded combat pace',
				'Grounded mixes long-range AR fights with close-quarters SMG pushes. Grounded Cheats Trainer includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.grounded}. Revisit Trainer FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Trainer profiles',
				'Save separate Trainer profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every session.',
				'Prefer softer tracking? Read the <a href="/grounded-trainer/">trainer controls guide</a>.',
				'Trainer ships alongside <a href="/grounded-god-mode/">ESP god mode</a> and <a href="/grounded-free-crafting/">item spawner</a> in the same Grounded Cheats license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Trainer mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'Easy Anti-Cheat maintenance for undetected Trainer',
				'Grounded Cheats rebuilds Trainer behavior when Easy Anti-Cheat or major Grounded patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.antiCheat}, then follow our <a href="/updates/">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Trainer with ESP — pricing and setup',
				'Every plan includes Trainer plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'Grounded Cheats Features | ESP, Soft Aim & Radar',
		description:
			'Full grounded cheats feature list: ESP boxes, trainer controls, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'Grounded Cheats Features — Full Control List',
		intro:
			'Every ESP god mode, free crafting, and Trainer control included in the Grounded Cheats package for Grounded on Windows PC — with Easy Anti-Cheat maintenance after major patches.',
		imageAlt: "Grounded Cheats features — ESP, trainer controls, and radar screenshots",
		galleryTitle: 'Grounded Cheats feature gallery',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP god mode and visibility features',
				'Enemy player ESP god mode, boss and base camp awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for session-critical overlays only.',
				'Team and enemy colour coding supports survival sessions and scav-runs. Deep-dive the <a href="/grounded-god-mode/">ESP page</a> and <a href="/grounded-god-mode/">god mode guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.grounded} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Free crafting and Trainer controls',
				'item spawner overlay with directional threat cues, configurable range for rotations and late-session base camps, plus Trainer smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Trainer during live Grounded sessions. See <a href="/grounded-free-crafting/">radar</a> and <a href="/grounded-trainer/">Trainer</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/grounded-cheats/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and Easy Anti-Cheat maintenance',
				'Monthly ($35) and lifetime ($99) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@groundedcheats.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/grounded-cheats/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'Grounded Cheats Pricing | $35/mo or $99 Life',
		description:
			'Grounded cheats pricing: $35/month or $99 lifetime for ESP, trainer controls, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'Grounded Cheats Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected Grounded Cheats — ESP god mode, free crafting, and Trainer for Grounded on Windows PC. Instant digital delivery after payment.',
		imageAlt: "Grounded Cheats store plans for monthly and lifetime licenses",
		galleryTitle: 'Grounded Cheats package visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime Grounded Cheats plans',
				'Monthly license: $35 USD for 30 days of full ESP god mode, free crafting, and Trainer access with Easy Anti-Cheat maintenance included during your term.',
				'Lifetime license: $99 USD for long-term access to the same undetected Grounded Cheats package — ideal if you play Grounded regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP god mode, loot markers, item spawner overlays, Trainer controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Grounded patches.',
				`Season calendars and client updates come from ${EXT.grounded}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/grounded-cheats/">Grounded cheats</a>, <a href="/grounded-cheats/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'Grounded Cheats Setup | Windows PC Guide',
		description:
			'Set up grounded cheats on Windows PC — activate ESP boxes, trainer controls profiles, and . Check Easy Anti-Cheat updates before your first queue.',
		h1: 'Grounded Cheats Setup — Windows PC Guide',
		intro:
			'Install and configure Grounded Cheats for Grounded on Windows 10 or 11. Activate your license, load ESP god mode and Trainer profiles, and verify Easy Anti-Cheat maintenance status before queueing.',
		imageAlt: "Grounded Cheats setup guide screenshot for Windows PC",
		galleryTitle: 'Grounded Cheats setup visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install Grounded Cheats',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Grounded.',
				`Also glance at ${EXT.status} if Obsidian Entertainment services look unstable on patch day — a platform outage is not a license fault.`,
				'Grounded Cheats requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP god mode or Trainer toggles.',
			),
			section(
				'Activate ESP god mode and Trainer profiles',
				'Follow the delivery instructions in your license email. Load default ESP god mode categories for players, insects, and loot — then tune radar range and Trainer smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Trainer mid-match. Details for Easy Anti-Cheat module live on <a href="/grounded-god-mode/">ESP</a>, <a href="/grounded-trainer/">Trainer</a>, and <a href="/grounded-cheats/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/grounded-trainer/">trainer controls</a> recommendations before raising aggressiveness.',
			),
			section(
				'After Grounded or Easy Anti-Cheat patches',
				'When Obsidian Entertainment ships a major Grounded update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.antiCheat}. Our practical workflow is documented on the <a href="/updates/">Easy Anti-Cheat bypass page</a> and <a href="/grounded-cheats/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'Grounded Cheats Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'Grounded cheats update log: Easy Anti-Cheat rebuilds for ESP boxes, trainer controls, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'Grounded Cheats Updates — Maintenance Log',
		intro:
			'Track Easy Anti-Cheat maintenance and Grounded patch rebuilds for the undetected ESP god mode, free crafting, and Trainer package. Check here before queueing after major updates.',
		imageAlt: "Grounded Cheats live status after Easy Anti-Cheat and game patches",
		galleryTitle: 'Grounded patch and maintenance visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/grounded-cheats/',
		sections: [
			section(
				'Why the Updates page matters',
				'Grounded and Easy Anti-Cheat receive frequent patches. Grounded Cheats publishes maintenance notes when ESP god mode, radar, or Trainer behavior needs a rebuild.',
				`Use ${EXT.status} for Obsidian Entertainment platform health and this page for Grounded Cheats build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on session and scav-run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP god mode overlays, radar range fixes, Trainer tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">Easy Anti-Cheat bypass guide</a> and <a href="/grounded-cheats/">undetected Grounded cheats</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.grounded}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a Easy Anti-Cheat update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'Grounded Cheats FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'Grounded cheats FAQ: ESP boxes, trainer controls, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'Grounded Cheats FAQ — Common Questions',
		intro:
			'Answers about undetected Grounded Cheats — ESP god mode, free crafting, Trainer, Easy Anti-Cheat maintenance, checkout, and Grounded compatibility on Windows PC.',
		imageAlt: "Grounded Cheats FAQ — delivery, setup, and update answers",
		galleryTitle: 'Grounded Cheats FAQ visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is Grounded Cheats?',
				'Grounded Cheats is an undetected cheat package for Grounded on Windows PC. It includes ESP god mode, item spawner-style awareness, and Trainer controls with Easy Anti-Cheat maintenance updates.',
				'Packages cover session and scav-run. Explore <a href="/features/">Features</a> for the full control list and <a href="/grounded-god-mode/">ESP</a> / <a href="/grounded-trainer/">Trainer</a> for module detail.',
				`Grounded itself is published by Obsidian Entertainment (${EXT.grounded}). Cheats are third-party tools and may violate Obsidian Entertainment' rules — use is at your own risk.`,
			),
			section(
				'Are Grounded Cheats undetected in 2026?',
				'Grounded Cheats is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/grounded-cheats/">undetected Grounded cheats</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $99 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@groundedcheats.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'Grounded Cheats Support | Help & Contact',
		description:
			'Contact grounded cheats support for licenses, ESP setup, trainer controls profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'Grounded Cheats Support — Contact Us',
		intro:
			'Get help with Grounded Cheats licenses, checkout, ESP god mode setup, Trainer profiles, and Easy Anti-Cheat maintenance for Grounded on Windows PC.',
		imageAlt: "Grounded Cheats support page for license and setup help",
		galleryTitle: 'Grounded Cheats support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP god mode or Trainer setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. Grounded Cheats support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Obsidian Entertainment bans.',
				`Account and game policy questions belong with Obsidian Entertainment. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@groundedcheats.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected Grounded Cheats 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected grounded cheats with Easy Anti-Cheat maintenance for ESP boxes, trainer controls, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected Grounded Cheats — Easy Anti-Cheat Maintenance',
		intro:
			'How Grounded Cheats stays maintained for Grounded after Easy Anti-Cheat patches — ESP god mode, free crafting, and Trainer rebuilds for Windows PC.',
		imageAlt: "Grounded Cheats undetected status overview for Windows PC",
		galleryTitle: 'Undetected Grounded Cheats visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Easy Anti-Cheat bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for Grounded Cheats',
				'Undetected Grounded Cheats means the package is actively maintained against Easy Anti-Cheat and major Grounded patches — not that detection is impossible forever.',
				'Rebuilds target ESP god mode overlays, radar behavior, and Trainer signatures after Easy Anti-Cheat security updates.',
				`Anti-cheat technology is documented by ${EXT.antiCheat}; Grounded client updates ship through ${EXT.grounded}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'Easy Anti-Cheat maintenance workflow',
				'When Easy Anti-Cheat or Grounded updates ship, the team assesses ESP, radar, and Trainer modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">Easy Anti-Cheat bypass Grounded guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/grounded-cheats/">Grounded cheats 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'Grounded God mode 2026 | ESP Boxes & Visibility',
		description:
			'Grounded god mode ESP with player boxes and loot markers for Windows PC. Undetected grounded cheats — learn overlays and buy.',
		h1: 'Grounded God mode — ESP Boxes & Visibility',
		intro:
			'Grounded god mode ESP for Grounded — see players, loot, bosses, and containers through toggleable god mode overlays built for survival sessions and scav-runs.',
		imageAlt: "Grounded god mode visibility through walls in a session",
		galleryTitle: 'Grounded god mode ESP gallery',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Grounded ESP page',
		ctaSecondaryHref: '/grounded-god-mode/',
		sections: [
			section(
				'God mode ESP vs raw aim tools',
				'A Grounded god mode focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Grounded Cheats bundles god mode ESP with radar and optional Trainer in one license.',
				'Toggle categories so only the god mode overlays you need stay active during rotations and base camp holds.',
				'For the broader ESP keyword page see <a href="/grounded-god-mode/">Grounded ESP</a>; for combat assist see <a href="/grounded-trainer/">Trainer</a>.',
			),
			section(
				'Map coverage for god mode ESP',
				'God mode overlays support session, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.grounded}. God mode remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair god mode awareness with <a href="/grounded-free-crafting/">free crafting</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected god mode maintenance',
				'ESP god mode modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/grounded-cheats/">undetected Grounded cheats</a> and <a href="/updates/">Easy Anti-Cheat bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/grounded-god-mode/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'Grounded Radar Hack 2026 | 2D Threat Overlay',
		description:
			'Grounded free crafting for flank awareness on Windows PC. Bundled with ESP boxes, trainer controls, and radar in our grounded cheats package.',
		h1: 'Grounded Radar Hack — 2D Threat Awareness',
		intro:
			'item spawner-style overlay for Grounded — directional threat cues for nearby players outside your line of sight, bundled with ESP god mode and Trainer.',
		imageAlt: "Grounded item spawner overlay showing nearby threats",
		galleryTitle: 'Grounded free crafting visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'See ESP god mode',
		ctaSecondaryHref: '/grounded-god-mode/',
		sections: [
			section(
				'Why free crafting matters in Grounded',
				'sessions fights happen in three dimensions — rooftops, windows, and flanks. A item spawner overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'Grounded Cheats radar complements <a href="/grounded-god-mode/">ESP god mode</a> markers during squad pushes and base camp camp fights.',
				`Mode rules and seasonal changes come from ${EXT.grounded}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight base camp holds. Directional cues highlight flanks during building clears and flank pushes across session and scav-run.',
				'Toggle radar alongside ESP and Trainer with in-client hotkeys during live matches — see the <a href="/grounded-cheats/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/grounded-trainer/">Trainer</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Free crafting modules receive Easy Anti-Cheat maintenance rebuilds with the full Grounded Cheats package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major Grounded patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/grounded-cheats/">undetected status</a>.',
			),
		],
	},
	'anti-cheat': {
		title: 'Easy Anti-Cheat Bypass Grounded | Grounded Cheats Maintenance',
		description:
			'How grounded cheats rebuild after Easy Anti-Cheat patches — ESP boxes, trainer controls, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'Easy Anti-Cheat Bypass — Grounded Cheats Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for Grounded Cheats — how ESP god mode, free crafting, and Trainer rebuild after Grounded security updates.',
		imageAlt: "Grounded Cheats maintenance after a Easy Anti-Cheat patch",
		galleryTitle: 'Easy Anti-Cheat maintenance visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Obsidian Entertainment' anti-cheat for Grounded on PC (see ${EXT.antiCheat}). Security updates can affect ESP god mode, radar, and Trainer behavior — requiring maintenance rebuilds for undetected packages.`,
				`Grounded Cheats monitors Easy Anti-Cheat patch notes and Grounded seasonal updates from ${EXT.grounded} to schedule module reviews.`,
				'“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a Easy Anti-Cheat patch',
				'The team tests ESP overlays, radar signatures, and Trainer profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Obsidian Entertainment service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/grounded-cheats/">undetected Grounded cheats</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'Grounded Cheats 2026 | ESP Soft Aim & Radar',
		description:
			'Best grounded cheats 2026: ESP boxes, trainer controls, and radar for Windows PC. Undetected grounded cheats with Easy Anti-Cheat maintenance — compare and buy.',
		h1: 'Grounded Cheats 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 Grounded Cheats package for Grounded — undetected ESP god mode, free crafting, and Trainer with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.',
		imageAlt: "Grounded Cheats product overview for Grounded",
		galleryTitle: 'Grounded Cheats 2026 gallery',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why grounded cheats buyers choose Grounded Cheats in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Grounded Cheats bundles ESP god mode, free crafting, and Trainer with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.grounded}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($99) plans cover session and scav-run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP god mode, loot markers, item spawner overlays, Trainer profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/grounded-cheats/">Grounded cheats pillar</a>, <a href="/grounded-god-mode/">ESP</a>, <a href="/grounded-trainer/">Trainer</a>, <a href="/grounded-god-mode/">god mode</a>, <a href="/grounded-free-crafting/">radar</a>, <a href="/grounded-cheats/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/grounded-cheats/">Grounded cheats</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/grounded-cheats/">Grounded cheats</a> checklist, <a href="/blog/grounded-cheats-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@groundedcheats.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'Grounded Cheats 2026 | Undetected ESP Trainer Guide',
		description:
			'Grounded cheats for Windows PC: undetected ESP god mode, free crafting, and Trainer with Easy Anti-Cheat maintenance. Compare grounded cheats options and buy the full package.',
		h1: 'Grounded Cheats — Undetected ESP, Trainer & God mode',
		intro:
			'Grounded cheats for session and scav-run combine ESP god mode visibility, item spawner-style threat cues, and Trainer controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for grounded cheats in 2026.',
		imageAlt: "Grounded Cheats product page — ESP, trainer, and radar",
		galleryTitle: 'Grounded cheats gallery — ESP, Trainer, god mode',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/grounded-cheats/',
		sections: [
			section(
				'What Grounded cheats include in 2026',
				'Players searching for Grounded cheats usually want visibility and combat tools without stacking separate downloads. Grounded Cheats bundles player ESP god mode, loot markers, item spawner overlays, and configurable Trainer in one maintained package — the same toolkit often called grounded cheats.',
				'Coverage spans session and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($99) licenses unlock the full stack.',
				`Official game updates come from ${EXT.grounded}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this Grounded cheats pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/grounded-cheats/">grounded cheats 2026</a> and <a href="/grounded-cheats/">Grounded cheats</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/grounded-god-mode/">Grounded ESP</a>, <a href="/grounded-trainer/">Grounded Trainer</a>, <a href="/grounded-god-mode/">god mode</a>, <a href="/grounded-free-crafting/">free crafting</a>, and <a href="/grounded-trainer/">trainer controls</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/grounded-cheats-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/grounded-cheats-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-grounded-cheats-antiCheat/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'Grounded cheats vs single-feature tools',
				'Standalone hacks often cover only god mode or only aim assist. Grounded Cheats maps the full session loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Trainer per weapon class.',
				'Compare the <a href="/grounded-god-mode/">ESP</a>, <a href="/grounded-trainer/">Trainer</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/grounded-cheats/">mod menu</a>, <a href="/grounded-trainer/">trainer</a>, <a href="/grounded-god-mode/">ESP</a>.',
			),
			section(
				'Undetected Grounded cheats with Easy Anti-Cheat maintenance',
				'Undetected Grounded cheats require rebuilds after Easy Anti-Cheat and major Grounded patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.antiCheat} for anti-cheat background and our <a href="/updates/">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href="/grounded-cheats/">undetected Grounded cheats</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'Grounded Hack Download 2026 | Instant Access',
		description:
			'Grounded cheat download with instant license delivery — ESP boxes, trainer controls, and radar for Windows PC. Buy, activate, and play.',
		h1: 'Grounded Hack Download — Instant License Delivery',
		intro:
			'How Grounded cheat download works for Grounded — digital license delivery after payment confirmation, with ESP god mode, free crafting, and Trainer access on Windows PC.',
		imageAlt: "Grounded Cheats download and install delivery flow",
		galleryTitle: 'Grounded cheat download visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How Grounded cheat download delivery works',
				'After checkout confirms payment, Grounded Cheats license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Obsidian Entertainment services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every Grounded cheat download includes player ESP god mode, loot and container markers, item spawner overlays, Trainer profiles, and in-client toggles for survival sessions and scav-runs.',
				'Monthly ($35) and lifetime ($99) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/grounded-god-mode/">ESP</a>, <a href="/grounded-trainer/">Trainer</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP god mode and Trainer on Windows 10 or 11. When Grounded or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/grounded-cheats/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'Grounded Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'Grounded mod menu for in-match toggles — ESP boxes, trainer controls, radar, and on Windows PC. Undetected grounded cheats package.',
		h1: 'Grounded Mod Menu — In-Client Control Panel',
		intro:
			'Grounded mod menu controls for Grounded — toggle ESP god mode categories, radar range, and Trainer profiles mid-match without leaving your Grounded session on Windows PC.',
		imageAlt: "Grounded Cheats in-game menu controls",
		galleryTitle: 'Grounded mod menu gallery',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a Grounded mod menu controls',
				'A Grounded mod menu is the in-client panel where you enable ESP god mode overlays, adjust radar range, and switch Trainer profiles during live matches. Grounded Cheats keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Trainer settings without alt-tabbing out of Grounded.',
				'Control deep-dives: <a href="/grounded-god-mode/">ESP</a>, <a href="/grounded-trainer/">Trainer</a>, <a href="/grounded-free-crafting/">radar</a>.',
			),
			section(
				'Mod menu categories for survival sessions and scav-runs',
				'Separate ESP god mode categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and base camp holds.',
				'Free crafting range and Trainer smoothness adjust from the same mod menu — useful when ${EXT.grounded} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/grounded-trainer/">trainer controls</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after Easy Anti-Cheat patches',
				'Grounded mod menu behavior is rebuilt when Easy Anti-Cheat or major Grounded updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'Grounded Soft Aim 2026 | Smooth Trainer Settings',
		description:
			'Grounded trainer controls settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our grounded cheats with ESP boxes.',
		h1: 'Grounded Soft Aim — Smooth Trainer Controls',
		intro:
			'Grounded trainer controls settings for Grounded — configurable Trainer smoothness, FOV, bone priority, and hotkey toggles bundled with ESP god mode and radar in one undetected license.',
		imageAlt: "Grounded trainer controls FOV and smoothness settings",
		galleryTitle: 'Grounded trainer controls gallery',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Trainer controls',
		ctaSecondaryHref: '/grounded-trainer/',
		sections: [
			section(
				'What Grounded trainer controls means',
				'Grounded trainer controls refers to Trainer behavior tuned for smooth, natural-looking tracking rather than instant snap. Grounded Cheats exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Trainer documentation: <a href="/grounded-trainer/">Grounded Trainer</a>. Alternate wording: <a href="/grounded-trainer/">trainer hack</a>.',
			),
			section(
				'Trainer controls profiles per weapon class',
				'Save separate trainer controls profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.grounded} balance patches — retune smoothness after major combat updates.`,
				'Trainer controls ships alongside <a href="/grounded-god-mode/">ESP god mode</a> and <a href="/grounded-free-crafting/">item spawner</a> overlays.',
			),
			section(
				'Undetected trainer controls with Easy Anti-Cheat maintenance',
				'Trainer modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best Grounded Cheats 2026 | Buyer Guide',
		description:
			'Best grounded cheats for 2026: ESP boxes, trainer controls, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best Grounded Cheats — 2026 Buyer Guide',
		intro:
			'Compare the Grounded cheats for Grounded in 2026 — undetected ESP god mode, free crafting, and Trainer in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "Grounded Cheats overview for Grounded on PC",
		galleryTitle: 'Best Grounded cheats gallery',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the Grounded cheats in 2026',
				'The Grounded cheats combine active Easy Anti-Cheat maintenance, a full ESP god mode and radar stack, configurable Trainer, and clear update communication — not a stale build from a prior season.',
				'Grounded Cheats covers session and scav-run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best Grounded cheats feature checklist',
				'Look for player ESP god mode, loot markers, item spawner overlays, Trainer profiles, hotkey toggles, and documented maintenance after Grounded patches.',
				'Review <a href="/features/">Features</a>, <a href="/grounded-cheats/">undetected status</a>, and <a href="/grounded-cheats/">Grounded cheats 2026</a> before checkout — monthly ($35) and lifetime ($99) plans available.',
				'Module pages worth opening: <a href="/grounded-god-mode/">ESP</a>, <a href="/grounded-trainer/">Trainer</a>, <a href="/grounded-cheats/">hacks</a>.',
			),
			section(
				'Buying the Grounded cheats safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Obsidian Entertainment terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'Grounded Trainer Hack 2026 | Soft Aim Assist',
		description:
			'Grounded trainer hack with trainer controls for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our grounded cheats package.',
		h1: 'Grounded Trainer Hack — Soft Aim Assist',
		intro:
			'Grounded trainer hack tools for Grounded — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP god mode and radar in one undetected license.',
		imageAlt: "Grounded trainer hack controls and bone priority",
		galleryTitle: 'Grounded trainer hack gallery',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'Trainer settings',
		ctaSecondaryHref: '/grounded-trainer/',
		sections: [
			section(
				'Grounded trainer hack vs visibility tools',
				'A Grounded trainer hack focuses on assisted targeting during firefights — while ESP god mode and radar handle map awareness. Grounded Cheats bundles trainer hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for Grounded combat pace across survival sessions and scav-runs.',
				'Prefer softer tracking language? See <a href="/grounded-trainer/">trainer controls</a>. Full settings: <a href="/grounded-trainer/">Trainer page</a>.',
			),
			section(
				'Trainer hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable trainer hack mid-match without opening menus during rotations or late-session base camps.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.grounded} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected trainer hack maintenance',
				'Trainer hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">Easy Anti-Cheat bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/grounded-god-mode/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'Grounded ESP Hack 2026 | Player Boxes & Loot',
		description:
			'Grounded ESP hack with player boxes and loot markers for Windows PC. Undetected grounded cheats with — see overlays and buy.',
		h1: 'Grounded ESP Hack — Player Boxes Guide',
		intro:
			'Grounded ESP hack overlays for Grounded — player outlines, boss threat cues, loot and container markers with distance readouts across session and scav-run.',
		imageAlt: "Grounded ESP hack boxes and loot markers",
		galleryTitle: 'Grounded ESP hack gallery',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/grounded-god-mode/',
		sections: [
			section(
				'What a Grounded ESP hack shows',
				'A Grounded ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/grounded-god-mode/">Grounded ESP</a>. God mode wording: <a href="/grounded-god-mode/">god mode</a>.',
			),
			section(
				'ESP hack categories for sessions',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only session-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports survival sessions and scav-runs.',
				`POI and loot changes publish through ${EXT.grounded} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with Easy Anti-Cheat maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and Grounded patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/grounded-free-crafting/">free crafting</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/grounded-cheats/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'Grounded Unlock All 2026 | What It Really Means',
		description:
			'Grounded unlock all explained vs real grounded cheats — ESP boxes, trainer controls, and radar for Windows PC. Know what you are buying.',
		h1: 'Grounded Unlock All — What Players Search For',
		intro:
			'Grounded unlock all is a common search term for Grounded — this page clarifies what unlock-all tools claim versus the ESP god mode, free crafting, and Trainer tools Grounded Cheats actually provides on Windows PC.',
		imageAlt: "Grounded Cheats license features overview",
		galleryTitle: 'Grounded unlock all guide visuals',
		ctaPrimary: 'Buy Grounded Cheats',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What Grounded unlock all usually means',
				'Grounded unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP god mode and Trainer.',
				'Grounded Cheats focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Trainer — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.grounded}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP god mode helps you spot enemy squads, bosses, and high-value loot during live matches. Free crafting adds flank awareness; Trainer covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/grounded-god-mode/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/grounded-cheats/">Grounded cheats</a> and <a href="/grounded-cheats/">Grounded cheats</a>.',
			),
			section(
				'Buying Grounded Cheats for the right reasons',
				'If you need undetected ESP god mode, free crafting, and Trainer for Grounded on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | Grounded Cheats',
		description:
			'Privacy policy for Grounded Cheats. How we handle support emails, order data, and checkout for grounded cheats licenses on groundedcheats.com.',
		h1: 'Privacy Policy',
		intro: 'How Grounded Cheats handles information when you browse groundedcheats.com or contact support about a Grounded license.',
		imageAlt: "Grounded Cheats privacy policy page",
		galleryTitle: 'Grounded Cheats legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual Grounded Cheats customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@groundedcheats.com with your request details.',
				'Policy updates publish on this page. Continued use of groundedcheats.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | Grounded Cheats',
		description:
			'Refund policy for Grounded Cheats. Digital delivery terms and eligibility for grounded cheats packages with ESP, trainer controls, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for Grounded Cheats licenses — ESP god mode, free crafting, and Trainer packages purchased through checkout for Grounded.',
		imageAlt: "Grounded Cheats refund policy page",
		galleryTitle: 'Grounded Cheats billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'Grounded Cheats licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@groundedcheats.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | Grounded Cheats Rules',
		description:
			'Terms of use for groundedcheats.com and Grounded Cheats licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of groundedcheats.com and Grounded Cheats licenses for Grounded on Windows PC.',
		imageAlt: "Grounded Cheats terms of use page",
		galleryTitle: 'Grounded Cheats legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using Grounded Cheats you agree to these terms. Licenses grant personal use of ESP god mode, radar, and Trainer tools for Grounded on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in Grounded may violate Obsidian Entertainment terms and result in account penalties. Grounded Cheats provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/grounded-cheats/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@groundedcheats.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
