import type { LocaleCode } from '../i18n/locales';

export type GuideSection = {
	h2: string;
	paragraphs: string[];
};

export type ExternalGuideTranslation = {
	slug: string;
	title: string;
	metaDescription: string;
	h1: string;
	intro: string;
	keywords: string[];
	imageAlt: string;
	sections: GuideSection[];
	/** Single closing paragraph with one external link — rendered after all sections. */
	closing: string;
};

export type ExternalGuidePost = {
	id: string;
	game: string;
	externalUrl: string;
	imageSrc: string;
	published: string;
	updated: string;
	translations: { en: ExternalGuideTranslation };
};

export type ResolvedExternalGuide = ExternalGuidePost & {
	locale: LocaleCode;
	translation: ExternalGuideTranslation;
	canonicalPath: string;
};

export type NativeGuideLink = {
	title: string;
	intro: string;
	href: string;
	imageSrc: string;
	imageAlt: string;
	category: string;
};
