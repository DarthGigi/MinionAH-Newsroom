<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import { getMediaType } from "$lib/utilities";
  export let before: string;
  export let after: string;
</script>

<Tabs.Root value="before" class="p-4 flex-shrink h-[30rem] rounded-lg bg-neutral-950 justify-between flex flex-col">
  <Tabs.List class="mx-auto">
    <Tabs.Trigger value="before" class="data-[state=active]:bg-neutral-700">Before</Tabs.Trigger>
    <Tabs.Trigger value="after" class="data-[state=active]:bg-neutral-700">After</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="before" class="h-full">
    <div class="flex items-center h-full">
      {#if getMediaType(before) === 'image'}
        <img src={before} class="rounded-lg m-0 pointer-events-none max-h-[24.5rem] !w-auto mx-auto" alt="Before"/>
      {:else if getMediaType(before) === 'video'}
        <video class="rounded-lg m-0 pointer-events-none max-h-[24.5rem] !w-auto mx-auto" autoPlay={true} muted={true} loop={true}>
          <source src={before} type={`video/${before.split('.').pop()}`}/>
        </video>
      {:else}
        <p>Unsupported media type</p>
      {/if}
    </div>
  </Tabs.Content>
  <Tabs.Content value="after" class="h-full">
    <div class="flex items-center h-full">
      {#if getMediaType(after) === 'image'}
        <img src={after} class="rounded-lg m-0 pointer-events-none max-h-[24.5rem] !w-auto mx-auto" alt="After"/>
      {:else if getMediaType(after) === 'video'}
        <video class="rounded-lg m-0 pointer-events-none max-h-[24.5rem] !w-auto mx-auto" autoPlay={true} muted={true} loop={true}>
          <source src={after} type={`video/${after.split('.').pop()}`}/>
        </video>
      {:else}
        <p>Unsupported media type</p>
      {/if}
    </div>
  </Tabs.Content>
</Tabs.Root>