/* FILE: tailwind.config.ts */
import type { Config } from "tailwindcss";

const config: Config = {
  // ... your existing content array
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ... your existing theme
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // ADD THIS LINE
  ],
};
export default config;
