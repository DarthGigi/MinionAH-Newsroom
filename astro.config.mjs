import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://newsroom.minionah.com/",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    robotsTxt(),
    svelte(),
    playformCompress()
  ],
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noopener"]
        }
      ]
    ]
  },
  prefetch: true,
  output: "server",
  adapter: vercel()
});
