/* FILE: src/lib/experience.ts */
export const EXPERIENCE = [
  {
    id: "metanthropic",
    company: "Metanthropic AI",
    role: "Founder & Director",
    period: "Nov 2025 — Present",
    location: "India · Remote",
    description: "The 'Alignment Gap' is the defining crisis of our time. I founded Metanthropic to move the industry from probabilistic guessing to deterministic reasoning. We are not just training models; we are mapping the physics of intelligence to ensure safe AGI.",
    slug: "metanthropic",
    logo: "/metanthropic-logo.png", // FIXED: Added leading slash
    theme: {
      primary: "text-blue-400",
      secondary: "text-purple-400",
      gradient: "from-blue-400 via-indigo-400 to-purple-400",
      border: "hover:border-blue-500/50",
      dot: "bg-blue-500"
    }
  },
  {
    id: "tealbase",
    company: "Tealbase",
    role: "Founder & Architect",
    period: "Aug 2025 — Present",
    location: "India · Remote",
    description: "A rebellion against the 'Success Disaster.' I built Tealbase to prove that you don't need a black-box BaaS to move fast. We give developers the realtime magic of Firebase with the raw power and correctness of Postgres.",
    slug: "tealbase",
    logo: "/tealbase-logo.png", // FIXED: Added leading slash
    theme: {
      primary: "text-teal-400",
      secondary: "text-emerald-400",
      gradient: "from-teal-400 via-emerald-400 to-cyan-400",
      border: "hover:border-teal-500/50",
      dot: "bg-teal-500"
    }
  },
];
