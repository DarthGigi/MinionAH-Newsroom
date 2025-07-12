<script lang="ts">
  import BaseHead from "$lib/components/BaseHead.svelte";
  import FormattedDate from "$lib/components/FormattedDate.svelte";
  import { SITE_DESCRIPTION, SITE_TITLE } from "$lib/consts";
  import { cn } from "$lib/utils";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />

<main class="mt-4 p-4 text-left leading-6 tracking-tight">
  <section class="mt-0 overflow-hidden pb-20 md:px-10">
    <div class="mx-auto max-w-84 leading-6 tracking-tight sm:max-w-92 md:max-w-173 xl:max-w-245">
      <h2 class="mb-6 text-3xl font-bold tracking-normal">Latest News</h2>
      <ul
        class="m-0 flex shrink-0 grow-0 items-stretch justify-center gap-4 p-0 text-left leading-6 tracking-tight [content:''] [flex-flow:row_wrap] lg:justify-between">
        {#each data.posts as post, index (index)}
          {#if index === 0}
            <li
              class="bg-background hover:bg-popover relative m-0 block h-104 w-84 list-none overflow-hidden rounded-xl p-0 transition-colors duration-500 sm:h-114 sm:w-92 md:h-96 md:w-173 xl:h-138 xl:w-245">
              <a
                href={`/${post.slug}`}
                class="group bg-background relative block h-full w-full visited:no-underline hover:[text-decoration:none] hover:group-hover:[text-decoration:none]">
                <img
                  src={post.metadata.heroImage}
                  alt="heroImage"
                  class={cn(
                    "pointer-events-none z-0 h-full w-full overflow-hidden rounded-xl object-cover object-center transition-all duration-500 group-hover:scale-[1.03]",
                    post.metadata.classes
                  )} />
                <div class="absolute bottom-0 z-20 w-full">
                  <div class="box-border flex w-full shrink-0 grow flex-col px-9 pb-9">
                    <div>
                      <div
                        class="text-xs font-semibold text-white uppercase text-shadow-lg sm:mb-3 md:text-sm">
                        {post.metadata.type}
                      </div>
                      <div class="text-xl font-bold text-shadow-lg md:text-4xl">
                        {post.metadata.title}
                      </div>
                    </div>
                    <div class="font-semibold text-white text-shadow-lg sm:mt-3">
                      <FormattedDate date={post.metadata.pubDate} />
                    </div>
                  </div>
                </div>
              </a>
            </li>
          {:else}
            <li
              class="md relative m-0 flex w-full shrink list-none p-0 last:even:mx-auto lg:w-[calc(50%-1rem)]">
              <a
                href={`/${post.slug}`}
                class="group border-accent bg-background relative z-0 flex h-full w-full flex-col overflow-hidden rounded-xl border-2 visited:no-underline hover:[text-decoration:none] hover:group-hover:[text-decoration:none]">
                <div
                  class="border-accent relative h-64 min-h-auto w-full shrink basis-auto overflow-hidden border-b">
                  <img
                    src={post.metadata.heroImage}
                    alt="heroImage"
                    class={cn(
                      "pointer-events-none h-full w-full rounded-t-[0.625rem] object-cover object-center transition-all duration-500 group-hover:scale-[1.03]",
                      post.metadata.classes
                    )} />
                </div>
                <div class="flex shrink-0 grow basis-auto flex-col justify-between p-8">
                  <div>
                    <div class="mb-2 text-sm text-white uppercase">
                      {post.metadata.type}
                    </div>
                    <div class="overflow-hidden text-2xl font-bold">
                      {post.metadata.title}
                    </div>
                  </div>
                  <div class="mt-3 text-sm text-white">
                    <FormattedDate date={post.metadata.pubDate} />
                  </div>
                </div>
              </a>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </section>
</main>
