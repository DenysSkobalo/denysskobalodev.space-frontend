import { defineMiddleware } from 'astro:middleware';

const SUPPORTED_LOCALES = ['en', 'uk', 'fr'];
const DEFAULT_LOCALE = 'en';

function getPreferredLocale(request: Request): string {
    const acceptLanguage = request.headers.get('accept-language');
    if (!acceptLanguage) return DEFAULT_LOCALE;

    const languages = acceptLanguage
        .split(',')
        .map(lang => {
            const [code, priority] = lang.trim().split(';q=');
            return {
                code: code.split('-')[0].toLowerCase(), // Беремо тільки дволітерний код (напр. 'uk')
                q: priority ? parseFloat(priority) : 1.0
            };
        })
        .sort((a, b) => b.q - a.q);

    for (const lang of languages) {
        if (SUPPORTED_LOCALES.includes(lang.code)) {
            return lang.code;
        }
    }

    return DEFAULT_LOCALE;
}

export const onRequest = defineMiddleware((context, next) => {
    const { pathname } = context.url;

    if (pathname === '/' || pathname === '') {
        const locale = getPreferredLocale(context.request);
        return context.rewrite(`/${locale}`);
    }

    if (pathname === '/login' || pathname.startsWith('/api/')) {
        return next();
    }

    if (pathname.startsWith('/admin')) {
        const session = context.cookies.get('admin_session');

        if (!session || session.value !== 'authenticated') {
            return new Response(null, {
                status: 302,
                headers: {
                    'Location': '/login',
                },
            });
        }
    }

    return next();
});