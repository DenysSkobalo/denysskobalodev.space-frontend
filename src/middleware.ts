import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
    const { pathname } = context.url;

    if (pathname === '/login' || pathname.startsWith('/api/')) {
        return next();
    }

    if (pathname.startsWith('/admin')) {
        const session = context.cookies.get('admin_session');

        if (!session || session.value !== 'authenticated') {
            return context.redirect('/login');
        }
    }

    return next();
});