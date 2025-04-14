<script>
  let { srcset=[], alt, mimeType="image/webp", rounded=true, pad=false } = $props()
  
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

<div bind:clientWidth={width} class="{pad ? 'pad' : ''}">

  {#if src}
    <figure class="{rounded ? 'rounded-lg overflow-hidden border border-gray' : ''}">
      <img loading="lazy" src={src.href} {alt} type={mimeType} />
    </figure>
  {/if}

</div>