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
  import FormattedDate from "$lib/components/FormattedDate.svelte";

  import type { Post } from "$lib/types/post";
  import type { Snippet } from "svelte";

  let {
    metadata,
    children,
  }: {
    metadata: Post["metadata"];
    children: Snippet;
  } = $props();

  const { classes, description, heroImage, isPublic, pubDate, title, type, lastUpdated } =
    $derived(metadata);

  const pubDateFormat = $derived(new Date(pubDate));
  const lastUpdatedFormat = $derived(lastUpdated ? new Date(lastUpdated) : null);
</script>

<main class="relative overflow-hidden py-8">
  <article
    class="prose prose-lg prose-neutral prose-invert! prose-headings:scroll-m-20 prose-a:text-white prose-img:pointer-events-none prose-img:w-full prose-img:rounded-lg prose-video:w-full prose-video:rounded-lg relative mx-auto mt-6 max-w-4xl px-4 py-4 sm:px-4 lg:px-6">
    <div class="mx-auto mt-0 mb-5 max-w-2xl">
      <div class="mx-auto">
        <div class="relative z-50 text-xs font-bold text-neutral-300">
          <span class="relative z-50 block uppercase">{type}</span>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-0 mb-0 max-w-2xl">
      <div class="mx-auto">
        <h1 class="relative z-50 text-5xl font-bold text-white">{title}</h1>
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
    <div class="prose-lg mx-auto leading-[1.688rem]">
      {@render children?.()}
      <small class="text-accent">
        <span>This document is effective as of <FormattedDate date={pubDateFormat} /></span>
        {#if lastUpdatedFormat}
          <br />
          <span>
            This document was last updated on <FormattedDate date={lastUpdatedFormat} />
          </span>
        {/if}
      </small>
    </div>
  </article>
</main>
