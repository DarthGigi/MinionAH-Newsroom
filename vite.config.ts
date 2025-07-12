import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import devtoolsJson from "vite-plugin-devtools-json";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
  plugins: [sveltekit(), tailwindcss(), devtoolsJson()],
  server: {
    fs: {
      allow: [resolve(__dirname, "./.velite")],
    },
  },
  assetsInclude: ["**/*.md"],
});
