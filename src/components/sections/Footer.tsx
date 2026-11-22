export default function Footer() {
  return (
    <footer className="w-full border-t border-dashed border-zinc-700/80 bg-zinc-950 py-16 text-center mt-24">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-5">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          Autonomous AI & Systems Architecture
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
          Let's build the future of intelligence.
        </h3>

        <div className="w-16 h-px bg-zinc-700 my-1" />

        <p className="text-xs font-mono text-zinc-400 leading-relaxed max-w-md">
          © 2025 – 2026 Ekjot Singh. All rights reserved.
          <br />
          <span className="text-zinc-500 mt-1 inline-block">
            Engineered in Rust, Go, Python & TypeScript. Designed with deliberate minimalism.
          </span>
        </p>
      </div>
    </footer>
  );
}
