import { defineCollection, reference } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    project: reference('projects').optional(),
    draft: z.boolean().default(false),
  }),
})

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number().int(),
    status: z.enum(['Open source', 'Private package']),
    tags: z.array(z.string()).default([]),
    website: z.url().optional(),
    repository: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog, projects }
