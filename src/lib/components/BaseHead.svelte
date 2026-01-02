<script lang="ts">
  import { page } from "$app/state";
  import { SITE_URL } from "$lib/consts";

  export interface Props {
    title: string;
    description: string;
    image?: string;
  }

  const canonicalURL = new URL(page.url.pathname, SITE_URL);

  const { title, description, image = "/assets/images/ogBanner.png?v=2" }: Props = $props();
</script>

<svelte:head>
  <!-- Canonical URL -->
  <link rel="canonical" href={canonicalURL.href} />

  <!-- Primary Meta Tags -->
  <title>{title} — Tonantzintla Newsroom</title>
  <!-- <ClientRouter /> -->
  <meta name="title" content={title} />
  <meta name="description" content={description} />

  <!-- Open Graph -->
  <meta property="og:url" content={page.url.href} />
  <meta property="og:title" content={`${title} — Tonantzintla Newsroom`} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:image:secure_url" content={image} />
  <meta property="og:image:alt" content={title} />
  {#if image && image !== "/assets/images/ogBanner.png?v=2"}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:url" content={page.url.href} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
</svelte:head>
