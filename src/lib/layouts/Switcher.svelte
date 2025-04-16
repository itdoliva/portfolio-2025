<script>
  let { 
    children, 
    element="div", 
    threshold="var(--spacing-text-measure)",
    gap="calc(var(--spacing) * 8)"
  } = $props()
</script>

<svelte:element this={element} class="switcher" style:--threshold={threshold} style:--gap={gap}>
  {@render children?.()}
</svelte:element>

<style>
  .switcher {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--gap);
  }

  .switcher > :global(*) {
    flex-grow: 1;
    flex-basis: calc((var(--threshold) - 100%) * 999);
  }
</style>