<script>
  let { 
    children, 
    aspectRatio="auto", 
    element='figure', 
    noBorder=false, 
    width=$bindable() 
  } = $props()
</script>

<svelte:element 
  this={element} 
  class="frame {!noBorder ? 'rounded-sm md:rounded-lg border border-gray' : ''}" 
  style:--aspect-ratio={aspectRatio}
  bind:clientWidth={width}
>
  {@render children?.()}
</svelte:element>

<style>
  .frame {
    display: block;
    overflow: hidden;
    aspect-ratio: var(--aspect-ratio);

    /* For cropping and centering children elements that are not img or video */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .frame > :global(img),
  .frame > :global(video)  {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>