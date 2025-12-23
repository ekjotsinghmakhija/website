/* FILE: src/lib/personal-projects.ts */

export type ProjectType = 'magnum-opus' | 'product' | 'library';

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
    link: 'https://github.com/tealbase/tealbase', // Add actual link if available
    type: 'magnum-opus',
  },
  {
    id: 'llm-group-chat',
    title: 'LLM Group Chat',
    tagline: 'The Digital Boardroom',
    description: 'A multi-agent consensus engine that solves single-model bias. Orchestrates a "Blind Peer Review" between GPT-4, Claude 3.5, and Gemini, culminating in a "Chairman" synthesis for higher fidelity answers.',
    role: 'Creator',
    period: 'Dec 2025',
    tech: ['Python', 'FastAPI', 'React', 'Multi-Agent', 'OpenRouter'],
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
