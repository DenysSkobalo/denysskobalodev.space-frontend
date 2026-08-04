export interface ProjectItem {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    category: 'SaaS' | 'Open Source' | 'Architecture';
    status: 'Live SaaS' | 'Open Source' | 'In Development' | 'Completed';
    icon: string;
    stack: string[];
    demoUrl?: string;
    githubUrl?: string;
}

export const MOCK_PROJECTS: ProjectItem[] = [
    {
        slug: 'pulse-metrics',
        title: 'PulseMetrics',
        icon: '⚡',
        tagline: 'High-throughput event streaming & monitoring agent',
        description: 'Distributed metrics aggregator built with Go. Processes up to 50k events/sec with sub-millisecond latency for real-time telemetry.',
        category: 'SaaS',
        status: 'Live SaaS',
        stack: ['Go', 'TimescaleDB', 'Redis', 'Docker'],
        demoUrl: 'https://example.com',
    },
    {
        slug: 'go-outbox-kit',
        title: 'Go-Outbox-Kit',
        icon: '📦',
        tagline: 'Transactional Outbox Pattern for Microservices',
        description: 'Open-source Go library preventing message loss during network partitions in Kafka and PostgreSQL architectures.',
        category: 'Open Source',
        status: 'Open Source',
        stack: ['Go', 'PostgreSQL', 'Kafka'],
        githubUrl: 'https://github.com/example',
    },
    {
        slug: 'fintech-ledger',
        title: 'LedgerCore',
        icon: '💳',
        tagline: 'Event-sourced banking ledger blueprint',
        description: 'High-availability ledger microservice architecture with double-entry accounting guarantees and audit trails.',
        category: 'Architecture',
        status: 'In Development',
        stack: ['Node.js', 'TypeScript', 'gRPC', 'PostgreSQL'],
    },
];

export const projectsUi = {
    en: {
        title: 'Products & Shipping Log',
        subtitle: 'Side-projects, SaaS applications, and open-source tools I’ve built.',
        visit_btn: 'Visit',
        code_btn: 'Code',
    },
    uk: {
        title: 'Продукти та Проєкти',
        subtitle: 'SaaS застосунки, open-source інструменти та архітектурні системи.',
        visit_btn: 'Сайт',
        code_btn: 'Код',
    },
    fr: {
        title: 'Produits & Projets',
        subtitle: 'Applications SaaS et outils open-source.',
        visit_btn: 'Visiter',
        code_btn: 'Code',
    },
} as const;