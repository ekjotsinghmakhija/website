import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { SOCIALS } from '@/lib/socials';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] py-16">
       <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Let's build the future.</h2>

          <div className="flex gap-6 mb-8">
             <a href={SOCIALS.github} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
             <a href={SOCIALS.twitter} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
             <a href={SOCIALS.linkedin} target="_blank" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
             <a href={SOCIALS.email} className="text-gray-500 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>

          <p className="text-xs text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} Ekjot Singh. All rights reserved. <br />
            Constructed with Next.js, Tailwind, and excessive amounts of caffeine.
          </p>
       </div>
    </footer>
  );
}
