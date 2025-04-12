<script>
  let { children, isWide=true } = $props()
</script>

<div class="pad border-b border-b-gray-light">
  <div class="{isWide ? 'wide-container' : 'container'}">
    {@render children?.()}
  </div>
</div>