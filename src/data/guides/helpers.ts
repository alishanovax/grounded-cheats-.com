import { siteConfig } from '../site';
import { defaultLocale, type LocaleCode } from '../i18n/locales';
import { getAllPostsForLocale } from '../blog/helpers';
import { blogImagePaths } from '../blog/blog-images';
import { getLocalizedPath } from '../i18n/routing';
import type { ExternalGuidePost, NativeGuideLink, ResolvedExternalGuide } from './types';
import { externalGuidePosts as rawPosts } from './posts.generated';
import { externalGuideShuffleOrder } from './shuffle-order.generated';

export const externalGuidePosts: ExternalGuidePost[] = rawPosts;

export function getGuidesBasePath(_locale: LocaleCode = defaultLocale): string {
	return '/guides/';
}

export function getGuidePostPath(slug: string): string {
	return `/guides/${slug}/`;
}

export function absoluteGuideUrl(slug?: string): string {
	const p = slug ? getGuidePostPath(slug) : getGuidesBasePath();
	return new URL(p, siteConfig.url).href;
}

export function resolveExternalGuide(post: ExternalGuidePost, locale: LocaleCode = defaultLocale): ResolvedExternalGuide {
	const translation = post.translations.en;
	return {
		...post,
		locale,
		translation,
		canonicalPath: getGuidePostPath(translation.slug),
	};
}

export function getExternalGuideBySlug(slug: string): ResolvedExternalGuide | undefined {
	const post = externalGuidePosts.find((p) => p.translations.en.slug === slug);
	return post ? resolveExternalGuide(post) : undefined;
}

export function getShuffledExternalGuides(locale: LocaleCode = defaultLocale): ResolvedExternalGuide[] {
	const byId = new Map(externalGuidePosts.map((p) => [p.id, resolveExternalGuide(p, locale)]));
	return externalGuideShuffleOrder.map((id) => byId.get(id)).filter(Boolean) as ResolvedExternalGuide[];
}

/** Grounded-native guides — links to existing blog posts and product pages (read-only; blog unchanged). */
export function getNativeGroundedGuides(locale: LocaleCode = defaultLocale): NativeGuideLink[] {
	const blogLinks: NativeGuideLink[] = getAllPostsForLocale(locale).map((post) => ({
		title: post.translation.title,
		intro: post.translation.intro,
		href: post.canonicalPath,
		imageSrc: post.imageSrc,
		imageAlt: post.translation.imageAlt,
		category: post.category,
	}));

	const productPages: NativeGuideLink[] = [
		{
			title: 'Grounded Cheats Setup',
			intro: 'Step-by-step install and loader setup for Windows PC.',
			href: getLocalizedPath('setup', locale),
			imageSrc: blogImagePaths.blog05,
			imageAlt: 'Grounded cheats setup guide',
			category: 'Setup',
		},
		{
			title: 'Grounded Trainer Features',
			intro: 'Full trainer toggle list — god mode, stamina, crafting, and more.',
			href: getLocalizedPath('grounded-trainer', locale),
			imageSrc: blogImagePaths.blog01,
			imageAlt: 'Grounded trainer feature overview',
			category: 'Trainer',
		},
		{
			title: 'Grounded Hacks & ESP',
			intro: 'What ships in the license — ESP, aim assist, radar, and combat tools.',
			href: getLocalizedPath('hacks', locale),
			imageSrc: blogImagePaths.blog12,
			imageAlt: 'Grounded hacks package overview',
			category: 'Cheats',
		},
	];

	return [...productPages, ...blogLinks];
}

export function getAllExternalGuideStaticPaths() {
	return externalGuidePosts.map((post) => ({
		params: { slug: post.translations.en.slug },
		props: { post: resolveExternalGuide(post) },
	}));
}
