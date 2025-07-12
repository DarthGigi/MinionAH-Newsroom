<script lang="ts">
  import { dev } from "$app/environment";
  import BaseHead from "$lib/components/BaseHead.svelte";
  import TriangleAlert from "@lucide/svelte/icons/triangle-alert";
  import type { PageData } from "./$types.js";

  let { data }: { data: PageData } = $props();

  const Markdown = $derived(data.component);
  const doc = $derived(data.metadata);
</script>

<BaseHead title={doc.title} description={doc.description} image={doc.heroImage} />

{#if doc.isPublic === false && dev}
  <div class="sticky top-0 z-10 w-full">
    <p
      class="flex flex-row items-center justify-center gap-2 bg-amber-700/70 py-2 text-lg font-semibold text-white">
      <TriangleAlert />
      Unpublished Post!
    </p>
  </div>
{/if}

<Markdown />
