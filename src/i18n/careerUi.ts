export const careerUi = {
    en: {
        title: 'Career Path & Executive Summary',
        subtitle: 'Track record in designing distributed systems, high-load architecture, and leading engineering teams.',
        download_resume: 'Download PDF CV',
        copy_email: 'Copy Email',
        schedule_call: 'Schedule a Call',
        copied_toast: 'Email copied to clipboard!',

        // Impact Metrics
        impact_title: 'Key Engineering Impact & Metrics',
        metric_1_val: '40%',
        metric_1_lbl: 'Latency Reduction via SQL & Cache Optimization',
        metric_2_val: '99.99%',
        metric_2_lbl: 'SLA Uptime Across Microservice Ecosystem',
        metric_3_val: '10M+',
        metric_3_lbl: 'Daily Event Requests Processed via Kafka',
        metric_4_val: '5x',
        metric_4_lbl: 'Deployment Speed Increase (CI/CD Pipelines)',

        // Timeline
        timeline_title: 'Experience Timeline',
    },
    uk: {
        title: 'Кар\'єрний Шлях та Інженерне Резюме',
        subtitle: 'Досвід у проєктуванні розподілених систем, високонавантаженої архітектури та керівництві розробкою.',
        download_resume: 'Завантажити CV (PDF)',
        copy_email: 'Скопіювати Email',
        schedule_call: 'Запланувати Дзвінок',
        copied_toast: 'Email успішно скопійовано!',

        // Impact Metrics
        impact_title: 'Ключові Інженерні Досягнення',
        metric_1_val: '40%',
        metric_1_lbl: 'Зниження затримки за рахунок SQL та кЕшування',
        metric_2_val: '99.99%',
        metric_2_lbl: 'Доступність (Uptime) мікросервісної системи',
        metric_3_val: '10M+',
        metric_3_lbl: 'Запитів на день обробляється через Kafka',
        metric_4_val: '5x',
        metric_4_lbl: 'Прискорення деплою (оптимізація CI/CD)',

        // Timeline
        timeline_title: 'Хронологія Досвіду',
    },
    fr: {
        title: 'Parcours Professionnel & CV Executif',
        subtitle: 'Conception de systèmes distribués et architecture haute charge.',
        download_resume: 'Télécharger le CV (PDF)',
        copy_email: 'Copier l\'Email',
        schedule_call: 'Réserver un appel',
        copied_toast: 'Email copié dans le presse-papiers !',

        impact_title: 'Impacts Techniques Clés',
        metric_1_val: '40%',
        metric_1_lbl: 'Réduction de la latence SQL & Cache',
        metric_2_val: '99.99%',
        metric_2_lbl: 'Disponibilité du système (Uptime)',
        metric_3_val: '10M+',
        metric_3_lbl: 'Requêtes quotidiennes via Kafka',
        metric_4_val: '5x',
        metric_4_lbl: 'Vitesse de déploiement (CI/CD)',

        timeline_title: 'Chronologie des Expériences',
    },
} as const;

// Моковий список посад
export const MOCK_CAREER_ITEMS = [
    {
        period: '2023 — Present',
        role: 'Lead Backend Engineer & Architect',
        company: 'FinTech Cloud Corp',
        location: 'Remote',
        description: 'Lead the architecture transition from monolithic legacy systems to event-driven microservices. Managed a team of 6 engineers.',
        achievements: [
            'Architected transactional message queue pipeline handling 10M+ daily events.',
            'Reduced cloud infrastructure costs by 28% through Docker/Kubernetes cluster optimization.',
        ],
        stack: ['Go', 'PostgreSQL', 'Kafka', 'Kubernetes', 'gRPC', 'Redis'],
    },
    {
        period: '2021 — 2023',
        role: 'Senior Backend Developer',
        company: 'HighScale SaaS Platform',
        location: 'Hybrid',
        description: 'Designed core APIs, notification systems, and DB query optimizations for 500k active users.',
        achievements: [
            'Optimized DB indexing strategy, cutting slow queries latency by 40%.',
            'Implemented automated OAuth2 / RBAC security layer.',
        ],
        stack: ['Node.js', 'TypeScript', 'PostgreSQL', 'RabbitMQ', 'AWS'],
    },
    {
        period: '2019 — 2021',
        role: 'Software Engineer',
        company: 'Tech Solutions Studio',
        location: 'Kyiv, Ukraine',
        description: 'Developed scalable microservices and integrated payment gateways for international clients.',
        achievements: [
            'Integrated Stripe & PayPal webhooks with idempotency controls.',
            'Achieved 95%+ unit test coverage across payment modules.',
        ],
        stack: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    },
];