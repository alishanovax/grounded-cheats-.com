/**
 * SVG overlay generators for Grounded cheats marketing images.
 * Composited on top of IGN Grounded gameplay screenshots.
 */

const ACCENT = '#8bc34a';
const RED = '#f87171';
const GREEN = '#4ade80';
const LIME = '#aed581';

function esc(text) {
	return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

export function statusBox(x, y, w, h, label, color = GREEN) {
	const tag = esc(label);
	return `
		<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${color}" stroke-width="2.5"/>
		<rect x="${x}" y="${y - 24}" width="${Math.max(72, tag.length * 7.5 + 16)}" height="22" fill="rgba(8,16,4,0.82)" rx="3"/>
		<text x="${x + 8}" y="${y - 8}" fill="${color}" font-family="Segoe UI,Arial,sans-serif" font-size="13" font-weight="700">${tag}</text>
	`;
}

export function modMenuOverlay(w, h) {
	const pw = Math.round(w * 0.26);
	const ph = Math.round(h * 0.72);
	const x = Math.round(w * 0.69);
	const y = Math.round(h * 0.12);
	const rows = [
		['God Mode', true],
		['Infinite Health', true],
		['Free Crafting', true],
		['Unlimited Items', true],
		['No Hunger', true],
		['Noclip', false],
	];
	const rowSvg = rows
		.map(([label, on], i) => {
			const ry = y + 52 + i * 34;
			const toggleColor = on ? GREEN : '#64748b';
			return `
				<text x="${x + 14}" y="${ry + 14}" fill="#d9f99d" font-family="Segoe UI,Arial,sans-serif" font-size="13">${esc(label)}</text>
				<rect x="${x + pw - 38}" y="${ry}" width="28" height="16" fill="rgba(0,0,0,0.4)" stroke="${toggleColor}" stroke-width="1.5" rx="8"/>
				<circle cx="${x + pw - (on ? 24 : 32)}" cy="${ry + 8}" r="6" fill="${toggleColor}"/>
			`;
		})
		.join('');
	return `
		<rect x="${x}" y="${y}" width="${pw}" height="${ph}" fill="rgba(6,12,4,0.92)" stroke="${ACCENT}" stroke-width="2" rx="10"/>
		<text x="${x + 14}" y="${y + 28}" fill="${ACCENT}" font-family="Segoe UI,Arial,sans-serif" font-size="15" font-weight="800">GROUNDED TRAINER</text>
		<text x="${x + 14}" y="${y + 44}" fill="#94a3b8" font-family="Segoe UI,Arial,sans-serif" font-size="11">MOD MENU · v2026</text>
		<line x1="${x + 10}" y1="${y + 50}" x2="${x + pw - 10}" y2="${y + 50}" stroke="rgba(139,195,74,0.35)" stroke-width="1"/>
		${rowSvg}
	`;
}

export function itemPanel(w, h) {
	const size = Math.round(Math.min(w, h) * 0.2);
	const x = Math.round(w * 0.04);
	const y = Math.round(h - size - h * 0.06);
	return `
		<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="rgba(6,12,4,0.88)" stroke="${ACCENT}" stroke-width="2" rx="6"/>
		<text x="${x + 10}" y="${y + 20}" fill="${ACCENT}" font-family="Segoe UI,Arial,sans-serif" font-size="11" font-weight="700">ITEM SPAWNER</text>
		<text x="${x + 10}" y="${y + 42}" fill="${LIME}" font-family="Segoe UI,Arial,sans-serif" font-size="12">Pebblet ×99</text>
		<text x="${x + 10}" y="${y + 60}" fill="${LIME}" font-family="Segoe UI,Arial,sans-serif" font-size="12">Sprig ×99</text>
		<text x="${x + 10}" y="${y + 78}" fill="${LIME}" font-family="Segoe UI,Arial,sans-serif" font-size="12">Plant Fiber ×99</text>
	`;
}

export function hacksBadge(w, h) {
	return `
		<rect x="${w - 178}" y="${h - 36}" width="168" height="26" fill="rgba(6,12,4,0.82)" rx="4"/>
		<text x="${w - 170}" y="${h - 18}" fill="${ACCENT}" font-family="Segoe UI,Arial,sans-serif" font-size="12" font-weight="700">GROUNDED CHEATS</text>
	`;
}

export function buildOverlaySvg(width, height, preset) {
	let body = '';

	switch (preset) {
		case 'hero':
			body += statusBox(width * 0.52, height * 0.22, width * 0.12, height * 0.28, 'GOD MODE ON', GREEN);
			body += statusBox(width * 0.28, height * 0.35, width * 0.09, height * 0.22, 'HP: ∞', LIME);
			body += modMenuOverlay(width, height);
			body += itemPanel(width, height);
			break;
		case 'godmode':
			body += statusBox(width * 0.22, height * 0.3, width * 0.1, height * 0.28, 'GOD MODE', GREEN);
			body += statusBox(width * 0.55, height * 0.2, width * 0.11, height * 0.3, 'NO HIT', ACCENT);
			body += statusBox(width * 0.4, height * 0.55, width * 0.08, height * 0.12, 'HP: ∞', LIME);
			break;
		case 'crafting':
			body += statusBox(width * 0.3, height * 0.4, width * 0.1, height * 0.14, 'FREE CRAFT', GREEN);
			body += statusBox(width * 0.55, height * 0.32, width * 0.1, height * 0.14, 'UNLOCK ALL', ACCENT);
			body += modMenuOverlay(width, height);
			break;
		case 'items':
			body += itemPanel(width, height);
			body += statusBox(width * 0.44, height * 0.22, width * 0.09, height * 0.24, 'STACK ×99', LIME);
			break;
		case 'menu':
			body += modMenuOverlay(width, height);
			break;
		case 'esp':
			body += statusBox(width * 0.18, height * 0.25, width * 0.11, height * 0.32, 'Spider · 12m', RED);
			body += statusBox(width * 0.45, height * 0.18, width * 0.1, height * 0.28, 'Ladybug · 24m', RED);
			break;
		case 'aimbot':
		case 'trainer':
			body += statusBox(width * 0.58, height * 0.28, width * 0.1, height * 0.26, 'SUPER DMG', RED);
			body += modMenuOverlay(width, height);
			break;
		case 'wallhack':
		case 'god mode':
			body += statusBox(width * 0.22, height * 0.3, width * 0.1, height * 0.28, 'GOD MODE', GREEN);
			body += statusBox(width * 0.55, height * 0.2, width * 0.11, height * 0.3, 'INFINITE HP', LIME);
			break;
		case 'radar':
			body += itemPanel(width, height);
			break;
		case 'loot':
			body += itemPanel(width, height);
			body += statusBox(width * 0.44, height * 0.22, width * 0.09, height * 0.24, 'AUTO PICKUP', ACCENT);
			break;
		case 'map':
			body += statusBox(width * 0.35, height * 0.4, width * 0.08, height * 0.12, 'BASE', GREEN);
			body += statusBox(width * 0.55, height * 0.32, width * 0.07, height * 0.1, 'OAK TREE', ACCENT);
			break;
		default:
			body += statusBox(width * 0.4, height * 0.3, width * 0.1, height * 0.26, 'TRAINER ON', GREEN);
			body += modMenuOverlay(width, height);
	}

	body += hacksBadge(width, height);
	return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}
