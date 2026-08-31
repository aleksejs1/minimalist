import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    order: z.number(),
    category: z.enum(['philosophy', 'digital', 'physical', 'mindset', 'finance', 'work']),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number().default(3),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(250),
    weekNumber: z.number().min(0).max(54),
    season: z.enum(['winter', 'spring', 'summer', 'autumn']),
    publishedDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    readingTimeMinutes: z.number().default(3),
    author: z.string().default('minimalist.lv'),
    draft: z.boolean().default(false),
  }),
});

const toolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.enum(['text-and-writing', 'note-taking', 'web-browsing', 'communication', 'task-management', 'system-utilities', 'media-and-readers', 'hardware-and-edc']),
    websiteUrl: z.string().url(),
    sourceCodeUrl: z.string().url().optional(),
    isOpenSource: z.boolean().default(true),
    isOfflineFirst: z.boolean().default(true),
    isZeroTelemetry: z.boolean().default(true),
    license: z.string(),
    platforms: z.array(z.enum(['linux', 'macos', 'windows', 'android', 'ios', 'web', 'cli'])),
    recommendationStatus: z.enum(['recommended', 'lightweight_hero', 'notable_mention', 'cli']),
    pros: z.array(z.string()).min(1),
    cons: z.array(z.string()).min(1),
    minimalistVerdict: z.string(),
  }),
});

export const collections = {
  guides: guidesCollection,
  blog: blogCollection,
  tools: toolsCollection,
};
