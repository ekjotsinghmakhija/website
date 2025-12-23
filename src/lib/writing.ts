/* FILE: src/lib/writing.ts */
export interface Essay {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link: string; // Internal or External (e.g., Substack/X)
}

export const WRITING: Essay[] = [
  {
    id: 'platonic-representation',
    title: 'The Platonic Representation Hypothesis',
    date: 'Dec 2025',
    excerpt: 'Why scaling laws are actually convergence laws. As models get larger, they don\'t just get smarter—they get more similar, converging on a shared representation of reality.',
    link: 'https://x.com/ek10sh' // Replace with actual link
  },
  {
    id: 'safety-physics',
    title: 'Safety is Physics, Not Policy',
    date: 'Nov 2025',
    excerpt: 'We cannot regulate our way to safe AGI. We must discover the "thermodynamics" of neural networks to build mathematically bounded systems.',
    link: '#'
  },
  {
    id: 'glass-box',
    title: 'The Case for Glass Box AI',
    date: 'Oct 2025',
    excerpt: 'Black box models are a dead end. True intelligence requires introspective capability—the ability to trace a thought back to its source.',
    link: '#'
  }
];
