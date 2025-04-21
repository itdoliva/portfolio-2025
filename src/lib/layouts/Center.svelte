<script>
  let { children, element="div", intrinsic=false } = $props()
</script>

<svelte:element this={element} class="center-l {intrinsic ? 'flex flex-col items-center justify-center' : ''}">
  {@render children?.()}
</svelte:element>