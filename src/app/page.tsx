import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import InteractiveGrid from "@/components/ui/InteractiveGrid";
import BentoHero from "@/components/sections/BentoHero";
import GridExperience from "@/components/sections/GridExperience";
import GridProjects from "@/components/sections/GridProjects";
import GridPublications from "@/components/sections/GridPublications";
import GridStackAndEducation from "@/components/sections/GridStackAndEducation";
import GridNotebook from "@/components/sections/GridNotebook";

export default function PersonalHome() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden bg-[#030304] text-zinc-100">
      <Navbar />

      {/* Subtle modern background grid */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <InteractiveGrid />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        {/* Bento Hero & Stat Metric Boxes */}
        <BentoHero />

        {/* 01: High-Impact Experience (RadonHarbor, Metanthropic AI, Tealbase) */}
        <GridExperience />

        {/* 02: Systems & AI Projects (Tealbase, ParachuteDB, ImgUPAI, VostSQL) */}
        <GridProjects />

        {/* 03: Frontier Research & Specifications (Arvi 20B, MahenOCR, M-NAAR, Latent Logic) */}
        <GridPublications />

        {/* 04 & 05: Technical Stack Matrix & Academic/Credentials */}
        <GridStackAndEducation />

        {/* 06: Engineering Log & Deep Dives */}
        <GridNotebook />
      </main>

      <Footer />
    </div>
  );
}
