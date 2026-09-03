import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'grounded-god-mode'
	| 'grounded-trainer'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'anti-cheat'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'grounded-god-mode': '/grounded-god-mode/',
	'grounded-trainer': '/grounded-trainer/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-grounded-cheats/',
	wallhack: '/grounded-cheat-engine/',
	radar: '/grounded-free-crafting/',
	'anti-cheat': '/anti-cheat-bypass/',
	'cheats-2026': '/grounded-cheats-2026/',
	hacks: '/grounded-cheats/',
	'cheat-download': '/grounded-trainer-download/',
	'mod-menu': '/grounded-mod-menu/',
	'soft-aim': '/grounded-infinite-health/',
	'best-cheats': '/best-grounded-cheats/',
	'aimbot-hack': '/grounded-super-damage/',
	'esp-hack': '/grounded-noclip/',
	'unlock-all': '/grounded-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'grounded-god-mode': {
		en: 'grounded-god-mode',
		es: 'trucos-grounded-god-mode',
		fr: 'triche-grounded-god-mode',
		de: 'grounded-god-mode-esp',
		pt: 'cheats-grounded-god-mode',
		it: 'trucchi-grounded-god-mode',
		nl: 'grounded-god-mode-esp',
		pl: 'cheaty-grounded-god-mode',
		ru: 'grounded-god-mode-chity',
		tr: 'grounded-god-mode-hile',
		ar: 'grounded-god-mode-esp',
		ja: 'grounded-god-mode-esp',
		ko: 'grounded-god-mode-esp',
		zh: 'grounded-god-mode-esp',
		hi: 'grounded-god-mode-esp',
		id: 'grounded-god-mode-esp',
		th: 'grounded-god-mode-esp',
		vi: 'grounded-god-mode-esp',
		uk: 'grounded-god-mode-chity',
		cs: 'grounded-god-mode-esp',
		ro: 'grounded-god-mode-esp',
		sv: 'grounded-god-mode-esp',
	},
	'grounded-trainer': {
		en: 'grounded-trainer',
		es: 'trucos-grounded-trainer',
		fr: 'triche-grounded-trainer',
		de: 'grounded-trainer',
		pt: 'cheats-grounded-trainer',
		it: 'trucchi-grounded-trainer',
		nl: 'grounded-trainer',
		pl: 'cheaty-grounded-trainer',
		ru: 'grounded-trainer-chity',
		tr: 'grounded-trainer-hile',
		ar: 'grounded-trainer',
		ja: 'grounded-trainer',
		ko: 'grounded-trainer',
		zh: 'grounded-trainer',
		hi: 'grounded-trainer',
		id: 'grounded-trainer',
		th: 'grounded-trainer',
		vi: 'grounded-trainer',
		uk: 'grounded-trainer-chity',
		cs: 'grounded-trainer',
		ro: 'grounded-trainer',
		sv: 'grounded-trainer',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-grounded',
		fr: 'fonctionnalites-triche-grounded',
		de: 'grounded-cheats-funktionen',
		pt: 'recursos-cheats-grounded',
		it: 'funzioni-trucchi-grounded',
		nl: 'grounded-cheats-functies',
		pl: 'funkcje-cheatow-grounded',
		ru: 'funkcii-chitov-grounded',
		tr: 'grounded-hile-ozellikleri',
		ar: 'grounded-cheats-features',
		ja: 'grounded-cheats-features',
		ko: 'grounded-cheats-features',
		zh: 'grounded-cheats-features',
		hi: 'grounded-cheats-features',
		id: 'grounded-cheats-features',
		th: 'grounded-cheats-features',
		vi: 'grounded-cheats-features',
		uk: 'funkcii-chitiv-grounded',
		cs: 'grounded-cheats-funkce',
		ro: 'functii-cheats-grounded',
		sv: 'grounded-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-grounded',
		fr: 'prix-triche-grounded',
		de: 'grounded-cheats-preise',
		pt: 'precos-cheats-grounded',
		it: 'prezzi-trucchi-grounded',
		nl: 'grounded-cheats-prijzen',
		pl: 'ceny-cheatow-grounded',
		ru: 'ceny-chitov-grounded',
		tr: 'grounded-hile-fiyatlari',
		ar: 'grounded-cheats-pricing',
		ja: 'grounded-cheats-pricing',
		ko: 'grounded-cheats-pricing',
		zh: 'grounded-cheats-pricing',
		hi: 'grounded-cheats-pricing',
		id: 'grounded-cheats-pricing',
		th: 'grounded-cheats-pricing',
		vi: 'grounded-cheats-pricing',
		uk: 'ciny-chitiv-grounded',
		cs: 'grounded-cheats-ceny',
		ro: 'preturi-cheats-grounded',
		sv: 'grounded-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-grounded',
		fr: 'installation-triche-grounded',
		de: 'grounded-cheats-installation',
		pt: 'instalacao-cheats-grounded',
		it: 'installazione-trucchi-grounded',
		nl: 'grounded-cheats-installatie',
		pl: 'instalacja-cheatow-grounded',
		ru: 'ustanovka-chitov-grounded',
		tr: 'grounded-hile-kurulum',
		ar: 'grounded-cheats-setup',
		ja: 'grounded-cheats-setup',
		ko: 'grounded-cheats-setup',
		zh: 'grounded-cheats-setup',
		hi: 'grounded-cheats-setup',
		id: 'grounded-cheats-setup',
		th: 'grounded-cheats-setup',
		vi: 'grounded-cheats-setup',
		uk: 'vstanovka-chitiv-grounded',
		cs: 'grounded-cheats-instalace',
		ro: 'instalare-cheats-grounded',
		sv: 'grounded-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-grounded',
		fr: 'mises-a-jour-triche-grounded',
		de: 'grounded-cheats-updates',
		pt: 'atualizacoes-cheats-grounded',
		it: 'aggiornamenti-trucchi-grounded',
		nl: 'grounded-cheats-updates',
		pl: 'aktualizacje-cheatow-grounded',
		ru: 'obnovleniya-chitov-grounded',
		tr: 'grounded-hile-guncellemeleri',
		ar: 'grounded-cheats-updates',
		ja: 'grounded-cheats-updates',
		ko: 'grounded-cheats-updates',
		zh: 'grounded-cheats-updates',
		hi: 'grounded-cheats-updates',
		id: 'grounded-cheats-updates',
		th: 'grounded-cheats-updates',
		vi: 'grounded-cheats-updates',
		uk: 'onovlennya-chitiv-grounded',
		cs: 'grounded-cheats-aktualizace',
		ro: 'actualizari-cheats-grounded',
		sv: 'grounded-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-grounded',
		fr: 'faq-triche-grounded',
		de: 'grounded-cheats-faq',
		pt: 'faq-cheats-grounded',
		it: 'faq-trucchi-grounded',
		nl: 'grounded-cheats-faq',
		pl: 'faq-cheatow-grounded',
		ru: 'faq-chitov-grounded',
		tr: 'grounded-hile-sss',
		ar: 'grounded-cheats-faq',
		ja: 'grounded-cheats-faq',
		ko: 'grounded-cheats-faq',
		zh: 'grounded-cheats-faq',
		hi: 'grounded-cheats-faq',
		id: 'grounded-cheats-faq',
		th: 'grounded-cheats-faq',
		vi: 'grounded-cheats-faq',
		uk: 'faq-chitiv-grounded',
		cs: 'grounded-cheats-faq',
		ro: 'faq-cheats-grounded',
		sv: 'grounded-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-grounded',
		fr: 'support-triche-grounded',
		de: 'grounded-cheats-support',
		pt: 'suporte-cheats-grounded',
		it: 'supporto-trucchi-grounded',
		nl: 'grounded-cheats-support',
		pl: 'wsparcie-cheatow-grounded',
		ru: 'podderzhka-chitov-grounded',
		tr: 'grounded-hile-destek',
		ar: 'grounded-cheats-support',
		ja: 'grounded-cheats-support',
		ko: 'grounded-cheats-support',
		zh: 'grounded-cheats-support',
		hi: 'grounded-cheats-support',
		id: 'grounded-cheats-support',
		th: 'grounded-cheats-support',
		vi: 'grounded-cheats-support',
		uk: 'pidtrymka-chitiv-grounded',
		cs: 'grounded-cheats-podpora',
		ro: 'suport-cheats-grounded',
		sv: 'grounded-cheats-support',
	},
	undetected: {
		en: 'undetected-grounded-cheats',
		es: 'trucos-grounded-indetectables',
		fr: 'triche-grounded-indetectable',
		de: 'unentdeckte-grounded-cheats',
		pt: 'cheats-grounded-indetectaveis',
		it: 'trucchi-grounded-indetectabili',
		nl: 'undetected-grounded-cheats',
		pl: 'niewykrywalne-cheats-grounded',
		ru: 'nedecektiruemye-chity-grounded',
		tr: 'tespit-edilemeyen-grounded-hileleri',
		ar: 'undetected-grounded-cheats',
		ja: 'undetected-grounded-cheats',
		ko: 'undetected-grounded-cheats',
		zh: 'undetected-grounded-cheats',
		hi: 'undetected-grounded-cheats',
		id: 'undetected-grounded-cheats',
		th: 'undetected-grounded-cheats',
		vi: 'undetected-grounded-cheats',
		uk: 'nedecektovani-chity-grounded',
		cs: 'undetected-grounded-cheats',
		ro: 'cheats-grounded-nedetectabile',
		sv: 'undetected-grounded-cheats',
	},
	wallhack: {
		en: 'grounded-cheat-engine',
		es: 'wallhack-trucos-grounded',
		fr: 'wallhack-triche-grounded',
		de: 'grounded-cheat-engine',
		pt: 'wallhack-cheats-grounded',
		it: 'wallhack-trucchi-grounded',
		nl: 'grounded-cheat-engine',
		pl: 'wallhack-cheatow-grounded',
		ru: 'wallhack-chity-grounded',
		tr: 'grounded-cheat-engine-hile',
		ar: 'grounded-cheat-engine',
		ja: 'grounded-cheat-engine',
		ko: 'grounded-cheat-engine',
		zh: 'grounded-cheat-engine',
		hi: 'grounded-cheat-engine',
		id: 'grounded-cheat-engine',
		th: 'grounded-cheat-engine',
		vi: 'grounded-cheat-engine',
		uk: 'wallhack-chity-grounded',
		cs: 'grounded-cheat-engine',
		ro: 'wallhack-cheats-grounded',
		sv: 'grounded-cheat-engine',
	},
	radar: {
		en: 'grounded-free-crafting',
		es: 'radar-hack-trucos-grounded',
		fr: 'radar-hack-triche-grounded',
		de: 'grounded-free-crafting',
		pt: 'radar-hack-cheats-grounded',
		it: 'radar-hack-trucchi-grounded',
		nl: 'grounded-free-crafting',
		pl: 'radar-hack-cheatow-grounded',
		ru: 'radar-hack-chity-grounded',
		tr: 'grounded-free-crafting',
		ar: 'grounded-free-crafting',
		ja: 'grounded-free-crafting',
		ko: 'grounded-free-crafting',
		zh: 'grounded-free-crafting',
		hi: 'grounded-free-crafting',
		id: 'grounded-free-crafting',
		th: 'grounded-free-crafting',
		vi: 'grounded-free-crafting',
		uk: 'radar-hack-chity-grounded',
		cs: 'grounded-free-crafting',
		ro: 'radar-hack-cheats-grounded',
		sv: 'grounded-free-crafting',
	},
	'anti-cheat': {
		en: 'anti-cheat-bypass',
		es: 'anti-cheat-bypass-trucos',
		fr: 'anti-cheat-bypass-triche',
		de: 'anti-cheat-bypass',
		pt: 'anti-cheat-bypass-cheats',
		it: 'anti-cheat-bypass-trucchi',
		nl: 'anti-cheat-bypass',
		pl: 'anti-cheat-bypass-cheatow',
		ru: 'anti-cheat-bypass-chity',
		tr: 'anti-cheat-bypass',
		ar: 'anti-cheat-bypass',
		ja: 'anti-cheat-bypass',
		ko: 'anti-cheat-bypass',
		zh: 'anti-cheat-bypass',
		hi: 'anti-cheat-bypass',
		id: 'anti-cheat-bypass',
		th: 'anti-cheat-bypass',
		vi: 'anti-cheat-bypass',
		uk: 'anti-cheat-bypass-chity',
		cs: 'anti-cheat-bypass',
		ro: 'anti-cheat-bypass-cheats',
		sv: 'anti-cheat-bypass',
	},
	'cheats-2026': {
		en: 'grounded-cheats-2026',
		es: 'trucos-grounded-2026',
		fr: 'triche-grounded-2026',
		de: 'grounded-cheats-2026',
		pt: 'cheats-grounded-2026',
		it: 'trucchi-grounded-2026',
		nl: 'grounded-cheats-2026',
		pl: 'cheaty-grounded-2026',
		ru: 'chity-grounded-2026',
		tr: 'grounded-hileleri-2026',
		ar: 'grounded-cheats-2026',
		ja: 'grounded-cheats-2026',
		ko: 'grounded-cheats-2026',
		zh: 'grounded-cheats-2026',
		hi: 'grounded-cheats-2026',
		id: 'grounded-cheats-2026',
		th: 'grounded-cheats-2026',
		vi: 'grounded-cheats-2026',
		uk: 'chity-grounded-2026',
		cs: 'grounded-cheats-2026',
		ro: 'cheats-grounded-2026',
		sv: 'grounded-cheats-2026',
	},
	hacks: {
		en: 'grounded-cheats',
		es: 'hacks-trucos-grounded',
		fr: 'hacks-triche-grounded',
		de: 'grounded-cheats',
		pt: 'hacks-cheats-grounded',
		it: 'hacks-trucchi-grounded',
		nl: 'grounded-cheats',
		pl: 'hacks-cheatow-grounded',
		ru: 'haksy-chity-grounded',
		tr: 'grounded-hile-hacks',
		ar: 'grounded-cheats',
		ja: 'grounded-cheats',
		ko: 'grounded-cheats',
		zh: 'grounded-cheats',
		hi: 'grounded-cheats',
		id: 'grounded-cheats',
		th: 'grounded-cheats',
		vi: 'grounded-cheats',
		uk: 'haksy-chity-grounded',
		cs: 'grounded-cheats',
		ro: 'hacks-cheats-grounded',
		sv: 'grounded-cheats',
	},
	'cheat-download': {
		en: 'grounded-trainer-download',
		es: 'descarga-trucos-grounded',
		fr: 'telechargement-triche-grounded',
		de: 'grounded-trainer-download',
		pt: 'download-cheats-grounded',
		it: 'download-trucchi-grounded',
		nl: 'grounded-trainer-download',
		pl: 'pobieranie-cheatow-grounded',
		ru: 'skachat-chity-grounded',
		tr: 'grounded-hile-indir',
		ar: 'grounded-trainer-download',
		ja: 'grounded-trainer-download',
		ko: 'grounded-trainer-download',
		zh: 'grounded-trainer-download',
		hi: 'grounded-trainer-download',
		id: 'grounded-trainer-download',
		th: 'grounded-trainer-download',
		vi: 'grounded-trainer-download',
		uk: 'zavantazhennya-chitiv-grounded',
		cs: 'grounded-trainer-download',
		ro: 'descarcare-cheats-grounded',
		sv: 'grounded-trainer-download',
	},
	'mod-menu': {
		en: 'grounded-mod-menu',
		es: 'menu-mod-trucos-grounded',
		fr: 'menu-mod-triche-grounded',
		de: 'grounded-mod-menu',
		pt: 'menu-mod-cheats-grounded',
		it: 'menu-mod-trucchi-grounded',
		nl: 'grounded-mod-menu',
		pl: 'menu-mod-cheatow-grounded',
		ru: 'mod-menu-chity-grounded',
		tr: 'grounded-mod-menu',
		ar: 'grounded-mod-menu',
		ja: 'grounded-mod-menu',
		ko: 'grounded-mod-menu',
		zh: 'grounded-mod-menu',
		hi: 'grounded-mod-menu',
		id: 'grounded-mod-menu',
		th: 'grounded-mod-menu',
		vi: 'grounded-mod-menu',
		uk: 'mod-menu-chity-grounded',
		cs: 'grounded-mod-menu',
		ro: 'meniu-mod-cheats-grounded',
		sv: 'grounded-mod-menu',
	},
	'soft-aim': {
		en: 'grounded-infinite-health',
		es: 'soft-aim-trucos-grounded',
		fr: 'soft-aim-triche-grounded',
		de: 'grounded-infinite-health',
		pt: 'soft-aim-cheats-grounded',
		it: 'soft-aim-trucchi-grounded',
		nl: 'grounded-infinite-health',
		pl: 'soft-aim-cheatow-grounded',
		ru: 'soft-aim-chity-grounded',
		tr: 'grounded-infinite-health',
		ar: 'grounded-infinite-health',
		ja: 'grounded-infinite-health',
		ko: 'grounded-infinite-health',
		zh: 'grounded-infinite-health',
		hi: 'grounded-infinite-health',
		id: 'grounded-infinite-health',
		th: 'grounded-infinite-health',
		vi: 'grounded-infinite-health',
		uk: 'soft-aim-chity-grounded',
		cs: 'grounded-infinite-health',
		ro: 'soft-aim-cheats-grounded',
		sv: 'grounded-infinite-health',
	},
	'best-cheats': {
		en: 'best-grounded-cheats',
		es: 'mejores-trucos-grounded',
		fr: 'meilleures-triches-grounded',
		de: 'beste-grounded-cheats',
		pt: 'melhores-cheats-grounded',
		it: 'migliori-trucchi-grounded',
		nl: 'beste-grounded-cheats',
		pl: 'najlepsze-cheats-grounded',
		ru: 'luchshie-chity-grounded',
		tr: 'en-iyi-grounded-hileleri',
		ar: 'best-grounded-cheats',
		ja: 'best-grounded-cheats',
		ko: 'best-grounded-cheats',
		zh: 'best-grounded-cheats',
		hi: 'best-grounded-cheats',
		id: 'best-grounded-cheats',
		th: 'best-grounded-cheats',
		vi: 'best-grounded-cheats',
		uk: 'naykrashchi-chity-grounded',
		cs: 'nejlepsi-grounded-cheats',
		ro: 'cele-mai-bune-cheats-grounded',
		sv: 'basta-grounded-cheats',
	},
	'aimbot-hack': {
		en: 'grounded-super-damage',
		es: 'trainer-hack-trucos-grounded',
		fr: 'trainer-hack-triche-grounded',
		de: 'grounded-super-damage',
		pt: 'trainer-hack-cheats-grounded',
		it: 'trainer-hack-trucchi-grounded',
		nl: 'grounded-super-damage',
		pl: 'trainer-hack-cheatow-grounded',
		ru: 'trainer-hack-chity-grounded',
		tr: 'grounded-super-damage',
		ar: 'grounded-super-damage',
		ja: 'grounded-super-damage',
		ko: 'grounded-super-damage',
		zh: 'grounded-super-damage',
		hi: 'grounded-super-damage',
		id: 'grounded-super-damage',
		th: 'grounded-super-damage',
		vi: 'grounded-super-damage',
		uk: 'trainer-hack-chity-grounded',
		cs: 'grounded-super-damage',
		ro: 'trainer-hack-cheats-grounded',
		sv: 'grounded-super-damage',
	},
	'esp-hack': {
		en: 'grounded-noclip',
		es: 'esp-hack-trucos-grounded',
		fr: 'esp-hack-triche-grounded',
		de: 'grounded-noclip',
		pt: 'esp-hack-cheats-grounded',
		it: 'esp-hack-trucchi-grounded',
		nl: 'grounded-noclip',
		pl: 'esp-hack-cheatow-grounded',
		ru: 'esp-hack-chity-grounded',
		tr: 'grounded-noclip',
		ar: 'grounded-noclip',
		ja: 'grounded-noclip',
		ko: 'grounded-noclip',
		zh: 'grounded-noclip',
		hi: 'grounded-noclip',
		id: 'grounded-noclip',
		th: 'grounded-noclip',
		vi: 'grounded-noclip',
		uk: 'esp-hack-chity-grounded',
		cs: 'grounded-noclip',
		ro: 'esp-hack-cheats-grounded',
		sv: 'grounded-noclip',
	},
	'unlock-all': {
		en: 'grounded-unlock-all',
		es: 'unlock-all-trucos-grounded',
		fr: 'unlock-all-triche-grounded',
		de: 'grounded-unlock-all',
		pt: 'unlock-all-cheats-grounded',
		it: 'unlock-all-trucchi-grounded',
		nl: 'grounded-unlock-all',
		pl: 'unlock-all-cheatow-grounded',
		ru: 'unlock-all-chity-grounded',
		tr: 'grounded-unlock-all',
		ar: 'grounded-unlock-all',
		ja: 'grounded-unlock-all',
		ko: 'grounded-unlock-all',
		zh: 'grounded-unlock-all',
		hi: 'grounded-unlock-all',
		id: 'grounded-unlock-all',
		th: 'grounded-unlock-all',
		vi: 'grounded-unlock-all',
		uk: 'unlock-all-chity-grounded',
		cs: 'grounded-unlock-all',
		ro: 'unlock-all-cheats-grounded',
		sv: 'grounded-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.trainer, href: getLocalizedPath('grounded-trainer', locale), pageId: 'grounded-trainer' },
		{ label: labels.esp, href: getLocalizedPath('grounded-god-mode', locale), pageId: 'grounded-god-mode' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
