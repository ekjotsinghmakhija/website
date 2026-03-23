import { notFound } from 'next/navigation';
import { EXPERIENCE } from '@/lib/experience';

// If you have a layout wrapper or custom UI for this page, import it here
// import ExperienceLayout from '@/components/layout/ExperienceLayout';

export function generateStaticParams() {
  return EXPERIENCE.map((job) => ({
    // Changed from job.slug to job.id
    slug: job.id,
  }));
}

export default function ExperienceDetail({ params }: { params: { slug: string } }) {
  // Changed from j.slug to j.id
  const job = EXPERIENCE.find((j) => j.id === params.slug);

  if (!job) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-2">{job.role}</h1>
      <h2 className="text-xl text-emerald-400 mb-8">{job.company}</h2>
      <p className="text-zinc-400 leading-relaxed mb-8">{job.description}</p>

      <div className="flex flex-wrap gap-2">
        {job.techStack?.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
