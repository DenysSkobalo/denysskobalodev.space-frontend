export interface ResearchItem {
    slug: string;
    title: string;
    summary: string;
    category: 'Distributed Systems' | 'Performance' | 'RFC / Blueprint';
    date: string;
    readTime: string;
    tags: string[];
}

export const MOCK_RESEARCH_ITEMS: ResearchItem[] = [
    {
        slug: 'raft-consensus-go-implementation',
        title: 'Implementing Raft Consensus in Go: Lessons from Edge Cases',
        summary: 'A deep dive into node election timeouts, log compaction strategies, and network partition resilience in custom consensus engines.',
        category: 'Distributed Systems',
        date: '2025-11-15',
        readTime: '8 min read',
        tags: ['Go', 'Raft', 'Consensus', 'Fault Tolerance'],
    },
    {
        slug: 'postgres-vs-clickhouse-telemetry',
        title: 'Benchmarking PostgreSQL vs ClickHouse for High-Throughput Telemetry',
        summary: 'Evaluating write amplification, disk usage, and complex analytical query latencies over 100M+ real-time telemetry events.',
        category: 'Performance',
        date: '2025-08-22',
        readTime: '12 min read',
        tags: ['PostgreSQL', 'ClickHouse', 'Database Tuning', 'Benchmarking'],
    },
    {
        slug: 'rfc-transactional-outbox-kafka',
        title: 'RFC: Zero-Data-Loss Architecture using Transactional Outbox Pattern',
        summary: 'Architectural specification for maintaining event consistency across microservices with dual-phase commits and Kafka streaming.',
        category: 'RFC / Blueprint',
        date: '2025-04-10',
        readTime: '6 min read',
        tags: ['Architecture', 'Kafka', 'Outbox Pattern', 'Microservices'],
    },
];

export const researchUi = {
    en: {
        title: 'Research & Technical Papers',
        subtitle: 'Articles, benchmarks, and RFC specifications on distributed systems and backend architecture.',
        read_article: 'Read Paper →',
    },
    uk: {
        title: 'Дослідження та Публікації',
        subtitle: 'Статті, бенчмарки та RFC-специфікації з розподілених систем і бэкенд-архітектури.',
        read_article: 'Читати публікацію →',
    },
    fr: {
        title: 'Recherches & Articles Techniques',
        subtitle: 'Articles, benchmarks et spécifications RFC sur les systèmes distribués.',
        read_article: 'Lire l\'article →',
    },
} as const;