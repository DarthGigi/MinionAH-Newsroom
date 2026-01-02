<script lang="ts">
  import { resolve } from "$app/paths";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
  import CircleHelp from "@lucide/svelte/icons/circle-help";
  import Code from "@lucide/svelte/icons/code";
  import House from "@lucide/svelte/icons/house";
  import Pickaxe from "@lucide/svelte/icons/pickaxe";
  import Scale from "@lucide/svelte/icons/scale";
  import Users from "@lucide/svelte/icons/users";

  let menuDropdownOpen = $state(false);
</script>

<DropdownMenu.Root bind:open={menuDropdownOpen}>
  <DropdownMenu.Trigger class="hover:bg-popover group flex items-center gap-2 rounded-md px-4 py-2">
    <img
      class="pointer-events-none block h-8 w-auto transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-45 max-md:group-data-[state=open]:-rotate-45"
      src="/assets/favicons/favicon.svg"
      alt="Tonantzintla Logo" />
    <h1>Newsroom</h1>
    <ChevronDown class="h-4 w-4" />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="border-border bg-popover w-44">
    <DropdownMenu.Group>
      <DropdownMenu.Item class="data-highlighted:bg-background gap-1.5 hover:cursor-pointer">
        {#snippet child({ props })}
          <a href={resolve("/")} {...props}>
            <House class="size-4" />
            Home
          </a>
        {/snippet}
      </DropdownMenu.Item>
      <DropdownMenu.Separator class="bg-border" />
      <DropdownMenu.Item class="data-highlighted:bg-background gap-1.5 hover:cursor-pointer">
        {#snippet child({ props })}
          <a href="https://minionah.com" {...props}>
            <Pickaxe class="size-4" />MinionAH
          </a>
        {/snippet}
      </DropdownMenu.Item>
      <DropdownMenu.Item class="data-highlighted:bg-background gap-1.5 hover:cursor-pointer">
        {#snippet child({ props })}
          <a href="https://discord.minionah.com" target="_blank" {...props}>
            <Users class="size-4" />Community
          </a>
        {/snippet}
      </DropdownMenu.Item>
      <DropdownMenu.Separator class="bg-border" />
      <DropdownMenu.Item class="data-highlighted:bg-background gap-1.5 hover:cursor-pointer">
        {#snippet child({ props })}
          <a href={resolve("/[slug]", { slug: "minionah" })} {...props}>
            <CircleHelp class="size-4" />About
          </a>
        {/snippet}
      </DropdownMenu.Item>
      <DropdownMenu.Item class="data-highlighted:bg-background gap-1.5 hover:cursor-pointer">
        {#snippet child({ props })}
          <a href="https://github.com/DarthGigi/MinionAH" target="_blank" {...props}>
            <Code class="size-4" /> GitHub
          </a>
        {/snippet}
      </DropdownMenu.Item>
      <DropdownMenu.Separator class="bg-border" />
      <DropdownMenu.Item class="data-highlighted:bg-background gap-1.5 hover:cursor-pointer">
        {#snippet child({ props })}
          <a href={resolve("/[slug]", { slug: "privacy-policy" })} {...props}>
            <Scale class="size-4" />Privacy Policy
          </a>
        {/snippet}
      </DropdownMenu.Item>
      <DropdownMenu.Item class="data-highlighted:bg-background gap-1.5 hover:cursor-pointer">
        {#snippet child({ props })}
          <a href={resolve("/[slug]", { slug: "terms-of-service" })} {...props}>
            <Scale class="size-4" />Terms of Service
          </a>
        {/snippet}
      </DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
