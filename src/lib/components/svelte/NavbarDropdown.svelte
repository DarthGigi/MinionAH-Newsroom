<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import CircleHelp from "lucide-svelte/icons/circle-help";
  import Code from "lucide-svelte/icons/code";
  import House from "lucide-svelte/icons/house";
  import Pickaxe from "lucide-svelte/icons/pickaxe";
  import Scale from "lucide-svelte/icons/scale";
  import Users from "lucide-svelte/icons/users";

  let menuDropdownOpen = false;
</script>

<DropdownMenu.Root bind:open={menuDropdownOpen}>
  <DropdownMenu.Trigger class="flex items-center gap-2 rounded-md px-4 py-2 hover:bg-popover">
    <img class="pointer-events-none block h-8 w-auto transition-transform duration-300 ease-in-out" src="/assets/favicons/favicon.png" alt="MinionAH Logo" class:rotate-45={menuDropdownOpen} class:max-md:-rotate-45={menuDropdownOpen} />
    <h1>Newsroom<span class="sr-only">: The Auction House for SkyBlock Minions</span></h1>
    <ChevronDown class="h-4 w-4" />
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-44 border-border bg-popover" transitionConfig={{ duration: 300 }}>
    <DropdownMenu.Group>
      <DropdownMenu.Item class="gap-1.5 hover:cursor-pointer data-[highlighted]:bg-background" href="/">
        <House class="size-4" />Home
      </DropdownMenu.Item>
      <DropdownMenu.Separator class="bg-border" />
      <DropdownMenu.Item class="gap-1.5 hover:cursor-pointer data-[highlighted]:bg-background" href="https://minionah.com">
        <Pickaxe class="size-4" />MinionAH
      </DropdownMenu.Item>
      <DropdownMenu.Item target="_blank" class="gap-1.5 hover:cursor-pointer data-[highlighted]:bg-background" href="https://discord.minionah.com">
        <Users class="size-4" />Community
      </DropdownMenu.Item>
      <DropdownMenu.Separator class="bg-border" />
      <DropdownMenu.Item class="gap-1.5 hover:cursor-pointer data-[highlighted]:bg-background" href="/minionah/">
        <CircleHelp class="size-4" />About
      </DropdownMenu.Item>
      <DropdownMenu.Item target="_blank" class="gap-1.5 hover:cursor-pointer data-[highlighted]:bg-background" href="https://github.com/DarthGigi/MinionAH">
        <Code class="size-4" /> GitHub
      </DropdownMenu.Item>
      <DropdownMenu.Separator class="bg-border" />
      <DropdownMenu.Item class="gap-1.5 hover:cursor-pointer data-[highlighted]:bg-background" href="/privacy-policy">
        <Scale class="size-4" />Privacy Policy
      </DropdownMenu.Item>
      <DropdownMenu.Item class="gap-1.5 hover:cursor-pointer data-[highlighted]:bg-background" href="/terms-of-service">
        <Scale class="size-4" />Terms of Service
      </DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu.Root>
