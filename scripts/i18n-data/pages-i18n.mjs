import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Grounded Cheats 2026 | ESP, God mode y Trainer', desc: 'Trucos Grounded indetectables para Grounded en PC. ESP god mode, free crafting y Trainer con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Grounded Cheats — ESP, God mode y Trainer indetectables', intro: 'Paquete undetected para Grounded en Windows PC: ESP god mode, radar y Trainer con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Galería Grounded Cheats — ESP, Trainer y god mode', cta2: 'Ver funciones', h2a: 'Por qué eligen Grounded Cheats en 2026', h2b: 'ESP god mode, radar y Trainer en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y scav-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Grounded Cheats 2026 | ESP, God mode et Trainer', desc: 'Triches Grounded indétectables pour Grounded sur PC. ESP god mode, free crafting et Trainer avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Grounded Cheats — ESP, God mode et Trainer indétectables', intro: 'Pack undetected pour Grounded sur PC Windows : ESP god mode, radar et Trainer avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Galerie Grounded Cheats — ESP, Trainer et god mode', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Grounded Cheats en 2026', h2b: 'ESP god mode, radar et Trainer en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et scav-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Grounded Cheats 2026 | ESP, God mode & Trainer', desc: 'Undetected Grounded Cheats für Grounded auf PC. ESP God mode, Radar Hack und Trainer mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Grounded Cheats — Undetected ESP, God mode & Trainer', intro: 'Undetected Windows PC Paket für Grounded: ESP God mode, Radar und Trainer mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Grounded Cheats Galerie — ESP, Trainer und God mode', cta2: 'Features ansehen', h2a: 'Warum Grounded Cheats 2026 führt', h2b: 'ESP God mode, Radar und Trainer in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und scav-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Grounded Cheats 2026 | ESP, God mode e Trainer', desc: 'Cheats Grounded indetectáveis para Grounded no PC. ESP god mode, free crafting e Trainer com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Grounded Cheats — ESP, God mode e Trainer indetectáveis', intro: 'Pacote undetected para Grounded no Windows PC: ESP god mode, radar e Trainer com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Galeria Grounded Cheats — ESP, Trainer e god mode', cta2: 'Ver recursos', h2a: 'Por que escolher Grounded Cheats em 2026', h2b: 'ESP god mode, radar e Trainer numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e scav-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Grounded Cheats 2026 | ESP, God mode e Trainer', desc: 'Cheat Grounded indetectable per Grounded su PC. ESP god mode, free crafting e Trainer con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Grounded Cheats — ESP, God mode e Trainer indetectable', intro: 'Pacchetto undetected per Grounded su PC Windows: ESP god mode, radar e Trainer con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Galleria Grounded Cheats — ESP, Trainer e god mode', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Grounded Cheats nel 2026', h2b: 'ESP god mode, radar e Trainer in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e scav-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Grounded Cheats 2026 | ESP, God mode & Trainer', desc: 'Undetected Grounded cheats voor Grounded op PC. ESP god mode, free crafting en Trainer met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Grounded Cheats — Undetected ESP, God mode & Trainer', intro: 'Undetected Windows PC pakket voor Grounded: ESP god mode, radar en Trainer met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Grounded Cheats galerij — ESP, Trainer en god mode', cta2: 'Bekijk functies', h2a: 'Waarom Grounded Cheats in 2026', h2b: 'ESP god mode, radar en Trainer in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en scav-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Grounded Cheats 2026 | ESP, God mode i Trainer', desc: 'Undetected cheaty Grounded dla Grounded na PC. ESP god mode, free crafting i Trainer z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Grounded Cheats — Undetected ESP, God mode i Trainer', intro: 'Pakiet undetected dla Grounded na Windows PC: ESP god mode, radar i Trainer z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Galeria Grounded Cheats — ESP, Trainer i god mode', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Grounded Cheats w 2026', h2b: 'ESP god mode, radar i Trainer w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i scav-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Grounded Cheats 2026 | ESP, God mode и Trainer', desc: 'Undetected читы Grounded для Grounded на PC. ESP god mode, free crafting и Trainer с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Grounded Cheats — Undetected ESP, God mode и Trainer', intro: 'Undetected пакет для Grounded на Windows PC: ESP god mode, radar и Trainer с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Галерея Grounded Cheats — ESP, Trainer и god mode', cta2: 'Смотреть функции', h2a: 'Почему выбирают Grounded Cheats в 2026', h2b: 'ESP god mode, radar и Trainer в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и scav-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Grounded Cheats 2026 | ESP, God mode ve Trainer', desc: 'Grounded için undetected hileler. ESP god mode, free crafting ve Trainer — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Grounded Cheats — Undetected ESP, God mode ve Trainer', intro: 'Grounded Windows PC undetected paketi: ESP god mode, radar ve Trainer — Easy Anti-Cheat bakımı dahil.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Grounded Cheats galeri — ESP, Trainer ve god mode', cta2: 'Özellikleri gör', h2a: '2026\'da neden Grounded Cheats', h2b: 'ESP god mode, radar ve Trainer tek lisans', topicA: 'BR ve scav-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Grounded Cheats 2026 | ESP وGod mode وTrainer', desc: 'غش Grounded undetected لـ Grounded على PC. ESP god mode ورadar hack وTrainer مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Grounded Cheats — ESP وGod mode وTrainer غير مكتشف', intro: 'حزمة undetected لـ Grounded على Windows PC: ESP god mode ورadar وTrainer مع صيانة Easy Anti-Cheat.', imageAlt: 'Grounded ESP player tags hack', gallery: 'معرض Grounded Cheats — ESP وTrainer وgod mode', cta2: 'عرض الميزات', h2a: 'لماذا Grounded Cheats في 2026', h2b: 'ESP god mode ورadar وTrainer في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Grounded Cheats 2026 | ESP・God mode・Trainer', desc: 'Grounded向けundetectedチート。ESP god mode、free crafting、Trainer、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Grounded Cheats — Undetected ESP・God mode・Trainer', intro: 'Grounded Windows PC向けundetectedパッケージ：ESP god mode、radar、Trainer、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'Grounded cheats hero ESP trainer god mode', gallery: 'Grounded Cheatsギャラリー — ESP、Trainer、god mode', cta2: '機能を見る', h2a: '2026年にGrounded Cheatsを選ぶ理由', h2b: 'ESP god mode、radar、Trainerが1ライセンス', topicA: 'BRとscav-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Grounded Cheats 2026 | ESP, God mode, Trainer', desc: 'Grounded undetected 치트. ESP god mode, free crafting, Trainer, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Grounded Cheats — Undetected ESP, God mode, Trainer', intro: 'Grounded Windows PC undetected 패키지: ESP god mode, radar, Trainer, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'Grounded cheats hero ESP trainer god mode', gallery: 'Grounded Cheats 갤러리 — ESP, Trainer, god mode', cta2: '기능 보기', h2a: '2026년 Grounded Cheats를 선택하는 이유', h2b: 'ESP god mode, radar, Trainer 단일 라이선스', topicA: 'BR 및 scav-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Grounded Cheats 2026 | ESP、God mode、Trainer', desc: 'Grounded undetected作弊。ESP god mode、free crafting、Trainer、Easy Anti-Cheat维护。即时数字交付。', h1: 'Grounded Cheats — Undetected ESP、God mode、Trainer', intro: 'Grounded Windows PC undetected套餐：ESP god mode、radar、Trainer，含Easy Anti-Cheat维护。', imageAlt: 'Grounded cheats hero ESP trainer god mode', gallery: 'Grounded Cheats图库 — ESP、Trainer、god mode', cta2: '查看功能', h2a: '2026年选择Grounded Cheats的原因', h2b: 'ESP god mode、radar、Trainer单一许可证', topicA: '适合在BR和scav-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Grounded Cheats 2026 | ESP, God mode और Trainer', desc: 'Grounded undetected cheats. ESP god mode, free crafting, Trainer, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'Grounded Cheats — Undetected ESP, God mode और Trainer', intro: 'Grounded Windows PC undetected पैकेज: ESP god mode, radar, Trainer, Easy Anti-Cheat maintenance सहित.', imageAlt: 'Grounded cheats hero ESP trainer god mode', gallery: 'Grounded Cheats gallery — ESP, Trainer, god mode', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Grounded Cheats क्यों', h2b: 'ESP god mode, radar, Trainer एक लाइसेंस में', topicA: 'BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Grounded Cheats 2026 | ESP, God mode & Trainer', desc: 'Cheat Grounded undetected untuk Grounded di PC. ESP god mode, free crafting, Trainer, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Grounded Cheats — Undetected ESP, God mode & Trainer', intro: 'Paket undetected Grounded di Windows PC: ESP god mode, radar, Trainer dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Galeri Grounded Cheats — ESP, Trainer, god mode', cta2: 'Lihat fitur', h2a: 'Mengapa Grounded Cheats di 2026', h2b: 'ESP god mode, radar, Trainer dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan scav-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Grounded Cheats 2026 | ESP, God mode และ Trainer', desc: 'Cheat Grounded undetected สำหรับ Grounded บน PC. ESP god mode, free crafting, Trainer, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Grounded Cheats — Undetected ESP, God mode และ Trainer', intro: 'แพ็ก undetected สำหรับ Grounded บน Windows PC: ESP god mode, radar, Trainer พร้อม Easy Anti-Cheat maintenance', imageAlt: 'Grounded ESP player tags hack', gallery: 'แกลเลอรี Grounded Cheats — ESP, Trainer, god mode', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Grounded Cheats ปี 2026', h2b: 'ESP god mode, radar, Trainer ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Grounded Cheats 2026 | ESP, God mode & Trainer', desc: 'Cheat Grounded undetected cho Grounded trên PC. ESP god mode, free crafting, Trainer, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Grounded Cheats — Undetected ESP, God mode & Trainer', intro: 'Gói undetected Grounded trên Windows PC: ESP god mode, radar, Trainer với bảo trì Easy Anti-Cheat.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Thư viện Grounded Cheats — ESP, Trainer, god mode', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Grounded Cheats 2026', h2b: 'ESP god mode, radar, Trainer trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và scav-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Grounded Cheats 2026 | ESP, God mode і Trainer', desc: 'Undetected чіти Grounded для Grounded на PC. ESP god mode, free crafting, Trainer, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Grounded Cheats — Undetected ESP, God mode і Trainer', intro: 'Undetected пакет для Grounded на Windows PC: ESP god mode, radar, Trainer з обслуговуванням Easy Anti-Cheat.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Галерея Grounded Cheats — ESP, Trainer, god mode', cta2: 'Дивитися функції', h2a: 'Чому Grounded Cheats у 2026', h2b: 'ESP god mode, radar і Trainer в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і scav-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Grounded Cheats 2026 | ESP, God mode a Trainer', desc: 'Undetected Grounded cheaty pro Grounded na PC. ESP god mode, free crafting, Trainer, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Grounded Cheats — Undetected ESP, God mode a Trainer', intro: 'Undetected balíček pro Grounded na Windows PC: ESP god mode, radar, Trainer s údržbou Easy Anti-Cheat.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Galerie Grounded Cheats — ESP, Trainer, god mode', cta2: 'Zobrazit funkce', h2a: 'Proč Grounded Cheats v roce 2026', h2b: 'ESP god mode, radar a Trainer v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a scav-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Grounded Cheats 2026 | ESP, God mode și Trainer', desc: 'Cheats Grounded undetected pentru Grounded pe PC. ESP god mode, free crafting, Trainer, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Grounded Cheats — Undetected ESP, God mode și Trainer', intro: 'Pachet undetected Grounded pe Windows PC: ESP god mode, radar, Trainer cu mentenanță Easy Anti-Cheat.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Galerie Grounded Cheats — ESP, Trainer, god mode', cta2: 'Vezi funcții', h2a: 'De ce Grounded Cheats în 2026', h2b: 'ESP god mode, radar și Trainer într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și scav-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Grounded Cheats 2026 | ESP, God mode & Trainer', desc: 'Undetected Grounded cheats för Grounded på PC. ESP god mode, free crafting, Trainer, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Grounded Cheats — Undetected ESP, God mode & Trainer', intro: 'Undetected paket för Grounded på Windows PC: ESP god mode, radar, Trainer med Easy Anti-Cheat-underhåll.', imageAlt: 'Grounded ESP player tags hack', gallery: 'Grounded Cheats galleri — ESP, Trainer, god mode', cta2: 'Se funktioner', h2a: 'Varför Grounded Cheats 2026', h2b: 'ESP god mode, radar och Trainer i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och scav-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'grounded-god-mode': { suffix: 'Player Boxes & God mode', focus: 'player boxes, loot markers, and god mode overlays', altKeyword: 'ESP god mode overlay' },
	'grounded-trainer': { suffix: 'Soft Aim Controls', focus: 'trainer controls, FOV, and per-weapon Trainer profiles', altKeyword: 'trainer combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, trainer controls, radar controls', altKeyword: 'cheats package ESP trainer' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $99 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, trainer controls, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP trainer' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'god mode ESP for players, loot, and distance', altKeyword: 'god mode ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: 'item spawner cues for flanks and rotations', altKeyword: 'free crafting overlay' },
	'anti-cheat': { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for Grounded hacks', altKeyword: 'Easy Anti-Cheat bypass ESP trainer' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Grounded cheats checklist before checkout', altKeyword: 'cheats 2026 ESP trainer' },
	hacks: { suffix: 'ESP Trainer Guide', focus: 'the Grounded hacks pillar for ESP and Trainer', altKeyword: 'hacks ESP trainer' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP trainer' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and trainer controls toggles', altKeyword: 'mod menu ESP trainer' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth trainer controls settings for Windows PC', altKeyword: 'trainer controls trainer' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Grounded cheats', altKeyword: 'best cheats ESP trainer' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Trainer hack assist for Grounded', altKeyword: 'trainer hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack god mode' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Trainer tools', altKeyword: 'unlock all ESP trainer' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'grounded-god-mode': 'Cajas de jugador y god mode',
		'grounded-trainer': 'Controles trainer controls',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		'anti-cheat': 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Trainer',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes trainer controls',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia trainer controls',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'grounded-god-mode': 'Boîtes joueur et god mode',
		'grounded-trainer': 'Contrôles trainer controls',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		'anti-cheat': 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Trainer',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages trainer controls',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance trainer controls',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'grounded-god-mode': 'Spielerboxen & God mode',
		'grounded-trainer': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		'anti-cheat': 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Trainer Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'grounded-god-mode': 'Caixas de jogador e god mode',
		'grounded-trainer': 'Controles trainer controls',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		'anti-cheat': 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Trainer',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes trainer controls',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência trainer controls',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'grounded-god-mode': 'Box giocatore e god mode',
		'grounded-trainer': 'Controlli trainer controls',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		'anti-cheat': 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Trainer',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni trainer controls',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist trainer controls',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'grounded-god-mode': 'Боксы игроков и god mode',
		'grounded-trainer': 'Управление trainer controls',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		'anti-cheat': 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Trainer',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки trainer controls',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Trainer controls ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Grounded Cheats', focus: 'ESP god mode, radar, and Trainer', altKeyword: 'ESP trainer god mode' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Grounded Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'grounded-god-mode': { en: 'Grounded ESP', es: 'ESP Grounded', fr: 'ESP Grounded', de: 'Grounded ESP', pt: 'ESP Grounded', it: 'ESP Grounded', nl: 'Grounded ESP', pl: 'ESP Grounded', ru: 'ESP Grounded', tr: 'Grounded ESP', ar: 'ESP Grounded', ja: 'Grounded ESP', ko: 'Grounded ESP', zh: 'Grounded ESP', hi: 'Grounded ESP', id: 'ESP Grounded', th: 'Grounded ESP', vi: 'ESP Grounded', uk: 'ESP Grounded', cs: 'Grounded ESP', ro: 'ESP Grounded', sv: 'Grounded ESP' },
	'grounded-trainer': { en: 'Grounded Trainer', es: 'Trainer Grounded', fr: 'Trainer Grounded', de: 'Grounded Trainer', pt: 'Trainer Grounded', it: 'Trainer Grounded', nl: 'Grounded Trainer', pl: 'Trainer Grounded', ru: 'Trainer Grounded', tr: 'Grounded Trainer', ar: 'Trainer Grounded', ja: 'Grounded Trainer', ko: 'Grounded Trainer', zh: 'Grounded Trainer', hi: 'Grounded Trainer', id: 'Trainer Grounded', th: 'Grounded Trainer', vi: 'Trainer Grounded', uk: 'Trainer Grounded', cs: 'Grounded Trainer', ro: 'Trainer Grounded', sv: 'Grounded Trainer' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Grounded God mode', es: 'God mode Grounded', fr: 'God mode Grounded', de: 'Grounded God mode', pt: 'God mode Grounded', it: 'God mode Grounded', nl: 'Grounded God mode', pl: 'God mode Grounded', ru: 'God mode Grounded', tr: 'Grounded God mode', ar: 'God mode Grounded', ja: 'Grounded God mode', ko: 'Grounded God mode', zh: 'Grounded God mode', hi: 'Grounded God mode', id: 'God mode Grounded', th: 'Grounded God mode', vi: 'God mode Grounded', uk: 'God mode Grounded', cs: 'Grounded God mode', ro: 'God mode Grounded', sv: 'Grounded God mode' },
	radar: { en: 'Radar Hack', es: 'Free crafting', fr: 'Free crafting', de: 'Radar Hack', pt: 'Free crafting', it: 'Free crafting', nl: 'Radar Hack', pl: 'Free crafting', ru: 'Free crafting', tr: 'Free crafting', ar: 'Free crafting', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Free crafting', th: 'Radar Hack', vi: 'Free crafting', uk: 'Free crafting', cs: 'Radar Hack', ro: 'Free crafting', sv: 'Radar Hack' },
	'anti-cheat': { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Grounded Cheats 2026', es: 'Trucos Grounded 2026', fr: 'Triches Grounded 2026', de: 'Grounded Cheats 2026', pt: 'Cheats Grounded 2026', it: 'Cheat Grounded 2026', nl: 'Grounded Cheats 2026', pl: 'Cheaty Grounded 2026', ru: 'Читы Grounded 2026', tr: 'Grounded Hileleri 2026', ar: 'غش Grounded 2026', ja: 'Grounded Cheats 2026', ko: 'Grounded Cheats 2026', zh: 'Grounded作弊 2026', hi: 'Grounded Cheats 2026', id: 'Cheat Grounded 2026', th: 'Grounded Cheats 2026', vi: 'Cheat Grounded 2026', uk: 'Чіти Grounded 2026', cs: 'Grounded cheaty 2026', ro: 'Cheats Grounded 2026', sv: 'Grounded Cheats 2026' },
	hacks: { en: 'Grounded Cheats', es: 'Trucos Grounded', fr: 'Triches Grounded', de: 'Grounded Cheats', pt: 'Cheats Grounded', it: 'Cheat Grounded', nl: 'Grounded Cheats', pl: 'Cheaty Grounded', ru: 'Читы Grounded', tr: 'Grounded Hileleri', ar: 'غش Grounded', ja: 'Grounded Cheats', ko: 'Grounded Cheats', zh: 'Grounded作弊', hi: 'Grounded Cheats', id: 'Cheat Grounded', th: 'Grounded Cheats', vi: 'Cheat Grounded', uk: 'Чіти Grounded', cs: 'Grounded cheaty', ro: 'Cheats Grounded', sv: 'Grounded Cheats' },
	'cheat-download': { en: 'Grounded Cheat Download', es: 'Descarga Grounded Cheats', fr: 'Téléchargement Grounded Cheats', de: 'Grounded Cheat Download', pt: 'Download Grounded Cheats', it: 'Download Grounded Cheats', nl: 'Grounded Cheat Download', pl: 'Pobieranie Grounded Cheats', ru: 'Скачать Grounded Cheats', tr: 'Grounded Hile İndir', ar: 'تحميل Grounded Cheats', ja: 'Grounded Cheat Download', ko: 'Grounded Cheat Download', zh: 'Grounded作弊下载', hi: 'Grounded Cheat Download', id: 'Download Cheat Grounded', th: 'ดาวน์โหลด Grounded Cheats', vi: 'Tải Cheat Grounded', uk: 'Завантаження Grounded Cheats', cs: 'Stáhnout Grounded Cheats', ro: 'Descărcare Grounded Cheats', sv: 'Grounded Cheat Download' },
	'mod-menu': { en: 'Grounded Mod Menu', es: 'Menú mod Grounded', fr: 'Menu mod Grounded', de: 'Grounded Mod-Menü', pt: 'Menu mod Grounded', it: 'Mod menu Grounded', nl: 'Grounded Mod Menu', pl: 'Mod menu Grounded', ru: 'Мод-меню Grounded', tr: 'Grounded Mod Menü', ar: 'قائمة مود Grounded', ja: 'Grounded Mod Menu', ko: 'Grounded 모드 메뉴', zh: 'Grounded修改菜单', hi: 'Grounded Mod Menu', id: 'Menu mod Grounded', th: 'เมนูมอด Grounded', vi: 'Mod menu Grounded', uk: 'Мод-меню Grounded', cs: 'Grounded mod menu', ro: 'Meniu mod Grounded', sv: 'Grounded Mod-meny' },
	'soft-aim': { en: 'Grounded Soft Aim', es: 'Trainer controls Grounded', fr: 'Trainer controls Grounded', de: 'Grounded Soft Aim', pt: 'Trainer controls Grounded', it: 'Trainer controls Grounded', nl: 'Grounded Soft Aim', pl: 'Trainer controls Grounded', ru: 'Trainer controls Grounded', tr: 'Grounded Soft Aim', ar: 'Trainer controls Grounded', ja: 'Grounded Soft Aim', ko: 'Grounded Soft Aim', zh: 'Grounded Soft Aim', hi: 'Grounded Soft Aim', id: 'Trainer controls Grounded', th: 'Grounded Soft Aim', vi: 'Trainer controls Grounded', uk: 'Trainer controls Grounded', cs: 'Grounded Soft Aim', ro: 'Trainer controls Grounded', sv: 'Grounded Soft Aim' },
	'best-cheats': { en: 'Best Grounded Cheats', es: 'Mejores trucos Grounded', fr: 'Meilleures triches Grounded', de: 'Beste Grounded Cheats', pt: 'Melhores cheats Grounded', it: 'Migliori cheat Grounded', nl: 'Beste Grounded Cheats', pl: 'Najlepsze cheaty Grounded', ru: 'Лучшие читы Grounded', tr: 'En İyi Grounded Hileleri', ar: 'أفضل غش Grounded', ja: '最強Groundedチート', ko: '최고의 Grounded 치트', zh: '最佳Grounded作弊', hi: 'सर्वश्रेष्ठ Grounded Cheats', id: 'Cheat Grounded terbaik', th: 'Cheat Grounded ที่ดีที่สุด', vi: 'Cheat Grounded tốt nhất', uk: 'Найкращі чіти Grounded', cs: 'Nejlepší Grounded cheaty', ro: 'Cele mai bune cheats Grounded', sv: 'Bästa Grounded Cheats' },
	'aimbot-hack': { en: 'Grounded Trainer Hack', es: 'Hack trainer Grounded', fr: 'Hack trainer Grounded', de: 'Grounded Trainer Hack', pt: 'Hack trainer Grounded', it: 'Hack trainer Grounded', nl: 'Grounded Trainer Hack', pl: 'Hack trainer Grounded', ru: 'Хак trainer Grounded', tr: 'Grounded Trainer Hilesi', ar: 'هاك Trainer Grounded', ja: 'Grounded Trainer Hack', ko: 'Grounded 에임봇 핵', zh: 'Grounded自瞄外挂', hi: 'Grounded Trainer Hack', id: 'Hack trainer Grounded', th: 'Hack Trainer Grounded', vi: 'Hack trainer Grounded', uk: 'Хак trainer Grounded', cs: 'Grounded trainer hack', ro: 'Hack trainer Grounded', sv: 'Grounded Trainer Hack' },
	'esp-hack': { en: 'Grounded ESP Hack', es: 'Hack ESP Grounded', fr: 'Hack ESP Grounded', de: 'Grounded ESP Hack', pt: 'Hack ESP Grounded', it: 'Hack ESP Grounded', nl: 'Grounded ESP Hack', pl: 'Hack ESP Grounded', ru: 'Хак ESP Grounded', tr: 'Grounded ESP Hilesi', ar: 'هاك ESP Grounded', ja: 'Grounded ESP Hack', ko: 'Grounded ESP 핵', zh: 'Grounded ESP外挂', hi: 'Grounded ESP Hack', id: 'Hack ESP Grounded', th: 'Hack ESP Grounded', vi: 'Hack ESP Grounded', uk: 'Хак ESP Grounded', cs: 'Grounded ESP hack', ro: 'Hack ESP Grounded', sv: 'Grounded ESP Hack' },
	'unlock-all': { en: 'Grounded Unlock All', es: 'Unlock all Grounded', fr: 'Unlock all Grounded', de: 'Grounded Unlock All', pt: 'Unlock all Grounded', it: 'Unlock all Grounded', nl: 'Grounded Unlock All', pl: 'Unlock all Grounded', ru: 'Unlock all Grounded', tr: 'Grounded Unlock All', ar: 'Unlock all Grounded', ja: 'Grounded Unlock All', ko: 'Grounded Unlock All', zh: 'Grounded Unlock All', hi: 'Grounded Unlock All', id: 'Unlock all Grounded', th: 'Grounded Unlock All', vi: 'Unlock all Grounded', uk: 'Unlock all Grounded', cs: 'Grounded Unlock All', ro: 'Unlock all Grounded', sv: 'Grounded Unlock All' },
};

const CTA2_HREF = {
	'grounded-god-mode': '/grounded-cheats/',
	'grounded-trainer': '/grounded-god-mode/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/grounded-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/grounded-cheats/',
	wallhack: '/grounded-god-mode/',
	radar: '/grounded-god-mode/',
	'anti-cheat': '/updates/',
	'cheats-2026': '/grounded-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/grounded-trainer/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/grounded-trainer/',
	'esp-hack': '/grounded-god-mode/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Grounded Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Grounded Cheats — ESP god mode, Trainer, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for groundedcheats.com and Grounded licenses.`),
		imageAlt: 'grounded cheats',
		galleryTitle: 'grounded cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by our secure checkout partner — not stored on groundedcheats.com.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@groundedcheats.com',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
