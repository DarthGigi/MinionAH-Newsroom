import { glob } from 'astro/loaders';
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    isPublic: z.boolean().optional() ?? true,
    title: z.string(),
    description: z.string().transform((value) => value.replace(/\n/g, "<br>")),
    // type: is string but can be empy with ?
    type: z.string().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string().optional(),
    classes: z.string().optional()
  })
});

export const collections = { blog };
