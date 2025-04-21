<script>
  let { children, justify="center", align="center" } = $props()
</script>

{#if children}
  <div class="flex flex-wrap gap-8" style:justify-content={justify} style:align-items={align}>
    {@render children()}
  </div>
{/if}