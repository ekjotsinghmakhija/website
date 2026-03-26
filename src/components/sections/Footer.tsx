export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/50 bg-zinc-950/50 py-16 text-center mt-20 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
        <h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">
          Let's build the future.
        </h3>

        {/* Subtle decorative divider */}
        <div className="w-12 h-[2px] bg-teal-500/50 rounded-full"></div>

        <p className="text-sm text-zinc-500 leading-relaxed">
          © 2025 - 2026 Ekjot Singh. All rights reserved.
          <br />
          Constructed with Next.js, Tailwind, and excessive amounts of caffeine.
        </p>
      </div>
    </footer>
  );
}
