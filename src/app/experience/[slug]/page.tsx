import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import { EXPERIENCE } from '@/lib/experience';

export default function ExperienceDetail({ params }: { params: { slug: string } }) {
  const job = EXPERIENCE.find(j => j.slug === params.slug);
  if (!job) return notFound();

  return (
    <div className="min-h-screen bg-[#030304] text-white font-sans">
      <Navbar />
      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-5xl font-serif mb-4">{job.company}</h1>
          <div className="flex justify-between items-center text-xl text-gray-400">
            <span>{job.role}</span>
            <span className="font-mono text-sm">{job.period}</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="lead text-xl text-gray-300">{job.description}</p>
          {/* In a real app, you would render MDX content here */}
          <div className="bg-[#111] p-8 rounded border border-white/10 mt-8">
            <p className="font-mono text-sm text-[#3B82F6] mb-4"> // IMPACT REPORT</p>
            <ul className="space-y-4 list-disc pl-4 text-gray-400">
              <li>Architected the core system...</li>
              <li>Led a team of researchers...</li>
              <li>Published key findings...</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
