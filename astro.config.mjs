import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import remarkToc from 'remark-toc';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://newsroom.minionah.com/",
  integrations: [mdx(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), robotsTxt(), react()],
  markdown: {
    remarkPlugins: [remarkToc]
  },
  prefetch: true
});