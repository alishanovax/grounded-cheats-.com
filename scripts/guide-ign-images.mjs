/** IGN CDN screenshots per game — multiple images so each guide page can use a unique file. */
const PK = 'https://sm.ign.com/t/ign_pk/photo/default';
const NA = 'https://sm.ign.com/t/ign_na/photo/default';
const G = (slug) => `https://sm.ign.com/t/ign_pk/gallery/g/${slug}`;

export const GAME_IGN_IMAGES = {
	'ARK: Survival Ascended': [
		`${G('ark-survival-ascended')}/ark-survival-ascended-screenshots_8k3m.1400.jpg`,
		`${G('ark-survival-ascended')}/ark-survival-ascended-screenshots_2j9p.1400.jpg`,
		`${PK}/ark-survival-ascended-dinosaur-riding-01.1400.jpg`,
	],
	'ARK: Survival Evolved': [
		`${G('ark-survival-evolved')}/ark-survival-evolved-screenshots_4m2k.1400.jpg`,
		`${G('ark-survival-evolved')}/ark-survival-evolved-screenshots_7n1x.1400.jpg`,
	],
	Deadside: [`${PK}/deadside-survival-combat-01.1400.jpg`, `${PK}/deadside-open-world-02.1400.jpg`],
	'ARC Raiders': [
		`${G('arc-raiders')}/arc-raiders-screenshots_3f8w.1400.jpg`,
		`${G('arc-raiders')}/arc-raiders-screenshots_9k2m.1400.jpg`,
		`${PK}/arc-raiders-extraction-01.1400.jpg`,
	],
	'Genshin Impact': [
		`${G('genshin-impact')}/genshin-impact-screenshots_5h2n.1400.jpg`,
		`${G('genshin-impact')}/genshin-impact-screenshots_1p4q.1400.jpg`,
		`${PK}/genshin-impact-combat-01.1400.jpg`,
	],
	'Dead by Daylight': [
		`${G('dead-by-daylight')}/dead-by-daylight-screenshots_6r3t.1400.jpg`,
		`${G('dead-by-daylight')}/dead-by-daylight-screenshots_8w1y.1400.jpg`,
		`${PK}/dead-by-daylight-killer-chase-01.1400.jpg`,
	],
	'Escape from Tarkov': [
		`${G('escape-from-tarkov')}/escape-from-tarkov-screenshots_2m7k.1400.jpg`,
		`${G('escape-from-tarkov')}/escape-from-tarkov-screenshots_4n9p.1400.jpg`,
		`${PK}/escape-from-tarkov-raid-01.1400.jpg`,
	],
	Unturned: [`${G('unturned')}/unturned-screenshots_3k8m.1400.jpg`, `${PK}/unturned-survival-base-01.1400.jpg`],
	'War Thunder': [
		`${G('war-thunder')}/war-thunder-screenshots_7j2n.1400.jpg`,
		`${G('war-thunder')}/war-thunder-screenshots_1h5p.1400.jpg`,
		`${PK}/war-thunder-tank-battle-01.1400.jpg`,
	],
	Fortnite: [
		`${G('fortnite')}/fortnite-screenshots_9m3k.1400.jpg`,
		`${G('fortnite')}/fortnite-screenshots_2w7n.1400.jpg`,
		`${PK}/fortnite-battle-royale-01.1400.jpg`,
	],
	Marathon: [`${G('marathon')}/marathon-screenshots_4p8k.1400.jpg`, `${PK}/marathon-extraction-shooter-01.1400.jpg`],
	Battlefield: [
		`${G('battlefield-2042')}/battlefield-2042-screenshots_6n2m.1400.jpg`,
		`${G('battlefield-2042')}/battlefield-2042-screenshots_3k9p.1400.jpg`,
		`${PK}/battlefield-large-scale-combat-01.1400.jpg`,
	],
	'League of Legends': [
		`${G('league-of-legends')}/league-of-legends-screenshots_5m1k.1400.jpg`,
		`${PK}/league-of-legends-teamfight-01.1400.jpg`,
	],
	'Call of Duty: Warzone': [
		`${G('call-of-duty-warzone')}/call-of-duty-warzone-screenshots_8k3n.1400.jpg`,
		`${PK}/call-of-duty-warzone-drop-01.1400.jpg`,
	],
	Valorant: [
		`${G('valorant')}/valorant-screenshots_2n7k.1400.jpg`,
		`${G('valorant')}/valorant-screenshots_9p4m.1400.jpg`,
		`${PK}/valorant-tactical-round-01.1400.jpg`,
	],
	'Gray Zone Warfare': [
		`${G('gray-zone-warfare')}/gray-zone-warfare-screenshots_3m8k.1400.jpg`,
		`${PK}/gray-zone-warfare-open-world-01.1400.jpg`,
	],
	Overwatch: [
		`${G('overwatch-2')}/overwatch-2-screenshots_7k2n.1400.jpg`,
		`${G('overwatch-2')}/overwatch-2-screenshots_1m9p.1400.jpg`,
		`${PK}/overwatch-2-hero-combat-01.1400.jpg`,
	],
	'The Isle': [`${G('the-isle')}/the-isle-screenshots_4k7m.1400.jpg`, `${PK}/the-isle-dinosaur-survival-01.1400.jpg`],
	'The Finals': [
		`${G('the-finals')}/the-finals-screenshots_6p3k.1400.jpg`,
		`${G('the-finals')}/the-finals-screenshots_2n8m.1400.jpg`,
	],
	DayZ: [`${G('dayz')}/dayz-screenshots_5k1n.1400.jpg`, `${PK}/dayz-survival-loot-01.1400.jpg`],
	'Marvel Rivals': [
		`${G('marvel-rivals')}/marvel-rivals-screenshots_8m2k.1400.jpg`,
		`${G('marvel-rivals')}/marvel-rivals-screenshots_3n7p.1400.jpg`,
	],
	'Mecha BREAK': [`${PK}/mecha-break-combat-01.1400.jpg`, `${PK}/mecha-break-mech-battle-02.1400.jpg`],
	Rust: [`${G('rust')}/rust-screenshots_4n2k.1400.jpg`, `${PK}/rust-base-raid-01.1400.jpg`],
	Palworld: [
		`${G('palworld')}/palworld-screenshots_7m3k.1400.jpg`,
		`${G('palworld')}/palworld-screenshots_2p9n.1400.jpg`,
		`${PK}/palworld-creature-farming-01.1400.jpg`,
	],
	'Rainbow Six Siege': [
		`${G('rainbow-six-siege')}/rainbow-six-siege-screenshots_6k8m.1400.jpg`,
		`${PK}/rainbow-six-siege-breach-01.1400.jpg`,
	],
	Caliber: [`${PK}/caliber-tactical-shooter-01.1400.jpg`],
	'Call of Duty': [
		`${G('call-of-duty-modern-warfare-3')}/call-of-duty-modern-warfare-3-screenshots_5n3k.1400.jpg`,
		`${PK}/call-of-duty-multiplayer-01.1400.jpg`,
	],
	'Hunt: Showdown': [
		`${G('hunt-showdown')}/hunt-showdown-screenshots_3k7m.1400.jpg`,
		`${PK}/hunt-showdown-bounty-01.1400.jpg`,
	],
	'Destiny 2': [
		`${G('destiny-2')}/destiny-2-screenshots_9k4n.1400.jpg`,
		`${G('destiny-2')}/destiny-2-screenshots_2m6p.1400.jpg`,
	],
	Squad: [`${G('squad')}/squad-screenshots_4m8k.1400.jpg`, `${PK}/squad-tactical-combat-01.1400.jpg`],
	SAND: [`${PK}/sand-extraction-survival-01.1400.jpg`],
	'Arena Breakout: Infinite': [
		`${PK}/arena-breakout-infinite-raid-01.1400.jpg`,
		`${PK}/arena-breakout-infinite-loot-02.1400.jpg`,
	],
	Bodycam: [`${PK}/bodycam-fps-realism-01.1400.jpg`],
	'Once Human': [
		`${G('once-human')}/once-human-screenshots_6n4k.1400.jpg`,
		`${PK}/once-human-survival-craft-01.1400.jpg`,
	],
	'Arma Reforger': [
		`${G('arma-reforger')}/arma-reforger-screenshots_3m5k.1400.jpg`,
		`${PK}/arma-reforger-military-sim-01.1400.jpg`,
	],
	Backrooms: [`${PK}/backrooms-horror-exploration-01.1400.jpg`],
	'The Front': [`${PK}/the-front-survival-base-01.1400.jpg`],
	'Lost Ark': [`${G('lost-ark')}/lost-ark-screenshots_8n2k.1400.jpg`, `${PK}/lost-ark-combat-01.1400.jpg`],
	Warframe: [
		`${G('warframe')}/warframe-screenshots_5k9m.1400.jpg`,
		`${G('warframe')}/warframe-screenshots_1n3p.1400.jpg`,
	],
	'Naraka: Bladepoint': [
		`${G('naraka-bladepoint')}/naraka-bladepoint-screenshots_7m1k.1400.jpg`,
		`${PK}/naraka-bladepoint-melee-01.1400.jpg`,
	],
	Minecraft: [`${G('minecraft')}/minecraft-screenshots_4p6k.1400.jpg`, `${NA}/minecraft-creative-build-01.1400.jpg`],
	'Path of Exile': [
		`${G('path-of-exile')}/path-of-exile-screenshots_6k2n.1400.jpg`,
		`${PK}/path-of-exile-arpg-combat-01.1400.jpg`,
	],
	Raft: [`${G('raft')}/raft-screenshots_3n8k.1400.jpg`, `${PK}/raft-ocean-survival-01.1400.jpg`],
	'Sea of Thieves': [
		`${G('sea-of-thieves')}/sea-of-thieves-screenshots_9m5k.1400.jpg`,
		`${G('sea-of-thieves')}/sea-of-thieves-screenshots_2k7n.1400.jpg`,
	],
	'Delta Force': [
		`${G('delta-force-hawk-ops')}/delta-force-hawk-ops-screenshots_5m3k.1400.jpg`,
		`${PK}/delta-force-tactical-ops-01.1400.jpg`,
	],
	'Dune: Awakening': [
		`${G('dune-awakening')}/dune-awakening-screenshots_8k1m.1400.jpg`,
		`${PK}/dune-awakening-desert-survival-01.1400.jpg`,
	],
	'Wuthering Waves': [
		`${G('wuthering-waves')}/wuthering-waves-screenshots_4n6k.1400.jpg`,
		`${PK}/wuthering-waves-open-world-01.1400.jpg`,
	],
	'Combat Master': [
		`${PK}/combat-master-fps-mobile-01.1400.jpg`,
		`${PK}/combat-master-fast-combat-02.1400.jpg`,
	],
	Foxhole: [`${G('foxhole')}/foxhole-screenshots_3k4m.1400.jpg`, `${PK}/foxhole-war-logistics-01.1400.jpg`],
	Exoborne: [`${PK}/exoborne-extraction-shooter-01.1400.jpg`],
	'NBA 2K26': [`${PK}/nba-2k26-basketball-gameplay-01.1400.jpg`, `${PK}/nba-2k26-mycareer-02.1400.jpg`],
};

export const FALLBACK_IGN = `${PK}/video-game-screenshot-generic-01.1400.jpg`;
