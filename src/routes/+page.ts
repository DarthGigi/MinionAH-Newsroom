import type { Post } from "$lib/types/post";
import type { PageLoad } from "./$types";

export const prerender = true; // Enable prerendering for this page

export const load = (async () => {
  const files = import.meta.glob<Post>("/src/content/posts/**/*.md");

  // Get metadata for all posts
  const posts = await Promise.all(
    Object.entries(files).map(async ([path, file]) => {
      const { metadata } = await file();
      return {
        slug: path
          .replace("/src/content/posts/", "")
          .replace(/^(minionah|tonantzintla)\//, "")
          .replace(".md", "")
          .replace("/index", ""),
        metadata,
      };
    })
  );

  // Filter out unpublished posts
  const publishedPosts = posts.filter((post) => post.metadata.isPublic !== false);

  // Sort posts by date in descending order
  publishedPosts.sort((a, b) => {
    return new Date(b.metadata.pubDate).getTime() - new Date(a.metadata.pubDate).getTime();
  });

  return {
    posts: publishedPosts,
  };
}) satisfies PageLoad;
