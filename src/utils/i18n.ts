import { LOCALES, DEFAULT_LOCALE, type Locale } from '@/i18n/locales';

export function getValidLocale(lang?: string): Locale {
    if (lang && lang in LOCALES) {
        return lang as Locale;
    }
    return DEFAULT_LOCALE;
}

export function getI18nStaticPaths() {
    return Object.keys(LOCALES).map((lang) => ({
        params: { lang },
    }));
}