<script lang="ts">
  let {
    metadata,
    children
  }: {
    metadata: Record<string, unknown>;
    children: any;
  } = $props();
</script>

<article class="prose">
  {@render children?.()}
</article>
