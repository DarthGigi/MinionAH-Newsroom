<script lang="ts">
  import { page } from "$app/state";
  import { cn } from "$lib/utils";

  const url = $derived(page.url.pathname);
</script>

<footer class="text-accent p-4 text-center">
  <div class="divide-accent mb-2 flex justify-center divide-x">
    <a
      href="https://minionah.com"
      target="_blank"
      rel="noopener"
      class="hover:text-muted-foreground px-4 underline-offset-2 transition-colors duration-300"
      >MinionAH</a>
    <a
      href="/privacy-policy"
      class={cn(
        "hover:text-muted-foreground px-4 underline-offset-2 transition-colors duration-300",
        { underline: url === "/privacy-policy" }
      )}>Privacy Policy</a>
    <a
      href="/terms-of-service"
      class={cn(
        "hover:text-muted-foreground px-4 underline-offset-2 transition-colors duration-300",
        { underline: url === "/terms-of-service" }
      )}>Terms of Service</a>
  </div>
  &copy; {new Date().getFullYear()} MinionAH. All rights reserved.
</footer>
