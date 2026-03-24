import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    firstposted: z.coerce.date().optional(),
    lastupdate: z.coerce.date().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEn: z.string(),
    description: z.string(),
    descriptionEn: z.string(),
    category: z.enum(['robot', 'board', 'gadget']),
    thumbnail: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
    order: z.number().optional(),
  }),
});

export const collections = { blog, portfolio };
