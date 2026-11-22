export default function Footer() {
  return (
    <footer className="w-full border-t border-dashed border-zinc-700/80 bg-zinc-950/80 py-16 text-center mt-20 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
        <h3 className="text-2xl font-serif text-zinc-100 tracking-tight">
          Let's build the future.
        </h3>

        {/* Subtle decorative divider */}
        <div className="w-12 h-[1px] bg-zinc-600 rounded-full" />

        <p className="text-xs font-mono text-zinc-400 leading-relaxed">
          © 2025 - 2026 Ekjot Singh. All rights reserved.
          <br />
          <span className="text-zinc-500 mt-1 inline-block">
            Constructed with Next.js, Tailwind, and excessive amounts of caffeine.
          </span>
        </p>
      </div>
    </footer>
  );
}
