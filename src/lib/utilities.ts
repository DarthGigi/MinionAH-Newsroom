import { posts, type Post } from "$content/index";
import { error } from "@sveltejs/kit";
import type { Component } from "svelte";

export function getMediaType(item: string) {
  const extension = item.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "mp4":
    case "webm":
    case "mov":
    case "ogg":
      return "video";
    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
    case "webp":
      return "image";
    default:
      return "unknown";
  }
}

export function getPostMetadata(slug: string = "index") {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return posts;
}

function slugFromPath(path: string) {
  return path.replace("/src/content/", "").replace(".md", "");
}

export type PostResolver = () => Promise<{ default: Component; metadata: Post }>;

export async function getPost(slug: string = "index") {
  const modules = import.meta.glob("/src/content/**/*.md");

  let match: { path?: string; resolver?: PostResolver } = {};

  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path).includes(slug)) {
      match = { path, resolver: resolver as unknown as PostResolver };
      break;
    }
  }

  const post = await match?.resolver?.();
  const metadata = getPostMetadata(slug);
  if (!post || !metadata) {
    error(404, "Could not find the post.");
  }

  return {
    component: post.default,
    metadata,
  };
}
