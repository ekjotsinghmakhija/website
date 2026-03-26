import Link from "next/link";

export default function MahenOCR() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 relative overflow-hidden font-mono selection:bg-yellow-500/30">
      {/* Scanning Reticle Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-yellow-500/50 pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-yellow-500/50 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-yellow-500/50 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-yellow-500/50 pointer-events-none"></div>

      {/* Laser Scan Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-yellow-500/50 shadow-[0_0_10px_#eab308] pointer-events-none animate-[scan_4s_ease-in-out_infinite]"></div>

      <div className="max-w-4xl mx-auto py-20 px-6 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16 pb-6 border-b border-yellow-900/30">
          <Link
            href="/blog"
            className="text-sm text-zinc-500 hover:text-yellow-500 flex items-center gap-2 transition-colors uppercase tracking-widest"
          >
            {"<"} System.Index
          </Link>
          <a
            href="https://metanthropic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-yellow-500 text-black hover:bg-yellow-400 rounded text-sm font-bold transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)]"
          >
            [ EXECUTE PAPER FETCH ]
          </a>
        </div>

        <header className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            Mahen<span className="text-yellow-500">OCR</span>
          </h1>
          <p className="text-xl text-yellow-500/80 font-light max-w-2xl">
            Commercial-Grade Optical Character Recognition via a
            highly-optimized 1B Parameter Vision-Language Model.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-xs text-yellow-500/60 uppercase">
          <div className="border border-yellow-900/50 p-3 bg-zinc-900/50 rounded">
            TARGET: VISION
          </div>
          <div className="border border-yellow-900/50 p-3 bg-zinc-900/50 rounded">
            SIZE: 1B PARAMS
          </div>
          <div className="border border-yellow-900/50 p-3 bg-zinc-900/50 rounded">
            SPEED: LATENCY {"<"} 50MS
          </div>
          <div className="border border-yellow-900/50 p-3 bg-zinc-900/50 rounded">
            DEPLOY: EDGE/LOCAL
          </div>
        </div>

        <article className="space-y-8 text-base md:text-lg leading-relaxed text-zinc-400 font-sans">
          <p>
            Traditional OCR pipelines rely on fragile, multi-stage heuristics:
            bounding box detection, image binarization, and independent
            character classification. These systems routinely fail on complex
            document layouts, handwritten text, or heavily artifacted images.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4 font-mono flex items-center gap-3">
            <span className="w-3 h-3 bg-yellow-500 inline-block"></span>
            The VLM Approach
          </h2>
          <p>
            MahenOCR discards the multi-stage pipeline entirely. By leveraging a
            streamlined 1-Billion parameter Vision-Language Model (VLM), the
            system translates raw pixel inputs directly into structured semantic
            text. The vision encoder extracts deep spatial representations,
            while the language decoder reconstructs the text with full
            contextual understanding, naturally correcting typographical errors
            based on surrounding linguistic context.
          </p>

          <p className="p-6 bg-zinc-900/80 border-l-4 border-yellow-500 text-zinc-300">
            Because of its highly compressed 1B parameter footprint, MahenOCR
            achieves commercial-grade accuracy while maintaining edge-device
            deployability. It processes complex tabular data, receipts, and
            handwritten notes locally, ensuring total data privacy without
            reliance on cloud-based vision APIs.
          </p>
        </article>
      </div>

      {/* Tailwind custom animation definition needed for the laser */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `,
        }}
      />
    </div>
  );
}
