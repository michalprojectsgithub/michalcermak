import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(['active', 'paused', 'archived']),
    url: z.string().url().optional(),
    tech: z.array(z.string()).optional(),
  }),
});

const piano = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/piano' }),
  schema: z.object({
    title: z.string(),
    composer: z.string(),
    youtubeId: z.string(),
    note: z.string(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    status: z.enum(['read', 'reading', 'want-to-read']),
    note: z.string().optional(),
  }),
});

const animeLearnings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/anime-learnings' }),
  schema: z.object({
    title: z.string(),
    studio: z.string().optional(),
    year: z.number().optional(),
    note: z.string(),
  }),
});

const art = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/art' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    medium: z.string(),
    year: z.number().optional(),
  }),
});

export const collections = {
  journal,
  projects,
  piano,
  books,
  'anime-learnings': animeLearnings,
  art,
};
