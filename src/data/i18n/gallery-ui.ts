import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'grounded cheats',
		title: 'grounded cheats gallery',
		subtitle: 'Simple grounded cheats visuals — ESP, god mode, trainer, and radar for Grounded on PC.',
		lead: 'Grounded Cheats helps you spot players, insects, loot, and base camps with ESP, trainer, and radar in one license.',
		highlights: [
			{ title: 'grounded cheats esp', copy: 'See players through walls with grounded cheats esp and god mode overlays.' },
			{ title: 'grounded cheats radar', copy: 'Track nearby threats with grounded cheats radar before you push or base camp.' },
			{ title: 'grounded cheats trainer', copy: 'Use trainer controls and trainer controls tuned for Grounded sessions on Windows PC.' },
		],
		updatesLabel: 'grounded cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Grounded Cheats',
		title: 'Galería Grounded',
		subtitle: 'Visuales de Grounded con loadouts, peleas de escuadrón y combate session — junto a herramientas ESP, radar y Trainer.',
		lead: 'Grounded Cheats está pensado para el loop BR de Grounded: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al base camp.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Customs y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Trainer Grounded', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Grounded Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Grounded Cheats',
		title: 'Galerie Grounded',
		subtitle: 'Visuels Grounded — loadouts, combats d\'escouade et session — avec ESP, radar et Trainer.',
		lead: 'Grounded Cheats suit la boucle BR de Grounded : lire la carte, suivre les escouades, loot et survivre au base camp.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Customs et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Trainer Grounded', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Grounded Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Grounded Cheats',
		title: 'Grounded Galerie',
		subtitle: 'Grounded-Bilder zu Loadouts, Squad-Kämpfen und session — mit ESP, Radar und Trainer.',
		lead: 'Grounded Cheats passt zur Raid-Schleife von Grounded: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Customs und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Grounded Trainer Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Grounded Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Grounded Cheats',
		title: 'Galeria Grounded',
		subtitle: 'Visuais de Grounded com loadouts, combates de esquadrão e session — com ESP, radar e Trainer.',
		lead: 'Grounded Cheats segue o loop BR do Grounded: ler o mapa, rastrear esquadrões, lootar e sobreviver ao base camp.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Customs e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Trainer Grounded', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Grounded Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Grounded Cheats',
		title: 'Galleria Grounded',
		subtitle: 'Immagini Grounded — loadout, scontri di squadra e session — con ESP, radar e Trainer.',
		lead: 'Grounded Cheats è pensato per il loop BR di Grounded: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al base camp.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Customs e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Trainer Grounded', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Grounded Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Grounded Cheats',
		title: 'Grounded galerij',
		subtitle: 'Grounded-beelden van loadouts, squadgevechten en session — met ESP, radar en Trainer.',
		lead: 'Grounded Cheats volgt de session-loop van Grounded: kaart lezen, vijandelijke squads volgen, looten en de base camp overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Grounded Trainer instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Grounded Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Grounded Cheats',
		title: 'Galeria Grounded',
		subtitle: 'Grafiki Grounded — loadouty, walki drużynowe i session — z ESP, radar i Trainer.',
		lead: 'Grounded Cheats pasuje do pętli BR Grounded: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj base camp.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Customs i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Trainer Grounded', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Grounded Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Grounded Cheats',
		title: 'Галерея Grounded',
		subtitle: 'Визуалы Grounded — лоадауты, бои отрядов и session — с ESP, радаром и Trainer.',
		lead: 'Grounded Cheats создан для рейд-циклу Grounded: читать карту, отслеживать вражеские отряды, лут и выживать в base camp.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Customs и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Trainer Grounded', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Grounded Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Grounded Cheats',
		title: 'Grounded galerisi',
		subtitle: 'Loadout, takım savaşları ve session görselleri — ESP, radar ve Trainer ile.',
		lead: 'Grounded Cheats, Grounded BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve base camp\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Customs ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Grounded Trainer kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Grounded Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Grounded Cheats',
		title: 'معرض Grounded',
		subtitle: 'صور Grounded — loadouts ومعارك الفرق وsession — مع ESP ورادار وTrainer.',
		lead: 'Grounded Cheats مبني لحلقة BR في Grounded: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في base camp.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Trainer Grounded', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Grounded Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Grounded Cheats',
		title: 'Grounded ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのGroundedビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Grounded CheatsはGroundedのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてbase campを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Customsとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Groundedエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Grounded Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Grounded Cheats',
		title: 'Grounded 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Grounded 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Grounded Cheats는 Grounded BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, base camp 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Customs와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Grounded 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Grounded Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Grounded Cheats',
		title: 'Grounded 图库',
		subtitle: 'Grounded 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Grounded Cheats 为 Grounded BR 循环设计：读图、追踪敌方小队、搜刮并在 base camp 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Customs 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Grounded 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Grounded Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Grounded Cheats',
		title: 'Grounded गैलरी',
		subtitle: 'Loadout, squad fights और session visuals — ESP, radar और Trainer के साथ।',
		lead: 'Grounded Cheats Grounded BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और base camp survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Grounded Trainer Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Grounded Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Grounded Cheats',
		title: 'Galeri Grounded',
		subtitle: 'Visual Grounded — loadout, pertempuran squad, dan session — dengan ESP, radar, dan Trainer.',
		lead: 'Grounded Cheats untuk loop BR Grounded: baca peta, lacak squad musuh, loot, dan selamat di base camp.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Trainer Grounded', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Grounded Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Grounded Cheats',
		title: 'แกลเลอรี Grounded',
		subtitle: 'ภาพ Grounded — loadout การต่อสู้ทีม และ session — พร้อม ESP เรดาร์และ Trainer',
		lead: 'Grounded Cheats สำหรับลูป BR ของ Grounded: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด base camp',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Trainer Grounded', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Grounded Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Grounded Cheats',
		title: 'Thư viện Grounded',
		subtitle: 'Hình ảnh Grounded — loadout, chiến đấu squad và session — với ESP, radar và Trainer.',
		lead: 'Grounded Cheats cho vòng BR Grounded: đọc bản đồ, theo dõi squad địch, loot và sống sót base camp.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Trainer Grounded', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Grounded Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Grounded Cheats',
		title: 'Галерея Grounded',
		subtitle: 'Візуали Grounded — loadout, бої загонів і session — з ESP, радаром і Trainer.',
		lead: 'Grounded Cheats для рейд-циклу Grounded: читати карту, відстежувати ворожі загони, лут і виживати в base camp.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Trainer Grounded', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Grounded Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Grounded Cheats',
		title: 'Galerie Grounded',
		subtitle: 'Grounded vizuály — loadouty, squad souboje a session — s ESP, radarem a Trainer.',
		lead: 'Grounded Cheats pro BR smyčku Grounded: číst mapu, sledovat nepřátelské squady, loot a přežít base camp.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Trainer Grounded', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Grounded Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Grounded Cheats',
		title: 'Galerie Grounded',
		subtitle: 'Vizualuri Grounded — loadout, lupte de squad și session — cu ESP, radar și Trainer.',
		lead: 'Grounded Cheats pentru bucla BR Grounded: citește harta, urmărește squad-uri inamice, loot și supraviețuiește base camp.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Trainer Grounded', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Grounded Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Grounded Cheats',
		title: 'Grounded galleri',
		subtitle: 'Grounded-bilder — loadouts, squadstrider och session — med ESP, radar och Trainer.',
		lead: 'Grounded Cheats för Grounded:s session-loop: läs kartan, spåra fiendesquads, loota och överlev base camp.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Grounded Trainer-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Grounded Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
