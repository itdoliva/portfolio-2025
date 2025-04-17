<script>
  let { children, element="div" } = $props()
</script>

<svelte:element this={element} class="center-l">
  {@render children?.()}
</svelte:element>

<style>
  .center-l {
  }
</style>