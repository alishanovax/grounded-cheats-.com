import CANNIBAL_REDIRECTS from './cannibal-redirects.json';

const CANONICAL_ORIGIN = 'https://groundedcheats.com';
const APEX_HOST = 'groundedcheats.com';
const WWW_HOST = 'www.groundedcheats.com';

/** Legacy domains → canonical apex (301). */
const LEGACY_HOSTS = new Set([
	'bestgroundedcheats.com',
	'www.bestgroundedcheats.com',
	'fortnitehack.net',
	'www.fortnitehack.net',
	'fortnitecheats.xyz',
	'www.fortnitecheats.xyz',
	'fortnitecheats.net',
	'www.fortnitecheats.net',
	'fortnitecheats.com',
	'www.fortnitecheats.com',
	'warzonehacks.net',
	'www.warzonehacks.net',
	'warzonescheats.net',
	'www.warzonescheats.net',
	'warzonescheats.com',
	'www.warzonescheats.com',
	'warzonescheats.xyz',
	'www.warzonescheats.xyz',
]);

// Keep in sync with functions/cannibal-redirects.json + src/worker.ts (locale cannibal 301s).
const PATH_REDIRECTS = {
	'/sitemap-0.xml': '/sitemap.xml',
	'/sitemap-index.xml': '/sitemap.xml',
	'/sitemap.xml/': '/sitemap.xml',
	'/sitemap-en.xml/': '/sitemap-en.xml',
	'/sitemap-i18n.xml/': '/sitemap-i18n.xml',
	'/sitemap-images.xml/': '/sitemap-images.xml',
	// Exact-match keyword → pillar (not homepage)
	'/escape-from-grounded-cheats': '/grounded-cheats/',
	'/escape-from-grounded-cheats/': '/grounded-cheats/',
	// Cannibalization → canonical landings (money URL = /grounded-cheats/)
	'/grounded-noclip': '/grounded-god-mode/',
	'/grounded-noclip/': '/grounded-god-mode/',
	'/grounded-super-damage': '/grounded-trainer/',
	'/grounded-super-damage/': '/grounded-trainer/',
	'/best-grounded-cheats': '/grounded-cheats/',
	'/best-grounded-cheats/': '/grounded-cheats/',
	'/grounded-cheats-2026': '/grounded-cheats/',
	'/grounded-cheats-2026/': '/grounded-cheats/',
	'/undetected-grounded-cheats': '/grounded-cheats/',
	'/undetected-grounded-cheats/': '/grounded-cheats/',
	'/grounded-mod-menu': '/grounded-cheats/',
	'/grounded-mod-menu/': '/grounded-cheats/',
	'/grounded-unlock-all': '/grounded-cheats/',
	'/grounded-unlock-all/': '/grounded-cheats/',
	'/grounded-infinite-health': '/grounded-trainer/',
	'/grounded-infinite-health/': '/grounded-trainer/',
	'/grounded-cheat-engine': '/grounded-god-mode/',
	'/grounded-cheat-engine/': '/grounded-god-mode/',
	'/grounded-trainer-download': '/setup/',
	'/grounded-trainer-download/': '/setup/',
	'/anti-cheat-bypass': '/updates/',
	'/anti-cheat-bypass/': '/updates/',
	'/warzone-cheats': '/grounded-cheats/',
	'/warzone-cheats/': '/grounded-cheats/',
	'/warzone-hacks': '/grounded-cheats/',
	'/warzone-hacks/': '/grounded-cheats/',
	'/warzone-esp': '/grounded-god-mode/',
	'/warzone-esp/': '/grounded-god-mode/',
	'/warzone-trainer': '/grounded-trainer/',
	'/warzone-trainer/': '/grounded-trainer/',
	'/ricochet-bypass': '/updates/',
	'/ricochet-bypass/': '/updates/',
	'/fortnite-trainer': '/grounded-trainer/',
	'/fortnite-trainer/': '/grounded-trainer/',
	'/fortnite-esp': '/grounded-god-mode/',
	'/fortnite-esp/': '/grounded-god-mode/',
	'/fortnite-hacks': '/grounded-cheats/',
	'/fortnite-hacks/': '/grounded-cheats/',
	'/eac-bypass': '/updates/',
	'/eac-bypass/': '/updates/',
	'/eac-bypass-fortnite': '/updates/',
	'/eac-bypass-fortnite/': '/updates/',
	'/blog/patch-notes-buffs-nerfs-vaults': '/blog/grounded-patch-notes-guide/',
	'/blog/patch-notes-buffs-nerfs-vaults/': '/blog/grounded-patch-notes-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks': '/blog/grounded-skin-leaks-guide/',
	'/blog/chapter-7-season-3-skin-leaks-vbucks/': '/blog/grounded-skin-leaks-guide/',
	'/blog/hammer-ar-s-tier-data-analysis': '/blog/grounded-weapon-tier-list/',
	'/blog/hammer-ar-s-tier-data-analysis/': '/blog/grounded-weapon-tier-list/',
	'/blog/zero-build-meta-broken-aggressive-strategies': '/blog/grounded-scav-run-aggressive-strategies/',
	'/blog/zero-build-meta-broken-aggressive-strategies/': '/blog/grounded-scav-run-aggressive-strategies/',
	'/blog/fncs-meta-watch-tournament-drops': '/blog/grounded-tournament-meta-guide/',
	'/blog/fncs-meta-watch-tournament-drops/': '/blog/grounded-tournament-meta-guide/',
	'/blog/secret-loot-routes-full-gold': '/blog/grounded-loot-routes-guide/',
	'/blog/secret-loot-routes-full-gold/': '/blog/grounded-loot-routes-guide/',
	'/blog/bugha-settings-pro-setup': '/blog/grounded-pro-settings-guide/',
	'/blog/bugha-settings-pro-setup/': '/blog/grounded-pro-settings-guide/',
	'/blog/creative-warmup-maps-pros-use': '/blog/grounded-warmup-maps-ranked/',
	'/blog/creative-warmup-maps-pros-use/': '/blog/grounded-warmup-maps-ranked/',
	'/reviews/grounded-god-mode-zero-build-review-buildsr4k': '/reviews/grounded-god-mode-scav-run-review-buildsr4k/',
	'/reviews/grounded-god-mode-zero-build-review-buildsr4k/': '/reviews/grounded-god-mode-scav-run-review-buildsr4k/',
	'/reviews/grounded-free-crafting-review-vanlifefn': '/reviews/grounded-free-crafting-review-vanlifeeft/',
	'/reviews/grounded-free-crafting-review-vanlifefn/': '/reviews/grounded-free-crafting-review-vanlifeeft/',
	'/reviews/grounded-free-crafting-review-vanlifewz': '/reviews/grounded-free-crafting-review-vanlifeeft/',
	'/reviews/grounded-free-crafting-review-vanlifewz/': '/reviews/grounded-free-crafting-review-vanlifeeft/',
	'/reviews/grounded-controller-soft-aim-review-ctrl-player99': '/reviews/grounded-infinite-health-review-ctrl-player99/',
	'/reviews/grounded-controller-soft-aim-review-ctrl-player99/': '/reviews/grounded-infinite-health-review-ctrl-player99/',
};

