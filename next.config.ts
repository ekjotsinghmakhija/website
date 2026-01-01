import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            // Security: Enforces HTTPS and protects subdomains
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            // Security: Prevents clickjacking
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // Security: Prevents the browser from sniffing MIME types
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // Security: Controls how much referrer info is sent to other sites
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            // Security: explicitly disables powerful browser features you likely don't need
            key: 'Permissions-Policy',
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
             // Security: Basic Content Security Policy (Report Only mode to prevent breaking things)
             key: 'Content-Security-Policy-Report-Only',
             value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:;",
          }
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
