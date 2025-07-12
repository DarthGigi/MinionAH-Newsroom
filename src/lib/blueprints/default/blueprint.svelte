<script lang="ts" module>
  export {
    a,
    blockquote,
    code,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    img,
    li,
    ol,
    p,
    pre,
    table,
    td,
    th,
    tr,
    ul,
  } from "@svecodocs/kit";
</script>

<script lang="ts">
  import { page } from "$app/state";

  import FormattedDate from "$lib/components/FormattedDate.svelte";
  import { Button } from "$lib/components/ui/button";
  import type { Post } from "$lib/types/post";
  import { getAllPosts } from "$lib/utilities";
  import type { Snippet } from "svelte";

  let {
    metadata,
    children,
  }: {
    metadata: Post["metadata"];
    children: Snippet;
  } = $props();

  const { description, heroImage, pubDate, title, type } = $derived(metadata);

  const posts = getAllPosts()
    .filter((post) => post.isPublic !== false)
    .filter((post) => post.isSpecial !== true)
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  const params = $derived(page.params);
  const currentIndex = $derived(posts.findIndex((post) => post.slug === params.slug));
  const previousPost = $derived(posts[currentIndex + 1]?.slug);
  const nextPost = $derived(posts[currentIndex - 1]?.slug);
</script>

<main class="relative overflow-hidden py-8">
  <article
    class="prose prose-lg prose-neutral prose-invert! prose-headings:scroll-m-20 prose-a:text-white prose-img:pointer-events-none prose-img:w-full prose-img:rounded-lg prose-video:w-full prose-video:rounded-lg relative mx-auto mt-6 max-w-4xl px-4 py-4 sm:px-4 lg:px-6">
    <div class="mx-auto mt-0 mb-5 max-w-2xl">
      <div class="mx-auto">
        <div class="relative z-50 text-xs font-bold text-neutral-300">
          <span class="relative z-50 block uppercase">{type}</span>
          <span class="relative z-50 mt-1 block text-sm font-semibold">
            <FormattedDate date={pubDate} />
          </span>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-0 mb-0 max-w-2xl">
      <div class="mx-auto">
        <h1 class="relative z-50 text-5xl font-bold text-white">
          {title}
        </h1>
      </div>
    </div>
    {#if description}
      <div class="mx-auto mt-5 mb-0 max-w-2xl">
        <div class="mx-auto">
          <p class="relative z-50 text-2xl leading-7 font-medium text-white">
            {description}
          </p>
        </div>
      </div>
    {/if}
    {#if heroImage}
      <img src={heroImage} alt="heroImage" class="mx-auto" />
    {/if}
    <div class="prose-lg mx-auto leading-[1.688rem]">
      {@render children?.()}
    </div>
  </article>
</main>
<!-- Previous/Next post -->
<div class="navigation">
  <div
    class={`mx-auto flex max-w-4xl px-4 py-8 sm:px-6 lg:px-8 ${previousPost && nextPost ? "justify-between" : previousPost ? "justify-start" : nextPost ? "justify-end" : ""}`}>
    {#if previousPost}
      <Button
        href={`/${previousPost}`}
        variant="outline"
        class="group text-muted-foreground flex h-auto flex-row-reverse p-4 text-sm font-medium">
        <div class="text-muted-foreground ml-2">
          Previous
          <p class="text-white">{posts[currentIndex + 1]?.title}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left-circle size-5 transition-all duration-300 group-hover:-translate-x-1">
            <circle cx="12" cy="12" r="10" />
            <path d="M16 12H8" />
            <path d="m12 8-4 4 4 4" />
          </svg>
        </div>
      </Button>
    {/if}
    {#if nextPost}
      <Button
        href={`/${nextPost}`}
        variant="outline"
        class="group text-muted-foreground flex h-auto p-4 text-sm font-medium">
        <div class="text-muted-foreground mr-2">
          Next
          <p class="text-white">{posts[currentIndex - 1]?.title}</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right-circle size-5 transition-all duration-300 group-hover:translate-x-1">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="m12 16 4-4-4-4" />
          </svg>
        </div>
      </Button>
    {/if}
  </div>
</div>
