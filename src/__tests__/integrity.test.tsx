// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { BLOG_POSTS } from '@/lib/blog';
import { PERSONAL_PROJECTS } from '@/lib/personal-projects';
import fs from 'fs';
import path from 'path';

describe('Project & Blog Integrity', () => {
  it('verifies that every blog registry entry has a physical file', () => {
    BLOG_POSTS.forEach(post => {
      const pagePath = path.join(process.cwd(), `src/app/blog/${post.slug}/page.tsx`);
      if (!fs.existsSync(pagePath)) {
        throw new Error(`CRITICAL: Registry slug "${post.slug}" missing file at ${pagePath}`);
      }
    });
  });

  it('ensures no duplicate slugs exist in the registry', () => {
    const slugs = BLOG_POSTS.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(slugs.length).toBe(uniqueSlugs.size);
  });

  it('checks for metadata consistency (non-empty strings)', () => {
    BLOG_POSTS.forEach(post => {
      expect(post.title.length).toBeGreaterThan(0);
      expect(post.date.length).toBeGreaterThan(0);
      expect(post.excerpt.length).toBeGreaterThan(0);
    });
  });

  it('verifies that all featured projects have a corresponding blog post', () => {
    const blogSlugs = BLOG_POSTS.map(p => p.slug);
    PERSONAL_PROJECTS.filter(p => p.featured).forEach(project => {
       const found = blogSlugs.some(slug => slug.includes(project.id) || project.id.includes(slug));
       if (!found) {
         throw new Error(`WARNING: Featured project "${project.title}" (${project.id}) has no matching blog entry.`);
       }
    });
  });

  it('ensures no orphaned, junk, or case-mismatched folders exist in the blog directory', () => {
    const blogDir = path.join(process.cwd(), 'src/app/blog');
    const physicalItems = fs.readdirSync(blogDir);

    // Get all valid slugs from your registry
    const validSlugs = new Set(BLOG_POSTS.map(post => post.slug));

    physicalItems.forEach(item => {
      const itemPath = path.join(blogDir, item);

      // We only care about directories, ignore files like page.tsx
      if (fs.statSync(itemPath).isDirectory()) {
        if (!validSlugs.has(item)) {
          throw new Error(`CRITICAL: Rogue folder found! "${item}" is not a registered blog slug in src/lib/blog.ts. Please delete this folder or fix its casing.`);
        }
      }
    });
  });
});
