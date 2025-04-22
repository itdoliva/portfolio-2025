<script>
  let { 
    children,
    sideOn = 'left',
    sideWidth = 'auto',
    sideMinWidth = '0',
    sideMaxWidth = "380px",
    contentMinWidth = 0,
    gapK = 8,
  } = $props();
</script>

<div 
  class="with-sidebar {sideOn} flex flex-wrap"
  style:--side-width={sideWidth}
  style:--side-max-width={sideMaxWidth}
  style:--side-min-width={sideMinWidth}
  style:--content-min-width={contentMinWidth}
  style:--gap="calc(var(--spacing) * {gapK})"
>
  {@render children?.()}
</div>

<style>
  .with-sidebar {
    gap: var(--gap);
  }

  .with-sidebar.left > :global(:first-child),
  .with-sidebar.right > :global(:last-child) {
    flex-basis: var(--side-width);
    min-inline-size: var(--side-min-width);
    max-inline-size: var(--side-max-width);
    flex-grow: 1;
  }

  .with-sidebar.left > :global(:last-child),
  .with-sidebar.right > :global(:first-child) {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: var(--content-min-width);
  }

</style>