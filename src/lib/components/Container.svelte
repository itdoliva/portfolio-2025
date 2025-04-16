<script>
  import Box from "$lib/layouts/Box.svelte";
	import Center from "$lib/layouts/Center.svelte";
  
  let { children } = $props()
</script>

<Box>
  <Center>
    {@render children?.()}
  </Center>
</Box>