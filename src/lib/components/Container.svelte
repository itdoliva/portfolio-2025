<script>
  import Box from "$lib/layouts/Box.svelte";
	import Center from "$lib/layouts/Center.svelte";
  
  let { children, padding='normal', intrinsicCentering=false } = $props()
</script>

<Box {padding}>
  <Center intrinsic={intrinsicCentering}>
    {@render children?.()}
  </Center>
</Box>