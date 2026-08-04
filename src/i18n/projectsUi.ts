export const projectsUi = {
    en: {
        title: 'Personal Projects & Open Source',
        subtitle: 'Low-level CPU emulators, zero-allocation macOS tools, physics engines, and backend routing MVPs.',
        filter_all: 'All Projects',
        filter_oss: 'Open Source',
        filter_dev: 'In Development',
        github_link: 'Source Code',
        demo_link: 'Live Demo',
    },
    uk: {
        title: 'Особисті Проєкти та Open Source',
        subtitle: 'Низькорівневі емулятори CPU, macOS-інструменти з zero-allocation, фізичні рушії та бекенд-сервіси.',
        filter_all: 'Усі Проєкти',
        filter_oss: 'Open Source',
        filter_dev: 'В Розробці',
        github_link: 'Вихідний Код',
        demo_link: 'Демо Проєкту',
    },
    fr: {
        title: 'Projets Personnels & Open Source',
        subtitle: 'Émulateurs CPU bas niveau, outils macOS zéro-allocation, moteurs physiques et services backend.',
        filter_all: 'Tous les Projets',
        filter_oss: 'Open Source',
        filter_dev: 'En Développement',
        github_link: 'Code Source',
        demo_link: 'Démo En Ligne',
    },
} as const;

export interface ProjectItem {
    id: string;
    name: string;
    icon: string;
    tagline: Record<string, string>;
    description: Record<string, string>;
    status: 'Open Source' | 'In Development';
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
}

export const MOCK_PROJECTS: ProjectItem[] = [
    {
        id: 'g2c-mvp',
        name: 'G2C MVP',
        icon: '⚡',
        tagline: {
            en: 'High-performance Go routing & backend processing MVP',
            uk: 'Високопродуктивний Go-сервіс обробки та маршрутизації даних',
            fr: 'Service MVP de routage et traitement backend en Go',
        },
        description: {
            en: 'Modular MVP platform written in Go for optimized data routing and backend business logic processing.',
            uk: 'Модульна MVP-платформа на Go для оптимізованої маршрутизації даних та обробки бекенд-логіки.',
            fr: 'Plateforme MVP modulaire développée en Go pour le routage de données et le traitement backend.',
        },
        status: 'In Development',
        techStack: ['Golang', 'Microservices', 'Docker', 'REST API'],
        githubUrl: 'https://github.com/DenysSkobalo/g2c-mvp',
    },
    {
        id: 'silico-vm',
        name: 'Silico VM',
        icon: '💻',
        tagline: {
            en: 'ARMv8-A CPU Hardware Emulator in C/C++',
            uk: 'Низькорівневий емулятор процесора ARMv8-A на C/C++',
            fr: 'Émulateur matériel ARMv8-A développé en C/C++',
        },
        description: {
            en: 'High-performance ARMv8-A CPU emulator supporting 50+ core ISA instructions with custom bitwise decoders and MMIO.',
            uk: 'Високопродуктивний емулятор ARMv8-A із підтримкою 50+ інструкцій ISA, побітовими декодерами та MMIO.',
            fr: 'Émulateur ARMv8-A prenant en charge 50+ instructions ISA avec décodeurs binaire et MMIO.',
        },
        status: 'In Development',
        techStack: ['C', 'C++', 'ARMv8-A ISA', 'MMIO', 'Assembly'],
        githubUrl: 'https://github.com/DenysSkobalo/silico',
    },
    {
        id: 'trackmy-layout',
        name: 'TrackMy Layout',
        icon: '⌨️',
        tagline: {
            en: 'Zero-allocation macOS background daemon in C/Objective-C',
            uk: 'Низькорівневий демон для macOS з zero-allocation пам\'яті',
            fr: 'Démon macOS zéro-allocation en C/Objective-C',
        },
        description: {
            en: 'Native macOS background worker for API automation achieving zero memory allocations and ultra-low CPU overhead (<0.1%).',
            uk: 'Фоновий демон для автоматизації macOS API з абсолютною безпекою пам\'яті та навантаженням на CPU <0.1%.',
            fr: 'Démon d\'arrière-plan natif macOS garantissant une sécurité mémoire absolue et une charge CPU <0,1%.',
        },
        status: 'In Development',
        techStack: ['C', 'Objective-C', 'macOS API', 'Low-level'],
        githubUrl: 'https://github.com/DenysSkobalo/TrackMyLayout',
    },
    {
        id: 'fluid-simulation',
        name: 'Fluid Simulation',
        icon: '🌊',
        tagline: {
            en: 'Real-time fluid dynamics simulation engine',
            uk: 'Симуляція гідродинаміки та фізики рідини у реальному часі',
            fr: 'Moteur de simulation de dynamique des fluides en temps réel',
        },
        description: {
            en: 'High-performance real-time fluid simulation implementing grid-based numerical algorithms and computational physics.',
            uk: 'Високопродуктивний рушій симуляції рідини з використанням сіткових чисельних алгоритмів та обчислювальної фізики.',
            fr: 'Moteur de simulation de fluides haute performance utilisant des algorithmes numériques sur grille.',
        },
        status: 'Open Source',
        techStack: ['C++', 'Graphics API', 'Physics Simulation', 'Algorithms'],
        githubUrl: 'https://github.com/DenysSkobalo/fluid-simulation',
    },
];