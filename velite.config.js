import { defineConfig, s } from "velite";

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.
const baseSchema = s.object({
  isPublic: s.boolean().optional() ?? true,
  title: s.string(),
  description: s.string().transform((value) => value.replace(/\n/g, "<br>")),
  type: s.string().optional(),
  project: s.string().optional(),
  pubDate: s
    .string()
    .or(s.date())
    .transform((val) => new Date(val)),
  heroImage: s.string().optional(),
  classes: s.string().optional(),
  path: s.path(),
  content: s.markdown(),
  slug: s.string().optional(),
  slugFull: s.string().optional(),
  isSpecial: s.boolean().optional() ?? false,
});

const postSchema = baseSchema.transform((data) => {
  // Remove 'posts/' and 'misc/' prefix from the path to create clean URLs
  const cleanSlug = data.path.replace(/^posts\//, "").replace(/^misc\//, "");
  return {
    ...data,
    slug: cleanSlug,
    slugFull: `/${cleanSlug}`,
    isSpecial: data.path.startsWith("misc/"),
  };
});

export default defineConfig({
  root: "./src/content",
  collections: {
    posts: {
      name: "Post",
      pattern: "./**/*.md",
      schema: postSchema,
    },
  },
  prepare: ({ posts }) => {
    // Remove the 'posts/' and 'misc/' prefixes from the path of each post
    posts.forEach((post) => {
      post.path = post.path.replace(/^posts\//, "");
      post.path = post.path.replace(/^misc\//, "");
    });
  },
});
