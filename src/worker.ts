/**
 * Cloudflare Worker — host + path canonicalization before static assets.
 * Canonical site: https://groundedcheats.com (matches brand.url)
 *
 * Cannibal locale 301s live in functions/cannibal-redirects.json (not
 * public/_redirects) to stay under the Workers 100-rule _redirects cap.
 */
import CANNIBAL_REDIRECTS from '../functions/cannibal-redirects.json';

export interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_ORIGIN = 'https://groundedcheats.com';
const CANONICAL_HOST = 'groundedcheats.com';

/** Old apex still 301 → current canonical. */
const LEGACY_HOSTS = new Set(['bestgroundedcheats.com', 'www.bestgroundedcheats.com']);

const CANNIBAL_MAP = CANNIBAL_REDIRECTS as Record<string, string>;

function canonicalUrl(request: Request): URL | null {
	const url = new URL(request.url);
	const host = (request.headers.get('host') || url.hostname).split(':')[0].toLowerCase();
	let changed = false;

	if (url.protocol === 'http:') {
		url.protocol = 'https:';
		changed = true;
	}

	if (
		host === `www.${CANONICAL_HOST}` ||
		url.hostname === `www.${CANONICAL_HOST}` ||
		LEGACY_HOSTS.has(host)
	) {
		url.hostname = CANONICAL_HOST;
		changed = true;
	}

	return changed ? url : null;
}

function pathRedirect(pathname: string): string | null {
	return CANNIBAL_MAP[pathname] ?? null;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const hostTarget = canonicalUrl(request);
		if (hostTarget) {
			return Response.redirect(hostTarget.toString(), 301);
		}

		const url = new URL(request.url);
		const redirectPath = pathRedirect(url.pathname);
		if (redirectPath) {
			const target = new URL(redirectPath + url.search, CANONICAL_ORIGIN);
			return Response.redirect(target.toString(), 301);
		}

		return env.ASSETS.fetch(request);
	},
};
