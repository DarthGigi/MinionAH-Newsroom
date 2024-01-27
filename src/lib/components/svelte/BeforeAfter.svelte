<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import { getMediaType } from "$lib/utilities";
  export let before: string;
  export let after: string;
</script>

<Tabs.Root value="before" class="flex h-[30rem] flex-shrink flex-col justify-between rounded-lg bg-neutral-950 p-4">
  <Tabs.List class="mx-auto">
    <Tabs.Trigger value="before" class="data-[state=active]:bg-neutral-700">Before</Tabs.Trigger>
    <Tabs.Trigger value="after" class="data-[state=active]:bg-neutral-700">After</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="before" class="h-full">
    <div class="flex h-full items-center">
      {#if getMediaType(before) === "image"}
        <img src={before} class="pointer-events-none m-0 mx-auto max-h-[24.5rem] !w-auto rounded-lg" alt="Before" />
      {:else if getMediaType(before) === "video"}
        <video class="pointer-events-none m-0 mx-auto max-h-[24.5rem] !w-auto rounded-lg" autoPlay={true} muted={true} loop={true}>
          <source src={before} type={`video/${before.split(".").pop()}`} />
        </video>
      {:else}
        <p>Unsupported media type</p>
      {/if}
    </div>
  </Tabs.Content>
  <Tabs.Content value="after" class="h-full">
    <div class="flex h-full items-center">
      {#if getMediaType(after) === "image"}
        <img src={after} class="pointer-events-none m-0 mx-auto max-h-[24.5rem] !w-auto rounded-lg" alt="After" />
      {:else if getMediaType(after) === "video"}
        <video class="pointer-events-none m-0 mx-auto max-h-[24.5rem] !w-auto rounded-lg" autoPlay={true} muted={true} loop={true}>
          <source src={after} type={`video/${after.split(".").pop()}`} />
        </video>
      {:else}
        <p>Unsupported media type</p>
      {/if}
    </div>
  </Tabs.Content>
</Tabs.Root>
