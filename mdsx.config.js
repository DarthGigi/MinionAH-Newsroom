import { baseRehypePlugins, baseRemarkPlugins } from "@svecodocs/kit/mdsxConfig";
import { defineConfig } from "mdsx";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import rehypeExternalLinks from "rehype-external-links";
import remarkToc from "remark-toc";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const mdsxConfig = defineConfig({
  extensions: [".md"],
  remarkPlugins: [...baseRemarkPlugins, remarkToc],
  rehypePlugins: [
    ...baseRehypePlugins,
    [
      rehypeExternalLinks,
      {
        target: "_blank",
        rel: ["noopener"],
      },
    ],
  ],
  blueprints: {
    default: {
      path: resolve(__dirname, "./src/lib/blueprints/default/blueprint.svelte"),
    },
    misc: {
      path: resolve(__dirname, "./src/lib/blueprints/misc/PrivacyTosBlueprint.svelte"),
    },
  },
});
