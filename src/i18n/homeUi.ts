import { LOCALES, type Locale } from './locales';

export const homeUi = {
    en: {
        hero_badge: 'Open to New Opportunities & Roles • Explore Career Path →',
        hero_title_prefix: 'Backend Software Engineer',
        hero_title_suffix: '& Systems Architect',
        hero_description: 'I design and build high-load microservices, distributed systems, and Cloud-Native infrastructure. Explore my open-source products below or dive into my track record and tech stack.',
        cta_career: 'View Career Path & Resume',
        cta_projects: 'Explore Products & Stack',

        telemetry_title: 'System Telemetry & Engineering Metrics',
        telemetry_status: 'STATUS: ACTIVE / OPEN TO ROLES',

        metric_exp: 'Commercial Experience',
        metric_exp_val: '5+ YRS',
        metric_exp_sub: 'Golang & Distributed Systems',

        metric_events: 'Daily Streamed Events',
        metric_events_val: '5M+',
        metric_events_sub: 'ClickHouse & Kafka Analytics',

        metric_latency: 'Target System Latency',
        metric_latency_val: '<50 ms',
        metric_latency_sub: 'Low-Latency Processing SLA',

        metric_concurrency: 'Telegram Mini App Peak',
        metric_concurrency_val: '3,000+',
        metric_concurrency_sub: 'Active Concurrent Sessions',

        bento_career_title: 'Career Path & Track Record',
        bento_career_desc: 'Detailed commercial history, lead achievements, architectural decisions, and downloadable resume.',
        bento_stack_title: 'Tech Stack & Radar',
        bento_stack_desc: 'In-depth overview of Golang, C/C++, Kubernetes, ClickHouse, Kafka, and microservices ecosystem.',
        bento_projects_title: 'Products & Engineering MVP',
        bento_projects_desc: 'Real-world backend services, CPU emulators, zero-allocation macOS daemons, and open-source tools.',
        bento_research_title: 'System Architecture & RFCs',
        bento_research_desc: 'Engineering notes, memory profiling benchmarks, and distributed consensus insights.',
        bento_socials_title: 'Get in Touch',
        bento_socials_desc: 'Direct communication channels for recruiters, hiring managers, and product users.',

        tech_stream_title: 'Interactive Tech Stream',
        tech_stream_scroll: 'Drag or swipe to scroll',
    },
    uk: {
        hero_badge: 'Відкритий до нових пропозицій та співпраці',
        hero_title_prefix: 'Backend Software Engineer',
        hero_title_suffix: '& Systems Architect',
        hero_description: 'Проєктую та будую високонавантажені мікросервіси, розподілені системи та Cloud-Native інфраструктуру. Досліджуйте мої відкриті інженерні продукти або перегляньте досвід і стек.',
        cta_career: 'Кар\'єрний Шлях та Резюме',
        cta_projects: 'Проєкти та Стек',

        telemetry_title: 'Телеметрія та Інженерні Метрики',
        telemetry_status: 'СТАТУС: АКТИВНИЙ / ВІДКРИТИЙ ДО ПРОПОЗИЦІЙ',

        metric_exp: 'Комерційний Досвід',
        metric_exp_val: '5+ Років',
        metric_exp_sub: 'Golang та Розподілені Системи',

        metric_events: 'Обробка Подій / День',
        metric_events_val: '5M+',
        metric_events_sub: 'Аналітика ClickHouse & Kafka',

        metric_latency: 'Затримка Системи',
        metric_latency_val: '<50 мс',
        metric_latency_sub: 'SLA Низької Затримки',

        metric_concurrency: 'Пік Telegram Mini App',
        metric_concurrency_val: '3,000+',
        metric_concurrency_sub: 'Активних Одночасних Сесій',

        bento_career_title: 'Кар\'єра та Досягнення',
        bento_career_desc: 'Детальна історія роботи, результати технічного лідерства, архітектурні рішення та резюме.',
        bento_stack_title: 'Стек Технологій',
        bento_stack_desc: 'Детальний огляд Golang, C/C++, Kubernetes, ClickHouse, Kafka та екосистеми мікросервісів.',
        bento_projects_title: 'Продукти та Інженерні MVP',
        bento_projects_desc: 'Реальні backend-сервіси, емулятори процесорів, macOS-демони та open-source інструменти.',
        bento_research_title: 'Архитектура Систем та RFC',
        bento_research_desc: 'Інженерні нотатки, бенчмарки профілювання пам\'яті та розбір консенсус-протоколів.',
        bento_socials_title: 'Контакти та Зв\'язок',
        bento_socials_desc: 'Прямі канали комунікації для рекрутерів, наймаючих менеджерів та користувачів продуктів.',

        tech_stream_title: 'Інтерактивний Стек Технологій',
        tech_stream_scroll: 'Перетягуйте для перегляду',
    },
    fr: {
        hero_badge: 'Ouvert aux nouvelles opportunités • Voir le parcours →',
        hero_title_prefix: 'Backend Software Engineer',
        hero_title_suffix: '& Systems Architect',
        hero_description: 'Je conçois et construis des microservices à forte charge, des systèmes distribués et des infrastructures Cloud-Native. Explorez mes projets open-source ou consultez mon parcours et ma stack.',
        cta_career: 'Parcours & CV',
        cta_projects: 'Produits & Stack',

        telemetry_title: 'Télémétrie & Métriques d\'Ingénierie',
        telemetry_status: 'STATUT: ACTIF / DISPONIBLE',

        metric_exp: 'Expérience Commerciale',
        metric_exp_val: '5+ Ans',
        metric_exp_sub: 'Golang & Systèmes Distribués',

        metric_events: 'Événements / Jour',
        metric_events_val: '5M+',
        metric_events_sub: 'Analytique ClickHouse & Kafka',

        metric_latency: 'Latence Système',
        metric_latency_val: '<50 ms',
        metric_latency_sub: 'SLA Basse Latence',

        metric_concurrency: 'Pic Telegram Mini App',
        metric_concurrency_val: '3,000+',
        metric_concurrency_sub: 'Sessions Actives Simultanées',

        bento_career_title: 'Parcours & Expérience',
        bento_career_desc: 'Historique commercial détaillé, réalisations techniques, décisions d\'architecture et CV.',
        bento_stack_title: 'Stack Technique',
        bento_stack_desc: 'Aperçu détaillé de Golang, C/C++, Kubernetes, ClickHouse, Kafka et de l\'écosystème microservices.',
        bento_projects_title: 'Produits & MVP Ingénierie',
        bento_projects_desc: 'Services backend réels, émulateurs CPU, démons macOS zero-allocation et outils open-source.',
        bento_research_title: 'Architecture Système & RFC',
        bento_research_desc: 'Notes d\'ingénierie, benchmarks de profilage mémoire et analyses de consensus distribué.',
        bento_socials_title: 'Contact Direct',
        bento_socials_desc: 'Canaux de communication directs pour les recruteurs, managers et utilisateurs.',

        tech_stream_title: 'Flux Technique Interactif',
        tech_stream_scroll: 'Glissez pour faire défiler',
    },
} as const;