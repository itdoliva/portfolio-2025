<script>
  let { src480, src768, src1280, alt, mimeType="image/webp", rounded=true } = $props()
  
  let width = $state(0)

  let src = $derived.by(() => {
    if (!width || !src480 || !src768 || !src1280) {
      return null
    }

    if (width <= 480) {
      return src480
    } else if (width <= 768) {
      return src768
    } else {
      return src1280
    }
  })

</script>

<div bind:clientWidth={width}>

  <figure class="{rounded ? 'rounded-lg overflow-hidden border border-gray' : ''}">
    {#if src}
      <img {src} {alt} type={mimeType} />
    {/if}
  </figure>

</div>