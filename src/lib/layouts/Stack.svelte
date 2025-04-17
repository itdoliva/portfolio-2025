<script>
  let { 
    children, 
    borderWidth=0,
    space=0,
    element="section"
  } = $props()
</script>

<svelte:element this={element} class="stack" style:--space={space+'px'} style:--border-width={borderWidth+'px'}>
  {@render children?.()}
</svelte:element>

<style>
  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .stack > :global(*) {
    margin-block: 0;
    border-block-end: var(--border-width) solid var(--color-gray-light);
  }

  .stack > :global(* + *) {
    margin-block-start: var(--space);
  }

  .stack > :global(:is(h1, h2, h3, h4, h5, p) + p) {
    margin-block-start: calc(var(--leading-tight) * 1rem);
  }
</style>