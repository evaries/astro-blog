import type { Langs } from "./i18n/ui";

interface SiteConfig {
	author: string;
	title: Record<Langs, string>;
	description: Record<Langs, string>;
	lang: string;
	ogLocale: string;
	themeColorLight: string;
	themeColorDark: string;
	date: {
		locale: string | string[] | undefined;
		options: Intl.DateTimeFormatOptions;
	};
}

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Yevhenii Nadtochii",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: {
		en: "Yevhenii Nadtochii - Affordable Websites for Small Businesses | Unbeatable Designs, User-Friendly, and Stunning Visual Appeal",
		uk: "Доступні веб-сайти для бізнесів | Неперевершені дизайни, зручні в користуванні та неймовірно естетичні",
	},
	// Meta property used as a default description meta property
	description: {
		en: "Elevate your small to medium-sized business with our affordable websites. Experience unbeatable designs, user-friendly interfaces, and stunning visual appeal that will resonate with your customers. Your online success begins here",
		uk: "Прокачайте свій малий чи середній бізнес за допомогою доступних веб-сайтів. Оцініть неперевершені дизайни, зручні інтерфейси та вражаючі візуальні ефекти, які сподобаються вашим клієнтам. Ваш успіх в Інтернеті починається тут.",
	},
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Sets the meta data theme-color, found in src/components/BaseHead.astro L:34. Toggling the dark mode will update the meta content with either light/dark color, implementation in src/layouts/Base.astro L:41.
	themeColorLight: "#fafafa",
	themeColorDark: "#1d1f21",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};
