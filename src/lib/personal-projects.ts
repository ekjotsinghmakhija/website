export interface Project {
  id: string;
  title: string;
  repo: string;
  role: string;
  visibility: string;
  aiSummary: string;
  techStack: string[];
  url: string;
  featured?: boolean;
}

export const PERSONAL_PROJECTS: Project[] = [
  // --- FEATURED PROJECTS (Top 2 will show on Homepage) ---
  {
    id: 'wibes-check',
    title: 'Wibes Check',
    repo: 'ekjotsinghmakhija/wibes-check',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'A comprehensive web intelligence engine designed for Open Source Intelligence gathering and website security analysis.',
    techStack: ['Next.js 15', 'Tailwind CSS'],
    url: 'https://github.com/ekjotsinghmakhija/wibes-check',
    featured: true
  },
  {
    id: 'chromabase',
    title: 'Chromabase',
    repo: 'ekjotsinghmakhija/chromabase',
    role: 'Owner',
    visibility: 'Private',
    aiSummary: 'A powerful CLI utility that encodes massive datasets and files into resilient video formats for infinite cloud storage bypass.',
    techStack: ['Rust'],
    url: 'https://github.com/ekjotsinghmakhija/chromabase',
    featured: true
  },

  // --- SYSTEMS & INFRASTRUCTURE ---
  {
    id: 'vostsql',
    title: 'VostSQL',
    repo: 'ekjotsinghmakhija/vostsql',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'An advanced object-relational database engine from scratch, featuring strict query parsing, execution pipelines, and optimized disk I/O.',
    techStack: ['C', 'C++'],
    url: 'https://github.com/ekjotsinghmakhija/vostsql',
    featured: true
  },
  {
    id: 'httpfromtcp',
    title: 'httpfromtcp',
    repo: 'ekjotsinghmakhija/httpfromtcp',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'A low-level HTTP/1.1 server engineered entirely from scratch over raw TCP sockets with manual protocol parsing.',
    techStack: ['Go', 'TCP Sockets'],
    url: 'https://github.com/ekjotsinghmakhija/httpfromtcp',
    featured: true
  },
  {
    id: 'pg-listen',
    title: 'pg_listen',
    repo: 'ekjotsinghmakhija/pg_listen',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'An event-driven C library leveraging libpq to process asynchronous PostgreSQL NOTIFY signals with near-zero overhead.',
    techStack: ['C', 'PostgreSQL', 'libpq'],
    url: 'https://github.com/ekjotsinghmakhija/pg_listen',
    featured: true
  },
  {
    id: 'sim8086',
    title: 'SIM8086',
    repo: 'ekjotsinghmakhija/sim8086',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'A modular cross-platform hardware emulator and assembler for the Intel 8086 microprocessor.',
    techStack: ['C++', 'Qt 6'],
    url: 'https://github.com/ekjotsinghmakhija/sim8086',
    featured: true
  },

  // --- AI & MACHINE LEARNING ---
  {
    id: 'dataset-distillation-lgm',
    title: 'Dataset Distillation (DDPTECMGLGM)',
    repo: 'metanthropic/DDPTECMGLGM',
    role: 'Contributor',
    visibility: 'Public',
    aiSummary: 'Advanced AI research implementing Linear Gradient Matching for cross-model generalization in dataset distillation.',
    techStack: ['Python', 'PyTorch'],
    url: 'https://metanthropic.vercel.app/',
    featured: true
  },
  {
    id: 'llama-cpp-python',
    title: 'Llama C++ Python',
    repo: 'metanthropic/llama-cpp-python',
    role: 'Contributor',
    visibility: 'Public',
    aiSummary: 'Essential Python wrappers allowing developers to run massive Meta Llama models on standard hardware efficiently.',
    techStack: ['Python', 'C++'],
    url: 'https://metanthropic.vercel.app/',
    featured: false
  },
  {
    id: 'ahhcode',
    title: 'AhhCode',
    repo: 'ekjotsinghmakhija/ahhcode',
    role: 'Owner',
    visibility: 'Private',
    aiSummary: 'An open-source AI coding assistant designed to automate and enhance complex developer workflows.',
    techStack: ['Python', 'TypeScript', 'AI Models'],
    url: 'https://github.com/ekjotsinghmakhija/ahhcode',
    featured: false
  },
  {
    id: 'llm-groupchat',
    title: 'LLM Group Chat',
    repo: 'ekjotsinghmakhija/llm-groupchat',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'A local web app that routes queries to multiple top-tier LLMs via OpenRouter and forces them to debate and rank answers.',
    techStack: ['TypeScript', 'React', 'OpenRouter API'],
    url: 'https://github.com/ekjotsinghmakhija/llm-groupchat',
    featured: false
  },

  // --- OPEN SOURCE CORE CONTRIBUTIONS ---
  {
    id: 'linux-kernel',
    title: 'Linux Kernel',
    repo: 'ekjotsinghmakhija/linux',
    role: 'Contributor',
    visibility: 'Public',
    aiSummary: 'Contributions to the core source tree of the Linux operating system kernel.',
    techStack: ['C', 'Assembly', 'Make'],
    url: 'https://github.com/ekjotsinghmakhija/linux',
    featured: true
  },
  {
    id: 'tidb',
    title: 'TiDB',
    repo: 'ekjotsinghmakhija/tidb',
    role: 'Contributor',
    visibility: 'Public',
    aiSummary: 'Contributions to the cloud-native distributed database handling extreme-scale Hybrid Transactional/Analytical Processing.',
    techStack: ['Go', 'Rust'],
    url: 'https://github.com/ekjotsinghmakhija/tidb',
    featured: false
  },
  {
    id: 'kusion',
    title: 'Kusion',
    repo: 'ekjotsinghmakhija/kusion',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'A declarative orchestration engine for building Internal Developer Platforms and managing cloud-native infrastructure.',
    techStack: ['Go', 'Kubernetes'],
    url: 'https://github.com/ekjotsinghmakhija/kusion',
    featured: false
  },
  {
    id: 'syntrifabric',
    title: 'SyntriFabric (Terraform)',
    repo: 'ekjotsinghmakhija/syntrifabric',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'Contributions to the industry-standard declarative infrastructure-as-code orchestration tool.',
    techStack: ['Go', 'HCL'],
    url: 'https://github.com/ekjotsinghmakhija/syntrifabric',
    featured: false
  },

  // --- WEB, AUTH & FRAMEWORKS ---
  {
    id: 'buttery-auth',
    title: 'Buttery Auth',
    repo: 'buttery-auth/buttery-auth',
    role: 'Contributor',
    visibility: 'Public',
    aiSummary: 'An advanced, comprehensive authentication library designed specifically for TypeScript applications.',
    techStack: ['TypeScript', 'Web Crypto API'],
    url: 'https://github.com/buttery-auth/buttery-auth',
    featured: false
  },
  {
    id: 'postgrest-js',
    title: 'PostgREST JS',
    repo: 'ekjotsinghmakhija/postgrest-js',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'An ORM-like library enabling developers to query PostgREST APIs securely from any JavaScript environment.',
    techStack: ['JavaScript', 'PostgREST'],
    url: 'https://github.com/ekjotsinghmakhija/postgrest-js',
    featured: false
  },
  {
    id: 'tealbase-auth',
    title: 'TealBase Auth',
    repo: 'tealbase/auth',
    role: 'Contributor',
    visibility: 'Public',
    aiSummary: 'A robust user management server handling JWT issuance, Row Level Security, and Magic Link authentication.',
    techStack: ['Go', 'PostgreSQL', 'JWT'],
    url: 'https://github.com/tealbase/tealbase',
    featured: false
  },
  {
    id: 'mohenjo',
    title: 'Mohenjo',
    repo: 'ekjotsinghmakhija/mohenjo',
    role: 'Owner',
    visibility: 'Public',
    aiSummary: 'A cutting-edge 3D user interface inspired by city-building games to visualize and manage developer productivity.',
    techStack: ['Next.js', 'Convex', 'Bun', 'TypeScript'],
    url: 'https://github.com/ekjotsinghmakhija/mohenjo',
    featured: false
  }
];
