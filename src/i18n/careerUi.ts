export const careerUi = {
    en: {
        title: 'Career Path & Commercial Track Record',
        subtitle: 'Over 5 years of commercial experience engineering high-load Golang systems, microservices architectures, streaming analytics, and cloud infrastructure.',
        download_cv: 'Download Resume (PDF)',
        section_experience: 'Work Experience',
        section_education: 'Education',
        key_achievements: 'Key Technical Impact:',
    },
    uk: {
        title: 'Кар\'єрний Шлях та Комерційний Досвід',
        subtitle: 'Понад 5 років комерційного досвіду розробки високонавантажених Golang-систем, мікросервісних архітектур, потокової аналітики та Cloud-Native інфраструктури.',
        download_cv: 'Завантажити Резюме (PDF)',
        section_experience: 'Досвід Роботи',
        section_education: 'Освіта',
        key_achievements: 'Ключовий Інженерний Вплив:',
    },
    fr: {
        title: 'Parcours Professionnel & Expérience Commerciale',
        subtitle: 'Plus de 5 ans d\'expérience commercial dans l\'ingénierie de systèmes Golang à forte charge, architectures microservices et infrastructures Cloud.',
        download_cv: 'Télécharger le CV (PDF)',
        section_experience: 'Expérience Professionnelle',
        section_education: 'Éducation',
        key_achievements: 'Impact Technique Clé:',
    },
} as const;

export interface CareerItem {
    id: string;
    period: string;
    role: string;
    company: string;
    location: string;
    type: string;
    description: Record<string, string>;
    achievements: Record<string, string[]>;
    techStack: string[];
}

export interface EducationItem {
    id: string;
    period: string;
    degree: Record<string, string>;
    institution: string;
    location: string;
}

