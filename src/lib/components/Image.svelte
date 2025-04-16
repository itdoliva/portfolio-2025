<script>
	import Box from "$lib/layouts/Box.svelte";
	import Frame from "$lib/layouts/Frame.svelte";

  let { srcset=[], alt, mimeType="image/webp", noBorder=false } = $props()
  
  let width = $state(0)

  let src = $derived.by(() => {
    if (!width || !srcset.length) { 
      return null
    }

    for (let i=0; i<srcset.length; i++) {
      if (width <= srcset[i].width / window.devicePixelRatio) {
        return srcset[i]
      }
      else if (i === srcset.length - 1) {
        return srcset[i]
      }
    }
  })

</script>

<Frame bind:width {noBorder}>
  {#if src}
    <img loading="lazy" src={src.href} {alt} type={mimeType} />
  {/if}
</Frame>