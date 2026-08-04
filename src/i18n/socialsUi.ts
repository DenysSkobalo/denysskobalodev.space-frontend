export const socialsUi = {
    en: {
        title: 'Connect & Social Ecosystem',
        subtitle: 'Explore my official tech channels, social profiles, and direct contact options.',
    },
    uk: {
        title: 'Соціальні Мережі та Канали',
        subtitle: 'Офіційні канали, профілі в соцмережах та прямі контакти.',
    },
    fr: {
        title: 'Réseaux & Écosystème',
        subtitle: 'Mes canaux officiels, profils sociaux et contacts directs.',
    },
} as const;

export const SOCIAL_CHANNELS = [
    {
        id: 'telegram',
        name: 'Telegram Channel',
        handle: '@denys_skobalo_tech',
        url: 'https://t.me/example',
        description: 'Tech notes, backend architecture breakdowns, and system design patterns.',
        badge: 'Channel',
    },
    {
        id: 'youtube',
        name: 'YouTube',
        handle: '@denys_skobalo',
        url: '/in-progress',
        description: 'Video tutorials, live coding sessions, and deep-dive architecture reviews.',
        badge: 'Coming Soon',
    },
    {
        id: 'twitter',
        name: 'Twitter / X',
        handle: '@denys_skobalo',
        url: 'https://x.com/example',
        description: 'Insights on Go, Rust microservices, Kafka, and cloud infrastructure.',
        badge: 'Social',
    },
    {
        id: 'threads',
        name: 'Threads',
        handle: '@denys.skobalo',
        url: 'https://threads.net/example',
        description: 'Short engineering thoughts, dev life, and side-project updates.',
        badge: 'Social',
    },
    {
        id: 'reddit',
        name: 'Reddit',
        handle: 'u/denys_skobalo',
        url: 'https://reddit.com/user/example',
        description: 'Discussions in r/golang, r/systemdesign, and r/backend.',
        badge: 'Community',
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        handle: 'Denys Skobalo',
        url: 'https://linkedin.com/in/example',
        description: 'Professional engineering experience, endorsements, and career network.',
        badge: 'Professional',
    },
    {
        id: 'github',
        name: 'GitHub',
        handle: 'denys-skobalo',
        url: 'https://github.com/example',
        description: 'Open source repositories, backend libraries, and code samples.',
        badge: 'Code',
    },
    {
        id: 'email',
        name: 'Direct Email',
        handle: 'denys.skobalo@example.com',
        url: 'mailto:denys.skobalo@example.com',
        description: 'Official inquiries, architecture consulting, and employment offers.',
        badge: 'Direct Contact',
    },
];