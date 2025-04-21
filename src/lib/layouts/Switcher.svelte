<script>
  let { 
    children, 
    element="div", 
    threshold="var(--spacing-text-measure)",
    gapK="8"
  } = $props()
</script>

<svelte:element this={element} 
  class="switcher" 
  style:--threshold={threshold} 
  style:--gap="calc(var(--spacing) * {gapK})"
>
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