export const LOCALES = {
    en: { code: 'en', name: 'English', flag: '🇬🇧' },
    uk: { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    fr: { code: 'fr', name: 'Français', flag: '🇫🇷' },
} as const;

export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';
export const SUPPORTED_LOCALES = Object.keys(LOCALES) as Locale[];