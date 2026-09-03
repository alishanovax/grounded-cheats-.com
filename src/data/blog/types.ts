import type { LocaleCode } from '../i18n/locales';

export type BlogImageKey =
	| 'blog01'
	| 'blog02'
	| 'blog03'
	| 'blog04'
	| 'blog05'
	| 'blog06'
	| 'blog07'
	| 'blog08'
	| 'blog09'
	| 'blog10'
	| 'blog11'
	| 'blog12'
	| 'blog13'
	| 'blog14'
	| 'blog15'
	| 'blog16'
	| 'blog17'
	| 'blog18'
	| 'blog19'
	| 'blog20'
	| 'blog21'
	| 'blog22'
	| 'blog23'
	| 'blog24'
	| 'blog25'
	| 'blog26'
	| 'blog27'
	| 'blog28'
	| 'blog29'
	| 'blog30';

export type BlogSection = {
	h2: string;
	paragraphs: string[];
};

export type BlogTranslation = {
	slug: string;
	title: string;
	metaDescription: string;
	h1: string;
	intro: string;
	keywords: string[];
	imageAlt: string;
	sections: BlogSection[];
};

export type BlogPostDefinition = {
	id: string;
	imageKey: BlogImageKey;
	published: string;
	updated: string;
	category: string;
	featured?: boolean;
	/** Prefer full locale map; helpers clone `en` into any missing locales. */
	translations: Partial<Record<LocaleCode, BlogTranslation>> & { en: BlogTranslation };
};

export type ResolvedBlogPost = BlogPostDefinition & {
	locale: LocaleCode;
	translation: BlogTranslation;
	imageSrc: string;
	canonicalPath: string;
};
