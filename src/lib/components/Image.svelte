<script lang="ts">
  import Box from "$lib/layouts/Box.svelte";
  import Frame from "$lib/layouts/Frame.svelte";

  let { 
    srcset = [], 
    alt, 
    noBorder = false 
  }: { 
    srcset: Array<{ href: string; width: number, height: number }>, 
    alt?: string, 
    noBorder: boolean 
  } = $props()
  
  let width = $state(0)

  let src = $derived.by(() => {
    if (!width || !srcset.length) { 
      return null
    }

    if (srcset.length === 1) {
      return srcset[0]
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
    <img loading="lazy" src={src.href} {alt} style="aspect-ratio: {src.width/src.height};"/>
  {/if}
</Frame>