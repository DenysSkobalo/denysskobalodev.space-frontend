import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
    try {
        const body = await request.json();
        const { password } = body;

        if (password === 'admin123') {
            cookies.set('admin_session', 'authenticated', {
                path: '/',
                httpOnly: true,
                secure: false, // для локальної розробки (http)
                sameSite: 'lax',
                maxAge: 60 * 60 * 24, // 1 день
            });

            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        return new Response(JSON.stringify({ message: 'Невірний пароль' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('API /api/login Error:', error);
        return new Response(JSON.stringify({ message: 'Внутрішня помилка сервера' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};