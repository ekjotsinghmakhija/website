/* FILE: src/lib/personal-projects.ts */

export type ProjectType = 'magnum-opus' | 'product' | 'library' | 'research';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  period: string;
  tech: string[];
  link: string;
  type: ProjectType;
}

export const PERSONAL_PROJECTS: Project[] = [
  {
    id: 'imgupai',
    title: 'ImgUPAI',
    tagline: 'The Infinite Pixel',
    description: 'Creator. The #1 Open Source AI Image Upscaler. A desktop application that uses Real-ESRGAN to hallucinate detail into low-res images. Privacy-first, local-first, GPU-accelerated.',
    role: 'Creator',
    period: 'Jan 2026 - Present',
    tech: ['TypeScript', 'Electron', 'Real-ESRGAN', 'Python'],
    link: 'https://github.com/ekjotsinghmakhija/imgupai',
    type: 'product',
  },
  {
    id: 'ahhcode',
    title: 'AhhCode',
    tagline: 'The Agent That Codes',
    description: 'Lead Engineer. An autonomous coding agent that lives in your terminal. It doesn\'t just suggest code; it reads your file system, plans the architecture, and executes the build.',
    role: 'Lead Engineer',
    period: 'Jan 2026',
    tech: ['TypeScript', 'LLM Agents', 'AST Parsing', 'CLI'],
    link: 'https://github.com/ekjotsinghmakhija/ahhcode',
    type: 'magnum-opus',
  },
  {
    id: 'vgd',
    title: 'VGD',
    tagline: 'The Home Cluster',
    description: 'Creator. A distributed computing protocol allowing you to run an AI cluster using everyday devices. Turn your old laptops and gaming rig into a unified inference engine.',
    role: 'Creator',
    period: 'Jan 2026',
    tech: ['Python', 'Distributed Systems', 'Networking', 'PyTorch'],
    link: 'https://github.com/ekjotsinghmakhija/vgd-source',
    type: 'product', // CHANGED: research -> product
  },
  {
    id: 'wibes-check',
    title: 'WibesCheck',
    tagline: 'The Digital Detective',
    description: 'Maintainer. An all-in-one OSINT (Open Source Intelligence) tool for website analysis. Scans tech stacks, DNS records, and hidden directories in seconds.',
    role: 'Maintainer',
    period: 'Jan 2026',
    tech: ['TypeScript', 'Node.js', 'OSINT', 'Security'],
    link: 'https://github.com/ekjotsinghmakhija/wibes-check',
    type: 'library',
  },
  {
    id: 'thttp',
    title: 'tHttp',
    tagline: 'Raw HTTP Client',
    description: 'Engineer. A Rust-based CLI for testing HTTP requests with plain text. Built to replace Postman with something faster, lighter, and terminal-native.',
    role: 'Engineer',
    period: 'Dec 2025',
    tech: ['Rust', 'HTTP', 'CLI', 'Performance'],
    link: 'https://github.com/ekjotsinghmakhija/thttp',
    type: 'library',
  },
  {
    id: 'metanthropic',
    title: 'Metanthropic AI',
    tagline: 'The Physics of Intelligence',
    description: 'Founder & Director. Leading an independent research lab dedicated to safe AGI. Focused on scaling laws, intrinsic safety, and deterministic reasoning architectures.',
    role: 'Founder & Director',
    period: 'Nov 2025 - Present',
    tech: ['Research', 'PyTorch', 'Rust', 'CUDA'],
    link: 'https://metanthropic.vercel.app',
    type: 'magnum-opus',
  },
  {
    id: 'tealbase',
    title: 'Tealbase',
    tagline: 'Open Source Firebase Alternative',
    description: 'Founder. Architected a scalable backend platform giving developers the power of Postgres with the ease of Firebase. Features auto-generated APIs, realtime subscriptions, and JWT auth.',
    role: 'Founder',
    period: 'Aug 2025 - Present',
    tech: ['PostgreSQL', 'Go', 'TypeScript', 'Realtime'],
    link: 'https://github.com/tealbase/tealbase',
    type: 'magnum-opus',
  },
  {
    id: 'llm-group-chat',
    title: 'LLM Group Chat',
    tagline: 'The Digital Boardroom',
    description: 'A multi-agent consensus engine that solves single-model bias. Orchestrates a "Blind Peer Review" between GPT-4, Claude 3.5, and Gemini.',
    role: 'Creator',
    period: 'Dec 2025',
    tech: ['Python', 'FastAPI', 'React', 'Multi-Agent'],
    link: 'https://github.com/ekjotsinghmakhija/llm-groupchat',
    type: 'product',
  },
  {
    id: 'azhn',
    title: 'Azhn',
    tagline: 'HTML/CSS to SVG Engine',
    description: 'A TypeScript library generating crisp, scalable SVGs from standard web code. Includes a server-side rendering engine for Open Graph automation.',
    role: 'Maintainer',
    period: 'Aug 2025',
    tech: ['TypeScript', 'Node.js', 'SVG'],
    link: 'https://github.com/ekjotsinghmakhija/azhn',
    type: 'library',
  },
  {
    id: 'buttery-auth',
    title: 'Buttery-Auth',
    tagline: 'Full-Stack Auth Solution',
    description: 'A plug-and-play authentication module featuring secure JWT rotation, OAuth 2.0, and Magic Links. Dockerized for instant deployment.',
    role: 'Engineer',
    period: 'Jul 2025',
    tech: ['Node.js', 'MongoDB', 'Docker', 'Security'],
    link: 'https://github.com/ekjotsinghmakhija/buttery-auth',
    type: 'library',
  }
];
