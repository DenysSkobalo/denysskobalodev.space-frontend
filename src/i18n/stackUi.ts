export interface TechItem {
    slug: string;
    name: string;
    category: 'backend' | 'database' | 'devops' | 'architecture';
    level: 'Expert' | 'Advanced' | 'Proficient';
    experienceYears: number;
    icon: string;
    shortDesc: string;
}

export const MOCK_TECH_STACK: TechItem[] = [
    { slug: 'golang', name: 'Go (Golang)', category: 'backend', level: 'Expert', experienceYears: 5, icon: '🐹', shortDesc: 'High-concurrency microservices, gRPC services, and CLI tools.' },
    { slug: 'nodejs', name: 'Node.js / TS', category: 'backend', level: 'Expert', experienceYears: 7, icon: '🟢', shortDesc: 'Event-driven APIs, Fastify/NestJS systems, and asynchronous pipelines.' },
    { slug: 'postgresql', name: 'PostgreSQL', category: 'database', level: 'Expert', experienceYears: 6, icon: '🐘', shortDesc: 'Complex indexing, partition strategies, and performance query tuning.' },
    { slug: 'kafka', name: 'Apache Kafka', category: 'architecture', level: 'Advanced', experienceYears: 4, icon: '⚙️', shortDesc: 'Event-driven streaming architectures and transactional outbox patterns.' },
    { slug: 'docker-k8s', name: 'Kubernetes & Docker', category: 'devops', level: 'Advanced', experienceYears: 5, icon: '☸️', shortDesc: 'Container orchestration, Helm charts, and cloud-native deployments.' },
    { slug: 'redis', name: 'Redis', category: 'database', level: 'Expert', experienceYears: 6, icon: '🔴', shortDesc: 'Distributed caching, pub/sub messaging, and rate-limiting implementations.' },
    { slug: 'rust', name: 'Rust', category: 'backend', level: 'Proficient', experienceYears: 2, icon: '🦀', shortDesc: 'Memory-safe backend modules and high-performance WebAssembly/CLI.' },
    { slug: 'aws', name: 'AWS Cloud', category: 'devops', level: 'Advanced', experienceYears: 4, icon: '☁️', shortDesc: 'ECS, Lambda, S3, RDS, and CloudFront infrastructure management.' },
];

export const stackUi = {
    en: {
        title: 'Tech Stack & Interactive Radar',
        subtitle: 'Explore technologies I build with. Hover to inspect proficiency level or click to open deep-dive architectural notes.',
        carousel_title: 'Interactive Infinite Tech Stream',
        carousel_hint: 'Hover to pause streaming • Click card for details',
        filter_all: 'All Stack',
        filter_backend: 'Languages & Runtimes',
        filter_database: 'Databases & Cache',
        filter_devops: 'DevOps & Cloud',
        filter_architecture: 'Architecture & Brokers',
        exp_years: 'years exp',
        view_details: 'Read Tech Case Study →',
    },
    uk: {
        title: 'Стек Технологій та Інтерактивний Радар',
        subtitle: 'Наведіть для перегляду рівня володіння або натисніть, щоб відкрити детальний огляд досвіду з цією технологією.',
        carousel_title: 'Нескінченний Інтерактивний Потік Стеку',
        carousel_hint: 'Наведіть, щоб призупинити • Натисніть для деталей',
        filter_all: 'Увесь стек',
        filter_backend: 'Мови та Рантайми',
        filter_database: 'Бази даних та Кеш',
        filter_devops: 'DevOps та Хмара',
        filter_architecture: 'Архітектура та Брокери',
        exp_years: 'років досвіду',
        view_details: 'Читати детальній кейс →',
    },
    fr: {
        title: 'Technologies & Radar Interactif',
        subtitle: 'Survolez pour inspecter le niveau de maîtrise ou cliquez pour lire les détails d\'architecture.',
        carousel_title: 'Flux d\'infrastructures et langages',
        carousel_hint: 'Survoler pour mettre en pause • Clic pour détails',
        filter_all: 'Tout',
        filter_backend: 'Langages',
        filter_database: 'Bases de données',
        filter_devops: 'DevOps',
        filter_architecture: 'Architecture',
        exp_years: 'ans d\'exp',
        view_details: 'Voir le cas technique →',
    },
} as const;