const SECURITY_HEADERS = {
	'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'X-Frame-Options': 'DENY',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Cross-Origin-Embedder-Policy': 'credentialless',
	'Origin-Agent-Cluster': '?1',
	'Permissions-Policy':
		'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()',
	'Content-Security-Policy': [
		"default-src 'self'",
		"base-uri 'self'",
		"object-src 'none'",
		"frame-ancestors 'none'",
		"form-action 'self' https://zadeyo.com",
		"img-src 'self' data: blob: https:",
		"font-src 'self' data:",
		"style-src 'self' 'unsafe-inline'",
		"script-src 'self'",
		"connect-src 'self'",
		"upgrade-insecure-requests",
		"trusted-types default",
		"require-trusted-types-for 'script'",
	].join('; '),
};

function getClientProtocol(request) {
	const visitor = request.headers.get('cf-visitor');
	if (visitor) {
		try {
			const scheme = JSON.parse(visitor).scheme;
			if (scheme) return String(scheme).toLowerCase();
		} catch {
			// ignore malformed cf-visitor
		}
	}

	const forwarded = request.headers.get('x-forwarded-proto');
	if (forwarded) {
		return forwarded.split(',')[0].trim().toLowerCase();
	}

	return new URL(request.url).protocol.replace(':', '').toLowerCase();
}

function applySecurityHeaders(headers, { html = false } = {}) {
	for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
		headers.set(key, value);
	}

	if (html) {
		const contentType = headers.get('Content-Type') || '';
		if (!/charset=/i.test(contentType)) {
			headers.set('Content-Type', 'text/html; charset=utf-8');
		}
		// Browser always revalidates; Cloudflare edge caches briefly for TTFB.
		headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
		headers.set('CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
		headers.set('Cloudflare-CDN-Cache-Control', 'public, s-maxage=600, stale-while-revalidate=86400');
	}
}

/** Flat .xml sitemaps — redirect any other *.xml/ trailing-slash URL (locale sitemaps). */
function xmlTrailingSlashRedirect(pathname) {
	if (!pathname.endsWith('.xml/')) return null;
	return pathname.slice(0, -1);
}

/** Add trailing slash for directory-style paths (matches Astro trailingSlash: 'always'). */
function trailingSlashRedirect(pathname) {
	if (!pathname || pathname === '/' || pathname.includes('.') || pathname.endsWith('/')) {
		return null;
	}
	return `${pathname}/`;
}

export async function onRequest(context) {
	const url = new URL(context.request.url);
	const host = url.hostname.toLowerCase();
	const proto = getClientProtocol(context.request);

	const isLegacyHost = LEGACY_HOSTS.has(host);
	const isProductionHost = host === APEX_HOST || host === WWW_HOST || isLegacyHost;
	const needsHostRedirect = host === WWW_HOST || isLegacyHost;
	const needsHttpsRedirect = isProductionHost && proto === 'http';

	if (needsHostRedirect || needsHttpsRedirect) {
		const mappedPath = PATH_REDIRECTS[url.pathname] ?? url.pathname;
		const target = new URL(mappedPath + url.search, CANONICAL_ORIGIN);
		const headers = new Headers({
			Location: target.toString(),
			'Cache-Control': 'no-store',
			'CDN-Cache-Control': 'no-store',
			'Cloudflare-CDN-Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const pathRedirect =
		PATH_REDIRECTS[url.pathname] ??
		CANNIBAL_REDIRECTS[url.pathname] ??
		xmlTrailingSlashRedirect(url.pathname) ??
		trailingSlashRedirect(url.pathname);
	if (pathRedirect) {
		const headers = new Headers({
			Location: new URL(pathRedirect + url.search, CANONICAL_ORIGIN).toString(),
			'Cache-Control': 'no-store',
		});
		applySecurityHeaders(headers);
		return new Response(null, { status: 301, headers });
	}

	const response = await context.next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	applySecurityHeaders(headers, { html: isHtml });

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
