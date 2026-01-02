<script lang="ts">
  import { resolve } from "$app/paths";
  import BaseHead from "$lib/components/BaseHead.svelte";
  import FormattedDate from "$lib/components/FormattedDate.svelte";
  import { Button } from "$lib/components/ui/button";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import * as Popover from "$lib/components/ui/popover";
  import { POST_TYPES, PROJECTS, SITE_DESCRIPTION, SITE_TITLE } from "$lib/consts";
  import { cn } from "$lib/utils";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
  import X from "@lucide/svelte/icons/x";
  import { SvelteSet } from "svelte/reactivity";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  const selectedProjects = new SvelteSet<string>();
  const selectedTypes = new SvelteSet<string>();

  function toggleProject(project: string) {
    if (selectedProjects.has(project)) {
      selectedProjects.delete(project);
    } else {
      selectedProjects.add(project);
    }
  }

  function toggleType(type: string) {
    if (selectedTypes.has(type)) {
      selectedTypes.delete(type);
    } else {
      selectedTypes.add(type);
    }
  }

  const filteredPosts = $derived(
    data.posts.filter((post) => {
      const matchesProject =
        selectedProjects.size === 0 ||
        (post.metadata.project && selectedProjects.has(post.metadata.project));
      const matchesType = selectedTypes.size === 0 || selectedTypes.has(post.metadata.type);
      return matchesProject && matchesType;
    })
  );

  const projectLabel = $derived(
    selectedProjects.size === 0
      ? "All Projects"
      : selectedProjects.size === 1
        ? [...selectedProjects][0]
        : `${selectedProjects.size} Projects`
  );

  const typeLabel = $derived(
    selectedTypes.size === 0
      ? "All Types"
      : selectedTypes.size === 1
        ? [...selectedTypes][0]
        : `${selectedTypes.size} Types`
  );
</script>

<BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />

<main class="mt-4 p-4 text-left leading-6 tracking-tight">
  <section class="mt-0 overflow-hidden pb-20 md:px-10">
    <div class="mx-auto max-w-84 leading-6 tracking-tight sm:max-w-92 md:max-w-173 xl:max-w-245">
      <h2 class="mb-6 text-3xl font-bold tracking-normal">Latest News</h2>

      <div class="mb-8 flex flex-wrap items-center gap-3">
        <Popover.Root>
          <Popover.Trigger>
            {#snippet child({ props })}
              <Button variant="outline" {...props} class="min-w-36 justify-between">
                {projectLabel}
                <ChevronDown class="ml-2 size-4" />
              </Button>
            {/snippet}
          </Popover.Trigger>
          <Popover.Content class="w-48 p-2">
            <div class="flex flex-col gap-1">
              {#each PROJECTS as project (project)}
                <button
                  type="button"
                  class="hover:bg-accent flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
                  onclick={() => toggleProject(project)}>
                  <Checkbox checked={selectedProjects.has(project)} />
                  <span>{project}</span>
                </button>
              {/each}
            </div>
            {#if selectedProjects.size > 0}
              <div class="border-border mt-2 border-t pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  class="text-muted-foreground hover:text-foreground h-auto w-full justify-start px-2 py-1 text-xs"
                  onclick={() => selectedProjects.clear()}>
                  <X class="mr-1 size-3" />
                  Clear selection
                </Button>
              </div>
            {/if}
          </Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger>
            {#snippet child({ props })}
              <Button variant="outline" {...props} class="min-w-36 justify-between">
                {typeLabel}
                <ChevronDown class="ml-2 size-4" />
              </Button>
            {/snippet}
          </Popover.Trigger>
          <Popover.Content class="w-48 p-2">
            <div class="flex flex-col gap-1">
              {#each POST_TYPES as type (type)}
                <button
                  type="button"
                  class="hover:bg-accent flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
                  onclick={() => toggleType(type)}>
                  <Checkbox checked={selectedTypes.has(type)} />
                  <span>{type}</span>
                </button>
              {/each}
            </div>
            {#if selectedTypes.size > 0}
              <div class="border-border mt-2 border-t pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  class="text-muted-foreground hover:text-foreground h-auto w-full justify-start px-2 py-1 text-xs"
                  onclick={() => selectedTypes.clear()}>
                  <X class="mr-1 size-3" />
                  Clear selection
                </Button>
              </div>
            {/if}
          </Popover.Content>
        </Popover.Root>
      </div>

      {#if filteredPosts.length === 0}
        <div class="text-muted-foreground py-12 text-center">
          <p class="text-lg">No posts match the selected filters.</p>
        </div>
      {:else}
        <ul
          class="m-0 flex shrink-0 grow-0 items-stretch justify-center gap-4 p-0 text-left leading-6 tracking-tight [content:''] [flex-flow:row_wrap] lg:justify-between">
          {#each filteredPosts as post, index (post.slug)}
            {#if index === 0}
              <li
                class="bg-background hover:bg-popover relative m-0 block h-104 w-84 list-none overflow-hidden rounded-xl p-0 transition-colors duration-500 sm:h-114 sm:w-92 md:h-96 md:w-173 xl:h-138 xl:w-245">
                <a
                  href={resolve("/[slug]", { slug: post.slug })}
                  class="group bg-background relative block h-full w-full visited:no-underline hover:[text-decoration:none] hover:group-hover:[text-decoration:none]">
                  <img
                    src={post.metadata.heroImage}
                    alt="heroImage"
                    fetchpriority="high"
                    loading="eager"
                    class={cn(
                      "pointer-events-none z-0 h-full w-full overflow-hidden rounded-xl object-cover object-center transition-all duration-500 group-hover:scale-[1.03]",
                      post.metadata.classes
                    )} />
                  <div class="absolute bottom-0 z-20 w-full">
                    <div class="box-border flex w-full shrink-0 grow flex-col px-9 pb-9">
                      <div class="mb-3 flex flex-wrap gap-2">
                        {#if post.metadata.project}
                          <span
                            class="bg-primary/80 text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                            {post.metadata.project}
                          </span>
                        {/if}
                        <span
                          class="bg-secondary/80 text-secondary-foreground rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                          {post.metadata.type}
                        </span>
                      </div>
                      <div>
                        <div class="text-xl font-bold text-shadow-lg md:text-4xl">
                          {post.metadata.title}
                        </div>
                      </div>
                      <div class="mt-3 font-semibold text-white text-shadow-lg">
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
                  href={resolve("/[slug]", { slug: post.slug })}
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
                      <div class="mb-3 flex flex-wrap gap-2">
                        {#if post.metadata.project}
                          <span
                            class="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold">
                            {post.metadata.project}
                          </span>
                        {/if}
                        <span
                          class="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-semibold">
                          {post.metadata.type}
                        </span>
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
      {/if}
    </div>
  </section>
</main>
