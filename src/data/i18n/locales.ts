export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Grounded Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Grounded Cheats Blog | Raid Guides',
		blogDescription:
			'Grounded guides — session tips, ESP, trainer notes, resource farming, and Easy Anti-Cheat update coverage. English blog at groundedcheats.com/blog/.',
		blogH1: 'Grounded Cheats Intel',
		blogIntro:
			'Short Grounded guides for solo survival and co-op sessions. Pair these tips with the Grounded Cheats product pages when you need ESP, trainer controls, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Grounded Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Grounded Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Grounded Cheats con guías de trucos indetectables, ESP god mode, radar y Trainer para Grounded en PC Windows.',
		blogH1: 'Blog Grounded Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Grounded indetectables, ESP god mode, free crafting, Trainer y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Grounded relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Grounded Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Grounded Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Grounded Cheats : triches indétectables, ESP god mode, radar et Trainer pour Grounded sur PC Windows.',
		blogH1: 'Blog Grounded Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Grounded indétectables, ESP god mode, free crafting, Trainer et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Grounded associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Grounded Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Grounded Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Grounded Cheats Blog mit undetected ESP, God mode, Radar und Trainer Guides für Grounded auf Windows PC.',
		blogH1: 'Grounded Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Grounded Cheats, ESP God mode, Radar Hack, Trainer und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Grounded Guides',
		allPosts: 'Alle Beiträge',
		home: 'Grounded Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Grounded Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Grounded Cheats com guias de cheats indetectáveis, ESP god mode, radar e Trainer para Grounded no PC.',
		blogH1: 'Blog Grounded Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Grounded indetectáveis, ESP god mode, free crafting, Trainer e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Grounded relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Grounded Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Grounded Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Grounded Cheats con guide cheat indetectable, ESP god mode, radar e Trainer per Grounded su PC Windows.',
		blogH1: 'Blog Grounded Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Grounded indetectable, ESP god mode, free crafting, Trainer e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Grounded correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Grounded Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Grounded Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Grounded Cheats blog met undetected ESP, god mode, radar en Trainer gidsen voor Grounded op Windows PC.',
		blogH1: 'Grounded Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected Grounded cheats, ESP god mode, free crafting, Trainer en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Grounded gidsen',
		allPosts: 'Alle posts',
		home: 'Grounded Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Grounded Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Grounded Cheats z poradnikami undetected ESP, god mode, radar i Trainer dla Grounded na PC.',
		blogH1: 'Blog Grounded Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Grounded, ESP god mode, free crafting, Trainer i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Grounded',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Grounded Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Grounded Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Grounded Cheats: undetected ESP, god mode, radar и Trainer для Grounded на Windows PC.',
		blogH1: 'Блог Grounded Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Grounded, ESP god mode, free crafting, Trainer и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Grounded',
		allPosts: 'Все статьи',
		home: 'Главная Grounded Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Grounded Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Grounded Cheats blog: undetected ESP, god mode, radar ve Trainer rehberleri Grounded Windows PC.',
		blogH1: 'Grounded Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Grounded hileleri, ESP god mode, free crafting, Trainer ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Grounded rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Grounded Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Grounded Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Grounded Cheats: غش undetected وESP god mode ورadar وTrainer لـ Grounded على Windows PC.',
		blogH1: 'مدونة Grounded Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Grounded undetected وESP god mode ورadar hack وTrainer وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Grounded ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Grounded Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Grounded Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Grounded Cheatsブログ：undetected ESP、god mode、radar、Trainerガイド。Grounded Windows PC向け。',
		blogH1: 'Grounded Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Groundedチート、ESP god mode、free crafting、Trainer、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Groundedガイド',
		allPosts: 'すべての記事',
		home: 'Grounded Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Grounded Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Grounded Cheats 블로그: undetected ESP, god mode, radar, Trainer 가이드. Grounded Windows PC.',
		blogH1: 'Grounded Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Grounded 치트, ESP god mode, free crafting, Trainer, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Grounded 가이드',
		allPosts: '모든 게시물',
		home: 'Grounded Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Grounded Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Grounded Cheats博客：undetected ESP、god mode、radar和Trainer指南，适用于Grounded Windows PC。',
		blogH1: 'Grounded Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Grounded作弊、ESP god mode、free crafting、Trainer和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Grounded指南',
		allPosts: '所有文章',
		home: 'Grounded Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Grounded Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Grounded Cheats ब्लॉग: undetected ESP, god mode, radar और Trainer गाइड Grounded Windows PC के लिए।',
		blogH1: 'Grounded Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected Grounded cheats, ESP god mode, free crafting, Trainer और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Grounded गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Grounded Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Grounded Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Grounded Cheats: panduan undetected ESP, god mode, radar dan Trainer untuk Grounded di PC Windows.',
		blogH1: 'Blog Grounded Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Grounded undetected, ESP god mode, free crafting, Trainer dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan Grounded terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Grounded Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Grounded Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Grounded Cheats: คู่มือ undetected ESP, god mode, radar และ Trainer สำหรับ Grounded บน PC',
		blogH1: 'บล็อก Grounded Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Grounded undetected, ESP god mode, free crafting, Trainer และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Grounded ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Grounded Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Grounded Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Grounded Cheats: hướng dẫn undetected ESP, god mode, radar và Trainer cho Grounded trên PC.',
		blogH1: 'Blog Grounded Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Grounded undetected, ESP god mode, free crafting, Trainer và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Grounded liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Grounded Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Grounded Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Grounded Cheats: undetected ESP, god mode, radar та Trainer для Grounded на Windows PC.',
		blogH1: 'Блог Grounded Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Grounded, ESP god mode, free crafting, Trainer та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Grounded",
		allPosts: 'Усі статті',
		home: 'Головна Grounded Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Grounded Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Grounded Cheats: undetected ESP, god mode, radar a Trainer pro Grounded na Windows PC.',
		blogH1: 'Blog Grounded Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected Grounded cheaty, ESP god mode, free crafting, Trainer a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Grounded průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Grounded Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Grounded Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Grounded Cheats: ghiduri undetected ESP, god mode, radar și Trainer pentru Grounded pe PC.',
		blogH1: 'Blog Grounded Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Grounded undetected, ESP god mode, free crafting, Trainer și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Grounded related',
		allPosts: 'Toate articolele',
		home: 'Acasă Grounded Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Grounded Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Grounded Cheats blogg med undetected ESP, god mode, radar och Trainer guider för Grounded på PC.',
		blogH1: 'Grounded Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected Grounded cheats, ESP god mode, free crafting, Trainer och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Grounded guider',
		allPosts: 'Alla inlägg',
		home: 'Grounded Cheats hem',
		language: 'Språk',
	},
};