export const CAREER_EXPERIENCE: CareerItem[] = [
    {
        id: 'notlost',
        period: '09/2023 — 12/2025',
        role: 'Tech Lead Backend / Software Backend Engineer',
        company: 'NOTLOST (Software Startup)',
        location: 'Remote',
        type: 'Full-time',
        description: {
            en: 'Architected and engineered a distributed microservices platform from scratch in Golang (Clean Architecture / DDD) for real-time social graph processing.',
            uk: 'Проєктував та розробляв з нуля розподілену мікросервісну платформу на Golang (Clean Architecture / DDD) для обробки соціальних графів у реальному часі.',
            fr: 'Conception et développement d\'une plateforme microservices distribuée en Go (Clean Architecture / DDD) pour le traitement de graphes sociaux.',
        },
        achievements: {
            en: [
                'Engineered real-time social graph lookups with <50 ms latency during high conference traffic spikes.',
                'Integrated Webhook processing for Telegram Mini App via RabbitMQ & Redis, handling bursts of 3,000+ active sessions.',
                'Developed custom Cgo matrix traversal modules, reducing RAM footprint by 35%.',
                'Implemented Zero Trust security (JWT, Telegram WebApp Data) and full Grafana/Prometheus/ELK monitoring across 5+ K8s microservices.',
                'Led backend engineering team, established strict Code Reviews and enforced 85%+ TDD test coverage standards.',
            ],
            uk: [
                'Забезпечив затримку пошуку в графі <50 мс під час високих пікових навантажень на конференціях.',
                'Інтегрував обробку Webhook для Telegram Mini App через RabbitMQ та Redis (3,000+ активних сесій).',
                'Розробив Cgo-модулі обходу матриці суміжності графа, зменшивши використання RAM на 35%.',
                'Реалізував Zero Trust безпеку (JWT) та моніторинг (Grafana, Prometheus, ELK) для 5+ мікросервісів у Kubernetes (AWS).',
                'Очолював бекенд-команду, впровадив суворі стандарти Code Review та TDD з покриттям тестів 85%+.',
            ],
            fr: [
                'Réduction de la latence de recherche dans le graphe à <50 ms lors des pics de trafic.',
                'Traitement Webhook pour Telegram Mini App via RabbitMQ & Redis (3 000+ sessions actives simultanées).',
                'Développement de modules Cgo pour le parcours de graphe, réduisant la RAM de 35%.',
                'Mise en œuvre de la sécurité Zero Trust (JWT) et du monitoring (Prometheus/Grafana/ELK) sur 5+ microservices Kubernetes.',
                'Leadership d\'équipe backend et instauration d\'une couverture de tests TDD de 85%+.',
            ],
        },
        techStack: ['Golang', 'C/C++', 'Cgo', 'RabbitMQ', 'Redis', 'Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'ELK'],
    },
    {
        id: 'weld-money',
        period: '05/2020 — 08/2023',
        role: 'Software Backend Engineer',
        company: 'Weld Money (FinTech Platform)',
        location: 'Remote',
        type: 'Full-time',
        description: {
            en: 'Engineered high-throughput transactional analytics and instant crypto-to-fiat conversion microservices under strict financial SLAs.',
            uk: 'Розробляв високонавантажені мікросервіси для потокової транзакційної аналітики та миттєвої крипто-фіатної конвертації.',
            fr: 'Ingénierie de services d\'analyse transactionnelle à haut débit et de conversion crypto-fiat instantanée sous SLA stricts.',
        },
        achievements: {
            en: [
                'Led migration of analytics to ClickHouse, handling 5M+ daily payments and cutting SQL query execution time by 80%.',
                'Fine-tuned instant crypto-to-fiat payment processing in Go, maintaining authorization-to-settlement SLA under <200 ms.',
                'Migrated internal communication from REST/JSON to gRPC (Protobuf), cutting network serialization overhead by 40%.',
                'Built resilient event streaming via Apache Kafka & Redis caching, guaranteeing 100% data integrity and zero duplicate charges.',
                'Optimized PostgreSQL and MongoDB queries by 35% through deep Go runtime memory profiling (pprof).',
            ],
            uk: [
                'Очолив міграцію аналітики в ClickHouse (5M+ подій/день), скоротивши час виконання складних SQL-запитів на 80%.',
                'Оптимізував Go-сервіси крипто-конвертації під фінансовий SLA <200 мс.',
                'Перевів внутрішню комунікацію з REST на gRPC (Protobuf), зменшивши накладні витрати на мережу на 40%.',
                'Побудував відмовостійку архітектуру на Apache Kafka та Redis для гарантії 100% цілісності даних без подвійних списань.',
                'Оптимізував роботу PostgreSQL та MongoDB на 35% за допомогою глибокого профілювання пам\'яті Go (pprof).',
            ],
            fr: [
                'Migration de l\'analyse vers ClickHouse (5M+ événements/jour), réduisant le temps d\'exécution des requêtes SQL de 80%.',
                'Optimisation des services Go de conversion crypto-fiat sous un SLA strict de <200 ms.',
                'Migration REST vers gRPC (Protobuf), réduisant les coûts de sérialisation réseau de 40%.',
                'Architecture basée sur Apache Kafka et Redis garantissant 100% d\'intégrité sans doublons de facturation.',
                'Optimisation de PostgreSQL/MongoDB de 35% via le profilage mémoire du runtime Go (pprof).',
            ],
        },
        techStack: ['Golang', 'ClickHouse', 'Apache Kafka', 'gRPC', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'pprof'],
    },
];

export const EDUCATION_ITEMS: EducationItem[] = [
    {
        id: 'univ-lyon2',
        period: '09/2023 — 04/2026',
        degree: {
            en: 'Licence en Informatique (Bachelor in Computer Science)',
            uk: 'Диплом бакалавра з комп\'ютерних наук (Licence en Informatique)',
            fr: 'Licence en Informatique',
        },
        institution: 'Université Lumière Lyon 2',
        location: 'Lyon, France',
    },
];