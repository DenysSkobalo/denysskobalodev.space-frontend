export const socialsUi = {
    en: {
        title: 'Get in Touch & Social Hub',
        subtitle: 'I am always open to discussing new senior backend engineering roles, system architecture consulting, or technical product feedback. Reach out via direct email, LinkedIn, or follow my projects and tech notes across social platforms.',
    },
    uk: {
        title: 'Контакти та Соціальні Мережі',
        subtitle: 'Буду радий поспілкуватися! Тут ви знайдете мої прямі контакти для обговорення вакансій, мої інженерні канали з розбором архітектурних рішень та профілі, де можна стежити за моїми проєктами й продуктами.',
    },
    fr: {
        title: 'Contact & Réseaux Sociaux',
        subtitle: 'Je suis toujours ouvert à discuter de nouveaux postes en ingénierie backend senior, de conseil en architecture système ou de retours sur mes produits. Contactez-moi par e-mail, LinkedIn ou suivez mes notes techniques sur les réseaux.',
    },
} as const;

export interface SocialChannel {
    id: string;
    name: string;
    handle: string;
    url: string;
}

export const SOCIAL_CHANNELS: SocialChannel[] = [
    {
        id: 'email',
        name: 'Email',
        handle: 'skobalodenys@gmail.com',
        url: 'mailto:skobalodenys@gmail.com',
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        handle: 'linkedin.com/in/denys-skobalo',
        url: 'https://linkedin.com/in/denys-skobalo',
    },
    {
        id: 'github',
        name: 'GitHub',
        handle: 'github.com/DenysSkobalo',
        url: 'https://github.com/DenysSkobalo',
    },
    {
        id: 'telegram',
        name: 'Telegram Channel',
        handle: '@comptalks',
        url: 'https://t.me/comptalks',
    },
    {
        id: 'twitter',
        name: 'X / Twitter',
        handle: '@ten1d',
        url: 'https://x.com/ten1d',
    },
    {
        id: 'threads',
        name: 'Threads',
        handle: '@t3nyd',
        url: 'https://www.threads.com/@t3nyd',
    },
    {
        id: 'youtube',
        name: 'YouTube',
        handle: 'Coming Soon',
        url: '#',
    },
];