<script>
	import Container from "./Container.svelte";

  let { children } = $props()

  let width = $state(0)
</script>  

<Container>
  <div bind:clientWidth={width} class="grid gap-0 md:gap-8 grid-cols-1 md:grid-cols-3">
    {@render children?.()}
  </div>
</Container>
