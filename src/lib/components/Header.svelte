<script lang="ts">
  import NavbarDropdown from "$lib/components/NavbarDropdown.svelte";
</script>

<nav
  class="bg-popover text-foreground select-none max-md:fixed max-md:bottom-0 max-md:z-50 max-md:w-full">
  <div
    class="mx-auto max-w-7xl px-4 pt-[env(safe-area-inset-top)] pr-[max(2rem,env(safe-area-inset-right))] pb-[env(safe-area-inset-bottom)] pl-[max(0.5rem,env(safe-area-inset-left))] sm:px-6 lg:px-8">
    <div class="flex h-16 flex-row justify-between">
      <div class="flex shrink-0 items-center">
        <NavbarDropdown />
      </div>
    </div>
  </div>
</nav>
