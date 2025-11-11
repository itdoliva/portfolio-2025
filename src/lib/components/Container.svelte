<script>
  import Box from "$lib/components/layout/box/Box.svelte";
	import Center from "$lib/components/layout/center/Center.svelte";
  
  let { children, padding='normal', intrinsicCentering=false } = $props()
</script>

<Box {padding}>
  <Center intrinsic={intrinsicCentering}>
    {@render children?.()}
  </Center>
</Box>