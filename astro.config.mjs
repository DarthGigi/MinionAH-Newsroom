import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  site: "https://newsroom.minionah.com/",
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    sitemap(),
    robotsTxt(),
    svelte({
      dynamicCompileOptions({ filename, compileOptions }) {
        // Dynamically set runes mode per Svelte file
        if (!filename.includes("node_modules") && !compileOptions.runes) {
          return { runes: true };
        }
      }
    }),
    playformCompress({
      CSS: false,
      HTML: false,
      Image: {
        sharp: {
          gif: false
        }
      }
    })
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
  prefetch: true
});
