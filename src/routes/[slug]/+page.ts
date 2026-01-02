import { dev } from "$app/environment";
import { getPost } from "$lib/utilities.js";
import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types.js";

export const prerender = true; // Enable prerendering for this page

export const load: PageLoad = async (event) => {
  const { component, metadata } = await getPost(event.params.slug);

  if (metadata.isPublic === false && !dev) {
    redirect(307, "/");
  }

  return {
    component,
    metadata,
    title: metadata.title || "Post",
  };
};

export const entries: EntryGenerator = () => {
  const modules = import.meta.glob("/src/content/**/*.md");
  const entries = [];

  for (const path of Object.keys(modules)) {
    const slug = path
      .replace("/src/content/", "")
      .replace("misc/", "")
      .replace(/^posts\/[^/]+\//, "")
      .replace("posts/", "")
      .replace(".md", "")
      .replace("/index", "");
    entries.push({ slug });
  }

  return entries;
};
