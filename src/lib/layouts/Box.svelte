<script>
  let { children, padding="normal", element='div' } = $props()
</script>

<svelte:element this={element} class="box {padding === 'small' ? 'pad-sm' : ''} {padding === 'normal' ? 'pad-md' : ''}">
  {@render children?.()}
</svelte:element>

<style>
  .box {
    display: block;
  }
</style>
