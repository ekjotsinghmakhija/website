import fs from 'fs';
import path from 'path';

const slugMap = {
  'announcing-metanthropic.mdx': 'announcing-metanthropic',
  'arvi-20b.mdx': 'arvi-20b-moe-release',
  'chronometric-flux-gating.mdx': 'chronometric-flux-gating-cfg',
  'dataset-distillation.mdx': 'dataset-distillation-lgm',
  'fragility-of-guardrails.mdx': 'fragility-of-guardrails',
  'kp-idp.mdx': 'kp-idp',
  'latent-logic-topology.mdx': 'latent-logic-topology',
  'm-naar.mdx': 'unlearning-trilemma-m-naar',
  'mahenocr.mdx': 'mahenocr-vlm-architecture',
  'moral-bias.mdx': 'moral-bias-interpretability',
  'oblique-guard.mdx': 'oblique-guard-latent-geometry'
};

const svgBack = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>';
const svgExt = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>';

const getTsxTemplate = (cleanText) => `import Link from 'next/link';

export default function ResearchDeepSummary() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-zinc-800 pb-6">
        <Link href="/blog" className="text-sm text-zinc-400 hover:text-zinc-100 flex items-center gap-2 transition-colors">
          ${svgBack} Back to Research Library
        </Link>
        <a
          href="https://metanthropic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 hover:text-teal-300 rounded-lg text-sm font-medium transition-all border border-teal-500/20 shadow-lg shadow-teal-500/5"
        >
          Read Full Official Paper on Metanthropic ${svgExt}
        </a>
      </div>

      <article className="prose prose-invert prose-teal max-w-none text-zinc-300 leading-relaxed space-y-6">
        {summaryText.split('\\n\\n').map((paragraph, idx) => {
          if (!paragraph.trim()) return null;
          if (paragraph.length < 60 && !paragraph.endsWith('.')) {
            return <h2 key={idx} className="text-2xl font-semibold text-zinc-100 mt-8 mb-4">{paragraph}</h2>;
          }
          return <p key={idx}>{paragraph}</p>;
        })}
      </article>
    </div>
  );
}

const summaryText = \`\n${cleanText}\n\`;
`;

for (const [mdxFile, slug] of Object.entries(slugMap)) {
  const sourcePath = path.join(process.cwd(), 'research', mdxFile);
  const targetDir = path.join(process.cwd(), 'src', 'app', 'blog', slug);
  const targetPagePath = path.join(targetDir, 'page.tsx');

  if (fs.existsSync(sourcePath)) {
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    let rawData = fs.readFileSync(sourcePath, 'utf8');

    rawData = rawData.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
    rawData = rawData.replace(/!\[.*?\]\(.*?\)/g, '');
    rawData = rawData.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    rawData = rawData.replace(/```[\s\S]*?```/g, '[Technical implementation details omitted for summary]');
    rawData = rawData.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1');
    rawData = rawData.replace(/<[^>]*>?/gm, '');
    rawData = rawData.replace(/^#+\s+/gm, '');

    let deepSummary = rawData.trim().substring(0, 4000);
    if (rawData.length > 4000) {
        deepSummary += '\\n\\n[End of Summary Extract. Please visit Metanthropic for the full research paper.]';
    }

    // Safely remove backticks so they don't break the TSX file syntax
    deepSummary = deepSummary.replace(/`/g, "'").replace(/\\/g, '');

    fs.writeFileSync(targetPagePath, getTsxTemplate(deepSummary));
    console.log("✅ Generated pure TSX summary for: " + slug);
  } else {
    console.log("⚠️ Missing source file: " + sourcePath);
  }
}
