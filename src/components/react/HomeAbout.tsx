import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
	checkoutUrl: string;
	monthlyPrice: number;
};

const features = [
	{ key: 'featTrainer', href: '/grounded-trainer/', icon: 'trainer' },
	{ key: 'featGodMode', href: '/grounded-god-mode/', icon: 'godmode' },
	{ key: 'featCrafting', href: '/grounded-free-crafting/', icon: 'crafting' },
	{ key: 'featModMenu', href: '/grounded-mod-menu/', icon: 'menu' },
] as const;

const guides = [
	{ key: 'aboutPillar', href: '/grounded-cheats/' },
	{ key: 'aboutEsp', href: '/grounded-god-mode/' },
	{ key: 'aboutTrainer', href: '/grounded-trainer/' },
	{ key: 'aboutUndetected', href: '/updates/' },
] as const;

function FeatureIcon({ icon }: { icon: string }) {
	if (icon === 'trainer') {
		return (
			<path
				d="M12 4.5l1.7 4.8H19l-4 3.1 1.5 4.8L12 14.8 7.5 17.2 9 12.4 5 9.3h5.3L12 4.5z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		);
	}
	if (icon === 'godmode') {
		return (
			<>
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
				<path d="M12 8.5v3.2L14.2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</>
		);
	}
	if (icon === 'crafting') {
		return (
			<path
				d="M7 17h10M9 17V9.5l3-2.5 3 2.5V17M8 7.5h8l-1.2-3H9.2L8 7.5z"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		);
	}
	return (
		<path
			d="M5 7h14v10H5V7zm3 3h3M14 10h3M11 13h6"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
		/>
	);
}

function HomeAboutInner({ checkoutUrl, monthlyPrice }: Omit<Props, 'locale'>) {
	const { t } = useTranslation();

	return (
		<section className="home-intro" aria-labelledby="home-about-title">
			<div className="shell home-intro__inner">
				<header className="home-intro__head">
					<p className="home-intro__eyebrow">{t('home.aboutEyebrow')}</p>
					<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
					<p className="home-intro__lede">{t('home.aboutP1')}</p>
				</header>

				<ul className="home-intro__grid">
					{features.map((item) => (
						<li key={item.key}>
							<a className="home-intro__card" href={item.href}>
								<span className="home-intro__card-icon" aria-hidden="true">
									<svg viewBox="0 0 24 24" fill="none">
										<FeatureIcon icon={item.icon} />
									</svg>
								</span>
								<span className="home-intro__card-text">
									<strong>{t(`home.${item.key}Title`)}</strong>
									<span>{t(`home.${item.key}Hint`)}</span>
								</span>
								<span className="home-intro__card-arrow" aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>

				<div className="home-intro__guides">
					<p className="home-intro__guides-label">{t('home.aboutGuidesLabel')}</p>
					<nav className="home-intro__chips" aria-label={t('home.aboutGuidesLabel')}>
						{guides.map((item) => (
							<a key={item.key} href={item.href}>
								{t(`home.${item.key}`)}
							</a>
						))}
					</nav>
				</div>

				<div className="home-intro__cta">
					<a className="home-intro__buy" href={checkoutUrl} rel="noopener noreferrer">
						{t('cta.buy')}
						<span className="home-intro__buy-price">
							{t('hero.priceFrom')} ${monthlyPrice}
						</span>
					</a>
					<a className="home-intro__secondary" href="/pricing/">
						{t('home.aboutComparePlans')}
					</a>
				</div>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner checkoutUrl={props.checkoutUrl} monthlyPrice={props.monthlyPrice} />
		</I18nProvider>
	);
}
