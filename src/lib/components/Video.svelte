<script>
	import Frame from "$lib/layouts/Frame.svelte";

  let { 
    title,
    videoId,
    width="528",
    height="939",
    aspectRatio = '9/16',
    maxWidth = '100%'
  } = $props()

  const parameters = new URLSearchParams({ 
    autoplay: 1,
    playlist: videoId,
    loop: 1,
    disablekb: 1,
    controls: 0,
    fs: 0,
    })
</script>

<div style:--max-width={maxWidth} class="mx-auto">
  <Frame {aspectRatio}>
    <iframe 
      {title}
      {width}
      {height}
      src="https://www.youtube.com/embed/{videoId}?{parameters.toString()}" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen 
    ></iframe>
  </Frame>
</div>

<style>
  div {
    max-inline-size: var(--max-width);
  }
</style>
