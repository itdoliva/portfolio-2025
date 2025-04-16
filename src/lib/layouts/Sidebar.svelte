<script>
  let { 
    children,
    sideWidth = '25%',
    contentMin = 0,
    space = 0,
  } = $props()
</script>

<div 
  class="with-sidebar"
  style:--side-width={sideWidth}
  style:--content-min={contentMin}
  style:--space={space}
>
  {@render children?.()}
</div>

<style>
  .with-sidebar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space);
  }

  .with-sidebar > :global(:first-child) {
    inline-size: var(--side-width);
    max-inline-size: 380px;
    flex-grow: 1;
  }

  .with-sidebar > :global(:last-child) {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: var(--content-min);
  }
</style>