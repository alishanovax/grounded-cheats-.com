import type { BlogImageKey } from './types';

/** One unique image per blog post — no repeats on the index. */
export const blogImagePaths: Record<BlogImageKey, string> = {
	blog01: '/images/grounded-squad-fight.webp',
	blog02: '/images/grounded-header-art.webp',
	blog03: '/images/grounded-battle-royale-combat.webp',
	blog04: '/images/grounded-extract-fight.webp',
	blog05: '/images/grounded-loadout-builder.webp',
	blog06: '/images/grounded-scav-run-combat.webp',
	blog07: '/images/grounded-scav-run-mode.webp',
	blog08: '/images/grounded-verdansk-map.webp',
	blog09: '/images/grounded-player-esp.webp',
	blog10: '/images/grounded-cheats-cover.webp',
	blog11: '/images/grounded-cheats-package.webp',
	blog12: '/images/grounded-cheats-esp.webp',
	blog13: '/images/grounded-cheats-wallhack.webp',
	blog14: '/images/grounded-cheats-aimbot.webp',
	blog15: '/images/grounded-cheats-aimbot-view.webp',
	blog16: '/images/grounded-cheats-radar.webp',
	blog17: '/images/grounded-cheats-raid.webp',
	blog18: '/images/grounded-cheats-combat.webp',
	blog19: '/images/grounded-esp-player-tags.webp',
	blog20: '/images/grounded-esp-radar.webp',
	blog21: '/images/grounded-aimbot-sniper.webp',
	blog22: '/images/grounded-wallhack-skeleton.webp',
	blog23: '/images/grounded-hero-banner.webp',
	blog24: '/images/grounded-hero-ghost.webp',
	blog25: '/images/grounded-cheats-hero.webp',
	blog26: '/images/grounded-cheats-hero-640w.webp',
	blog27: '/images/grounded-cheats-hero-1024w.webp',
	blog28: '/images/grounded-cheats-hero-1536w.webp',
	blog29: '/images/grounded-cheats-hero.jpg',
	blog30: '/images/grounded-cheats-logo.webp',
};

export const blogImageKeys = Object.keys(blogImagePaths) as BlogImageKey[];
