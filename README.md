# Personal Portfolio Website

A high-performance, interactive personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. This project features a modern "dark mode" aesthetic with interactive grid backgrounds, MDX support for blogging, and smooth animations.

## ⚡️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Content:** MDX (@next/mdx) for blog posts and case studies
- **Font:** Geist (Vercel's sans-serif font)

## 🚀 Features

- **Interactive UI:** Custom interactive grid background and hover effects.
- **MDX Support:** Write blog posts (`/blog`) and project case studies (`/experience`) using Markdown.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Dynamic Data:** Content is managed via structured data files in `src/lib/`, making it easy to update without touching UI code.
- **Performance:** Optimized with Next.js font optimization and static site generation.

## 🛠️ Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/yourusername/ekjotsingh-website.git](https://github.com/yourusername/ekjotsingh-website.git)
    cd ekjotsingh-website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    bun install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```text
src/
├── app/                 # Next.js App Router pages
│   ├── blog/            # Blog listing and post pages
│   ├── experience/      # Work experience & case studies (MDX)
│   ├── projects/        # Project portfolio pages
│   └── layout.tsx       # Root layout
├── components/
│   ├── layout/          # Navbar, Footer, etc.
│   ├── sections/        # Homepage sections (Hero, Stack, etc.)
│   └── ui/              # Reusable UI components (Buttons, Cards)
├── lib/                 # Data sources (Edit these to update content)
│   ├── blog.ts          # Blog post metadata
│   ├── experience.ts    # Work history data
│   ├── projects.ts      # Project portfolio data
│   └── social.ts        # Social media links
└── public/              # Static assets (images, PDFs)
```

## 📝 Customizing Content

You can update the website content by modifying the TypeScript files in `src/lib/`:

- **Projects:** Edit `src/lib/personal-projects.ts` to add or remove portfolio items.
- **Experience:** Edit `src/lib/experience.ts` to update your work history.
- **Blog:** Add entries to `src/lib/blog.ts` and create corresponding MDX files if needed.
- **Social Links:** Update `src/lib/socials.ts` to change your social media handles.

## 🚢 Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will automatically detect the Next.js settings and deploy.

---

Built by **Ekjot Singh Makhija**.
